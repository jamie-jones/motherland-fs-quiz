import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const url = window.location.href;

class ShareBtn extends Component {
  copiedURL = () => {
    var x = document.getElementById("copied");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  render() {
    return (
      <div>
        <CopyToClipboard text={url}>
          <a className="share" onClick={this.copiedURL}>
            <div id="copied">URL Copied!</div>
            <i className="fas fa-2x fa-share-alt-square share-icon"></i>
          </a>
        </CopyToClipboard>
      </div>
    );
  }
}

export default ShareBtn;
