import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center min-h-screen px-6 py-12 bg-gray-50">
        <section className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            About Mini Furniture Store
          </h1>
          <p className="text-gray-600 mb-4">
            Mini Furniture Store was founded with a simple idea: to make high-quality, beautifully designed furniture accessible to everyone. 
          </p>
          <p className="text-gray-600">
            From cozy sofas to ergonomic chairs, we craft pieces that elevate your space and your life.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
