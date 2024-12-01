"use client";

import { useMobileMenuContext } from "@/contexts/MobileMenuContext";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

export default function MobileMenu() {
  const { isMobileMenuOpen } = useMobileMenuContext();

  return (
    <div
      className={cn(
        "fixed right-0 top-[76px] mt-2 min-h-screen w-2/3 rounded-md bg-slate-100 p-5 transition-transform duration-300 md:hidden",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
      )}
    >
      <nav className="flex flex-col gap-5">
        <Link className="px-2 py-1 text-lg font-semibold" href="/menu">
          Menu
        </Link>
        <Link className="px-2 py-1 text-lg font-semibold" href="/menu">
          Ưu Đãi
        </Link>
        <Link className="px-2 py-1 text-lg font-semibold" href="/menu">
          Giới Thiệu
        </Link>
        <Link className="px-2 py-1 text-lg font-semibold" href="/menu">
          Liên Hệ
        </Link>
        <Link
          className="mt-5 rounded-full border border-blue-600 px-2 py-1 text-center text-lg font-semibold text-blue-600"
          href="/order"
        >
          Đặt Bàn Ngay
        </Link>
      </nav>
    </div>
  );
}
