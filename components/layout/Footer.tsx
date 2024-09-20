import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:justify-items-center">
          <AboutUs />
          <QuickLinks />
          <ContactUs />
          <FollowUs />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}

function AboutUs() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">About Us</h3>
      <p className="text-sm">
        HSKtravel is your gateway to unforgettable adventures around the world.
      </p>
    </div>
  );
}

function QuickLinks() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/all-inclusive" aria-label="All Inclusive">
            <span className="hover:text-orange-500">All Inclusive</span>
          </Link>
        </li>
        <li>
          <Link href="/destinations" aria-label="Destinations">
            <span className="hover:text-orange-500">Destinations</span>
          </Link>
        </li>
        <li>
          <Link href="/blog" aria-label="Blog">
            <span className="hover:text-orange-500">Blog</span>
          </Link>
        </li>
        <li>
          <Link href="/contact" aria-label="Contact">
            <span className="hover:text-orange-500">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

function ContactUs() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
      <ul className="space-y-2 text-sm">
        <li className="flex items-center">
          <MapPin className="h-5 w-5 mr-2" aria-hidden="true" />
          <span>Bydgoszcz, Poland</span>
        </li>
        <li className="flex items-center">
          <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
          <a href="tel:+48533234543" className="hover:text-orange-500">
            (+48) 533 234 543
          </a>
        </li>
        <li className="flex items-center">
          <Mail className="h-5 w-5 mr-2" aria-hidden="true" />
          <a href="mailto:info@hsktravel.com" className="hover:text-orange-500">
            info@hsktravel.com
          </a>
        </li>
      </ul>
    </div>
  );
}

function FollowUs() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        <Link
          href="#"
          className="text-white hover:text-orange-500"
          aria-label="Follow us on Facebook"
        >
          <Facebook className="h-6 w-6" />
        </Link>
        <Link
          href="#"
          className="text-white hover:text-orange-500"
          aria-label="Follow us on Twitter"
        >
          <Twitter className="h-6 w-6" />
        </Link>
        <Link
          href="#"
          className="text-white hover:text-orange-500"
          aria-label="Follow us on Instagram"
        >
          <Instagram className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="mt-8 text-center text-sm font-semibold">
      <p>&copy; 2024 HSKtravel. All rights reserved.</p>
    </div>
  );
}
