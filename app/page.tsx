"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Leaf, Truck, Users, Star, Smartphone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CoffeeCard } from "@/components/coffee-card";
import { ReviewCard } from "@/components/review-card";
import { Input } from "@/components/ui/input";
import { products, reviews } from "@/lib/data";

const featuredProducts = products.filter((p) => p.isPopular).slice(0, 4);
const featuredReviews = reviews.slice(0, 4);

const features = [
  {
    icon: Flame,
    title: "Freshly Roasted",
    description: "Our beans are roasted daily to ensure maximum freshness and flavor in every cup.",
  },
  {
    icon: Users,
    title: "Expert Baristas",
    description: "Our team of certified baristas craft each drink with precision and care.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Get your coffee delivered hot and fresh within 30 minutes or less.",
  },
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    description: "We partner with ethical farms that practice sustainable coffee cultivation.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              >
                Premium Coffee Experience
              </motion.span>
              <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Your Perfect Coffee{" "}
                Demo Version {" "}
                <span className="text-primary">Delivered Fresh</span>
              </h1>
              <p className="mt-6 text-pretty text-lg text-muted-foreground sm:text-xl">
                Order premium coffee crafted by expert baristas. Customize your drinks,
                enjoy fast delivery, and experience the perfect cup every time.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/menu">
                    Order Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/menu">View Menu</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center gap-8 lg:justify-start">
                <div>
                  <p className="text-3xl font-bold">50K+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <p className="text-3xl font-bold">4.9</p>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <p className="text-3xl font-bold">20+</p>
                  <p className="text-sm text-muted-foreground">Coffee Varieties</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto w-full max-w-lg lg:max-w-none"
            >
              <div className="relative aspect-square">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
                <Image
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=800&fit=crop"
                  alt="Premium coffee cup with latte art"
                  fill
                  className="rounded-3xl object-cover"
                  priority
                />
              </div>
              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -left-4 top-1/4 rounded-xl bg-card p-3 shadow-lg sm:p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Truck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Fast Delivery</p>
                    <p className="text-xs text-muted-foreground">30 min or less</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 bottom-1/4 rounded-xl bg-card p-3 shadow-lg sm:p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Top Rated</p>
                    <p className="text-xs text-muted-foreground">4.9/5 Stars</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Drinks
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our most loved coffee selections, crafted to perfection
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {featuredProducts.map((product, index) => (
              <CoffeeCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/menu">
                View Full Menu
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose CoffeeHub
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experience the difference that quality and care make
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={fadeInUp}>
                <Card className="h-full border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real reviews from our happy customers
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {featuredReviews.map((review) => (
              <motion.div key={review.id} variants={fadeInUp}>
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mobile App Banner */}
      <section className="bg-primary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Get the CoffeeHub App
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Order faster, earn rewards, and get exclusive offers. Download our
                mobile app for the best coffee experience on the go.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2"
                >
                  <Download className="h-5 w-5" />
                  App Store
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2"
                >
                  <Download className="h-5 w-5" />
                  Google Play
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-primary bg-primary-foreground"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-medium text-primary-foreground">10K+ Downloads</p>
                  <p className="text-sm text-primary-foreground/70">Join our community</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative mx-auto"
            >
              <div className="relative mx-auto h-[400px] w-[200px]">
                <div className="absolute inset-0 rounded-[2.5rem] bg-primary-foreground/20 backdrop-blur-sm" />
                <div className="absolute inset-2 flex items-center justify-center rounded-[2rem] bg-card">
                  <div className="text-center">
                    <Smartphone className="mx-auto h-12 w-12 text-primary" />
                    <p className="mt-4 text-sm font-medium">CoffeeHub App</p>
                    <p className="text-xs text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Subscribe to our newsletter for exclusive offers, new product
              announcements, and brewing tips.
            </p>
            <form className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="sm:w-80"
              />
              <Button type="submit" size="lg">
                Subscribe
              </Button>
            </form>
            <p className="mt-4 text-sm text-muted-foreground">
              By subscribing, you agree to our Privacy Policy. We respect your inbox.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
