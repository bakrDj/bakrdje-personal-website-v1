import React, { FC, HTMLAttributes, ReactElement, ReactNode, forwardRef } from "react";

type Props = {} & HTMLAttributes<HTMLDivElement>;
import "./OrbitingSkills.scss";

const OrbitingSkills = forwardRef((props: Props, ref: any) => {
  return (
    <>
      <div
        ref={ref}
        className={"orbit !min-h-0 md:!min-h-full  flex flex-1 shrink-0 w-1/3 py-24 px-8 scale-[0.6] md:scale-75 lg:scale-100 "}
        {...props}
      >
        <ul className="scale-95 orbit-wrap flex flex-1">
          <li className="orbit-center !bg-slate-600">
            <i className=""></i>
          </li>
          {/* 
          <li>
            <ul className="ring-0">
              <li>
                <i className="orbit-icon fa fa-git"></i>
              </li>
              <li>
                <i className="orbit-icon fa fa-free-code-camp"></i>
              </li>
              <li>
                <i className="orbit-icon fa fa-meetup"></i>
              </li>
              <li>
                <i className="orbit-icon fa fa-codepen"></i>
              </li>
            </ul>
          </li> */}

          <li>
            <ul className="ring-0 ring_active">
              <li>
                <img
                  src="/images/icons/react.png"
                  alt=""
                  // width={"200px"}
                />
              </li>
              <li>
                <img
                  src="/images/icons/js.png"
                  alt=""
                  // width={"200px"}
                />
              </li>
              <li>
                <img
                  src="/images/icons/nextjs.png"
                  alt=""
                  // width={"200px"}
                />
              </li>
              <li>
                <img
                  src="/images/icons/css.png"
                  alt=""
                  // width={"200px"}
                />
              </li>
              <li>
                <img
                  src="/images/icons/html.png"
                  alt=""
                  // width={"200px"}
                />
              </li>
              <li>
                <img
                  src="/images/icons/tailwind.png"
                  alt=""
                  // width={"200px"}
                />
              </li>
              <li>
                <img
                  src="/images/icons/mui.png"
                  alt=""
                  // width={"200px"}
                />
              </li>
              <li>
                <img
                  src="/images/icons/antd.png"
                  alt=""
                  // width={"200px"}
                />
              </li>
              <li>
                <img
                  src="/images/icons/github.png"
                  alt=""
                  // width={"200px"}
                />
              </li>
              <li>
                <img
                  src="/images/icons/storybook.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="/images/icons/astro.png"
                  alt=""
                  // width={"200px"}
                />
              </li>
            </ul>
          </li>
          <li>
            <ul className="ring-1">
              <li>
                <img
                  src="/images/icons/nodejs.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="/images/icons/mongodb.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="/images/icons/postgres.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="/images/icons/docker.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="/images/icons/graphql.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="/images/icons/mysql.png"
                  alt=""
                />
              </li>
            </ul>
          </li>
          <li>
            <ul className="ring-2">
              <li>
                <img
                  src="/images/icons/notion.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="/images/icons/figma.png"
                  alt=""
                />{" "}
              </li>
              <li>
                <img
                  src="/images/icons/adobe_illustrator.png"
                  alt=""
                />{" "}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
});

OrbitingSkills.displayName = "OrbitingSkills";
export default OrbitingSkills;
