// src/pages/NotFoundPage.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Box, Typography, Container } from "@mui/material";

const NotFoundPage: React.FC = () => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Letters for the word search grid
  const letters = [
    "ک",
    "و",
    "ن",
    "ز",
    "ی",
    "ک",
    "م",
    "ه",
    "ت",
    "ا",
    "ک",
    "ل",
    "۴",
    "۰",
    "۴",
    "ی",
    "ی",
    "و",
    "و",
    "ب",
    "و",
    "ق",
    "د",
    "ی",
    "پ",
    "ا",
    "ص",
    "ف",
    "ح",
    "ه",
    "و",
    "ج",
    "ا",
    "ی",
    "ا",
    "ف",
    "ت",
    "ث",
    "ه",
    "و",
    "و",
    "ک",
    "ه",
    "پ",
    "ث",
    "ف",
    "ح",
    "ق",
    "ه",
    "ف",
    "و",
    "و",
    "ن",
    "ش",
    "د",
    "و",
    "ق",
    "و",
    "و",
    "س",
    "م",
    "و",
    "ف",
    "و",
  ];

  // Animation sequence indices (positions to highlight)
  const animationSequence = [
    12, 13, 14, 26, 27, 28, 29, 33, 34, 35, 36, 52, 53, 54,
  ];

  // Set dimensions for grid container
  const setGridDimensions = () => {
    if (!containerRef.current) return;

    // Set container height to match width (square)
    containerRef.current.style.height = `${containerRef.current.offsetWidth}px`;
  };

  // Initialize and handle animations
  useEffect(() => {
    setGridDimensions();
    window.addEventListener("resize", setGridDimensions);

    // Animation sequence
    const initialDelay = 1500;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    animationSequence.forEach((index, i) => {
      timeouts.push(
        setTimeout(() => {
          setSelectedIndices((prev) => [...prev, index]);
        }, initialDelay + i * 500)
      );
    });

    return () => {
      window.removeEventListener("resize", setGridDimensions);
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <Box className="h-screen overflow-hidden bg-gradient-to-b from-[#335B67] to-[#2C3E50] p-4 flex items-center justify-center">
      <Container maxWidth="xl" className="py-4 max-h-full overflow-hidden">
        <Box className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          {/* Word Search Grid */}
          <Box
            ref={containerRef}
            className="w-full md:w-[45%] max-w-[600px] mx-auto"
          >
            <ul className="grid grid-cols-8 gap-0.5 p-0 m-0 list-none w-full h-full">
              {letters.map((letter, index) => {
                const isSelected = selectedIndices.includes(index);

                return (
                  <li
                    key={index}
                    className={`
                      flex items-center justify-center
                      text-lg md:text-xl font-light uppercase
                      transition-all duration-700
                      ${
                        isSelected
                          ? "bg-[#E91E63] bg-opacity-90 text-white font-bold"
                          : "bg-black bg-opacity-20 text-gray-300"
                      }
                    `}
                    style={{
                      aspectRatio: "1/1",
                      fontSize: "min(4vw, 1.5rem)",
                    }}
                  >
                    {letter}
                  </li>
                );
              })}
            </ul>
          </Box>

          {/* Content Section */}
          <Box
            className="w-full md:w-[45%] text-white text-right py-4"
            dir="rtl"
            style={{ maxHeight: "calc(100vh - 32px)", overflowY: "auto" }}
          >
            <Typography
              variant="h1"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              صفحه مورد نظر شما پیدا نشد
            </Typography>

            <Typography className="mb-4 text-base md:text-lg font-light leading-7">
              متأسفانه صفحه‌ای که به دنبال آن بودید پیدا نشد. ممکن است موقتاً در
              دسترس نباشد، منتقل شده باشد یا دیگر وجود نداشته باشد.
            </Typography>

            <Typography className="mb-6 text-base md:text-lg font-light leading-7">
              لطفاً URL وارد شده را از نظر خطا بررسی کنید و دوباره تلاش نمایید.
              همچنین می‌توانید برای یافتن محتوای مورد نظر به
              بخش‌های دیگر سایت ما سر بزنید.
            </Typography>

            {/* Navigation Links */}
            <Box className="mt-6 flex flex-wrap gap-2 justify-start">
              <Button
                component={Link}
                to="/"
                className="bg-black bg-opacity-20 hover:bg-[#E91E63] hover:bg-opacity-90 px-3 py-1 h-10 text-sm normal-case"
              >
                صفحه اصلی
              </Button>
              <Button
                component={Link}
                to="/about"
                className="bg-black bg-opacity-20 hover:bg-[#E91E63] hover:bg-opacity-90 px-3 py-1 h-10 text-sm normal-case"
              >
                درباره ما
              </Button>
              <Button
                component={Link}
                to="/sitemap"
                className="bg-black bg-opacity-20 hover:bg-[#E91E63] hover:bg-opacity-90 px-3 py-1 h-10 text-sm normal-case"
              >
                نقشه سایت
              </Button>
              <Button
                component={Link}
                to="/contact"
                className="bg-black bg-opacity-20 hover:bg-[#E91E63] hover:bg-opacity-90 px-3 py-1 h-10 text-sm normal-case"
              >
                تماس با ما
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
