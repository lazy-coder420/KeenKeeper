"use client";

import { useFriend } from "../../context/FriendContext";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { useMemo } from "react";

export default function StatsPage() {
  const { timeline } = useFriend();

  const chartData = useMemo(() => {
    const calls = timeline.filter((t) => t.type === "Call").length;
    const texts = timeline.filter((t) => t.type === "Text").length;
    const videos = timeline.filter((t) => t.type === "Video").length;

    return [
      { name: "Calls", value: calls },
      { name: "Texts", value: texts },
      { name: "Videos", value: videos },
    ].filter((item) => item.value > 0);
  }, [timeline]);

  const COLORS = ["#10b981", "#3b82f6", "#a855f7"];

  const totalInteractions = timeline.length;
  const mostCommonType = useMemo(() => {
    if (chartData.length === 0) return "None";
    return chartData.reduce((max, current) =>
      current.value > max.value ? current : max
    ).name;
  }, [chartData]);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Friendship Analytics
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Discover your communication patterns with friends
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Total Interactions
            </h3>
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              {totalInteractions}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Most Common
            </h3>
            <p className="text-4xl font-bold text-purple-600 dark:text-purple-400">
              {mostCommonType}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Interaction Types
            </h3>
            <p className="text-4xl font-bold text-green-600 dark:text-green-400">
              {chartData.length}
            </p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Interaction Breakdown
          </h2>

          {chartData.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                No interactions recorded yet. Start by checking in with your friends!
              </p>
            </div>
          ) : (
            <div className="w-full h-96">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value, percent }) =>
                      `${name}: ${value} (${(percent * 100).toFixed(0)}%)`
                    }
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => `${value} interactions`}
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "none",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                  <Legend
                    wrapperStyle={{
                      paddingTop: "20px",
                    }}
                    formatter={(value) => (
                      <span style={{ color: "#fff" }}>{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* Interaction Details */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { type: "Calls", icon: "📞", color: "bg-green-100 dark:bg-green-900", textColor: "text-green-800 dark:text-green-200" },
            { type: "Texts", icon: "💬", color: "bg-blue-100 dark:bg-blue-900", textColor: "text-blue-800 dark:text-blue-200" },
            { type: "Videos", icon: "🎥", color: "bg-purple-100 dark:bg-purple-900", textColor: "text-purple-800 dark:text-purple-200" },
          ].map((item) => {
            const count = timeline.filter((t) => t.type === item.type).length;
            return (
              <div
                key={item.type}
                className={`${item.color} rounded-lg shadow-lg p-6 text-center`}
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className={`text-lg font-semibold ${item.textColor} mb-2`}>
                  {item.type}
                </h3>
                <p className={`text-3xl font-bold ${item.textColor}`}>
                  {count}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}