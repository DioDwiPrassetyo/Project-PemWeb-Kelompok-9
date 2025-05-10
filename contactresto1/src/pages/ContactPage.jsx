import React from "react";

import ContactForm from "../component/ContactForm";
import MapSection from "../component/MapSection";


const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
    <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 mt-12 p-6 items-center">

        <ContactForm />
        <MapSection />
      </div>
    </div>
  );
};

export default ContactPage;
