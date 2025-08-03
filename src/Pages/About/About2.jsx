import React from 'react';
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaGithub } from "react-icons/fa";
import ShauryaImg from '../../../public/images/Shaurya img.png';
import BranchLeft from "../../../public/images/BRANCH!.png";
import BranchRight from "../../../public/images/branch2.png";
import Member from "../../../public/images/Shaurya img.png"; // placeholder team image
import { Button } from '../../Components/Common/Button/Button';
import { Branch1, Branch2 } from './Branch/Branches';

const TeamCard = ({ name, role, image }) => (
  <div className="bg-white rounded-xl overflow-hidden border-4 border-[#00FFB2] w-[180px] h-[220px] shadow-lg relative">
    <img src={image} alt={name} className="w-full h-[180px] object-cover" />
    <div className="bg-white text-center py-2">
      <h4 className="text-sm font-semibold text-black">{name}</h4>
      <p className="text-xs text-gray-500">{role}</p>
    </div>
  </div>
);

// Team tree data
const teamTree = [
  {
    name: "Shaurya",
    role: "CEO & Founder",
    image: ShauryaImg,
    children: [
      {
        name: "Alex Chen",
        role: "CTO",
        image: ShauryaImg,
        children: [
          { name: "Emily Davis", role: "Frontend Developer", image: ShauryaImg },
          { name: "David Kim", role: "Backend Developer", image: ShauryaImg },
        ],
      },
      {
        name: "Sarah Johnson",
        role: "Lead Designer",
        image: ShauryaImg,
        children: [
          { name: "Lisa Wang", role: "UI/UX Designer", image: ShauryaImg },
        ],
      },
      {
        name: "Michael Rodriguez",
        role: "Senior Developer",
        image: ShauryaImg,
        children: [
          { name: "James Wilson", role: "DevOps Engineer", image: ShauryaImg },
          { name: "Anna Martinez", role: "Quality Assurance", image: ShauryaImg },
          { name: "Ryan Thompson", role: "Project Manager", image: ShauryaImg },
        ],
      },
    ],
  },
];

