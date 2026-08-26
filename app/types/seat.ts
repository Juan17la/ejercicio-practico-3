export interface Seat {
  id: string;
  label: string;
  status: "available" | "taken";
  price: number;
  classType: string;
}

export const MAX_SEATS = 2;
