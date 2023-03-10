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
  const paragraph_1_ref = useRef(null);
  const poem_container_ref = useRef(null);
  const main_content = useRef(null);
  //timelines
  const mrak_tl = useRef(null);
  const static_mrak_tl = useRef(null);

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
    }, root_ref.current);
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
    const h1_ani = ScrollTrigger.create({
      trigger: title_ref.current,
      start: "-100% 0",
      end: `bottom ${title_ref.current.getBoundingClientRect().height}`,
      pin: true,
      pinSpacing: false,
      scrub: 2,
    });
    return () => h1_ani.revert();
  }, []);

  useLayoutEffect(() => {
    const context = gsap.context(self => {
      const parent_divs = self.selector('[data-name="paragraph_container"]');
      parent_divs.forEach((div, index) => {
        const paragraph = div.querySelector("p");
        const timeline = gsap.timeline().from(paragraph, {
          y: 200,
          rotateY: "30deg",
          ease: "power3.out",
        });
        ScrollTrigger.create({
          trigger: div,
          start: "0 100%",
          end: "100% 50%",
          scrub: 1,
          toggleActions: "play none none reverse",
          animation: timeline,
        });
      });
    }, poem_container_ref);

    return () => context.revert();
  }, []);

  return (
    <div
      className="relative grid min-h-screen w-full overflow-hidden   bg-[#cfc7984f] px-4 pb-40 text-black"
      ref={main_content}
      data-scroll-section
    >
      <div className="absolute top-0 left-0 h-full w-full opacity-50">
        <img src={texture} alt="" className="h-full w-full object-cover" />
      </div>
      {/* <div className="absolute right-1/3 top-0 h-40 w-40" ref={pavuk_ref}>
        <img src={pavuk} alt="" className="h-full w-full object-contain" />
      </div> */}
      <div
        className="absolute top-20 -right-32 h-44 w-80 scale-x-[-1] "
        data-name="mrak_static"
      >
        <img src={mrak2} alt="" className="object-contain" />
      </div>{" "}
      <div className="absolute -right-10 -top-10 h-36 w-60" ref={slnko_ref}>
        <img src={slnko} alt="" className="object-contain" />
      </div>
      <div className="absolute top-0 left-52 h-28 w-52" data-name="mrak_static">
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
        <img src={leave1} alt="" className="object-contain" />
      </div>
      <div
        className="absolute left-3/4 top-2/4 h-20 w-24"
        ref={leave1_ref}
        data-name="leaf"
        data-id="leaf-2"
      >
        <img src={leave2} alt="" className="object-contain" />
      </div>
      <div
        className="absolute left-1/3 top-3/4 h-20 w-24"
        data-name="leaf"
        data-id="leaf-3"
      >
        <img src={leave3} alt="" className="object-contain" />
      </div>
      <div
        className="absolute top-1/3 left-1/2 h-12 w-24"
        data-name="leaf"
        data-id="leaf-4"
      >
        <img src={leave4} alt="" className="object-contain" />
      </div>
      <div
        className="absolute right-44 top-2/3 h-16 w-16"
        data-name="leaf"
        data-id="leaf-5"
      >
        <img src={leave5} alt="" className="absolute h-full w-full" />
      </div>
      <div
        className="absolute top-1/2 left-0 z-50 h-128 w-128"
        ref={sarkan_ref}
      >
        <img src={iba_sarkan} alt="" className="object-contain" />
      </div>
      <div className="absolute top-2/3 right-0 h-80  w-80">
        <img src={vlakno} alt="" className="object-contain" />
      </div>
      <div
        className=" z-40 mx-auto  grid w-full grid-cols-4 grid-rows-[100vh_repeat(9,1fr)] gap-y-24 gap-x-12  font-zaisloppy text-2xl font-black leading-normal tracking-wider text-[#3E434E]"
        ref={poem_container_ref}
      >
        <div
          className="col-span-full col-start-1 row-start-1 grid place-content-center self-center"
          ref={title_ref}
        >
          <h1 className=" text-shadow-lg  my-24 text-center font-forma-djr text-8xl uppercase tracking-wider">
            pav??k p??tnik
          </h1>
        </div>
        <div
          className="col-span-3 col-start-1 row-span-1  row-start-2 justify-self-center"
          data-name="paragraph_container"
          ref={paragraph_1_ref}
        >
          <p
            className=" perspective-1 indent-8 first-letter:text-6xl"
            data-name="p1"
            data-element="paragraph"
          >
            Slnie??ko sa n????i <br />
            a jese?? sa bl????i. <br />
            V zlatist??ch listoch vini??a,
            <br />
            osy od slasti bzu??ia.
          </p>
        </div>
        <div
          className="col-span-2 col-start-1 row-span-1 row-start-3 justify-self-end"
          data-name="paragraph_container"
        >
          <p data-name="p2" data-element="paragraph">
            Bru??k?? maj?? pln?? sladu, <br />
            no myslia i na dni hladu. <br />
            Hniezda si stavaj?? <br />
            k pl??stu pl??st, <br />
            u?? ich je rovno sedemn??s??.
          </p>
        </div>
        <div
          className="col-span-3 col-start-2 row-span-1 row-start-4 justify-self-center"
          data-name="paragraph_container"
        >
          <p data-name="p3" data-element="paragraph">
            Len pav??k,ten m?? ??asu dos?? <br />
            S??ka a s??ka dlh?? vl??kna <br />
            a na priazniv?? vetr??k ??ak??.
            <br />
            Chce e??te pozna?? nov?? svety, <br />v ??strety poznaniu let??.
          </p>
        </div>
        <div
          className="col-span-3 col-start-2 row-span-1 row-start-5 justify-self-center"
          data-name="paragraph_container"
        >
          <p data-element="paragraph" data-name="p4">
            No nev??imol si mil?? deti, <br />
            ??arkana. <br />
            Ten pre??al vl??kno,
            <br />
            babie leto, <br />
            no pav??k je fif??k zato.
          </p>
        </div>
        <div
          data-name="paragraph_container"
          className="col-span-1 col-start-2 row-span-1 row-start-6 justify-self-center"
        >
          <p data-name="p5" data-element="paragraph">
            Sadol na chvost ??arkana <br />a smeje sa: &#34;Chi-chi-cha, <br />
            Ani tka?? mi netreba.
          </p>
        </div>
        <div
          data-name="paragraph_container"
          className="col-span-3 col-start-1 row-span-1 row-start-7 justify-self-center"
        >
          <p data-name="p6" data-element="paragraph">
            Fi????m si s vetrom opreteky, <br />
            do ??st mi letia drobn?? muchy <br />
            Oj, to je rados?? letie?? het, <br />
            ach, ak?? kr??sny je ten svet!&#34; <br />
          </p>
        </div>
        <div
          data-name="paragraph_container"
          className="col-span-3 col-start-2 row-span-1 row-start-[8] justify-self-center"
        >
          <p data-name="p7" data-element="paragraph">
            No v z??bave nastal ??krt, <br />
            i pav??ka kr??sna p???? <br />
            ??arkana stiahli dolu deti
            <br />
            a on u?? dolu bru??kom let??.
            <br />
          </p>
        </div>
        <div
          data-name="paragraph_container"
          className="col-span-3 col-start-1 row-span-1 row-start-[9] justify-self-center "
        >
          <p data-name="p8" data-element="paragraph">
            Do tr??vy spadol s??tozelenej <br />
            a r??chlo u??upil sa v nej, <br />
            nezbedn?? ??ierny pasa??ier. <br />
          </p>
        </div>
        <div
          data-name="paragraph_container"
          className="col-span-1 col-start-2 row-span-1 row-start-[10] justify-self-center "
        >
          <p data-name="p9" data-element="paragraph">
            Ke?? l??ka osirela, <br />
            za??al siete tka??: <br />
            &#34;Mus??m sa len na seba spolieha??!&#34;
          </p>
        </div>
      </div>
    </div>
  );
};
