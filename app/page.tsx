"use client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { create, StoreApi } from "zustand";

export default function Home() {
  redirect("/me");
  return <></>;
}
