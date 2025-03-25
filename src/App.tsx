import InputPrompt from "@/components/input/inputPrompt";
import CommandExecuted from "@/components/output/commandExecuted";
import { useEffect, useState } from "react";
import { Pfp } from "@/components/pfp";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobileQuery = window.matchMedia("(max-width: 768px)");
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileDevices = /android|iphone|ipad|blackberry|windows phone/;
      setIsMobile(mobileQuery.matches || mobileDevices.test(userAgent));
    }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [])

  if (isMobile) {
    return (
      <main className="p-4 font-term h-full overflow-y-auto flex flex-col gap-4 items-center">
        <Pfp className="text-[8px] leading-[8px]" />
        <h1 className="text-warning text-2xl">Desktop Only</h1>
        <p className="text-success">Sorry, this terminal portfolio is not supported on mobile devices.</p>
        <p>Please use a desktop or laptop to experience it as intended.</p>
      </main>
    );
  }

  return (
    <main className="p-4 font-term h-full overflow-y-auto">
      <CommandExecuted />
      <InputPrompt />
    </main>
  );
}
export default App;
