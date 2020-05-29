import * as React from "react";
import { Progress } from "../../components/Progress/Progress";
import useFetch from "../../hooks/useFetch";

export type AboutContainerProps = {
  pageData?: {
    imgSrc: string;
    heading: string;
    subHeading: string;
  };
};

export const AboutContainer: React.FunctionComponent<AboutContainerProps> = ({
  pageData,
}): React.ReactElement => {
  const { loading, data, error } = useFetch("/api/data/about", pageData);
  return (
    <>
      {loading ? (
        <Progress
          ariaValueText="Loading..."
          mode="indeterminate-regional"
          ariaLabel="indeterminate regional progress bar"
        />
      ) : (
        <section className="m-hero-item f-x-left f-y-top context-accessory theme-dark">
          <h1>This is About Page</h1>
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
      )}
    </>
  );
};
