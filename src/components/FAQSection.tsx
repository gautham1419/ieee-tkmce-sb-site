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
      question: "Lorem ipsum dolor sit amet consectetur in sed nisi erat quis ?",
      answer: "Lorem ipsum dolor sit amet consectetur. Sapien suspendisse cursus vestibulum cursus amet ultricies habitasse. At enim mauris adipiscing potenti amet pharetra consectetur Convallis facilisis aliquets tristam cursus."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur in sed nisi erat quis ?",
      answer: "Lorem ipsum dolor sit amet consectetur. Sapien suspendisse cursus vestibulum cursus amet ultricies habitasse. At enim mauris adipiscing potenti amet pharetra consectetur Convallis facilisis aliquets tristam cursus."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur in sed nisi erat quis ?", 
      answer: "Lorem ipsum dolor sit amet consectetur. Sapien suspendisse cursus vestibulum cursus amet ultricies habitasse. At enim mauris adipiscing potenti amet pharetra consectetur Convallis facilisis aliquets tristam cursus."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur in sed nisi erat quis ?",
      answer: "Lorem ipsum dolor sit amet consectetur. Sapien suspendisse cursus vestibulum cursus amet ultricies habitasse. At enim mauris adipiscing potenti amet pharetra consectetur Convallis facilitis aliquets tristam cursus."
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
                  Lorem ipsum dolor sit amet consectetur. Sapien suspendisse cursus vestibulum cursus amet ultricies habitasse. Eu cursus nec diam lacus sequi ut. Nunc pharetra venenatis. Convallis facilisis aliquam masum cursus. Enim in aliquam auctor orci gravida elit iaculicaba a venenati. Arci facilibus tempor nisl liqua.
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