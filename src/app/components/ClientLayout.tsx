"use client";
import { useEffect, useState } from "react";
import Loader from "./Loader/Loader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    // Para aguardar o carregamento real, pode usar window.onload
    // window.addEventListener('load', () => setLoading(false));
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return <>{children}</>;
} 