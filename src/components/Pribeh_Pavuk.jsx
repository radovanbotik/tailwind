import React, { useState, useLayoutEffect, useRef } from "react";
import slnko from "../assets/story_pavuk_putnik/Layer 1@1x.png";
import mrak from "../assets/story_pavuk_putnik/Background copy 9@1x.png";
import mrak2 from "../assets/story_pavuk_putnik/mrak2@1x.png";
import mrak3 from "../assets/story_pavuk_putnik/mrak3@1x.png";
import mrak4 from "../assets/clouds/cloud_1@1x.png";
import mrak5 from "../assets/clouds/cloud_2@1x.png";
import leave1 from "../assets/story_pavuk_putnik/leave1@1x.png";
import leave2 from "../assets/story_pavuk_putnik/leave2@1x.png";
import leave3 from "../assets/story_pavuk_putnik/leave3@1x.png";
import leave4 from "../assets/story_pavuk_putnik/leave4@1x.png";
import leave5 from "../assets/story_pavuk_putnik/leave5@1x.png";
import iba_sarkan from "../assets/story_pavuk_putnik/Background copy 4@1x.png";
import pavuk from "../assets/story_pavuk_putnik/Background copy 8@1x.png";
import pavuk_a_sarkan from "../assets/story_pavuk_putnik/sarkan@1x.png";
import vlakno from "../assets/story_pavuk_putnik/Background copy 5@1x.png";
import trava from "../assets/story_pavuk_putnik/trava.png";
import texture from "../assets/for-bg/paper_mulberry.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export const Pribeh_Pavuk = () => {
  gsap.registerPlugin(MotionPathPlugin);
  gsap.registerPlugin(ScrollTrigger);

  //elements
  const pavuk_ref = useRef(null);
  const sarkan_ref = useRef(null);
  const mrak_ref = useRef(null);
  const leave1_ref = useRef(null);
  const root_ref = useRef(null);
  const slnko_ref = useRef(null);
  const title_ref = useRef(null);
  const main_content = useRef(null);
  const animationWrap_ref = useRef(null);
  const poem_ref = useRef(null);
  const vers1_ref = useRef(null);
  const vers2_ref = useRef(null);
  const vers3_ref = useRef(null);
  const vers4_ref = useRef(null);
  const vers5_ref = useRef(null);
  const vers6_ref = useRef(null);
  const vers7_ref = useRef(null);
  const vers8_ref = useRef(null);
  const vers9_ref = useRef(null);

  const circle_ref = useRef();
  //timelines
  const mrak_tl = useRef(null);
  const static_mrak_tl = useRef(null);
  const intro_tl = useRef(null);
  const poem_tl = useRef(null);
  const scroll_func = useRef(null);
  const leaves_tl = useRef(null);

  //Utility Function
  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;

  Math.getDistance = function (x1, y1, x2, y2) {
    var xs = x2 - x1,
      ys = y2 - y1;
    xs *= xs;
    ys *= ys;
    return Math.sqrt(xs + ys);
  };

  let radius = Math.getDistance(0, 0, centerX, centerY);
  let fullWidth = radius * 2;
  let percentIncrease = fullWidth / 100;

  useLayoutEffect(() => {
    mrak_tl.current = gsap.timeline().to(mrak_ref.current, {
      keyframes: {
        "100%": {
          x:
            window.innerWidth + mrak_ref.current?.getBoundingClientRect().width,
        },
        "0%": { xPercent: -100, opacity: 0 },
        "10%": { x: 0, y: -50, opacity: 1 },
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
      duration: 30,
      ease: "linear",
      repeat: -1,
      repeatDelay: 1,
    });
    return () => mrak_tl.current.revert();
  }, []);

  useLayoutEffect(() => {
    let context = gsap.context(() => {
      gsap.to('[data-name="mrak_static"]', {
        keyframes: {
          "25%": { y: 5 },
          "50%": { y: 0 },
          "75%": { y: -2 },
          "90%": { y: 0 },
          "100%": {
            x: 10,
            y: 10,
          },
        },
        duration: 5,
        repeat: -1,
        stagger: 0.75,
        yoyo: true,
        ease: "power1.out",
      });
    }, main_content.current);
    return () => context.revert();
  }, []);

  useLayoutEffect(() => {
    const slnko_ani = gsap.fromTo(
      slnko_ref.current,
      { filter: "saturate(100%)", scale: 0.99 },
      {
        scale: 1,
        filter: "saturate(140%)",
        duration: 2,
        repeat: -1,
        yoyo: true,
      }
    );
    return () => slnko_ani.revert();
  }, []);

  useLayoutEffect(() => {
    const context = gsap.context(self => {
      // const leaves_ani = gsap.timeline().fromTo(
      //   '[data-type="leaf"]',
      //   {
      //     xPercent: 1000,
      //     rotate: -20,
      //   },
      //   {
      //     xPercent: -3500,
      //     stagger: 0.1,
      //     rotate: 25,
      //     duration: 6.5,
      //     scale: 0.6,
      //   }
      // );
      intro_tl.current = gsap
        .timeline({ onComplete: scroll_func.current })

        .to(circle_ref.current, {
          x: "90vw",
          duration: 1,
        })
        .to(circle_ref.current, {
          x: "50vw",
          scale: percentIncrease,
          duration: 1,
          ease: "slow(0.7, 0.7, false)",
          opacity: 0,
        })
        .set(main_content.current, { backgroundColor: "#96906e4f" })
        .to(".images", { opacity: 1 })
        .set("[data-name='vers']", { opacity: 0, y: -200 }, 0)
        .set(animationWrap_ref.current, { opacity: 1 })
        .from(
          title_ref.current,
          { xPercent: -100, opacity: 0, duration: 1 },
          "<"
        )
        .from(
          pavuk_ref.current,
          { scale: 0.3, opacity: 0, duration: 0.5, y: -500 },
          "<+0.5"
        )

        .duration(5);
    }, main_content.current);
    return () => context.revert();
  }, []);
  useLayoutEffect(() => {
    const context = gsap.context(self => {
      poem_tl.current = gsap
        .timeline({ paused: true })
        .to(title_ref.current, { y: 100, opacity: 0 })
        .to(pavuk_ref.current, { y: 100, opacity: 0 }, 0)

        // .set(poem_ref.current, { opacity: 1 }, "<")
        .to(vers1_ref.current, { opacity: 1, y: 0 }, "<")
        .to(vers1_ref.current, { opacity: 0, y: 200 }, "<+1")
        .to(slnko_ref.current, { opacity: 0 })
        .to(vers2_ref.current, { opacity: 1, y: 0 }, "<")
        .to(vers2_ref.current, { opacity: 0, y: 200 }, "<+1")
        .to(vers3_ref.current, { opacity: 1, y: 0 }, "<")
        .to(vers3_ref.current, { opacity: 0, y: 200 }, "<+1")
        .to(vers4_ref.current, { opacity: 1, y: 0 }, "<")
        .to(vers4_ref.current, { opacity: 0, y: 200 }, "<+1")
        .to(vers5_ref.current, { opacity: 1, y: 0 }, "<")
        .to(vers5_ref.current, { opacity: 0, y: 200 }, "<+1")
        .to(vers6_ref.current, { opacity: 1, y: 0 }, "<")
        .to(vers6_ref.current, { opacity: 0, y: 200 }, "<+1")
        .to(vers7_ref.current, { opacity: 1, y: 0 }, "<")
        .to(vers7_ref.current, { opacity: 0, y: 200 }, "<+1")
        .to(vers8_ref.current, { opacity: 1, y: 0 }, "<")
        .to(vers8_ref.current, { opacity: 0, y: 200 }, "<+1")
        .to(vers9_ref.current, { opacity: 1, y: 0 }, "<")
        .to(vers9_ref.current, { opacity: 0, y: 200 }, "<+1");
      // .from("[data-name='vers']", { opacity: 0, y: -200, stagger: 1 }, "<")
      // .to("[data-name='vers']", { opacity: 0, stagger: 1 }, "<+1")
      // .to(slnko_ref.current, { opacity: 0 });
    }, main_content.current);
    return () => context.revert();
  }, []);
  useLayoutEffect(() => {
    scroll_func.current = function enableScrollTimeline() {
      ScrollTrigger.create({
        trigger: main_content.current,
        start: "top top",
        pin: true,
        end: "+=" + window.innerHeight * 3,
        animation: poem_tl.current,
        scrub: 2,
      });
    };
  }, []);

  return (
    <div
      className="relative  mx-auto grid min-h-screen w-full  max-w-7xl place-content-center  overflow-hidden bg-white text-[#3E434E]"
      ref={main_content}
    >
      {/* <div className=" absolute top-1/2 left-0 h-40 w-40" ref={pavuk_ref}>
        <img src={pavuk} alt="" className="h-full w-full object-contain" />
      </div> */}

      <div className="images h-full w-full  opacity-0">
        <div className="absolute top-0 left-0 h-full w-full opacity-50">
          <img src={texture} alt="" className="h-full w-full object-cover" />
        </div>
        <div
          className="absolute top-20 -right-32 h-44 w-80 scale-x-[-1] "
          data-name="mrak_static"
        >
          <img src={mrak2} alt="" className="object-contain" />
        </div>
        <div className="absolute -right-10 -top-10 h-36 w-60" ref={slnko_ref}>
          <img src={slnko} alt="" className="object-contain" />
        </div>
        <div
          className="absolute top-0 left-52 h-28 w-52"
          data-name="mrak_static"
        >
          <img src={mrak4} alt="" className="object-contain" />
        </div>
        <div
          className="absolute top-10 left-0 h-36 w-48 scale-x-[-1]"
          data-name="mrak_static"
        >
          <img src={mrak3} alt="" className="object-contain" />
        </div>
        <div className="absolute left-0 top-5 h-52 w-96 " ref={mrak_ref}>
          <img src={mrak} alt="" className="object-contain" />
        </div>
        <div
          className="absolute left-1/2 top-5 h-36 w-72"
          data-name="mrak_static"
        >
          <img src={mrak} alt="" className="object-contain" />
        </div>
        <div
          className="absolute left-1/4 top-1/2 h-24 w-24"
          data-name="leaf"
          data-id="leaf-1"
        >
          <img
            src={leave1}
            alt=""
            className="object-contain"
            data-type="leaf"
          />
        </div>
        <div
          className="absolute left-3/4 top-2/4 h-20 w-24"
          ref={leave1_ref}
          data-name="leaf"
          data-id="leaf-2"
        >
          <img
            src={leave2}
            alt=""
            className="object-contain"
            data-type="leaf"
          />
        </div>
        <div
          className="absolute left-1/3 top-3/4 h-20 w-24"
          data-name="leaf"
          data-id="leaf-3"
        >
          <img
            src={leave3}
            alt=""
            className="object-contain"
            data-type="leaf"
          />
        </div>
        <div
          className="absolute top-1/3 left-1/2 h-12 w-24"
          data-name="leaf"
          data-id="leaf-4"
        >
          <img
            src={leave4}
            alt=""
            className="object-contain"
            data-type="leaf"
          />
        </div>
        <div
          className="absolute right-44 top-2/3 h-16 w-16"
          data-name="leaf"
          data-id="leaf-5"
        >
          <img
            src={leave5}
            alt=""
            className="absolute h-full w-full"
            data-type="leaf"
          />
        </div>
        {/* <div className="absolute top-2/3 right-0 h-80  w-80">
          <img src={vlakno} alt="" className="object-contain" />
        </div> */}
        <div className="absolute bottom-0 left-0  h-40 w-full">
          <img
            src={trava}
            alt=""
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
      {/* <div
        className="absolute top-1/2 left-0 z-50 h-128 w-128"
        ref={sarkan_ref}
      >
        <img src={iba_sarkan} alt="" className="object-contain" />
      </div> */}
      {/* CIRCLE */}
      <div
        className="circle fixed top-1/2 left-0 h-40 w-40 translate-y-[-50%] translate-x-[-50%] rounded-full bg-black"
        ref={circle_ref}
      ></div>
      {/* ANIMATION WRAP */}
      <div
        className="animationWrapper relative flex items-center justify-center gap-12 overflow-hidden opacity-0"
        ref={animationWrap_ref}
      >
        <div className="h-40 w-40" ref={pavuk_ref}>
          <img src={pavuk} alt="" className="h-full w-full object-contain" />
        </div>
        <div className="content grid w-full place-content-center overflow-hidden">
          <div className="heading grid-area-1">
            <h1
              className=" text-shadow-lg  my-24 text-center font-zaisloppy text-8xl  tracking-wide"
              ref={title_ref}
            >
              Pavúk pútnik
            </h1>
          </div>
          <div
            className="poem grid-area-1 grid w-full  place-content-center font-zaisloppy text-4xl font-black leading-normal tracking-wider text-[#3E434E]"
            ref={poem_ref}
          >
            <div data-name="vers" className="grid-area-1" ref={vers1_ref}>
              <p className=" perspective-1 indent-8 first-letter:text-6xl">
                Slniečko sa níži <br />
                a jeseň sa blíži. <br />
                V zlatistých listoch viniča,
                <br />
                osy od slasti bzučia.
              </p>
            </div>
            <div data-name="vers" className="grid-area-1" ref={vers2_ref}>
              <p>
                Brušká majú plné sladu, <br />
                no myslia i na dni hladu. <br />
                Hniezda si stavajú <br />
                k plástu plást, <br />
                už ich je rovno sedemnásť.
              </p>
            </div>
            <div data-name="vers" className="grid-area-1" ref={vers3_ref}>
              <p>
                Len pavúk,ten má času dosť <br />
                Súka a súka dlhé vlákna <br />
                a na priaznivý vetrík čaká.
                <br />
                Chce ešte poznať nové svety, <br />v ústrety poznaniu letí.
              </p>
            </div>
            <div data-name="vers" className="grid-area-1" ref={vers4_ref}>
              <p>
                No nevšimol si milé deti, <br />
                šarkana. <br />
                Ten preťal vlákno,
                <br />
                babie leto, <br />
                no pavúk je fifík zato.
              </p>
            </div>
            <div data-name="vers" className="grid-area-1" ref={vers5_ref}>
              <p>
                Sadol na chvost šarkana <br />a smeje sa: &#34;Chi-chi-cha,{" "}
                <br />
                Ani tkať mi netreba.
              </p>
            </div>
            <div data-name="vers" className="grid-area-1" ref={vers6_ref}>
              <p>
                Fičím si s vetrom opreteky, <br />
                do úst mi letia drobné muchy <br />
                Oj, to je radosť letieť het, <br />
                ach, aký krásny je ten svet!&#34; <br />
              </p>
            </div>
            <div data-name="vers" className="grid-area-1" ref={vers7_ref}>
              <p>
                No v zábave nastal škrt, <br />
                i pavúka krásna púť <br />
                Šarkana stiahli dolu deti
                <br />
                a on už dolu bruškom letí.
                <br />
              </p>
            </div>
            <div data-name="vers" className="grid-area-1" ref={vers8_ref}>
              <p>
                Do trávy spadol sýtozelenej <br />
                a rýchlo učupil sa v nej, <br />
                nezbedný čierny pasažier. <br />
              </p>
            </div>
            <div data-name="vers" className="grid-area-1" ref={vers9_ref}>
              <p>
                Keď lúka osirela, <br />
                začal siete tkať: <br />
                &#34;Musím sa len na seba spoliehať!&#34;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
