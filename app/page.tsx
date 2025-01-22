import { NotificationBanner } from "./components/NotificationBanner";
import { Navbar } from "./components/Navbar";
import { Button } from "@/components/ui/button";
import { ClientLogos } from "./components/ClientLogos";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { AnimatedText } from "./components/AnimatedText";
import { AnimatedButton } from "./components/AnimatedButton";
// import '../app/global.css'


export default function Home() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      <NotificationBanner />
      <Navbar />


      <main className="relative">
        {/* {Background ito pre} */}
        <AnimatedBackground />
        
       <div className="max-w-7xl mx-auto px-4 pt-20 pb-32 relative">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-5x1 md:text-6xl font-bold leading-tight">
            <AnimatedText text="I am Ayanokoji " delay={0.4} />
            <AnimatedText text="Web Development" className="text-[#4D9EFF]" delay={0.6} />
            <br />
            <br />
            <AnimatedText text="so you don't have to worry " delay={0.8} />
            <AnimatedText text="Let your team to ship features faster" className="text-xl text-gray-500 max-w-2x1 mx-auto"
            delay={1.2}
            />

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <AnimatedButton size="lg" className="bg-violet-600 hover:bg-indigo-700 text-lg"
              delay={1.4}>
                Get start yourself
              </AnimatedButton>
              <AnimatedButton size="lg" variant="outline" className="border-gray-700 text-lg"
              delay={1.6}
              >
                Learn To yourself
              </AnimatedButton>
            </div>
          </h1>
        </div>

        <ClientLogos />
       </div>
      </main>
    </div>
  );
}
