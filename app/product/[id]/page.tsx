"use client";

import { useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Star,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RatingStars } from "@/components/rating-stars";
import { ReviewCard } from "@/components/review-card";
import { CoffeeCard } from "@/components/coffee-card";
import { QuantitySelector } from "@/components/quantity-selector";
import { useCart } from "@/context/cart-context";
import { useFavorites } from "@/context/favorites-context";
import { products, reviews } from "@/lib/data";
import type { CartItem } from "@/lib/types";

const sizes = [
  { value: "small", label: "Small", priceModifier: -0.5 },
  { value: "medium", label: "Medium", priceModifier: 0 },
  { value: "large", label: "Large", priceModifier: 0.75 },
] as const;

const milkTypes = [
  { value: "whole", label: "Whole Milk", priceModifier: 0 },
  { value: "oat", label: "Oat Milk", priceModifier: 0.5 },
  { value: "almond", label: "Almond Milk", priceModifier: 0.5 },
  { value: "soy", label: "Soy Milk", priceModifier: 0.5 },
] as const;

const sugarLevels = [
  { value: 0, label: "No Sugar" },
  { value: 25, label: "25%" },
  { value: 50, label: "50%" },
  { value: 75, label: "75%" },
  { value: 100, label: "100%" },
] as const;

const extraShots = [
  { value: 0, label: "None", priceModifier: 0 },
  { value: 1, label: "+1 Shot", priceModifier: 0.75 },
  { value: 2, label: "+2 Shots", priceModifier: 1.5 },
  { value: 3, label: "+3 Shots", priceModifier: 2.25 },
] as const;

