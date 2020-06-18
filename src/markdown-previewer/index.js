import React from "react";
import ReactMarkdown from "react-markdown";
import "./markdown-previewer.scss";

// function MarkdownPreviewer() {
//   return (
//     <div>
//       <h1>Markdown Previewer</h1>
//     </div>
//   );
// }

const markdown = `
  # Header 1
  ## Header 2

  [I'm an inline-style link](https://www.google.com)


    <code><p>Inline code</p></code>

  ~~~
    {
      "firstName": "John",
      "lastName": "Smith",
      "age": 25
    }
   ~~~

   Heres some code, \`<div></div>\`, between 2 backticks.

  * list item
  * list item

  > Blockquotes are very handy in email to emulate reply text.

  
  ![Cat](src/img/cat.png)  
  ** bold **

  __bold Html__
`;

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: markdown,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      editor: e.target.value,
    });
  }

  render() {
    return (
      <div className="editorWrap">
        <h1>Markdown Previewer</h1>
        <div className="editorWrap">
          <textarea
            id="editor"
            name="editor"
            onChange={this.onChange}
            value={this.state.editor}
          ></textarea>
        </div>
        <div className="previewWrap">
          <div id="preview">
            <ReactMarkdown source={this.state.editor} />
            {/* {this.state.editor} */}
          </div>
        </div>
      </div>
    );
  }
}

export default MarkdownPreviewer;
