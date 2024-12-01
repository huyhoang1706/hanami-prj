import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-900 px-3 py-5 pb-5 pt-20 md:px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12">
        <section className="col-span-1 flex flex-col gap-3 md:col-span-12 lg:col-span-4">
          <div className="flex items-center justify-center gap-2">
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
          </div>
          <p className="text-center text-lg font-bold text-neutral-100">
            Hanami - Ẩm Thực Nhật Bản
          </p>
          <div className="flex items-center justify-center gap-5">
            <Link href="https://www.facebook.com/hanami33tohienthanh" target="_blank">
              <FaFacebook className="size-6 text-neutral-100" />
            </Link>
            <Link href="#">
              <FaInstagram className="size-6 text-neutral-100" />
            </Link>
            <Link href="#">
              <FaTiktok className="size-6 text-neutral-100" />
            </Link>
          </div>
        </section>

        <section className="col-span-1 mt-8 md:col-span-4 lg:col-span-2 lg:mt-0">
          <h5 className="mb-5 text-center font-bold text-neutral-100 md:text-start">
            Về Chúng Tôi
          </h5>
          <nav className="flex flex-col items-center gap-5 md:items-start">
            <Link href="/" className="w-fit text-sm text-neutral-300">
              Trang Chủ
            </Link>
            <Link href="/menu" className="w-fit text-sm text-neutral-300">
              Menu
            </Link>
            <Link href="/" className="w-fit text-sm text-neutral-300">
              Giới Thiệu
            </Link>
            <Link href="/" className="w-fit text-sm text-neutral-300">
              Liên Hệ
            </Link>
          </nav>
        </section>

        <section className="col-span-1 mt-8 md:col-span-4 lg:col-span-3 lg:mt-0">
          <h5 className="mb-5 text-center font-bold text-neutral-100 md:text-start">Liên Hệ</h5>
          <div className="flex flex-col items-center gap-5 md:items-start">
            <p className="flex w-fit text-sm text-neutral-100">
              <MapPin className="mr-2 w-6 items-center text-neutral-100" />
              <span className="text-wrap text-sm text-neutral-300">
                33 Tô Hiến Thành, Tân Lập, tp Nha Trang, Nha Trang, Vietnam
              </span>
            </p>
            <p className="flex w-fit items-center text-sm text-neutral-100">
              <Phone className="mr-2 text-neutral-100" />
              <span className="text-sm text-neutral-300">038 616 6686</span>
            </p>
            <p className="flex w-fit items-center text-sm text-neutral-100">
              <Mail className="mr-2 text-neutral-100" />
              <span className="text-sm text-neutral-300">hanami@gmail.com</span>
            </p>
          </div>
        </section>

        <section className="col-span-1 mt-8 md:col-span-4 lg:col-span-3 lg:mt-0">
          <h5 className="mb-5 text-center font-bold text-neutral-100 md:text-start">Map</h5>
        </section>
      </div>

      <p className="mt-10 text-center text-sm text-neutral-400">
        Copyright &copy; {currentYear} Hanami Restaurant. All Rights Reserved
      </p>
    </footer>
  );
}
