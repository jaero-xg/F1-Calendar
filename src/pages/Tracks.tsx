import TrackCard from "@/components/TrackCard";
import { tracks } from "@/data";

export default function Tracks() {
  return (
    <div className="pt-24 pb-20">
      <div className="wrap section-padding">
        {/* Header */}
        <h1 className="font-display text-4xl font-extrabold uppercase">
          All Tracks
        </h1>
        <p className="text-sm text-f1-muted">
          {tracks.length} circuits across 5 continents
        </p>

        {/* Track grid */}
        <div className="card-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {tracks.map((track, i) => (
            <TrackCard key={track.id} track={track} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
