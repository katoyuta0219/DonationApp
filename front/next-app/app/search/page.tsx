"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavigationBar, Button } from "@/components/shared";

export default function Search() {
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

  const categoryes = [
    { key: "clothing", text: "衣類" },
    { key: "furniture-appliances", text: "家具・家電"},
    { key: "books-school-supplies", text: "書籍・学用品" },
    { key: "food-daily-necessities", text: "食品・日用品" },
    { key: "disaster-prevention", text: "防災用品" },
    { key: "pets", text: "ペット用品" },
    { key: "toys-baby", text: "おもちゃ・ベビー用品" },
  ];

  return (
    <main className="mb-28">
      <div className="relative flex items-center justify-center w-screen h-14 bg-white py-2 px-8 border-b-[0.5px] border-gray-300">
        <h1 className="h-min Body16Medium text-black">寄付先を探す</h1>
        <button
          className="absolute right-8 h-min Body14Regular text-rose-pink-900"
        >
          クリア
        </button>
      </div>
      <form className="flex flex-col gap-8 w-87 mx-auto bg-gray-100 rounded-lg mt-6 p-4">
        <section className="flex flex-col gap-5 p-2">
          <div className="flex gap-2 px-2 pb-2 border-b-2 border-beige-orange-600">
            <Image 
              src="/icons/file/beige-orange-600.svg"
              alt="file-icon"
              width={20}
              height={20}
            />
            <h2 className="Body16Bold text-beige-orange-600">カテゴリ</h2>
          </div>
          <div className="flex flex-wrap gap-y-5 px-2">
            {categoryes.map((category, i) => (
              <div 
                key={i}
                className="flex flex-1 gap-3 items-center min-w-1/2 Body14Medium"
              >
                <input 
                  type="checkbox"
                  id={category.key}
                  className="
                    appearance-none w-7 h-7 bg-white bg-[url(/icons/check/gray-400.svg)] bg-center border border-gray-400 box-border rounded-md shadow-[0_2px_2px_-1px_#959595]
                    checked:bg-[url(/icons/check/rose-pink-500.svg)] checked:border-2 checked:border-rose-pink-900
                  "
                />
                <label 
                  htmlFor={category.key}
                >
                  {category.text}
                </label>
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-5 p-2">
          <div className="flex gap-2 px-2 pb-2 border-b-2 border-beige-orange-600">
            <Image 
              src="/icons/box/beige-orange-600.svg"
              alt="file-icon"
              width={24}
              height={24}
            />
            <h2 className="Body16Bold text-beige-orange-600">必要度</h2>
          </div>
          <div className="flex flex-wrap gap-y-5 px-2">
            {[...Array(5)].map((_, i) => i).reverse().map((i) => {
              return (
                <div
                  key={i}
                  className="flex flex-1 gap-3 min-w-1/2"
                >
                  <input 
                    type="checkbox"
                    id={String(i)}
                    className="
                      appearance-none w-7 h-7 bg-white bg-[url(/icons/check/gray-400.svg)] bg-center border border-gray-400 box-border rounded-md shadow-[0_2px_2px_-1px_#959595]
                      checked:bg-[url(/icons/check/rose-pink-500.svg)] checked:border-2 checked:border-rose-pink-900
                    "
                  />
                  <label
                    htmlFor={String(i)}
                    className="flex gap-0.5"
                  >
                    {[...Array(i+1)].map((_, i) => (
                      <Image
                        key={i}
                        src="/icons/box/black.svg"
                        alt="box-icon"
                        width={16}
                        height={16}
                      />
                    ))}
                  </label>
                </div>
              );
            })
            }
          </div>
        </section>
        <Button 
          size="normal"
          text="この条件で探す"
          iconSrc="/icons/search/white.svg"
          iconAlt="search-icon"
          iconPosition="right"
        />
      </form>
      <NavigationBar 
        isActive={getActiveIndex()}
        pathname={pathname}
      />
    </main>
  );
}