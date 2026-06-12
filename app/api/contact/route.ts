import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Configurar el transportador de Nodemailer
    // NOTA: Para Gmail, debes habilitar el acceso de apps menos seguras o usar una contraseña de aplicación
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'harton.node.ia@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD || '', // Añade tu contraseña de aplicación en el archivo .env
      },
    });

    // Contenido del correo
    const mailOptions = {
      from: email,
      to: 'harton.node.ia@gmail.com',
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Asunto:</strong> ${subject}</p>
          <hr style="margin: 20px 0; border: 1px solid #eee;">
          <h3>Mensaje:</h3>
          <p style="line-height: 1.6;">${message}</p>
        </div>
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Mensaje enviado con éxito' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json(
      { success: false, message: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}
