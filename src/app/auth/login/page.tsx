"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { signIn } from "next-auth/react"
import { MoveLeft } from 'lucide-react';
import Link from "next/link";

export default function LoginPage() {
  async function loginFun() {
    await signIn("google", { callbackUrl: "/dashboard" })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 p-4">
      <Card className="shadow-lg rounded-3xl w-full max-w-sm md:max-w-md p-6 relative">
        
        {/* Back arrow */}
        <Link href={"/"} className="absolute top-6 left-6">
          <MoveLeft className="h-6 w-6 text-gray-600 hover:text-gray-700 transition-colors cursor-pointer" />
        </Link>

        <CardHeader className="text-center mt-4">
          <h1 className="text-3xl font-extrabold text-black">
            <span className="text-purple-700">Cornverge</span> Login
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Sign in to continue to your dashboard
          </p>
        </CardHeader>

        <CardContent className="mt-4">
          <Button 
            className="w-full bg-black text-white hover:bg-purple-700 transition-transform transform hover:scale-105 py-3 rounded-full cursor-pointer"
            onClick={loginFun}
          >
            Continue with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
