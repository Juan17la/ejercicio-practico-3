import { Seat } from "../types/seat";
import { FlightRoute } from "./FlightRoute";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";

interface FlightDetailsPanelProps {
  selectedSeats: Seat[];
  totalPrice: number;
}

export function FlightDetailsPanel({
  selectedSeats,
  totalPrice,
}: FlightDetailsPanelProps) {
  const animatedPrice = useAnimatedCounter(totalPrice);

  return (
    <section className="hidden lg:flex lg:w-1/4 h-full min-h-screen bg-gradient-to-t from-[#EEF3FB] to-[#F7F9FF] border-r border-[#E8ECF3] p-8 flex-col justify-between">
      <div>
        <div className="flex w-full mb-8 items-center gap-4 text-[#94A3B8] font-bold">
          <button className="p-2.5 bg-white hover:bg-slate-50 rounded-2xl shadow-sm border border-[#E8ECF3] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#64748B]"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <h3 className="text-[#475569] font-semibold text-lg">Flight details</h3>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-[#F1F5F9] mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#FF6B4A]"></span>
            <span className="font-bold text-[#1E293B]">
              {selectedSeats[0]?.classType || "Business Class"}
            </span>
          </div>
          <div className="flex gap-8 text-xs text-[#94A3B8] font-medium mb-1">
            <span>Seat</span>
            <span>Seat</span>
          </div>
          <div className="flex gap-8 text-lg font-bold text-[#1E293B] mb-4">
            <span>{selectedSeats[0]?.label || "--"}</span>
            <span>{selectedSeats[1]?.label || "--"}</span>
          </div>
          <div className="text-sm font-semibold text-[#64748B]">
            Price: <span className="text-[#FF6B4A] font-bold">${animatedPrice}</span>
          </div>
        </div>

        <FlightRoute
          originCode="MUC"
          originCity="Munich"
          destinationCode="LXR"
          destinationCity="London"
        />
      </div>

      <div className="flex gap-4">
        <div className="bg-white p-3 rounded-2xl flex-1 border border-[#F1F5F9]">
          <p className="text-[10px] text-[#94A3B8] font-bold uppercase">Date</p>
          <p className="text-xs font-bold text-[#1E293B]">Dec 1, 2026</p>
        </div>
        <div className="bg-white p-3 rounded-2xl flex-1 border border-[#F1F5F9]">
          <p className="text-[10px] text-[#94A3B8] font-bold uppercase">Flight</p>
          <p className="text-xs font-bold text-[#1E293B]">No 25</p>
        </div>
      </div>
    </section>
  );
}
