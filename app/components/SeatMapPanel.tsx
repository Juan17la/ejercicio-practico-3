import { Seat } from "../types/seat";
import { SeatLegend } from "./SeatLegend";
import { SeatClassSection } from "./SeatClassSection";
import { MobileHeader } from "./MobileHeader";
import { MobileRouteBanner } from "./MobileRouteBanner";
import { MobileFooter } from "./MobileFooter";
import { INITIAL_BUSINESS, INITIAL_FIRST, INITIAL_ECONOMY } from "../data/seats";

interface SeatMapPanelProps {
  selectedSeats: Seat[];
  totalPrice: number;
  onSelectSeat: (seat: Seat) => void;
}

export function SeatMapPanel({
  selectedSeats,
  totalPrice,
  onSelectSeat,
}: SeatMapPanelProps) {
  const progress = (selectedSeats.length / 2) * 100;

  return (
    <section className="flex-1 min-h-screen bg-[#FFFDFD] p-4 sm:p-8 flex flex-col items-center">
      <MobileHeader selectedCount={selectedSeats.length} />

      <MobileRouteBanner
        originCode="MUC"
        originCity="Munich"
        destinationCode="LXR"
        destinationCity="London"
      />

      <div className="hidden lg:flex lg:items-center lg:gap-3 text-slate-400 font-semibold text-sm mb-4">
        <span>{selectedSeats.length}/2</span>
        <div className="w-20 h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#FF6B4A] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <SeatLegend />

      <div className="w-full max-w-md bg-[#F8FAFC]/50 border-2 border-[#F1F5F9] rounded-t-[250px] p-6 pt-12 flex flex-col items-center gap-8">
        <SeatClassSection
          title="Business Class"
          rows={INITIAL_BUSINESS}
          selectedSeats={selectedSeats}
          onSelectSeat={onSelectSeat}
        />
        <SeatClassSection
          title="First Class"
          rows={INITIAL_FIRST}
          selectedSeats={selectedSeats}
          onSelectSeat={onSelectSeat}
        />
      </div>

      <MobileFooter totalPrice={totalPrice} selectedCount={selectedSeats.length} />
    </section>
  );
}
