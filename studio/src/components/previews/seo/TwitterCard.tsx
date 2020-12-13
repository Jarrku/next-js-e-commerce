import * as React from "react";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "part:@sanity/base/client";
import { assemblePageUrl, toPlainText } from "./frontendUtils";
import styles from "./TwitterCard.css";
import { CustomSanityDocument } from "../shared.types";

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source: string) => {
  return builder.image(source);
};

const author = {
  name: "Sanity.io",
  handle: "sanity_io",
  image:
    "https://pbs.twimg.com/profile_images/1135907399582199809/7uZ5d2to_400x400.jpg",
};

interface Props {
  document: CustomSanityDocument | null;
  width: number;
  route: {};
  options: {};
}

class TwitterCard extends React.PureComponent<Props> {
  static defaultProps = {
    document: null,
    width: 500,
  };

  render() {
    const { document, width, options } = this.props;
    if(!document) return null;

    const { title, excerpt, mainImage } = document;
    const url = assemblePageUrl({ document, options });
    const websiteUrlWithoutProtocol = url.split("://")[1];
    return (
      <div className={styles.seoItem}>
        <h3>Twitter card preview</h3>
        <div className={styles.tweetWrapper} style={{ width }}>
          {author && (
            <div className={styles.tweetAuthor}>
              <img
                className={styles.tweetAuthorAvatar}
                src={
                  (author && typeof author.image === "object"
                    ? urlFor(author.image).width(300).url()
                    : author.image) ?? undefined
                }
              />
              <span className={styles.tweetAuthorName}>{author.name}</span>
              <span className={styles.tweetAuthorHandle}>@{author.handle}</span>
            </div>
          )}

          <div className={styles.tweetText}>
            <p>
              The card for your website will look a little something like this!
            </p>
          </div>
          <a href={url} className={styles.tweetUrlWrapper}>
            <div className={styles.tweetCardPreview}>
              <div className={styles.tweetCardImage}>
                <img src={urlFor(mainImage).width(300).url() ?? undefined} />
              </div>
              <div className={styles.tweetCardContent}>
                <h2 className={styles.tweetCardTitle}>{title}</h2>
                {excerpt && (
                  <div className={styles.tweetCardDescription}>
                    {toPlainText(excerpt)}
                  </div>
                )}
                <div className={styles.tweetCardDestination}>
                  {websiteUrlWithoutProtocol}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default TwitterCard;
