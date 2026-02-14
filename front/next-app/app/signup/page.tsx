"use client";

import Image from "next/image"
import Link from "next/link"
import Cookies from "js-cookie";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button } from "@/components/shared"

export default function Login() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const formValues = {
    name: name,
    password: password,
  };

  
  return (
    <main className="flex flex-col items-center mt-26 px-8">
      <h1 className="w-full text-start Heading24">
        新規登録
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
          text="新規登録"
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
          既にアカウントをお持ちですか？
        </p>
        <Link 
          href="/login"
          className="text-rose-pink-800 Body12Medium"
        >
          ログイン
        </Link>
      </div>
    </main>
  )
}