import { Plane } from "lucide-react";

interface FlightRouteProps {
  originCode: string;
  originCity: string;
  destinationCode: string;
  destinationCity: string;
}

export function FlightRoute({
  originCode,
  originCity,
  destinationCode,
  destinationCity,
}: FlightRouteProps) {
  return (
    <div className="flex flex-col items-start gap-2 my-6 px-2">
      <div>
        <h2 className="text-3xl font-extrabold text-[#1E293B]">{originCode}</h2>
        <p className="text-sm text-[#94A3B8] font-medium">{originCity}</p>
      </div>
      <div className="w-full my-4 relative" style={{ height: 48 }}>
        <svg
          viewBox="0 0 200 48"
          fill="none"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            id="desktop-route"
            d="M 0 40 Q 100 -10 200 40"
            stroke="#FF8A71"
            strokeWidth="2"
            strokeDasharray="6 4"
            strokeOpacity="0.4"
            fill="none"
          />
        </svg>
        <Plane
          className="plane-fly w-5 h-5 text-[#FF6B4A]"
          style={{ offsetPath: 'path("M 0 40 Q 100 -10 200 40")', transform: 'translateY(-45px)' }}
        />
      </div>
      <div>
        <h2 className="text-3xl font-extrabold text-[#1E293B]">{destinationCode}</h2>
        <p className="text-sm text-[#94A3B8] font-medium">{destinationCity}</p>
      </div>
    </div>
  );
}
