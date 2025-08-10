"use client";
import React, { useMemo } from "react";

type Slice = {
  label: string;
  value: number; // percentage or absolute; relative to total
  color: string;
};

type Props = {
  data: Slice[];
  size?: number; // px
  donut?: boolean;
};

export default function TokenPieChart({ data, size = 240, donut = true }: Props) {
  const total = useMemo(() => data.reduce((s, d) => s + d.value, 0), [data]);
  const radius = size / 2;
  const innerRadius = donut ? radius * 0.6 : 0;

  function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
    const rad = ((angle - 90) * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  }

  function arcPath(cx: number, cy: number, r: number, startAngle: number, endAngle: number, ir: number) {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    if (ir <= 0) {
      return [
        "M", start.x, start.y,
        "A", r, r, 0, largeArcFlag, 0, end.x, end.y,
        "L", cx, cy,
        "Z",
      ].join(" ");
    }

    const iStart = polarToCartesian(cx, cy, ir, endAngle);
    const iEnd = polarToCartesian(cx, cy, ir, startAngle);

    return [
      "M", start.x, start.y,
      "A", r, r, 0, largeArcFlag, 0, end.x, end.y,
      "L", iEnd.x, iEnd.y,
      "A", ir, ir, 0, largeArcFlag, 1, iStart.x, iStart.y,
      "Z",
    ].join(" ");
  }

  let cumulative = 0;
  const slices = data.map((d) => {
    const start = (cumulative / total) * 360;
    cumulative += d.value;
    const end = (cumulative / total) * 360;
    return { ...d, start, end };
  });

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Token allocation pie chart">
        {slices.map((s) => (
          <path
            key={s.label}
            d={arcPath(radius, radius, radius - 2, s.start, s.end, innerRadius)}
            fill={s.color}
            stroke="white"
            strokeWidth={1}
          />
        ))}
      </svg>
      <div className="mt-4 grid grid-cols-1 gap-2 text-sm">
        {data.map((d) => (
          <div key={d.label} className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded" style={{ background: d.color }} />
            <span className="text-blue-900">{d.label}</span>
            <span className="text-blue-800/70">({((d.value / total) * 100).toFixed(0)}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}


