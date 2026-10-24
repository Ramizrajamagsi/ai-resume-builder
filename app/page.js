"use client";

import React, { useState } from "react";

export default function Home() {
  const [country, setCountry] = useState("US");
  const [fullName, setFullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    if (!fullName || !jobTitle) {
      alert("Please enter Name and Job Title");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setSummary(
        `Results-oriented ${jobTitle} professional based in ${country} with a strong background in driving growth and delivering optimized, ATS-compliant solutions.`
      );
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8 text-slate-900 font-sans">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h1 className="text-2xl font-bold mb-2 text-indigo-600">AI Resume Builder SaaS</h1>
        <p className="text-slate-600 mb-6 text-sm">Target regional standards (USA, EU, GCC) and generate ATS-friendly summaries.</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Target Region</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border p-2 rounded-lg bg-slate-50"
            >
              <option value="US">United States (Standard ATS)</option>
              <option value="EU">Europe (Europass Compatible)</option>
              <option value="UAE">UAE / GCC Region</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="e.g. Ramiz Raja"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border p-2 rounded-lg bg-slate-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Job Title / Role</label>
            <input
              type="text"
              placeholder="e.g. Senior Software Engineer"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full border p-2 rounded-lg bg-slate-50"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg hover:bg-indigo-700 transition"
          >
            {loading ? "Generating Summary..." : "Generate AI Resume Summary"}
          </button>

          {summary && (
            <div className="mt-4 p-4 bg-slate-50 border rounded-lg">
              <h2 className="font-semibold text-slate-800 mb-1">Generated Professional Summary:</h2>
              <p className="text-slate-700 text-sm leading-relaxed">{summary}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
