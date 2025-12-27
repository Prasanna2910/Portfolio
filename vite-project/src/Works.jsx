import React from "react";

function Works() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold mb-8">My Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <img
            src="https://giighire.com/wp-content/uploads/2024/09/Best-Free-Job-Posting-Sites.jpg"
            alt="Work 1"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Connecto</h3>
          <p className="text-gray-600">
            Connects Employers and Job Seekers seamlessly.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <img
            src="https://achildsoasis.com/wp-content/uploads/upcoming-events-shutterstock.jpg"
            alt="Work 2"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Event Outreach Assistant</h3>
          <p className="text-gray-600">
            An AI-powered assistant for event outreach and management.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <img
            src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Screenshot%202023-02-28%20at%204.09.32%20PM.jpg?width=650&height=339&name=Screenshot%202023-02-28%20at%204.09.32%20PM.jpg"
            alt="Work 3"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Resume Analyzer</h3>
          <p className="text-gray-600">
            Resume analysis tool to optimize job applications.
          </p>
          <p className="italic text-gray-400">Ongoing...</p>
        </div>
        {/* Add more work items as needed */}
      </div>
    </div>
  );
}

export default Works;