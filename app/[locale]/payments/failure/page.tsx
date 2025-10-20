"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { XCircle, ArrowLeft, RefreshCw, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PaymentFailure() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 via-white to-rose-50 p-4 dark:from-red-950/20 dark:via-background dark:to-rose-950/20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-red-200 shadow-xl dark:border-red-800">
          <CardHeader className="pb-4 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto mb-4"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                <XCircle className="h-12 w-12 text-red-600 dark:text-red-400" />
              </div>
            </motion.div>
            <CardTitle className="text-2xl font-bold text-red-700 dark:text-red-300">
              Pago Fallido
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              No pudimos procesar tu transacción
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/30">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Código de Error:
                  </span>
                  <span className="font-mono font-medium text-red-600 dark:text-red-400">
                    #ERR-4001
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Motivo:</span>
                  <span className="text-red-700 dark:text-red-300">
                    Fondos insuficientes
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fecha:</span>
                  <span>{new Date().toLocaleDateString("es-ES")}</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <strong>Sugerencias:</strong> Verifica que tu tarjeta tenga
                fondos suficientes o intenta con otro método de pago.
              </p>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-red-600 text-white hover:bg-red-700">
                <RefreshCw className="mr-2 h-4 w-4" />
                Intentar Nuevamente
              </Button>

              <Button
                variant="outline"
                className="w-full border-red-200 bg-transparent hover:bg-red-50 dark:border-red-800 dark:hover:bg-red-950/30"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Contactar Soporte
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
