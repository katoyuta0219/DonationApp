import Image from "next/image";

interface ButtonProps {
  size: "large" | "normal" | "small";
  text: string;
  iconSrc?: string | undefined;
  iconAlt?: string | undefined;
  iconPosition?: "left" | "right";
}

export function Button({
  size,
  text, 
  iconSrc,
  iconAlt,
  iconPosition
}: ButtonProps) {
  const width = 
    size === "normal" ? "w-79"
      : size === "small" ? "w-48"
        : "w-82"

  return (
    <button
      className={`
        ${width}
        h-14 bg-beige-orange-500 text-white Body14Bold rounded-lg shadow-beige-orange-400
      `}
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
  )
}