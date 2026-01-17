import Image from "next/image";

interface InputProps {
  size: "normal" | "small";
  type: "text" | "password";
  placeholder: string;
  iconSrc: string;
  iconAlt: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ 
  size, 
  type, 
  iconSrc, 
  iconAlt,
  placeholder,
  onChange
}: InputProps) {
  const height = size === "normal" ? "h-14" : "h-11"; // 56px : 44px
  
  return (
    <div 
      className={`
        ${height}
        flex gap-4 w-[328px] bg-white px-4 border-[1.5px] border-gray-300 Body14Regular rounded-lg
      `}
    >
      <Image 
        src={iconSrc}
        alt={iconAlt}
        width={20}
        height={20}
      />
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e)}
        className="w-full h-full outline-none"
      />
    </div>
  )
}