export function formatNavigationArgs(args: string) {
  const argsArray = args.split(" ").filter(t => t.trim().length);
  if (argsArray.length > 2 || (argsArray.length != 0 && argsArray[0] !== "go")) {
    return {
      success: false,
      argsArray
    }
  }
  return {
    success: true,
    argsArray
  }
}
