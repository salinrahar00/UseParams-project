import { useNavigate } from "react-router-dom";

function Cards() {
const navigate = useNavigate();

const cardData = [
{
id: 1,
heading: "Mountain Escape",
subHeading:
"Discover the beauty of majestic mountains and breathtaking landscapes.",
image:
"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",
role: "Adventure",
},
{
id: 2,
heading: "Peaceful Paradise",
subHeading:
"Experience the calm of crystal-clear lakes surrounded by beautiful mountains.",
image:
"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600",
role: "Travel",
},
{
id: 3,
heading: "Enchanted Forest",
subHeading:
"Wander through misty woodland trails and discover the peaceful beauty of nature.",
image:
"https://images.unsplash.com/photo-1448375240586-882707db888b?w=600",
role: "Explorer",
},
];

const handleReadMore = (card) => {
const params = new URLSearchParams();

params.set("heading", card.heading.replaceAll(" ", "_"));
params.set("role", card.role);

navigate(`/blog/${card.id}?${params.toString()}`);

};

return ( <div className="min-h-screen bg-gray-100 px-5 py-12"> <h1 className="mb-10 text-center text-3xl font-bold text-gray-800 sm:text-4xl">
Explore Nature </h1>

  <div className="mx-auto flex max-w-6xl justify-center gap-8">
    {cardData.map((card) => (
      <div
        key={card.id}
        onClick={() => handleReadMore(card)}
        className="group w-full max-w-sm cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      >
        <img
          src={card.image}
          alt={card.heading}
          className="h-56 w-full object-cover"
        />

        <div className="p-5">
          <h2 className="mb-3 text-xl font-bold text-gray-800 transition-colors group-hover:text-green-600">
            {card.heading}
          </h2>

          <p className="mb-5 leading-6 text-gray-600">
            {card.subHeading}
          </p>

          <span className="inline-block rounded-lg bg-green-600 px-5 py-2 font-medium text-white transition-colors group-hover:bg-green-700">
            Read More →
          </span>
        </div>
      </div>
    ))}
  </div>
</div>

);
}

export default Cards;
