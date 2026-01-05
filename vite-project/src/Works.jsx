import ProfileCard from "./ProfileCard";
import resumeImage from "./assets/resume.jpg";
import connectoImage from "./assets/connecto.png";
import EventImage from "./assets/Event.png";

function Works() {
  const projects = [
    {
      title: "Connecto",
      subtitle: "Job Platform",
      image: connectoImage,
    },
    {
      title: "Event Outreach Assistant",
      subtitle: "AI Productivity Tool",
      image: EventImage,
    },
    {
      title: "Resume Analyzer",
      subtitle: "Smart Resume Evaluation",
      image: resumeImage,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-gray-300 flex justify-center">
      <section className="w-[95%] max-w-[1200px] pt-40 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-x-20 items-start">
        
        <div className="flex justify-start">
          <div className="scale-[1.08] origin-left">
            <ProfileCard />
          </div>
        </div>

        <div className="space-y-14">
          <h1 className="font-extrabold leading-[0.95]">
            <span className="block text-7xl lg:text-8xl text-white">
              RECENT
            </span>
            <span className="block text-7xl lg:text-8xl text-gray-700">
              PROJECTS
            </span>
          </h1>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="
                  flex items-center justify-between gap-6
                  px-4 py-3 rounded-xl
                  transition-colors duration-300
                  hover:bg-[#161616]
                "
              >
                <div className="flex items-center gap-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-35 h-35 rounded-xl object-cover"
                  />

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <span className="text-orange-400 text-2xl">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Works;
