"use client";

import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Props {
  children: React.ReactNode;
}

export default function CarouselWrapper({ children }: Props) {
  return (
    <Carousel
      opts={{ loop: true, align: "center" }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: true,
        }),
      ]}
    >
      <CarouselContent>{children}</CarouselContent>
      <CarouselPrevious className="left-2 hidden size-12 border-none bg-transparent outline-none md:inline-flex" />
      <CarouselNext className="right-2 hidden size-12 border-none bg-transparent outline-none md:inline-flex" />
    </Carousel>
  );
}
