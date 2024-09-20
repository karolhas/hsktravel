"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-orange-50 py-16 sm:py-24">
      <BackgroundSVG />
      <div className="relative mx-auto max-w-2xl px-5 lg:px-8 z-10 text-center">
        <NewsletterHeader />
        <SignupForm
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </div>
      <FooterWaveSVG />
    </section>
  );
}

function BackgroundSVG() {
  return (
    <div className="absolute inset-0">
      <svg
        className="absolute left-0 top-0 h-full w-48 text-orange-100 transform -translate-x-1/2"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
    </div>
  );
}

function NewsletterHeader() {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">
        Embark on Your Next Adventure!
      </h2>
      <p className="mt-6 leading-8 text-gray-700">
        Sign up for our newsletter and be the first to know about exclusive
        travel deals, hidden gems, and insider tips for your dream destinations.
      </p>
    </>
  );
}

interface SignupFormProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

function SignupForm({ email, setEmail, handleSubmit }: SignupFormProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
    >
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="min-w-0 flex-auto rounded-md border-0 bg-white px-5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-orange-500 focus:ring-2 focus:ring-inset focus:ring-orange-500"
      />
      <Button
        type="submit"
        className="flex-none rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
      >
        Subscribe
      </Button>
    </form>
  );
}

function FooterWaveSVG() {
  return (
    <div className="absolute inset-x-0 bottom-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#ffedd5"
          fillOpacity="1"
          d="M0,64L360,256L720,128L1080,128L1440,224L1440,320L1080,320L720,320L360,320L0,320Z"
        />
      </svg>
    </div>
  );
}
