import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gray-100 rounded-full p-6">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                alt="Team working together"
                className="w-full h-full object-cover rounded-full shadow-md"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              The Institute of Electrical and Electronics Engineers (IEEE) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. Through its global network of members, publications, conferences, and standards, IEEE is a leading authority in fields ranging from aerospace systems and computers to biomedical engineering and consumer electronics. We are proud to be a part of this global community, contributing to a future where technology creates new opportunities for everyone.
            </p>
            <Link to="/about">
              <Button className="mt-6 bg-blue-600 text-white hover:bg-blue-700">Read More</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};


export default AboutSection;