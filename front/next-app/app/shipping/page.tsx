"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/shared";

export default function Shipping() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = (step: number) => {
    setCurrentStep(step);
  }

  const handleBackHome = () => {
    router.push("/");
  };

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
      <p className="w-78 mt-6 mb-10.5 mx-auto text-black Body14Regular">
        以下の手順に従って寄付品をお送りください。団体ごとに指定がある場合は、詳細ページも必ずご確認ください。
      </p>
      <div>
        <div className="w-53 flex justify-between items-end mx-auto mb-10">
          {[...Array(3)].map((_, i) => {
            const isActive = currentStep === i+1;
            const isCompleted = currentStep > i+1;

            return (
              <div 
                key={i}
                className="relative"
              >
                <>
                  {isActive && (
                    <Image
                      src="/icons/less-than/gray-700.svg"
                      alt="less-than-icon"
                      width={24}
                      height={12}
                      className="rotate-0"
                    />
                  )}
                  <span
                    className={`
                      ${isActive
                        ? "border-beige-orange-600 text-white bg-beige-orange-600"
                        : isCompleted
                        ? "border-beige-orange-600 bg-beige-orange-600 bg-[url(/icons/check/white.svg)] bg-center"
                        : "border-gray-700 text-gray-700 bg-white"
                      }
                      flex items-center justify-center w-6 h-6 mt-1.5 Body12Regular rounded-full border-2
                    `}
                  >
                    {!isCompleted && i+1}
                  </span>
                </>
                {i < 2 && (
                  <div className={`
                    ${currentStep > i + 1
                      ? "bg-beige-orange-600"
                      : "bg-gray-700"
                    }
                    absolute left-6 bottom-3 block w-18 h-0.5
                  `} />
                )}
              </div>
            );
          })}
        </div>
        <div>
          {currentStep === 1 ? (
            <>
              <section className="flex flex-col gap-6 w-82 mx-auto text-black">
                <h2 className="Body16Medium">1. 発送方法</h2>
                <div className="Body12Regular">
                  <p>寄付する荷物は、全国のコンビニから発送できます。</p>
                  <p> 梱包した荷物をお近くのコンビニにお持ち込みください。</p>
                  <p> このあと、発送に必要なQRコードと手順をご案内します。</p>
                </div>
              </section>
              <Button 
                size="large"
                text="次へ"
                iconSrc="/icons/right-arrow/white.svg"
                iconAlt="right-arrow-icon.svg"
                iconPosition="right"
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                onClick={() => handleNextStep(2)}
              />
            </>
          ): currentStep === 2 ? (
            <>
              <section className="flex flex-col gap-6 w-82 mx-auto text-black">
                <h2 className="Body16Medium">2. 送り状の発行</h2>
                <div className="Body12Regular">
                  <p>このQRコードを（コンビニなどの）店員にご提示ください。</p>
                  <p>店員がお手続きを進め、送り状が発行されます。</p>
                </div>
              </section>
              <button 
                onClick={() => handleNextStep(3)}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
              >
                <QRCodeSVG value="https://github.com/katoyuta0219/DonationApp" />
              </button>
            </>
          ): currentStep === 3 && (
            <>
              <section className="flex flex-col gap-6 w-82 mx-auto text-black">
                <h2 className="Body16Medium">3. 発送完了</h2>
                <p className="Body12Regular">発送が完了しました！</p>
              </section>
              <Button 
                size="large"
                text="ホームに戻る"
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                onClick={() => handleBackHome()}
              />
            </>
          )}
        </div>
      </div>
    </main>
  );
}