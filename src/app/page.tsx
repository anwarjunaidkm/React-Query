"use client";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import Qurey from "./Component/Qurey";
import Users from "./Component/Users";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function App() {
  const [showUsers, setShowUsers] = useState(false);
  const [showQurey, setShowQurey] = useState(false);

  const handleUsersClick = () => {
    setShowUsers(true);
    setShowQurey(false);
  };

  const handleQureyClick = () => {
    setShowUsers(false);
    setShowQurey(true);
  };
  return (
    <>
      <button
        onClick={handleUsersClick}
        className=" bg-red-500 rounded-sm p-1 m-2"
      >
        Users
      </button>
      <button
        onClick={handleQureyClick}
        className=" bg-blue-500 rounded-sm p-1 m-2"
      >
        Posts
      </button>
      <h1 className="text-6xl">home page</h1>
      {showUsers && <Users />}
      {showQurey && (
        <QueryClientProvider client={queryClient}>
          <Qurey />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      )}
    </>
  );
}
