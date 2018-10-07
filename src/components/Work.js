import React from 'react';

const Work = () => (
    <div className="section" id="work">
        <h1>Work</h1>
        <br />
        <div id="web-proj">
            <div className="proj">
                <h3>Downme.xyz</h3>
            </div>
            <div className="proj">
                <h3>Musiclub</h3>
            </div>
            <div className="proj">
                <h3>University CMS</h3>
            </div>
        </div>
        <hr />
        <h2>non-web related personal project</h2>
        <div id="non-web-proj">
            <div className="proj">
                <div className="columns is-desktop">
                    <div className="column">
                        <h3>&#10093; LiteEditor &#10092;</h3>
                        <img src="https://gph.to/2Rue98F" alt="LiteEditor has multiple themes and fonts" />
                    </div>
                    <div className="column projTxt">
                        <h4>a very lightweight code editor ~</h4>
                        <br />
                        <p>
                            Written in Java using JavaFX and <a href="https://github.com/FXMisc/RichTextFX">RichTextFX</a>
                        </p>
                        <br />
                        <i>Supports Syntax Highlighting</i>
                        <i>Multiple Colour Themes and Fonts Built-in</i>
                        <i>Minimalist Design</i>
                    </div>
                </div>
                
            </div>
            <div className="proj">
                <div className="columns is-desktop">
                    <div className="column">
                        <h3>&#10093; LiteNotes &#10092;</h3>
                        <img src="https://gph.to/2RxnXyP" alt="LiteNotes converts normal text into HTML" />
                    </div>
                    <div className="column projTxt">
                        <h4>converts notes into styled HTML</h4>
                        <br />
                        <p>
                            Written entirely in Java and the GUI used JavaFX.
                        </p>
                        <br />
                        <i>A headless CLI tool that supports conversion from the terminal</i>
                        <i>Custom CSS that styles the text</i>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
)

export default Work;