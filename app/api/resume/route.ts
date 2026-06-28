import { NextResponse } from "next/server";
import { existsSync } from "fs";
import { join } from "path";

export async function GET() {
  const pdfPath = join(process.cwd(), "public", "Tanvin_Kheni_Full_Stack.pdf");

  if (existsSync(pdfPath)) {
    const { readFileSync } = await import("fs");
    const file = readFileSync(pdfPath);
    return new NextResponse(file, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Tanvin_Kheni_Full_Stack.pdf"',
        "Cache-Control": "public, max-age=3600",
      },
    });
  }

  // PDF not uploaded yet — redirect to LinkedIn
  return NextResponse.redirect(
    "https://linkedin.com/in/tanvin-kheni-56559622b",
    { status: 302 }
  );
}
