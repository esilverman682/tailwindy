import React, { useEffect } from "react";
import { values } from "./data";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "@material-ui/core";

export default function ValuesSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  let MobileView = {};
  const IsTabletOrPhone = useMediaQuery("(max-width:1024px)");

  if (!IsTabletOrPhone) {
    MobileView = {
      visible: { y: 0, scale: 1 },
      hidden: { y: 250, scale: 0 }
    };
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
          Intro
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Our values
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          We believe that good values are important, which ultimately create
          good products and satisfied customers.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <motion.div
                key={value.name}
                className="pt-6"
                ref={ref}
                animate={controls}
                initial="hidden"
                transition={{ duration: 0.3 }}
                variants={MobileView}
              >
                <div className="flow-root bg-gray-100 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <value.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {value.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <p className="pt-20 max-w-prose mx-auto text-xl text-gray-500 text-center">
        We believe that good values are important, which ultimately create good
        products and satisfied customers. We believe that good values are
        important, which ultimately create good products and satisfied
        customers. We believe that good values are important, which ultimately
        create good products and satisfied customers. We believe that good
        values are important, which ultimately create good products and
        satisfied customers. We believe that good values are important, which
        ultimately create good products and satisfied customers. We believe that
        good values are important, which ultimately create good products and
        satisfied customers. We believe that good values are important, which
        ultimately create good products and satisfied customers. We believe that
        good values are important, which ultimately create good products and
        satisfied customers.
      </p>
    </div>
  );
}
