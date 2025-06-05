import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Cpu,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React",  },
        {
          name: "Next.js",
         
        },
        {
          name: "TypeScript",
          
        },
        {
          name: "Tailwind CSS",
          
        },
        {
          name: "HTML5",
          
        },
        {
          name: "CSS3",
         
        },
      ],
    },
    {
      icon: Cpu,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        {
          name: "Node.js",
          
        },
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: ".NET MAUI",
          
        },
        {
          name: "C#",
          
        },
        {
          name: "FastAPI",
          
        },
        {
          name: "Django",
          
        },
        {
          name: "MySQL",
          
        },
      ],
    },
    {
      icon: Cpu,
      title: "Android Development",
      color: "text-purple-400",
      skills: [
        { name: "Kotlin", },
        {
          name: ".NET MAUI ",
          
        },
        {
          name: "React Native",
          
        },
     
      ],
    },
    {
      icon: Cpu,
      title: "Microsoft Office Skills",
      color: "text-orange-400",
      skills: [
        { name: "Microsoft Excel", },
        {
          name: "Microsoft Word",
          
        },
        { name: "Microsoft Powerpoint", },
      
      ],
    },
    {
      icon: Cpu,
      title: "Other Skills",
      color: "text-pink-400",
      skills: [
        {
          name: "Multiple Frameworks Knowledge",
          
        },
        { name: "Multiple ide's Knowledge",},
        {
          name: "Excellent in Adobe Photshop ",
         
        },
        { name: "Marketing Skills", },
        {
          name: "Customer Service Skills",
          
        },

      ],
    },
    {
      icon: Cpu,
      title: "Language Skills",
      color: "text-yellow-400",
      skills: [
        {
          name: "Arabic Native",
          
        },
        {
          name: "English C2",
          
        },
        {
          name: "Turkish B2",
          
        },
       
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
