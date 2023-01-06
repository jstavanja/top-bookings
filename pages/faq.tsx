import { NextSeo } from "next-seo";

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
    <NextSeo description="A page where you can get to know more about scheduling and reservation apps or Slotter in general." />
    <LDJson structuredData={allFAQLDJson} />
    <Hero
      backgroundImage="https://images.unsplash.com/photo-1606238630091-1564f645695a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      title="Frequently asked questions"
      text="Want to know more about scheduling and reservation apps or Slotter in general? Read more here."
    />
    <div className="w-full md:w-8/12 lg:m-12 md:m-4 mb-8 mt-8 px-4">
      <FAQAccordion questions={formattedQuestionsForEasierRendering} />
    </div>
  </Layout>
);

export default IndexPage;
