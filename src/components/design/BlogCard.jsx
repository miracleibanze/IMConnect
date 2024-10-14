import {
  commentSvg,
  shareSvg,
  threeDotsVerticalSvg,
  thumbsUpBlueSvg,
} from "../../assets";

const BlogCard = ({ blog }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center cursor-pointer gap-2">
          <img
            src={blog.person}
            className="w-8 aspect-square object-center object-cover rounded-md"
          />
          <span>
            <p className="caption font-semibold">
              {blog.name} is feeling {blog.feeling || "happy"}
            </p>
            <p className="text-[12px] leading-3">{blog.time}</p>
          </span>
        </div>
        <img
          src={threeDotsVerticalSvg}
          alt="menu"
          className="h-5 cursor-pointer"
        />
      </div>
      <p className="caption leading-[0.82rem] py-3 text-zinc-700">
        {blog.description}
      </p>
      <div className="flex justify-between w-full gap-2 mt-2">
        {blog.images.map((item, index) => (
          <div
            className="w-full aspect-[4/3] rounded-md overflow-hidden imgDiv"
            style={{ backgroundImage: `url(${item.imgBg})` }}
            key={index}
          >
            <img loading="lazy" src={item.img} className="w-full h-full" />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-between items-center caption tracking-tighter mt-4">
        <div className="flex items-center gap-1 cursor-pointer">
          <img src={thumbsUpBlueSvg} className="h-4" />
          Likes
          <span className="text-zinc-50 rounded-md bg-blue-600 px-2 ">
            {blog.likes}
          </span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <img src={commentSvg} className="h-4" />
          comment
          <span className="text-zinc-50 rounded-md bg-blue-600 px-2 ">
            {blog.comments}
          </span>
          <img src={shareSvg} className="h-4" />
          comment
          <span className="text-zinc-50 rounded-md bg-blue-600 px-2 ">
            {blog.shares}
          </span>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
