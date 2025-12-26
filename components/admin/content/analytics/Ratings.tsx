type Props = {
  ratings: {
    avgRating: number;
    total: number;
  };
};

export default function RatingsCard({ ratings }: Props) {
  return (
    <div className="rounded-xl border p-4">
      <p className="text-sm text-muted-foreground">Average Rating</p>
      <p className="text-3xl font-bold">{ratings.avgRating.toFixed(1)} / 5</p>
      <p className="text-xs text-muted-foreground">
        Based on {ratings.total} reviews
      </p>
    </div>
  );
}
