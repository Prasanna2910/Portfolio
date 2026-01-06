import ProfileCard from "./ProfileCard";

/* FontAwesome Icons */
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
  FaDocker,
  FaFigma,
} from "react-icons/fa";

/* Simple Icons */
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiFlask,
  SiMysql,
  SiPostman,
  SiJavascript,
  SiCamunda,
} from "react-icons/si";

function Skills() {
  const skills = [
    // Languages
    { name: "JavaScript", desc: "Core Language", icon: SiJavascript },
    { name: "Python", desc: "Backend & Scripting", icon: FaPython },

    // Frontend
    { name: "React", desc: "Frontend Library", icon: FaReact },
    { name: "Next.js", desc: "React Framework", icon: SiNextdotjs },
    { name: "Tailwind CSS", desc: "Utility-first CSS", icon: SiTailwindcss },

    // Backend
    { name: "Node.js", desc: "Backend Runtime", icon: FaNodeJs },
    { name: "Express", desc: "Node Framework", icon: SiExpress },
    { name: "Flask", desc: "Python Backend", icon: SiFlask },

    // Databases
    { name: "MongoDB", desc: "NoSQL Database", icon: SiMongodb },
    { name: "MySQL", desc: "Relational Database", icon: SiMysql },

    // Tools
    { name: "Docker", desc: "Containerization", icon: FaDocker },
    { name: "Postman", desc: "API Testing", icon: SiPostman },
    { name: "Camunda", desc: "Workflow Engine", icon: SiCamunda },
    { name: "Figma", desc: "UI / UX Design", icon: FaFigma },
    { name: "Git & GitHub", desc: "Version Control", icon: FaGithub },
  ];

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-gray-300 flex justify-center">
      <section className="w-[95%] max-w-[1200px] pt-40 pb-32 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-x-20 items-start">

        {/* LEFT — Profile Card */}
        <div className="flex justify-start">
          <div className="scale-[1.08] origin-left">
            <ProfileCard />
          </div>
        </div>

        {/* RIGHT — Skills */}
        <div className="space-y-10">
          {/* Title */}
          <h1 className="font-extrabold leading-[0.95]">
            <span className="block text-7xl lg:text-[7.5rem] text-white">
              MY
            </span>
            <span className="block text-7xl lg:text-[6.5rem] text-gray-600">
              SKILLS
            </span>
          </h1>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-24">
            {skills.map((skill, i) => {
              const Icon = skill.icon;

              return (
                <div
                  key={i}
                  className="flex items-center gap-6 group"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center group-hover:bg-[#222] transition">
                    <Icon className="text-2xl text-white" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </section>
    </div>
  );
}

export default Skills;
