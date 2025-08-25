"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Shield,
  Coins,
  TrendingUp,
  Users,
  Zap,
  Globe,
  ChevronRight,
  Star,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float"></div>
          <div className="absolute top-40 right-32 w-6 h-6 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-float-delayed"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300 animate-fade-in">
            <Zap className="w-4 h-4 mr-2" />
            Powered by Andromeda Blockchain
          </Badge>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tokenize Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
              Intellectual Property
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Transform your ideas into tradeable digital assets. Create, manage,
            and monetize your IP with blockchain technology on the Andromeda
            ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-400">
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                Start Tokenizing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Watch Demo
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up delay-600">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                $2.5M+
              </div>
              <div className="text-gray-400">IP Value Tokenized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                1,200+
              </div>
              <div className="text-gray-400">Active Creators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to tokenize, manage, and monetize your
              intellectual property
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 p-8 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 backdrop-blur-sm">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Secure Tokenization
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Transform your IP into NFTs with military-grade security. Each
                asset is cryptographically protected and immutably recorded on
                the blockchain.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Coins className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Fractional Ownership
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Enable multiple investors to own shares of your IP through CW20
                tokens. Democratize access to high-value intellectual property.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 p-8 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 backdrop-blur-sm">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Revenue Splitting
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Automatically distribute royalties to token holders. Smart
                contracts ensure transparent and instant revenue sharing.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 p-8 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10 backdrop-blur-sm">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Global Marketplace
              </h3>
              <p className="text-gray-300 leading-relaxed">
  List your tokenized IP on our decentralized marketplace. Reach
  investors worldwide and maximize your asset&apos;s potential.
</p>

            </Card>

            {/* Feature 5 */}
            <Card className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 p-8 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 backdrop-blur-sm">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Community Driven
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Join a vibrant community of creators and investors. Collaborate,
                learn, and grow together in the IP tokenization space.
              </p>
            </Card>

            {/* Feature 6 */}
            <Card className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 p-8 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 backdrop-blur-sm">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                AI Valuation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Leverage AI-powered analytics to accurately value your IP
                assets. Get real-time market insights and pricing
                recommendations.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-xl animate-float-delayed"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Tokenize Your IP?
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of creators who have already transformed their
            intellectual property into valuable digital assets. Start your
            journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              Get Started Now
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-12 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">No Setup Fees</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">24/7 Support</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">Secure & Trusted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              IPChain
            </div>
            <p className="text-gray-400 mb-8">
              Tokenizing the future of intellectual property
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Contact
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              © 2024 IPChain. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
