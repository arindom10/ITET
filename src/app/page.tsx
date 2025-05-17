import React from "react";
import "./globals.css";
import { Metadata } from "next";
import Home from "@/Components/HomePageComponents/Home";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Home ",
    description: "This is Home page",
  };
};

const page = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default page;
