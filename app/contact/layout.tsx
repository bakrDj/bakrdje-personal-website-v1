"use client";
import { PropsWithChildren } from "react";

type Props = {} & PropsWithChildren;

import React from "react";

const ContactLayout = (props: Props) => {
  return <>{props.children}</>;
};

export default ContactLayout;
