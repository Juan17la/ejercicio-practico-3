import { useAnimatedCounter } from "../hooks/useAnimatedCounter";

interface MobileFooterProps {
  totalPrice: number;
  selectedCount: number;
}

export function MobileFooter({ totalPrice, selectedCount }: MobileFooterProps) {
  const animatedPrice = useAnimatedCounter(totalPrice);

  return (
    <div className="w-full max-w-md lg:hidden sticky bottom-0 z-10 bg-[#FFFDFD] pt-4 pb-4 flex items-center justify-between gap-4">
      <div>
        <p className="text-xs text-[#94A3B8] font-medium">Total</p>
        <p className="text-2xl font-black text-[#1E293B]">${animatedPrice}</p>
      </div>
      <button
        disabled={selectedCount === 0}
        className="flex-1 bg-[#EBE5DF] text-[#78716C] font-semibold py-4 rounded-2xl disabled:opacity-50 hover:bg-[#E2DACF] transition-colors"
      >
        {selectedCount > 0 ? "Confirm selection" : "Select a seat"}
      </button>
    </div>
  );
}
