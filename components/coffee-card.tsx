"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/context/cart-context";
import { useFavorites } from "@/context/favorites-context";
import type { Product } from "@/lib/data";

interface CoffeeCardProps {
  product: Product;
  index?: number;
}

export function CoffeeCard({ product, index = 0 }: CoffeeCardProps) {
  const { addItem, openCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: "medium",
      milk: "whole",
      sugar: 50,
      extraShots: 0,
      toppings: [],
    });
    openCart();
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(product.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link href={`/product/${product.id}`}>
        <Card className="group overflow-hidden border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
          <CardContent className="p-0">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Favorite Button */}
              <Button
                variant="ghost"
                size="icon"
                className={`absolute right-2 top-2 h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm transition-all ${
                  isFavorite(product.id)
                    ? "text-red-500"
                    : "text-muted-foreground hover:text-red-500"
                }`}
                onClick={handleToggleFavorite}
              >
                <Heart
                  className="h-4 w-4"
                  fill={isFavorite(product.id) ? "currentColor" : "none"}
                />
              </Button>

              {/* Popular Badge */}
              {product.isPopular && (
                <div className="absolute left-2 top-2 rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
              )}

              {/* Quick Add Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                className="absolute bottom-3 left-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <Button
                  onClick={handleAddToCart}
                  className="w-full gap-2"
                  size="sm"
                >
                  <Plus className="h-4 w-4" />
                  Add to Cart
                </Button>
              </motion.div>
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold leading-tight">{product.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviewCount})
                  </span>
                </div>
                <span className="text-lg font-bold text-primary">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
