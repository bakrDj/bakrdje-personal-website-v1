"use client";
import { PropsWithChildren } from "react";

type Props = {} & PropsWithChildren;

import React from "react";

const ExperienceLayout = (props: Props) => {
  return <>{props.children}</>;
};

export default ExperienceLayout;
