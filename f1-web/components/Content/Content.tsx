import * as React from "react";

interface IContentProps {}

const Content: React.FunctionComponent<IContentProps> = (props) => {
  return (
    <div className="content-container">
      <div className="content-main-card">
        <div className="main-card">
          <p>
            LIVE COVERAGE: Follow all the action from second practice for the
            United States Grand Prix
          </p>
          <div>
            <img src="https://www.formula1.com/content/dam/fom-website/sutton/2022/USA/Friday/1435392983.jpg.transform/6col/image.jpg"></img>
          </div>
        </div>
      </div>
      {/* ==============================================================================================*/}
      <div className="content-secondary-card">
        <div className="secondary-card">
          <div>
            <img src="https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/JapaneseGP/Post-race/1435380246.jpg.transform/6col/image.jpg"></img>
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
              FP1: Sainz leads Verstappen as four drivers make their debut at
              COTA
            </p>
          </div>
        </div>
        <div className="secondary-card">
          <div>
            <img src="https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/USGP/PreRace/GettyImages-1244126296-(1).jpg.transform/6col/image.jpg"></img>
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
              FP1: Sainz leads Verstappen as four drivers make their debut at
              COTA
            </p>
          </div>
        </div>
        <div className="secondary-card">
          <div>
            <img src="https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/675df19a-a8e3-4ef2-8be5-cd68339ed916/79850ccf-f5cc-454f-8fbe-94d088f89041/1316x740/match/image.jpg"></img>
          </div>
          <div className="secondary-card-text">
            <p style={{ fontWeight: "bold", fontSize: `10px`, color: `red` }}>
              REPORT
            </p>
            <p
              style={{
                fontSize: `17px`,
                lineHeight: `23px`,
                fontWeight: "600",
              }}
            >
              FP1: Sainz leads Verstappen as four drivers make their debut at
              COTA
            </p>
          </div>
        </div>

        <div className="secondary-card">
          <div>
            <img src="https://www.formula1.com/content/dam/fom-website/sutton/2022/Japan/Sunday/1431871573.jpg.transform/6col/image.jpg"></img>
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
              FP1: Sainz leads Verstappen as four drivers make their debut at
              COTA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
