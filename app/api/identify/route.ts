import { NextRequest, NextResponse } from "next/server";
import { demoButterflyResult, demoPlantResult } from "@/lib/demo-data";

const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const mode = form.get("mode");
  const image = form.get("image");
  const zip = form.get("zip");

  if (mode !== "butterfly" && mode !== "plant") {
    return NextResponse.json({ error: "Invalid identification mode." }, { status: 400 });
  }

  if (typeof zip === "string" && zip.length > 10) {
    return NextResponse.json({ error: "Invalid ZIP/postal code." }, { status: 400 });
  }

  if (!(image instanceof File) || !image.type.startsWith("image/")) {
    return NextResponse.json({ error: "A valid image is required." }, { status: 400 });
  }

  if (image.size > MAX_UPLOAD_BYTES) {
    return NextResponse.json({ error: "Image is too large. Maximum size is 10 MB." }, { status: 413 });
  }

  // DEMO MODE ONLY.
  // Replace this section with server-side adapters for your chosen providers.
  // Do not expose provider secret keys to the browser.
  // Recommended production sequence:
  // 1. Send the image server-side to the relevant image classifier.
  // 2. Normalize the returned scientific name against your taxonomy table.
  // 3. Query YOUR curated host_relationship table.
  // 4. Return sourced relationships plus classifier confidence to the browser.
  // 5. Delete temporary image data unless the privacy policy explicitly requires retention.

  return NextResponse.json(mode === "butterfly" ? demoButterflyResult : demoPlantResult);
}
