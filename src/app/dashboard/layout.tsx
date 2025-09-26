import { getServerSession } from "next-auth"
import { authOptions } from "../../../lib/auth"
import { redirect } from "next/navigation";
export default async function DahboardLayout({children}:{children:React.ReactNode}){

    const session = await getServerSession(authOptions);
    if(!session){
        redirect("/auth/login")
    }
    return <div>{children}</div>
}