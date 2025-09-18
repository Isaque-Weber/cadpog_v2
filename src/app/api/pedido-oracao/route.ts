import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
    try {
        const data = await req.json()

        // 🔹 Validação simples
        if (!data.nome || !data.pedido) {
            return NextResponse.json(
                { success: false, error: "Nome e pedido de oração são obrigatórios." },
                { status: 400 }
            )
        }

        let pedido
        try {
            // 🔹 Salvar no banco
            pedido = await prisma.pedidoOracao.create({
                data: {
                    nome: data.nome,
                    email: data.email || null,
                    telefone: data.telefone || null,
                    pedido: data.pedido,
                    tipo: data.tipo || "pessoal",
                },
            })
        } catch (dbErr: any) {
            console.error("❌ Erro ao salvar no banco:", dbErr)
            return NextResponse.json(
                { success: false, error: "Erro ao salvar no banco de dados." },
                { status: 500 }
            )
        }

        try {
            // 🔹 Configurar transporte
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT),
                secure: Number(process.env.SMTP_PORT) === 465,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            })

            // 🔹 Enviar para intercessão
            await transporter.sendMail({
                from: `"Pedidos de Oração" <${process.env.SMTP_USER}>`,
                to: "intercessao@seudominio.com",
                subject: `📩 Novo Pedido de Oração - ${data.tipo || "pessoal"}`,
                html: `
          <h2>Novo Pedido de Oração</h2>
          <p><strong>Nome:</strong> ${data.nome}</p>
          <p><strong>Email:</strong> ${data.email || "não informado"}</p>
          <p><strong>Telefone:</strong> ${data.telefone || "não informado"}</p>
          <p><strong>Tipo:</strong> ${data.tipo || "pessoal"}</p>
          <p><strong>Pedido:</strong> ${data.pedido}</p>
        `,
            })

            // 🔹 Enviar confirmação para o solicitante (se informou email)
            if (data.email) {
                await transporter.sendMail({
                    from: `"CADPOG" <${process.env.SMTP_USER}>`,
                    to: data.email,
                    subject: "🙏 Recebemos seu pedido de oração",
                    text: `Olá ${data.nome}, recebemos seu pedido de oração. Nossa equipe já está orando por você. Deus abençoe!`,
                    html: `
            <p>Olá <strong>${data.nome}</strong>,</p>
            <p>Recebemos seu pedido de oração e nossa equipe já está intercedendo por você.</p>
            <p><em>"A oração de um justo é poderosa e eficaz." (Tiago 5:16)</em></p>
            <p>Deus abençoe!</p>
            <p><strong>Equipe CADPOG</strong></p>
          `,
                })
            }
        } catch (mailErr: any) {
            console.error("❌ Erro ao enviar e-mail:", mailErr)
            // já foi salvo no BD → retorna sucesso parcial
            return NextResponse.json(
                {
                    success: true,
                    warning: "Pedido salvo, mas falha ao enviar e-mails.",
                    pedido,
                },
                { status: 207 }
            )
        }

        return NextResponse.json({ success: true, pedido })
    } catch (err: any) {
        console.error("❌ Erro inesperado:", err)
        return NextResponse.json(
            {
                success: false,
                error: "Erro inesperado no servidor",
                details:
                    process.env.NODE_ENV === "development" ? err.message : undefined,
            },
            { status: 500 }
        )
    }
}
