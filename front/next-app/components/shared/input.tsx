import Image from "next/image";

interface InputProps {
  size: "normal" | "small";
  type: "text" | "password";
  placeholder: string;
  iconSrc: string;
}

export function Input({ 
  size, 
  type, 
  iconSrc, 
  placeholder 
}: InputProps) {
  const height = size === "normal" ? "h-14" : "h-11"; // 56px : 44px
  
  return (
    <div 
      className={`
        flex gap-4 w-[328px] bg-white px-4 border-[1.5px] border-gray-300 Body14Regular rounded-lg
        ${height}
      `}
    >
      <Image 
        src={iconSrc}
        alt="user-icon"
        width={20}
        height={20}
      />
      <input
        type={type}
        placeholder={placeholder}
        className="outline-none"
      />
    </div>
  )
}