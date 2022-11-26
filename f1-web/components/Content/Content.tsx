import * as React from "react";
import { usePostsQuery } from "../../types-and-hooks";
import NextLink from "next/link";

interface IContentProps {}

const Content: React.FunctionComponent<IContentProps> = (props) => {
  const { data, loading } = usePostsQuery({ variables: { type: "posts" } });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content-container">
      <NextLink
        className="content-main-card"
        href="/post/[id]"
        as={`/post/${data?.posts?.posts[0].id}`}
      >
        <div className="main-card">
          <p>{data?.posts?.posts[0].title}</p>
          <div>
            <img src={data?.posts?.posts[0].imgURL}></img>
          </div>
        </div>
      </NextLink>
      {/* ==============================================================================================*/}
      <div className="content-secondary-card">
        {data?.posts?.posts.slice(1, 5).map((post) => (
          <NextLink
            href="/post/[id]"
            as={`/post/${post.id}`}
            key={post.id}
            className="secondary-card"
          >
            {/* <NextLink href="/post/[id]" as={`/post/${post.id}`}> */}
            <div>
              <img src={post.imgURL}></img>
            </div>
            <div className="secondary-card-text">
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: `10px`,
                  color: `red`,
                  zIndex: "999",
                }}
              >
                REPORT
              </p>
              <p
                style={{
                  fontSize: `17px`,
                  lineHeight: `23px}`,
                  fontWeight: "600",
                }}
              >
                {post.title}
              </p>
            </div>
            {/* </NextLink> */}
          </NextLink>
        ))}
      </div>
    </div>
  );
};

export default Content;
