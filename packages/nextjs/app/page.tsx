"use client";

//import Link from "next/link";
import type { NextPage } from "next";

//import { useAccount } from "wagmi";
//import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
//import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  //const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">DANNYOFWEB3 test Dex have fun.</span>
            <br />
            <span className="block text-1xl"></span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
