import React from "react";
import jobsImage from "./assets/jobs.jpg";
import eventsImage from "./assets/events.jpg";
import resumeImage from "./assets/resume.jpg";

function Works() {
  return (
    <div className="w-full px-6 pt-12 pb-16">
      <h2 className="text-4xl font-bold mb-10 text-center">
        My Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <img
            src={jobsImage}
            alt="Connecto"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Connecto</h3>
          <p className="text-gray-600">
            Connects Employers and Job Seekers seamlessly.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <img
            src={eventsImage}
            alt="Event Outreach Assistant"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">
            Event Outreach Assistant
          </h3>
          <p className="text-gray-600">
            An AI-powered assistant for event outreach and management.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <img
            src={resumeImage}
            alt="Resume Analyzer"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">
            Resume Analyzer
          </h3>
          <p className="text-gray-600">
            Resume analysis tool to optimize job applications.
          </p>
          <p className="italic text-gray-400 mt-1">Ongoing...</p>
        </div>
      </div>
    </div>
  );
}

export default Works;
