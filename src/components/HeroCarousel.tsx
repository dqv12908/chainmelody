"use client";
import Image from "next/image";

type Props = {
  images?: string[]; // optional; falls back to placeholders
};

// Paste your album cover URLs here. Local files go in `public/covers/` and use paths like "/covers/1.jpg".
// Remote URLs work too (we render them unoptimized to avoid domain config).
const images1: string[] = [
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171214/Top100Covers_Tortoise-ItsAllAroundYou.jpg.jpg",
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171216/Top100Covers_Kavinsky-Outrun.jpg",
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171216/Top100Covers_Sebastien-Tellier-Sexuality.jpg",
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171218/Top100Covers_Gorillaz-Plastic-Beach.jpg",
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171219/Top100Covers_Carl-Craig-More-Songs-About-Food-and-Revolutionary-Art.jpg",
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171220/Top100Covers_Mr-Fingers-Ammnesia.jpg",
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171221/Top100Covers_Chris-and-Cosey-Heartbeat.jpg",
];

const images2: string[] = [
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171222/Top100Covers_Jimmy-Edgar-Majenta.jpg",
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171224/Top100Covers_The-Cinematic-Orchestra-Motion.jpg",
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171225/Top100Covers_Porter-Robinson-Worlds.jpg",
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171227/Top100Covers_The-Chemical-Brothers-Exit-Planet-Dust.jpg",
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171228/Top100Covers_Moodymann-Moodymann.jpg",
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171229/Top100Covers_Squarepusher-Damogen-Furies.jpg",
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171230/Top100Covers_Metro-Area-Metro-Area.jpg",
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171232/Top100Covers_808-State2090.jpg",

];

const images3: string[] = [
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171233/Top100Covers_Hercules-and-Love-Affair-Hercules-and-Love-Affair.jpg",
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171235/Top100Covers_Groove-Armada-Love-Box.jpg",
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2015/08/29194000/Top100Covers_Azari-III-Azari-III.jpg",
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2015/08/29210510/Top100Covers_Mylo_Destroy-Rock-Roll.jpg",
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171236/Top100Covers_Ratatat-Classics.jpg",
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171237/Top100Covers_FatBoy-Slim-Youve-Come-A-Long-Way-Baby.jpg",
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171239/Top100Covers_Mantronix-The-Album.jpg",
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171240/Top100Covers_Todd-Terje-Its-Album-Time.jpg",
  "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171241/Top100Covers_NIN-The-Downward-Spiral.jpg",
];

function GradientCover({ idx }: { idx: number }) {
  const gradients = [
    "from-blue-300 to-blue-500",
    "from-sky-300 to-blue-500",
    "from-indigo-300 to-indigo-600",
    "from-cyan-300 to-blue-500",
    "from-blue-200 to-indigo-500",
    "from-violet-300 to-indigo-600",
  ];
  const g = gradients[idx % gradients.length];
  return (
    <div className={`h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-md border border-blue-100 shadow-sm bg-gradient-to-br ${g}`} />
  );
}

function ImageCover({ url }: { url: string }) {
  return (
    <div className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-md overflow-hidden border border-blue-100 shadow-sm">
      <Image src={url} alt="" width={512} height={512} className="h-full w-full object-cover" unoptimized />
    </div>
  );
}

function Column({ items, reverse = false }: { items: (string | number)[]; reverse?: boolean }) {
  const useImages = items.length > 0 && typeof items[0] === "string";
  const seq = [...items, ...items]; // duplicate for seamless loop
  return (
    <div className={`marquee-vert ${reverse ? "reverse" : ""}`}>
      {seq.map((item, i) => (
        <div key={i} className="mb-2 last:mb-0">
          {useImages ? (
            <ImageCover url={item as string} />
          ) : (
            <GradientCover idx={i} />
          )}
        </div>
      ))}
      <style jsx>{`
        .marquee-vert {
          display: flex;
          flex-direction: column;
          animation: up 22s linear infinite;
          will-change: transform;
        }
        .marquee-vert.reverse {
          animation-name: down;
        }
        @keyframes up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-vert { animation: none; }
        }
      `}</style>
    </div>
  );
}

export default function HeroCarousel({ images: propImages }: Props) {
  // Use separate image arrays for each column
  const items1 = images1.length > 0 ? images1 : Array.from({ length: 6 }, (_, i) => i);
  const items2 = images2.length > 0 ? images2 : Array.from({ length: 6 }, (_, i) => i + 10);
  const items3 = images3.length > 0 ? images3 : Array.from({ length: 6 }, (_, i) => i + 20);
  
  return (
    <div className="flex md:justify-end justify-center">
      {/* Mobile: three horizontal marquee rows */}
      <div className="block md:hidden w-full space-y-2">
        <div className="marquee-horiz overflow-hidden">
          <div className="marquee-track flex items-center gap-2">
            {[...items1, ...items1].map((url, i) => (
              <div key={i} className="flex-shrink-0">
                {typeof url === 'string' ? <ImageCover url={url as string} /> : <GradientCover idx={i} />}
              </div>
            ))}
          </div>
        </div>
        <div className="marquee-horiz overflow-hidden">
          <div className="marquee-track reverse flex items-center gap-2">
            {[...items2, ...items2].map((url, i) => (
              <div key={i} className="flex-shrink-0">
                {typeof url === 'string' ? <ImageCover url={url as string} /> : <GradientCover idx={i} />}
              </div>
            ))}
          </div>
        </div>
        <div className="marquee-horiz overflow-hidden">
          <div className="marquee-track slow flex items-center gap-2">
            {[...items3, ...items3].map((url, i) => (
              <div key={i} className="flex-shrink-0">
                {typeof url === 'string' ? <ImageCover url={url as string} /> : <GradientCover idx={i} />}
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          .marquee-horiz { height: 6.5rem; }
          @media (min-width: 640px) { .marquee-horiz { height: 7.5rem; } }
          .marquee-track {
            animation: scroll-x 28s linear infinite;
            will-change: transform;
          }
          .marquee-track.reverse { animation-name: scroll-x-rev; }
          .marquee-track.slow { animation-duration: 34s; }
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-x-rev {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee-track { animation: none; }
          }
        `}</style>
      </div>

      <div className="hidden md:grid grid-cols-3 gap-1 h-64 sm:h-72 md:h-[460px] overflow-hidden">
        <Column items={items1} />
        <Column items={items2} reverse />
        <Column items={items3} />
      </div>
    </div>
  );
}
