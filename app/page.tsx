
import { NotificationBanner } from "./components/NotificationBanner";
import { Navbar } from "./components/Navbar";
import { Button } from "@/components/ui/button";
import { ClientLogos } from "./components/ClientLogos";
// import '../app/global.css'


export default function Home() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      <NotificationBanner />
      <Navbar />


      <main className="relative">
        {/* {Background ito pre} */}
        <div className="absolute inset-0 bg-[url('')] bg-no-repeat bg-cover opacity-20 pointer-events-none" style={{ backgroundPosition: '50% 100%' }}/>

        <div className="max-w-7x1 mx-auto px-4 pt-20 pb-32 relative">
          <div className="max-w-5x1 mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">I am Ayanokoji{''}
              <span className="text-[#4D9EFF]">Web Development</span>
              <br />
              So you dont have to{''}
              <span className="text-[#4D9EFF]">worry about?</span>
            </h1>

            <p className="text-x1 text-gray-400 max-w-2xl mx-auto">Let your Mind to Explore and be happy</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-indigo-600">Get Started to with Data</Button>
              <Button size="lg" variant="outline" className="border-gray-700">Lear To Explore</Button>
            </div>
          </div>


          <ClientLogos />
        </div>
      </main>
    </div>
  );
}
