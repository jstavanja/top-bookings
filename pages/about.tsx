import { NextSeo } from "next-seo";

import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout";

const IndexPage = () => (
  <Layout title="Slotter | About">
    <NextSeo description="An about page where you can get to know more about Slotter in general." />
    <Hero
      backgroundImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      title="Who are we?"
      text=""
    />
    <div className="w-full md:w-8/12 ml-auto mr-auto px-4">
      <p className="m-24 text-lg leading-relaxed text-gray-600">
        We're thrilled to introduce Slotter as the ultimate solution for booking
        appointments and managing schedules. With our user-friendly interface,
        simple editing tools, and search engine optimization, our app makes it
        easy for both businesses and clients to book and manage appointments
        with ease.
        <br></br>
        <br></br>
        In addition to these core features, Slotter also offers a customizable
        booking process, mobile optimization, notifications, a review system,
        multiple payment options, and advanced scheduling tools. These features
        allow businesses to tailor the booking process to their specific needs,
        make it easy for clients to book appointments on the go, stay informed
        about upcoming appointments, leave reviews for businesses, choose from
        multiple payment options, and manage their schedules more efficiently.
        <br></br>
        <br></br>
        We're confident that Slotter will be a valuable addition to any business
        and we can't wait to see how our app helps businesses and clients
        streamline their schedules and grow their businesses. Thank you for
        joining us on this exciting journey and we can't wait to see what the
        future holds for Slotter!
      </p>
    </div>
  </Layout>
);

export default IndexPage;
