import { BlogPosts } from "../../components/BlogPosts";
import { Hero } from "../../components/Hero";
import { Layout } from "../../components/Layout";

const Blog = () => {
  return (
    <Layout title="Slotter | Make the most of your time">
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        title="Blog"
        text="See what's going on at Slotter."
      />
      <BlogPosts />
    </Layout>
  );
};

export default Blog;
