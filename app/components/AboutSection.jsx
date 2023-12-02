"use client";
import Image from 'next/image'
import React, {useState, useTransition} from 'react'
import TabButton from './TabButton';

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>JavaScript</li>
          <li>Java</li>
          <li>JavaFx</li>
          <li>React</li>
          <li>Next.js</li>
          <li>React Native</li>
          <li>Scala</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Northeastern University</li>
        </ul>
      ),
    },
    {
      title: "Work",
      id: "work",
      content: (
        <ul className="list-disc pl-2">
          <li>DeVil-Tech</li>
          <li>Criteo</li>
          <li>WHOOP</li>
          <li>Meditech</li>
        </ul>
      ),
    },
  ];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

  return (
    <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image
                alt='Dev Workstation'
                src={"/images/cartoon-workstation.png"}
                width={500}
                height={500}
            />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-2">About Me</h2>
                <p className="text-[#ADB7BE] text-base sm:text-md lg:text-lg">
                I'm a Software Engineer with 4 years of full stack experience focusing on web and cross-platform native desktop application development. I'm proficient at building dynamic and scalable web infrastructures that solve problems and I'm passionate about customer experience and tooling.
                </p>
                <br/>
                <div className="flex flex-row justify-start mt-4">
                    <TabButton
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}
                    >
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}
                    >
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("work")}
                        active={tab === "work"}
                    >
                        {" "}
                        Work{" "}
                    </TabButton>
                </div>
                <div className="mt-4">
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection