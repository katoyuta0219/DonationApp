import Image from "next/image"
import Link from "next/link"
import { Input, Button } from "@/components/shared"

export default function Login() {
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
      <form className="flex flex-col items-center gap-16">
        <div className="flex flex-col gap-6">
          <Input 
            size="normal"
            type="text"
            placeholder="ユーザー名を入力"
            iconSrc="/icons/user/gray-500.svg"
            iconAlt="user-icon"
          />
          <Input 
            size="normal"
            type="password"
            placeholder="パスワードを入力"
            iconSrc="/icons/password-icon.svg"
            iconAlt="password-icon"
          />
        </div>
        <Button 
          size="large"
          text="ログイン"
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
          href="/public/signup"
          className="text-rose-pink-800 Body12Medium"
        >
          新規登録
        </Link>
      </div>
    </main>
  )
}