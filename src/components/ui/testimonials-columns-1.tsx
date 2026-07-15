"use client";
import React from "react";
import { motion } from "motion/react";

export interface Testimonial {
  text: string;
  name: string;
  role?: string;
  image?: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-white"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name }, i) => (
                <div className="p-8 md:p-10 rounded-[2rem] bg-gray-50 border border-black/5 shadow-sm max-w-xs w-full" key={i}>
                  <div className="text-gray-700 leading-relaxed text-base md:text-lg">"{text}"</div>
                  <div className="flex items-center gap-2 mt-6">
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight text-black">{name}</div>
                      <div className="text-sm font-medium text-gray-500 flex items-center gap-1 mt-1">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#00B67A]" xmlns="http://www.w3.org/2000/svg"><path d="M12 0l3.708 7.514L24 8.72l-6 5.85L19.416 24 12 20.1 4.584 24 6 14.57 0 8.72l8.292-1.206L12 0z"/></svg>
                        Trustpilot
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
