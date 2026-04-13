"use client";

import Link from "next/link";
import { useFriend } from "../context/FriendContext";
import { Plus, Users, Calendar, TrendingUp } from "lucide-react";

export default function Banner() {
  const { friends, timeline } = useFriend();

  const overdueCount = friends.filter((f) => f.status === "overdue").length;
  const onTrackCount = friends.filter((f) => f.status === "on-track").length;
  const totalInteractions = timeline.length;
  const avgDaysBetweenContact =
    friends.length > 0
      ? Math.round(
          friends.reduce((sum, f) => sum + f.days_since_contact, 0) /
            friends.length
        )
      : 0;

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Subtitle */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Keep Your Friendships Strong
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8">
            Never lose touch with the people who matter most
          </p>
          <Link
            href="/timeline"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-200"
          >
            <Plus size={20} />
            View Timeline
          </Link>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Friends */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">
                  Total Friends
                </p>
                <p className="text-3xl font-bold mt-2">{friends.length}</p>
              </div>
              <Users size={40} className="text-blue-200" />
            </div>
          </div>

          {/* On Track */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">On Track</p>
                <p className="text-3xl font-bold mt-2">{onTrackCount}</p>
              </div>
              <TrendingUp size={40} className="text-green-200" />
            </div>
          </div>

          {/* Overdue */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Overdue</p>
                <p className="text-3xl font-bold mt-2">{overdueCount}</p>
              </div>
              <Calendar size={40} className="text-red-200" />
            </div>
          </div>

          {/* Avg Days */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">
                  Avg Days Since Contact
                </p>
                <p className="text-3xl font-bold mt-2">{avgDaysBetweenContact}</p>
              </div>
              <Calendar size={40} className="text-yellow-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
