"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ArrowLeft, Mail, Loader2, Shield } from "lucide-react";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { api } from "@/lib/axiosClient";

const schema = z.object({
  email: z.string().email("Por favor ingresa un email válido"),
});

export default function RequestReset() {
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    try {
      setLoading(true);

      await api("/auth/request-reset", {
        method: "POST",
        data: values,
      });

      setEmailSent(true);
      toast({
        title: "Email enviado ✉️",
        description: "Revisa tu bandeja de entrada para continuar.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: `${error}`,
      });
    } finally {
      setLoading(false);
    }
  };

  if (emailSent) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
              <Mail className="h-8 w-8" />
            </div>
            <CardTitle className="text-2xl font-bold">Email Enviado</CardTitle>
            <CardDescription className="text-base">
              Hemos enviado las instrucciones a tu correo electrónico
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border p-4">
              <p className="text-sm">
                Revisa tu bandeja de entrada y sigue las instrucciones para
                restablecer tu contraseña. El enlace expirará en 24 horas.
              </p>
            </div>
            <Link href="/login">
              <Button variant="ghost" className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al Login
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
            <Shield className="h-8 w-8" />
          </div>
          <CardTitle className="text-2xl font-bold">
            Restablecer Contraseña
          </CardTitle>
          <CardDescription className="text-base">
            Ingresa tu email para recibir instrucciones de restablecimiento
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">
                      Correo Electrónico
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        className="h-12 text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Te enviaremos un enlace seguro para restablecer tu
                      contraseña
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="h-12 w-full text-base font-medium"
                disabled={loading}
              >
                {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                Enviar Instrucciones
              </Button>
            </form>
          </Form>

          <div className="mt-6 border-t pt-6 text-center">
            <p className="mb-3 text-sm text-muted-foreground">
              ¿Recordaste tu contraseña?
            </p>
            <Link href="/auth/login">
              <Button variant="ghost" className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al Login
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
