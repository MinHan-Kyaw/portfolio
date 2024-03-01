"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Heading from "@/utils/Heading";
import ThemeSwitcher from "@/utils/ThemeSwitcher";

export default function Home() {

  return (
    <div className="w-full md:w-[90%] xl:w-[75%] mx-auto md:p-14 py-8 xl:px-0 md:my-12 bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-200 rounded-[40px] shadow-lg relative">
      <Heading 
        title="Min Han Kyaw" 
        description="Welcome to my portfolio website. Explore my work and experience." 
        keywords="Web Developer, Software Developer, Web Development, Python Developer"
      />

      <div className='absolute top-12 lg:top-4 right-12 p-2 rounded-lg'>
        <ThemeSwitcher />
      </div>

      <Hero />

      {/* <Projects /> */}

      <Footer />
    </div>
  );
}
