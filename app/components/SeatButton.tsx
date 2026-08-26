import { useRef, useCallback } from "react";
import { Seat } from "../types/seat";

interface SeatButtonProps {
  seat: Seat;
  isSelected: boolean;
  onSelect: (seat: Seat) => void;
}

export function SeatButton({ seat, isSelected, onSelect }: SeatButtonProps) {
  const isTaken = seat.status === "taken";
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = useCallback(() => {
    onSelect(seat);
    const el = btnRef.current;
    if (!el) return;
    el.classList.remove("seat-pop");
    void el.offsetWidth;
    el.classList.add("seat-pop");
  }, [seat, onSelect]);

  let style = "border-2 border-[#FF8A71] text-[#FF8A71] bg-white";
  if (isTaken) {
    style = "bg-[#E2E8F0] border-transparent text-[#94A3B8] cursor-not-allowed";
  } else if (isSelected) {
    style = "bg-[#FF6B4A] border-[#FF6B4A] text-white shadow-md shadow-[#FF6B4A]/30";
  }

  return (
    <button
      ref={btnRef}
      disabled={isTaken}
      onClick={handleClick}
      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl font-semibold flex items-center justify-center transition-all ${style}`}
    >
      {seat.label}
    </button>
  );
}
