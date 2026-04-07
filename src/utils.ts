/** Add two numbers. */
export function add(a: number, b: number): number {
  return a + b;
}

/** Divide two numbers. Throws an error if division by zero is attempted. */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}
