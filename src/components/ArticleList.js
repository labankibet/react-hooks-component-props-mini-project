import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post, index) => (
        <Article
          key={index} // Use a unique key here, such as post.id if available
          title={post.title}
          date={post.date || "January 1, 1970"}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
