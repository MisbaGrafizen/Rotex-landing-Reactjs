
import { useState, React } from "react";


import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";
import Header from "../../component/header/Header";
import HeroSection from "../../component/header/HeroSection";
import Product from "../../component/Product";
import ComparisonSection from "../../component/ComparisonSection";
import Footer from "../../component/footer/Footer";


export default function Home() {


  return (
    <>
      <div className=" flex md:w-[100%]  flex-col gap-[30px]  ">
        {/* <Header /> */}
        <HeroSection />

        <Product />
        <ComparisonSection />
<Footer />
      </div>
    </>
  );
}
