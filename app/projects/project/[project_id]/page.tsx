"use client";
import React, { Suspense, useEffect, useRef } from "react";
import { delay, motion } from "framer-motion";
// import { useBearStore } from "../components/SlideEraser";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
type Props = {
  params: { project_id: number };
};
import "../../carousel.scss";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import projectsData from "@/app/data/projects.json";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowUpRightFromSquare, ChevronLeft, ChevronsLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

function ProjectID({ params: { project_id } }: Props) {
  console.log("🚀 ~ ProjectID ~ params:", !isNaN(project_id) && project_id > 0 && project_id <= projectsData.length);

  const outerCircleRef = useRef<HTMLDivElement>(null);
  const innerBorderCircleRef = useRef<HTMLDivElement>(null);
  const innerCircleRef = useRef<HTMLDivElement>(null);
  // const sliderAnimationStart = useBearStore((state: any) => state.sliderAnimationStart);

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
      <div className="relative flex flex-col justify-center flex-1 px-4 lg:px-8 md:min-w-full xl:px-0 xl:min-w-0 xl:w-[1200px] mx-auto   ">
        {/* content wrapper */}
        <div className="relative z-38 w-full h-[560px]">
          <div className={`absolute z-40 inset-[-4px]  bg-[#113946] rounded-xl ${/* !sliderAnimationStart &&  */ "invert mix-blend-difference"}`}></div>
          <div className="flex w-full h-[560px]  relative z-40 bg-[#FFF2D8] rounded-lg">
            <div className="flex-1 flex gap-2 h-auto rounded-lg md:pl-4">
              <div className="basis-full md:basis-[30%] md:py-9 ">
                {/* carousal */}
                <div className="md:hidden relative mx-auto ">
                  <Carousel
                    // id="carousel"
                    orientation="horizontal"
                    className=""
                  >
                    <CarouselContent className="flex flex-1">
                      {Array(projectsData?.[project_id - 1]?.project_imgs_number)
                        .fill(null)
                        .map((_, i) => (
                          <CarouselItem key={i}>
                            <div
                              // @ts-ignore
                              style={{ "--image-url": `url('/images/projects/${project_id}-${i + 1}.png')` }}
                              className={`rounded-sm w-full h-full flex justify-center items-center px-4 relative before:content-[' '] before:w-full before:h-full before:absolute before:top-0 before:left-0  before:-z-10 before:bg-[image:var(--image-url)] before:bg-top before:blur-3xl`}
                            >
                              <img
                                src={`/images/projects/${project_id}-${i + 1}.png`}
                                alt="project"
                                // width={"90%"}
                                // height={"100%"}
                                className="rounded-lg my-6 w-[90%] object-cover object-top group-hover:object-[50%_25%] transition-all duration-300"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-1 w-6 h-6" />
                    <CarouselNext className="right-1 w-6 h-6" />
                  </Carousel>
                </div>

                <div className="w-full p-4 md:p-0 lg:p-8 md:h-full flex flex-col gap-3 justify-between ">
                  <Link
                    href="/projects"
                    className="w-0"
                  >
                    <Button
                      variant={"ghost"}
                      className=" flex items-center gap-1 text-[#113946] hover:bg-[#11394611] rounded-sm px-2 py-1 -ml-1"
                    >
                      <ArrowLeft className="w-5 h-5 -mt-[2px] -ml-1" />
                      <div className="font-bold text-base ">Return</div>
                    </Button>
                  </Link>
                  <div className="mt-4 md:mt-0">
                    <div className=" font-mono flex flex-wrap gap-2 text-sm">
                      {projectsData?.[project_id - 1]?.tags &&
                        projectsData[project_id - 1].tags.map((i) => (
                          <Badge
                            variant={"outline"}
                            className={"lowercase rounded-sm border-slate-500  text-zinc-700 px-[6px]"}
                          >
                            {i}
                          </Badge>
                        ))}
                    </div>
                    <div className="pt-4 text-lg font-bold text-[#113946]">{projectsData?.[project_id - 1]?.title}</div>
                    <div className="pt-4 max-h-full overflow-hidden text-base text-[#113946]">{projectsData?.[project_id - 1]?.description} </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {(projectsData?.[project_id - 1]?.links && (
                      <>
                        {projectsData?.[project_id - 1]?.links?.website && (
                          <Link href={""}>
                            <ArrowUpRightFromSquare className="w-6 h-6 text-[#113946] hover:text-[#b59c78]" />
                          </Link>
                        )}
                        {projectsData?.[project_id - 1]?.links?.github && (
                          <Link href={""}>
                            <Github className="w-6 h-6 [stroke-width:2px] text-[#113946] hover:text-[#b59c78]" />
                          </Link>
                        )}
                      </>
                    )) || <ArrowUpRight className="invisible" />}
                  </div>
                </div>
              </div>
              <div className="hidden md:block basis-[70%] h-full relative ">
                <Carousel
                  id="carousel"
                  orientation="vertical"
                  className="w-full min-h-full h-[360px]"
                >
                  <CarouselContent className="flex flex-1">
                    {Array(projectsData?.[project_id - 1]?.project_imgs_number)
                      .fill(null)
                      .map((_, i) => (
                        <CarouselItem key={i}>
                          <div
                            // @ts-ignore
                            style={{ "--image-url": `url('/images/projects/${project_id}-${i + 1}.png')` }}
                            className={`rounded-sm w-full h-full flex items-center px-4 relative before:content-[' '] before:w-full before:h-full before:absolute before:top-0 before:left-0  before:-z-10 before:bg-[image:var(--image-url)] before:bg-top before:blur-3xl`}
                          >
                            <img
                              src={`/images/projects/${project_id}-${i + 1}.png`}
                              alt="project"
                              // width={"75%"}
                              // height={"100%"}
                              className="rounded-lg w-full  object-cover object-top group-hover:object-[50%_25%] transition-all duration-300"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                  </CarouselContent>
                  <CarouselPrevious className="top-2" />
                  <CarouselNext className="bottom-2" />
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

export default ProjectID;
