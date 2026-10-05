import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Retrieve the secret key from the secure environment variables on Vercel's server.
    // It is NEVER exposed to the client/browser!
    const accessKey = process.env.WEB3FORMS_KEY || "006bf5b2-1e10-4e97-8885-a3c8d29b5da7";
    
    formData.append("access_key", accessKey);
    formData.append("from_name", "All Veterans Matter");
    formData.append("subject", "New Message from All Veterans Matter");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: data.message || "Failed to submit form." },
        { status: response.status }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
