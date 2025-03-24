import InputPrompt from "@/components/input/inputPrompt";
import CommandExecuted from "@/components/output/commandExecuted";

function App() {
  return (
    <main className="p-4 font-term h-full overflow-y-auto">
      <CommandExecuted />
      <InputPrompt />
    </main>
  );
}
export default App;
