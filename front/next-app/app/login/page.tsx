"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Input, Button } from "@/components/shared";
import { Login as LoginAPI } from "@/api";

export default function Login() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const formValues = {
    name: name,
    password: password,
  };

  const handleSubmit = async () => {
    try {
      const response = await LoginAPI({ ...formValues });

      if (response.success) {
        console.log("ログインに成功しました");
        Cookies.set("authToken", response.token);
        router.push("/");
      }
    } catch (error) {
      console.error("ログインに失敗しました: ", error);
    };
  };

  return (
    <main className="flex flex-col items-center mt-26 px-8">
      <h1 className="w-full text-start Heading24">
        ログイン
      </h1>
      <Image 
        className="my-10"
        src="/registration-image.jpg"
        alt="Registration Image"
        width={240}
        height={160}
      />
      <form 
        className="flex flex-col items-center gap-16"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-6">
          <Input 
            size="normal"
            type="text"
            placeholder="ユーザー名を入力"
            iconSrc="/icons/user/gray-500.svg"
            iconAlt="user-icon"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
          <Input 
            size="normal"
            type="password"
            placeholder="パスワードを入力"
            iconSrc="/icons/password/gray-500.svg"
            iconAlt="password-icon"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </div>
        <Button 
          size="large"
          text="ログイン"
          onClick={() => handleSubmit()}
        />
      </form>
      <div className="mt-21 text-center text-gray-600 Body12Regular">
        <p 
          className="
            flex items-center gap-2
            before:content-[''] before:block before:w-34 before:h-px before:bg-gray-600
            after:content-[''] after:block after:w-34 after:h-px after:bg-gray-600
          "
        >
          または
        </p>
        <p
          className="mt-5 mb-2"
        >
          アカウントをお持ちではないですか？
        </p>
        <Link 
          href="/signup"
          className="text-rose-pink-800 Body12Medium"
        >
          新規登録
        </Link>
      </div>
    </main>
  )
}