import React, { useState, useLayoutEffect, useRef } from "react";
import slnko from "../assets/story_pavuk_putnik/Layer 1@1x.png";
import mrak from "../assets/clouds/mrak-moving@1x.png";
import mrakvlavo from "../assets/clouds/mrakvlavo@0.5x.png";
import mrakvpravo from "../assets/clouds/mrakvpravo@0.5x.png";
import mrak4 from "../assets/clouds/mrak-slate2@0.5x.png";

import javor1 from "../assets/leaves/javor3@0.5x.png";
import javor2 from "../assets/leaves/javor2@0.5x.png";
import javor3 from "../assets/leaves/javor4@0.5x.png";
import listvlavo1 from "../assets/leaves/list-vlavo3@0.5x.png";
import listvpravo1 from "../assets/leaves/list-vpravo3@0.5x.png";

import iba_sarkan from "../assets/story_pavuk_putnik/Background copy 4@1x.png";
import pavuk from "../assets/story_pavuk_putnik/Background copy 8@1x.png";
import pavuk_a_sarkan from "../assets/story_pavuk_putnik/sarkan@1x.png";
import vlakno from "../assets/story_pavuk_putnik/Background copy 5@1x.png";
import trava from "../assets/story_pavuk_putnik/trava.png";
import papier_recyklovany from "../assets/for-bg/papier_recyklovany@1x-min.png";
import papier_recyklovany_mini from "../assets/Minified/bg/papier_recyklovany@0.5x-min.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { radius, fullWidth, percentIncrease } from "../utility/getCircle";
import { pavuk_putnik } from "../data/pavuk_putnik";

import { OptImage } from "./OptImage";

