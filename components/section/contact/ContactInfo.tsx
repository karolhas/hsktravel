//icons
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <aside className="md:w-1/2 bg-orange-200 p-8 text-gray-700">
      <ContactDetails />
      <OfficeHours />
    </aside>
  );
}

const ContactDetails = () => (
  <>
    <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
    <ul className="space-y-2">
      <ContactDetail icon={<MapPin />} text="Bydgoszcz, Poland" />
      <ContactDetail
        icon={<Phone />}
        text={
          <a href="tel:+48533234543" className="hover:text-orange-500">
            (+48) 533 234 543
          </a>
        }
      />
      <ContactDetail
        icon={<Mail />}
        text={
          <a href="mailto:info@hsktravel.com" className="hover:text-orange-500">
            info@hsktravel.com
          </a>
        }
      />
    </ul>
  </>
);

const ContactDetail = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: React.ReactNode;
}) => (
  <li className="flex items-center">
    {icon}
    <span className="ml-2">{text}</span>
  </li>
);

const OfficeHours = () => (
  <div className="mt-12">
    <h3 className="text-xl font-semibold mb-2">Our Office Hours</h3>
    <ul className="space-y-2">
      <li>Monday - Friday: 9:00 - 18:00</li>
      <li>Saturday: 10:00 - 14:00</li>
      <li>Sunday: Closed</li>
    </ul>
  </div>
);
