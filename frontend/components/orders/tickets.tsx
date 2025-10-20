import { cn } from "@/lib/utils";
import { AppEventType, AppTicketType } from "@/types/global.types";
import QRCode from "react-qr-code";

interface Props {
  event: AppEventType;
  ticket: AppTicketType;
}

export const Ticket = ({ event, ticket }: Props) => {
  return (
    <div className="perspective-1000">
      <div className="ticket-3d shadow-3d group relative h-[290px] w-[700px] overflow-hidden border-2 border-border bg-card">
        <div className="gradient-glow absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-50 flex h-full">
          <div
            className={cn(
              "flex w-12 items-center justify-center",
              ticket.type === "VIP" ? "bg-purple-800/20" : "bg-stone-600",
            )}
          >
            <div className="text-vertical font-experimental text-xs tracking-wider text-muted-foreground">
              <span>
                TICKET SYSTEM 2024 • QUE BOLETA INC • ALL RIGHTS RESERVED
              </span>
            </div>
          </div>

          <div className="relative flex-1 p-6">
            <div className="font-experimental mb-2 text-xs text-muted-foreground">
              NEX GEN presents [LATIN AMERICA] DEC 2025+
            </div>

            <div className="mb-4">
              <h1 className="font-bold-condensed text-3xl uppercase leading-tight text-foreground md:text-4xl">
                {event.name}
              </h1>
              <p className="font-experimental text-sm text-muted-foreground">
                W/ {event.venue!.name}
              </p>
            </div>

            {/* Pre-sale info */}
            <div className="mb-6">
              <p className="text-lg font-bold text-foreground">
                → {ticket.status}
              </p>
              <p className="font-experimental text-sm text-muted-foreground">
                {event.date}
              </p>
            </div>
          </div>

          <div className="bg-muted/10 relative w-40">
            <div className="flex size-40 flex-col items-center bg-white/40 pt-2 backdrop-blur-sm">
              <QRCode value={ticket.id} className="size-40" />
              <p className="font-experimental text-center text-xs text-muted-foreground">
                {ticket.id.slice(-8).toUpperCase()}
              </p>
            </div>

            {/* Real time display simulation */}
            <div className="absolute bottom-1 left-2 -translate-y-1/2 transform">
              <p className="font-experimental border border-border bg-card px-1 py-0.5 text-xs text-muted-foreground">
                REAL TIME DISPLAY
              </p>
              <p className="font-experimental mt-1 border border-border bg-card px-1 py-0.5 text-xs text-muted-foreground">
                03:95:38:29:06
              </p>
            </div>
          </div>
        </div>

        {/* Additional details on edges */}
        <div className="absolute bottom-0 left-12 right-32 h-px bg-border"></div>
        <div className="font-experimental absolute bottom-2 right-4 z-10 text-xs text-muted-foreground">
          PH222.2 Q386
        </div>

        <img
          src={event.logo}
          alt="logo"
          className="absolute -bottom-28 -right-16 size-96 opacity-20 dark:invert"
        />
      </div>
    </div>
  );
};
