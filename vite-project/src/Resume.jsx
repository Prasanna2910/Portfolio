import React from "react";

function Resume() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">S Prasanna Venketesh</h1>
        <p className="text-gray-600 mt-2">Full Stack Developer</p>
        <p className="text-gray-600">📧 prasanna.prodesigns@email.com</p>
      </div>

      {/* Summary */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Summary</h2>
        <p className="text-gray-700 leading-relaxed">
          Full Stack Developer with 3+ years of experience building scalable web
          applications. Strong in React, backend APIs, and system thinking.
          Passionate about clean architecture and continuous learning.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
          <span>React</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>My SQL</span>
          <span>Camunda</span>
          <span>Fast API | Flask</span>
          <span>REST APIs</span>
          <span>Tailwind CSS</span>
          <span>Git & GitHub</span>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold">
            Automation Engineer — Sapphire IMS
          </h3>
          <p className="text-sm text-gray-500">
            Automation Engineer | 9 Months
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Built and automated internal tools using Form.io</li>
            <li>Implemented conditional logic for scholarship calculations</li>
            <li>
              Collaborated with cross-functional teams to deliver features
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>

        <div className="mb-4">
          <h3 className="font-semibold">Connecto</h3>
          <p className="text-gray-700">
            Platform connecting employers and job seekers using modern web
            technologies.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Event Outreach Assistant</h3>
          <p className="text-gray-700">
            AI-powered assistant for automating event outreach and management.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Resume Analyzer (Ongoing)</h3>
          <p className="text-gray-700">
            Tool to analyze resumes and provide optimization insights.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Education</h2>
        <p className="text-gray-700">Bachelor’s Degree — Computer Science</p>
      </section>
    </div>
  );
}

export default Resume;
