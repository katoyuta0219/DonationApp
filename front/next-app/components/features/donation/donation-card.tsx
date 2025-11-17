import Image from "next/image"
import Link from "next/link";
import { Donation } from "@/types/donation/types"

type DonationCardProps = Pick<Donation, "id" | "recruitmentDetails" | "degreeOfNecessity" | "deadline" | "requestCategories" | "organization">;

export function DonationCard({
  id,
  organization,
  requestCategories,
  recruitmentDetails,
  degreeOfNecessity,
  deadline,
}: DonationCardProps) {
  const getValidIconImageUrl = (url: string | null | undefined): string => {
    if (!url || url.trim() === '') {
      return '/almond-nui.jpg';
    }
    
    if (url.startsWith('/') || url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    return '/almond-nui.jpg';
  };

  const getValidBgImageUrl = (url: string | null | undefined): string => {
    if (!url || url.trim() === '') {
      return '/yuse-honmono.jpg';
    }
    
    if (url.startsWith('/') || url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    return '/yuse-honmono.jpg';
  };

  const iconImageUrl = getValidIconImageUrl(organization.iconImage);
  const bgImageUrl = getValidBgImageUrl(organization.organizationImages[0]);

  return (
    <Link 
      href={`donation/${id}/`}
      className="inline-block w-76 bg-white rounded-lg shadow-gray-300"
    >
      <div
        className="relative h-30 rounded-t-lg shadow-inner bg-cover bg-position-[0_25%]"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      >
        <div className="flex items-center gap-4 absolute bottom-3 left-3 Body16Bold text-white">
          <Image
            src={iconImageUrl}
            alt={`${organization.donationOrganizationName}-icon`}
            width={32}
            height={32}
            className="rounded-sm"
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
            {Array.from({ length: 5 }, (_, index) => {
              const iconSrc = index < degreeOfNecessity ? "rose-pink-700" : "gray-300";

              return (
                <li key={index}>
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