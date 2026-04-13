"use client";

import Link from "next/link";
import Image from "next/image";

const statusMap = {
  overdue: {
    badge: "bg-red-500 text-white",
  },
  "almost due": {
    badge: "bg-gray-700 text-white",
  },
  "on-track": {
    badge: "bg-orange-500 text-white",
  },
  default: {
    badge: "bg-gray-500 text-white",
  },
};

const FriendCard = ({ friend }) => {
  const status = statusMap[friend.status] || statusMap.default;

  return (
    <Link href={`/friend/${friend.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 text-center cursor-pointer">

        {/* Avatar */}
        <div className="flex justify-center mb-3">
          <div className="w-20 h-20 relative">
            <Image
              src={friend.picture}
              alt={friend.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {friend.name}
        </h3>

        {/* Days */}
        <p className="text-sm text-gray-500 mb-3">
          {friend.days_since_contact} days
        </p>

        {/* Tags */}
        <div className="flex justify-center flex-wrap gap-2 mb-3">
          {friend.tags?.slice(0, 2).map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status */}
        <span
          className={`inline-block px-4 py-1 text-sm rounded-full ${status.badge}`}
        >
          {friend.status}
        </span>
      </div>
    </Link>
  );
};

export default FriendCard;