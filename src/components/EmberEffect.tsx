"use client";

// Brasas definidas no nível de módulo — sem recalcular a cada render
const EMBERS = [
  { id: 0,  left: "6%",  size: 3, dur: 7,   delay: 0,   op: 0.75, drift: "14px" },
  { id: 1,  left: "13%", size: 2, dur: 5.5, delay: 1.2, op: 0.55, drift: "-8px" },
  { id: 2,  left: "22%", size: 4, dur: 8,   delay: 0.5, op: 0.65, drift: "10px" },
  { id: 3,  left: "31%", size: 2, dur: 6,   delay: 3.1, op: 0.45, drift: "-12px" },
  { id: 4,  left: "38%", size: 3, dur: 5,   delay: 1.8, op: 0.7,  drift: "8px" },
  { id: 5,  left: "45%", size: 2, dur: 7.5, delay: 4.2, op: 0.5,  drift: "-6px" },
  { id: 6,  left: "52%", size: 4, dur: 6.5, delay: 0.9, op: 0.8,  drift: "16px" },
  { id: 7,  left: "60%", size: 2, dur: 5,   delay: 2.5, op: 0.55, drift: "-10px" },
  { id: 8,  left: "67%", size: 3, dur: 8,   delay: 1.4, op: 0.6,  drift: "12px" },
  { id: 9,  left: "74%", size: 2, dur: 6,   delay: 3.8, op: 0.45, drift: "-8px" },
  { id: 10, left: "81%", size: 4, dur: 7,   delay: 0.3, op: 0.7,  drift: "10px" },
  { id: 11, left: "88%", size: 2, dur: 5.5, delay: 2.1, op: 0.5,  drift: "-14px" },
  { id: 12, left: "94%", size: 3, dur: 6.5, delay: 4.6, op: 0.65, drift: "8px"  },
  { id: 13, left: "18%", size: 2, dur: 7,   delay: 5.2, op: 0.4,  drift: "-6px" },
  { id: 14, left: "55%", size: 3, dur: 5.5, delay: 6.0, op: 0.6,  drift: "14px" },
  { id: 15, left: "76%", size: 2, dur: 8,   delay: 5.8, op: 0.45, drift: "-10px" },
  { id: 16, left: "42%", size: 4, dur: 6,   delay: 7.0, op: 0.7,  drift: "8px"  },
  { id: 17, left: "9%",  size: 2, dur: 7.5, delay: 6.5, op: 0.5,  drift: "-12px" },
  { id: 18, left: "63%", size: 3, dur: 5,   delay: 3.4, op: 0.65, drift: "10px" },
  { id: 19, left: "85%", size: 2, dur: 6.5, delay: 7.8, op: 0.4,  drift: "-8px" },
];

const COLORS = ["#F0A500", "#E84000", "#FCBF49", "#CC3300", "#F77F00"];

export default function EmberEffect() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 5 }}
      aria-hidden="true"
    >
      {EMBERS.map((e) => (
        <div
          key={e.id}
          style={{
            position: "absolute",
            left: e.left,
            bottom: `${(e.id * 7) % 30}%`,
            width: e.size,
            height: e.size,
            borderRadius: "50%",
            background: COLORS[e.id % COLORS.length],
            boxShadow: `0 0 ${e.size * 2}px ${COLORS[e.id % COLORS.length]}`,
            "--e-op": e.op,
            "--e-drift": e.drift,
            animation: `ember-rise ${e.dur}s ease-out ${e.delay}s infinite`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
