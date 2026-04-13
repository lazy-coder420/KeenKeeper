"use client";

import { useFriend } from "../../context/FriendContext";
import { useState, useMemo } from "react";
import { Phone, MessageSquare, Video } from "lucide-react";
import Link from "next/link";

export default function TimelinePage() {
  const { timeline } = useFriend();
  const [filter, setFilter] = useState("all");

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
    return timeline.filter((entry) =>
      entry.type.toLowerCase() === filter.toLowerCase()
    );
  }, [timeline, filter]);

  const sortedTimeline = useMemo(() => {
    return [...filteredTimeline].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }, [filteredTimeline]);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Timeline
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track your interactions with friends
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            All ({timeline.length})
          </button>
          <button
            onClick={() => setFilter("call")}
            className={`px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${
              filter === "call"
                ? "bg-green-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            <Phone size={16} />
            Calls ({timeline.filter((t) => t.type === "Call").length})
          </button>
          <button
            onClick={() => setFilter("text")}
            className={`px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${
              filter === "text"
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            <MessageSquare size={16} />
            Texts ({timeline.filter((t) => t.type === "Text").length})
          </button>
          <button
            onClick={() => setFilter("video")}
            className={`px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${
              filter === "video"
                ? "bg-purple-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            <Video size={16} />
            Videos ({timeline.filter((t) => t.type === "Video").length})
          </button>
        </div>

        {/* Timeline Entries */}
        {sortedTimeline.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {filter === "all"
                ? "No interactions yet. Start by checking in with a friend!"
                : `No ${filter} interactions yet.`}
            </p>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 font-semibold"
            >
              Go to Friends
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedTimeline.map((entry, idx) => (
              <div
                key={entry.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition flex items-start gap-4"
              >
                {/* Icon */}
                <div className="flex-shrink-0 mt-1">
                  {getIcon(entry.type)}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {entry.date}
                  </p>
                </div>

                {/* Type Badge */}
                <div className="flex-shrink-0">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      entry.type === "Call"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : entry.type === "Text"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                    }`}
                  >
                    {entry.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}