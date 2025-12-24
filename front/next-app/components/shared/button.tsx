import Image from "next/image";

interface ButtonProps {
  size: "large" | "normal" | "small";
  text: string;
  iconSrc?: string | undefined;
  iconAlt?: string | undefined;
  iconPosition?: "left" | "right";
  className?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

export function Button({
  size,
  text, 
  iconSrc,
  iconAlt,
  iconPosition,
  className,
  isDisabled,
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
        ${width}
        ${className}
        ${isDisabled ? "bg-gray-200 text-gray-500" : "bg-beige-orange-500 text-white shadow-beige-orange-400 cursor-pointer"}
        flex justify-center items-center gap-2 h-14 Body14Bold rounded-lg
      `}
      onClick={() => onClick?.()}
      disabled={isDisabled}
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