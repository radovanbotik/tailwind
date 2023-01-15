import React, { useState, useLayoutEffect, useRef } from "react";
import slnko from "../../assets/story_pavuk_putnik/Layer 1@1x.png";
import mrak from "../../assets/story_pavuk_putnik/Background copy 9@1x.png";
import mrak2 from "../../assets/story_pavuk_putnik/mrak2@1x.png";
import mrak3 from "../../assets/story_pavuk_putnik/mrak3@1x.png";
import mrak4 from "../../assets/clouds/cloud_1@1x.png";
import mrak5 from "../../assets/clouds/cloud_2@1x.png";
import leave1 from "../../assets/story_pavuk_putnik/leave1@1x.png";
import leave2 from "../../assets/story_pavuk_putnik/leave2@1x.png";
import leave3 from "../../assets/story_pavuk_putnik/leave3@1x.png";
import leave4 from "../../assets/story_pavuk_putnik/leave4@1x.png";
import leave5 from "../../assets/story_pavuk_putnik/leave5@1x.png";
import iba_sarkan from "../../assets/story_pavuk_putnik/Background copy 4@1x.png";
import pavuk from "../../assets/story_pavuk_putnik/Background copy 8@1x.png";
import pavuk2 from "../../assets/images/pavuk.png";
import vlakno from "../../assets/story_pavuk_putnik/Background copy 5@1x.png";
import texture from "../../assets/for-bg/paper_mulberry.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export const Product = () => {
  gsap.registerPlugin(MotionPathPlugin);
  gsap.registerPlugin(ScrollTrigger);
  //elements
  const sarkan_ref = useRef(null);
  const mrak_ref = useRef(null);
  const leave1_ref = useRef(null);
  //timelines
  const mrak_tl = useRef(null);
  //widths
  useLayoutEffect(() => {
    mrak_tl.current = gsap.timeline().to(mrak_ref.current, {
      keyframes: {
        "100%": {
          x:
            window.innerWidth + mrak_ref.current?.getBoundingClientRect().width,
        },
        "0%": { xPercent: -100 },
        "10%": { y: -50 },
        "20%": { y: 0 },
        "30%": { y: -50 },
        "40%": { y: 0 },
        "50%": { y: -50 },
        "60%": { y: 0 },
        "70%": { y: -50 },
        "80%": { y: 0 },
        "90%": { y: -50 },
        "99%": { y: 0 },
      },
      duration: 20,
      ease: "linear",
      repeat: -1,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="relative grid min-h-screen w-full overflow-hidden bg-[#cfc7984f] py-24 px-4 text-black">
      <div className="absolute top-0 left-0 h-full w-full opacity-50">
        <img src={texture} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute top-20 -right-32 h-44 w-80 scale-x-[-1]">
        <img src={mrak2} alt="" className="object-contain" />
      </div>{" "}
      <div className="absolute -right-10 -top-10 h-36 w-60">
        <img src={slnko} alt="" className="object-contain" />
      </div>
      <div className="absolute top-0 left-52 h-28 w-52">
        <img src={mrak4} alt="" className="object-contain" />
      </div>
      <div className="absolute top-10 left-0 h-36 w-48 scale-x-[-1]">
        <img src={mrak3} alt="" className="object-contain" />
      </div>
      <div className="absolute left-0 top-5 h-52 w-96 " ref={mrak_ref}>
        <img src={mrak} alt="" className="object-contain" />
      </div>
      <div className="absolute left-1/2 top-5 h-36 w-72">
        <img src={mrak} alt="" className="object-contain" />
      </div>
      <div className="absolute left-1/4 top-1/2 h-24 w-24" ref={leave1_ref}>
        <img src={leave1} alt="" className="object-contain" />
      </div>
      <div className="absolute left-2/3 top-1/4 h-20 w-24">
        <img src={leave2} alt="" className="object-contain" />
      </div>
      <div className="absolute left-1/3 top-3/4 h-20 w-24">
        <img src={leave3} alt="" className="object-contain" />
      </div>
      <div className="absolute top-1/3 left-1/2 h-12 w-24">
        <img src={leave4} alt="" className="object-contain" />
      </div>
      <div className="absolute right-44 top-2/3 h-16 w-16">
        <img src={leave5} alt="" className="absolute h-full w-full" />
      </div>
      <div className="absolute top-2/3 -left-[420px] h-56 " ref={sarkan_ref}>
        <img src={iba_sarkan} alt="" className="object-contain" />
      </div>
      <div className="absolute top-2/3 right-0 h-80  w-80">
        <img src={vlakno} alt="" className="object-contain" />
      </div>
      {/* <div className="fixed left-2/3 top-0 h-80" ref={pavuk_ref}>
        <img src={pavuk2} alt="" className="h-full w-full" />
      </div> */}
      <div className="  z-50 mx-auto mt-52 grid w-full grid-cols-4 gap-y-24 gap-x-12 font-zaisloppy text-2xl font-black leading-normal tracking-wider text-[#3E434E]">
        <h1 className=" text-shadow-lg col-span-full col-start-1 row-start-1 self-center text-center font-forma-djr text-8xl uppercase tracking-wider">
          pavúk pútnik
        </h1>
        <p className="col-span-3 col-start-1 row-span-1  row-start-2 justify-self-center indent-8 first-letter:text-6xl">
          Slniečko sa níži <br />
          a jeseň sa blíži. <br />
          V zlatistých listoch viniča,
          <br />
          osy od slasti bzučia.
        </p>
        <p className="col-span-3 col-start-2 row-span-1 row-start-3 justify-self-center">
          Brušká majú plné sladu, <br />
          no myslia i na dni hladu. <br />
          Hniezda si stavajú <br />
          k plástu plást, <br />
          už ich je rovno sedemnásť.
        </p>
        <p className="col-span-2 col-start-2 row-span-1 row-start-4 justify-self-center">
          Len pavúk,ten má času dosť <br />
          Súka a súka dlhé vlákna <br />
          a na priaznivý vetrík čaká.
          <br />
          Chce ešte poznať nové svety, <br />v ústrety poznaniu letí.
        </p>
        <p
          className="col-span-1 col-start-3 row-span-1 row-start-5 justify-self-center"
          data-id="p-4"
        >
          No nevšimol si milé deti, <br />
          šarkana. <br />
          Ten preťal vlákno,
          <br />
          babie leto, <br />
          no pavúk je fifík zato.
        </p>
        {/* <p>
          Sadol na chvost šarkana <br />a smeje sa: &#34;Chi-chi-cha, <br />
          Ani tkať mi netreba.
        </p>
        <p>
          Fičím si s vetrom opreteky, <br />
          do úst mi letia drobné muchy <br />
          Oj, to je radosť letieť het, <br />
          ach, aký krásny je ten svet!&#34; <br />
        </p>
        <p>
          No v zábave nastal škrt, <br />
          i pavúka krásna púť <br />
          Šarkana stiahli dolu deti
          <br />
          a on už dolu bruškom letí.
          <br />
        </p>
        <p>
          Do trávy spadol sýtozelenej <br />
          a rýchlo učupil sa v nej, <br />
          nezbedný čierny pasažier. <br />
        </p>
        <p>
          Keď lúka osirela, <br />
          začal siete tkať: <br />
          &#34;Musím sa len na seba spoliehať!&#34;
        </p> */}
      </div>
    </div>
  );
};
