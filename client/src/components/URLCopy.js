import { CopyToClipboard } from 'react-copy-to-clipboard'
import React, { Component } from 'react';

class URLCopy extends Component {

      render() {
          const url = window.location.href
        return (
            <CopyToClipboard text={url}>
                <button>Share the quiz!</button>
            </CopyToClipboard>
        );
    }
}

export default URLCopy;