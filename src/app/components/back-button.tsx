"use client";
import { ArrowUUpLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export function BackBtn() {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/");
  };
  return (
    <button
      onClick={handleNavigate}
      className="flex items-center justify-center gap-2  bg-transparent border-none cursor-pointer  mx-10 lg:mx-28">
      <ArrowUUpLeft></ArrowUUpLeft>Voltar
    </button>
  );
}
