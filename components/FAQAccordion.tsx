import { useState } from "react";
import { Button } from "./Button";

interface Question {
  title: string;
  answer: string;
}

interface FAQAccordionProps {
  questions: Question[];
}

const FAQAccordion = ({ questions }: FAQAccordionProps) => {
  const [expanded, setExpanded] = useState<number>(null);

  return (
    <div className="accordion">
      {questions.map((question, index) => (
        <div key={index} className="py-2 px-4">
          <Button
            iconClass="fa-solid fa-caret-down"
            onClick={() => setExpanded(expanded === index ? null : index)}
          >
            {question.title}
          </Button>
          {expanded === index && (
            <div className="p-4 bg-gray-100">{question.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
