import * as React from "react";
import useFetch from "../../hooks/useFetch";
import { Progress } from "../../components/Progress/Progress";

export type HomeContainerProps = {
  pageData?: {
    imgSrc: string;
    heading: string;
    subHeading: string;
  };
};

export const HomeContainer: React.FunctionComponent<HomeContainerProps> = ({
  pageData,
}): React.ReactElement => {
  const { loading, data, error } = useFetch("/api/data/home", pageData);
  return (
    <>
      {loading ? (
        <Progress
          ariaValueText="Loading..."
          mode="indeterminate-regional"
          ariaLabel="indeterminate regional progress bar"
        />
      ) : (
        <div>
          <h1>This is Home Page</h1>
          <section className="m-hero-item f-x-left f-y-top context-accessory theme-dark">
            <picture className="c-image">
              <source srcSet={data.imgSrc} media="(min-width:1084px)"></source>
              <source srcSet={data.imgSrc} media="(min-width:768px)"></source>
              <source srcSet={data.imgSrc} media="(min-width:0)"></source>
              <img srcSet={data.imgSrc} src={data.imgSrc} alt={data.heading} />
            </picture>
            <div>
              <div>
                <h1 className="c-heading">{data.heading}</h1>
                <p className="c-subheading">{data.subHeading}</p>

                <div>
                  <a href="#" className="c-call-to-action c-glyph">
                    <span>Buy It Now!!</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};
