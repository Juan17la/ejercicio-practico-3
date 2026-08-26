import { Check, X } from "lucide-react";
import { Seat } from "../types/seat";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";

interface MobileFooterProps {
  totalPrice: number;
  selectedSeats: Seat[];
  onRemoveSeat: (seat: Seat) => void;
  confirmed: boolean;
  onConfirm: () => void;
}

export function MobileFooter({ totalPrice, selectedSeats, onRemoveSeat, confirmed, onConfirm }: MobileFooterProps) {
  const animatedPrice = useAnimatedCounter(totalPrice);
  const hasSelection = selectedSeats.length > 0;

  return (
    <div className="w-full max-w-md lg:hidden fixed bottom-0 left-0 right-0 z-10 px-4">
      {hasSelection && !confirmed && (
        <div className="flex gap-2 mb-2">
          {selectedSeats.map((seat) => (
            <button
              key={seat.id}
              onClick={() => onRemoveSeat(seat)}
              className="flex items-center gap-2 bg-[#FF6B4A] text-white text-sm font-bold pl-3 pr-2 py-2 rounded-full"
            >
              {seat.label}
              <span className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center">
                <X className="w-3 h-3" />
              </span>
            </button>
          ))}
        </div>
      )}
      <div className="bg-[#FFFDFD] pt-1 pb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs text-[#94A3B8] font-medium">Total</p>
          <p className="text-2xl font-black text-[#1E293B]">${animatedPrice}</p>
        </div>
        <button
          disabled={!hasSelection && !confirmed}
          onClick={confirmed ? undefined : onConfirm}
          className="flex-1 flex items-center justify-center gap-2 bg-[#EBE5DF] text-[#78716C] font-semibold py-4 rounded-2xl disabled:opacity-50 hover:bg-[#E2DACF] transition-colors"
        >
          {confirmed ? (
            <>
              <Check className="w-5 h-5" />
              Completed
            </>
          ) : hasSelection ? (
            "Confirm selection"
          ) : (
            "Select a seat"
          )}
        </button>
      </div>
    </div>
  );
}
