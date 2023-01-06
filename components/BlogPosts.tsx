import teamImage from "../assets/img/team-2-800x800.jpg";
import { Card } from "./Card";

const POSTS = [
  {
    ctaLink: "/more",
    ctaText: "Read",
    imageSrc: teamImage,
    text: "Something",
    title: "Blog post 1",
  },
  {
    ctaLink: "/more",
    ctaText: "Read",
    imageSrc: teamImage,
    text: "Something",
    title: "Blog post 1",
  },
  {
    ctaLink: "/more",
    ctaText: "Read",
    imageSrc: teamImage,
    text: "Something",
    title: "Blog post 1",
  },
  {
    ctaLink: "/more",
    ctaText: "Read",
    imageSrc: teamImage,
    text: "Something",
    title: "Blog post 1",
  },
];

export const BlogPosts = () => {
  return (
    <div className="flex flex-wrap items-center mt-32 mb-32">
      {POSTS.map((post) => (
        <Card
          ctaLink={post.ctaLink}
          ctaText={post.ctaText}
          imageSrc={post.imageSrc}
          text={post.text}
          title={post.title}
        />
      ))}
    </div>
  );
};
