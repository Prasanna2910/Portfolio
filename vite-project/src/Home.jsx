import ProfileCard from "./ProfileCard";
import Metric from "./Metric";

function Home() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-gray-300 flex justify-center">
      <section className="w-[90%] max-w-7xl pt-28 grid grid-cols-1 lg:grid-cols-2 gap-x-40  items-center">
        
        <div className="flex justify-center lg:justify-end">
          <ProfileCard />
        </div>

        <div className="space-y-8 lg:pl-4">
          <h1 className="text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            SOFTWARE
            <span className="block text-gray-600">ENGINEER</span>
          </h1>

          <p className="max-w-xl text-gray-400 text-lg">
            I design and build clean, scalable web applications with a strong
            focus on frontend architecture, performance, and thoughtful UI.
          </p>

          <div className="flex gap-10 pt-6">
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
