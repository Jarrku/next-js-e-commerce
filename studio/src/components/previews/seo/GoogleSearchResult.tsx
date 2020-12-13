import * as React from "react";
import { assemblePageUrl, toPlainText } from "./frontendUtils";
import Truncate from "./Truncate";
import styles from "./GoogleSearchResult.css";
import { CustomSanityDocument } from "../shared.types";


interface Props {
  document: CustomSanityDocument | null;
  width: number;
  route: {};
  options: {};
}

class GoogleSearchResult extends React.PureComponent<Props> {
  static defaultProps = {
    document: null,
    width: 500,
  };

  render() {
    const { document, options, width } = this.props;
    if(!document) return null;

    const { title, excerpt, mainImage: openGraphImage } = document;
    const url = assemblePageUrl({ document, options });

    return (
      <div className={styles.seoItem}>
        <h3>Google search result preview</h3>
        <div className={styles.googleWrapper} style={{ width }}>
          <Truncate maxWidth={width} className={styles.title}>
            {title}
          </Truncate>
          <div className={styles.url}>{url}</div>
          {excerpt && (
            <Truncate maxChars={300} className={styles.description}>
              {toPlainText(excerpt)}
            </Truncate>
          )}
        </div>
      </div>
    );
  }
}

export default GoogleSearchResult;
