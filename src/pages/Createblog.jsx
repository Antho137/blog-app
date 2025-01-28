"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../app/globals.css";

const Createblog = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const initialBlogs =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("myData")) || []
      : [];
  const [data, setData] = useState(initialBlogs);

  useEffect(() => {
    // Save habits to localStorage whenever they change
    localStorage.setItem("myData", JSON.stringify(data));
  }, [data]);

  const addData = () => {
    const currentDate = new Date().toLocaleDateString();
    const newData = {
      id: data.length + 1,
      author: author,
      date: currentDate,
      title: title,
      description: description,
    };
    const updatedData = [...data, newData];
    setData(updatedData);
    setAuthor("");
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <Navbar />
      <div className="mt-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl text-slate-700 font-bold mb-3">New blog</h2>
          <div className="my-2">
            <input
              type="text"
              className="w-80 text-md py-1 px-2 rounded border border-slate-300"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="my-2">
            <input
              type="text"
              className="w-80 text-md py-1 px-2 rounded border border-slate-300"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="my-2">
            <textarea
              className="w-80 text-md py-1 px-2 rounded border border-slate-300"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="my-4">
            <button
              onClick={addData}
              className="bg-slate-700 w-80 text-white py-2 px-3 rounded"
            >
              Add Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createblog;
