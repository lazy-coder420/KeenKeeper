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
  Clock3,
} from "lucide-react";
import { useToast, ToastContainer } from "../../../components/Toast";

export default function FriendDetailsPage() {
  const { id } = useParams();
  const { friends, addTimelineEntry } = useFriend();
  const { toast, showToast } = useToast();

  const friend = friends.find((f) => f.id === parseInt(id));

  if (!friend) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Friend not found</h1>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "overdue":
        return "bg-red-500 text-white";
      case "almost due":
        return "bg-yellow-500 text-white";
      case "on-track":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-400 text-white";
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
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <ToastContainer toast={toast} />

      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="text-blue-600 font-medium hover:underline mb-6 inline-block"
        >
          ← Back to Friends
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT SIDE */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow p-8 text-center">
              <div className="flex justify-center">
                <Image
                  src={friend.picture}
                  alt={friend.name}
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                />
              </div>

              <h1 className="text-4xl font-bold mt-4">
                {friend.name}
              </h1>

              <span
                className={`inline-block mt-4 px-5 py-2 rounded-full font-semibold ${getStatusColor(
                  friend.status
                )}`}
              >
                {friend.status}
              </span>

              <div className="flex justify-center gap-3 mt-4 flex-wrap">
                {friend.tags.slice(0, 2).map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-green-100 text-green-700 border border-green-400 px-4 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-500 italic mt-6 text-lg leading-8">
                {friend.bio}
              </p>

              <p className="text-gray-500 mt-6 text-lg">
                {friend.email}
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <button className="w-full bg-white rounded-xl shadow py-4 flex justify-center items-center gap-3 text-xl font-semibold hover:bg-gray-50">
              <Clock3 size={22} />
              Snooze 2 Weeks
            </button>

            <button className="w-full bg-white rounded-xl shadow py-4 flex justify-center items-center gap-3 text-xl font-semibold hover:bg-gray-50">
              <Archive size={22} />
              Archive
            </button>

            <button className="w-full bg-white rounded-xl shadow py-4 flex justify-center items-center gap-3 text-xl font-semibold text-red-500 hover:bg-red-50">
              <Trash2 size={22} />
              Delete
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-2 space-y-6">
            {/* TOP STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl shadow p-6 text-center">
                <h2 className="text-5xl font-bold text-green-900">
                  {friend.days_since_contact}
                </h2>
                <p className="text-gray-500 text-xl mt-2">
                  Days Since Contact
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow p-6 text-center">
                <h2 className="text-5xl font-bold text-green-900">
                  {friend.goal}
                </h2>
                <p className="text-gray-500 text-xl mt-2">
                  Goal (Days)
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow p-6 text-center">
                <h2 className="text-3xl font-bold text-green-900">
                  {friend.next_due_date}
                </h2>
                <p className="text-gray-500 text-xl mt-2">
                  Next Due
                </p>
              </div>
            </div>

            {/* RELATIONSHIP GOAL */}
            <div className="bg-white rounded-2xl shadow p-6 flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-green-900">
                  Relationship Goal
                </h2>
                <p className="text-xl mt-2">
                  Connect every{" "}
                  <span className="font-bold">
                    {friend.goal} days
                  </span>
                </p>
              </div>

              <button className="border px-6 py-3 rounded-xl font-semibold hover:bg-gray-50">
                <Edit size={20} />
              </button>
            </div>

            {/* QUICK CHECK-IN */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-3xl font-bold text-green-900 mb-6">
                Quick Check-In
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => handleInteraction("Call")}
                  className="border rounded-xl py-4 flex flex-col items-center gap-3 text-xl hover:bg-gray-50"
                >
                  <Phone size={28} />
                  Call
                </button>

                <button
                  onClick={() => handleInteraction("Text")}
                  className="border rounded-xl py-4 flex flex-col items-center gap-3 text-xl hover:bg-gray-50"
                >
                  <MessageSquare size={28} />
                  Text
                </button>

                <button
                  onClick={() => handleInteraction("Video")}
                  className="border rounded-xl py-4 flex flex-col items-center gap-3 text-xl hover:bg-gray-50"
                >
                  <Video size={28} />
                  Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}