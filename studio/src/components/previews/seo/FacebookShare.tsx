import * as React from "react";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "part:@sanity/base/client";
import { toPlainText } from "./frontendUtils";
import styles from "./FacebookShare.css";
import { CustomSanityDocument } from "../shared.types";

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source: string) => {
  return builder.image(source);
};

interface Props {
  document: CustomSanityDocument | null;
  width: number;
}

class FacebookShare extends React.PureComponent<Props> {
  static defaultProps = {
    document: null,
    width: 500,
  };

  render() {
    const { document, width } = this.props;

    if(!document) return null;

    const {
      title,
      excerpt: description = [],
      mainImage: openGraphImage,
    } = document;

    const websiteUrl = "http://localhost:3000";
    const websiteUrlWithoutProtocol = websiteUrl.split("://")[1];

    return (
      <div className={styles.seoItem}>
        <h3>Facebook share</h3>
        <div className={styles.facebookWrapper} style={{ width }}>
          <div className={styles.facebookImageContainer}>
            <img
              className={styles.facebookCardImage}
              src={urlFor(openGraphImage).width(500).url() ?? undefined}
            />
          </div>
          <div className={styles.facebookCardContent}>
            <div className={styles.facebookCardUrl}>
              {websiteUrlWithoutProtocol}
            </div>
            <div className={styles.facebookCardTitle}>
              <a href={websiteUrl}>{title}</a>
            </div>
            <div className={styles.facebookCardDescription}>
              {toPlainText(description)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FacebookShare;
