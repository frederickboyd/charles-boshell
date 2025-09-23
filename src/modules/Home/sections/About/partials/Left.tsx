import React from "react";
import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";

import { skills } from "@modules/Home/config/constanst";
import { fadeTop, motionStep } from "@config/motion";

const Left = () => {
  return (
    <motion.div variants={fadeTop} {...motionStep} className="col-span-3">
      <div className="space-y-4 mt-7 text-slate-400">
        <p>
          Hello! My name is Charles Boshell and I love building things that make
          an impact on the web. My journey into development started more than 20
          years ago, when I was tinkering with early database-driven apps and
          experimenting with front-end styling — those first projects with SQL
          Server and classic VB.NET sparked a curiosity that grew into a
          lifelong career in software engineering.
        </p>
        <p>
          Fast-forward to today, I’ve had the privilege of working across
          industries — from financial services and insurance to retail,
          government, and tech consulting. Along the way, I’ve led modernization
          projects, moved legacy codebases into the cloud, and helped design
          scalable, serverless systems on AWS.
        </p>
        <p>
          These days, my main focus is building accessible, performant, and
          cloud-native applications using React, Node.js, and AWS. I’m
          especially passionate about mentoring teams, refining architectures,
          and delivering digital experiences that are not only functional but
          inclusive.
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>

        <div className="__skills md:pr-56">
          <ul className="grid grid-cols-2 space-y-2">
            {skills.map((e: string, i: number) => (
              <li
                key={i}
                className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-sky-400"
              >
                {" "}
                <IoMdArrowDropright className="text-sky-400 text-xl" /> {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Left;
