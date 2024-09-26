import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";

const Conversations = () => {
  const { loading, conversations, error } = useGetConversations();

  // Ensure conversations is always an array
  const conversationsArray = Array.isArray(conversations) ? conversations : [];

  if (error) {
    return <p>Error fetching conversations: {error.message}</p>;
  }

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        conversationsArray.map((conversation, index) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIndex={index === conversationsArray.length - 1}
          />
        ))
      )}

      {/* Display message if no conversations are available */}
      {!loading && conversationsArray.length === 0 && (
        <p>No conversations available.</p>
      )}
    </div>
  );
};

export default Conversations;
