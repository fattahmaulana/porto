"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";

import { PinContainer } from "./ui/3d-pin";

const marqueeItems = [
  { text: "Experience & Projects", img: "/images/image1.png" },
  { text: "Creative Works", img: "/images/image1.png" },
  { text: "Experience & Projects", img: "/images/image1.png" },
  { text: "Creative Works", img: "/images/image1.png" },
];

// Komponen Image Project dengan Skeleton Screen Abu-abu
const ProjectCardImage = ({ img, title }: { img: string; title: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative mb-8 flex h-[220px] w-[80vw] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900/90 sm:h-[320px] sm:w-[570px]">
      {/* Skeleton Screen Abu-abu dengan Animasi Pulse */}
      {!isLoaded && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-zinc-800 animate-pulse">
          <div className="h-12 w-12 rounded-full bg-zinc-700/80 mb-3" />
          <div className="h-3.5 w-36 rounded-full bg-zinc-700/80" />
        </div>
      )}

      {/* Gambar Project Utama */}
      <Image
        src={img}
        alt={title}
        fill
        sizes="(max-width: 640px) 80vw, 570px"
        onLoad={() => setIsLoaded(true)}
        className={`object-cover object-top rounded-2xl transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export const RecentProjects = () => {
  return (
    <section id="projects" className="w-full pt-0 pb-20">
      {/* Marquee Header "Experience & Projects" - Mepet Atas */}
      <div className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden border-y border-white/[0.1] bg-black/60 py-3 sm:py-4 backdrop-blur-md">
        <div className="animate-marquee">
          {/* Track 1 */}
          <div className="flex shrink-0 items-center gap-8 sm:gap-14 md:gap-20 pr-8 sm:pr-14 md:pr-20">
            {marqueeItems.map((item, index) => (
              <div key={`m1-${index}`} className="flex items-center gap-3 sm:gap-5 shrink-0">
                <span className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-widest text-white">
                  {item.text}
                </span>
                <Image
                  src={item.img}
                  alt="Marquee decoration"
                  width={40}
                  height={40}
                  className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Track 2 (Duplicate for seamless continuous loop) */}
          <div className="flex shrink-0 items-center gap-8 sm:gap-14 md:gap-20 pr-8 sm:pr-14 md:pr-20" aria-hidden="true">
            {marqueeItems.map((item, index) => (
              <div key={`m2-${index}`} className="flex items-center gap-3 sm:gap-5 shrink-0">
                <span className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-widest text-white">
                  {item.text}
                </span>
                <Image
                  src={item.img}
                  alt="Marquee decoration"
                  width={40}
                  height={40}
                  className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <h1 className="heading mt-10 md:mt-14">
        RECENT PROJECTS{" "}
        <span className="text-purple"></span>
      </h1>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map(
          ({ id, des, iconLists, img, link, sourceCode, title }) => (
            <div
              key={id}
              className="flex h-[32rem] w-[90vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
            >
              <PinContainer title="Visit" href={link}>
                {/* Image Card dengan Skeleton Screen Abu-abu */}
                <ProjectCardImage img={img} title={title} />

                <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl text-white">
                  {title}
                </h1>

                <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal text-[#c1c2d3]">
                  {des}
                </p>

                <div className="mb-3 mt-7 flex items-center justify-between">
                  {/* Lingkaran Tech Stack Icon: Warna Putih Bersih & Ukuran Pas */}
                  <div className="flex items-center">
                    {iconLists.map((icon, i) => (
                      <div
                        key={`${icon}-${i}`}
                        className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/[0.2] bg-[#121214] shadow-md"
                        style={{
                          transform: `translateX(-${5 * i * 2}px)`,
                        }}
                      >
                        <div className="relative h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center">
                          <Image
                            height={24}
                            width={24}
                            src={icon}
                            alt={`icon-${i}`}
                            style={{ filter: "brightness(0) invert(1)" }}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center">
                    <Link
                      href={sourceCode}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex text-sm text-purple md:text-xs lg:text-xl font-medium hover:underline"
                    >
                      View
                    </Link>

                    <FaLocationArrow className="ms-3" color="#5ce1e6" />
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </section>
  );
};
