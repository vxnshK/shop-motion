"use client"; // if using Next.js App Router

import React from "react";
import { motion } from "motion/react";
import { LogOut } from "lucide-react";

function LogOutButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 80, damping: 15  }}
      className="flex gap-[8px] justify-center items-center w-full text-md font-medium bg-gray-200 text-black hover:bg-rose-500 hover:text-white cursor-pointer px-6 py-2 rounded-3xl"
    >
      <LogOut size={13} />
      <span>Log out</span>
    </motion.div>
  );
}

export default LogOutButton;
