import { motion } from "framer-motion";
import { Clock, CheckCircle, Circle } from "lucide-react";
import { Session } from "../types";

interface SessionTimelineProps {
  sessions: Session[];
}

export default function SessionTimeline({ sessions }: SessionTimelineProps) {
  const getSessionIcon = (status: string) => {
    if (status === "completed")
      return <CheckCircle size={18} className="text-green-400" />;
    if (status === "live")
      return <div className="w-4 h-4 bg-f1-accent animate-pulse" />;
    return <Circle size={18} className="text-f1-muted" />;
  };

  const getSessionColor = (type: string) => {
    if (type.includes("Sprint")) return "text-orange-400";
    if (type === "Qualifying") return "text-purple-400";
    if (type === "Race") return "text-f1-accent";
    return "text-f1-muted";
  };

  return (
    <div className="space-y-4">
      {sessions.map((session, index) => (
        <motion.div
          key={session.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-4"
        >
          <div className="flex-shrink-0">{getSessionIcon(session.status)}</div>

          <div className="flex-1 glass p-4 flex items-center justify-between">
            <div>
              <span
                className={`text-sm font-semibold ${getSessionColor(session.type)}`}
              >
                {session.type}
              </span>
              <div className="flex items-center gap-3 mt-1 text-xs text-f1-muted">
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {session.day} {session.time}
                </span>
                <span>{session.duration}</span>
              </div>
            </div>

            <div
              className={`px-3 py-1 text-xs font-medium ${
                session.status === "completed"
                  ? "bg-green-500/20 text-green-400"
                  : session.status === "live"
                    ? "bg-f1-accent/20 text-f1-accent"
                    : "bg-f1-surface text-f1-muted"
              }`}
            >
              {session.status === "completed"
                ? "Done"
                : session.status === "live"
                  ? "Live"
                  : "Upcoming"}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
