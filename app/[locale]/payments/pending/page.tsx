"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, ArrowLeft, RefreshCw, Bell } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PaymentPending() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50 p-4 dark:from-amber-950/20 dark:via-background dark:to-orange-950/20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-amber-200 shadow-xl dark:border-amber-800">
          <CardHeader className="pb-4 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto mb-4"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <Clock className="h-12 w-12 text-amber-600 dark:text-amber-400" />
                </motion.div>
              </div>
            </motion.div>
            <CardTitle className="text-2xl font-bold text-amber-700 dark:text-amber-300">
              Pago Pendiente
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Tu transacción está siendo procesada
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    ID de Transacción:
                  </span>
                  <span className="font-mono font-medium">#TXN-2024-002</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monto:</span>
                  <span className="font-semibold text-amber-700 dark:text-amber-300">
                    $99.99
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Estado:</span>
                  <span className="font-medium text-amber-600 dark:text-amber-400">
                    Procesando...
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Tiempo estimado:
                  </span>
                  <span>2-5 minutos</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/30">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>¿Qué sigue?</strong> Te notificaremos por email cuando
                el pago se complete. No cierres esta ventana.
              </p>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-amber-600 text-white hover:bg-amber-700">
                <RefreshCw className="mr-2 h-4 w-4" />
                Actualizar Estado
              </Button>

              <Button
                variant="outline"
                className="w-full border-amber-200 bg-transparent hover:bg-amber-50 dark:border-amber-800 dark:hover:bg-amber-950/30"
              >
                <Bell className="mr-2 h-4 w-4" />
                Configurar Notificaciones
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
