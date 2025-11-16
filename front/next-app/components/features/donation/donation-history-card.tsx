import { DonationHistory } from "@/types/donation/types"

export function DonationHistoryCard({
  name,
  explanation,
  category,
  createdAt
}: DonationHistory) {
  return (
    <div className="flex flex-col gap-8 w-76 p-3 text-black shadow-[0_2px_5px_0_rgba(0,0,0,0.25)] rounded-lg">
      <div>
        <h3 className="Body16Bold">
          {name}
        </h3>
        <p className="Body12Regular">
          {explanation}
        </p>
      </div>
      <div className="flex items-center justify-between Body12Regular">
        <span className="Body12Medium text-white bg-beige-orange-500 py-1 px-8 rounded-full">
          {category}
        </span>
        <p>{createdAt}</p>
      </div>
    </div>
  );
}