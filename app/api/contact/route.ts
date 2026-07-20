import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { ime, prezime, telefon, email, poruka } = await request.json();

    if (!ime || !prezime || !telefon || !poruka) {
      return NextResponse.json(
        { error: "Nedostaju obavezna polja." },
        { status: 400 }
      );
    }


    
    await resend.emails.send({
      from: "Kontakt forma <onboarding@resend.dev>",
      to: "petafipedjaradic@gmail.com",
      replyTo: email || undefined,
      subject: `Nova poruka sa sajta od ${ime} ${prezime}`,
      html: `
        <h2>Nova poruka sa kontakt forme</h2>
        <p><strong>Ime i prezime:</strong> ${ime} ${prezime}</p>
        <p><strong>Telefon:</strong> ${telefon}</p>
        <p><strong>Email:</strong> ${email || "Nije unet"}</p>
        <p><strong>Poruka:</strong></p>
        <p>${poruka}</p>
      `,
    });

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error("Greška pri slanju mejla:", error);
    return NextResponse.json(
      { error: "Došlo je do greške pri slanju poruke." },
      { status: 500 }
    );
  }
}