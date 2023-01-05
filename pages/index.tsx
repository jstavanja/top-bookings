import { Layout } from "../components/Layout";

import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Featured } from "../components/Featured";
import { Finisher } from "../components/Finisher";
import { Contact } from "../components/Contact";

const IndexPage = () => (
  <Layout title="Slotter | Make the most of your time">
    <Hero />
    <Services />
    <Featured />
    <Finisher />
    <Contact />
  </Layout>
);

export default IndexPage;
