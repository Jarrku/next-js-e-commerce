import React from "react";
import ReactDOM from "react-dom";

const ellipsis = "\u00A0…";

function truncateWord(str: string) {
  return str.replace(/\s+\S+$/, "");
}

interface Props {
  maxWidth: number;
  maxChars: number;
  children: string;
  className?: string;
}

export default class Truncate extends React.Component<Props> {
  static defaultProps = {
    maxWidth: 500,
    maxChars: 300,
  };

  state = {
    truncatedChildren: this.props.children,
  };

  componentWillReceiveProps(nextProps: Props) {
    if (
      this.props.children !== nextProps.children ||
      this.props.maxWidth !== nextProps.maxWidth ||
      this.props.maxChars !== nextProps.maxChars
    ) {
      this.setState({
        truncatedChildren: nextProps.children,
      });
    }
  }

  componentDidMount() {
    this.truncate();
  }

  componentDidUpdate(prevProps: Props) {
    if (
      this.props.children !== prevProps.children ||
      this.props.maxWidth !== prevProps.maxWidth ||
      this.props.maxChars !== prevProps.maxChars
    ) {
      this.truncate();
    }
  }

  truncate() {
    if (this.props.maxWidth) {
      this.truncateWidth();
    }

    if (this.props.maxChars) {
      this.truncateChars();
    }
  }

  truncateWidth() {
    const node = ReactDOM.findDOMNode(this);

    if(!isElement(node)) return;

    if (node.scrollWidth > this.props.maxWidth) {
      let children = this.props.children;
      (node as HTMLElement).innerText = children + ellipsis;

      while (
        node.scrollWidth > this.props.maxWidth &&
        children !== truncateWord(children)
      ) {
        children = truncateWord(children);
        (node as HTMLElement).innerText = children + ellipsis;
      }

      this.setState({
        truncatedChildren: children + ellipsis,
      });
    }
  }

  truncateChars() {
    if ((this.props.children || []).length > this.props.maxChars) {
      let children = this.props.children;
      while (
        (children + ellipsis).length > this.props.maxChars &&
        children !== truncateWord(children)
      ) {
        children = truncateWord(children);
      }

      this.setState({
        truncatedChildren: children + ellipsis,
      });
    }
  }

  render() {
    const { maxWidth, maxChars, children, ...otherProps } = this.props;
    const { truncatedChildren } = this.state;

    return <div {...otherProps}>{truncatedChildren}</div>;
  }
}

function isElement(node: Element | Text | null): node is Element {
  return !!node;
}
