import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout";

const IndexPage = () => (
  <Layout title="Slotter | About">
    <Hero
      backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
      title="Who are we?"
      text=""
    />
  </Layout>
);

export default IndexPage;
