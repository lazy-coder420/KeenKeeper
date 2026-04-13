"use client";

import { useState, useCallback } from "react";
import { X } from "lucide-react";

export const useToast = () => {
  const [toast, setToast] = useState(null);

  const showToast = useCallback(
    (message, type = "success", duration = 3000) => {
      setToast({ message, type, id: Date.now() });
      if (duration > 0) {
        setTimeout(() => setToast(null), duration);
      }
    },
    []
  );

  return { toast, showToast };
};

export const Toast = ({ message, type, onClose, id }) => {
  const bgColor = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    warning: "bg-yellow-500",
  }[type] || "bg-gray-500";

  return (
    <div
      className={`${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center justify-between`}
    >
      <span>{message}</span>
      <button onClick={onClose} className="ml-4">
        <X size={18} />
      </button>
    </div>
  );
};

export const ToastContainer = ({ toast }) => {
  if (!toast) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slide-in">
      <Toast
        message={toast.message}
        type={toast.type}
        id={toast.id}
        onClose={() => {}}
      />
    </div>
  );
};
