import { getPubKey, initFhevm, createInstance } from "fhevmjs";

export const FHEVM_INSTANCE: any = null;

export const createFhevmInstance = async () => {
  if (FHEVM_INSTANCE) return FHEVM_INSTANCE;

  await initFhevm();
  const publicKey = await getPubKey({ with_progress: false });
  const instance = await createInstance({ publicKey });
  return instance;
};
