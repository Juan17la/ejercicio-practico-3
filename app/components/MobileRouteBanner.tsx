import { Plane } from "lucide-react";

interface MobileRouteBannerProps {
  originCode: string;
  originCity: string;
  destinationCode: string;
  destinationCity: string;
}

export function MobileRouteBanner({
  originCode,
  originCity,
  destinationCode,
  destinationCity,
}: MobileRouteBannerProps) {
  return (
    <div className="w-full max-w-md lg:hidden bg-[#7B96B8] text-white p-5 rounded-3xl mb-6 shadow-md flex items-center justify-between">
      <div>
        <h3 className="text-2xl font-bold">{originCode}</h3>
        <p className="text-xs opacity-80">{originCity}</p>
      </div>
      <div className="flex-1 flex items-center justify-center px-4 relative">
        <div className="w-full border-b border-dashed border-white/60" />
        <Plane
          className="plane-fly w-4 h-4 text-white"
          style={{ offsetPath: 'path("M -150 0 L 100 0")', offsetRotate: '0deg' }}
        />
      </div>
      <div className="text-right">
        <h3 className="text-2xl font-bold">{destinationCode}</h3>
        <p className="text-xs opacity-80">{destinationCity}</p>
      </div>
    </div>
  );
}
