"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createHash } from "crypto"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, Trash2, Loader2, CheckCircle2, XCircle } from "lucide-react"
import { useState } from "react"
import { executeContract } from "@/lib/andrjs/functions"
import useAndromedaClient from "@/lib/andrjs/hooks/useAndromedaClient"
import { useAndromedaStore } from "@/zustand/andromeda"

interface Creator {
  address: string
  percentage: number
}

export function Step1Tokenization() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [videoUrl, setVideoUrl] = useState("")
  const [creators, setCreators] = useState<Creator[]>([{ address: "", percentage: 100 }])
  const [territory, setTerritory] = useState("worldwide")
  const [term, setTerm] = useState("perpetual")

  const [nftDetails, setNftDetails] = useState<any>(null)
  const [mintStatus, setMintStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [isDescriptionLoading, setIsDescriptionLoading] = useState(false)

  const client = useAndromedaClient()
  const { accounts } = useAndromedaStore()
  const add = accounts?.[0]

  // generate tokenId from videoUrl
  const generateTokenId = (url: string) => {
    return createHash("sha256").update(url).digest("hex").slice(0, 20)
  }

  const addCreator = () => setCreators([...creators, { address: "", percentage: 0 }])
  const removeCreator = (i: number) => setCreators(creators.filter((_, idx) => idx !== i))
  const updateCreator = (i: number, field: keyof Creator, value: any) => {
    const updated = [...creators]
    updated[i] = { ...updated[i], [field]: value }
    setCreators(updated)
  }
  const totalPercentage = creators.reduce((sum, c) => sum + c.percentage, 0)

  const createNft = async () => {
    if (!videoUrl || !name) {
      alert("Please fill all fields")
      return
    }

    const tokenId = generateTokenId(videoUrl)
    setMintStatus("loading")
    setIsDescriptionLoading(true)

    const msg = {
      mint: {
        token_id: `${tokenId}`,
        owner: `${add.address}`,
        extension: {
          publisher: "Andromeda",
        },
      },
    }

    try {
      const res = await executeContract(
        client!,
        "andr1cmdm8z96k2z0h5tw3mt4lxp4m94vw7qt5ecm9n906g7me6ryeejq4sgcqz",
        msg
      )

      // fake delay for description loading
      setTimeout(() => {
        setNftDetails({
          name,
          description,
          videoUrl,
          creators,
          rights: { territory, term },
          tokenId,
          txHash: res.transactionHash,
        })
        setMintStatus("success")
        setIsDescriptionLoading(false)
      }, 2000)
    } catch (error) {
      console.log(error)
      setMintStatus("error")
      setIsDescriptionLoading(false)
    }
  }

  const renderMintStatus = () => {
    if (mintStatus === "loading") {
      return (
        <div className="flex flex-col items-center space-y-2">
          <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
          <p className="text-gray-600">Minting NFT...</p>
        </div>
      )
    }
    if (mintStatus === "success") {
      return (
        <div className="flex flex-col items-center space-y-2 text-green-600">
          <CheckCircle2 className="h-6 w-6" />
          <p>Mint successful!</p>
        </div>
      )
    }
    if (mintStatus === "error") {
      return (
        <div className="flex flex-col items-center space-y-2 text-red-600">
          <XCircle className="h-6 w-6" />
          <p>Mint failed. Try again.</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-6">
        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle>Create NFT</CardTitle>
            <CardDescription>Fill in details to mint your IP NFT</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="mb-3.5">Name</Label>
              <Input placeholder="NFT Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <Label className="mb-3.5">Description</Label>
              <Textarea placeholder="Enter description..." value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
              <Label className="mb-3.5">Video URL</Label>
              <Input placeholder="https://..." value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
            </div>
            <div className="space-y-2 flex items-center">
              <Button 
                onClick={createNft} 
                className="flex-1 bg-primary hover:bg-primary/90 w-lg flex items-center justify-center cursor-pointer"
                disabled={mintStatus === "loading"}
              >
                {mintStatus === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" /> Minting...
                  </>
                ) : (
                  "Mint NFT"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Creators & Rights */}
        <Card>
  <CardHeader>
    <CardTitle>Creators & Rights</CardTitle>
    <CardDescription>
      Define ownership, usage rights, and legal details for your NFT
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-6">
    {/* Informational Box */}
    <div className="p-4 rounded-lg border bg-muted/50 text-sm space-y-2">
      <h4 className="font-medium">ℹ️ About Video Patent & Rights</h4>
      <p>
        If your NFT is linked to a <strong>video or multimedia content</strong>,
        you may need to declare intellectual property (IP) rights. A{" "}
        <strong>video patent</strong> typically refers to legal protection over
        unique methods, processes, or technologies used in video creation or
        distribution (e.g., compression, rendering).
      </p>
      <p>
        When minting an NFT, you are not automatically transferring a patent,
        but you <em>can</em> specify rights such as:
      </p>
      <ul className="list-disc pl-5">
        <li>Who owns usage/distribution rights of the video.</li>
        <li>Whether buyers get commercial use permissions or personal use only.</li>
        <li>If royalties are tied to patent-protected technology.</li>
      </ul>
      <p className="text-muted-foreground">
        ⚠️ Note: This section is informational. For legally binding terms,
        consult with an IP lawyer.
      </p>
    </div>
  </CardContent>
</Card>

      </div>

      <div className="space-y-6">
        {/* NFT Details after Mint */}
        <Card>
          <CardHeader>
            <CardTitle>NFT Details</CardTitle>
            <CardDescription>Will appear after mint</CardDescription>
          </CardHeader>
          <CardContent>
            {!nftDetails ? (
              mintStatus === "loading" ? renderMintStatus() : (
                <p className="text-muted-foreground text-sm">No NFT minted yet</p>
              )
            ) : (
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold text-blue-600">Name:</span> {nftDetails.name}</p>
                <p>
                  <span className="font-semibold text-green-600">Description:</span>{" "}
                  {isDescriptionLoading ? (
                    <span className="text-gray-500 animate-pulse">Loading description...</span>
                  ) : (
                    nftDetails.description
                  )}
                </p>
                <p><span className="font-semibold text-purple-600">Video URL:</span> {nftDetails.videoUrl}</p>
                <p><span className="font-semibold text-orange-600">Token ID:</span> {nftDetails.tokenId}</p>
                <p><span className="font-semibold text-pink-600">Tx Hash:</span> {nftDetails.txHash}</p>
                <p><span className="font-semibold text-indigo-600">Creators:</span></p>
                <pre className="bg-muted p-2 rounded-md">{JSON.stringify(nftDetails.creators, null, 2)}</pre>
                <p><span className="font-semibold text-red-600">Rights:</span></p>
                <pre className="bg-muted p-2 rounded-md">{JSON.stringify(nftDetails.rights, null, 2)}</pre>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Minting Actions */}
        <Card>
          <CardHeader>
            <CardTitle>CW721 NFT Minting</CardTitle>
            <CardDescription>Create your intellectual property NFT on Andromeda</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="font-medium text-primary mb-2">What is CW721?</h4>
              <p className="text-sm text-muted-foreground">
                CW721 is the NFT standard on Cosmos chains. Your IP will be minted as a unique NFT with embedded royalty metadata.
              </p>
            </div>
            {renderMintStatus()}
            <div className="flex gap-2">
              <a 
  href="https://docs.andromedaprotocol.io/andromeda/andromeda-digital-objects/cw721" 
  target="_blank" 
  rel="noopener noreferrer"
  className="flex-1"
>
  <Button 
    className="w-full bg-primary hover:bg-primary/90 cursor-pointer"
  >
    Know More
  </Button>
</a>

              <Button variant="outline">Preview</Button>
              <Button variant="outline">Save Draft</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
