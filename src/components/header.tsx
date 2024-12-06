import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import MobileMenuButton from "./mobile-menu-button";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="fixed z-30 flex w-full items-center justify-between border-b bg-slate-100 px-4 py-2 shadow-md">
      <Link href="/" className="flex gap-2">
        <Image src="/hanami_logo.png" alt="logo" width={60} height={60} priority />
        <Image
          src="/hanami_logo_ch.png"
          alt="logo"
          width="0"
          height="0"
          sizes="100vw"
          className="h-[60px] w-auto"
          priority
        />
      </Link>
      <nav className="hidden gap-5 md:flex">
        <Link href="/menu" className="text-lg font-semibold">
          Menu
        </Link>
        <Link href="#" className="text-lg font-semibold">
          Ưu Đãi
        </Link>
        <Link href="/about-us" className="text-lg font-semibold">
          Giới Thiệu
        </Link>
        <Link href="#" className="text-lg font-semibold">
          Liên Hệ
        </Link>
      </nav>
      <Button
        asChild
        variant="outline"
        className="hidden rounded-full border-2 border-blue-600 text-lg font-bold text-blue-600 hover:text-blue-700 md:inline-flex"
      >
        <Link href="/order">Đặt Bàn Ngay</Link>
      </Button>

      <MobileMenuButton />
      <MobileMenu />
    </header>
  );
}
