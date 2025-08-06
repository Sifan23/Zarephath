import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      selectedProduct,
      quantity,
      method,
      address,
      notes,
    } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // inserting into Supabase
    const { error } = await supabase.from("orders").insert([
      {
        full_name: fullName,
        email,
        phone,
        product: selectedProduct,
        quantity,
        method,
        address,
        notes,
      },
    ]);

    if (error) {
      console.error("❌ Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // sending email
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "sifanyg123@gmail.com",
      subject: "New Order Received",
      html: `
      <h3>New Order</h3>
      <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Product:</strong> ${selectedProduct}</li>
          <li><strong>Quantity:</strong> ${quantity}</li>
          <li><strong>Method:</strong> ${method}</li>
          <li><strong>Address:</strong> ${address}</li>
          <li><strong>Notes:</strong> ${notes}</li>
        </ul>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("❌ Route crashed:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
