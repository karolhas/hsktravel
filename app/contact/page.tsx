//components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactInfo from "@/components/section/contact/ContactInfo";
import ContactEmailForm from "@/components/section/contact/ContactEmailForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen px-6 py-12">
        <div className="max-w-5xl mx-auto text-gray-700">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2">
              Do You Need To Get In Touch?
            </h1>
            <p className="text-lg ">Here is how you can simply reach us.</p>
          </div>

          <div className="relative rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <ContactInfo />
              <ContactEmailForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
