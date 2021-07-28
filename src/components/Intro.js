import React from "react";
import "./style/intro.css";
import photo from "./style/photo.jpg";

function Intro() {
  return (
    <div className="intro">
      <div className="welcome-div">
        <code>
          &lt;h3 style= &#123;&#123; font-family: "Kaushan Script" &#125;&#125;
          &gt;
          <h3 style={{ fontFamily: "Kaushan Script" }}> Hello There ! </h3>
          &lt;/h3&gt;
        </code>
        <code>
          &lt;h1&gt; &lt;strong&gt; &lt;i&gt;
          <h1>
            <i> Sourav Koley here </i>
          </h1>
          &lt;/i&gt; &lt;/strong&gt; &lt;/h1&gt;
        </code>
        <code>
          &lt;h5 style= &#123;&#123;color: #94F618 &#125;&#125;&gt; &lt;i&gt;
          <h5>
            <i> A Web developer focusing on front-end from india </i>
          </h5>
          &lt;/i&gt;&lt;/h5&gt;
        </code>
      </div>
      <div className="photo-div">
        <code>&lt;img src= </code>
        <img src={photo} alt="loading" id="photo" />
        <code>/ &gt;</code>
      </div>
    </div>
  );
}

export default Intro;
