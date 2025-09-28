import Link from "next/link"
import { Button } from "@/components/ui/button"
import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import { Mail, Calendar, FileText, Zap } from "lucide-react"
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />

      <div className="relative overflow-hidden bg-gradient-to-br from-background via-muted/50 to-background">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="block bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Cornverge
              </span>
              <span className="block text-foreground">
                All your tools, one clean dashboard
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Save time, stay focused, and manage Gmail, Notion, Calendar, and Jira without switching tabs.
            </p>

            <div className="mt-10 flex justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-3 text-lg shadow-lg hover:scale-105 transition-transform"
              >
                <Link href="/auth/login">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>


        <div className="absolute top-0 left-1/2 -translate-x-1/2 blur-3xl opacity-30 w-[36rem] h-[36rem] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full pointer-events-none" />
      </div>


      <section className="py-20 px-6 md:px-12 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Why Cornverge?</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">Stop juggling multiple apps. Cornverge brings your work tools togther in one place and give you actionable insights so you know what to do first.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="p-6 bg-card rounded-2xl shadow-lg hover:shadow-2xl transition">
            <Zap className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h3 className="font-semibold text-xl mb-2">AI-Powered Priorities</h3>
            <p className="text-muted-foreground text-sm">Your AI assistant tells you what to tackle first so you never miss critical tasks.</p>
          </div>
          <div className="p-6 bg-card rounded-2xl shadow-lg hover:shadow-2xl transition">
            <Calendar className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h3 className="font-semibold text-xl mb-2">Calendar Integration</h3>
            <p className="text-muted-foreground text-sm">
              Connect your meetings from Google Calendar and see them prioritized with other tasks.
            </p>
          </div>
          <div className="p-6 bg-card rounded-2xl shadow-lg hover:shadow-2xl transition">
            <FileText className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h3 className="font-semibold text-xl mb-2">Jira & Notion Support</h3>
            <p className="text-muted-foreground text-sm">
              Track Jira issues and Notion tasks in one dashboard and let AI guide your workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-muted/5 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Connect Your Tools</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-12 text-lg">Gmail, Notion, Calender, Jira. Link your accounts and let Cornverge handle the rest.</p>

        <div className="flex flex-wrap justify-center gap-10">
          <Mail className="h-12 w-12 text-primary" />
          <Calendar className="h-12 w-12  text-primary" />
          <FileText className="h-12 w-12 text-primary" />
          <Zap className="h-12 w-12 text-primary" />

        </div>
      </section>

      <section className="py-20 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to simplify your workflow?</h2>
        <Button size={"lg"} className="rounded-full px-10 py-3 text-lg shadow-lg hover:scale-105 transition-transform">
          <Link href={"/auth/login"}>Get Started</Link>

        </Button>
      </section>


      <Footer />
    </div>
  )
}
