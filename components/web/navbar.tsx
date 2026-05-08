import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="w-full h-20 py-6 flex items-center justify-between px-22 scale-105">
      <div className="flex items-center flex-1 justify-start">
        <Link href="/">
          <h1 className="text-3xl font-bold">
            5S<span className="text-green-500">dev</span>
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-2 px-12 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex-1 max-w-md mx-auto">
        <Link className={buttonVariants({ variant: "ghost" })} href="/">
          Trang chủ
        </Link>
        <Link className={buttonVariants({ variant: "ghost" })} href="/">
          Dịch vụ
        </Link>
        <Link className={buttonVariants({ variant: "ghost" })} href="/">
          Dự án
        </Link>
        <Link className={buttonVariants({ variant: "ghost" })} href="/">
          Blog
        </Link>
        <Link className={buttonVariants({ variant: "ghost" })} href="/">
          Liên hệ
        </Link>
      </div>

      <div className="flex items-center flex-1 justify-end">
        <Link className={buttonVariants()} href="">
          Đăng nhập
        </Link>
        <Link className={buttonVariants({ variant: "outline" })} href="">
          Đăng ký
        </Link>
      </div>
    </nav>
  );
}
