import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: Number(process.env.SMTP_PORT) === 465, // true para 465, false para 587
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // tenta enviar um e-mail para o próprio remetente
        const info = await transporter.sendMail({
            from: `"Teste CADPOG" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER,
            subject: "🚀 Teste SMTP funcionando",
            text: "Se você recebeu isso, o SMTP está configurado corretamente!",
        });

        return NextResponse.json({
            success: true,
            messageId: info.messageId,
            response: info.response,
        });
    } catch (err: any) {
        console.error("❌ Erro SMTP:", err);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
}
