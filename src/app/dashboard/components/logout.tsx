"use client"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
export default function LogoutButton(){
const router = useRouter()
    async function logOutFun(){
        await signOut({redirect:false})
        router.push("/")
    }
    return <div onClick={logOutFun} className="px-4 py-1 rounded-md cursor-pointer bg-red-700 text-white">Logout</div>
}