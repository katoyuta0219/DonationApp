import Image from "next/image";
import Link from "next/link";
import { Donation } from "@/types/donation/types";

type DonationCardProps = Pick<Donation, "id" | "recruitmentDetails" | "degreeOfNecessity" | "deadline" | "requestCategories" | "organization">;

export function DonationCard({
  id,
  organization,
  requestCategories,
  recruitmentDetails,
  degreeOfNecessity,
  deadline,
}: DonationCardProps) {
  // TODO: 
  // バックエンド側で organization.organizationImages、organization.iconImage を正常な値として返すように修正
  // imageUrl は仮でslice
  // iconImage は仮でNext側の画像を参照（もちろん404）

  const imageUrl = organization.organizationImages.slice(2, -2);
  const fallbackImage = "/yuse-honmono.jpg";
  const iconUrl = "/almond-nui.jpg";
  const fallbackIcon = "/almond-nui.jpg";

  return (
    <Link 
      href={`donation/${id}/`}
      className="inline-block w-76 bg-white rounded-lg shadow-gray-300"
    >
      <div
        className="relative h-30 rounded-t-lg shadow-inner bg-cover bg-position-[0_25%]"
        style={{ backgroundImage: `url(${imageUrl}), url(${fallbackImage})` }}
      >
        <div className="flex items-center gap-4 absolute bottom-3 left-3 Body16Bold text-white">
          <Image
            src={`${iconUrl}`}
            alt={`${organization.donationOrganizationName}-icon`}
            width={32}
            height={32}
            className="rounded-sm"
            onError={(e) => {
              e.currentTarget.src = fallbackIcon;
            }}
          />
          <p>
            {organization.donationOrganizationName}
          </p>
        </div>
      </div>
      <div className="p-3">
        <span className="inline-block h-7 py-1 px-8 bg-beige-orange-500 Body12Medium text-white rounded-full">
          {requestCategories.map(category => category.name).join(', ')}
        </span>
        <p className="mt-2 Body12Regular text-black">
          {recruitmentDetails}
        </p>
        <div className="flex justify-between mt-8 Body12Regular text-black">
          <p>
            {deadline}まで
          </p>
          <ul className="flex">
            {Array.from({ length: 5 }, (_, i) => {
              const iconSrc = i< degreeOfNecessity ? "rose-pink-700" : "gray-300";

              return (
                <li key={i}>
                  <Image 
                    src={`/icons/box/${iconSrc}.svg`}
                    alt=""
                    width={24}
                    height={24}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Link>
  )
}