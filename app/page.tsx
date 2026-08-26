"use client";

import { useState } from "react";
import { Seat, MAX_SEATS } from "./types/seat";
import { FlightDetailsPanel } from "./components/FlightDetailsPanel";
import { SeatMapPanel } from "./components/SeatMapPanel";
import { SelectionPanel } from "./components/SelectionPanel";

export default function FlightBooking() {
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [confirmed, setConfirmed] = useState(false);

  const handleSelectSeat = (seat: Seat) => {
    if (seat.status === "taken") return;
    if (confirmed) return;

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

  const handleConfirm = () => {
    if (selectedSeats.length === 0) return;
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    setSelectedSeats([]);
  };

  const totalPrice = selectedSeats.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <main className="flex flex-col lg:flex-row w-screen lg:h-screen min-h-screen bg-[#FFFDFD] text-[#1E293B]">
      <FlightDetailsPanel
        selectedSeats={selectedSeats}
        totalPrice={totalPrice}
      />
      <SeatMapPanel
        selectedSeats={selectedSeats}
        totalPrice={totalPrice}
        onSelectSeat={handleSelectSeat}
        confirmed={confirmed}
        onConfirm={handleConfirm}
      />
      <SelectionPanel
        selectedSeats={selectedSeats}
        totalPrice={totalPrice}
        confirmed={confirmed}
        onConfirm={handleConfirm}
        onReset={handleReset}
      />
    </main>
  );
}
