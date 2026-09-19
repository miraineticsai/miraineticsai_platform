export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-2 border-b-2 border-primary animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-12 w-12 rounded-full border-t-2 border-b-2 border-secondary animate-spin-slow" />
        </div>
      </div>
    </div>
  );
}
