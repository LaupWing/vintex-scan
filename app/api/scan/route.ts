export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Missing OPENAI_API_KEY" }, { status: 500 });
  }

  const formData = await request.formData();
  const image = formData.get("image") as File | null;
  if (!image) {
    return Response.json({ error: "No image provided" }, { status: 400 });
  }

  const buffer = await image.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");
  const mimeType = image.type || "image/jpeg";

  const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o",
      max_tokens: 300,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "You are a vintage item valuation expert. Analyze the image and return ONLY valid JSON — no markdown, no explanation.",
        },
        {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: { url: `data:${mimeType};base64,${base64}` },
            },
            {
              type: "text",
              text: 'Identify this vintage item and estimate its current resale value based on real market data. Return this exact JSON structure: { "product": string, "category": string, "minValue": number, "maxValue": number, "confidence": "Low" | "Medium" | "High", "confidencePercent": number }',
            },
          ],
        },
      ],
    }),
  });

  if (!openaiRes.ok) {
    const err = await openaiRes.text();
    return Response.json({ error: err }, { status: openaiRes.status });
  }

  const data = await openaiRes.json();
  const content = data.choices?.[0]?.message?.content ?? "";

  try {
    return Response.json(JSON.parse(content));
  } catch {
    console.error("[VintexScan] parse error, raw content:", content);
    return Response.json({ error: "Failed to parse OpenAI response", raw: content }, { status: 500 });
  }
}
