import { Post } from "../types/post";
import Image from "next/image";

interface BlogPostProps {
  post: Post;
}

export const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <section className="relative py-20">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className=" flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <Image
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src={post.imageSrc}
            />
          </div>
          <div className="w-full md:w-8/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                <i className="fas fa-rocket text-xl"></i>
              </div>
              <h3 className="text-3xl font-semibold">{post.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {post.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
