import { Title } from "@mantine/core";

type BlogType = {
  title: string;
  content: string;
  createDate: string;
};
export const blogList: BlogType[] = [
  {
    title: "This is a header",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    createDate: "22.07.11",
  },
  {
    title: "This is a header",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    createDate: "22.07.11",
  },
  {
    title: "This is a header",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    createDate: "22.07.11",
  },
  {
    title: "This is a header",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    createDate: "22.07.11",
  },
  {
    title: "This is a header",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    createDate: "22.07.11",
  },
  {
    title: "This is a header",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    createDate: "22.07.11",
  },
  {
    title: "This is a header",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    createDate: "22.07.11",
  },
];
const Blog = () => {
  return (
    <>
      <div className="border border-gray-200 py-4">
        <Title>Blog</Title>
      </div>
      {blogList.map((blog, index) => {
        return (
          <div key={index} className="mb-4">
            <h3>{blog.title}</h3>
            <div>{blog.content}</div>
            <small>{blog.createDate}</small>
          </div>
        );
      })}
    </>
  );
};

export default Blog;