const toppings = [
  { value: "caramel", label: "Caramel Drizzle", priceModifier: 0.5 },
  { value: "chocolate", label: "Chocolate Sauce", priceModifier: 0.5 },
  { value: "whipped-cream", label: "Whipped Cream", priceModifier: 0.75 },
  { value: "cinnamon", label: "Cinnamon", priceModifier: 0.25 },
];

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const { addItem, openCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  const product = products.find((p) => p.id === params.id);
  const productReviews = reviews.filter((r) => r.productId === params.id);
  const relatedProducts = products
    .filter((p) => p.id !== params.id && p.category === product?.category)
    .slice(0, 4);

  const [selectedSize, setSelectedSize] = useState<"small" | "medium" | "large">("medium");
  const [selectedMilk, setSelectedMilk] = useState<"whole" | "oat" | "almond" | "soy">("whole");
  const [selectedSugar, setSelectedSugar] = useState<0 | 25 | 50 | 75 | 100>(50);
  const [selectedShots, setSelectedShots] = useState<0 | 1 | 2 | 3>(0);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);

  const totalPrice = useMemo(() => {
    if (!product) return 0;

    let price = product.price;

    // Size modifier
    const sizeOption = sizes.find((s) => s.value === selectedSize);
    if (sizeOption) price += sizeOption.priceModifier;

    // Milk modifier
    const milkOption = milkTypes.find((m) => m.value === selectedMilk);
    if (milkOption) price += milkOption.priceModifier;

    // Extra shots modifier
    const shotsOption = extraShots.find((s) => s.value === selectedShots);
    if (shotsOption) price += shotsOption.priceModifier;

    // Toppings modifier
    selectedToppings.forEach((t) => {
      const topping = toppings.find((top) => top.value === t);
      if (topping) price += topping.priceModifier;
    });

    return price * quantity;
  }, [product, selectedSize, selectedMilk, selectedShots, selectedToppings, quantity]);

  const handleAddToCart = () => {
    if (!product) return;

    const item: CartItem = {
      productId: product.id,
      name: product.name,
      price: totalPrice / quantity,
      image: product.image,
      quantity,
      size: selectedSize,
      milk: selectedMilk,
      sugar: selectedSugar,
      extraShots: selectedShots,
      toppings: selectedToppings,
    };

    addItem(item);
    openCart();
  };

  const handleToggleTopping = (value: string) => {
    setSelectedToppings((prev) =>
      prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]
    );
  };

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p className="mt-2 text-muted-foreground">
          The product you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button className="mt-4" asChild>
          <Link href="/menu">Back to Menu</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Button
            variant="ghost"
            size="sm"
            className="mb-6"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              <Button
                variant="ghost"
                size="icon"
                className={`absolute right-4 top-4 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm ${
                  isFavorite(product.id) ? "text-red-500" : ""
                }`}
                onClick={() => toggleFavorite(product.id)}
              >
                <Heart
                  className="h-5 w-5"
                  fill={isFavorite(product.id) ? "currentColor" : "none"}
                />
              </Button>
              {product.isPopular && (
                <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground">
                  Popular
                </div>
              )}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-sm font-medium text-primary capitalize">
                  {product.category} Coffee
                </span>
                <h1 className="mt-1 text-3xl font-bold">{product.name}</h1>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-primary">
                  ${totalPrice.toFixed(2)}
                </p>
                {quantity > 1 && (
                  <p className="text-sm text-muted-foreground">
                    ${(totalPrice / quantity).toFixed(2)} each
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <RatingStars
                rating={product.rating}
                showValue
                reviewCount={product.reviewCount}
              />
            </div>

            <p className="mt-4 text-muted-foreground">{product.description}</p>

            <Separator className="my-6" />

            {/* Customization Options */}
            <div className="space-y-6">
              {/* Size Selection */}
              <div>
                <Label className="text-sm font-medium">Size</Label>
                <RadioGroup
                  value={selectedSize}
                  onValueChange={(v) => setSelectedSize(v as typeof selectedSize)}
                  className="mt-3 flex flex-wrap gap-3"
                >
                  {sizes.map((size) => (
                    <Label
                      key={size.value}
                      className={`flex cursor-pointer items-center gap-2 rounded-lg border-2 px-4 py-3 transition-all ${
                        selectedSize === size.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <RadioGroupItem value={size.value} className="sr-only" />
                      <span className="font-medium">{size.label}</span>
                      {size.priceModifier !== 0 && (
                        <span className="text-sm text-muted-foreground">
                          {size.priceModifier > 0 ? "+" : ""}${size.priceModifier.toFixed(2)}
                        </span>
                      )}
                      {selectedSize === size.value && (
                        <Check className="ml-auto h-4 w-4 text-primary" />
                      )}
                    </Label>
                  ))}
                </RadioGroup>
              </div>

              {/* Milk Selection */}
              <div>
                <Label className="text-sm font-medium">Milk Type</Label>
                <RadioGroup
                  value={selectedMilk}
                  onValueChange={(v) => setSelectedMilk(v as typeof selectedMilk)}
                  className="mt-3 grid grid-cols-2 gap-3"
                >
                  {milkTypes.map((milk) => (
                    <Label
                      key={milk.value}
                      className={`flex cursor-pointer items-center gap-2 rounded-lg border-2 px-4 py-3 transition-all ${
                        selectedMilk === milk.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <RadioGroupItem value={milk.value} className="sr-only" />
                      <span className="font-medium">{milk.label}</span>
                      {milk.priceModifier > 0 && (
                        <span className="text-sm text-muted-foreground">
                          +${milk.priceModifier.toFixed(2)}
                        </span>
                      )}
                      {selectedMilk === milk.value && (
                        <Check className="ml-auto h-4 w-4 text-primary" />
                      )}
                    </Label>
                  ))}
                </RadioGroup>
              </div>

              {/* Sugar Level */}
              <div>
                <Label className="text-sm font-medium">Sugar Level</Label>
                <RadioGroup
                  value={selectedSugar.toString()}
                  onValueChange={(v) => setSelectedSugar(parseInt(v) as typeof selectedSugar)}
                  className="mt-3 flex flex-wrap gap-2"
                >
                  {sugarLevels.map((sugar) => (
                    <Label
                      key={sugar.value}
                      className={`flex cursor-pointer items-center justify-center rounded-lg border-2 px-4 py-2 transition-all ${
                        selectedSugar === sugar.value
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <RadioGroupItem value={sugar.value.toString()} className="sr-only" />
                      <span className="text-sm font-medium">{sugar.label}</span>
                    </Label>
                  ))}
                </RadioGroup>
              </div>

              {/* Extra Shots */}
              <div>
                <Label className="text-sm font-medium">Extra Espresso Shots</Label>
                <RadioGroup
                  value={selectedShots.toString()}
                  onValueChange={(v) => setSelectedShots(parseInt(v) as typeof selectedShots)}
                  className="mt-3 flex flex-wrap gap-3"
                >
                  {extraShots.map((shot) => (
                    <Label
                      key={shot.value}
                      className={`flex cursor-pointer items-center gap-2 rounded-lg border-2 px-4 py-2 transition-all ${
                        selectedShots === shot.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <RadioGroupItem value={shot.value.toString()} className="sr-only" />
                      <span className="text-sm font-medium">{shot.label}</span>
                      {shot.priceModifier > 0 && (
                        <span className="text-xs text-muted-foreground">
                          +${shot.priceModifier.toFixed(2)}
                        </span>
                      )}
                    </Label>
                  ))}
                </RadioGroup>
              </div>

              {/* Toppings */}
              <div>
                <Label className="text-sm font-medium">Toppings</Label>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {toppings.map((topping) => (
                    <Label
                      key={topping.value}
                      className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 px-4 py-3 transition-all ${
                        selectedToppings.includes(topping.value)
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Checkbox
                        checked={selectedToppings.includes(topping.value)}
                        onCheckedChange={() => handleToggleTopping(topping.value)}
                      />
                      <div className="flex-1">
                        <span className="text-sm font-medium">{topping.label}</span>
                        <span className="ml-2 text-xs text-muted-foreground">
                          +${topping.priceModifier.toFixed(2)}
                        </span>
                      </div>
                    </Label>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-4 pt-4">
                <QuantitySelector
                  value={quantity}
                  onChange={setQuantity}
                  size="lg"
                />
                <Button
                  size="lg"
                  className="flex-1 gap-2"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart - ${totalPrice.toFixed(2)}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reviews and Related Products */}
        <div className="mt-16">
          <Tabs defaultValue="reviews">
            <TabsList>
              <TabsTrigger value="reviews">
                Reviews ({productReviews.length})
              </TabsTrigger>
              <TabsTrigger value="related">Related Products</TabsTrigger>
            </TabsList>
            <TabsContent value="reviews" className="mt-6">
              {productReviews.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {productReviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                    <Star className="h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 font-semibold">No reviews yet</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Be the first to review this product
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            <TabsContent value="related" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((product, index) => (
                  <CoffeeCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
