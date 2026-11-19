"use client";

import { RatingStars } from "@/components/rating-stars";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import type { Review } from "@/lib/data";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const initials = review.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const formattedDate = new Date(review.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="border-border/50">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={review.avatar} alt={review.author} />
            <AvatarFallback className="bg-primary/10 text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">{review.author}</h4>
              <span className="text-xs text-muted-foreground">{formattedDate}</span>
            </div>
            <RatingStars rating={review.rating} size="sm" />
            <p className="mt-2 text-sm text-muted-foreground">{review.text}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
