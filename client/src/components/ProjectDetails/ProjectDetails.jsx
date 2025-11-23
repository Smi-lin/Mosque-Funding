import React from "react";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";

const ProjectDetails = () => {
  return (
    <section className="bg-[#F5F5DC] min-h-screen">
      <Navbar />

      {/* Header */}
      <div className=" text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-2 text-black">
          Project Financial Breakdown
        </h1>
        <p className="text-lg opacity-90 text-black">
          Full transparency of how funds will be spent on the construction of the new Mujaahidun Central Mosque (PEGAMUT)
        </p>
      </div>

      {/* Project Info */}
      <div className="max-w-5xl mx-auto px-6 py-12 bg-white shadow-xl rounded-xl mt-10">
        <h2 className="text-2xl font-bold text-[#1D4D4F] mb-4">
          Project Information
        </h2>
        <p className="text-gray-700">
          <strong>PROJECT:</strong> Mosque Building <br />
          <strong>TITLE:</strong> The Proposed Mujaahidun Central Mosque (PEGAMUT) <br />
          <strong>LOCATION:</strong> Ogun State <br />
          <strong>DATE:</strong> October 2025 <br />
        </p>
      </div>

      {/* Bills of Quantities */}
      <div className="max-w-5xl mx-auto px-6 py-12 mt-10 bg-white shadow-xl rounded-xl mb-10">
        <h2 className="text-2xl font-bold text-[#1E5631] mb-6">
          Bill of Quantities (BOQ)
        </h2>

        <h3 className="text-xl font-semibold text-[#1E5631] mb-3">
          BILL No. 1: PRELIMINARIES
        </h3>

        <table className="w-full border border-gray-300 rounded-xl mb-6">
          <thead className="bg-[#1E5631] text-white">
            <tr>
              <th className="p-3 border">S/N</th>
              <th className="p-3 border">Description</th>
              <th className="p-3 border">Amount (₦)</th>
            </tr>
          </thead>
          <tbody>
            {[
              "Plant, tools and vehicles",
              "Local authority fees",
              "Scaffolding",
              "Lighting and power for the works",
              "Temporary shed for contractor",
              "Cleaning the works, etc.",
              "Insurance against injury to persons and property",
              "Temporary fencing, hoardings, guardrails, etc.",
              "Progress photographs",
            ].map((item, index) => (
              <tr key={index} className="border">
                <td className="p-3 border text-center">{index + 1}</td>
                <td className="p-3 border">{item}</td>
                <td className="p-3 border text-center">—</td>
              </tr>
            ))}

            <tr className="font-bold bg-gray-100">
              <td className="p-3 border text-center" colSpan="2">
                Subtotal for Preliminaries
              </td>
              <td className="p-3 border text-center">₦25,126,969.50</td>
            </tr>
          </tbody>
        </table>

        {/* General Summary */}
        <h3 className="text-xl font-semibold text-[#1D4D4F] mb-3">
          General Summary
        </h3>

        <table className="w-full border border-gray-300 rounded-xl mb-10">
          <thead className="bg-[#1E5631] text-white">
            <tr>
              <th className="p-3 border">Description</th>
              <th className="p-3 border">Amount (₦)</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border">
              <td className="p-3 border">Preliminaries</td>
              <td className="p-3 border text-center">25,126,969.50</td>
            </tr>

            <tr className="border">
              <td className="p-3 border">Mosque & Missionary House</td>
              <td className="p-3 border text-center">600,079,390.00</td>
            </tr>

            <tr className="border">
              <td className="p-3 border">Solar Inverter System & Installation</td>
              <td className="p-3 border text-center">45,580,000.00</td>
            </tr>

            <tr className="border">
              <td className="p-3 border">FG Wilson Soundproof Generator Set</td>
              <td className="p-3 border text-center">120,500,000.00</td>
            </tr>

            <tr className="bg-gray-100 font-semibold">
              <td className="p-3 border">Subtotal</td>
              <td className="p-3 border text-center">₦791,286,359.50</td>
            </tr>

            <tr className="border">
              <td className="p-3 border">Contingencies (5%)</td>
              <td className="p-3 border text-center">₦39,564,317.96</td>
            </tr>

            <tr className="bg-gray-100 font-semibold">
              <td className="p-3 border">Subtotal</td>
              <td className="p-3 border text-center">₦830,850,677.46</td>
            </tr>

            <tr className="border">
              <td className="p-3 border">VAT (7.5%)</td>
              <td className="p-3 border text-center">₦69,958,800.82</td>
            </tr>

            <tr className="bg-green-100 font-bold text-lg">
              <td className="p-3 border">ESTIMATED CONTRACT SUM</td>
              <td className="p-3 border text-center">₦900,809,478.28</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </section>
  );
};

export default ProjectDetails;
