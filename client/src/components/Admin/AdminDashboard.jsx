import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Homepage/Navbar";

const AdminDashboard = () => {
  const [donations, setDonations] = useState([]);
  const [filteredDonations, setFilteredDonations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adminKey, setAdminKey] = useState("");

  const DONATION_TARGET = 500000; // Example target for progress bar

  // Prompt for admin key
  useEffect(() => {
    const key = window.prompt("Enter admin key to access dashboard:");
    if (!key) setError("Admin key is required to access dashboard");
    else setAdminKey(key);
  }, []);

  // Fetch donations
  const fetchDonations = async () => {
    if (!adminKey) return;
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        "http://localhost:5000/api/admin/mosque/fund/donations",
        { headers: { "x-admin-key": adminKey } }
      );
      setDonations(response.data || []);
      setFilteredDonations(response.data || []);
    } catch (err) {
      setError(
        err.response?.data?.message || "Unauthorized or failed to fetch donations"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, [adminKey]);

  // Filter donations (use `name` which matches your schema; use fallbacks)
  useEffect(() => {
    let filtered = donations;

    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (d) =>
          (d.name || d.donorName || "")
            .toString()
            .toLowerCase()
            .includes(q) ||
          (d.email || "")
            .toString()
            .toLowerCase()
            .includes(q)
      );
    }

    if (startDate)
      filtered = filtered.filter((d) => new Date(d.createdAt) >= new Date(startDate));
    if (endDate)
      filtered = filtered.filter((d) => new Date(d.createdAt) <= new Date(endDate));

    setFilteredDonations(filtered);
  }, [search, startDate, endDate, donations]);

  // Delete donation
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this donation?")) return;
    try {
      await axios.delete(
        `http://localhost:5000/api/admin/mosque/fund/donations/${id}`,
        { headers: { "x-admin-key": adminKey } }
      );
      fetchDonations();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete donation");
    }
  };

  // Total donation amount and progress
  const totalAmount = donations.reduce((sum, d) => sum + (d.amount || 0), 0);
  const progress = Math.min((totalAmount / DONATION_TARGET) * 100, 100);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#1E5631] mb-4 md:mb-0">Admin Dashboard</h1>
          <p className="text-gray-600 text-sm">
            {donations.length} donation{donations.length !== 1 ? "s" : ""}
          </p>
        </header>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-500">Total Donations</p>
            <p className="text-2xl font-bold">₦{totalAmount.toLocaleString()}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-500">Number of Donors</p>
            <p className="text-2xl font-bold">{donations.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-500">Progress to Target</p>
            <div className="w-full bg-gray-200 h-4 rounded-full mt-2">
              <div className="bg-green-600 h-4 rounded-full" style={{ width: `${progress}%` }} />
            </div>
            <p className="text-gray-500 text-sm mt-1">{progress.toFixed(1)}%</p>
          </div>
        </div>

        {/* Error */}
        {error && <p className="text-center text-red-500 mb-6">{error}</p>}

        {/* Filters */}
        {!error && (
          <>
            <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
              <input
                type="text"
                placeholder="Search by name or email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="p-3 rounded-lg border border-gray-300 flex-1 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Donations Table */}
            <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
              {loading ? (
                <p className="text-center text-gray-500 p-6">Loading donations...</p>
              ) : filteredDonations.length === 0 ? (
                <p className="text-center text-gray-500 p-6">No donations found</p>
              ) : (
                <table className="w-full table-auto border-collapse">
                  <thead className="bg-indigo-600 text-white rounded-t-lg">
                    <tr>
                      <th className="p-3 text-left">Donor Name</th>
                      <th className="p-3 text-left">Email</th>
                      <th className="p-3 text-left">Amount (₦)</th>
                      <th className="p-3 text-left">Message</th>
                      <th className="p-3 text-left">Date</th>
                      <th className="p-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDonations.map((donation) => (
                      <tr key={donation._id} className="border-b hover:bg-gray-50 transition">
                        <td className="p-3 font-medium">{donation.name || donation.donorName || "—"}</td>
                        <td className="p-3 text-gray-700">{donation.email || "—"}</td>
                        <td className="p-3 font-semibold text-green-600">₦{donation.amount ?? 0}</td>
                        <td className="p-3 text-gray-600">{donation.message || "—"}</td>
                        <td className="p-3 text-gray-500 text-sm">{donation.createdAt ? new Date(donation.createdAt).toLocaleString() : "—"}</td>
                        <td className="p-3">
                          <button
                            onClick={() => handleDelete(donation._id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
