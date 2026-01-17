"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BarCode from "react-barcode";
import { Button } from "@/components/shared";

export default function Convenience() {
  const router = useRouter();

  return (
    <main>
      <div className="relative flex items-center justify-center w-screen h-14 bg-white py-2 px-8 border-b-[0.5px] border-gray-300 shadow-[0_2px_5px_-2px_rgba(0,0,0,0.25)]">
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
        <h1 className="Body16Medium text-black">コンビニから送る</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 pt-5 pb-8 bg-linear-to-b from-[#DF7329] to-[#E8A87C]">
        <button
          className="flex items-center justify-center rounded-full w-10 h-10 bg-white shadow-[0_2px_5px_-2px_rgba(0,0,0,0.25)]"
        >
          <Image 
            src="/icons/reload/black.svg"
            alt="reload-icon"
            width={24}
            height={24}
          />
        </button>
        <div className="flex flex-col items-center justify-center gap-8 w-78 h-60 px-8 bg-[url('/barcode-ticket.svg')] bg-center bg-no-repeat">
          <div className="w-64 h-14 [&>svg]:w-full [&>svg]:h-full">
            <BarCode
              value="0123 4567 8910" // 仮データ‼️
              width={3}
              displayValue={false}
              background="transparent"
            />
          </div>
          <hr className="w-full dashed-box" />
          <div className="flex flex-col items-center gap-3.5">
            <p className="Body14Medium">
              レジでバーコードを提示してください
            </p>
            <p className="Body12Regular">
              受付番号 : 0123-4567-8910
            </p>
          </div>
        </div>
        <p className="Body12Medium text-white">
          画面の明るさを最大にすると読み取りやすくなります
        </p>
      </div>
      <div className="flex flex-col items-center mt-8">
        <ul className="flex flex-col gap-3 w-82 bg-gray-200 py-5 px-4 rounded-sm text-gray-900 Body12Medium">
          <li className="flex gap-1">
            <Image 
              src="/icons/point/gray-900.svg"
              alt="point-icon"
              width={16}
              height={16}
            />
            <Link
              href="/shipping/method/"
              className="border-b-[0.5px] border-gray-900"
            >
              発送方法について
            </Link>
          </li>
          <li className="flex gap-1">
            <Image 
              src="/icons/point/gray-900.svg"
              alt="point-icon"
              width={16}
              height={16}
            />
            <Link
              href="#"
              className="border-b-[0.5px] border-gray-900"
            >
              手数料について
            </Link>
          </li>
        </ul>
        <div className="fixed bottom-12 flex flex-col items-center gap-4">
          <Button
            size="large"
            text="近くのコンビニを探す"
            iconSrc="/icons/search/white.svg"
            iconPosition="left"
            onClick={() => router.push("/shipping/map/convenience")}
          />
          <Link
            href="/shipping/box"
            className="Body14Medium text-rose-pink-700"
          >
            寄付ボックスから送る
          </Link>
        </div>
      </div>
    </main>
  );
}