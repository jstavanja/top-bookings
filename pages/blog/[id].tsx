import { Hero } from "../../components/Hero";
import { Layout } from "../../components/Layout";
import { POSTS } from "../../constants/posts";
import { Post } from "../../types/post";
import { BlogPost as BlogPostComponent } from "../../components/BlogPost";

interface BlogPostProps {
  post: Post;
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <Layout title={`Slotter | ${post.title}`}>
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
        title={post.title}
      />
      <BlogPostComponent post={post} />
    </Layout>
  );
};

export function getPostData(id) {
  return POSTS.find((post) => post.id === id);
}

export async function getStaticPaths() {
  return {
    paths: POSTS.map((post) => ({
      params: {
        id: post.id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      post: postData,
    },
  };
}
export default BlogPost;
