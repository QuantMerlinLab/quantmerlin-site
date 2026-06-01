import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, email } = await req.json();

    // Notification pour QuantMerlin
    await resend.emails.send({
      from: 'QuantMerlin Analytics <contact@quantmerlinanalytics.com>',
      to: process.env.CONTACT_EMAIL!,
      subject: 'Nouvelle demande Version Exclusive',
      html: `
        <h2>Nouvelle inscription</h2>
        <p><strong>Prénom :</strong> ${firstName}</p>
        <p><strong>Email :</strong> ${email}</p>
      `,
    });

    // Email automatique au visiteur
    await resend.emails.send({
      from: 'QuantMerlin Analytics <contact@quantmerlinanalytics.com>',
      to: email,
      subject: 'Votre Manuel d’Intelligence Financière Premium',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto;padding:20px;">
          
          <h1 style="color:#061C3F;">
            QuantMerlin Analytics
          </h1>

          <h2>
            Bonjour ${firstName},
          </h2>

          <p>
            Merci pour votre intérêt envers QuantMerlin Analytics.
          </p>

          <p>
            Votre Version Exclusive du Manuel d'Intelligence Financière Premium est disponible.
          </p>

          <div style="margin:30px 0;">
            <a
              href="https://www.quantmerlinanalytics.com/pdf/QMA_Manuel_Intelligence_Financiere_PREMIUM.pdf"
              style="
                background:#FFD700;
                color:#061C3F;
                padding:14px 24px;
                border-radius:10px;
                text-decoration:none;
                font-weight:bold;
              "
            >
              📘 Télécharger la Version Exclusive
            </a>
          </div>

          <p>
            Bonne lecture et bienvenue dans l'univers QuantMerlin Analytics.
          </p>

        </div>
      `,
    });

    return Response.json({
      success: true
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false
      },
      {
        status: 500
      }
    );
  }
}