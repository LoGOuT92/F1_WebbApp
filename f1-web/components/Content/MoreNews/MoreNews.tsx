import * as React from "react";
import { usePaginatedPostsQuery } from "../../../types-and-hooks";

interface IMoreNewsProps {}

const MoreNews: React.FunctionComponent<IMoreNewsProps> = (props) => {
  const { data, loading } = usePaginatedPostsQuery({
    variables: { type: "posts" },
  });
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
        {data?.paginatedPosts?.posts.map((post) => (
          <div className="CardPost" key={post.id}>
            <div>
              <img src={post.imgURL}></img>
            </div>
            <div className="secondary-card-text">
              <p style={{ fontWeight: "bold", fontSize: `10px`, color: `red` }}>
                NEWS
              </p>
            </div>
            <div style={{ padding: "10px" }}>{post.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreNews;
