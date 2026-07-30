import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

import aws from "../assets/images/aws.png";
import docker from "../assets/images/docker.png";
import kubernetes from "../assets/images/Kubernetes.png";
import react from "../assets/images/react.png";
import node from "../assets/images/node.png";
import terraform from "../assets/images/terraform.png";
import jenkins from "../assets/images/jenkins.png";
import github from "../assets/images/github.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-8"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full">
            Available for Internship & Full Time
          </span>

          <h1 className="text-6xl font-extrabold mt-8 leading-tight">
            Hi, I'm
            <br />
            <span className="text-blue-500">
              Riya Kumari
            </span>
          </h1>

          <h2 className="text-3xl font-semibold mt-6 text-gray-300">
            AWS & DevOps Engineer
          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-8 max-w-xl">
            Passionate DevOps Engineer and Full Stack Developer specializing in
            AWS Cloud, Docker, Kubernetes, Terraform, Jenkins, React and
            Node.js. I build scalable cloud-native applications and automate
            modern deployment pipelines.
          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-xl flex items-center gap-2 transition">

              View Projects
              <ArrowRight size={18}/>
            </button>

            <button className="border border-gray-600 hover:border-blue-500 px-7 py-4 rounded-xl flex items-center gap-2 transition">

              <Download size={18}/>
              Resume

            </button>

            <button className="border border-gray-600 hover:border-blue-500 px-7 py-4 rounded-xl flex items-center gap-2 transition">

              <Mail size={18}/>
              Contact

            </button>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div

          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}

          className="relative"

        >

          <div className="bg-[#0f172a] rounded-3xl border border-blue-500/30 p-8">

            <h3 className="text-2xl font-bold mb-8 text-center">
              Tech Stack
            </h3>

            <div className="grid grid-cols-4 gap-8">

              <img src={aws} className="w-16 hover:scale-110 duration-300" />

              <img src={docker} className="w-16 hover:scale-110 duration-300" />

              <img src={kubernetes} className="w-16 hover:scale-110 duration-300" />

              <img src={react} className="w-16 hover:scale-110 duration-300" />

              <img src={node} className="w-16 hover:scale-110 duration-300" />

              <img src={terraform} className="w-16 hover:scale-110 duration-300" />

              <img src={jenkins} className="w-16 hover:scale-110 duration-300" />

              <img src={github} className="w-16 hover:scale-110 duration-300" />

            </div>

            <div className="mt-10 bg-[#111827] rounded-xl p-5 font-mono text-green-400 text-sm">

{`$ terraform apply

✓ Infrastructure Created

$ kubectl get pods

frontend     Running
backend      Running
database     Running

$ docker ps

3 Containers Running

$ jenkins build

SUCCESS ✔`}

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;