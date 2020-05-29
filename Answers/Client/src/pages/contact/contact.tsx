import * as React from "react";

export type ContactContainerProps = {
  imgSrc: string;
  heading: string;
  subHeading: string;
};

export const ContactContainer: React.FunctionComponent<ContactContainerProps> = ({
  imgSrc,
  heading,
  subHeading,
}): React.ReactElement => {
  return (
    <div>
      <h1>This is Contact Page</h1>
      <section className="m-hero-item f-x-left f-y-top context-accessory theme-dark">
        <picture className="c-image">
          <source srcSet={imgSrc} media="(min-width:1084px)"></source>
          <source srcSet={imgSrc} media="(min-width:768px)"></source>
          <source srcSet={imgSrc} media="(min-width:0)"></source>
          <img srcSet={imgSrc} src={imgSrc} alt={heading} />
        </picture>
        <div>
          <div>
            <h1 className="c-heading">{heading}</h1>
            <p className="c-subheading">{subHeading}</p>

            <div>
              <a href="#" className="c-call-to-action c-glyph">
                <span>Buy It Now!!</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
