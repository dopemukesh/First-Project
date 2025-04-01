/* eslint-disable no-unused-vars */
import React from 'react'
import socialData from "../../../api/SocialData.json";
import Container from "../../../Components/Common/Container/Container";

const SocialStats = () => {
  return (
    <>
      <Container className="py-14 bg-gradient-to-t from-white to-transparent backdrop-blur-md dark:bg-gradient-to-t dark:from-gray-950 dark:to-transparent">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
            COMMUNITY
          </p>
          <p className="my-4 text-2xl md:text-4xl text-gray-900 dark:text-white font-semibold max-w-3xl">
            Our Community Empowers Innovators to
            <span className="text-emerald-400">
              {" "}
              Connect, Learn, and Grow Together
            </span>
          </p>
          <p className="my-8 text-gray-500 dark:text-gray-400">
            Trusted and loved by over{" "}
            <span className="dark:text-white text-gray-800 font-medium">
              22,000+ peoples on instagram
            </span>
          </p>
        </div>

        <div className="flex flex-col flex-wrap md:flex-row  gap-4 justify-center items-center">
          {socialData.map((data, index) => (
            <div
              key={index}
              className="cursor-default bg-gradient-to-tl from-white/10 via-transparent via-30% to-white/10 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 hover:scale-105 hover:z-10 transition-all duration-700 ease-in-out p-6 rounded-2xl w-80 flex flex-col gap-4"
            >
              <h2 className="text-emerald-400 text-4xl font-semibold drop-shadow-[0px_0px_30px_#34D399]">
                {data.socialNumbers}
              </h2>
              <h3 className="text-xl font-semibold">{data.socialMedia}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {data.socialDescription}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default SocialStats