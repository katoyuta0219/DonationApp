"use client";

import Image from "next/image"
import { useRouter } from "next/navigation";
import { Donation } from "@/types/donation/types"
import { Button } from "@/components/shared";
import donationMockData from "@/data/donation-mock-data.json"

export default function DonationDetail() {
  const donations = donationMockData as Donation[];
  const donation = donations[0];

  const router = useRouter();

  const handleDonate = () => {
    router.push("/shipping");
  }

  return (
    <main className="mb-16">
      <div className="fixed top-0 left-0 flex items-center justify-start w-screen h-14 bg-white py-2 px-4 border-b-[0.5px] border-gray-300">
        <button
          onClick={router.back}
        >
          <Image
            src="/icons/less-than/black.svg"
            alt="less-than-icon"
            width={32}
            height={32}
          />
        </button>
      </div>
      <section className="flex flex-col items-center gap-10 mt-14">
        <div className="relative w-full h-64">
          <Image
            src={donation.imageSrc}
            alt={`${donation.name}-image`}
            className="object-cover"
            sizes="100vw"
            priority
            fill
          />
          <Image
            src={donation.iconSrc}
            alt={`${donation.name}-icon`}
            width={64}
            height={64}
            className="absolute left-8 -bottom-3 rounded-lg shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] z-10"
          />
        </div>
        <div className="flex flex-col gap-3 w-82 mx-auto">
          <h1 className="Heading24 text-black">{donation.name}</h1>
          <ul className="flex">
            {[...Array(5)].map((_, i) => {
              const isActive = i+1 <= donation.necessity;
              return (
                <li key={i}>
                  <Image
                    src={`/icons/box/${isActive ? "rose-pink-700" : "gray-300"}.svg`}
                    alt="box-icon"
                    width={24}
                    height={24}
                  />
                </li>
              )
            })}
          </ul>
          <div className="flex items-center justify-center w-min py-1 px-8 Body12Medium text-white bg-beige-orange-500 whitespace-nowrap rounded-full">
            {donation.category}
          </div>
          <p className="mt-6 text-black Body14Regular">
            {donation.explanation}
          </p>
          <p className="mt-2 text-black Body12Regular">
            {donation.deadline}まで
          </p>
        </div>
        <Button 
          size="large"
          text="この団体に寄付する"
          iconSrc="/icons/right-arrow/white.svg"
          iconAlt="right-arrow-icon"
          iconPosition="right"
          onClick={() => handleDonate()}
        />
      </section>
    </main>
  )
}