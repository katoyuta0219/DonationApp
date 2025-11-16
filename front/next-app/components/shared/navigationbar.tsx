import Image from "next/image"
import Link from "next/link"

interface NavigationBarProps {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

export function NavigationBar({
  isActive,
  setIsActive,
}: NavigationBarProps) {
  const navigationBarItems = {
    { key: "home"; text: "ホーム"; href: "public/" }
    home: { text: "ホーム", isActive: Boolean },
    donation: { text: "寄付先を探す", isActive: Boolean },
    profile: { text: "プロフィール", isActive: Boolean },
  }

  return (
    <nav>
      <ul className="flex">
        {navigationBarItems.map}
        <li
          className={`
            ${isActive 
              ? "bg-beige-orange-700" 
              : ""
            }
            cursor-pointer
          `}
          onClick={() => setIsActive(true)}
        >
          <Link href="public/">
            <Image 
              src="/icons/home/beige-orange-400.svg"
              alt=""
              width={24}
              height={24}
            />
            <p>ホーム</p>
          </Link>
        </li>
        <li>
          <Link href="public/search">
            <Image 
              src="/icons/box/beige-orange-400.svg"
              alt=""
              width={24}
              height={24}
            />
            <p>寄付先を探す</p>
          </Link>
        </li>
        <li>
          <Link href="/public/profile">
            <Image 
              src="/icons/user/beige-orange-400.svg"
              alt=""
              width={24}
              height={24}
            />
            <p>プロフィール</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}