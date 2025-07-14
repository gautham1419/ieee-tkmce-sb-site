import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EventsPage = () => (
  <div className="bg-white text-gray-800">
    <Header />
    <main className="pt-24 pb-12 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-blue-600 mb-16 text-left">Events</h1>

        {/* Annual General Meeting 2024 */}
        <div className="flex flex-col md:flex-row items-center mb-24">
          <div className="md:w-1/2 md:pr-12">
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">Annual General Meeting 2024</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              As we prepare to embark on another chapter filled with triumphs and breakthroughs, let's gather to reflect on our journey and chart the course for a future brimming with possibilities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We extend a warm invitation to all to join us in this enlightening assembly, where we celebrate achievements and embrace new horizons.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="/events/agm-24.png" alt="Annual General Meeting 2024" className="rounded-2xl shadow-lg w-full h-auto" />
          </div>
        </div>

        {/* Hack The Future */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">Hack The Future</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              As we prepare to embark on another chapter filled with triumphs and breakthroughs, let's gather to reflect on our journey and chart the course for a future brimming with possibilities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We extend a warm invitation to all to join us in this enlightening assembly, where we celebrate achievements and embrace new horizons.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="/events/htf.png" alt="Hack The Future" className="rounded-2xl shadow-lg w-full h-auto" />
          </div>
        </div>

      </div>
    </main>
    <Footer />
  </div>
);

export default EventsPage;
