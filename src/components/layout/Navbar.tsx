"use client";
import { HomeIcon, TagIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  const paths = [
    {
      name: "Planos de assinatura",
      path: "/planos",
      icon: TagIcon,
    },
    {
      name: "Meus planos",
      path: "/meus-planos",
      icon: TagIcon,
    }
  ];

  return (
    <nav className="navbar bg-white shadow-md w-2/12 rounded-lg h-fit">
      <ul>
        <li className="cursor-pointer rounded-t-lg">
          <Link href="/" className="flex flex-row px-2 py-2 gap-2">
              <HomeIcon size={24} />
              <p>Home</p>
          </Link>
        </li>
        {paths.map((item, i) => (
          <li
            key={item.path}
            className={`${
              path.startsWith(item.path) ? "bg-brand-light text-white" : ""
            } ${
              i === paths.length - 1 ? "rounded-b-lg" : ""
            } cursor-pointer`}
          >
            <Link className="flex flex-row px-2 py-2 gap-2" href={item.path}>
              <item.icon size={24} />
              <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
