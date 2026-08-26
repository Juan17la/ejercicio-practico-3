"use client";

import { useState } from "react";
import { Seat, MAX_SEATS } from "./types/seat";
import { FlightDetailsPanel } from "./components/FlightDetailsPanel";
import { SeatMapPanel } from "./components/SeatMapPanel";
import { SelectionPanel } from "./components/SelectionPanel";

export default function FlightBooking() {
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  const handleSelectSeat = (seat: Seat) => {
    if (seat.status === "taken") return;

    setSelectedSeats((prev) => {
      const isAlreadySelected = prev.some((s) => s.id === seat.id);

      if (isAlreadySelected) {
        return prev.filter((s) => s.id !== seat.id);
      }

      if (prev.length >= MAX_SEATS) {
        return [prev[1], seat];
      }

      return [...prev, seat];
    });
  };

  const totalPrice = selectedSeats.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <main className="flex flex-col lg:flex-row w-screen min-h-screen bg-[#FFFDFD] text-[#1E293B]">
      <FlightDetailsPanel
        selectedSeats={selectedSeats}
        totalPrice={totalPrice}
      />
      <SeatMapPanel
        selectedSeats={selectedSeats}
        totalPrice={totalPrice}
        onSelectSeat={handleSelectSeat}
      />
      <SelectionPanel
        selectedSeats={selectedSeats}
        totalPrice={totalPrice}
      />
    </main>
  );
}
