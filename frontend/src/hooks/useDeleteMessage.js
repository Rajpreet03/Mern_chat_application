import { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";

const useDeleteMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages } = useConversation();

  const deleteMessage = async (messageId) => {
    try {
      setLoading(true);

      // Correct backend URL, replace localhost:3000 with your actual backend URL
      const res = await fetch(
        `http://localhost:3000/api/messages/delete/${messageId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Ensure credentials (cookies, tokens) are included
        }
      );

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to delete the message");
      }

      // Remove the deleted message from the current conversation
      setMessages(messages.filter((msg) => msg._id !== messageId));

      toast.success("Message deleted successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { deleteMessage, loading };
};

export default useDeleteMessage;
