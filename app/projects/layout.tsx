"use client";
import { PropsWithChildren } from "react";

type Props = {} & PropsWithChildren;

import React from "react";

const ProjectsLayout = (props: Props) => {
  return <>{props.children}</>;
};

export default ProjectsLayout;
