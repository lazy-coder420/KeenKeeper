"use client";

import { createContext, useContext, useEffect, useState } from "react";
import friendsData from "../data/friends.json";

const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    setFriends(friendsData);

    const saved =
      JSON.parse(localStorage.getItem("timeline")) || [];

    setTimeline(saved);
  }, []);

  const addTimelineEntry = (type, friendName) => {
    const newEntry = {
      id: Date.now(),
      type,
      title: `${type} with ${friendName}`,
      date: new Date().toLocaleDateString(),
    };

    const updated = [newEntry, ...timeline];

    setTimeline(updated);

    localStorage.setItem(
      "timeline",
      JSON.stringify(updated)
    );
  };
  

  return (
    <FriendContext.Provider
      value={{
        friends,
        timeline,
        addTimelineEntry,
      }}
    >
      {children}
    </FriendContext.Provider>
  );
};

export const useFriend = () => useContext(FriendContext);