export interface Donation {
  id: number;
  name: string;
  representativeName: string;
  email: string;
  address: string;
  category: "衣類" | "家具・家電" | "書籍・学用品" | "食品・日用品" | "防災用品" | "ペット用品" | "おもちゃ・ベビー用品";
  recruitmentDetails: string;
  iconSrc: string;
  imageSrc: string;
  necessity: 1 | 2 | 3 | 4 | 5;
  deadline: string;
}

export interface DonationHistory {
  id: number;
  name: string;
  recruitmentDetails: string;
  explanation: string;
  deadline: string;
  category: "衣類" | "家具・家電" | "書籍・学用品" | "食品・日用品" | "防災用品" | "ペット用品" | "おもちゃ・ベビー用品";
  createdAt: string;
}