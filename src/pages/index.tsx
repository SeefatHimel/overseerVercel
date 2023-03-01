import Link from "next/link";
import { menuOptions } from "utils/constants";

export default function Home() {
  return (
    <div className="w-max mx-auto mt-5">
      <h1 className="text-3xl font-bold ">Welcome!!</h1>
      <h1 className="flex flex-col gap-3 pt-5">
        {menuOptions.map((option, index) => (
          <Link key={index} href={option.link}>
            Go to {option.title}
          </Link>
        ))}
      </h1>
    </div>
  );
}
