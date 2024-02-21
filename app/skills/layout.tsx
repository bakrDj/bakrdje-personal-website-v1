"use client";
import { PropsWithChildren } from "react";

type Props = {} & PropsWithChildren;

import React from "react";

const SkillsLayout = (props: Props) => {
  return <>{props.children}</>;
};

export default SkillsLayout;
