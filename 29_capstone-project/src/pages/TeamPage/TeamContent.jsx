import {
  behance_team,
  dribbble_team,
  github_team,
  instagram_team,
  linkedin_team,
  team1,
  team2,
} from "assets";
import React, { useEffect } from "react";
import "./TeamContent.css";
import Typed from "react-typed";
import { animateScroll as scroll } from "react-scroll";
import { Helmet } from "react-helmet";

const TeamContent = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Helmet>
        <title>React Team</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="h-full pb-32 pt-20 md:pt-32 container">
        <h1 className="pb-12 text-2xl md:text-4xl font-bold title zoomInLeft">
          Team React{" "}
          <span className="font-normal">
            - <span className="font-bold">Re</span>mahan Peye(k)
            <span className="font-bold">act</span>{" "}
          </span>
        </h1>
        <div className="lg:flex justify-around pt-12">
          <div className="flex flex-col lg:w-1/2 lg:flex-row justify-center lg:pr-10 content-center">
            <div className="w-full md:w-1/2 my-auto mx-auto">
              <div className="md:rounded-tr-[125px] rounded-full bg-blue-800 p-3 animate__animated animate__flipInY animate__slow">
                <div className="md:rounded-tr-[125px] rounded-full bg-blue-400 rotate-0 hover:origin-center hover:-rotate-90 transition duration-500 ease-in-out cursor-pointer">
                  <img
                    src={team1}
                    className="md:rounded-tr-[125px] rounded-full p-3"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="animate__animated animate__backInUp animate__slow lg:w-1/2 py-12 md:pl-10 flex text-start flex-col justify-center lg:justify-start text-blue-800">
              <div className="text-xl flex">
                <Typed
                  loop
                  typeSpeed={90}
                  backSpeed={90}
                  strings={["Hello I'am"]}
                  smartBackspace
                  shuffle={false}
                  backDelay={1}
                  fadeOut={false}
                  fadeOutDelay={200}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                />{" "}
                👋
              </div>
              <h3 className="text-4xl text-blue-700">
                <span className="font-bold">David</span> Nasrulloh
              </h3>
              <hr className="w-1/3 mt-2 border-t-4 border-blue-600" />
              <h5 className="text-xl py-2">Front End Developer</h5>
              <div className="mt-4 flex">
                <div className="flex py-3 mx-2">
                  <a
                    href={`https://github.com/davidnasrulloh`}
                    rel="noreferrer"
                    target="_blank"
                    className="flex"
                  >
                    <div className="mr-2 wave">
                      <img src={github_team} alt="" className="w-6" />
                    </div>
                  </a>
                </div>
                <div className="flex py-3 mx-2">
                  <a
                    href={`https://www.instagram.com/davidnasrulloh_`}
                    rel="noreferrer"
                    target="_blank"
                    className="flex"
                  >
                    <div className="mr-2 wave">
                      <img src={instagram_team} alt="" className="w-6" />
                    </div>
                  </a>
                </div>
                <div className="flex py-3 mx-2">
                  <a
                    href={`https://www.linkedin.com/in/davidnasrulloh/`}
                    rel="noreferrer"
                    target="_blank"
                    className="flex"
                  >
                    <div className="mr-2 wave">
                      <img src={linkedin_team} alt="" className="w-6" />
                    </div>
                  </a>
                </div>
                <div className="flex py-3 mx-2">
                  <a
                    href={`https://www.behance.net/davidnasrulloh`}
                    rel="noreferrer"
                    target="_blank"
                    className="flex"
                  >
                    <div className="mr-2 wave">
                      <img src={behance_team} alt="" className="w-6" />
                    </div>
                  </a>
                </div>
                <div className="flex py-3 mx-2">
                  <a
                    href={`https://dribbble.com/davidnasrulloh/`}
                    rel="noreferrer"
                    target="_blank"
                    className="flex"
                  >
                    <div className="mr-2 wave">
                      <img src={dribbble_team} alt="" className="w-6" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="py-4">
                "Hidup itu, kalau nggk gini ya gitu. mudah bukan?"
              </div>
            </div>
          </div>
          <div className="invisible lg:visible flex my-auto">
            <hr className="h-0 lg:h-96 border-r-2 animate__fadeInDown" />
          </div>
          <div className="flex flex-col lg:w-1/2 lg:flex-row justify-center content-center lg:pl-10">
            <div className="animate__animated animate__backInUp animate__slow w-full lg:w-1/2 py-12 md:pr-8 flex text-end flex-col justify-start text-blue-800">
              <div className="text-xl flex justify-end">
                <Typed
                  loop
                  typeSpeed={90}
                  backSpeed={90}
                  strings={["Hello I'am"]}
                  smartBackspace
                  shuffle={false}
                  backDelay={1}
                  fadeOut={false}
                  fadeOutDelay={200}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                />{" "}
                👋
              </div>
              <h3 className="text-4xl text-blue-700">
                M <span className="font-bold">Ilham</span> M
              </h3>
              <div className="flex justify-end">
                <hr className="w-1/3 mt-2 border-t-4 border-blue-600" />
              </div>
              <h5 className="text-xl py-2">Front End Developer</h5>
              <div className="mt-4 flex justify-end">
                <div className="flex py-3 justify-end mx-2">
                  <a
                    href={`https://github.com/mochammadilham06`}
                    rel="noreferrer"
                    target="_blank"
                    className="flex"
                  >
                    <div className="ml-2 wave">
                      <img src={github_team} alt="" className="w-6" />
                    </div>
                  </a>
                </div>
                <div className="flex py-3 justify-end mx-2">
                  <a
                    href={`https://www.instagram.com/moch.ilham10`}
                    rel="noreferrer"
                    target="_blank"
                    className="flex"
                  >
                    <div className="ml-2 wave">
                      <img src={instagram_team} alt="" className="w-6" />
                    </div>
                  </a>
                </div>
                <div className="flex py-3 justify-end mx-2">
                  <a
                    href={`https://www.linkedin.com/in/mochilham1006`}
                    rel="noreferrer"
                    target="_blank"
                    className="flex"
                  >
                    <div className="ml-2 wave">
                      <img src={linkedin_team} alt="" className="w-6" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="py-4">
                "Hidup itu sederhana, goreng angkat, lalu tiriskan"
              </div>
            </div>
            <div className="w-full md:w-1/2 my-auto mx-auto">
              <div className="md:rounded-tl-[125px] rounded-full bg-blue-800 p-3 animate__animated animate__flipInY animate__slow">
                <div className="md:rounded-tl-[125px] rounded-full bg-blue-400 rotate-0 hover:origin-center hover:rotate-90 transition duration-500 ease-in-out cursor-pointer">
                  <img
                    src={team2}
                    className="md:rounded-tl-[125px] rounded-full p-3"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamContent;
