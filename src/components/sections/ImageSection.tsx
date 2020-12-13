import PropTypes from "prop-types";
import Cta from "../Cta";
import { PortableText, urlFor } from "../../utils/sanity";
import "twin.macro";

function ImageSection(props: any) {
  const { heading, label, text, image, cta } = props;

  if (!image) {
    return null;
  }

  return (
    <div>
      <div tw="container mx-auto px-6 mt-12">
        <div tw="flex items-center">
          <div>
            <figure>
              <img
                tw="rounded-md object-cover mx-auto"
                //@ts-ignore
                src={urlFor(image).auto("format").width(2000).url()}
                alt={heading}
              />
              <figcaption>
                <div>
                  <div>{label}</div>
                  <h2>{heading}</h2>
                  {text && <PortableText blocks={text} />}
                  {cta && cta.route && <Cta {...cta} />}
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

ImageSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object,
};

export default ImageSection;
