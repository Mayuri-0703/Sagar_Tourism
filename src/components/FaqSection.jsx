import { useState } from "react";
import "./faq.css";

function FaqSection() {
  const faqs = [
    {
      question: "How long does visa processing take?",
      answer: "Visa processing usually takes between 3 to 7 working days, depending on the country."
    },
    {
      question: "What documents are required?",
      answer: "You typically need a valid passport, recent photograph, and supporting travel documents. Some countries may ask for additional proof."
    },
    {
      question: "Do I need to visit the embassy?",
      answer: "In most cases, you don’t need to visit the embassy. We handle the paperwork for you."
    },
    {
      question: "Can I track my visa application?",
      answer: "Yes, once submitted, you can track the status of your visa application through our portal or support team."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">❓ Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-question">{faq.question}</div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FaqSection;
