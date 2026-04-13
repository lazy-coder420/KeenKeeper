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
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Subtitle */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Keep Your Friendships Strong
          </h1>
          <p className="text-lg sm:text-xl  mb-8">
            Never lose touch with the people who matter most
          </p>
          <Link
            href="/timeline"
            className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold bg-[#244D3f] transition duration-200"
          >
            <Plus size={20} />
            View Timeline
          </Link>
        </div>







    {/* Summary Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  
  {/* Total Friends */}
  <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
    <p className="text-4xl font-bold text-[#1a2e2a] mb-2">
      {friends.length}
    </p>
    <p className="text-slate-500 text-sm font-medium">
      Total Friends
    </p>
  </div>

  {/* On Track */}
  <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
    <p className="text-4xl font-bold text-[#1a2e2a] mb-2">
      {onTrackCount}
    </p>
    <p className="text-slate-500 text-sm font-medium">
      On Track
    </p>
  </div>

  {/* Need Attention (Formerly Overdue) */}
  <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
    <p className="text-4xl font-bold text-[#1a2e2a] mb-2">
      {overdueCount}
    </p>
    <p className="text-slate-500 text-sm font-medium">
      Need Attention
    </p>
  </div>

  {/* Avg Days */}
  <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
    <p className="text-4xl font-bold text-[#1a2e2a] mb-2">
      {avgDaysBetweenContact}
    </p>
    <p className="text-slate-500 text-sm font-medium">
      Interactions This Month
    </p>
  </div>
  
</div>












      </div>
    </section>
  );
}
