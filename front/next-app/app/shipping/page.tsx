"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/shared";

export default function Shipping() {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const shippingOptions = [
    { key: "convenience", text: "コンビニから送る" },
    { key: "box", text: "寄付ボックスから送る" },
  ];

  const handleMethodToggle = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  }

  const handleRouterPush = () => {
    if (selectedIndex !== null) {
      router.push(`/shipping/${shippingOptions[selectedIndex].key}`);
    }
  }

  return (
    <main>
      <div className="relative flex items-center justify-center w-screen h-14 bg-white py-2 px-8 border-b-[0.5px] border-gray-300">
        <button
          className="absolute left-4"
          onClick={() => router.back()}
        >
          <Image
            src="/icons/less-than/black.svg"
            alt="less-than-icon"
            width={32}
            height={32}
          />
        </button>
        <h1 className="Body16Medium text-black">発送の手順</h1>
      </div>
      <div className="flex flex-col gap-10 pt-8 w-82 mx-auto">
        <section className="text-black">
          <h2 className="Body16Medium">
            発送場所
          </h2>
          <div className="Body12Regular mt-5">
            <p>下記の選択肢から発送場所を選択してください。</p>
            <p>寄付する荷物は全国のコンビニ、または指定の寄付ボックスから発送する事ができます。</p>
            <Link 
              href="/shipping/method"
              className="flex items-center gap-1.5 mt-3 text-rose-pink-500"
            >
              <Image
                src="/icons/question/rose-pink-500.svg"
                alt="question-icon"
                width={16}
                height={16}
              />
              <p>発送方法について</p>
            </Link>
          </div>
        </section>
        <div className="flex gap-6 Body12Medium">
          {shippingOptions.map((btn, i) => {
            const isChecked = selectedIndex === i;

            return (
              <button
                key={i}
                onClick={() => handleMethodToggle(i)}
                className={`
                  relative flex flex-col items-center justify-center gap-2 w-38 h-38 rounded-lg
                  ${isChecked
                    ? "bg-rose-pink-100 border-3 border-rose-pink-800 text-rose-pink-700" 
                    : "bg-white border border-gray-300 text-black"
                  }
                `}
              >
                <input
                  type="checkbox"
                  className={`
                    appearance-none absolute w-4 h-4 top-2.5 left-2.5 bg-white rounded-full
                    ${isChecked ? "border-5 border-rose-pink-800" : "border-[1.5px] border-gray-300"}
                  `}
                />
                <Image
                  src={`/icons/${btn.key}/${isChecked ? "rose-pink-700" : "black"}.svg`}
                  alt={`${btn.key}-icon`}
                  width={40}
                  height={40}
                />
                <p>{btn.text}</p>
              </button>
            );
          })}
        </div>
        <Button
          size="large"
          text={`${selectedIndex === null ? "選択してください" : shippingOptions[selectedIndex].text}`}
          className="fixed bottom-16"
          isDisabled={selectedIndex === null}
          onClick={() => handleRouterPush()}
        />
      </div>
    </main>
  );
}