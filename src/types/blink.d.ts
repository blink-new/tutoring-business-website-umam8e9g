export {}; // ensures this file is treated as a module

declare global {
  interface Window {
    blink: unknown;
  }
}