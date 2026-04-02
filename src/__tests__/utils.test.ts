import { describe, it, expect } from 'vitest';
import { add } from '../utils.js';

describe('utils', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('handles negative numbers', () => {
    expect(add(-1, 1)).toBe(0);
  });
});
