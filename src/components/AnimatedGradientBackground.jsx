"use client";
import { cn } from "../lib/utils"; 
import { useEffect, useRef, useState } from "react";

function AnimatedGradientBackground({
  gradientBackgroundStart = "rgb(203, 207, 221)",
  gradientBackgroundEnd = "rgb(238, 240, 247)",
  firstColor = "255, 255, 51",
  secondColor = "255, 102, 255",
  thirdColor = "255, 255, 102",
  fourthColor = "102, 255, 255",
  fifthColor = "102, 255, 102",
  pointerColor = "255, 255, 51",
  size = "75%",
  blendingValue = "hard-light",
  children,
  className = "absolute h-full w-full",
  interactive = true,
  containerClassName
}) {
  const interactiveRef = useRef(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  useEffect(() => {
    document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart);
    document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, []);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) {
        return;
      }
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    }

    move();
  }, [tgX, tgY]);

  const handleMouseMove = (event) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
        className={cn(
            "h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(45deg,var(--gradient-background-start),var(--gradient-background-end))]",
            containerClassName
    )}>
        <svg className="hidden">
            <defs>
                <filter id="blurMe">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                    result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </defs>
        </svg>
        <div className={cn("", className)}>{children}</div>
        <div
            className={cn(
                "relative gradients-container h-full w-full blur-sm",
                isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}>
            <div
            className={cn(
                `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
                `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                `[transform-origin:center_center]`,
                `animate-first`,
                `opacity-100`
            )}></div>
            <div
            className={cn(
                `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
                `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                `[transform-origin:calc(50%-400px)]`,
                `animate-second`,
                `opacity-100`
            )}></div>
            <div
            className={cn(
                `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
                `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                `[transform-origin:calc(50%+400px)]`,
                `animate-third`,
                `opacity-100`
            )}></div>
            <div
            className={cn(
                `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
                `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                `[transform-origin:calc(50%-200px)]`,
                `animate-fourth`,
                `opacity-70`
            )}></div>
            <div
            className={cn(
                `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
                `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
                `animate-fifth`,
                `opacity-100`
            )}></div> 

            {interactive && (
            <div
                ref={interactiveRef}
                onMouseMove={handleMouseMove}
                className={cn(
                `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
                `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
                `opacity-70`
                )}></div>
            )}
        </div>
    </div>
  );
};

export default AnimatedGradientBackground;
