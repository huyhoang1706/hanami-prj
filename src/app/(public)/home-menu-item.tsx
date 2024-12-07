import { cn } from "@/lib/utils";

interface Props {
  position?: "left" | "right";
  image: string;
  content: string;
  title: string;
}

export default function HomeMenuItem({ position = "left", image, content, title }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center gap-2 md:flex-row",
        position === "right" ? "md:flex-row-reverse" : "",
      )}
    >
      <div className="basis-full md:basis-1/2">
        <img src={image} alt="img" className="h-full w-full rounded" />
      </div>
      <div className="basis-full space-y-2 md:basis-1/2 md:space-y-5">
        <h5
          className={cn(
            "text-lg font-bold md:text-4xl",
            position === "right" ? "md:text-end" : "md:text-start",
          )}
        >
          {title}
        </h5>
        <p
          className={cn(
            "text-sm md:text-base",
            position === "right" ? "md:text-end" : "md:text-start",
          )}
        >
          {content}
        </p>
      </div>
    </div>
  );
}
