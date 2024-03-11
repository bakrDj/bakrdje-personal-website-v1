"use client";
import React, { Suspense, useEffect, useRef } from "react";
import { delay, motion } from "framer-motion";
import { useBearStore } from "@/zustand/store";
import OrbitingSkills from "./components/OrbitingSkills";
type Props = {};
import "./skills.scss";

function Skills({}: Props) {
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
      <div className="flex flex-col justify-center flex-1 px-4 lg:px-8 md:min-w-full xl:px-0 xl:min-w-0 xl:w-[1200px] mx-auto ">
        {/* content wrapper */}
        <div className="relative z-38 w-full h-[592px]">
          <div className={`absolute z-40 inset-[-4px]  bg-[#113946] rounded-xl ${!sliderAnimationStart && "invert mix-blend-difference"}`}></div>
          <div className="flex w-full h-[592px]  relative z-40 bg-[#FFF2D8] rounded-lg">
            <div className="flex-1 p-4 flex flex-col gap-4 items-center h-auto rounded-lg">
              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-[#113946]">Skills</h1>
                <div className="w-full h-[4px] bg-[#113946] my-1 rounded"></div>
              </div>
              <div className="flex flex-col px-4 lg:px-0 lg:w-3/4">
                <p className="text-base font-medium text-center text-[#113946]">Delve into my array of skills, blending technical proficiency with creative talents to elevate project outcomes. </p>
              </div>
              <div className="py-6 flex flex-col md:flex-row flex-1 w-full px-3 gap-6">
                <div
                  // id="skill_menu"
                  ref={leftContentRef}
                  className="hidden md:block relative p-0 md:py-20 md:px-8 flex-1 w-full md:w-1/3 shrink-0 text-base"
                >
                  <div className="absolute top:20 left-0 px-6 w-full skill_content skill_active gap-2 flex flex-col text-center">
                    <div className=" text-lg font-bold text-[#b59c78] ">Front-end development</div>
                    <p className="text-[#113946]  font-medium">
                      <div>highlighting some tasks I engaged in:</div>
                      <div className="text-[14px] gap-x-2 mt-1 text-center">
                        Auth/Authorization, Real-time communication, API, Graphql development, PWA implementation, API integration, Real-Time Collaboration, Reusable UI Components
                      </div>
                    </p>{" "}
                  </div>
                  <div className="absolute top-20 left-0 px-6 w-full skill_content gap-2 flex flex-col text-center">
                    <div className=" text-lg font-bold text-[#b59c78] ">Back-end development</div>
                    <p className="text-[#113946]  font-medium">
                      <div>highlighting some tasks I engaged in:</div>
                      <div className="text-[14px] gap-x-2 mt-1 text-center">
                        API/Graphql development, DB managament, Authentication, Third-Party Intergration, Security Best Practices, File Management
                      </div>
                    </p>{" "}
                  </div>
                  <div className="absolute top-20 left-0 px-6 w-full skill_content gap-2 flex flex-col text-center">
                    <div className=" text-lg font-bold text-[#b59c78] ">Web Design</div>
                    <p className="text-[#113946]  font-medium">
                      <div>highlighting some tasks I engaged in:</div>
                      <div className="text-[14px] gap-x-2 mt-1 text-center">Wireframing, Prototyping, Collaboration, User Journey Mapping, Component System Design </div>
                    </p>{" "}
                  </div>
                  {/* <li
                    onClick={() => {
                      useBearStore.setState({ menuId: 1 });
                    }}
                    className={` flex gap-2 items-center ${"/experience" == "/experience" ? "active" : ""} `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="26"
                      viewBox="0 0 22 26"
                      fill="none"

                      //   className="scale-[0.3]"
                    >
                      <path
                        d="M11.5 2.13397L11 1.8453L10.5 2.13397L1.83975 7.13397L1.33975 7.42265V8V18V18.5774L1.83975 18.866L10.5 23.866L11 24.1547L11.5 23.866L20.1603 18.866L20.6603 18.5774V18V8V7.42265L20.1603 7.13397L11.5 2.13397Z"
                        stroke="#113946"
                        strokeWidth="2"
                      />
                      <path
                        d="M11.2501 9.23398L11.0001 9.08964L10.7501 9.23398L7.8633 10.9006L7.6133 11.045V11.3337V14.667V14.9557L7.8633 15.1L10.7501 16.7667L11.0001 16.911L11.2501 16.7667L14.1368 15.1L14.3868 14.9557V14.667V11.3337V11.045L14.1368 10.9006L11.2501 9.23398Z"
                        fill="#113946"
                        // stroke="#113946"
                        // className={"scale-0"}
                      />
                    </svg>
                    front-end
                  </li>
                  <li
                    onClick={() => {
                      useBearStore.setState({ menuId: 1 });
                    }}
                    className={` flex gap-2 items-center ${"/exerience" == "/experience" ? "active" : ""} `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="26"
                      viewBox="0 0 22 26"
                      fill="none"

                      //   className="scale-[0.3]"
                    >
                      <path
                        d="M11.5 2.13397L11 1.8453L10.5 2.13397L1.83975 7.13397L1.33975 7.42265V8V18V18.5774L1.83975 18.866L10.5 23.866L11 24.1547L11.5 23.866L20.1603 18.866L20.6603 18.5774V18V8V7.42265L20.1603 7.13397L11.5 2.13397Z"
                        stroke="#113946"
                        strokeWidth="2"
                        // className={"scale-0"}
                      />
                      <path
                        d="M11.2501 9.23398L11.0001 9.08964L10.7501 9.23398L7.8633 10.9006L7.6133 11.045V11.3337V14.667V14.9557L7.8633 15.1L10.7501 16.7667L11.0001 16.911L11.2501 16.7667L14.1368 15.1L14.3868 14.9557V14.667V11.3337V11.045L14.1368 10.9006L11.2501 9.23398Z"
                        fill="#113946"
                        // stroke="#113946"
                        className={"scale-0"}
                      />
                    </svg>
                    back-end
                  </li>
                  <li
                    onClick={() => {
                      useBearStore.setState({ menuId: 1 });
                    }}
                    className={` flex gap-2 items-center ${"/exerience" == "/experience" ? "active" : ""} `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="26"
                      viewBox="0 0 22 26"
                      fill="none"

                      //   className="scale-[0.3]"
                    >
                      <path
                        d="M11.5 2.13397L11 1.8453L10.5 2.13397L1.83975 7.13397L1.33975 7.42265V8V18V18.5774L1.83975 18.866L10.5 23.866L11 24.1547L11.5 23.866L20.1603 18.866L20.6603 18.5774V18V8V7.42265L20.1603 7.13397L11.5 2.13397Z"
                        stroke="#113946"
                        strokeWidth="2"
                        // className={"scale-0"}
                      />
                      <path
                        d="M11.2501 9.23398L11.0001 9.08964L10.7501 9.23398L7.8633 10.9006L7.6133 11.045V11.3337V14.667V14.9557L7.8633 15.1L10.7501 16.7667L11.0001 16.911L11.2501 16.7667L14.1368 15.1L14.3868 14.9557V14.667V11.3337V11.045L14.1368 10.9006L11.2501 9.23398Z"
                        fill="#113946"
                        // stroke="#113946"
                        className={"scale-0"}
                      />
                    </svg>
                    web design
                  </li> */}
                </div>
                <OrbitingSkills ref={orbitingskillsRef}></OrbitingSkills>
                <div
                  ref={rightContentRef}
                  className="relative p-4 md:py-20 md:px-8 flex-1 w-full  md:w-1/3 shrink-0 text-base"
                >
                  <div className="skill_content skill_active gap-2 md:gap-4 flex flex-col text-center">
                    <div className="text-base md:text-lg font-bold text-[#b59c78]">
                      <span className="inline md:hidden">Frontend: </span>Technologies & Tools
                    </div>
                    <div className="text-[14px]  text-[#113946]">HTML5, SCSS, Tailwind, JS/TS, Next.js, TypeScript, Zustand, Mui, Antd, MantineUI, Git/Github, Astro</div>
                  </div>
                  <div className="skill_content absolute top-4 md:top-20 left-0 w-full gap-4 flex flex-col text-center">
                    <div className="text-base md:text-lg font-bold text-[#b59c78]">
                      <span className="inline md:hidden">Backend: </span>Technologies & Tools
                    </div>
                    <div className="text-[14px]  text-[#113946]">Node.js (Express), PostgresQL, Mysql, Graphql (Nexus), MongoDB, Docker, Prisma ORM</div>
                  </div>
                  <div className="skill_content absolute top-4 md:top-20 left-0 w-full gap-4 flex flex-col text-center">
                    <div className="text-base md:text-lg font-bold text-[#b59c78]">
                      <span className="inline md:hidden">Web Design: </span>Technologies & Tools
                    </div>
                    <div className="text-[14px]  text-[#113946]">Figma, Adobe Illustrator, Notion</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </motion.div> */}
    </>
  );
}

export default Skills;
