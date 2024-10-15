import { Posts } from "./constants";
import BlogCard from "./design/BlogCard";
import WhatInYourMind from "./design/WhatInYourMind";

const PostsFeeds = () => {
  return (
    <div className="p-3 flex-center flex-col gap-4">
      <WhatInYourMind />

      <div className="w-full p-2 rounded-md bg-zinc-200">
        <BlogCard blog={Posts[0]} />
      </div>
      <div className="w-full p-2 rounded-md bg-zinc-200">
        <BlogCard blog={Posts[1]} />
      </div>
      <div className="w-full p-2 rounded-md bg-zinc-200">
        <BlogCard blog={Posts[2]} />
      </div>
      <div className="w-full p-2 rounded-md bg-zinc-200">
        <BlogCard blog={Posts[3]} />
      </div>
      <div className="w-full p-2 rounded-md bg-zinc-200">
        <BlogCard blog={Posts[4]} />
      </div>
      <div className="w-full p-2 rounded-md bg-zinc-200">
        <BlogCard blog={Posts[5]} />
      </div>
    </div>
  );
};

export default PostsFeeds;
