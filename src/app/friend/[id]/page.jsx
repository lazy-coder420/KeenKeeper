"use client";

import { useFriend } from "../../../context/FriendContext";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageSquare,
  Video,
  Archive,
  Trash2,
  Edit,
} from "lucide-react";
import { useToast, ToastContainer } from "../../../components/Toast";

export default function FriendDetailsPage() {
  const { id } = useParams();
  const { friends, addTimelineEntry } = useFriend();
  const friend = friends.find((f) => f.id === parseInt(id));
  const { toast, showToast } = useToast();

  if (!friend) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Friend not found
          </h1>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
          >
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "overdue":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "almost due":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "on-track":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const handleInteraction = (type) => {
    addTimelineEntry(type, friend.name);
    const messages = {
      Call: `📞 Called ${friend.name}`,
      Text: `💬 Texted ${friend.name}`,
      Video: `🎥 Video call with ${friend.name}`,
    };
    showToast(messages[type], "success");
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <ToastContainer toast={toast} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 mb-8"
        >
          ← Back to Friends
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Friend Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              {/* Profile Picture */}
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                <Image
                  src={friend.picture}
                  alt={friend.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {friend.name}
              </h1>

              {/* Status */}
              <div className="mb-4">
                <span
                  className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                    friend.status
                  )}`}
                >
                  {friend.status.charAt(0).toUpperCase() +
                    friend.status.slice(1)}
                </span>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {friend.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  About
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {friend.bio}
                </p>
              </div>

              {/* Email */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </h3>
                <a
                  href={`mailto:${friend.email}`}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 text-sm"
                >
                  {friend.email}
                </a>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 font-semibold transition">
                  ⏰ Snooze 2 Weeks
                </button>
                <button className="w-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 font-semibold transition">
                  <Archive className="inline mr-2" size={18} />
                  Archive
                </button>
                <button className="w-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 py-2 px-4 rounded-lg hover:bg-red-200 dark:hover:bg-red-800 font-semibold transition">
                  <Trash2 className="inline mr-2" size={18} />
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Days Since Contact
                </h3>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {friend.days_since_contact}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Goal
                </h3>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {friend.goal}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  days target
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Next Due
                </h3>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  {friend.next_due_date}
                </p>
              </div>
            </div>

            {/* Goal Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Relationship Goal
                </h2>
                <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                  <Edit size={20} />
                </button>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Keep in touch every {friend.goal} days
              </p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.min(
                      (friend.days_since_contact / friend.goal) * 100,
                      100
                    )}%`,
                  }}
                />
              </div>
            </div>

            {/* Quick Check-In Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Quick Check-In
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => handleInteraction("Call")}
                  className="flex flex-col items-center gap-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 py-4 px-4 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition font-semibold"
                >
                  <Phone size={24} />
                  <span>Call</span>
                </button>
                <button
                  onClick={() => handleInteraction("Text")}
                  className="flex flex-col items-center gap-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-4 px-4 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition font-semibold"
                >
                  <MessageSquare size={24} />
                  <span>Text</span>
                </button>
                <button
                  onClick={() => handleInteraction("Video")}
                  className="flex flex-col items-center gap-2 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 py-4 px-4 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800 transition font-semibold"
                >
                  <Video size={24} />
                  <span>Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}