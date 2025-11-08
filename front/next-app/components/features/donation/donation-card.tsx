import Image from "next/image"

interface DonationCardProps {
  name: string;
  cateogry: "衣類" | "家具・家電" | "書籍・学用品" | "食品・日用品" | "防災用品" | "ペット用品" | "おもちゃ・ベビー用品";
  iconSrc: string;
}

export function DonationCard() {
  return (
    <div>
      <div>
        <Image 

        />
      </div>
    </div>
  )
}