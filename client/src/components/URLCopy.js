import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { Component } from "react";
import { PromiseProvider } from "mongoose";


class URLCopy extends Component {
  render() {
    const url = window.location.href;
    return (
      <CopyToClipboard text={url}>
        <span
          class="d-inline-block"
          data-bs-toggle="popover"
          data-bs-content="Link Copied!"
        >
          <button id="shareButton">
            Share the quiz!
          </button>
        </span>
      </CopyToClipboard>
    );
  }
}

export default URLCopy;
