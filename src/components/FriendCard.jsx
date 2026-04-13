"use client";

import Link from "next/link";
import Image from "next/image";

const FriendCard = ({ friend }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "overdue":
        return "bg-red-100 text-red-800 border-red-300";
      case "almost due":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "on-track":
        return "bg-green-100 text-green-800 border-green-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getStatusBgClass = (status) => {
    switch (status) {
      case "overdue":
        return "bg-red-500";
      case "almost due":
        return "bg-yellow-500";
      case "on-track":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Link href={`/friend/${friend.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer hover:scale-105 transform">
        {/* Image Container */}
        <div className="relative h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
          <Image
            src={friend.picture}
            alt={friend.name}
            fill
            className="object-cover"
          />
          {/* Status Badge */}
          <div
            className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
              friend.status
            )}`}
          >
            {friend.status.charAt(0).toUpperCase() +
              friend.status.slice(1).toLowerCase()}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Name */}
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {friend.name}
          </h3>

          {/* Days Since Contact */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            <span className="font-semibold">{friend.days_since_contact}</span>{" "}
            days since contact
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {friend.tags.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
            {friend.tags.length > 2 && (
              <span className="text-xs bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">
                +{friend.tags.length - 2}
              </span>
            )}
          </div>

          {/* Status Indicator (Bottom Bar) */}
          <div
            className={`w-full h-2 rounded-full ${getStatusBgClass(
              friend.status
            )}`}
          />
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;