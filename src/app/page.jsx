"use client";

import { useFriend } from "../context/FriendContext";
import FriendCard from "../components/FriendCard";
import Banner from "../components/Banner";
import { Loader } from "../components/Loader";
import { useEffect, useState } from "react";

export default function Home() {
  const { friends } = useFriend();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Banner />
      
      {/* Friends Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Friends to Keep Close
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {friends.length} friends • Stay connected and never miss important moments
          </p>
        </div>

        {friends.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No friends added yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}