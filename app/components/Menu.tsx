"use client";
import React from "react";
import { useBearStore } from "./SlideEraser";
import { usePathname } from "next/navigation";
import Link from "next/link";
type Props = {};

import "./Menu.scss";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AudioLines, File, FileHeart, Files, List, MenuIcon, Play } from "lucide-react";
const Menu = (props: Props) => {
  const pathname = usePathname();
  return (
    <>
      <div className="px-4 lg:px-8 md:max-w-full xl:px-0 xl:w-[1200px] mx-auto">
        <div className="relative z-[9999] py-6 w-full text-[#113946] flex justify-center items-center gap-6 ">
          <div className="basis-1/5 flex gap-4 justify-start items-center">
            <MenuIcon
              className="md:hidden"
              size={32}
            />
            <AudioLines size={32} />
            {/* <Play size={32} /> */}
          </div>
          <nav
            className="hidden sm:hidden md:block basis-3/5"
            id="menu"
          >
            <ul className="flex gap-3 justify-center items-center text-xl font-medium  ">
              <Link href="/me">
                <li
                  onClick={() => {
                    useBearStore.setState({ menuId: 0 });
                  }}
                  className={` flex gap-3 items-center justify-center ${pathname === "/me" ? "active" : ""} `}
                >
                  bakrdje
                </li>
              </Link>
              {/* <li><div className="rounded-full w-1 h-1 bg-red-400"></div></li> */}
              <Link href="/experience">
                <li
                  onClick={() => {
                    useBearStore.setState({ menuId: 1 });
                  }}
                  className={` flex gap-3 items-center justify-center ${pathname === "/experience" ? "active" : ""} `}
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
                      className={"scale-0"}
                    />
                  </svg>
                  experience
                </li>
              </Link>
              <Link href="/skills">
                <li
                  onClick={() => {
                    useBearStore.setState({ menuId: 2 });
                  }}
                  className={` flex gap-3 items-center justify-center ${pathname === "/skills" ? "active" : ""} `}
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
                      className={"scale-0"}
                    />
                  </svg>
                  skills
                </li>
              </Link>
              <Link href="/projects">
                <li
                  onClick={() => {
                    useBearStore.setState({ menuId: 3 });
                  }}
                  className={` flex gap-3 items-center justify-center ${pathname.match(/^\/projects\/?/i) ? "active" : ""} `}
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
                      className={"scale-0"}
                    />
                  </svg>
                  projects
                </li>
              </Link>
              <Link href="/contact">
                <li
                  onClick={() => {
                    useBearStore.setState({ menuId: 4 });
                  }}
                  className={` flex gap-3 items-center justify-center ${pathname === "/contact" ? "active" : ""} `}
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
                      className={"scale-0"}
                    />
                  </svg>
                  contact
                </li>
              </Link>
              {/* <li className="flex gap-3 items-center justify-center ">
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
                    className={"scale-0"}
                  />
                </svg>
                contacts
              </li> */}
            </ul>
          </nav>
          <div className="basis-4/5 sm:basis-4/5 md:basis-1/5  flex gap-4 justify-end items-center">
            <Link
              href="/projects"
              className=""
            >
              <Button className="h-9 flex items-center gap-2 text-[#113946] bg-transparent border-[2px] border-[#113946BB] hover:bg-[#11394611] rounded-sm px-2">
                <FileHeart
                  className="w-4 h-4 -mt-[2px]  align-bottom"
                  color="#113946"
                />
                <div className="font-extrabold text-sm text-[#b59c78] ">MyCV</div>
              </Button>
            </Link>
            {/* <AudioLines
              size={24}
              className="-mr-[42px] hover:text-[#b59c78]"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
