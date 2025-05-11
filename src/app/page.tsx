import Layout from "@/components/layout";

export default function HomePage() {
  return (
    <Layout>
      <section className="bg-[linear-gradient(to_right,_#00f1ff,_#004dff,_#00f1ff)] py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Welcome to Hologram Academy
        </h1>
        <p className="text-lg text-black max-w-xl mx-auto">
          Your journey to become a star starts here!
        </p>
      </section>
    </Layout>
  );
}
