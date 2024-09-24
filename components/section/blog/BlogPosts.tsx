//images
import peru from "@/public/assets/peru.webp";
import sanfrancisco from "@/public/assets/sanfrancisco.webp";
import japan from "@/public/assets/japan.webp";
import dubai from "@/public/assets/dubai.webp";

export const blogPosts = [
  {
    id: 1,
    date: "2023-09-15",
    image: peru,
    title: "Exploring the Hidden Beaches of Bali",
    location: "Bali, Indonesia",
    text: "Discover secluded paradises and pristine shores on Bali's less-traveled coastal gems.",
    content: (
      <>
        <h1 className="font-semibold text-2xl">Testing blog - h1 tag</h1>
        <p className="mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, enim
          eum accusantium dolorem deserunt labore aliquid, porro dolorum rem
          dolor sequi voluptates nobis explicabo rerum reiciendis facere
          accusamus distinctio excepturi!
        </p>
      </>
    ),
  },
  {
    id: 2,
    date: "2023-09-10",
    image: sanfrancisco,
    title: "A Culinary Journey Through Tokyo",
    location: "Tokyo, Japan",
    text: "Savor the flavors of Tokyo's vibrant food scene, from street eats to Michelin-starred restaurants.",
  },
  {
    id: 3,
    date: "2023-09-05",
    image: japan,
    title: "Hiking the Inca Trail to Machu Picchu",
    location: "Cusco, Peru",
    text: "Experience the breathtaking journey through the Andes to the ancient Incan citadel.",
  },
  {
    id: 4,
    date: "2023-08-30",
    image: dubai,
    title: "Safari Adventure in the Serengeti",
    location: "Serengeti, Tanzania",
    text: "Witness the incredible wildlife and stunning landscapes of Africa's most famous national park.",
  },
];
