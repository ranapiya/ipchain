import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Eye, Heart, TrendingUp } from "lucide-react"
import Link from "next/link"

interface ListingCardProps {
  id: string
  title: string
  type: string
  price: string
  timeLeft?: string
  status: "fixed" | "auction" | "ending-soon"
  image: string
  creator: string
  views: number
  likes: number
  aiSignal?: "high" | "medium" | "low"
}

export function ListingCard({
  id,
  title,
  type,
  price,
  timeLeft,
  status,
  image,
  creator,
  views,
  likes,
  aiSignal,
}: ListingCardProps) {
  const getStatusBadge = () => {
    switch (status) {
      case "auction":
        return <Badge className="bg-secondary">Auction</Badge>
      case "ending-soon":
        return <Badge className="bg-destructive">Ending Soon</Badge>
      default:
        return <Badge variant="outline">Fixed Price</Badge>
    }
  }

  const getAISignalBadge = () => {
    if (!aiSignal) return null
    const colors = {
      high: "bg-accent",
      medium: "bg-secondary",
      low: "bg-muted",
    }
    return (
      <Badge className={`${colors[aiSignal]} text-xs`}>
        <TrendingUp className="h-3 w-3 mr-1" />
        AI: {aiSignal}
      </Badge>
    )
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative">
          <img
  src={image || "/default-placeholder.png"} // use a real file inside /public
  alt={title}
  className="w-full h-48 object-cover rounded-t-lg"
  onError={(e) => {
    e.currentTarget.onerror = null // prevent infinite loop
    e.currentTarget.src = "/default-placeholder.png"
  }}
/>

          <div className="absolute top-3 left-3 flex gap-2">
            {getStatusBadge()}
            {getAISignalBadge()}
          </div>
          <div className="absolute top-3 right-3">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 bg-background/80 hover:bg-background">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-muted-foreground">{type}</p>
          <p className="text-xs text-muted-foreground">by {creator}</p>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {views}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="h-3 w-3" />
              {likes}
            </span>
          </div>
          {timeLeft && (
            <span className="flex items-center gap-1 text-destructive">
              <Clock className="h-3 w-3" />
              {timeLeft}
            </span>
          )}
        </div>

        <div className="pt-2 border-t">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">{status === "auction" ? "Current Bid" : "Price"}</p>
              <p className="text-xl font-bold text-primary">{price}</p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Link href={`/marketplace/${id}`} className="w-full">
          <Button className="w-full bg-primary hover:bg-primary/90">
            {status === "auction" ? "Place Bid" : "Buy Now"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
