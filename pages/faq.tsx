import FAQAccordion from "../components/FAQAccordion";
import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout";
import { LDJson } from "../components/LDJson";
import { allFAQLDJson } from "../constants/faq";

const formattedQuestionsForEasierRendering = allFAQLDJson.mainEntity.map(
  (question) => ({
    title: question.name,
    answer: question.acceptedAnswer.text,
  })
);

const IndexPage = () => (
  <Layout title="Slotter | About">
    <LDJson structuredData={allFAQLDJson} />
    <Hero
      backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
      title="Frequently asked questions"
      text="Want to know more about scheduling and reservation apps or Slotter in general? Read more here."
    />
    <div className="w-full md:w-8/12 m-12 px-4">
      <FAQAccordion questions={formattedQuestionsForEasierRendering} />
    </div>
  </Layout>
);

export default IndexPage;
