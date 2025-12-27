export default function Geometric() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-1/3 -right-1/4 w-[600px] h-[600px] opacity-5"
        style={{
          background:
            "linear-gradient(45deg, transparent 0%, rgba(255,106,0,0.2) 50%, transparent 100%)",
          transform: "rotate(45deg)",
          borderRadius: "30%",
        }}
      />
      <div
        className="absolute -bottom-1/3 -left-1/4 w-[500px] h-[500px] opacity-5"
        style={{
          background:
            "linear-gradient(-45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
          transform: "rotate(-45deg)",
          borderRadius: "30%",
        }}
      />
    </div>
  );
}
