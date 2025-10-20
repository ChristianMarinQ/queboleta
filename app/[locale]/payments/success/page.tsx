"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, ArrowLeft, Download, Share2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PaymentSuccess() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-4 dark:from-emerald-950/80 dark:via-background dark:to-teal-950/80">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-emerald-200 shadow-xl dark:border-emerald-800">
          <CardHeader className="pb-4 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto mb-4"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                <CheckCircle className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
              </div>
            </motion.div>
            <CardTitle className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
              ¡Pago Exitoso!
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Tu transacción se ha procesado correctamente
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/30">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    ID de Transacción:
                  </span>
                  <span className="font-mono font-medium">#TXN-2024-001</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monto:</span>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                    $99.99
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fecha:</span>
                  <span>{new Date().toLocaleDateString("es-ES")}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-emerald-600 text-white hover:bg-emerald-700">
                <Download className="mr-2 h-4 w-4" />
                Descargar Recibo
              </Button>

              <Button
                variant="outline"
                className="w-full border-emerald-200 bg-transparent hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-950/30"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Compartir Comprobante
              </Button>
            </div>

            <div className="border-t pt-4">
              <Link href="/">
                <Button variant="ghost" className="w-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al Inicio
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
