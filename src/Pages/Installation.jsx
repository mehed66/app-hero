import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStorageData } from "../LocalStorge/loaclSroge";
import InstallApp from "./InstallApp";

const Installation = () => {
  const data = useLoaderData();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const allAppsData = getStorageData();
    const convertedAllData = allAppsData.map((id) => parseInt(id));
    const filteredCards = data.filter((card) =>
      convertedAllData.includes(card.id)
    );
    setCards(filteredCards);
  }, [data]);

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8">
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black">
          Our All Applications
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mt-2">
          Explore all apps developed by us. We code for millions.
        </p>
        <h2 className="text-base sm:text-lg font-semibold mt-3">
          Installed Apps: <span className="text-green-600">{cards.length}</span>
        </h2>
      </div>

      <div
        className="space-y-7 md:space-y-3 "
      >
        {cards.map((card) => (
          <InstallApp key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Installation;
