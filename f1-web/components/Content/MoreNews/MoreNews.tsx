import * as React from "react";
import { useEffect, useState } from "react";
import { usePaginatedPostQuery } from "../../../types-and-hooks";
import NextLink from "next/link";

interface IpostNews {
  post: {
    id: number;
    content: string;
    createdAt: any;
    imgURL: string;
    title: string;
    type: string;
  };
}
interface IPosts {
  posts:
    | {
        __typename?: "Post" | undefined;
        id: number;
        content: string;
        createdAt: any;
        imgURL: string;
        title: string;
        type: string;
      }[]
    | undefined;
}

const MoreNews: React.FunctionComponent = () => {
  const [cursor, setCursor] = useState(null as null | number);
  const [posts, setPosts] = useState([] as IPosts["posts"]);

  const { data, loading } = usePaginatedPostQuery({
    variables: { cursor: cursor },
  });

  useEffect(() => {
    if (!loading && data!.paginatedPosts!.posts) {
      let x = data!.paginatedPosts!.posts;
      setPosts(posts!.concat(x));
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="more-news-container">
      <label className="more-news-label">
        <h1>More news</h1>
      </label>
      <div className="postsCards">
        {/* ============================================================================================================ */}
        {!posts && loading ? (
          <div>Loading...</div>
        ) : (
          posts!.map((post) => (
            <NextLink
              className="CardPost"
              key={post.id}
              href="/post/[id]"
              as={`/post/${post.id}`}
            >
              <div>
                <img src={post.imgURL}></img>
              </div>
              <div className="secondary-card-text">
                <p
                  style={{ fontWeight: "bold", fontSize: `10px`, color: `red` }}
                >
                  NEWS
                </p>
              </div>
              <div style={{ padding: "10px" }}>{post.title}</div>
            </NextLink>
          ))
        )}
        {data && data.paginatedPosts?.hasMore ? (
          <button
            onClick={() => {
              setCursor(
                data!.paginatedPosts!.posts[
                  data!.paginatedPosts!.posts.length - 1
                ].id
              );
            }}
          >
            Load more
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default MoreNews;
