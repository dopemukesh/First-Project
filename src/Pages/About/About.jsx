// Designed and developed by:
// - Mukesh Yadav

import React from 'react'
import Container from '../../Components/Common/Container/Container';
import { Button } from '../../Components/Common/Button/Button';
import MemberCard from '../Community/MemberCard';

const About = () => {
    return (
      <>
        {/* members display section */}
        <Container className="pb-14">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-semibold">Website Managers</h1>
            <h3 className="text-gray-500 ">
              Meet the team behind &quot;Code With Techries&quot;
            </h3>
          </div>
          {/* members display according to role = Manager */}
          <div className="flex flex-wrap gap-4 justify-center">
          <MemberCard filters={{ role: "Manager" }} />
        </div>

          <div className="py-14 grid md:grid-cols-2">
            {/* image section for dev info  */}
            <div id="devInfo" className="flex justify-center gap-4">
              <div
                id="dev01"
                className="group relative w-fit h-80 bg-green-600 rounded-xl overflow-hidden"
              >
                <img
                  src="https://avatars.githubusercontent.com/dopemukesh"
                  alt=""
                  className="w-16 h-full object-cover group-hover:w-44 transition-all duration-700 origin-left"
                />
                <div className="flex items-center justify-between gap-4 absolute z-10 bottom-0 left-0 p-2 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-700 w-full">
                  <p className="text-xl font-bold text-white">Mukesh</p>
                  <Button size="xs" variant="secondary">
                    Github
                  </Button>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 absolute w-full h-24 bg-gradient-to-t from-black to-transparent bottom-0 left-0"></div>
              </div>
              <div
                id="dev02"
                className="group relative w-fit h-full bg-green-600 rounded-xl overflow-hidden"
              >
                <img
                  src="https://avatars.githubusercontent.com/dopemukesh"
                  alt=""
                  className="w-16 h-full object-cover group-hover:w-44 transition-all duration-500"
                />
                <p>Mukesh</p>
              </div>
            </div>

            {/* contents section for dev info  */}
            <div className=" ">
              <div className="">
                {/* <h3 className="font-medium">
                Meet the team behind &quot;Code With Techries&quot;
              </h3> */}
                <h2 className="text-3xl font-semibold">
                  We are the Product Developers
                </h2>
              </div>
              <div>
                <p className="text-gray-500 max-w-2xl  ">
                  We are a group of passionate developers who are dedicated to
                  creating innovative and user-friendly websites. Our mission is
                  to deliver exceptional online experiences that meet the needs
                  of our clients.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
}

export default About