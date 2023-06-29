import PieceLogo from "../components/PieceLogo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const pieceLogoUrl = "https://cdn.activepieces.com/pieces/calendly.png";

export default function PiecePage() {
  
  const router = useRouter()
  
  useEffect(() => {
  }, [router])

  return (
    <main className="flex min-h-screen flex-col items-center">

    </main>
  );
}
