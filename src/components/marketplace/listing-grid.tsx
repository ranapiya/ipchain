"use client"
import { ListingCard } from "./listing-card"

const mockListings = [
  {
    id: "1",
    title: "Midnight Echo",
    type: "Song",
    price: "250 AAN",
    status: "fixed" as const,
    image: "/placeholder.svg?height=192&width=300",
    creator: "andr1...abcd",
    views: 1247,
    likes: 89,
    aiSignal: "high" as const,
  },
  {
    id: "2",
    title: "Digital Dreams Patent",
    type: "Patent",
    price: "1,500 AAN",
    timeLeft: "2d 14h",
    status: "auction" as const,
    image: "/placeholder.svg?height=192&width=300",
    creator: "andr1...efgh",
    views: 892,
    likes: 156,
    aiSignal: "medium" as const,
  },
  {
    id: "3",
    title: "Sunset Boulevard",
    type: "Film",
    price: "750 AAN",
    timeLeft: "6h 23m",
    status: "ending-soon" as const,
    image: "/placeholder.svg?height=192&width=300",
    creator: "andr1...ijkl",
    views: 2341,
    likes: 234,
    aiSignal: "high" as const,
  },
  {
    id: "4",
    title: "Abstract Harmony",
    type: "Art",
    price: "125 AAN",
    status: "fixed" as const,
    image: "/placeholder.svg?height=192&width=300",
    creator: "andr1...mnop",
    views: 567,
    likes: 78,
  },
  {
    id: "5",
    title: "Quantum Algorithm",
    type: "Software",
    price: "2,200 AAN",
    timeLeft: "1d 8h",
    status: "auction" as const,
    image: "/placeholder.svg?height=192&width=300",
    creator: "andr1...qrst",
    views: 1456,
    likes: 203,
    aiSignal: "high" as const,
  },
  {
    id: "6",
    title: "The Future Chronicles",
    type: "Book",
    price: "85 AAN",
    status: "fixed" as const,
    image: "/placeholder.svg?height=192&width=300",
    creator: "andr1...uvwx",
    views: 734,
    likes: 92,
    aiSignal: "low" as const,
  },
]

export function ListingGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {mockListings.map((listing) => (
        <ListingCard key={listing.id} {...listing} />
      ))}
    </div>
  )
}
