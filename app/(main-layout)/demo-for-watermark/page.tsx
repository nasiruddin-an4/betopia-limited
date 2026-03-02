/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function page() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [imageSrc, setImageSrc] = useState<string | null>(null);

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Draw image + watermark on canvas
  const drawWatermarkedImage = () => {
    if (!imageSrc || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new window.Image();
    img.src = imageSrc;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw image
      ctx.drawImage(img, 0, 0);

      // Watermark text
      ctx.font = "bold 48px Arial";
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      ctx.textAlign = "right";
      ctx.fillText("Betopia", canvas.width - 40, canvas.height - 40);
    };
  };

  // Download image
  const handleDownload = () => {
    if (!canvasRef.current) return;

    const link = document.createElement("a");
    link.download = "watermarked-image.png";
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-6 md:p-10">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Image Watermark Tool
        </h1>

        {/* Upload Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-6 py-3 bg-[#FF9500] text-white rounded-xl font-medium hover:bg-orange-600 transition"
          >
            Upload Image
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>

        {/* Preview */}
        {imageSrc && (
          <>
            <div className="relative w-full flex justify-center mb-6">
              <div className="relative border rounded-xl overflow-hidden">
                <Image
                  src={imageSrc}
                  alt="Preview"
                  width={500}
                  height={300}
                  className="object-contain"
                  onLoadingComplete={drawWatermarkedImage}
                />

                {/* Watermark Overlay (Preview only) */}
                <span className="absolute bottom-4 right-4 text-white text-xl font-bold opacity-70 select-none">
                  Betopia
                </span>
              </div>
            </div>

            {/* Hidden Canvas */}
            <canvas ref={canvasRef} className="hidden" />

            {/* Download Button */}
            <div className="flex justify-center">
              <button
                onClick={handleDownload}
                className="px-8 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition"
              >
                Download Image
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
