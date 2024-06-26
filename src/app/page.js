"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Section1Hi from "@/components/Section1Hi.js";
import Section2About from "@/components/Section2About";
import {Skills} from "@/components/Section3Skill"
import Section4Experience from "@/components/Section4Experience";
import Section5Work from "@/components/Section5Work";
import Section6Contact from "@/components/Section6Contact";
import Section7Footer from "@/components/Section7Footer";
import Navbar from '@/components/Navbar';
  
export default function Home() {
  const [isDark, setIsDark] = useState(false);
  
  const handleClick = () => {
      setIsDark(!isDark);
  }

  return (
    <div className={isDark ? "dark" : ""}>
      <Navbar isDark={isDark} handleClick={handleClick} />
        <Section1Hi/>
        <Section2About/>
        <Skills/>
        <Section4Experience/>
        <Section5Work />
        <Section6Contact />
        <Section7Footer />
    </div>

  );
}  

