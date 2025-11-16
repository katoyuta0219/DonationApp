"use client"

import { usePathname } from "next/navigation";
import { NavigationBar } from "@/components/shared"

export default function Profile() {
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
      <NavigationBar 
        isActive={getActiveIndex()}
        pathname={pathname}
      />
    </main>
  )
}