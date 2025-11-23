import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      productName = "Trading Account",
      amount = 2000,
      userId,
      userEmail,
      subscriptionId,
    } = body;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: userEmail,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: productName,
              metadata: {
                subscription_name: productName,
                user_id: userId || "",
              },
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      metadata: {
        subscription_name: productName,
        amount_paid: amount.toString(),
        user_id: userId || "",
        product_id: subscriptionId || "",
        env: process.env.NEXT_PUBLIC_ENVIRONMENT || "dev",
      },
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const error = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error }, { status: 500 });
  }
}
