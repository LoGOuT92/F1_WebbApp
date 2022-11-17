import * as React from "react";
import { useState, useEffect } from "react";
import { usePostsQuery } from "../../../types-and-hooks";
// import "./Latest.scss";
import NavContent from "../NavPaterns/NavContent";
import Image from "next/image";

interface ILatestProps {}

interface Post {
  __typename: "Post";
  content: string;
  createdAt: any;
  id: number;
  imgURL: string;
  title: string;
  type: string;
  updatedAt: any;
}

interface Idata {
  data: Post[] | undefined;
}

const Latest: React.FunctionComponent<ILatestProps> = (props) => {
  const [post, setData] = useState<Idata["data"]>([]);
  const { data, loading } = usePostsQuery({ variables: { type: "news" } });

  useEffect(() => {
    if (!loading && data) {
      setData(data!.posts?.posts);
    }
  }, [loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="latest-continer">
      Latest
      <svg>
        <path
          fill="currentColor"
          d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
        />
      </svg>
      <div className="nav-content">
        <NavContent name={["Latest"]} />
        <div className="nav-panel">
          <div className="nav-news">
            <p>News</p>
            {post!.map((item: Post) => (
              <div className="nav-nevs-container" key={item.id}>
                <div className="nav-nevs-card">
                  <img alt="newsLogo" src={item.imgURL} />
                </div>
                <div className="nav-nevs-card">
                  <div className="nav-nevs-content">
                    <p className="paragraph">{item.type}</p>
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="nav-topic">
            <p>Topic</p>
            <div className="nav-topic-container">
              <div className="nav-topic-content">
                <p className="nav-paragraph">Las Vegas</p>
                <img src="https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/LasVegas/Circuit Reveal.jpg.transform/2col/image.jpg"></img>
              </div>
              <div className="nav-topic-content">
                <p className="nav-paragraph">Race calendar</p>
                <img src="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Tag%20collections/Other/Race-calendar.jpg.transform/2col/image.jpg"></img>
              </div>
              <div className="nav-topic-content">
                <p className="nav-paragraph">Sustainabilyty</p>
                <img src="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Tag%20collections/Other/sustainability%20b.jpg.transform/2col/image.jpg"></img>
              </div>
              <div className="nav-topic-content">
                <p className="nav-paragraph">Podcastss</p>
                <img src="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Tag%20collections/Other/Beyond%20The%20Grid%20Header%202022.jpg.transform/2col/image.jpg"></img>
              </div>
              <div className="nav-topic-content">
                <p className="nav-paragraph">Technical</p>
                <img src="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Tag%20collections/Other/technical.jpg.transform/2col/image.jpg"></img>
              </div>
              <div className="nav-topic-content">
                <p className="nav-paragraph">Driver market</p>
                <img
                  src="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Tag%20collections/Other/Driver_market.jpg.transform/2col/image.jpg"
                  alt="news-logo"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
