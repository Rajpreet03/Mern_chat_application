import React from "react";
import Sidebar from "../component/sidebar/Sidebar";
import MessageContainer from "../component/messages/MessageContainer";

const Home = () => {
  const backgroundImageUrl =
    "https://as1.ftcdn.net/v2/jpg/03/27/51/56/1000_F_327515607_Hcps04aaEc7Ki43d1XZPxwcv0ZaIaorh.jpg";

  return (
    <div
      className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-800"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