// Recursive tree node component
function TeamTreeNode({ member, isRoot = false }) {
  const hasChildren = member.children && member.children.length > 0;

  return (
    <div className="flex flex-col items-center relative">
      {/* Node card */}
      <div className="bg-white rounded-xl border-4 border-[#00FFB2] w-[140px] h-[180px] shadow-lg flex flex-col items-center justify-center z-10">
        <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full object-cover mb-2" />
        <div className="text-center">
          <div className="font-semibold text-black">{member.name}</div>
          <div className="text-xs text-gray-500">{member.role}</div>
        </div>
      </div>
      {/* Draw lines to children if any */}
      {hasChildren && (
        <div className="flex flex-col items-center">
          {/* Vertical line from parent to horizontal */}
          <div className="w-1 h-8 bg-[#00FFB2]"></div>
          {/* Horizontal line connecting all children */}
          <div className="relative flex items-start justify-center" style={{ minWidth: `${member.children.length * 180}px` }}>
            <div
              className="absolute top-4 h-1 bg-[#00FFB2] z-0"
              style={{
                left: 0,
                right: 0,
                width: '100%',
              }}
            />
            {member.children.map((child, idx) => (
              <div key={idx} className="flex flex-col items-center mx-4 relative z-10">
                {/* Vertical line from horizontal to card */}
                <div className="w-1 h-8 bg-[#00FFB2]"></div>
                <TeamTreeNode member={child} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const About = () => {
  return (
    <div className="font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="bg-[#0F172A] px-6 md:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-light">
              I’m <br />
              <span className="text-[#3EE3E0] font-bold text-5xl">Shaurya</span>
            </h1>
            <p className="text-gray-300 max-w-md">
              A founder who believes skills matter more than degrees. Through{" "}
              <span className="font-semibold text-white">CodeWithTechries</span>, I guide and mentor aspiring developers and students to grow by building and doing.
            </p>
            <p className="italic text-gray-400 pt-2">
              “<span className="text-white font-semibold">If you can manifest it, you can achieve it.</span>”<br />
              <span className="not-italic">– Mr. Shaurya</span>
            </p>
          </div>

          {/* Center Image */}
          <div className="relative flex-1 flex justify-center items-center">
            <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full bg-[#1E293B] opacity-70 z-0" />
            <img
              src={ShauryaImg}
              alt="Shaurya"
              className="w-[280px] md:w-[320px] z-10 relative"
            />
          </div>

          {/* Right */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <p className="text-sm text-gray-400">Services</p>
            <p className="text-gray-200">
              Let’s build the future of tech learning with real-world projects, open-source contributions, and industry-led growth.
            </p>
            <a href="#" className="text-[#3EE3E0] font-medium inline-block">show more ➜</a>
            <div className="flex gap-4 justify-center md:justify-start pt-2">
              <a href="#" className="bg-[#1E293B] p-2 rounded-full"><FaFacebookF /></a>
              <a href="#" className="bg-[#1E293B] p-2 rounded-full"><FaYoutube /></a>
              <a href="#" className="bg-[#1E293B] p-2 rounded-full"><FaLinkedinIn /></a>
              <a href="#" className="bg-[#1E293B] p-2 rounded-full"><FaGithub /></a>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="bg-[#1E293B] mt-12 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row justify-between gap-10 text-center md:text-left">
          <div className="flex-1 space-y-2">
            <h2 className="text-lg font-semibold">Vision</h2>
            <p className="text-gray-300">
              To build a global ecosystem where skills define success, empowering learners to grow through real-world experience and community collaboration.
            </p>
          </div>
          <div className="hidden md:block w-[1px] bg-gray-600 h-full mx-4" />
          <div className="flex-1 space-y-2">
            <h2 className="text-lg font-semibold">Mission</h2>
            <p className="text-gray-300">
              To turn students and developers into industry-ready professionals through hands-on projects, open-source work, and direct access to mentors and recruiters.
            </p>
          </div>
        </div>
      </section>

      {/* newM - Team Tree Section */}
      <Branch1 />
      <Branch2 />
      <Branch1 />

      {/* Team Tree Section */}
      {/* Team Section */}
      <section className="flex flex-col items-center py-16">
        <h2 className="text-3xl font-bold mb-8">Team Family Tree</h2>
        <TeamTreeNode member={teamTree[0]} isRoot />
      </section>

      {/* Timeline Section */}
      <section className="px-6 py-16 lg:px-12 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div id='timeline' className="absolute md:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-800 dark:bg-white">
              <div className='absolute top-9 md:top-0 -left-3 z-10 bg-red-500/50 w-6 h-6 rounded-full flex justify-center items-center'>
                <div className='bg-red-500 w-2.5 h-2.5  rounded-full'></div>
              </div>
            </div>


            <div className="space-y-16">
              <TimelineItem
                year="2018"
                tagline={'Started with a question'}
                title="Main koi task karch kyuki kar sake hoon?"
                description="It started as a simple idea to help local businesses establish their online presence."
                image={ShauryaImg}
                side="left"
              />

              <TimelineItem
                year="2021"
                tagline={'A Dream Turns Into a Vision'}
                title="What if we built better?"
                description="We expanded our services and built a team of talented developers and designers."
                image={ShauryaImg}
                side="right"
              />

              <TimelineItem
                year="2022"
                title="The Team That Turned Build Into Art"
                description="Our team grew to 10+ professionals, each bringing unique expertise to every project."
                image={ShauryaImg}
                side="left"
              />

              <TimelineItem
                year="2022"
                title="To paisa kush builds ni mange"
                description="We introduced new technologies and methodologies to deliver even better results."
                image={ShauryaImg}
                side="right"
              />

              <TimelineItem
                year="2023"
                title="This was how far App vision."
                description="Today we continue to push boundaries and create innovative solutions for our clients."
                image={ShauryaImg}
                side="left"
              />

              <TimelineItem
                year="2024"
                title="This is just the beginning"
                description="Looking forward to what we can build together in the future."
                image={ShauryaImg}
                side="right"
              />

              <TimelineItem
                year="2021"
                title="You already belong here"
                description="Join our journey and be part of something amazing."
                image={ShauryaImg}
                side="left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Unlock Your Potential Through
            <span className="text-cyan">
              {" "}
              Collaborative Web Technologies
            </span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Let's build something
            amazing together.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg "
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    △
                  </span>
                </div>
                <span className="text-xl font-bold">
                  CollaborativeWebTechnologies
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Building the future, one line of code at a time.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Services</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Web Development</div>
                <div>Mobile Apps</div>
                <div>UI/UX Design</div>
                <div>Consulting</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>About Us</div>
                <div>Careers</div>
                <div>Blog</div>
                <div>Contact</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Connect</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>LinkedIn</div>
                <div>Twitter</div>
                <div>GitHub</div>
                <div>Email</div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; 2024 Collaborative Web Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Team Member Component
function TeamMember({ name, role, image, isLead = false }) {
  return (
    <div className={`w-32 bg-white rounded-xl shadow-lg p-4 text-center ${isLead ? "ring-2 ring-primary" : ""}`}>
      <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-xl font-bold text-gray-500">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        )}
      </div>
      <h3 className="font-semibold text-sm text-black">{name}</h3>
      <p className="text-xs text-gray-500">{role}</p>
    </div>
  );
}

// Timeline Item Component
function TimelineItem({ year, title, description, image, side, tagline }) {
  return (
    <div
      className={`flex flex-col md:flex-row md:gap-8 ${side === "right" ? "flex-row-reverse" : ""}`}
    >
      {/* Timeline marker */}
      <div className="relative md:hidden">
        <div className="-ms-3.5 md:-mt-10 text-teal-600 dark:text-teal-500 text-2xl font-semibold p-2 w-fit bg-white dark:bg-gray-950">{year}</div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-md">
        {/* border border-dashed border-gray-400 dark:border-gray-500 */}
        <div className="rounded-xl p-4">
          <div className={`mt-6 space-y-2 ${side === 'right' ? '' : 'md:text-right'}`}>
            {tagline && <i className="text-gray-500 dark:text-gray-400">{tagline}</i>}
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Timeline marker */}
      <div className="relative hidden md:flex">
        <div className="-mt-56 -ms-1 md:-mt-10 text-teal-600 dark:text-teal-500 text-2xl font-semibold p-2 w-fit h-fit bg-white dark:bg-gray-950">{year}</div>
      </div>

      {/* Image */}
      <div className="flex-1 max-w-md px-4">
        <div className="h-52 rounded-lg overflow-hidden bg-gray-200">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default About;