import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import logo from "@/assets/logo-radio(1).ico";

export function Header() {
  return (
    <header className="w-full bg-[#1f3c6c] py-0">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="relative w-[150px] h-[80px]">
            <Image
              src={logo}
              alt="Rádio Alvorada"
              fill
              className="object-contain"
              priority
              quality={100}
            />
          </div>
          
          <div className="flex items-center gap-2 text-white pr-4">
            <Phone className="h-5 w-5" />
            <Link
              href="https://wa.me/5543991400629"
              className="hover:underline"
              target="_blank"
            >
              (43) 99140-0629
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 