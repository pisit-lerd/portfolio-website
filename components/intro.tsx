"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {BsLine ,BsFacebook} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { Dialog } from "@headlessui/react"; // Modal component
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("หน้าแรก", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/images/profile.jpg"
              alt="Ricardo portrait"
              width="250"
              height="250"
              quality="95"
              priority={true}
              className="h-250 w-250 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-4 right-0 text-6xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">ชื่อ กมลชนก ผลบุญ</span><br></br>
        <span className="font-bold">อายุ 65 ปี ส่วนสูง 160 ซม.</span><br></br>
        <span className="font-bold">น้ำหนัก 54 กก.</span><br></br>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/images/comcard.jpg"
          download
        >
          Download Comcard{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.facebook.com/golft.freedom?rdid=Nj0T8ud5iJelgNBo&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1YKzGqJZ4z%2F#"
          target="_blank"
        >
          <BsFacebook />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          onClick={() => setIsOpen(true)}
          target="_blank"
        >
          <BsLine />
        </a>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

        <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 z-10 max-w-sm w-full">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
          <h2 className="text-lg font-semibold mb-4 text-center text-black dark:text-white">สแกน QR เพื่อเพิ่มเพื่อนใน Line</h2>
          <div className="flex justify-center">
            <Image
              src="/images/qr.jpg" // เปลี่ยน path เป็น QR ของคุณ
              alt="Line QR Code"
              width={200}
              height={200}
            />
          </div>
        </div>
      </Dialog>
      </motion.div>
    </section>
  );
}
