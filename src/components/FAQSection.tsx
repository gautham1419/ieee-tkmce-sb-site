import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is IEEE?",
      answer: "IEEE, the Institute of Electrical and Electronics Engineers, is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. It is a leading authority on a wide variety of areas ranging from aerospace systems and computers to telecommunications, biomedical engineering, electric power, and consumer electronics."
    },
    {
      question: "What are the benefits of joining the IEEE Student Branch?",
      answer: "Members of the IEEE Student Branch gain access to a vast network of professionals, technical resources, and career development opportunities. Benefits include participation in workshops and seminars, project competitions, leadership roles, and access to IEEE Xplore Digital Library, a powerful resource for technical papers and research."
    },
    {
      question: "How can I join the IEEE Student Branch at TKMCE?", 
      answer: "To join, you can visit the official IEEE website (ieee.org), click on 'Membership & Subscriptions,' and follow the instructions to become a student member. Make sure to affiliate yourself with the TKM College of Engineering student branch during the registration process. You can also contact any of our Execom members for assistance."
    },
    {
      question: "Do I have to be an Electrical or Electronics Engineering student to join?",
      answer: "Not at all! While IEEE has its roots in electrical and electronics engineering, it is a multidisciplinary organization. Students from all engineering disciplines, including Computer Science, Mechanical, and Civil, are welcome and can find societies and resources relevant to their fields of interest."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ Questions */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-4 shadow-card hover:shadow-glow transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* FAQ Answer Display */}
          <div className="lg:pl-8">
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 bg-gradient-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  General Information
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Joining IEEE is more than just a membership; it's an investment in your future. It connects you to a global community of innovators and leaders, providing you with the resources and support you need to succeed in your academic and professional life. Get involved, and start shaping the future of technology today.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;