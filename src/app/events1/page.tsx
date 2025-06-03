import Layout from "@/components/layout";
import React from "react";
import event2025 from "@/data/hologrameventmanado";

export default function EventsPage() {
  return (
    <Layout>
      <section className="py-16 px-6 text-center">
        <p className="text-2xl lg:text-5xl animate-holo mx-auto mt-2 pb-1 font-pacifico leading-[1.4]">
        Your journey to become a star <br /> starts here!
      </p>
        {/* Section for Photos */}
        <div className="text-left mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {event2025.photos.map((src, index) => (
              <img
  key={index}
  src={src}
  alt={`Event Photo ${index + 1}`}
  className="w-full max-h-96 object-contain rounded-lg mx-auto"
/>

            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}