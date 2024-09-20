//icons
import { LuCalendar, LuPlane, LuUmbrella } from "react-icons/lu";

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: LuPlane,
              title: "Best Prices",
              description:
                "We offer unbeatable prices for your dream vacations",
            },
            {
              icon: LuUmbrella,
              title: "Amazing Experiences",
              description: "Unforgettable adventures and relaxation await you",
            },
            {
              icon: LuCalendar,
              title: "Easy Booking",
              description:
                "Simple and fast booking process for your convenience",
            },
          ].map((feature) => (
            <div key={feature.title} className="text-center">
              <feature.icon className="mx-auto h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
