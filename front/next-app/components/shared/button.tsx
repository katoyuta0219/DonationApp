import Image from "next/image";

interface ButtonProps {
  size: "large" | "normal" | "small";
  text: string;
  iconSrc?: string | undefined;
  iconAlt?: string | undefined;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
}

export function Button({
  size,
  text, 
  iconSrc,
  iconAlt,
  iconPosition,
  className,
  onClick,
}: ButtonProps) {
  // small:   w-48 (192px) 
  // normal:  w-79 (316px)
  // large:   w-82 (328px)
  const width = 
    size === "normal" ? "w-79"
      : size === "small" ? "w-48"
        : "w-82"

  return (
    <button
      className={`
        ${className} ${width}
        flex justify-center items-center gap-2 h-14 bg-beige-orange-500 text-white Body14Bold rounded-lg shadow-beige-orange-400 cursor-pointer
      `}
      onClick={() => onClick}
    >
      {iconPosition === "left" && (
        <Image 
          src={iconSrc || ""}
          alt={iconAlt || ""}
          width={24}
          height={24}
        />
      )}
      {text}
      {iconPosition === "right" && (
        <Image 
          src={iconSrc || ""}
          alt={iconAlt || ""}
          width={24}
          height={24}
        />
      )}
    </button>
  );
}