// src/services/firebaseService.d.ts
declare module '@/services/firebaseService' {
    export function addCheckIn(data: any): Promise<string>;
    export function setCheckIn(customId: string, data: any): Promise<void>;
    export function getCheckIn(docId: string): Promise<any>;
  }
  