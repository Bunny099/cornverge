"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full  p-4 flex flex-col">
     
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      
        <Card className="hover:shadow-lg transition-shadow duration-200 rounded-xl border border-border">
          <CardHeader className="text-center text-lg font-semibold text-primary">Notion</CardHeader>
          <CardContent className="flex justify-center">
            <Button onClick={()=>window.location.href="/api/notion/connect"} className="bg-primary  text-primary-foreground w-full">
            Connect</Button>
          </CardContent>
        </Card>

      
      </div>
    </div>
  );
}
