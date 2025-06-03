import Layout from "@/components/layout";

export default function HomePage() {
  return (
    <Layout>
      <section className="py-20 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-holo leading-[1.2]">
      Welcome to Hologram Talent Academy
    </h1>
    <p className="text-2xl lg:text-5xl animate-holo mx-auto mt-2 pb-1 font-pacifico leading-[1.4]">
    Your journey to become a star <br /> starts here!
  </p>
      </section>
    </Layout>
  );
}
