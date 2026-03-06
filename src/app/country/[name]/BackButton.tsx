"use client";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button style={{marginTop: '1rem'}} onClick={() => router.back()}>
      Volver
    </button>
  );
};

export default BackButton;
