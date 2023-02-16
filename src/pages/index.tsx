import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "antd";
import Link from "next/link";
import DashBoard from "./dashboard/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-max mx-auto mt-5">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="flex flex-col gap-3 pt-5">
        <Link href={"/taskList"}>Go to Tasks Page</Link>
        <Link href={"/dashboard"}>Go to DashBoard Page</Link>
        <Link href={"/import"}>Go to Import Page</Link>
        <Link href={"/onBoarding"}>Go to OnBoarding Page</Link>
      </h1>
    </div>
  );
}
