export function SeatLegend() {
  return (
    <div className="flex items-center gap-6 mb-8 text-xs font-semibold text-[#64748B]">
      <div className="flex items-center gap-2">
        <span className="w-3.5 h-3.5 rounded-full border-2 border-[#FF8A71]"></span>
        <span>Available</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-3.5 h-3.5 rounded-full bg-[#FF6B4A]"></span>
        <span>Selected</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-3.5 h-3.5 rounded-full bg-[#E2E8F0]"></span>
        <span>Taken</span>
      </div>
    </div>
  );
}
