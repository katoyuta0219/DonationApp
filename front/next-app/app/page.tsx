"use client";

import Image from "next/image"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NavigationBar } from "@/components/shared"
import { DonationCard } from "@/components/features/donation/donation-card"
import { Donation } from "@/types/donation/types"
import { Donations } from "@/api";

export default function Home() {
  const pathname = usePathname();
  const [donations, setDonations] = useState<Donation[]>();

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

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await Donations({
          categoryIds: [],
          necessity: undefined
        });

        setDonations(response);
        console.log("取得に成功しました: ", response);
      } catch (error) {
        console.error("取得に失敗しました: ", error);
      }
    }
    fetchDonations();
  }, []);

  return (
    <main className="mb-22">
      <div className="fixed top-0 left-0 w-screen h-14 bg-white py-2 px-8 border-b-[0.5px] border-gray-300 mb-6 shadow-gray-300 z-10">
        {/* <Image 
          src=""
          alt="logo"
          width={96}
          height={40}
        /> */}
        ロゴが入ります
      </div>
      <section className="flex flex-col items-center gap-6 mt-20">
        <div className="w-82 Heading20 text-beige-orange-700 px-1.5 py-3 border-b-3 border-beige-orange-700">
          <h1>
            寄付できる団体
          </h1>
        </div>
        <ul className="flex flex-col gap-6 mb-6">
          {donations?.map((donation) => (
            <li key={donation.id}>
              <DonationCard 
                id={donation.id}
                degreeOfNecessity={donation.degreeOfNecessity}
                organization={donation.organization}
                requestCategories={donation.requestCategories}
                deadline={donation.deadline}
                recruitmentDetails={donation.recruitmentDetails}
              />
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