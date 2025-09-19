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
            from: `"Fale Conosco" <${process.env.SMTP_USER}>`,
            to: "isaque.weber5@gmail.com", // Altere para o email real de destino
            subject: `Novo Contato - ${body.assunto}`,
            html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px;">
          <table width="100%" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e5e7eb;">
            <!-- Header -->
            <tr>
              <td style="padding: 20px; text-align: center;">
                <div style="background:#fff; display:inline-block; padding:16px; border-radius:50%; box-shadow:0 4px 10px rgba(0,0,0,0.2);">
                  <img src="cid:logo-cadpog" alt="Logo CADPOG" style="max-width:120px;" />
                </div>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding: 0 24px 24px 24px; color: #111827;">
                <h2 style="color: #1e293b; margin-bottom: 20px;">Nova Mensagem - Fale Conosco</h2>
                <p><strong>Nome:</strong> ${body.nome}</p>
                <p><strong>Email:</strong> ${body.email || "não informado"}</p>
                <p><strong>Telefone:</strong> ${body.telefone || "não informado"}</p>
                <p><strong>Assunto:</strong> ${body.assunto}</p>

                <div style="margin: 20px 0; padding: 15px; background: #f3f4f6; border-radius: 6px; color: #374151;">
                  <strong>Mensagem:</strong>
                  <p style="margin-top: 8px;">${body.mensagem}</p>
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
                from: `"CADPOG" <${process.env.SMTP_USER}>`,
                to: body.email,
                subject: "Recebemos sua mensagem",
                html: `
          <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px;">
            <table width="100%" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e5e7eb;">
              <!-- Header -->
              <tr>
                <td style="padding: 20px; text-align: center;">
                  <div style="background:#fff; display:inline-block; padding:16px; border-radius:50%; box-shadow:0 4px 10px rgba(0,0,0,0.2);">
                  <img src="cid:logo-cadpog" alt="Logo CADPOG" style="max-width:120px;" />
                </div>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding: 0 24px 24px 24px; color: #111827; text-align: center;">
                  <h2 style="color: #1e293b; margin-bottom: 16px;">Recebemos sua mensagem</h2>
                  <p>Olá <strong>${body.nome}</strong>,</p>
                  <p>Recebemos sua mensagem e em breve entraremos em contato.</p>

                  <div style="margin: 20px 0; padding: 15px; background: #f3f4f6; border-radius: 6px; color: #374151; text-align: left;">
                    <strong>Assunto:</strong> ${body.assunto}<br/>
                    <strong>Sua mensagem:</strong>
                    <p style="margin-top: 8px;">${body.mensagem}</p>
                  </div>

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
                        path: "./public/img/logo-cadpog-removebg-preview.png", // garante que o arquivo exista nesse path
                        cid: "logo-cadpog", // ID que é referenciado no src="cid:logo-cadpog"
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
