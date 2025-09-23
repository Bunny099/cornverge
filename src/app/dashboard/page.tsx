import { Card, CardContent, CardHeader } from "@/components/ui/card";
import LogoutButton from "./components/logout";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full bg-gray-50 p-4 flex flex-col">
     
      <div className="flex justify-between items-center gap-3 p-4 border-b border-purple-300">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700">Cornverge Dashboard</h1>
        <LogoutButton />
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      
        <Card className="hover:shadow-lg transition-shadow duration-200 rounded-xl border border-purple-200">
          <CardHeader className="text-center text-lg font-semibold text-purple-700">Notion</CardHeader>
          <CardContent className="flex justify-center">
            <Button className="bg-purple-700 hover:bg-purple-800 text-white w-full">Connect</Button>
          </CardContent>
        </Card>

      
        <Card className="hover:shadow-lg transition-shadow duration-200 rounded-xl border border-red-200">
          <CardHeader className="text-center text-lg font-semibold text-red-700">Gmail</CardHeader>
          <CardContent className="flex justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white w-full">Connect</Button>
          </CardContent>
        </Card>

       
        <Card className="hover:shadow-lg transition-shadow duration-200 rounded-xl border border-blue-200">
          <CardHeader className="text-center text-lg font-semibold text-blue-700">Jira</CardHeader>
          <CardContent className="flex justify-center">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white w-full">Connect</Button>
          </CardContent>
        </Card>

      
        <Card className="hover:shadow-lg transition-shadow duration-200 rounded-xl border border-green-200">
          <CardHeader className="text-center text-lg font-semibold text-green-700">Calendar</CardHeader>
          <CardContent className="flex justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white w-full">Connect</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
