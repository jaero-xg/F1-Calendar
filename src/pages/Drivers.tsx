import DriverCard from "@/components/DriverCard";
import { drivers, getTopDrivers } from "@/data";

export default function Drivers() {
  const allDrivers = getTopDrivers(drivers.length);

  return (
    <div className="pt-24 pb-20">
      <div className="wrap section-padding">
        {/* Back link + Header */}
        <h1 className="font-display text-4xl font-extrabold uppercase">
          All Drivers
        </h1>

        {/* Driver grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {allDrivers.map((driver, i) => (
            <DriverCard key={driver.id} driver={driver} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
