import * as React from "react";

interface ITopicProps {}

const Topic: React.FunctionComponent<ITopicProps> = (props) => {
  return (
    <div className="topic-container">
      <div className="border-topic">
        <legend className="topic-legend">Explore F1 topics</legend>
        <div className="topic-content">
          <div className="topic-topic-content">
            <p className="topic-paragraph">Sustainabilyty</p>
            <img src="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Tag%20collections/Other/sustainability%20b.jpg.transform/4col/image.jpg"></img>
          </div>
          <div className="topic-topic-content">
            <p className="topic-paragraph">Race calendar</p>
            <img src="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Tag%20collections/Other/Race-calendar.jpg.transform/4col/image.jpg"></img>
          </div>
          <div className="topic-topic-content">
            <p className="topic-paragraph">Podcasts</p>
            <img src="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Tag%20collections/Other/Beyond%20The%20Grid%20Header%202022.jpg.transform/4col/image.jpg"></img>
          </div>
          <div className="topic-topic-content">
            <p className="topic-paragraph">Esports</p>
            <img src="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Tag%20collections/Other/esports.jpg.transform/4col/image.jpg"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
