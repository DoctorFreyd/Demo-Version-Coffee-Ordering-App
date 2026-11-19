"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Clock, Coffee, Home, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("order") || "ORD-00000000";

  // Calculate estimated delivery time (30 min from now)
  const deliveryTime = new Date();
  deliveryTime.setMinutes(deliveryTime.getMinutes() + 30);
  const formattedTime = deliveryTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30"
          >
            <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Order Confirmed!
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Your coffee is on the way
            </p>
          </motion.div>

          {/* Order Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="mt-8">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <span className="text-muted-foreground">Order Number</span>
                    <span className="font-mono font-semibold">{orderNumber}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">
                        Estimated Delivery
                      </span>
                    </div>
                    <span className="font-semibold">{formattedTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Delivery Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Delivery Progress</h3>
                <div className="relative">
                  {/* Progress Line */}
                  <div className="absolute left-4 top-4 h-[calc(100%-32px)] w-0.5 bg-border" />
                  <div className="absolute left-4 top-4 h-8 w-0.5 bg-primary" />

                  {/* Steps */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium">Order Confirmed</p>
                        <p className="text-sm text-muted-foreground">
                          Your order has been received
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-border bg-background">
                        <Coffee className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-muted-foreground">
                          Preparing
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Your coffee is being crafted
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-border bg-background">
                        <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-muted-foreground">
                          Out for Delivery
                        </p>
                        <p className="text-sm text-muted-foreground">
                          On the way to you
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Button size="lg" asChild>
              <Link href="/dashboard">
                Track Order
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </motion.div>

          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            A confirmation email has been sent to your email address. If you have
            any questions, please contact our support team.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            <p className="mt-4 text-muted-foreground">Loading...</p>
          </div>
        </div>
      }
    >
      <OrderSuccessContent />
    </Suspense>
  );
}
