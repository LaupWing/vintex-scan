"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

type ScanState = "idle" | "analyzing" | "result" | "error";

interface ScanResult {
  product: string;
  category: string;
  minValue: number;
  maxValue: number;
  confidence: "Low" | "Medium" | "High";
  confidencePercent: number;
}

/*
 * ─── REAL API INTEGRATION (OpenAI GPT-4o Vision) ────────────────────────────
 *
 * Replace this mock with a call to your own backend route (e.g. POST /api/scan).
 * Never call OpenAI directly from the browser — the API key would be exposed.
 *
 * ── 1. FRONTEND → YOUR BACKEND ───────────────────────────────────────────────
 *
 *   const formData = new FormData();
 *   formData.append("image", file);
 *
 *   const res = await fetch("/api/scan", { method: "POST", body: formData });
 *   return res.json();
 *
 * ── 2. YOUR BACKEND → OPENAI (POST https://api.openai.com/v1/chat/completions)
 *
 *   Headers:
 *     Authorization: Bearer YOUR_OPENAI_API_KEY
 *     Content-Type:  application/json
 *
 *   Body:
 *   {
 *     "model": "gpt-4o",
 *     "max_tokens": 300,
 *     "messages": [
 *       {
 *         "role": "system",
 *         "content": "You are a vintage item valuation expert. Analyze the image and return ONLY valid JSON — no markdown, no explanation."
 *       },
 *       {
 *         "role": "user",
 *         "content": [
 *           {
 *             "type": "image_url",
 *             "image_url": {
 *               "url": "data:image/jpeg;base64,<BASE64_STRING>"
 *             }
 *           },
 *           {
 *             "type": "text",
 *             "text": "Identify this vintage item and estimate its current resale value based on real market data. Return this exact JSON structure: { \"product\": string, \"category\": string, \"minValue\": number, \"maxValue\": number, \"confidence\": \"Low\" | \"Medium\" | \"High\", \"confidencePercent\": number }"
 *           }
 *         ]
 *       }
 *     ]
 *   }
 *
 * ── 3. OPENAI RESPONSE → PARSE ────────────────────────────────────────────────
 *
 *   const content = response.choices[0].message.content;
 *   const result = JSON.parse(content);
 *   // result shape matches ScanResult interface below
 *
 * ── 4. EXPECTED JSON RESPONSE FROM GPT-4o ────────────────────────────────────
 *
 *   {
 *     "product": "Leather jacket",
 *     "category": "Vintage",
 *     "minValue": 100,
 *     "maxValue": 250,
 *     "confidence": "High",
 *     "confidencePercent": 78
 *   }
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */
async function analyzeImage(_file: File): Promise<ScanResult> {
  await new Promise((res) => setTimeout(res, 2500));
  return {
    product: "Leather jacket",
    category: "Vintage",
    minValue: 100,
    maxValue: 250,
    confidence: "High",
    confidencePercent: 78,
  };
}

const CONFIDENCE = {
  High: { bar: "bg-green-500", text: "text-green-500" },
  Medium: { bar: "bg-amber-500", text: "text-amber-500" },
  Low: { bar: "bg-red-500", text: "text-red-500" },
};

function CameraIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="8.01" />
      <path d="M11 12h1v5h1" />
    </svg>
  );
}

