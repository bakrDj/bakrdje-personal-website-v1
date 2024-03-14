"use client";
import React, { Suspense, useEffect, useRef } from "react";
import { delay, motion } from "framer-motion";
import { useBearStore } from "@/zustand/store";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
type Props = {};
import "./carousel.scss";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import projectsData from "@/app/data/projects.json";
import { ArrowUpRightFromSquare } from "lucide-react";
function Projects({}: Props) {
  const outerCircleRef = useRef<HTMLDivElement>(null);
  const innerBorderCircleRef = useRef<HTMLDivElement>(null);
  const innerCircleRef = useRef<HTMLDivElement>(null);
  const sliderAnimationStart = useBearStore((state: any) => state.sliderAnimationStart);

  const orbitingskillsRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let leftContentElements = leftContentRef.current?.childNodes;
    let ringsElements = orbitingskillsRef.current?.childNodes[0]?.childNodes;
    let rightContentElements = rightContentRef.current?.childNodes;

    // click on ring => remove all class => add class to specific one
    ringsElements?.[1]?.addEventListener("click", (e) => onRingClickHandler(e, 0));
    ringsElements?.[2]?.addEventListener("click", (e) => onRingClickHandler(e, 1));
    ringsElements?.[3]?.addEventListener("click", (e) => onRingClickHandler(e, 2));

    const onRingClickHandler = async (e: unknown, contentIndex: number) => {
      const elementsArray = Array.from(leftContentElements || [])
        .concat(Array.from(rightContentElements || []))
        .concat(Array.from(ringsElements || []));
      for (const elem of elementsArray) {
        let elemAsHTMLElement = elem as HTMLElement;
        elemAsHTMLElement.classList.remove("skill_active");
        (elemAsHTMLElement?.firstChild as HTMLElement)?.classList.remove("ring_active");
        // console.log("🚀 ~ leftContentElements?.forEach ~ elem:", elem);
      }
      (leftContentElements?.[contentIndex] as HTMLElement)?.classList.add("skill_active");
      (rightContentElements?.[contentIndex] as HTMLElement)?.classList.add("skill_active");
      (ringsElements?.[contentIndex + 1]?.firstChild as HTMLElement)?.classList.add("ring_active");
      // leftContentElements?.forEach((elem, i) => {
      //   let elemAsHTMLELement = elem as HTMLElement
      //   elemAsHTMLELement.classList.remove("active");
      //   console.log("🚀 ~ leftContentElements?.forEach ~ elem:", elem);
      // });
    };

    console.log("🚀 ~ useEffect ~ leftContentElements:", leftContentElements);
    console.log("🚀 ~ Skills ~ orbitingskillsRef:", ringsElements);
    console.log("🚀 ~ useEffect ~ rightContentElements:", rightContentElements);
  }, []);

  // useEffect(() => {
  //   const handleMouseMove = (event: MouseEvent) => {
  //     const posX = event.clientX - window.innerWidth / 2;
  //     const posY = event.clientY - window.innerHeight / 2;

  //     if (outerCircleRef.current && innerCircleRef.current && innerBorderCircleRef.current) {
  //       // console.log("🚀 ~ file: page.tsx:12 ~ handleMouseMove ~ event:", "hello");

  //       // outerCircleRef.current.style.transform = `translate(${posX * 0.007}%, ${posY * 0.007}%)`;
  //       outerCircleRef.current.style.transform = `translate(${posX * -0.006}%, ${posY * -0.006}%) rotateX(${-posY * 0.04}deg) rotateY(${-posX * -0.02}deg)`;
  //       // innerCircleRef.current.style.transform = `translate(${posX * -0.003}%, ${posY * -0.003}%)`;
  //       innerBorderCircleRef.current.style.transform = `translate(${posX * 0.002}%, ${posY * 0.002}%) rotateX(${posY * 0.04}deg) rotateY(${posX * -0.02}deg) rotateZ(${posX * -0.008}deg)`;
  //       innerCircleRef.current.style.transform = `translate(${posX * 0.002}%, ${posY * 0.002}%) rotateX(${posY * 0.04}deg) rotateY(${posX * -0.02}deg) rotateZ(${posX * -0.008}deg)`;
  //       // innerCircleRef.current.style.perspectiveOrigin = "center center";
  //     }
  //   };

  //   document.addEventListener("mousemove", handleMouseMove);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, [outerCircleRef]);

  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
          className="flex flex-col justify-center flex-1 w-[1200px] mx-auto "
          > */}
      <div className="flex flex-col justify-center flex-1 px-4 lg:px-8 md:min-w-full xl:px-0 xl:min-w-0 xl:w-[1200px] mx-auto  ">
        {/* content wrapper */}
        <div className="relative z-38 w-full h-[560px]">
          <div className={`absolute z-40 inset-[-4px]  bg-[#113946] rounded-xl ${!sliderAnimationStart && "invert mix-blend-difference"}`}></div>
          <div className="flex w-full h-[560px]  relative z-40 bg-[#FFF2D8] rounded-lg">
            <div className="flex-1 p-4 flex flex-col gap-4 items-center h-auto rounded-lg">
              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-[#113946]">Projects</h1>
                <div className="w-full h-[4px] bg-[#113946] my-1 rounded"></div>
              </div>
              <div className="flex flex-col px-4 lg:px-0 lg:w-3/4">
                <p className="text-base font-medium text-center text-[#113946]">Presenting a selection of projects I have undertaken or had the opportunity to participate in. </p>
              </div>
              <div className="py-0 md:py-6  flex flex-1 w-full px-10 gap-6">
                <Carousel
                  opts={{ align: "start" }}
                  id="carousel"
                  className="w-full max-w-full"
                >
                  <CarouselContent className="flex flex-1">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <CarouselItem
                          key={i}
                          className="group basis-full  md:basis-1/2 xl:basis-1/3 "
                        >
                          {/* <div className="basis-full md:basis-1/2">ds</div> */}
                          <Link href={`/projects/project/${i + 1}`}>
                            <div className="transition-all duration-300 cursor-pointer w-full h-full border-2 rounded-lg border-[#113946] group-hover:border-[#b59c78] group-hover:bg-[rgba(181,156,120,0.05)] group-hover:border-[2px] px-3 py-3 ">
                              {/* image card */}
                              <img
                                src={`/images/projects/${i + 1}-1.png`}
                                alt="project"
                                width={"100%"}
                                className=" rounded-md w-full h-[160px] object-cover object-top group-hover:object-[50%_25%] transition-all duration-300"
                              />
                              <div className="mt-3 w-full h-full flex flex-col gap-3">
                                <div className="font-mono flex gap-1 text-sm">
                                  {projectsData?.[i]?.tags?.[0] && (
                                    <Badge
                                      variant={"outline"}
                                      className={"text-[10px] sm:text-xs lowercase rounded-sm border-slate-500  text-zinc-700 px-[6px] "}
                                    >
                                      {projectsData?.[i]?.tags?.[0]}
                                    </Badge>
                                  )}
                                  {projectsData?.[i]?.tags?.[1] && (
                                    <Badge
                                      variant={"outline"}
                                      className={"text-[10px] sm:text-xs lowercase rounded-sm border-slate-500  text-zinc-700 px-[6px] "}
                                    >
                                      {projectsData?.[i]?.tags?.[1]}
                                    </Badge>
                                  )}
                                  {projectsData?.[i]?.tags?.[2] && (
                                    <Badge
                                      variant={"outline"}
                                      className={"text-[10px] sm:text-xs lowercase rounded-sm border-slate-500  text-zinc-700 px-[6px] "}
                                    >
                                      {projectsData?.[i]?.tags?.[2]}
                                    </Badge>
                                  )}
                                  {projectsData?.[i]?.tags?.[3] && (
                                    <Badge
                                      variant={"outline"}
                                      className={"text-[10px] sm:text-xs rounded-sm border-transparent text-zinc-700  px-[2px]"}
                                    >
                                      +{projectsData?.[i]?.tags.length - 3}
                                    </Badge>
                                  )}
                                </div>
                                <div className="text-sm sm:text-base font-bold group-hover:text-[#977e5b] transition-all duration-300">{projectsData?.[i] && projectsData?.[i].title}</div>
                                <div className="max-h-sm overflow-hidden text-xs sm:text-sm">{projectsData?.[i] && projectsData?.[i].description}</div>
                                {projectsData?.[i] && projectsData?.[i].links && <ArrowUpRightFromSquare className="w-5 h-5 text-[#113946] group-hover:text-[#977e5b]" />}
                              </div>
                            </div>
                          </Link>
                        </CarouselItem>
                      ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </motion.div> */}
    </>
  );
}

export default Projects;
