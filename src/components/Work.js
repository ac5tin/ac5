import React from 'react';


const Work = () => (
    <div className="section" id="work">
        <h1>Work</h1>
        <br />
        <div id="web-proj">
            <div className="proj" id="downmexyz">
                <div className="columns is-desktop">
                    <div className="column">
                        <h3>Downme.xyz</h3>
                        <img src="https://gph.to/2pHcG2b" alt="uploading + downloading from terminal" />
                    </div>
                    <div className="column projTxt">
                        <h4>sharing files from the commandline</h4>
                        <br />
                        <p>Node.js server + PostgreSQL database + AWS S3 storage</p>
                        <br />
                        <i>Heavily inspired by <a href="https://transfer.sh/">transfer.sh</a></i>
                        <p>visit <a href="http://www.downme.xyz/">downme.xyz</a></p>
                    </div>
                </div>
                
            </div>
            <div className="proj" id="musiclub">
                <div className="columns is-desktop">
                    <div className="column">
                        <h3>Musiclub</h3>
                        <img src="https://media.giphy.com/media/5ibv9xcRLYf02Mz5Xs/giphy.gif" alt="uploading + downloading from terminal" />
                    </div>
                    <div className="column projTxt">
                        <h4>online music instrument store</h4>
                        <br />
                        <p>php for backend and jQuery on the frontend</p>
                        <br />
                        <i>supports PayPal</i>
                        <i>nice dashboard for staff members</i>
                        <i>simple and easy to use interface</i>
                        <p>visit <a href="http://www.musiclub.rf.gd/">musiclub.rf.gd</a></p>
                    </div>
                </div>
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