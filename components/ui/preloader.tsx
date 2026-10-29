"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { PixelLoader } from "./pixel-loader";

export default function Preloader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const pixelWrapRef = useRef<HTMLDivElement>(null);
  const [isBuilt, setIsBuilt] = useState(false);

  // Kunci scroll saat loading
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Fallback safety timeout jika terjadi delay render canvas
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      setIsBuilt(true);
    }, 3000);

    return () => clearTimeout(safetyTimer);
  }, []);

  useEffect(() => {
    if (isBuilt && loaderRef.current && pixelWrapRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          if (loaderRef.current) {
            gsap.set(loaderRef.current, {
              pointerEvents: "none",
              display: "none",
            });
          }
          document.body.style.overflow = "";
        },
      });

      // 1. Animasi Pixel Loader membesar drastis dari kecil hingga menutupi seluruh layar (hitam jadi putih)
      tl.to(pixelWrapRef.current, {
        scale: 45,
        duration: 0.75,
        ease: "power2.inOut",
      })
      .to(
        loaderRef.current,
        {
          backgroundColor: "#ffffff",
          duration: 0.45,
          ease: "power2.inOut",
        },
        "-=0.4"
      )
      // 2. Sembunyikan pixel wrap saat layar sudah putih penuh agar bersih
      .set(pixelWrapRef.current, {
        opacity: 0,
      })
      // 3. Setelah full putih, layar terangkat ke atas dengan kurva lengkung bawah
      .to(
        loaderRef.current,
        {
          y: "-105%",
          borderBottomLeftRadius: "50% 25%",
          borderBottomRightRadius: "50% 25%",
          duration: 1.1,
          ease: "power3.inOut",
        },
        "+=0.05"
      );

      return () => {
        tl.kill();
      };
    }
  }, [isBuilt]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black shadow-2xl overflow-hidden select-none"
      style={{
        transform: "translateY(0%)",
        backgroundColor: "#000000",
        borderBottomLeftRadius: "0%",
        borderBottomRightRadius: "0%",
      }}
    >
      {/* Wrapper Pixel Loader dari kecil ke besar */}
      <div
        ref={pixelWrapRef}
        className="flex items-center justify-center transform origin-center transition-transform"
        style={{
          imageRendering: "pixelated",
        }}
      >
        <PixelLoader
          pixelColor="#ffffff"
          revealSpreadMs={1400}
          popDurationMs={200}
          onBuilt={() => setIsBuilt(true)}
          className="mx-auto"
        />
      </div>
    </div>
  );
}
