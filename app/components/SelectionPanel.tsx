import { Seat } from "../types/seat";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";

interface SelectionPanelProps {
  selectedSeats: Seat[];
  totalPrice: number;
}

export function SelectionPanel({ selectedSeats, totalPrice }: SelectionPanelProps) {
  const animatedPrice = useAnimatedCounter(totalPrice);

  return (
    <section className="hidden lg:flex lg:w-1/4 h-full min-h-screen bg-[#FFFCFB] border-l border-[#E8ECF3] p-8 flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-[#1E293B] mb-6">Your selection</h3>

        {selectedSeats.length === 0 ? (
          <div className="border-2 border-dashed border-[#FCD8D4] rounded-2xl p-6 text-center">
            <p className="text-xs text-[#94A3B8] font-medium">
              Pick up to 2 seats from the cabin map
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {selectedSeats.map((seat, index) => (
              <div
                key={seat.id}
                className="ease-in-up flex items-center justify-between p-4 bg-white border border-[#F1F5F9] rounded-2xl shadow-sm"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div>
                  <p className="font-bold text-[#1E293B]">Asiento {seat.label}</p>
                  <p className="text-xs text-[#94A3B8]">{seat.classType}</p>
                </div>
                <span className="font-bold text-[#FF6B4A]">${seat.price}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-[#F1F5F9] pt-6">
        <div className="flex justify-between text-sm text-[#94A3B8] mb-2 font-medium">
          <span>Seats</span>
          <span className="text-[#1E293B] font-semibold">
            {selectedSeats.map((s) => s.label).join(", ") || "None"}
          </span>
        </div>
        <div className="flex justify-between text-sm text-[#94A3B8] mb-6 font-medium">
          <span>Taxes & fees</span>
          <span className="text-[#1E293B] font-semibold">$0</span>
        </div>

        <div className="flex justify-between items-baseline mb-6">
          <span className="text-sm text-[#94A3B8] font-medium">Total</span>
          <span className="text-3xl font-black text-[#1E293B]">${animatedPrice}</span>
        </div>

        <button
          disabled={selectedSeats.length === 0}
          className="w-full bg-[#EBE5DF] text-[#78716C] font-semibold py-4 rounded-2xl disabled:opacity-60 hover:bg-[#E2DACF] transition-colors"
        >
          {selectedSeats.length > 0 ? "Confirm selection" : "Select a seat"}
        </button>
      </div>
    </section>
  );
}
