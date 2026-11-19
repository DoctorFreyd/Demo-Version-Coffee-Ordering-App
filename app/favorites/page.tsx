"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CoffeeCard } from "@/components/coffee-card";
import { useFavorites } from "@/context/favorites-context";
import { products } from "@/lib/data";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Your Favorites
            </h1>
            <p className="mt-2 text-muted-foreground">
              Your saved coffee selections
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {favoriteProducts.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {favoriteProducts.map((product, index) => (
              <CoffeeCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <Heart className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">No favorites yet</h3>
            <p className="mt-2 max-w-sm text-muted-foreground">
              Start adding your favorite drinks by clicking the heart icon on any
              product card.
            </p>
            <Button className="mt-6" asChild>
              <Link href="/menu">Browse Menu</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
