import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EventsPage = () => (
  <div className="bg-white text-gray-800">
    <Header />
    <main className="pt-24 pb-12 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-blue-600 mb-16 text-left">Events</h1>

        {/* EMBS and VTS Chapter Inauguration */}
        <div id="embs-vts" className="flex flex-col md:flex-row items-center mb-24">
          <div className="md:w-1/2">
            <img src="/events/embsvts.JPG" alt="EMBS and VTS Chapter Inauguration" className="rounded-2xl shadow-lg w-full h-auto" />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">EMBS and VTS Chapter Inauguration</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The inauguration of the IEEE EMBS and IEEE VTS chapters at TKMCE marked a significant milestone, opening doors to innovation, research, and collaboration. The event brought together enthusiastic participants and inspiring discussions, celebrating the launch of two vibrant communities dedicated to biomedical engineering and vehicular technology. This beginning set the foundation for future growth, learning, and impactful contributions within the college.
            </p>
          </div>
        </div>

        {/* From Pixels to Papers */}
        <div id="pixels-to-papers" className="flex flex-col md:flex-row-reverse items-center mb-24">
          <div className="md:w-1/2">
            <img src="/events/frompixelstopapers.JPG" alt="From Pixels to Papers" className="rounded-2xl shadow-lg w-full h-auto" />
          </div>
          <div className="md:w-1/2 md:pr-12 mt-8 md:mt-0">
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">From Pixels to Papers</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              From Pixels to Papers unfolded as an engaging three-day workshop that immersed participants in the world of advanced computer vision. With insightful expert sessions, interactive hands-on activities, and thought-provoking discussions, the event created a platform for learners to deepen their knowledge and sharpen their skills. It stood out as a meaningful step toward bridging concepts with real-world applications, leaving participants enriched and inspired.
            </p>
          </div>
        </div>

        {/* TinkHerHack */}
        <div id="tinkherhack" className="flex flex-col md:flex-row items-center mb-24">
          <div className="md:w-1/2">
            <img src="/events/tinkherhack.JPG" alt="TinkHerHack 3.0" className="rounded-2xl shadow-lg w-full h-auto" />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">TinkHerHack 3.0</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              TinkHerHack 3.0 brought together bright and determined women from across Kerala in a vibrant celebration of technology and innovation. This women-only hackathon became a space for collaboration, creativity, and learning, where participants built impactful solutions while supporting and uplifting one another. The event stood as a testament to inclusivity and empowerment, inspiring many to step forward, showcase their skills, and make history.
            </p>
          </div>
        </div>

        {/* Annual General Meeting 2025 */}
        <div id="agm-2025" className="flex flex-col md:flex-row-reverse items-center mb-24">
          <div className="md:w-1/2">
            <img src="/events/agm-24.png" alt="Annual General Meeting 2025" className="rounded-2xl shadow-lg w-full h-auto" />
          </div>
          <div className="md:w-1/2 md:pr-12 mt-8 md:mt-0">
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">Annual General Meeting 2025</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              As we prepare to embark on another chapter filled with triumphs and breakthroughs, let's gather to reflect on our journey and chart the course for a future brimming with possibilities. We extend a warm invitation to all to join us in this enlightening assembly, where we celebrate achievements and embrace new horizons.
            </p>
          </div>
        </div>

        {/* Hack The Future */}
        <div id="hack-the-future" className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img src="/events/htf.png" alt="Hack The Future" className="rounded-2xl shadow-lg w-full h-auto" />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">Hack The Future</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              As we prepare to embark on another chapter filled with triumphs and breakthroughs, let's gather to reflect on our journey and chart the course for a future brimming with possibilities. We extend a warm invitation to all to join us in this enlightening assembly, where we celebrate achievements and embrace new horizons.
            </p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default EventsPage;
