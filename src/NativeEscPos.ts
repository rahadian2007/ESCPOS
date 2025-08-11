// src/NativeEscPos.ts

export interface Spec {
  printText(text: string): void;
  printImage(base64Image: string): Promise<boolean>;
  connectPrinter(ip: string, port: number): Promise<boolean>;
  disconnectPrinter(): void;
}

export default Spec;
