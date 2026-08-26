import { Seat } from "../types/seat";
import { SeatButton } from "./SeatButton";

interface SeatClassSectionProps {
  title: string;
  rows: Seat[][];
  selectedSeats: Seat[];
  onSelectSeat: (seat: Seat) => void;
}

export function SeatClassSection({
  title,
  rows,
  selectedSeats,
  onSelectSeat,
}: SeatClassSectionProps) {
  const columns = rows[0]?.length ?? 0;
  const leftSplit = columns === 4 ? 2 : 3;

  return (
    <div className="w-full flex flex-col items-center">
      <h4 className="text-sm font-bold text-[#1E293B] mb-4">{title}</h4>
      <div className="flex flex-col gap-3">
        {rows.map((row, rIdx) => (
          <div key={rIdx} className="flex items-center gap-2 sm:gap-3">
            <div className="flex gap-1.5 sm:gap-2">
              {row.slice(0, leftSplit).map((seat) => (
                <SeatButton
                  key={seat.id}
                  seat={seat}
                  isSelected={selectedSeats.some((s) => s.id === seat.id)}
                  onSelect={onSelectSeat}
                />
              ))}
            </div>
            <span className="w-5 text-center text-xs font-semibold text-[#94A3B8]">
              {rIdx + 1}
            </span>
            <div className="flex gap-1.5 sm:gap-2">
              {row.slice(leftSplit).map((seat) => (
                <SeatButton
                  key={seat.id}
                  seat={seat}
                  isSelected={selectedSeats.some((s) => s.id === seat.id)}
                  onSelect={onSelectSeat}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
