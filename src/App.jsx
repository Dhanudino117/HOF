import TravelCard from "./TravelCard";

function App() {
  const destinations = [
    {
      id: 1,
      name: "Bali",
      location: "Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      description:
        "Tropical paradise with beautiful beaches and vibrant culture",
      price: "$1,200",
    },
    {
      id: 2,
      name: "Paris",
      location: "France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      description: "City of love, art, and exquisite cuisine",
      price: "$1,500",
    },
    {
      id: 3,
      name: "Santorini",
      location: "Greece",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
      description: "Stunning sunsets and white-washed architecture",
      price: "$1,800",
    },
    {
      id: 4,
      name: "Tokyo",
      location: "Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      description: "Modern city with rich traditions and amazing food",
      price: "$2,000",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F3F4F6",
        padding: "32px",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "32px",
        }}
      >
        Top Travel Destinations
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "32px",
        }}
      >
        {destinations.map((destination) => (
          <TravelCard key={destination.id} {...destination} />
        ))}
      </div>
    </div>
  );
}

export default App;
