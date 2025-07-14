import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSbTkmce from "@/components/AboutSbTkmce";
import SocietiesSection from "@/components/SocietiesSection";
import AchievementsSection from "@/components/AchievementsSection";

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-blue-600">About Us</h1>
          </div>
        </section>

        {/* About IEEE & Kerala Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">About IEEE</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE and its members inspire a global community through its highly-cited publications, conferences, technology standards, and professional and educational activities. IEEE and its members encourage a worldwide community to create for a better tomorrow. IEEE is the world's most trusted “voice” for engineering, computing, and technology news.
                </p>
                <Link to="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">Visit Website</Button>
                </Link>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">About IEEE Kerala Section</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The IEEE Student Branch at TKM College of Engineering is a dynamic community of young professionals dedicated to advancing technology for humanity. Established to foster technical knowledge and professional growth, our student branch serves as a vital link between students and the global IEEE network. We organize a wide array of activities, including technical workshops, seminars by industry experts, project competitions, and networking events, empowering our members to excel in their academic and professional journeys.
                </p>
                <Link to="https://ieeekerala.org/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">Visit Website</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Image */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <img src="/ieeemap.png" alt="IEEE Hierarchy Map" className="mx-auto max-w-full h-auto" />
          </div>
        </section>

        {/* About TKM Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">About TKM College of Engineering</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our mission is to provide students with opportunities for technical skill development, professional networking, and leadership training. We strive to create an environment that encourages innovation, collaboration, and a commitment to lifelong learning, preparing our members to become future leaders in technology and engineering.
                </p>
                <Link to="https://tkmce.ac.in/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">Visit Website</Button>
                </Link>
              </div>
              <img src="/tkm-college.png" alt="TKM College of Engineering" className="rounded-lg shadow-xl w-full h-auto" />
            </div>
          </div>
        </section>

        <AboutSbTkmce />

        {/* Vision & Mission Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be a leading student organization that inspires and empowers students to achieve their full potential. We aim to cultivate a culture of technical excellence and social responsibility, making a positive impact on the community through technology.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide students with opportunities for technical skill development, professional networking, and leadership training. We strive to create an environment that encourages innovation, collaboration, and a commitment to lifelong learning, preparing our members to become future leaders in technology and engineering.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SocietiesSection />

        <AchievementsSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
