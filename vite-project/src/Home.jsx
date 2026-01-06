import ProfileCard from "./ProfileCard";
import Metric from "./Metric";

function Home() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-gray-300 flex justify-center">
      <section className="w-[95%] max-w-[1200px] pt-40 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-x-20 items-start">
        
        <div className="flex justify-start">
          <div className="scale-[1.08] origin-left">
            <ProfileCard />
          </div>
        </div>

        <div className="space-y-12 pt-8">
          <h1 className="font-extrabold text-white leading-[0.92]">
            <span className="block text-7xl lg:text-[7.5rem]">
              SOFTWARE
            </span>
            <span className="block text-7xl lg:text-[6.5rem] text-gray-600">
              ENGINEER
            </span>
          </h1>

          <p className="max-w-xl text-gray-400 text-lg">
            I design and build clean, scalable web applications with a strong
            focus on frontend architecture, performance, and thoughtful UI.
          </p>

          <div className="flex gap-12 pt-4">
            <Metric value="3+" label="Years Experience" />
            <Metric value="15+" label="Projects Built" />
            <Metric value="∞" label="Curiosity" />
          </div>
        </div>

      </section>
    </div>
  );
}

export default Home;
