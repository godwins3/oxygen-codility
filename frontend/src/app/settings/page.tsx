"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import Sidebar from "@/components/Sidebar";

const Settings = () => {
  // Tabs state
  const [activeTab, setActiveTab] = useState<"general" | "notification">("general");

  // Notification settings state
  type NotificationSettings = {
    taskUpdate: boolean;
    taskDeadline: boolean;
    mentorHelp: boolean;
  };

  const [notifications, setNotifications] = useState<NotificationSettings>({
    taskUpdate: false,
    taskDeadline: false,
    mentorHelp: false,
  });

  const handleToggle = (key: keyof NotificationSettings) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-semibold text-gray-800">Settings</h1>

        {/* Tabs */}
        <div className="mt-6 border-b flex">
          <button
            className={`py-2 px-6 ${activeTab === "general" ? "border-b-2 border-blue-600 text-blue-600 font-semibold" : "text-gray-600"}`}
            onClick={() => setActiveTab("general")}
          >
            General
          </button>
          <button
            className={`py-2 px-6 ${activeTab === "notification" ? "border-b-2 border-blue-600 text-blue-600 font-semibold" : "text-gray-600"}`}
            onClick={() => setActiveTab("notification")}
          >
            Notification
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6 bg-white shadow p-6 rounded-lg">
          {activeTab === "general" ? (
            <div>
              {/* Language Setting */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-1">Language</label>
                <select className="w-full p-2 border rounded">
                  <option>English (Default)</option>
                  <option>French</option>
                  <option>Spanish</option>
                </select>
              </div>

              {/* Timezone Setting */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-1">Timezone</label>
                <select className="w-full p-2 border rounded">
                  <option>UTC</option>
                  <option>GMT</option>
                  <option>PST</option>
                </select>
              </div>

              {/* 24-Hour or 12-Hour Format */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-1">Time Format</label>
                <div className="flex space-x-4">
                  <button className="border p-2 rounded w-24 text-center bg-blue-600 text-white">
                    24 Hours
                  </button>
                  <button className="border p-2 rounded w-24 text-center">12 Hours</button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {/* Notification Toggles */}
              {Object.keys(notifications).map((key) => (
                <div key={key} className="flex justify-between items-center py-2">
                  <span className="text-gray-700 font-medium">
                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                  </span>
                  <Switch
                    checked={notifications[key as keyof NotificationSettings]}
                    onCheckedChange={() => handleToggle(key as keyof NotificationSettings)}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Save Button */}
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md">Save Changes</button>
        </div>
      </main>
    </div>
  );
};

export default Settings;
