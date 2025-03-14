import InputPrompt from "@/components/input/inputPrompt";
import CommandExecuted from "@/components/output/commandExecuted";

function App() {
  return (
    <main className="p-4 font-term h-full overflow-y-auto">
      <p className="space-x-4 text-center">
        <span className="text-foreground">hell</span>
        <span className="text-surface">hell</span>
        <span className="text-overlay">hell</span>
        <span className="text-muted">hell</span>
        <span className="text-subtle">hell</span>
        <span className="text-cursor">hell</span>
        <span className="text-error">hell</span>
        <span className="text-warning">hell</span>
        <span className="text-success">hell</span>
        <span className="text-selection-background">hell</span>
        <span className="text-cursorline-background">hell</span>
      </p>
      <CommandExecuted />
      <InputPrompt />
    </main>
  );
}
export default App;
