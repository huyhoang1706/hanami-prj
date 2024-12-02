import Image from "next/image";
// import { OrderForm } from "./components/order-form";

interface Props {
  className?: string;
}

export default function OrderPage({}: Props) {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Image src="/order_img.png" alt="background" fill priority />
      </div>

      <div className="relative z-10 h-full">
        <div className="grid h-full grid-cols-12">
          <div className="col-span-3"></div>
          <div className="col-span-9 flex items-center justify-center text-white">
            {/* <OrderForm /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
