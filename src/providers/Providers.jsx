"use client";

import { FriendProvider } from "../context/FriendContext";

const Providers = ({ children }) => {
  return <FriendProvider>{children}</FriendProvider>;
};

export default Providers;