export const Pribeh_Pavuk = () => {
  gsap.registerPlugin(MotionPathPlugin);
  gsap.registerPlugin(ScrollTrigger);

  //elements
  const pavuk_ref = useRef(null);
  const sarkan_ref = useRef(null);
  const sarkan_pavuk_ref = useRef(null);
  const mrak_ref = useRef(null);
  const leave1_ref = useRef(null);
  const slnko_ref = useRef(null);
  const title_ref = useRef(null);
  const main_content = useRef(null);
  const animationWrap_ref = useRef(null);
  const poem_ref = useRef(null);

  const circle_ref = useRef();
  //timelines
  const mrak_tl = useRef(null);
  const intro_tl = useRef(null);
  const poem_tl = useRef(null);
  const scroll_func = useRef(null);
  const leaves_tl = useRef(null);

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
        .from(
          '[data-name="leaf"]',
          {
            opacity: 0,
            xPercent: 300,
            y: -200,
            rotate: -50,
            stagger: 0.2,
          },
          ">"
        )
        .set("[data-name='vers']", { opacity: 0, y: -200 }, 0)
        .set(animationWrap_ref.current, { opacity: 1 })
        .from(
          title_ref.current,
          { xPercent: -100, opacity: 0, duration: 1 },
          "<"
        )
        // .from(
        //   pavuk_ref.current,
        //   { scale: 0.3, opacity: 0, duration: 0.5, y: -500 },
        //   "<+0.5"
        // )

        .duration(5);
    }, main_content.current);
    return () => context.revert();
  }, []);
  useLayoutEffect(() => {
    const context = gsap.context(self => {
      poem_tl.current = gsap
        .timeline({ paused: true })
        .to(title_ref.current, { y: 100, opacity: 0 })
        // .to(pavuk_ref.current, { y: 100, opacity: 0 }, 0)
        .to("[data-id='vers-1']", { opacity: 1, y: 0 }, "<")
        .to(
          '[data-name="leaf"]',
          {
            opacity: 0,
            scale: 0.5,
            xPercent: -300,
            stagger: 0.5,
          },
          ">"
        )
        .to(slnko_ref.current, { opacity: 0 }, ">")
        .to("[data-id='vers-1']", { opacity: 0, y: 200 }, "<+2")
        .to("[data-id='vers-2']", { opacity: 1, y: 0 }, "<")
        .to("[data-id='vers-2']", { opacity: 0, y: 200 }, "<+1")
        .to("[data-id='vers-3']", { opacity: 1, y: 0 }, "<")
        .to("[data-id='vers-3']", { opacity: 0, y: 200 }, "<+1")
        .to("[data-id='vers-4']", { opacity: 1, y: 0 }, "<")
        .to("[data-id='vers-4']", { opacity: 0, y: 200 }, "<+1")
        .to("[data-id='vers-5']", { opacity: 1, y: 0 }, "<")
        .fromTo(
          sarkan_pavuk_ref.current,
          { xPercent: -100, opacity: 1 },
          {
            y: -200,
            x: 500,

            duration: 5,
          }
        )
        .to(sarkan_pavuk_ref.current, { rotate: 45 })
        .to(sarkan_pavuk_ref.current, { x: 1000, y: 0, duration: 5 })
        .to(sarkan_pavuk_ref.current, {
          rotate: 0,
          x:
            main_content.current.getBoundingClientRect().width +
            sarkan_pavuk_ref.current.getBoundingClientRect().width,
          y: 0,
          duration: 5,
        })

        .to("[data-id='vers-5']", { opacity: 0, y: 200 })
        .to("[data-id='vers-6']", { opacity: 1, y: 0 }, "<")
        .to("[data-id='vers-6']", { opacity: 0, y: 200 }, "<+1")
        .to("[data-id='vers-7']", { opacity: 1, y: 0 }, "<")
        .to("[data-id='vers-7']", { opacity: 0, y: 200 }, "<+1")
        .to("[data-id='vers-8']", { opacity: 1, y: 0 }, "<")
        .to("[data-id='vers-8']", { opacity: 0, y: 200 }, "<+1")
        .to("[data-id='vers-9']", { opacity: 1, y: 0 }, "<")
        .to("[data-id='vers-9']", { opacity: 0, y: 200 }, "<+1");
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
      <div className="images h-full w-full  opacity-0">
        <div className="absolute top-0 left-0 h-full w-full ">
          <OptImage
            source={papier_recyklovany}
            placeholder={papier_recyklovany_mini}
            alt={"pozadie"}
            cover={true}
          />
        </div>
        <div
          className="absolute top-20 -right-32 h-44 w-80 scale-x-[-1] "
          data-name="mrak_static"
        >
          <img src={mrakvlavo} alt="" className="object-contain" />
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
          <img src={mrakvpravo} alt="" className="object-contain" />
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
            src={javor1}
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
            src={javor2}
            alt=""
            className="object-contain"
            data-type="leaf"
          />
        </div>
        <div
          className="absolute left-1/3 top-3/4 h-16 w-16"
          data-name="leaf"
          data-id="leaf-3"
        >
          <img
            src={listvlavo1}
            alt=""
            className="object-contain"
            data-type="leaf"
          />
        </div>
        <div
          className="absolute top-1/3 left-1/2 h-16 w-24"
          data-name="leaf"
          data-id="leaf-4"
        >
          <img
            src={javor3}
            alt=""
            className="object-contain"
            data-type="leaf"
          />
        </div>
        <div
          className="absolute right-44 top-2/3 h-12 w-12"
          data-name="leaf"
          data-id="leaf-5"
        >
          <img
            src={listvpravo1}
            alt=""
            className="object-contain"
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
        <div
          className="absolute top-1/2 left-0 z-50 h-96 w-96 opacity-0"
          ref={sarkan_pavuk_ref}
        >
          <img
            src={pavuk_a_sarkan}
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
      </div>

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
        <div className="hidden h-40 w-40 opacity-0 " ref={pavuk_ref}>
          <img src={pavuk} alt="" className="h-full w-full object-contain " />
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
            className="poem grid-area-1 grid w-full  place-content-center text-center font-zaisloppy text-4xl font-black leading-normal tracking-wider text-[#3E434E]"
            ref={poem_ref}
          >
            {pavuk_putnik.map((obj, index) => {
              return (
                <div
                  data-name="vers"
                  data-id={`vers-${index + 1}`}
                  className="grid-area-1 whitespace-pre-line"
                  key={index}
                >
                  <p>{obj.vers}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
