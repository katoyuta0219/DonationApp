export interface Donation {
  name: string;
  representativeName: string;
  email: string;
  address: string;
  cateogry: "衣類" | "家具・家電" | "書籍・学用品" | "食品・日用品" | "防災用品" | "ペット用品" | "おもちゃ・ベビー用品";
  explanation: string;
  iconSrc: string;
  imageSrc: string;
  necessity: number;
}