import { Layout } from "../components/Layout";

import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Featured } from "../components/Featured";
import { Finisher } from "../components/Finisher";
import { Contact } from "../components/Contact";

const IndexPage = () => (
  <Layout title="Slotter | Make the most of your time">
    <Hero
      backgroundImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      title="Make the most of your time."
      text="With a user-friendly interface and simple editing tools, our app
              makes it easy to book appointments and manage schedules. Plus, our
              app is optimized for search engines, making it easier for
              potential clients to discover your business."
    />
    <Services />
    <Featured />
    <Finisher />
    <Contact />
  </Layout>
);

export default IndexPage;
