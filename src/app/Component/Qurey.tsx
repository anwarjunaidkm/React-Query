"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

function Qurey() {
  const fetch = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: fetch,
  });

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>Posts</h1>
      {isLoading && <span>Loading...!</span>}
      {data?.map((post: any) => {
        return (
          <div key={post.id} style={{ display: "flex" }}>
            <span>{post.id}-&nbsp;</span>
            <div>{post.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Qurey;
