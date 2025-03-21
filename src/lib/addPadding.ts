const MAX_WIDTH = 15;

export function addPadding(str: string, width: number = MAX_WIDTH) {
  return str.padEnd(width, ' ');
}
