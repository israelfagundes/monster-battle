import type { MonsterImageProps } from "@/components/MonsterImage/types";

function MonsterImage({ src, alt, ...rest }: MonsterImageProps) {
  return (
    <div className="relative aspect-square w-full mb-4 rounded-lg overflow-hidden bg-gray-700">
      <img
        src={src}
        alt={alt}
        className="object-cover h-full w-full"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src =
            "https://i.pinimg.com/originals/cd/d8/ac/cdd8ac54774b3b4e030641e219d4a646.jpg";
        }}
        {...rest}
      />
    </div>
  );
}

export default MonsterImage;
