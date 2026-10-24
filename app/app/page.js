"use client";

import React, { useState } from "react";

export default function Home() {
  const [country, setCountry] = useState("US");
  const [fullName, setFullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [summary, setSummary] = useState("");

  const handleGenerate = () => {
    if (!fullName || !jobTitle) {
      alert("Please enter Name and Job Title");
      return;
    }
    setSummary(
      `Results-oriented ${jobTitle} professional based in ${country} with a strong background in driving growth and delivering optimized solutions.`
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8 text-slate-900">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-indigo-600">AI Resume Builder SaaS</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Target Region</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border p-2 rounded bg-slate-50"
            >
              <option value="US">United States (ATS Standard)</option>
              <option value="EU">Europe (Europass Compatible)</option>
              <option value="UAE">UAE / GCC Region</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="e.g. Ramiz Raja"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border p-2 rounded bg-slate-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Job Title</label>
            <input
              type="text"
              placeholder="e.g. Software Engineer"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full border p-2 rounded bg-slate-50"
            />
          </div>

          <button
            onClick={handleGenerate}
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded hover:bg-indigo-700 transition"
          >
            Generate AI Summary
          </button>

          {summary && (
            <div className="mt-4 p-4 bg-slate-50 border rounded">
              <h2 className="font-semibold mb-1">Generated Summary:</h2>
              <p>{summary}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
