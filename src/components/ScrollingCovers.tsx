"use client";
import React from "react";
import Image from "next/image";

const images = [
    "https://cdn.apollo.audio/one/media/654b/a6fa/e16d/5105/a818/99ad/led-zeppelin-iv-album-cover.jpg?quality=80&format=jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC2mmoiH9doG2m-9XLvlYRtryWJ-Xybh49gA&s",
    "https://i0.wp.com/musicaficionado.blog/wp-content/uploads/2020/03/Hendrix.jpg?resize=720%2C714&ssl=1",
    "https://cdn.shopify.com/s/files/1/1143/7148/articles/Lucn-Lady-issue-3-album-covers-drawn-by-6-year-olds..jpg?v=1664792844",
    "https://npr.brightspotcdn.com/dims4/default/32c316c/2147483647/strip/true/crop/1080x1079+0+0/resize/880x879!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F97%2F9c%2Fb06f23e94d2ead104eb672fae1bc%2Fbitchesbrew2.jpg",
    "https://www.rollingstone.com/wp-content/uploads/2024/06/The-Smiths-Queen-is-Dead.jpg?w=800",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvfkc5hJnXoy6YTGFXbMbmb8JkvEKQ0WrjsA&s",
    "https://blog.iso50.com/wp-content/uploads/2013/12/Awake-450.jpg",
    "https://www.boredpanda.com/blog/wp-content/uploads/2021/12/greatest-album-covers-29-61a8bb68c4a9c__700.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBfCgioiffx2T-BeHkEfJnbqHeocCqHRUdw&s",
    "https://www.shutterstock.com/image-illustration/digital-illustration-rock-guitarist-600nw-2232762717.jpg",
    
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
    <div className={`h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-md border border-blue-100 shadow-sm bg-gradient-to-br ${g}`} />
  );
}

function ImageCover({ url }: { url: string }) {
  return (
    <div className="h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-md overflow-hidden border border-blue-100 shadow-sm">
      <Image src={url} alt="" width={512} height={512} className="h-full w-full object-cover" unoptimized />
    </div>
  );
}

function Row({ reverse = false }: { reverse?: boolean }) {
  const useImages = images && images.length > 0;
  const placeholders = Array.from({ length: 12 }, (_, i) => i);
  const base = useImages ? images : placeholders;
  const sequence = [...base, ...base];
  return (
    <div className="relative w-full overflow-hidden">
      <div className={`marquee ${reverse ? "marquee-reverse" : ""}`}>
        {sequence.map((item, i) => (
          <div key={i} className="mr-4 last:mr-0">
            {useImages ? (
              <ImageCover url={item as string} />
            ) : (
              <GradientCover idx={i} />
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        .marquee {
          display: flex;
          animation: scroll-left 25s linear infinite;
          will-change: transform;
        }
        .marquee-reverse {
          animation: scroll-right 25s linear infinite;
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default function ScrollingCovers() {
  return (
    <div className="w-full">
      <Row />
      <div className="mt-4" />
      <Row reverse />
    </div>
  );
}


