export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background" aria-label="Loading" role="status">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border-2 border-border" />
          <div className="absolute inset-0 rounded-full border-2 border-t-primary border-l-transparent border-r-transparent border-b-transparent animate-spin" />
        </div>
        <span className="text-xs font-mono text-muted-foreground/60 tracking-widest uppercase">
          Loading...
        </span>
      </div>
    </div>
  );
}
