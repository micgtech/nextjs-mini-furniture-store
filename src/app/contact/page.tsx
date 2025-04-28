import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center min-h-screen px-6 py-12 bg-gray-50">
        <section className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-gray-600 mb-8">
            Have questions, feedback, or partnership ideas? We’d love to hear from you.
          </p>

          <a
            href="mailto:hcetgcim.com@ofni"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Email Us
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
