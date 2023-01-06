import { POSTS } from "../constants/posts";
import { Card } from "./Card";

export const BlogPosts = () => {
  return (
    <div className="flex flex-wrap items-center mt-32 mb-32">
      {POSTS.map((post) => (
        <Card
          key={post.id}
          ctaLink={`/blog/${post.id}`}
          ctaText={post.ctaText}
          imageSrc={post.imageSrc}
          text={post.text.substring(0, 120) + "..."}
          title={post.title}
        />
      ))}
    </div>
  );
};
