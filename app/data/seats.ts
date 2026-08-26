import { Seat } from "../types/seat";

export const INITIAL_BUSINESS: Seat[][] = [
  [
    { id: "B-1A", label: "A", status: "available", price: 250, classType: "Business" },
    { id: "B-1B", label: "B", status: "available", price: 250, classType: "Business" },
    { id: "B-1C", label: "C", status: "taken", price: 250, classType: "Business" },
    { id: "B-1D", label: "D", status: "taken", price: 250, classType: "Business" },
  ],
  [
    { id: "B-2A", label: "A", status: "taken", price: 250, classType: "Business" },
    { id: "B-2B", label: "B", status: "available", price: 250, classType: "Business" },
    { id: "B-2C", label: "C", status: "available", price: 250, classType: "Business" },
    { id: "B-2D", label: "D", status: "taken", price: 250, classType: "Business" },
  ],
  [
    { id: "B-3A", label: "A", status: "taken", price: 250, classType: "Business" },
    { id: "B-3B", label: "B", status: "available", price: 250, classType: "Business" },
    { id: "B-3C", label: "C", status: "available", price: 250, classType: "Business" },
    { id: "B-3D", label: "D", status: "taken", price: 250, classType: "Business" },
  ],
  [
    { id: "B-4A", label: "A", status: "taken", price: 250, classType: "Business" },
    { id: "B-4B", label: "B", status: "available", price: 250, classType: "Business" },
    { id: "B-4C", label: "C", status: "available", price: 250, classType: "Business" },
    { id: "B-4D", label: "D", status: "taken", price: 250, classType: "Business" },
  ],
];

export const INITIAL_FIRST: Seat[][] = [
  [
    { id: "F-1A", label: "A", status: "taken", price: 150, classType: "First Class" },
    { id: "F-1B", label: "B", status: "available", price: 150, classType: "First Class" },
    { id: "F-1C", label: "C", status: "available", price: 150, classType: "First Class" },
    { id: "F-1D", label: "D", status: "available", price: 150, classType: "First Class" },
    { id: "F-1E", label: "E", status: "available", price: 150, classType: "First Class" },
  ],
  [
    { id: "F-2A", label: "A", status: "available", price: 150, classType: "First Class" },
    { id: "F-2B", label: "B", status: "available", price: 150, classType: "First Class" },
    { id: "F-2C", label: "C", status: "available", price: 150, classType: "First Class" },
    { id: "F-2D", label: "D", status: "available", price: 150, classType: "First Class" },
    { id: "F-2E", label: "E", status: "available", price: 150, classType: "First Class" },
  ],
  [
    { id: "F-3A", label: "A", status: "available", price: 150, classType: "First Class" },
    { id: "F-3B", label: "B", status: "taken", price: 150, classType: "First Class" },
    { id: "F-3C", label: "C", status: "taken", price: 150, classType: "First Class" },
    { id: "F-3D", label: "D", status: "available", price: 150, classType: "First Class" },
    { id: "F-3E", label: "E", status: "available", price: 150, classType: "First Class" },
  ],
  [
    { id: "F-4A", label: "A", status: "taken", price: 150, classType: "First Class" },
    { id: "F-4B", label: "B", status: "available", price: 150, classType: "First Class" },
    { id: "F-4C", label: "C", status: "available", price: 150, classType: "First Class" },
    { id: "F-4D", label: "D", status: "available", price: 150, classType: "First Class" },
    { id: "F-4E", label: "E", status: "available", price: 150, classType: "First Class" },
  ],
  [
    { id: "F-5A", label: "A", status: "available", price: 150, classType: "First Class" },
    { id: "F-5B", label: "B", status: "available", price: 150, classType: "First Class" },
    { id: "F-5C", label: "C", status: "available", price: 150, classType: "First Class" },
    { id: "F-5D", label: "D", status: "available", price: 150, classType: "First Class" },
    { id: "F-5E", label: "E", status: "available", price: 150, classType: "First Class" },
  ],
  [
    { id: "F-6A", label: "A", status: "available", price: 150, classType: "First Class" },
    { id: "F-6B", label: "B", status: "taken", price: 150, classType: "First Class" },
    { id: "F-6C", label: "C", status: "taken", price: 150, classType: "First Class" },
    { id: "F-6D", label: "D", status: "available", price: 150, classType: "First Class" },
    { id: "F-6E", label: "E", status: "available", price: 150, classType: "First Class" },
  ],
];

export const INITIAL_ECONOMY: Seat[][] = [
  [
    { id: "E-1A", label: "A", status: "taken", price: 150, classType: "Economy Class" },
    { id: "E-1B", label: "B", status: "available", price: 150, classType: "Economy Class" },
    { id: "E-1C", label: "C", status: "available", price: 150, classType: "Economy Class" },
    { id: "E-1D", label: "D", status: "available", price: 150, classType: "Economy Class" },
    { id: "E-1E", label: "E", status: "available", price: 150, classType: "Economy Class" },
  ],
  [
    { id: "E-2A", label: "A", status: "available", price: 150, classType: "Economy Class" },
    { id: "E-2B", label: "B", status: "available", price: 150, classType: "Economy Class" },
    { id: "E-2C", label: "C", status: "available", price: 150, classType: "Economy Class" },
    { id: "E-2D", label: "D", status: "available", price: 150, classType: "Economy Class" },
    { id: "E-2E", label: "E", status: "available", price: 150, classType: "Economy Class" },
  ],
  [
    { id: "E-3A", label: "A", status: "available", price: 150, classType: "Economy Class" },
    { id: "E-3B", label: "B", status: "taken", price: 150, classType: "Economy Class" },
    { id: "E-3C", label: "C", status: "taken", price: 150, classType: "Economy Class" },
    { id: "E-3D", label: "D", status: "available", price: 150, classType: "Economy Class" },
    { id: "E-3E", label: "E", status: "available", price: 150, classType: "Economy Class" },
  ],
  [
    { id: "E-4A", label: "A", status: "taken", price: 150, classType: "Economy Class" },
    { id: "E-4B", label: "B", status: "available", price: 150, classType: "Economy Class" },
    { id: "E-4C", label: "C", status: "available", price: 150, classType: "Economy Class" },
    { id: "E-4D", label: "D", status: "available", price: 150, classType: "Economy Class" },
    { id: "E-4E", label: "E", status: "available", price: 150, classType: "Economy Class" },
  ],
  [
    { id: "E-5A", label: "A", status: "available", price: 150, classType: "Economy Class" },
    { id: "E-5B", label: "B", status: "available", price: 150, classType: "Economy Class" },
    { id: "E-5C", label: "C", status: "available", price: 150, classType: "Economy Class" },
    { id: "E-5D", label: "D", status: "available", price: 150, classType: "Economy Class" },
    { id: "E-5E", label: "E", status: "available", price: 150, classType: "Economy Class" },
  ],
  [
    { id: "E-6A", label: "A", status: "available", price: 150, classType: "Economy Class" },
    { id: "E-6B", label: "B", status: "taken", price: 150, classType: "Economy Class" },
    { id: "E-6C", label: "C", status: "taken", price: 150, classType: "Economy Class" },
    { id: "E-6D", label: "D", status: "available", price: 150, classType: "Economy Class" },
    { id: "E-6E", label: "E", status: "available", price: 150, classType: "Economy Class" },
  ],
];
