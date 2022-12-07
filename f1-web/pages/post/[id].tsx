import * as React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import {
  useDeletePostMutation,
  useSinglePostQuery,
} from "../../types-and-hooks";
import { useState, useEffect } from "react";
import { usePostsQuery } from "../../types-and-hooks";
import NextLink from "next/link";

interface IPostProps {}

const Post: NextPage<{ id: number }> = ({ id }) => {
  const news = usePostsQuery({ variables: { type: "news" } });
  const [deletePost] = useDeletePostMutation();
  const router = useRouter();
  const intId =
    typeof router.query.id === "string" ? parseInt(router.query.id) : -1;
  const { data, loading, error } = useSinglePostQuery({
    variables: { id: intId },
  });

  const deletePostHandler = async () => {
    const res = await deletePost({ variables: { deletePostId: intId } });
    if (res?.data?.deletePost) {
      router.push("/");
    }
  };

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="post-container">
        <h1 style={{ paddingRight: "50%" }}>{data?.singlePost?.title}</h1>
        <svg
          onClick={() => deletePostHandler()}
          style={{
            color: "red",
            marginLeft: "20px",
            cursor: "pointer",
            height: "24px",
            width: "24px",
          }}
        >
          <path
            fill="currentColor"
            d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
          />
        </svg>
        <NextLink
          href="/update-post/[id]"
          as={`/update-post/${intId}`}
          key={intId}
        >
          <svg
            style={{
              color: "blue",
              marginLeft: "20px",
              cursor: "pointer",
              height: "24px",
              width: "24px",
            }}
          >
            <path
              fill="currentColor"
              d="M21.04 12.13C21.18 12.13 21.31 12.19 21.42 12.3L22.7 13.58C22.92 13.79 22.92 14.14 22.7 14.35L21.7 15.35L19.65 13.3L20.65 12.3C20.76 12.19 20.9 12.13 21.04 12.13M19.07 13.88L21.12 15.93L15.06 22H13V19.94L19.07 13.88M11 19L9 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H9.18C9.6 1.84 10.7 1 12 1C13.3 1 14.4 1.84 14.82 3H19C20.1 3 21 3.9 21 5V9L19 11V5H17V7H7V5H5V19H11M12 3C11.45 3 11 3.45 11 4C11 4.55 11.45 5 12 5C12.55 5 13 4.55 13 4C13 3.45 12.55 3 12 3Z"
            />
          </svg>
        </NextLink>
        <h4>{data?.singlePost?.createdAt.slice(0, 10)}</h4>
        <div className="post-content-container">
          <div className="post-content">
            <img className="post-img" src={data?.singlePost?.imgURL}></img>
            <p>
              Much Chateau Petrus was said to have been consumed when all 20 F1
              drivers dined together last Thursday at the Michelin-starred
              Hakkasan Abu Dhabi restaurant in the Emirates Palace. Three days
              later 19 of them formed an Arch of Fame on the grid for the guest
              of honour, as Sebastian Vettel prepared to begin his final Grand
              Prix before retiring.
            </p>
            <p>
              It was their poignant way of saying goodbye to one of their most
              popular brothers and, like the dinner, a sign of just how high
              their regard was for him.
            </p>
            <p>
              He came on to the F1 scene with BMW Sauber as a test driver back
              in 2006, and our first encounter came when I smacked him round the
              back of a head with a rolled newspaper in the team motorhome. It
              wasn’t my fault that from behind he resembled my intended target,
              Nick Heidfeld.
            </p>
            <p>
              Back then he was a quiet, fresh-faced kid with a mop of blond
              hair, and although he scored a point on debut at Indianapolis in
              2007, as temporary stand-in for Robert Kubica who was recuperating
              from that massive shunt he’d had in the previous week’s Canadian
              GP, I thought he’d been rather cautious at times.
            </p>
            <p>
              He soon got our attention with that peerless and thoroughly
              deserved shock victory for Toro Rosso at Monza the following year,
              where he beat everyone fair and square. And in 2009, at Red Bull,
              he showed championship-contending class which, of course, he then
              translated into four consecutive titles between 2010 and 2013.
            </p>
            <p>
              His total of 53 wins stands him third overall behind Lewis and
              Michael Schumacher, and ahead of Alain Prost and Ayrton Senna, and
              there were 57 pole positions, 38 fastest laps and 122 podiums to
              go with them.
            </p>
          </div>
          <div className="latest-container">
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
