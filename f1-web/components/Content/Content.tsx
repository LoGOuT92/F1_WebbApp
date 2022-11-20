import * as React from "react";
import { usePostsQuery } from "../../types-and-hooks";

interface IContentProps {}

const Content: React.FunctionComponent<IContentProps> = (props) => {
  const { data, loading } = usePostsQuery({ variables: { type: "posts" } });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content-container">
      <div className="content-main-card">
        <div className="main-card">
          <p>{data?.posts?.posts[0].title}</p>
          <div>
            <img src={data?.posts?.posts[0].imgURL}></img>
          </div>
        </div>
      </div>
      {/* ==============================================================================================*/}
      <div className="content-secondary-card">
        {data?.posts?.posts.slice(1, 5).map((post) => (
          <div key={post.id} className="secondary-card">
            <div>
              <img src={post.imgURL}></img>
            </div>
            <div className="secondary-card-text">
              <p style={{ fontWeight: "bold", fontSize: `10px`, color: `red` }}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
