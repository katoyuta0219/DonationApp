import Image from "next/image"
import { DonationCard } from "@/components/features/donation/donation-card"
import { Donation } from "@/types/donation/types"
import donationMockData from "@/data/donation-mock-data.json"

export default function Home() {
  const donations = donationMockData as Donation[];
  
  return (
    <main>
      <div className="fixed top-0 left-0 w-screen h-14 bg-white py-2 px-8 border-b-[0.5px] border-gray-300 mb-6 shadow-gray-300 z-10">
        {/* <Image 
          src=""
          alt="logo"
          width={96}
          height={40}
        /> */}
        ロゴが入ります
      </div>
      <section className="flex flex-col items-center gap-6 mt-35">
        <div className="w-82 Heading20 text-beige-orange-700 px-1.5 py-3 border-b-3 border-beige-orange-700">
          <h1>
            寄付できる団体
          </h1>
        </div>
        <ul className="flex flex-col gap-6 mb-6">
          {donations.map((donation) => (
            <li key={donation.id}>
              <DonationCard {...donation} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}