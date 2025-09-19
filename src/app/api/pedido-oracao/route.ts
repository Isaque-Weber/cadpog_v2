import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // ========== Email interno (intercessão) ==========
        await transporter.sendMail({
            from: `"Pedidos de Oração" <${process.env.SMTP_USER}>`,
            to: "isaque.weber5@gmail.com", // altere para email real
            subject: `📩 Novo Pedido de Oração - ${body.tipo || "Pessoal"}`,
            html: `
        <div style="font-family: Arial, sans-serif; background-color: #f3f4f6; padding: 30px;">
  <table width="100%" style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden;">
    
    <!-- Header com degradê -->
    <tr>
      <td style="background: linear-gradient(90deg,#ef4444,#f97316); text-align: center; padding: 30px;">
        <div style="background:#fff; display:inline-block; padding:16px; border-radius:50%; box-shadow:0 4px 10px rgba(0,0,0,0.2);">
          <img src="cid:logo-cadpog" alt="Logo CADPOG" style="max-width:120px;" />
        </div>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding: 30px; color: #111827;">
        <h2 style="font-size:22px; margin-bottom: 20px; text-align:center; color:#1e293b;">📖 Novo Pedido de Oração</h2>
        <p><strong>🙏 Nome:</strong> ${body.nome}</p>
        <p><strong>📧 Email:</strong> ${body.email || "não informado"}</p>
        <p><strong>📱 Telefone:</strong> ${body.telefone || "não informado"}</p>
        <p><strong>📌 Tipo:</strong> ${body.tipo || "Pessoal"}</p>

        <div style="margin-top: 25px; padding: 18px; background: #f0f9ff; border-left: 5px solid #0ea5e9; border-radius: 8px;">
          <strong>📝 Pedido:</strong>
          <p style="margin-top: 10px; line-height:1.6; font-size:15px; color:#1e3a8a;">${body.pedido}</p>
        </div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 16px; text-align: center; background-color: #f9fafb; color: #6b7280; font-size: 12px;">
        © ${new Date().getFullYear()} CADPOG - Todos os direitos reservados
      </td>
    </tr>
  </table>
</div>

      `,
            attachments: [
                {
                    filename: "logo-cadpog.png",
                    path: "./public/img/logo-cadpog-removebg-preview.png", // garante que o arquivo exista nesse path
                    cid: "logo-cadpog", // ID que é referenciado no src="cid:logo-cadpog"
                },
            ],
        });

        // ========== Email de resposta (para o remetente) ==========
        if (body.email) {
            await transporter.sendMail({
                from: `"Pedidos de Oração" <${process.env.SMTP_USER}>`,
                to: body.email,
                subject: "🙏 Recebemos seu pedido de oração",
                html: `
          <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px;">
            <table width="100%" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e5e7eb;">
              <!-- Header -->
              <tr>
                <td style="padding: 20px; text-align: center;">
                  <img src="cid:logo-cadpog" alt="Logo CADPOG" style="max-width: 120px;" />
                </td>
              </tr>
              <!-- Body -->
              <tr>
                <td style="padding: 0 24px 24px 24px; color: #111827; text-align: center;">
                  <h2 style="color: #1e293b; margin-bottom: 16px;">🙏 Recebemos seu pedido</h2>
                  <p>Olá <strong>${body.nome}</strong>,</p>
                  <p>O seu pedido de oração foi recebido com carinho e já está sendo incluído em nossa lista de intercessão.</p>
                  <div style="margin: 20px auto; padding: 15px; background: #ecfdf5; border-left: 5px solid #10b981; border-radius: 6px; max-width: 500px; text-align: left;">
                    <strong>📌 Seu pedido:</strong>
                    <p style="margin-top: 8px; line-height:1.5;">${body.pedido}</p>
                  </div>
                  <p style="margin-top: 16px; color: #374151; font-style: italic;">
                    “Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus.”<br/>
                    <em>Filipenses 4:6</em>
                  </p>
                  <p style="margin-top: 20px;">Que Deus abençoe grandemente sua vida 🙌</p>
                </td>
              </tr>
              <!-- Footer -->
              <tr>
                <td style="padding: 16px; text-align: center; background-color: #f9fafb; color: #6b7280; font-size: 12px;">
                  © ${new Date().getFullYear()} CADPOG - Todos os direitos reservados
                </td>
              </tr>
            </table>
          </div>
        `,
                attachments: [
                    {
                        filename: "logo-cadpog.png",
                        path: "./public/img/logo-cadpog-removebg-preview.png",
                        cid: "logo-cadpog",
                    },
                ],
            });
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Erro ao enviar email:", err);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
