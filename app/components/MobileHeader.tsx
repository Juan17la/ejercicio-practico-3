import { ChevronLeft, Settings } from "lucide-react";

interface MobileHeaderProps {
  selectedCount: number;
}

export function MobileHeader({ selectedCount }: MobileHeaderProps) {
  const progress = (selectedCount / 2) * 100;

  return (
    <div className="w-full max-w-md lg:hidden sticky top-0 z-10 bg-[#FFFDFD] flex items-center justify-between py-4">
      <button className="p-2.5 bg-[#F1F5F9] rounded-full">
        <ChevronLeft className="w-5 h-5 text-[#64748B]" />
      </button>
      <div className="flex items-center gap-3">
        <span className="text-slate-400 font-semibold text-sm">{selectedCount}/2</span>
        <div className="w-20 h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#FF6B4A] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <button className="p-2.5 bg-[#F1F5F9] rounded-full">
        <Settings className="w-5 h-5 text-[#64748B]" />
      </button>
    </div>
  );
}
