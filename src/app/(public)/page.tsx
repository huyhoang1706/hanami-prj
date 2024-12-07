import CarouselWrapper from "@/components/carousel-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Metadata } from "next";
import HomeMenuItem from "./home-menu-item";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nhà Hàng Hanami",
};

export default function Home() {
  const imgs = Array.of(
    "https://placehold.co/1920x800",
    "https://placehold.co/1920x800",
    "https://placehold.co/1920x800",
  );
  const imgs2 = Array.of(
    "https://placehold.co/800x450",
    "https://placehold.co/800x450",
    "https://placehold.co/800x450",
    "https://placehold.co/800x450",
    "https://placehold.co/800x450",
    "https://placehold.co/800x450",
  );
  return (
    <div className="min-h-screen">
      <CarouselWrapper>
        {imgs.map((img, index) => (
          <CarouselItem key={index}>
            <img src={img} alt="img" className="h-full w-full object-cover object-center" />
          </CarouselItem>
        ))}
      </CarouselWrapper>

      <section className="container mx-auto px-2">
        <h1 className="my-5 scroll-m-20 text-center text-3xl font-extrabold tracking-tight lg:text-4xl">
          Các Món Đặc Sắc
        </h1>

        <Carousel opts={{ loop: true, align: "start" }}>
          <CarouselContent>
            {imgs2.map((img, index) => (
              <CarouselItem
                key={index}
                className="basis-full py-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Card className="shadow-md">
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      <img src={img} alt={"test"} className="h-full w-full" />
                    </div>

                    <div className="space-y-1 px-3 pb-3">
                      <h5 className="text-lg font-bold">Tên Món Ăn</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia fugiat quas
                        harum id, distinctio tempora provident omnis asperiores molestias vitae odit
                        soluta maxime aperiam, aliquid dolorum optio est hic cupiditate?
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 hidden -translate-x-4 bg-neutral-900 text-neutral-300 hover:bg-neutral-600 hover:text-white md:inline-flex" />
          <CarouselNext className="right-0 hidden translate-x-4 bg-neutral-900 text-neutral-300 hover:bg-neutral-600 hover:text-white md:inline-flex" />
        </Carousel>
      </section>

      <section className="container mx-auto px-2">
        <h1 className="my-5 scroll-m-20 text-center text-3xl font-extrabold tracking-tight lg:text-4xl">
          Khám Phá Menu
        </h1>

        <div className="flex flex-col gap-5">
          <HomeMenuItem
            title="Sashimi"
            image={"https://placehold.co/800x450"}
            content={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis inventore eiusnon eligendi ipsa porro iusto id, vero dolore placeat ab modi aliquam dolorum beataelaborum repudiandae illo minus ipsum."
            }
          />

          <HomeMenuItem
            title="Nướng"
            position="right"
            image={"https://placehold.co/800x450"}
            content={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis inventore eiusnon eligendi ipsa porro iusto id, vero dolore placeat ab modi aliquam dolorum beataelaborum repudiandae illo minus ipsum."
            }
          />

          <HomeMenuItem
            title="Lẩu"
            position="left"
            image={"https://placehold.co/800x450"}
            content={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis inventore eiusnon eligendi ipsa porro iusto id, vero dolore placeat ab modi aliquam dolorum beataelaborum repudiandae illo minus ipsum."
            }
          />

          <HomeMenuItem
            title="Mì"
            position="right"
            image={"https://placehold.co/800x450"}
            content={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis inventore eiusnon eligendi ipsa porro iusto id, vero dolore placeat ab modi aliquam dolorum beataelaborum repudiandae illo minus ipsum."
            }
          />

          <HomeMenuItem
            title="Sushi"
            position="left"
            image={"https://placehold.co/800x450"}
            content={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis inventore eiusnon eligendi ipsa porro iusto id, vero dolore placeat ab modi aliquam dolorum beataelaborum repudiandae illo minus ipsum."
            }
          />

          <HomeMenuItem
            title="Chiên - Furai"
            position="right"
            image={"https://placehold.co/800x450"}
            content={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis inventore eiusnon eligendi ipsa porro iusto id, vero dolore placeat ab modi aliquam dolorum beataelaborum repudiandae illo minus ipsum."
            }
          />

          <HomeMenuItem
            title="Salad"
            position="left"
            image={"https://placehold.co/800x450"}
            content={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis inventore eiusnon eligendi ipsa porro iusto id, vero dolore placeat ab modi aliquam dolorum beataelaborum repudiandae illo minus ipsum."
            }
          />
        </div>

        <div className="flex justify-center">
          <Link
            href="#"
            className="my-5 h-fit w-fit rounded-full bg-red-800 px-7 py-3 font-bold text-neutral-100"
          >
            Xem Toàn Bộ Menu
          </Link>
        </div>

        <section>
          <h1 className="my-5 scroll-m-20 text-center text-3xl font-extrabold tracking-tight lg:text-4xl">
            Câu Chuyện Thương Hiệu
          </h1>
        </section>

        <section>
          <h1 className="my-5 scroll-m-20 text-center text-3xl font-extrabold tracking-tight lg:text-4xl">
            Ưu Đãi
          </h1>
        </section>

        <Carousel opts={{ loop: true, align: "start" }} className="mb-5">
          <CarouselContent>
            {imgs2.map((img, index) => (
              <CarouselItem
                key={index}
                className="basis-full py-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Card className="shadow-md">
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      <img src={img} alt={"test"} className="h-full w-full" />
                    </div>

                    <div className="space-y-1 px-3 pb-3">
                      <h5 className="text-lg font-bold">Tên Ưu Đãi</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia fugiat quas
                        harum id, distinctio tempora provident omnis asperiores molestias vitae odit
                        soluta maxime aperiam, aliquid dolorum optio est hic cupiditate?
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 hidden -translate-x-4 bg-neutral-900 text-neutral-300 hover:bg-neutral-600 hover:text-white md:inline-flex" />
          <CarouselNext className="right-0 hidden translate-x-4 bg-neutral-900 text-neutral-300 hover:bg-neutral-600 hover:text-white md:inline-flex" />
        </Carousel>
      </section>
    </div>
  );
}
