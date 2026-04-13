"use client";

import { useFriend } from "../../context/FriendContext";
import { useState, useMemo } from "react";
import { Phone, MessageSquare, Video, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function TimelinePage() {
  const { timeline } = useFriend();

  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false);

  const getIcon = (type) => {
    switch (type.toLowerCase()) {
      case "call":
        return <Phone size={20} className="text-green-600" />;
      case "text":
        return <MessageSquare size={20} className="text-blue-600" />;
      case "video":
        return <Video size={20} className="text-purple-600" />;
      default:
        return null;
    }
  };

  const filteredTimeline = useMemo(() => {
    if (filter === "all") return timeline;
    return timeline.filter(
      (entry) => entry.type.toLowerCase() === filter.toLowerCase()
    );
  }, [timeline, filter]);

  const sortedTimeline = useMemo(() => {
    return [...filteredTimeline].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }, [filteredTimeline]);

  const filterOptions = ["all", "call", "text", "video"];

  

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-2xl mx-auto px-4">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Timeline
          </h1>
        </div>

        {/* Dropdown Filter */}
        <div className="relative mb-8 w-64">
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex justify-between items-center px-4 py-2 bg-white dark:bg-gray-800 border rounded-lg shadow-sm"
          >
            <span className="capitalize">
              {filter === "all" ? "Filter timeline" : filter}
            </span>
            <ChevronDown size={18} />
          </button>

          {open && (
            <div className="absolute mt-2 w-full bg-white dark:bg-gray-800 border rounded-lg shadow-lg z-10">
              {filterOptions.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setFilter(item);
                    setOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer capitalize"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Timeline */}
        {sortedTimeline.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {filter === "all"
                ? "No interactions yet."
                : `No ${filter} interactions.`}
            </p>
            <Link href="/" className="text-blue-600 font-semibold">
              Go to Friends
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedTimeline.map((entry) => (
              <div
                key={entry.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-start gap-4"
              >
                {/* Icon */}
                <div className="mt-1">{getIcon(entry.type)}</div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {entry.date}
                  </p>
                </div>

                {/* Badge */}
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    entry.type === "Call"
                      ? "bg-green-100 text-green-800"
                      : entry.type === "Text"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {entry.type}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}