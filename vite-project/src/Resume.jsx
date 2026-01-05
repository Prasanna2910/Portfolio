import ProfileCard from "./ProfileCard";

function Resume() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-gray-300 flex justify-center">
      <section className="w-[95%] max-w-[1200px] pt-40 pb-20 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-x-20 items-start">

        {/* LEFT — Profile Card */}
        <div className="flex justify-start">
          <div className="scale-[1.08] origin-left">
            <ProfileCard />
          </div>
        </div>

        {/* RIGHT — Resume Content */}
        <div className="space-y-12">

          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-white">
              S Prasanna Venketesh
            </h1>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
            <p className="text-gray-500 mt-1">
              📧 prasanna.prodesigns@email.com
            </p>
          </div>

          {/* Summary */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Summary
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              Full Stack Developer with 3+ years of experience building scalable
              web applications. Strong in React, backend APIs, and system
              thinking. Passionate about clean architecture and continuous
              learning.
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-400">
              <span>React</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>MySQL</span>
              <span>Camunda</span>
              <span>FastAPI / Flask</span>
              <span>REST APIs</span>
              <span>Tailwind CSS</span>
              <span>Git & GitHub</span>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Experience
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">
                Automation Engineer — Sapphire IMS
              </h3>
              <p className="text-sm text-gray-500">
                Automation Engineer | 9 Months
              </p>

              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Built and automated internal tools using Form.io</li>
                <li>Implemented conditional logic for scholarship calculations</li>
                <li>Collaborated with cross-functional teams to deliver features</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Projects
            </h2>

            <div className="space-y-4 text-gray-400">
              <div>
                <h3 className="font-semibold text-white">Connecto</h3>
                <p>
                  Platform connecting employers and job seekers using modern web
                  technologies.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Event Outreach Assistant
                </h3>
                <p>
                  AI-powered assistant for automating event outreach and
                  management.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Resume Analyzer (Ongoing)
                </h3>
                <p>
                  Tool to analyze resumes and provide optimization insights.
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Education
            </h2>
            <p className="text-gray-400">
              Bachelor’s Degree — Computer Science
            </p>
          </section>

        </div>
      </section>
    </div>
  );
}

export default Resume;
