import { BlogPosts } from "../../components/BlogPosts";
import { Hero } from "../../components/Hero";
import { Layout } from "../../components/Layout";

const Blog = () => {
  return (
    <Layout title="Slotter | Make the most of your time">
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
        title="Blog"
        text="See what's going on at Slotter."
      />
      <BlogPosts />
    </Layout>
  );
};

export default Blog;
