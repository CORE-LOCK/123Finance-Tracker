"use client";

import { useState } from "react";
import axios from "axios";

function AddInvestment() {
  const initialdata = {
    investmentName: "",
    amount: "",
    premiumFrequency: "monthly",
    startDate: "",
    duration: "",
    reminderDate: "",
    endDate: "",
    reminderDaysBefore: "",
    status: "active",
    email: "",
  }
  const [formData, setFormData] = useState(initialdata);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/add-investment',formData);
      setFormData(initialdata);     
      alert("form data submitted");
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#f8f8fc] px-6 py-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1d2535]">
            Add Investment
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Add your investment and configure premium reminders.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        >

          {/* Investment Name */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Investment Name
            </label>

            <input
              type="text"
              name="investmentName"
              value={formData.investmentName}
              onChange={handleChange}
              placeholder="LIC Policy"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
            />
          </div>

          {/* Amount + Frequency */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Amount
              </label>

              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="5000"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Premium Frequency
              </label>

              <select
                name="premiumFrequency"
                value={formData.premiumFrequency}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
              >
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="half-yearly">Half-Yearly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>

          </div>

          {/* Start Date + Duration */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Start Date
              </label>

              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Duration (Years)
              </label>

              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="5"
                min="1"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

          </div>

          {/* Reminder Date + End Date */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Reminder Date
              </label>

              <input
                type="date"
                name="reminderDate"
                value={formData.reminderDate}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                End Date
              </label>

              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

          </div>

          {/* Reminder Days + Status */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Reminder Days Before
              </label>

              <input
                type="number"
                name="reminderDaysBefore"
                value={formData.reminderDaysBefore}
                onChange={handleChange}
                placeholder="3"
                min="0"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
              />

              <p className="mt-1 text-xs text-gray-500">
                Example: 3 means reminder starts 3 days before the premium date.
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
              >
                <option value="active">Active</option>
                <option value="completed">Completed</option>
              </select>
            </div>

          </div>

          {/* Email */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
            />
          </div>

          {/* Submit */}
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-[#050914] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#171b27]"
            >
              Add Investment
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddInvestment;