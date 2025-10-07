"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { signIn } from "next-auth/react"
import { MoveLeft } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  async function loginFun() {
    await signIn("google", { callbackUrl: "/dashboard" })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-2">
      <Card className="shadow-lg rounded-3xl w-full max-w-sm md:max-w-md p-6 relative">

        <Link href={"/"} className="absolute top-6 left-6">
          <MoveLeft className="h-6 w-6 text-foreground transition-colors cursor-pointer" />
        </Link>
        <CardHeader className="text-center mt-4">
          <h1 className="text-3xl font-extrabold text-foreground">
            <span className="text-primary">Cornverge</span> Login
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Sign in to continue to your dashboard
          </p>
        </CardHeader>

        <CardContent className="mt-4">
          <Button
            className="w-full rounded-full shadow-md cursor-pointer"
            onClick={loginFun}
          >
            Continue with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
