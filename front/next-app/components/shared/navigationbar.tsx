import Image from "next/image"
import Link from "next/link"

export interface NavigationBarProps {
  isActive: number;
  pathname: string;
}

export function NavigationBar({ 
  isActive,
  pathname
}: NavigationBarProps) {
  const navigationBarItems = [
    { key: "home", text: "ホーム", href: "/", iconSrc: "home", isActive: isActive },
    { key: "donation", text: "寄付先を探す", href: "/search", iconSrc: "box", isActive: isActive },
    { key: "profile", text: "プロフィール", href: "/profile", iconSrc: "user", isActive: isActive },
  ];

  return (
    <nav className="fixed left-[50%] translate-x-[-50%] bottom-8 w-86 h-14 bg-white shadow-[0_3px_6px_rgba(235,106,18,0.25)] rounded-xl">
      <ul className="flex h-full px-6 justify-around items-center">
        {navigationBarItems.map((item, i) => {
          const activeIndex = pathname === item.href;

          return (
            <li 
              key={i}
              className={`w-18 h-11 ${activeIndex && "relative bottom-5"}`}
            >
              <Link 
                href={item.href}
                className="flex flex-col items-center text-beige-orange-400 Body12Medium"
              >
                <div
                  className={`
                    ${activeIndex
                      ? "flex items-center justify-center w-11 h-11 bg-beige-orange-700 border-3 border-white rounded-full"  
                      : ""
                    } 
                    cursor-pointer
                  `}
                >
                  <Image
                    src={`/icons/${item.iconSrc}/${activeIndex ? "white" : "beige-orange-400"}.svg`}
                    alt={`${item.iconSrc}-icon`}
                    width={24}
                    height={24}
                  />
                </div>
                <p
                  className={`
                    ${activeIndex && "text-beige-orange-700"}
                    Body12Regular
                  `}
                >
                  {item.text}
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}