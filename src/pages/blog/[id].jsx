import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import "../../app/globals.css";

const BlogDetails = () => {
  const [blogDetail, setBlogDetail] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem("myData"));
    const selectedBlog = blogs.find((blog) => blog.id === parseInt(id));
    setBlogDetail(selectedBlog);
  }, [id]);

  if (!blogDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div>
        <div className="p-5 sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto mt-10 text-center">
          <h2 className="text-2xl text-white font-bold mb-4">
            {blogDetail.title}
          </h2>
          <p className="text-md font-medium mb-2">{blogDetail.description}</p>
          <p className="text-sm text-slate-800 font-medium">
            <span className="uppercase">Author:</span> {blogDetail.author}
          </p>
          <p className="text-sm text-slate-800 font-medium">
            <span className="uppercase">Date:</span> {blogDetail.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
