"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavigationBar } from "@/components/shared"
import { DonationHistoryCard } from "@/components/features/donation";
import { DonationHistory } from "@/types/donation/types";
import donationHistoryMockData from "@/data/donation-history-mock-data.json";

export default function Profile() {
  const donationHistoryes = donationHistoryMockData as DonationHistory[];
  const pathname = usePathname();

  const getActiveIndex = () => {
    switch(pathname) {
      case "/":
        return 0;
      case "/search":
        return 1;
      case "/profile":
        return 2;
      default:
        return 0;
    }
  };

  return (
    <main>
      {/* TODO: TopSheetの部分をスクロールで縮めて表示 */}
      <div className="flex flex-col justify-center items-center w-full h-50 bg-linear-to-b from-[#DF7329] to-[#E8A87C] border-b-6 border-white shadow-[0_2px_5px_0_rgba(0,0,0,0.25)] rounded-b-3xl">
        <div className="flex justify-center items-center w-14 h-14 border-2 border-white rounded-full mb-4">
          <Image 
            src="/icons/user/white.svg" // user.iconSrc
            alt="profile-icon"
            width={32}
            height={32}
          />
        </div>
        <h1 className="Body14Regular text-white">
          <span className="Heading20">かとうゆうた</span> さん {/* user.name */}
        </h1>
      </div>
      <section className="w-82 mt-12 mx-auto">
        <div className="Heading20 text-beige-orange-700 border-b-3 border-beige-orange-700 pt-2 pb-3">
          <h2>
            寄付先の履歴
          </h2>
        </div>
        <ul className="flex flex-col items-center gap-6 mt-8 mb-28">
          {donationHistoryes.map((donationHistory, i) => (
            <li key={i}>
              <DonationHistoryCard {...donationHistory} />
            </li>
          ))}
        </ul>
      </section>
      <NavigationBar 
        isActive={getActiveIndex()}
        pathname={pathname}
      />
    </main>
  )
}