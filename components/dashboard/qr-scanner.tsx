"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { type IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";
import { Input } from "@/components/ui/input";
import { CheckCircle2, XCircle, Loader2, Ticket } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { api } from "@/lib/axiosClient";
import { AppTicketType } from "@/types/global.types";

interface Response {
  status: string;
  message: string;
}

export const QRScanner = () => {
  const [ticketId, setTicketId] = useState<string>("");
  const [ticketData, setTicketData] = useState<AppTicketType | null>(null);
  const [entryData, setEntryData] = useState<Response | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [isMarkedAsEntered, setIsMarkedAsEntered] = useState(false);

  const handleResult = async (data: IDetectedBarcode[]) => {
    const scannedId = data[0].rawValue;
    setTicketId(scannedId);
    await validateTicket(scannedId);
  };

  const validateTicket = async (id: string) => {
    setIsLoading(true);
    setError("");
    setTicketData(null);
    setIsMarkedAsEntered(false);

    try {
      const data = await api(`/tickets/${id}`);
      console.log(data);
      setTicketData(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to validate ticket",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleMarkEntry = async () => {
    if (!ticketData) return;

    setIsLoading(true);
    try {
      const data = await api("/tickets/mark-entry", {
        method: "POST",
        data: {
          ticketId,
        },
      });
      setIsMarkedAsEntered(true);
      setEntryData(data);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Failed to mark entry");
    } finally {
      setIsLoading(false);
    }
  };

  const isValidTicket = ticketData?.status === "SOLD";

  const handleError = (err: unknown) => {
    console.error("QR Scanner error:", err);
  };

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Button className="w-full">Scan QR</Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl">
        <DialogHeader>
          <DialogTitle>Ticket Validation</DialogTitle>
          <DialogDescription>
            Scan the QR code to validate the ticket
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Section - QR Scanner */}
          <div className="space-y-4">
            <div className="bg-muted/30 flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg border">
              <Scanner onScan={handleResult} onError={handleError} />
            </div>
            <div className="flex items-center gap-2">
              <Input
                disabled
                value={ticketId}
                placeholder="Ticket ID will appear here"
                className="font-mono text-sm"
              />
            </div>
          </div>

          {/* Right Section - Ticket Information */}
          <div className="flex h-full flex-1 flex-col">
            {isLoading && (
              <div className="flex flex-1 items-center justify-center">
                <Loader2 className="size-8 animate-spin text-muted-foreground" />
              </div>
            )}

            {error && !isLoading && (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
                <XCircle className="size-12 text-destructive" />
                <div>
                  <p className="font-medium text-destructive">
                    Validation Failed
                  </p>
                  <p className="text-sm text-muted-foreground">{error}</p>
                </div>
              </div>
            )}

            {ticketData && !isLoading && (
              <div className="flex h-full flex-1 flex-col gap-4">
                {/* Validation Status */}
                <div className="flex items-center justify-center gap-2 rounded-lg border p-4">
                  {isValidTicket ? (
                    <>
                      <CheckCircle2 className="size-6 text-green-600" />
                      <span className="font-medium text-green-600">
                        Valid Ticket
                      </span>
                    </>
                  ) : (
                    <>
                      <XCircle className="size-6 text-destructive" />
                      <span className="font-medium text-destructive">
                        Invalid Ticket
                      </span>
                    </>
                  )}
                </div>

                {/* Ticket Details */}
                <div className="flex-1 space-y-4 rounded-lg border p-4">
                  <div className="flex items-start gap-3">
                    <Ticket className="size-5 text-muted-foreground" />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm text-muted-foreground">Event</p>
                      <p className="font-medium">
                        {ticketData.event?.name || "Unknown Event"}
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Type</p>
                      <Badge
                        variant={
                          ticketData.type === "VIP" ? "default" : "secondary"
                        }
                      >
                        {ticketData.type}
                      </Badge>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Status</p>
                      <Badge
                        variant={
                          ticketData.status === "SOLD"
                            ? "default"
                            : ticketData.status === "RESERVED"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {ticketData.status}
                      </Badge>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Price</p>
                    <p className="text-lg font-semibold">
                      {ticketData.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "COP",
                      })}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Ticket ID</p>
                    <p className="font-mono text-xs text-muted-foreground">
                      {ticketData.id}
                    </p>
                  </div>
                </div>

                <Button
                  onClick={handleMarkEntry}
                  disabled={!isValidTicket || isMarkedAsEntered || isLoading}
                  className="w-full"
                >
                  {isMarkedAsEntered ? (
                    <>
                      <CheckCircle2 className="mr-2 size-4" />
                      Entry Marked
                    </>
                  ) : (
                    "Mark Entry"
                  )}
                </Button>

                {isMarkedAsEntered && (
                  <p className="text-center text-sm text-green-600">
                    Customer entry has been recorded successfully
                  </p>
                )}
              </div>
            )}

            {!ticketData && !isLoading && !error && (
              <div className="flex flex-1 items-center justify-center text-center">
                <div className="space-y-2">
                  <Ticket className="text-muted-foreground/50 mx-auto size-12" />
                  <p className="text-sm text-muted-foreground">
                    Scan a QR code to view ticket details
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="h-20 w-full bg-secondary px-2">
          {error && <p className="text-sm font-medium text-red-500">{error}</p>}

          {entryData?.message && (
            <p
              className={`text-sm font-medium ${
                entryData.status === "approved"
                  ? "text-green-600"
                  : "text-yellow-600"
              }`}
            >
              {entryData.message}
            </p>
          )}

          {!error && !entryData && (
            <p className="text-xs italic text-gray-400">Logs</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
