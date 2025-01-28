"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Link from "next/link";

function BlogList() {
  const [data, setData] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem("myData") || "[]");
    setData(blogs);
  }, []);

  const toggleExpanded = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  let filteredData = data;
  if (searchQuery.trim() !== "") {
    filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div>
      <Navbar />
      <div className="pt-7">
        <div className="flex flex-col items-center justify-center">
          <input
            type="text"
            className="w-60 md:w-80 text-md py-1 px-3  border border-slate-300 rounded"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="py-5 mx-auto flex flex-col items-center justify-center max-w-[80%]">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="w-[80%] lg:w-[60%] xl:w-[50%] text-center"
            >
              <div className=" bg-white my-4 p-4 rounded-lg">
                <h3 className="text-xl text-slate-700 mb-2 font-bold">
                  {item.title}
                </h3>
                <p className="text-md">
                  {expandedId === item.id
                    ? item.description
                    : `${item.description.substring(0, 50)}...`}
                </p>
                <div>
                  <p className="text-sm mt-2">
                    {"Posted by "}
                    {item.author}
                  </p>
                  <small className="text-muted">{item.date}</small>
                </div>
                <Link href={`/blog/${item.id}`}>
                  <button className="text-white text-sm bg-slate-700 px-3 py-1.5 my-3 rounded">
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogList;
