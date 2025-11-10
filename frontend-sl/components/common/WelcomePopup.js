"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import logo from "../../public/images/finger-tips.png";
import shoppers from "../../public/images/logo.png";
import {
  Luckiest_Guy,
  Shadows_Into_Light_Two,
  Patrick_Hand,
} from "next/font/google";

const luckiest = Luckiest_Guy({ weight: "400", subsets: ["latin"] });
const shadows = Shadows_Into_Light_Two({ weight: "400", subsets: ["latin"] });
const patrick = Patrick_Hand({ weight: "400", subsets: ["latin"] });

const STORAGE_KEY = "welcome_popup_dismissed_v2";

export default function WelcomePopup() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [introText, setIntroText] = useState("");
  const [introDone, setIntroDone] = useState(false);
  const timerRef = useRef(null);

  const introFull = "";

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setShow(true);
      timerRef.current = setTimeout(handleClose, 250000);
    }
    return () => clearTimeout(timerRef.current);
  }, [mounted]);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  useEffect(() => {
    if (!show) return;
    if (introFull.length === 0) {
      setIntroDone(true);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      setIntroText(introFull.slice(0, i + 1));
      i++;
      if (i === introFull.length) {
        clearInterval(interval);
        setTimeout(() => setIntroDone(true), 600);
      }
    }, 70);
    return () => clearInterval(interval);
  }, [show]);

  function handleClose() {
    clearTimeout(timerRef.current);
    sessionStorage.setItem(STORAGE_KEY, "true");
    setShow(false);
  }

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[1000] flex items-center justify-center px-3 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <button
            onClick={handleClose}
            className="absolute top-3 right-3 sm:top-5 sm:right-5 text-white hover:scale-110 transition-transform"
          >
            <X size={28} />
          </button>

          <motion.div
            className="relative w-[90%] sm:w-[85%] md:w-[75%] lg:w-[70%] xl:w-[50%]  h-[90%] rounded-3xl bg-gradient-to-br from-white via-slate-100 to-gray-200 p-5 sm:p-8 md:p-10 shadow-[0_0_60px_rgba(255,255,255,0.2)] text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
            <Image
              src={logo}
              alt="Fingertips Logo"
              className="h-10 sm:h-16 lg:h-32 w-auto mx-auto object-contain"
              priority
            />
            <motion.p
              className={`${shadows.className} text-gray-700 text-sm sm:text-base md:text-lg`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Presents
            </motion.p>

            <div
              className={`${shadows.className} mt-5
               text-sm sm:text-lg md:text-xl text-black/70 mb-6`}
            >
              {introText}
            </div>

            <motion.h2
              className={`${luckiest.className} text-lg sm:text-xl md:text-2xl lg:text-3xl text-black font-extrabold tracking-wide leading-tight`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={
                introDone
                  ? {
                      scale: [1, 1.05, 1],
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.9, ease: "easeOut" },
                    }
                  : { opacity: 0 }
              }
            >
              SOMETHING EXCITING HAPPENING...
            </motion.h2>

            <motion.div
              className="flex justify-center mt-2 sm:mt-4"
              initial={{ opacity: 0 }}
              animate={
                introDone
                  ? {
                      opacity: [0, 1, 0.5, 1],
                      transition: { duration: 1.8, repeat: Infinity },
                    }
                  : { opacity: 0 }
              }
            >
              <Image
                src={shoppers}
                alt="Shoppers Link Logo"
                className="h-10 sm:h-14 md:h-28 w-auto object-contain"
              />
            </motion.div>
            <motion.p
              className={`${patrick.className} text-gray-700 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 leading-snug`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Let’s rule the world with our own brands!
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