function Step({ number, label, active }: { number: number; label: string; active: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 transition-colors duration-500 ${active ? "bg-gold text-white" : "bg-stone-200 text-stone-400"}`}>
        {number}
      </div>
      <span className={`text-[11px] tracking-[0.15em] font-semibold transition-colors duration-500 ${active ? "text-[#1a1a1a]" : "text-stone-400"}`}>
        {label}
      </span>
    </div>
  );
}

export default function Scanner() {
  const [state, setState] = useState<ScanState>("idle");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [displayedConfidence, setDisplayedConfidence] = useState(0);
  const [displayedMin, setDisplayedMin] = useState(0);
  const [displayedMax, setDisplayedMax] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Count-up + confidence bar animation when result arrives
  useEffect(() => {
    if (state !== "result" || !result) {
      setDisplayedConfidence(0);
      setDisplayedMin(0);
      setDisplayedMax(0);
      return;
    }

    // Slight delay so the bar renders at 0 first, then CSS transition kicks in
    const confTimer = setTimeout(() => setDisplayedConfidence(result.confidencePercent), 150);

    // Count up the price numbers
    const duration = 1200;
    const startTime = Date.now();
    let rafId: number;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplayedMin(Math.round(result.minValue * eased));
      setDisplayedMax(Math.round(result.maxValue * eased));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      clearTimeout(confTimer);
      cancelAnimationFrame(rafId);
    };
  }, [state, result]);

  const handleFile = useCallback(async (file: File) => {
    if (!file.type.startsWith("image/")) return;

    setImageUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(file);
    });
    setResult(null);
    setState("analyzing");

    try {
      const analysis = await analyzeImage(file);
      setResult(analysis);
      setState("result");
      toast.success("Scan complete!", {
        description: `${analysis.product} · €${analysis.minValue}–€${analysis.maxValue}`,
      });
    } catch {
      setState("error");
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    e.target.value = "";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleReset = useCallback(() => {
    setImageUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
    setResult(null);
    setState("idle");
  }, []);

  return (
    <>
      {/* Hero — hidden after upload */}
      {state === "idle" && (
        <section
          className={`bg-cream pt-24 pb-16 px-6 flex flex-col items-center text-center relative transition-colors duration-300 ${isDragging ? "bg-stone-100" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {isDragging && (
            <div className="absolute inset-4 border-2 border-dashed border-gold rounded-2xl pointer-events-none" />
          )}

          <h1 className="font-serif text-5xl md:text-[3.75rem] font-bold text-[#1a1a1a] leading-[1.1] max-w-2xl">
            Discover the{" "}
            <em className="text-gold not-italic">real</em> value
            <br />
            of your vintage item.
          </h1>
          <p className="mt-5 text-[#999] text-lg max-w-xs">
            Upload a photo and get an instant value estimate.
          </p>

          <Button
            onClick={() => fileInputRef.current?.click()}
            className="mt-10 bg-[#111111] hover:bg-[#2a2a2a] text-white text-[13px] tracking-[0.18em] font-medium px-14 rounded-xl w-full max-w-md h-auto py-5 gap-3"
          >
            <CameraIcon />
            UPLOAD PHOTO
          </Button>
          <p className="mt-4 text-[#bbb] text-sm">or drag and drop an image here</p>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleInputChange}
          />
        </section>
      )}

      {/* Result card — appears after upload, replaces hero */}
      {state !== "idle" && imageUrl && (
        <section className="bg-cream px-6 py-12 flex flex-col items-center slide-up">
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 max-w-4xl w-full overflow-hidden">
            {/* Steps */}
            <div className="flex items-center justify-center py-6 px-8 border-b border-stone-100 gap-2">
              <Step number={1} label="UPLOAD" active />
              <div className="flex-1 max-w-[72px] h-px bg-stone-200" />
              <Step number={2} label="ANALYZING" active={state === "analyzing" || state === "result"} />
              <div className="flex-1 max-w-[72px] h-px bg-stone-200" />
              <Step number={3} label="RESULT" active={state === "result"} />
            </div>

            {/* Body */}
            <div className="flex flex-col md:flex-row md:min-h-[420px]">
              {/* Image — stays visible throughout */}
              <div className="p-4 md:p-5 md:w-[52%] md:self-stretch flex flex-col">
                <div className="relative flex-1 rounded-xl overflow-hidden bg-stone-200 min-h-[280px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl}
                    alt="Uploaded item"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Analyzing overlay */}
                  <div className={`absolute inset-0 bg-black/10 flex items-center justify-center transition-opacity duration-500 ${state === "analyzing" ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    <div className="bg-white rounded-2xl px-8 py-6 shadow-2xl flex flex-col items-center gap-3 min-w-[180px]">
                      <div className="w-14 h-14 rounded-full border-4 border-stone-100 border-t-gold animate-spin" />
                      <div className="text-center">
                        <p className="font-semibold text-[#1a1a1a] text-[15px]">Analyzing image...</p>
                        <p className="text-stone-400 text-[13px] mt-0.5">Just a moment please</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right panel */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                {state === "analyzing" && (
                  <div className="space-y-3">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-9 w-44" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <div className="pt-6 space-y-2">
                      <Skeleton className="h-3 w-24" />
                      <Skeleton className="h-12 w-48" />
                      <Skeleton className="h-3 w-20" />
                    </div>
                    <div className="pt-6 space-y-2">
                      <Skeleton className="h-3 w-28" />
                      <Skeleton className="h-2 w-full rounded-full" />
                    </div>
                  </div>
                )}

                {state === "result" && result && (
                  <div className="slide-up">
                    <p className="text-[10px] tracking-[0.22em] text-stone-400 uppercase">Product</p>
                    <h2 className="font-serif text-[2rem] font-bold text-[#1a1a1a] mt-1 leading-tight">
                      {result.product}
                    </h2>
                    <Badge
                      variant="outline"
                      className="mt-3 px-3 py-1 rounded-full text-stone-600 border-stone-300 text-[13px] h-auto font-normal"
                    >
                      {result.category}
                    </Badge>

                    <div className="mt-8">
                      <p className="text-[10px] tracking-[0.22em] text-stone-400 uppercase">
                        Estimated Value
                      </p>
                      <p className="font-serif text-[2.6rem] font-bold text-[#1a1a1a] mt-1 leading-none tabular-nums">
                        €{displayedMin} – €{displayedMax}
                      </p>
                      <p className="text-stone-500 text-sm mt-2">Price range</p>
                    </div>

                    <div className="mt-8">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] tracking-[0.22em] text-stone-400 uppercase">
                          Confidence
                        </span>
                        <span className={`text-sm font-semibold ${CONFIDENCE[result.confidence].text}`}>
                          {result.confidence}
                        </span>
                      </div>
                      <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${CONFIDENCE[result.confidence].bar}`}
                          style={{ width: `${displayedConfidence}%` }}
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex gap-2.5 text-[12px] text-stone-400 border border-stone-100 rounded-xl p-3 leading-relaxed">
                      <InfoIcon />
                      <p>This is an AI estimate based on similar sold listings and market data.</p>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleReset}
                      className="mt-6 text-stone-400 hover:text-gold hover:bg-transparent px-0 h-auto text-sm"
                    >
                      ← Scan another item
                    </Button>
                  </div>
                )}

                {state === "error" && (
                  <div className="flex flex-col items-start gap-4 slide-up">
                    <p className="text-stone-500">Something went wrong. Please try again.</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleReset}
                      className="text-gold hover:text-gold/80 hover:bg-transparent px-0 h-auto"
                    >
                      ← Try again
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Hidden file input — accessible outside hero when needed */}
      {state !== "idle" && (
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleInputChange}
        />
      )}
    </>
  );
}
