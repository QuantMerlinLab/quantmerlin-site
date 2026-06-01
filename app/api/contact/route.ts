import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    console.log("FORMULAIRE CONTACT RECU", { name, email });

    const adminEmail = await resend.emails.send({
      from: 'QuantMerlin Analytics <contact@quantmerlinanalytics.com>',
      to: process.env.CONTACT_EMAIL!,
      subject: `Nouveau message de ${name}`,
      html: `
        <h2>Nouveau message</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    const autoReply = await resend.emails.send({
  from: 'QuantMerlin Analytics <contact@quantmerlinanalytics.com>',
  to: email,
  subject: 'Bienvenue chez QuantMerlin Analytics',
  html: `
    <div style="
      margin:0;
      padding:0;
      background-color:#f4f7fb;
      font-family:Arial, Helvetica, sans-serif;
    ">
      <div style="
        max-width:650px;
        margin:40px auto;
        background:#ffffff;
        border-radius:18px;
        overflow:hidden;
        box-shadow:0 10px 35px rgba(0,0,0,0.08);
      ">
        
        <!-- Header -->
        <div style="
          background:linear-gradient(135deg,#061C3F,#102B5C);
          padding:40px 30px;
          text-align:center;
        ">
          <h1 style="
            margin:0;
            color:#FFD700;
            font-size:30px;
            font-weight:800;
            letter-spacing:0.5px;
          ">
            QuantMerlin Analytics
          </h1>

          <p style="
            margin-top:12px;
            color:#ffffff;
            font-size:16px;
          ">
            Quantitative Research • Risk Analytics • Financial Intelligence
          </p>
        </div>

        <!-- Body -->
        <div style="padding:40px 32px;">
          <h2 style="
            color:#061C3F;
            font-size:24px;
            margin-bottom:20px;
          ">
            Bonjour ${name},
          </h2>

          <p style="
            color:#374151;
            font-size:16px;
            line-height:1.7;
          ">
            Merci d’avoir contacté <strong>QuantMerlin Analytics</strong>.
          </p>

          <p style="
            color:#374151;
            font-size:16px;
            line-height:1.7;
          ">
            Nous avons bien reçu votre message et notre équipe reviendra vers vous dans les plus brefs délais.
          </p>

          <p style="
            color:#374151;
            font-size:16px;
            line-height:1.7;
          ">
            QuantMerlin Analytics accompagne investisseurs, traders et professionnels de la finance avec des analyses quantitatives, solutions de gestion du risque et outils d’intelligence financière.
          </p>

          <div style="text-align:center; margin:35px 0;">
            <a
              href="https://quantmerlinanalytics.com"
              style="
                display:inline-block;
                background:#FFD700;
                color:#061C3F;
                text-decoration:none;
                padding:14px 28px;
                border-radius:12px;
                font-weight:700;
                font-size:16px;
              "
            >
              Découvrir QuantMerlin
            </a>
          </div>

          <div style="
            background:#f8fafc;
            border-left:4px solid #FFD700;
            padding:18px;
            border-radius:10px;
            margin-top:20px;
          ">
            <p style="
              margin:0;
              color:#374151;
              font-size:15px;
              line-height:1.6;
            ">
              📘 Un guide PDF premium sera bientôt disponible pour nos nouveaux contacts.
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="
          background:#061C3F;
          padding:28px;
          text-align:center;
        ">
          <p style="
            margin:0;
            color:#ffffff;
            font-size:15px;
            font-weight:600;
          ">
            QuantMerlin Analytics
          </p>

          <p style="
            margin:10px 0 0;
            color:#cbd5e1;
            font-size:14px;
          ">
            Yaoundé, Cameroon
          </p>

          <p style="
            margin:8px 0 0;
            color:#cbd5e1;
            font-size:14px;
          ">
            WhatsApp: +237 656 545 451
          </p>
        </div>
      </div>
    </div>
  `,
});

    if (adminEmail.error || autoReply.error) {
      return Response.json(
        { success: false },
        { status: 500 }
      );
    }

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);

    return Response.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}