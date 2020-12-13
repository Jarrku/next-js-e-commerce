import PropTypes from "prop-types";
import Cta from "../Cta";
import { PortableText, urlFor } from "../../utils/sanity";
import "twin.macro";

function Hero(props: any) {
  const { heading, backgroundImage, tagline, ctas } = props;

  return (
    <div>
      <div tw="container mx-auto px-6 mt-4">
        <div tw="md:flex md:items-center">
          <div tw="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
            <h3 tw="text-gray-700 uppercase text-lg">{heading}</h3>
            {tagline && <PortableText blocks={tagline} />}
            {ctas && (
              //@ts-ignore
              <div>
                {ctas.map((cta: any) => (
                  <Cta {...cta} key={cta._key} />
                ))}
              </div>
            )}
          </div>
          <div tw="w-full h-64 md:w-1/2 lg:h-96">
            <img
              tw="h-full w-full rounded-md object-cover max-w-lg mx-auto"
              //@ts-ignore
              src={urlFor(backgroundImage).auto("format").width(1051).fit("crop").quality(80)}
              alt={backgroundImage.alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object),
};

export default Hero;
