"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Image from "next/image";
import { SkillCardBack } from "./SkillCardBack";
import styles from "./CardSection.module.css";
import "./global.css";

const cardData = [
  {
    id: 1,
    title: "Web Development",
    frontImg: "/images/img10.jpg",
  },
  {
    id: 2,
    title: "3D Design",
    frontImg: "/images/img10.jpg",
  },
  {
    id: 3,
    title: "UI/UX Design",
    frontImg: "/images/img10.jpg",
  },
  {
    id: 4,
    title: "Graphic Design",
    frontImg: "/images/img10.jpg",
  },
];

const CardSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Desktop refs
  const desktopCardsRef = useRef<HTMLDivElement[]>([]);

  // Mobile refs
  const mobileSectionRef = useRef<HTMLDivElement>(null);
  const mobileCardRefs = useRef<HTMLDivElement[]>([]);
  const mobileInnerRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !isMounted) return;

    gsap.registerPlugin(ScrollTrigger);

    // Lenis smooth scroll
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    const mm = gsap.matchMedia();

    // =========================================================================
    // 1. DESKTOP ANIMATION (>= 1024px)
    // =========================================================================
    mm.add("(min-width: 1024px)", () => {
      const cards = desktopCardsRef.current;
      const totalScrollHeight = window.innerHeight * 3;
      const positions = [14, 38, 62, 86];
      const rotations = [-15, -7.5, 7.5, 15];

      // Pin desktop cards section
      ScrollTrigger.create({
        trigger: `.${styles.cards}`,
        start: "top top",
        end: () => `+=${totalScrollHeight}`,
        pin: true,
        pinSpacing: true,
      });

      // Spread cards
      cards.forEach((card, index) => {
        if (!card) return;
        gsap.to(card, {
          left: `${positions[index]}%`,
          rotation: `${rotations[index]}`,
          ease: "none",
          scrollTrigger: {
            trigger: `.${styles.cards}`,
            start: "top top",
            end: () => `+=${window.innerHeight}`,
            scrub: 0.5,
            id: `spread-${index}`,
          },
        });
      });

      // Rotate and flip cards with staggered effect
      cards.forEach((card, index) => {
        if (!card) return;
        const frontEl = card.querySelector(
          `.${styles.flipCardFront}`
        ) as HTMLElement;
        const backEl = card.querySelector(
          `.${styles.flipCardBack}`
        ) as HTMLElement;

        const staggerOffset = index * 0.05;
        const startOffset = 1 / 3 + staggerOffset;
        const endOffset = 2 / 3 + staggerOffset;

        ScrollTrigger.create({
          trigger: `.${styles.cards}`,
          start: "top top",
          end: () => `+=${totalScrollHeight}`,
          scrub: 1,
          id: `rotate-flip-${index}`,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress >= startOffset && progress <= endOffset) {
              const animationProgress = (progress - startOffset) / (1 / 3);
              const frontRotation = -180 * animationProgress;
              const backRotation = 180 - 180 * animationProgress;
              const cardRotation = rotations[index] * (1 - animationProgress);

              if (frontEl && backEl) {
                frontEl.style.transform = `rotateY(${frontRotation}deg)`;
                backEl.style.transform = `rotateY(${backRotation}deg)`;
                card.style.transform = `translate(-50%, -50%) rotate(${cardRotation}deg)`;
              }
            }
          },
        });
      });
    });

    // =========================================================================
    // 2. MOBILE & TABLET ANIMATION (< 1024px): Berputar satu per satu & Menumpuk Halus
    // =========================================================================
    mm.add("(max-width: 1023px)", () => {
      const section = mobileSectionRef.current;
      const c = mobileCardRefs.current;
      const inner = mobileInnerRefs.current;

      if (!section || !c[0] || !c[1] || !c[2] || !c[3]) return;

      // Inisialisasi:
      // Card 0 siap di tengah (opacity 1).
      // Card 1, 2, 3 disembunyikan sepenuhnya di bawah (opacity 0, yPercent 130)
      gsap.set(c[0], { yPercent: 0, scale: 1, y: 0, opacity: 1 });
      gsap.set(c[1], { yPercent: 130, scale: 0.92, y: 0, opacity: 0 });
      gsap.set(c[2], { yPercent: 130, scale: 0.92, y: 0, opacity: 0 });
      gsap.set(c[3], { yPercent: 130, scale: 0.92, y: 0, opacity: 0 });

      // Inisialisasi inner rotateY
      inner.forEach((inEl) => {
        if (inEl) gsap.set(inEl, { rotateY: 0 });
      });

      const totalMobileScroll = window.innerHeight * 3.5;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalMobileScroll}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
        },
      });

      // Step 1: Card 0 Flip
      tl.to(inner[0], {
        rotateY: 180,
        ease: "power1.inOut",
        duration: 1,
      })
        // Step 2: Card 0 menumpuk (scale down & naik), Card 1 meluncur naik mulus dengan fade in
        .to(c[0], {
          scale: 0.88,
          y: -28,
          opacity: 0.85,
          ease: "power2.out",
          duration: 1,
        })
        .to(
          c[1],
          {
            yPercent: 0,
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
          },
          "<"
        )

        // Step 3: Card 1 Flip
        .to(inner[1], {
          rotateY: 180,
          ease: "power1.inOut",
          duration: 1,
        })
        // Step 4: Card 0 & 1 menumpuk lebih atas, Card 2 naik mulus dengan fade in
        .to(c[0], {
          scale: 0.82,
          y: -48,
          opacity: 0.65,
          ease: "power2.out",
          duration: 1,
        })
        .to(
          c[1],
          {
            scale: 0.92,
            y: -18,
            opacity: 0.85,
            ease: "power2.out",
            duration: 1,
          },
          "<"
        )
        .to(
          c[2],
          {
            yPercent: 0,
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
          },
          "<"
        )

        // Step 5: Card 2 Flip
        .to(inner[2], {
          rotateY: 180,
          ease: "power1.inOut",
          duration: 1,
        })
        // Step 6: Card 0, 1, 2 menumpuk rapi, Card 3 naik mulus dengan fade in
        .to(c[0], {
          scale: 0.76,
          y: -64,
          opacity: 0.5,
          ease: "power2.out",
          duration: 1,
        })
        .to(
          c[1],
          {
            scale: 0.85,
            y: -36,
            opacity: 0.7,
            ease: "power2.out",
            duration: 1,
          },
          "<"
        )
        .to(
          c[2],
          {
            scale: 0.94,
            y: -8,
            opacity: 0.85,
            ease: "power2.out",
            duration: 1,
          },
          "<"
        )
        .to(
          c[3],
          {
            yPercent: 0,
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
          },
          "<"
        )

        // Step 7: Card 3 Flip
        .to(inner[3], {
          rotateY: 180,
          ease: "power1.inOut",
          duration: 1,
        });
    });

    return () => {
      mm.revert();
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMounted]);

  return (
    <div>
      {/* ===================== DESKTOP VERSION (>= 1024px) ===================== */}
      <section className={`hidden lg:block ${styles.cards}`}>
        {[1, 2, 3, 4].map((id) => (
          <div
            key={id}
            className={styles.card}
            id={`card-${id}`}
            ref={(el) => {
              if (el) desktopCardsRef.current[id - 1] = el;
            }}
          >
            <div className={styles.cardWrapper}>
              <div className={styles.flipCardInner}>
                {/* Front Side */}
                <div className={styles.flipCardFront}>
                  <Image
                    src="/images/img10.jpg"
                    alt="Cover Depan"
                    width={500}
                    height={750}
                    className={styles.fullImg}
                    priority={id === 1}
                  />
                </div>

                {/* Back Side - Rendered via Code (Pure CSS Glow & Noise) */}
                <div className={`${styles.flipCardBack} relative overflow-hidden`}>
                  <SkillCardBack id={id} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ===================== MOBILE & TABLET VERSION (< 1024px) ===================== */}
      <section
        ref={mobileSectionRef}
        className="block lg:hidden relative w-full h-screen bg-black overflow-hidden select-none"
      >
        {/* Soft Gradient Overlay di Atas & Bawah agar kemunculan kartu seamless */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black via-black/80 to-transparent z-40" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-black via-black/90 to-transparent z-40" />

        <div className="relative w-full h-full flex items-center justify-center">
          {cardData.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => {
                if (el) mobileCardRefs.current[index] = el;
              }}
              style={{
                zIndex: index + 1,
              }}
              className="absolute w-[260px] sm:w-[310px] aspect-[694/1013] [perspective:1200px]"
            >
              {/* 3D Flip Inner Container - Clean Minimalist Dark Border */}
              <div
                ref={(el) => {
                  if (el) mobileInnerRefs.current[index] = el;
                }}
                className="relative w-full h-full rounded-[16px] sm:rounded-[20px] [transform-style:preserve-3d] shadow-[0_24px_60px_rgba(0,0,0,0.95)] border border-white/[0.12] bg-black"
                style={{
                  transformStyle: "preserve-3d",
                  WebkitTransformStyle: "preserve-3d",
                }}
              >
                {/* Front Side - Pas Sesuai Dimensi Asli Gambar 694x1013 */}
                <div
                  className="absolute inset-0 w-full h-full rounded-[16px] sm:rounded-[20px] overflow-hidden bg-black flex items-center justify-center"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(0deg)",
                  }}
                >
                  <Image
                    src={card.frontImg}
                    alt={card.title}
                    fill
                    className="object-fill rounded-[16px] sm:rounded-[20px]"
                    sizes="(max-width: 640px) 260px, 310px"
                    priority={index === 0}
                  />
                </div>

                {/* Back Side - Rendered via Code (Pure CSS Glow & Noise) */}
                <div
                  className="absolute inset-0 w-full h-full rounded-[16px] sm:rounded-[20px] overflow-hidden bg-black flex items-center justify-center"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <SkillCardBack id={card.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CardSection;