import Link from "next/link";
import React from "react";

function About() {
  return (
    <>
      <p
      className="w-full h-screen text-center bg-slate-300 font-bold font-mono"
      >
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        I am a passionate AI enthusiast with expertise in Web3, Metaverse, and
        Generative AI,<br/> currently honing my skills under the guidance of <b className="bg-orange-400"> "Sir Hamza Alvi"</b>
        <br/> My journey is fueled by curiosity and a desire to innovate
        through technology.<br/> I strive to create impactful digital experiences
        that bridge the gap between creativity and technology.<br/>
        Check My <br/>
        <Link href={'/services'}
        className="bg-orange-400 rounded-sm "
        >Services</Link>
        <br/>
         <Link href={'/'} className="bg-orange-400 rounded-sm">Go To Home </Link>
      </p>
    </>
  );
}

export default About;
