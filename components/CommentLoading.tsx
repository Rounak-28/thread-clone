"use client";

import React, { useState, useEffect } from "react";

const CommentLoading = () => {
  const [loadingText, setLoadingText] = useState("Loading Comments");
  const [intervalId, setIntervalId] = useState<any>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setLoadingText((prevText) => {
        if (prevText === "Loading Comments...") {
          return "Loading Comments";
        } else {
          return prevText + ".";
        }
      });
    }, 300);

    setIntervalId(id);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="h-24 flex justify-center items-center">{loadingText}</div>
  );
};

export default CommentLoading;
