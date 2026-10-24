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
        `Results-oriented ${jobTitle} professional based in ${country} with a strong background in driving growth, managing dynamic teams, and delivering optimized solutions tailored for international standard applications.`
      );
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border border-slate-200">
        <h1 className="text-3xl font-bold mb-2 text-indigo-600">AI Resume Builder SaaS</h1>
        <p className="text-slate-600 mb-6">Create ATS-Compliant Resumes for Global Job Markets</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Target Region / Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border p-2 rounded-lg bg-slate-50"
            >
              <option value="US">United States (Standard ATS)</option>
              <option value="EU">Europe (Europass Compatible)</option>
              <option value="UAE">UAE / GCC (Gulf Region)</option>
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

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Job Title / Role</label>
            <input
              type="text"
              placeholder="e.g. Senior Software Engineer"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full border p-2 rounded-lg bg-slate-50"
            />
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
        >
          {loading ? "Generating Professional Summary..." : "Generate AI Resume Summary"}
        </button>

        {summary && (
          <div className="mt-6 p-4 bg-slate-100 rounded-lg border border-slate-200">
            <h2 className="font-semibold text-lg text-slate-800 mb-2">Generated Professional Summary:</h2>
            <p className="text-slate-700">{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
}
