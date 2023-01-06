import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout";

const ContactSuccessPage = () => (
  <Layout title="Slotter | Form sent successfully">
    <Hero
      backgroundImage="https://images.unsplash.com/photo-1567473030492-533b30c5494c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
      title="Contact form submitted successfully."
      text="We'll be in touch with you shortly."
    />
  </Layout>
);

export default ContactSuccessPage;
