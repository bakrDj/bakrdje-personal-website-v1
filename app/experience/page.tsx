"use client";
import React, { Suspense, useEffect, useRef } from "react";
import { delay, motion } from "framer-motion";
import { useBearStore } from "@/zustand/store";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "./experience.scss";
type Props = {};

function Experience({}: Props) {
  const outerCircleRef = useRef<HTMLDivElement>(null);
  const innerBorderCircleRef = useRef<HTMLDivElement>(null);
  const innerCircleRef = useRef<HTMLDivElement>(null);
  const sliderAnimationStart = useBearStore((state: any) => state.sliderAnimationStart);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const posX = event.clientX - window.innerWidth / 2;
      const posY = event.clientY - window.innerHeight / 2;

      if (outerCircleRef.current && innerCircleRef.current && innerBorderCircleRef.current) {
        // console.log("🚀 ~ file: page.tsx:12 ~ handleMouseMove ~ event:", "hello");

        // outerCircleRef.current.style.transform = `translate(${posX * 0.007}%, ${posY * 0.007}%)`;
        outerCircleRef.current.style.transform = `translate(${posX * -0.006}%, ${posY * -0.006}%) rotateX(${-posY * 0.04}deg) rotateY(${-posX * -0.02}deg)`;
        // innerCircleRef.current.style.transform = `translate(${posX * -0.003}%, ${posY * -0.003}%)`;
        innerBorderCircleRef.current.style.transform = `translate(${posX * 0.002}%, ${posY * 0.002}%) rotateX(${posY * 0.04}deg) rotateY(${posX * -0.02}deg) rotateZ(${posX * -0.008}deg)`;
        innerCircleRef.current.style.transform = `translate(${posX * 0.002}%, ${posY * 0.002}%) rotateX(${posY * 0.04}deg) rotateY(${posX * -0.02}deg) rotateZ(${posX * -0.008}deg)`;
        // innerCircleRef.current.style.perspectiveOrigin = "center center";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [outerCircleRef]);

  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
          className="flex flex-col justify-center flex-1 w-[1200px] mx-auto "
          > */}
      <div className="flex flex-col justify-center flex-1 px-4 lg:px-8 md:min-w-full xl:px-0 xl:min-w-0 xl:w-[1200px] mx-auto  ">
        {/* content wrapper */}
        <div className="relative z-38 w-full h-[592px] ">
          <div className={`absolute z-40 inset-[-4px]  bg-[#113946] rounded-xl ${!sliderAnimationStart && "invert mix-blend-difference"}`}></div>
          <div className="flex w-full h-[592px]  relative z-40 bg-[#FFF2D8] rounded-lg">
            <div className="flex-1 px-2 py-4 md:p-4 flex flex-col gap-4 items-center h-auto rounded-lg overflow-hidden ">
              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-[#113946]">Experience</h1>
                <div className="w-full h-[4px] bg-[#113946] my-1 rounded"></div>
              </div>
              <div className="flex-1 flex flex-col px-4 lg:px-0 lg:w-3/4">
                <p className=" text-base font-medium text-center text-[#113946] w-full">
                  With 3+ years of diverse experience in agency, startup, and self-employment. I have acquired vast knowledge and expertise in my field.
                </p>
              </div>
              <div className="py-6 flex flex-col md:flex-row w-full px-0 lg:px-6 gap-6 overflow-y-scroll md:overflow-y-hidden  ">
                <div className="flex-1 flex flex-col gap-4 ">
                  <h2 className="block text-center font-medium text-[#b59c78]">Experience:</h2>
                  {/* <SimpleBar
                    // className="overflow-visible"
                    forceVisible={false}
                    // autoHide={false}
                    style={{ maxHeight: getCurrentBreakpoints() == "md" || getCurrentBreakpoints() == "sm" ? "unset" : "350px" }}
                  > */}
                  {/* <div className="overflow-y-scroll h-[350px] before:content-[' '] before:absolute before:bottom-0 before:bg-red-500 before:w-full before:h-12"> */}
                  <div className="pr-4 overflow-y-hidden md:overflow-y-scroll">
                    {/* timeline 1 */}
                    <div className="pb-6 w-full flex-1 flex gap-2 text-[#113946]">
                      <div className="basis-[120px] lg:basis-1/4 shrink-0 flex gap-[8px]">
                        <div className="pl-[1px] flex flex-col items-center">
                          <div className="relative z-10 flex w-[22px] pt-[1px] pb-[5px] items-center justify-center bg-[#fff2df]">
                            <motion.div
                              animate={{ rotate: 360, transformOrigin: "center center" }} // Rotate the div 360 degrees
                              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                              className="relative z-10"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="22"
                                viewBox="0 0 22 26"
                                fill="none"
                              >
                                <path
                                  // opacity="0.7"
                                  d="M11.5 2.13397L11 1.8453L10.5 2.13397L1.83975 7.13397L1.33975 7.42265V8V18V18.5774L1.83975 18.866L10.5 23.866L11 24.1547L11.5 23.866L20.1603 18.866L20.6603 18.5774V18V8V7.42265L20.1603 7.13397L11.5 2.13397Z"
                                  stroke="#b59c78"
                                  fill="#fff2df"
                                  stroke-width="2"
                                />
                                {/* <path
                                    opacity="0.7"
                                    d="M11.2501 9.23398L11.0001 9.08964L10.7501 9.23398L7.86333 10.9006L7.61333 11.045V11.3337V14.667V14.9557L7.86333 15.1L10.7501 16.7667L11.0001 16.911L11.2501 16.7667L14.1368 15.1L14.3868 14.9557V14.667V11.3337V11.045L14.1368 10.9006L11.2501 9.23398Z"
                                    fill="#b59c78"
                                    stroke="#b59c78"
                                  /> */}
                              </svg>
                            </motion.div>
                          </div>
                          <div className="-mt-2 ml-[-1px] -mb-7 flex-1 w-[1.5px] h-full bg-gray-800 opacity-[15%]"></div>
                        </div>
                        <div className="text-base font-semibold py-[1px]">Freelancer</div>
                      </div>
                      <div className="basis-3/4">
                        <div className="text-base font-medium pt-[1px]">Full-stack developer</div>
                        <div className="text-sm font-mono font-semibold opacity-70">Jan 2023 - present</div>
                        <p className="text-sm font-medium pt-[4px]">
                          I undertake projects as an occasional freelancer, effectively coding websites and web applications to expand my skills and portfolio while meeting client needs.{" "}
                          {/* <div className="flex flex-col gap-1 ml-2 mt-1">
                              <div className="flex gap-1">
                                <span className="flex-shrink-0 w-[6px] h-[6px] rounded bg-slate-500 inline-block mt-[7px] mr-1"></span> <span>responsible for coding websites and web applications</span>
                              </div>
                              <div className="flex gap-1">
                                <span className="flex-shrink-0 w-[6px] h-[6px] rounded bg-slate-500 inline-block mt-[7px] mr-1"></span> <span>responsible for coding websites and web applications</span>
                              </div>
                            </div> */}
                        </p>
                      </div>
                    </div>
                    {/* timeline 2 */}
                    <div className=" pb-6 w-full flex-1 flex gap-2  text-[#113946]">
                      <div className="basis-[120px] lg:basis-1/4 shrink-0 flex gap-[8px]">
                        <div className="flex flex-col items-center">
                          <div className="-top-1 relative z-10 flex w-[22px] pt-[5px] pb-[5px] items-center justify-center bg-[#fff2df]">
                            <motion.div
                              animate={{ rotate: 360, transformOrigin: "center center" }} // Rotate the div 360 degrees
                              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                              className="relative z-10"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="20"
                                viewBox="0 0 23 27"
                                fill="none"
                              >
                                <path
                                  // opacity="0.7"
                                  d="M11.5 2.13397L11 1.8453L10.5 2.13397L1.83975 7.13397L1.33975 7.42265V8V18V18.5774L1.83975 18.866L10.5 23.866L11 24.1547L11.5 23.866L20.1603 18.866L20.6603 18.5774V18V8V7.42265L20.1603 7.13397L11.5 2.13397Z"
                                  stroke="#587074"
                                  fill="#fff2df"
                                  stroke-width="2"
                                />
                                {/* <path
                                    opacity="0.7"
                                    d="M11.2501 9.23398L11.0001 9.08964L10.7501 9.23398L7.86333 10.9006L7.61333 11.045V11.3337V14.667V14.9557L7.86333 15.1L10.7501 16.7667L11.0001 16.911L11.2501 16.7667L14.1368 15.1L14.3868 14.9557V14.667V11.3337V11.045L14.1368 10.9006L11.2501 9.23398Z"
                                    fill="#113946"
                                    stroke="#113946"
                                  /> */}
                              </svg>
                            </motion.div>
                          </div>
                          <div className="-mt-2 ml-[1px] -mb-7 flex-1 w-[1.5px] h-full bg-gray-800 opacity-[15%]"></div>
                        </div>
                        <div className="text-base font-semibold py-[0px]">Qafilaty</div>
                      </div>
                      <div className="basis-3/4">
                        <div className="text-base font-medium pt-[0px]">Technical Co-founder</div>
                        <div className="text-sm font-mono font-semibold opacity-70">Sep 2020 - Jan 2023</div>
                        <p className="text-sm font-medium pt-[4px]">
                          Qafilaty is An integrated system solution for managing fast delivery companies, I've coded & designed the interface for the interconnected platforms. some tasks and
                          technologies implemented are:
                          <div className="flex flex-col gap-1 mt-2">
                            <div className="flex gap-1">
                              <span className="flex-shrink-0 w-[6px] h-[6px] rounded bg-slate-500 inline-block mt-[7px] mr-1"></span>{" "}
                              <span>Designed the UI interfaces for interconnected platforms.</span>
                            </div>
                            <div className="flex gap-1">
                              <span className="flex-shrink-0 w-[6px] h-[6px] rounded bg-slate-500 inline-block mt-[7px] mr-1"></span>{" "}
                              <span>Developed and styled interactive web applications for each platform.</span>
                            </div>
                            <div className="flex gap-1">
                              <span className="flex-shrink-0 w-[6px] h-[6px] rounded bg-slate-500 inline-block mt-[7px] mr-1"></span>{" "}
                              <span>Built and delivered technical solutions according to stakeholder business requirements.</span>
                            </div>
                            <div className="flex gap-1">
                              <span className="flex-shrink-0 w-[6px] h-[6px] rounded bg-slate-500 inline-block mt-[7px] mr-1"></span>{" "}
                              <span>Collaborated with product managers and other developers to ensure seamless integration of features and optimal user experience.</span>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                    {/* timeline 3 */}
                    <div className=" pb-6 w-full flex-1 flex gap-2  text-[#113946]">
                      <div className="basis-[120px] lg:basis-1/4 shrink-0 flex gap-[8px]">
                        <div className="flex flex-col items-center">
                          <div className="-top-1 relative z-10 flex w-[22px] pt-[5px] pb-[5px] items-center justify-center bg-[#fff2df]">
                            <motion.div
                              animate={{ rotate: 360, transformOrigin: "center center" }} // Rotate the div 360 degrees
                              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                              className="relative z-10"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="20"
                                viewBox="0 0 23 27"
                                fill="none"
                              >
                                <path
                                  // opacity="0.7"
                                  d="M11.5 2.13397L11 1.8453L10.5 2.13397L1.83975 7.13397L1.33975 7.42265V8V18V18.5774L1.83975 18.866L10.5 23.866L11 24.1547L11.5 23.866L20.1603 18.866L20.6603 18.5774V18V8V7.42265L20.1603 7.13397L11.5 2.13397Z"
                                  stroke="#587074"
                                  fill="#fff2df"
                                  stroke-width="2"
                                />
                                {/* <path
                                    opacity="0.7"
                                    d="M11.2501 9.23398L11.0001 9.08964L10.7501 9.23398L7.86333 10.9006L7.61333 11.045V11.3337V14.667V14.9557L7.86333 15.1L10.7501 16.7667L11.0001 16.911L11.2501 16.7667L14.1368 15.1L14.3868 14.9557V14.667V11.3337V11.045L14.1368 10.9006L11.2501 9.23398Z"
                                    fill="#113946"
                                    stroke="#113946"
                                  /> */}
                              </svg>
                            </motion.div>
                          </div>
                          <div className="-mt-2 ml-[1px] -mb-7 flex-1 w-[1.5px] h-full bg-gray-800 opacity-[15%]"></div>
                        </div>
                        <div className="text-base font-semibold py-[0px]">It-hash</div>
                      </div>
                      <div className="basis-3/4">
                        <div className="text-base font-medium pt-[0px]">Front-end developer / Web designer</div>
                        <div className="text-sm font-mono font-semibold opacity-70">Jul 2020 - Dec 2022</div>
                        <p className="text-sm font-medium pt-[4px]">
                          It-hash was a software development agency, a small collection of delvepers, designers and digital marketers, I worked as a front-end/designer for various projects with
                          differenct technologies, inculding:{" "}
                          <div className="flex flex-col gap-1 mt-2">
                            <div className="flex gap-1">
                              <span className="flex-shrink-0 w-[6px] h-[6px] rounded bg-slate-500 inline-block mt-[7px] mr-1"></span>{" "}
                              <span>Developed, styled and maintained code for client websites.</span>
                            </div>
                            <div className="flex gap-1">
                              <span className="flex-shrink-0 w-[6px] h-[6px] rounded bg-slate-500 inline-block mt-[7px] mr-1"></span>{" "}
                              <span>Designed UI interfaces and constructed a reusable component system.</span>
                            </div>
                            <div className="flex gap-1">
                              <span className="flex-shrink-0 w-[6px] h-[6px] rounded bg-slate-500 inline-block mt-[7px] mr-1"></span>{" "}
                              <span>Developed projects utilizing a variety of technologies, with a primary focus on Next.js, Astro, Tailwind CSS, and Apollo GraphQL.</span>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                  {/* </SimpleBar> */}
                </div>
                <div className="flex-1 flex flex-col gap-4 ">
                  <h2 className="block text-center font-medium text-[#b59c78] ">Education:</h2>
                  {/* <SimpleBar
                    // forceVisible="y"
                    // autoHide={false}
                    style={{ maxHeight: "350px" }}
                    
                  > */}
                  <div className="pr-0">
                    {/* timeline 1 */}
                    <div className=" pb-6 w-full flex-1 flex gap-2  text-[#113946]">
                      <div className="basis-[120px] lg:basis-1/4 shrink-0 flex gap-[8px]">
                        <div className="flex flex-col items-center">
                          <div className="-top-1 relative z-10 flex w-[22px] pt-[5px] pb-[5px] items-center justify-center bg-[#fff2df]">
                            <motion.div
                              animate={{ rotate: 360, transformOrigin: "center center" }} // Rotate the div 360 degrees
                              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                              className="relative z-10"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="20"
                                viewBox="0 0 23 27"
                                fill="none"
                              >
                                <path
                                  // opacity="0.7"
                                  d="M11.5 2.13397L11 1.8453L10.5 2.13397L1.83975 7.13397L1.33975 7.42265V8V18V18.5774L1.83975 18.866L10.5 23.866L11 24.1547L11.5 23.866L20.1603 18.866L20.6603 18.5774V18V8V7.42265L20.1603 7.13397L11.5 2.13397Z"
                                  stroke="#587074"
                                  fill="#fff2df"
                                  stroke-width="2"
                                />
                                {/* <path
                                    opacity="0.7"
                                    d="M11.2501 9.23398L11.0001 9.08964L10.7501 9.23398L7.86333 10.9006L7.61333 11.045V11.3337V14.667V14.9557L7.86333 15.1L10.7501 16.7667L11.0001 16.911L11.2501 16.7667L14.1368 15.1L14.3868 14.9557V14.667V11.3337V11.045L14.1368 10.9006L11.2501 9.23398Z"
                                    fill="#113946"
                                    stroke="#113946"
                                  /> */}
                              </svg>
                            </motion.div>
                          </div>
                          <div className="-mt-2 ml-[1px] -mb-7 flex-1 w-[1.5px] h-full bg-gray-800 opacity-[15%]"></div>
                        </div>
                        <div className="text-base font-semibold py-[0px]">UC2</div>
                      </div>
                      <div className="basis-3/4">
                        <div className="text-base font-medium pt-[0px]">BSc Computer Science</div>
                        <div className="text-sm font-mono font-semibold opacity-70">Jul 2020 - Dec 2022</div>
                        <p className="text-sm font-medium pt-[4px]">
                          Successfully completed my undergraduate studies. gained skills in coding, problem-solving, and software development through coursework and projects, establishing a robust
                          foundation for a career in technology. {/* <div className="flex flex-col gap-1 ml-2 mt-1"> */}
                          {/* <div className="flex gap-1">
                              <span className="flex-shrink-0 w-[6px] h-[6px] rounded bg-slate-500 inline-block mt-[7px] mr-1"></span> <span>responsible for coding websites and web applications</span>
                            </div>
                            <div className="flex gap-1">
                              <span className="flex-shrink-0 w-[6px] h-[6px] rounded bg-slate-500 inline-block mt-[7px] mr-1"></span> <span>responsible for coding websites and web applications</span>
                            </div> */}
                          {/* </div> */}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* </SimpleBar> */}
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

export default Experience;
