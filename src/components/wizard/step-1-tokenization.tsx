"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Upload, Plus, Trash2 } from "lucide-react"
import { useState } from "react"

interface Creator {
  address: string
  percentage: number
}

export function Step1Tokenization() {
  const [creators, setCreators] = useState<Creator[]>([{ address: "", percentage: 100 }])

  const addCreator = () => {
    setCreators([...creators, { address: "", percentage: 0 }])
  }

  const removeCreator = (index: number) => {
    setCreators(creators.filter((_, i) => i !== index))
  }

  const updateCreator = (index: number, field: keyof Creator, value: string | number) => {
    const updated = [...creators]
    updated[index] = { ...updated[index], [field]: value }
    setCreators(updated)
  }

  const totalPercentage = creators.reduce((sum, creator) => sum + creator.percentage, 0)

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Asset Information</CardTitle>
            <CardDescription>Enter the details of your intellectual property</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="asset-type">Asset Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select asset type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="song">Song</SelectItem>
                  <SelectItem value="patent">Patent</SelectItem>
                  <SelectItem value="film">Film</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="e.g., Midnight Echo" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your intellectual property..."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label>Cover/Proof Files</Label>
              <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground mb-2">Drag and drop files here, or click to browse</p>
                <Button variant="outline" size="sm">
                  Choose Files
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Creators & Rights</CardTitle>
            <CardDescription>Define ownership and usage rights</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Creators</Label>
                <Button variant="outline" size="sm" onClick={addCreator}>
                  <Plus className="h-4 w-4 mr-1" />
                  Add Creator
                </Button>
              </div>

              {creators.map((creator, index) => (
                <div key={index} className="flex gap-2 items-end">
                  <div className="flex-1">
                    <Label className="text-xs">Wallet Address</Label>
                    <Input
                      placeholder="andr1..."
                      value={creator.address}
                      onChange={(e) => updateCreator(index, "address", e.target.value)}
                    />
                  </div>
                  <div className="w-20">
                    <Label className="text-xs">%</Label>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      value={creator.percentage}
                      onChange={(e) => updateCreator(index, "percentage", Number(e.target.value))}
                    />
                  </div>
                  {creators.length > 1 && (
                    <Button variant="outline" size="sm" onClick={() => removeCreator(index)} className="h-10 w-10 p-0">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}

              <div className="flex justify-between items-center text-sm">
                <span>Total:</span>
                <Badge variant={totalPercentage === 100 ? "secondary" : "destructive"}>{totalPercentage}%</Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="territory">Territory</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select territory" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="worldwide">Worldwide</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="eu">European Union</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="term">Term</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select term" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="perpetual">Perpetual</SelectItem>
                    <SelectItem value="10-years">10 Years</SelectItem>
                    <SelectItem value="5-years">5 Years</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Auto-Generated</CardTitle>
            <CardDescription>These values will be automatically filled</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Collection Address</Label>
              <div className="p-3 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Will be set from Settings</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Token ID</Label>
              <div className="p-3 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Generated after mint</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label>On-chain Metadata Preview</Label>
              <div className="p-3 bg-muted rounded-md text-sm">
                <pre className="text-muted-foreground">
                  {JSON.stringify(
                    {
                      name: "Midnight Echo",
                      description: "Original song composition...",
                      creators: [{ address: "andr1...", percentage: 100 }],
                      rights: { territory: "worldwide", term: "perpetual" },
                    },
                    null,
                    2,
                  )}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>CW721 NFT Minting</CardTitle>
            <CardDescription>Create your intellectual property NFT on Andromeda</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="font-medium text-primary mb-2">What is CW721?</h4>
              <p className="text-sm text-muted-foreground">
                CW721 is the NFT standard on Cosmos chains. Your IP will be minted as a unique NFT with embedded royalty
                metadata, ensuring you receive payments from future sales and licensing.
              </p>
            </div>

            <div className="flex gap-2">
              <Button className="flex-1 bg-primary hover:bg-primary/90">Mint NFT</Button>
              <Button variant="outline">Preview</Button>
              <Button variant="outline">Save Draft</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
