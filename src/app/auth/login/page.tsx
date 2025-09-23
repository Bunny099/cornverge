
"use client"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { signIn } from "next-auth/react"

export default function LoginPage() {
  async function loginFun() {
    await signIn("google", { callbackUrl: "/dashboard" })
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-purple-50 p-4">
      <Card className="w-[360px] shadow-lg rounded-2xl border border-purple-200">
        <CardHeader className="text-center border-b border-purple-200 pb-3">
          <h1 className="text-2xl font-bold text-purple-700">Cornverge Login</h1>
          <p className="text-sm text-gray-500 mt-1">Sign in to continue to your dashboard</p>
        </CardHeader>

        <CardContent className="pt-6">
          <button
            onClick={loginFun}
            className="w-full py-2 px-4 rounded-lg bg-purple-700 text-white font-medium 
                       hover:bg-purple-800 transition-colors duration-200 shadow-sm"
          >
            Login with Google
          </button>
        </CardContent>

        <CardFooter className="flex justify-center pt-2">
          <p className="text-xs text-gray-400">By signing in, you agree to our Privacy & Terms</p>
        </CardFooter>
      </Card>
    </div>
  )
}
