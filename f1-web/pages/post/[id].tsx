import * as React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { useSinglePostQuery } from "../../types-and-hooks";
import { useState, useEffect } from "react";
import { usePostsQuery } from "../../types-and-hooks";
import NextLink from "next/link";

interface IPostProps {}

const Post: NextPage<{ id: any }> = ({ id }) => {
  const news = usePostsQuery({ variables: { type: "news" } });
  const router = useRouter();
  const intId =
    typeof router.query.id === "string" ? parseInt(router.query.id) : -1;
  const { data, loading, error } = useSinglePostQuery({
    variables: { id: intId },
  });

  if (loading) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (!data?.singlePost) {
    return (
      <Layout>
        <h1>could not fund post</h1>
      </Layout>
    );
  }
  console.log(data?.singlePost);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="post-container">
        <h1 style={{ paddingRight: "50%" }}>{data?.singlePost?.title}</h1>
        <h4>{data?.singlePost?.createdAt.slice(0, 10)}</h4>
        <div className="post-content-container">
          <img className="post-img" src={data?.singlePost?.imgURL}></img>
          <div className="test2">
            <div className="nav-news">
              <h1 className="h1-latest">Latest</h1>
              {news?.data?.posts?.posts?.map((item: any) => (
                <NextLink
                  href="/post/[id]"
                  as={`/post/${item.id}`}
                  className="nav-nevs-container"
                  key={item.id}
                >
                  <div className="nav-nevs-card">
                    <img alt="newsLogo" src={item.imgURL} />
                  </div>
                  <div className="nav-nevs-card">
                    <div className="nav-nevs-content">
                      <label
                        style={{
                          margin: 0,
                          padding: 0,
                        }}
                        className="paragraph"
                      >
                        {item.type}
                      </label>
                      {item.content}
                    </div>
                  </div>
                </NextLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Post;
