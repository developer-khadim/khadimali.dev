import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  Calendar,
  Trash2,
} from "lucide-react";
import { FiLoader } from "react-icons/fi";
import axios from "axios";
import { MESSAGE_API_ENDPOINT } from "../../../constant/data";
import useGetData from "../../../hooks/useGetData";
import toast from "react-hot-toast";
import ReusableBtn from "../Components/ReusableBtn";

const AllMessages = () => {
  const [token] = useState(localStorage.getItem("token")); // Fixed token initialization
  const { data, loading } = useGetData(
    `${MESSAGE_API_ENDPOINT}/get-messages`,
    token
  );
  const [messages, setMessages] = useState([]);
  const [deleting, setDeleting] = useState(null);

  // Update messages state when data changes
  useEffect(() => {
    if (data?.messages) {
      setMessages(data.messages);
    }
  }, [data]);

  // Format the createdAt date to a readable format
  const formatDate = (dateString) => {
    return format(new Date(dateString), "MMMM d, yyyy, h:mm a");
  };

  // Handle message deletion
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message? This action cannot be undone."
    );
    if (!confirmDelete) return;

    setDeleting(id);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(`${MESSAGE_API_ENDPOINT}/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(res.data.message);
      // Remove the deleted message from the state
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message._id !== id)
      );
    } catch (error) {
      console.error("Error deleting message:", error);
      toast.error("Failed to delete message. Please try again.");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <section>
      <h1 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary mb-8">
        All Messages
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <FiLoader className="w-10 h-10 text-blue-500 animate-spin" />
        </div>
      ) : !messages || messages.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400 py-12">
          <p>No messages found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((message) => (
            <div
              key={message._id}
              className="
               relative flex flex-col text-sm rounded-lg border-2 border-indigo-600
    shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)]
    dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)]
    transition-all duration-300 ease-in-out select-none
    dark:bg-gray-800 dark:text-white bg-white p-5"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <User size={20} className="text-blue-500" />
                  {message.name}
                </h3>

                <ReusableBtn
                  onClick={() => handleDelete(message._id)}
                  icon={
                    deleting === message._id ? (
                      <FiLoader className="w-4 h-4 animate-spin" />
                    ) : (
                      <Trash2 size={16} />
                    )
                  }
                  isMr={false}
                  titleText="Delete"
                  disabled={deleting === message._id}
                />
              </div>

              {/* Card Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-blue-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email: {message.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-blue-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Phone: {message.phone || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageSquare size={18} className="text-blue-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {message.message}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-blue-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Date: {formatDate(message.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AllMessages;
