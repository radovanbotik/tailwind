import React, { useLayoutEffect, useRef } from "react";
import slnko from "../../assets/story_pavuk_putnik/Layer 1@1x.png";
import mrak from "../../assets/story_pavuk_putnik/Background copy 9@1x.png";
import mrak2 from "../../assets/story_pavuk_putnik/mrak2@1x.png";
import mrak3 from "../../assets/story_pavuk_putnik/mrak3@1x.png";
import leave1 from "../../assets/story_pavuk_putnik/leave1@1x.png";
import leave2 from "../../assets/story_pavuk_putnik/leave2@1x.png";
import leave3 from "../../assets/story_pavuk_putnik/leave3@1x.png";
import leave4 from "../../assets/story_pavuk_putnik/leave4@1x.png";
import leave5 from "../../assets/story_pavuk_putnik/leave5@1x.png";
import iba_sarkan from "../../assets/story_pavuk_putnik/Background copy 4@1x.png";
import pavuk from "../../assets/story_pavuk_putnik/Background copy 8@1x.png";
import vlakno from "../../assets/story_pavuk_putnik/Background copy 5@1x.png";
import texture from "../../assets/for-bg/paper_mulberry.jpg";
import gsap from "gsap";

export const Product = ({ runAnimation }) => {
  const sarkan_ref = useRef();

  // useLayoutEffect(() => {
  //   const timeline = gsap.timeline().fromTo(
  //     sarkan_ref.current,
  //     { x: "-100%" },
  //     {
  //       x: window.innerWidth,
  //       duration: 10,
  //       repeat: -1,
  //       yoyo: true,
  //     }
  //   );
  //   () => {};
  // }, []);

  // - sarkan_ref.current.getBoundingClientRect().width
  return (
    <div className="relative grid min-h-screen w-screen overflow-hidden bg-[#cfc7984f] py-24 px-4 text-black">
      {/* <div className="absolute left-0 top-0 h-full w-7/12">
        <img
          src={bg}
          alt="background-image"
          className="image h-full w-full object-cover object-bottom"
        />
      </div> */}
      {/* <div className="z-10 my-auto mx-auto  flex flex-col place-content-center md:flex-row md:gap-16">
        <div className="h-160 flex-1 overflow-hidden">
          <img
            src={frontpage}
            alt=""
            className="mx-auto h-full w-full max-w-xl object-contain "
          />
        </div>
        <div className=" relative flex-1">
          <div className=" mx-auto max-w-md space-y-8 text-center md:mr-auto md:ml-0 md:text-left">
            <h1 className=" anti font-poleno text-7xl  font-normal uppercase leading-none tracking-tight drop-shadow-xl">
              pavúk <br /> pútnik
            </h1>
            <button
              className="w-1/2 bg-black px-2 py-5 font-forma-djr text-lg tracking-widest text-white first-letter:uppercase"
              onClick={runAnimation}
            >
              nahliadnuť
            </button>
            <p className="whitespace-pre-line font-forma-djr text-lg tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Aliquam, rerum ipsa tempore soluta accusamus reprehenderit quas
              quos. Neque harum rem consectetur distinctio voluptas
              necessitatibus molestias officiis minima natus eos corporis
              labore, hic fugiat veritatis iure cumque assumenda a tenetur porro
              fugit id error molestiae provident! Minima consequatur, delectus
              debitis totam provident ab amet autem quis earum corporis placeat
              maiores, aspernatur, deleniti reprehenderit ducimus.
            </p>
          </div>
        </div>
      </div> */}
      {/* <div className="absolute inset-0 top-0 left-0 h-full w-full">
        <img src={pozadie} alt="" className="object-cover" />
      </div> */}
      {/* <div className="absolute left-0 top-0 bottom-0 h-full w-full opacity-30">
        <img src={pozadie} alt="" className="object-cover" />
      </div> */}
      <div className="absolute top-0 left-0 h-full w-full opacity-50">
        <img src={texture} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute top-20 -right-32 h-44 scale-x-[-1]">
        <img src={mrak2} alt="" />
      </div>{" "}
      <div className="absolute -right-10 -top-10 h-36">
        <img src={slnko} alt="" />
      </div>
      <div className="absolute top-10 left-0 h-36 scale-x-[-1]">
        <img src={mrak3} alt="" />
      </div>
      <div className="absolute left-40 top-5 h-52">
        <img src={mrak} alt="" />
      </div>
      <div className="absolute left-1/2 top-5 h-36">
        <img src={mrak} alt="" />
      </div>
      <div className="absolute left-1/4 top-1/2 h-24">
        <img src={leave1} alt="" />
      </div>
      <div className="absolute left-2/3 top-1/4 h-20">
        <img src={leave2} alt="" />
      </div>
      <div className="absolute left-1/3 top-3/4 h-20">
        <img src={leave3} alt="" />
      </div>
      <div className="absolute top-1/3 left-1/2 h-12">
        <img src={leave4} alt="" />
      </div>
      <div className="absolute right-44 top-2/3 h-16 w-16">
        <img src={leave5} alt="" className="absolute h-full w-full" />
      </div>
      <div className="absolute top-2/3 left-0 h-56 " ref={sarkan_ref}>
        <img src={iba_sarkan} alt="" className="" />
      </div>
      <div className="absolute top-2/3 right-0 h-80 ">
        <img src={vlakno} alt="" className="" />
      </div>
      <div className="z-50  mx-auto mt-44 grid w-full grid-cols-4 gap-x-5 gap-y-20 font-zaisloppy text-4xl font-black leading-normal tracking-wider text-[#3E434E]">
        <h1 className="col-span-2 col-start-1 row-start-5 self-center font-forma-djr text-8xl uppercase tracking-wider">
          pavúk pútnik
        </h1>
        <p className="col-span-3 col-start-1 row-span-1  row-start-1 justify-self-center indent-8 first-letter:text-6xl">
          Slniečko sa níži <br />
          a jeseň sa blíži. <br />
          V zlatistých listoch viniča,
          <br />
          osy od slasti bzučia.
        </p>
        <p className="col-span-3 col-start-2 row-span-1 row-start-2 justify-self-center">
          Brušká majú plné sladu, <br />
          no myslia i na dni hladu. <br />
          Hniezda si stavajú <br />
          k plástu plást, <br />
          už ich je rovno sedemnásť.
        </p>
        <p className="col-span-2 col-start-2 row-span-1 row-start-3 justify-self-center">
          Len pavúk,ten má času dosť <br />
          Súka a súka dlhé vlákna <br />
          a na priaznivý vetrík čaká.
          <br />
          Chce ešte poznať nové svety, <br />v ústrety poznaniu letí.
        </p>
        <p className="col-span-3 col-start-3 row-span-1 row-start-4 justify-self-center">
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
