import React from "react";
import "./Menu.scss";
type Props = {};

const Menu = (props: Props) => {
  return (
    <>
      <div className="w-[1200px] m-auto ">
        <div className="w-full text-[#113946] flex justify-center">
          <nav
            className="py-6"
            id="menu"
          >
            <ul className="flex gap-3 items-center text-xl font-medium invert mix-blend-difference">
              <li>
                <a href="#">bakrdje</a>
              </li>
              {/* <li><div className="rounded-full w-1 h-1 bg-red-400"></div></li> */}
              <li className="flex gap-3 items-center justify-center active">
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
                    stroke-width="2"
                  />
                  <path
                    d="M11.2501 9.23398L11.0001 9.08964L10.7501 9.23398L7.8633 10.9006L7.6133 11.045V11.3337V14.667V14.9557L7.8633 15.1L10.7501 16.7667L11.0001 16.911L11.2501 16.7667L14.1368 15.1L14.3868 14.9557V14.667V11.3337V11.045L14.1368 10.9006L11.2501 9.23398Z"
                    fill="#113946"
                    // stroke="#113946"
                    className={"scale-0"}
                  />
                </svg>
                <a href="#">experience</a>
              </li>
              <li className="flex gap-3 items-center justify-center ">
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
                    stroke-width="2"
                  />
                  <path
                    d="M11.2501 9.23398L11.0001 9.08964L10.7501 9.23398L7.8633 10.9006L7.6133 11.045V11.3337V14.667V14.9557L7.8633 15.1L10.7501 16.7667L11.0001 16.911L11.2501 16.7667L14.1368 15.1L14.3868 14.9557V14.667V11.3337V11.045L14.1368 10.9006L11.2501 9.23398Z"
                    fill="#113946"
                    // stroke="#113946"
                    className={"scale-0"}
                  />
                </svg>
                <a href="#">projects</a>
              </li>
              <li className="flex gap-3 items-center justify-center ">
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
                    stroke-width="2"
                  />
                  <path
                    d="M11.2501 9.23398L11.0001 9.08964L10.7501 9.23398L7.8633 10.9006L7.6133 11.045V11.3337V14.667V14.9557L7.8633 15.1L10.7501 16.7667L11.0001 16.911L11.2501 16.7667L14.1368 15.1L14.3868 14.9557V14.667V11.3337V11.045L14.1368 10.9006L11.2501 9.23398Z"
                    fill="#113946"
                    // stroke="#113946"
                    className={"scale-0"}
                  />
                </svg>
                <a href="#">contacts</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
