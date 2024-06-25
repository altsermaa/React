import Image from "next/image";
import Section1Hi from "@/components/Section1Hi.js";
import Section2About from "@/components/Section2About";
import {Skills} from "@/components/Section3Skill"
import Section4Experience from "@/components/Section4Experience";
import Section5Work from "@/components/Section5Work";
import Section6Contact from "@/components/Section6Contact";

export default function Home() {
  return (
    <>
    <Section1Hi/>
    <Section2About/>
    <Skills/>
    <Section4Experience/>
    <Section5Work />
    <Section6Contact />
    </>

  );
}
