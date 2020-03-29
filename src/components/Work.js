import React from 'react';


const Work = () => (
    <div className="section" id="work">
        <h1>web related</h1>
        <br />
        <div id="web-proj">
            <div className="proj" id="downmexyz">
                <div className="columns is-desktop">
                    <div className="column">
                        <h3>&#8681; Downme.xyz &#10066;</h3>
                        <img src="https://i.imgur.com/TgLPGAI.png" alt="uploading + downloading from terminal" />
                    </div>
                    <div className="column projTxt">
                        <h4>sharing files from the commandline</h4>
                        <br />
                        <p>Go server + React frontend + Redis + AWS S3 storage</p>
                        <br />
                        <i>Heavily inspired by <a href="https://transfer.sh/" target="_blank" rel="noopener noreferrer">transfer.sh</a></i>
                        <p>visit <a href="https://downme.xyz/" target="_blank" rel="noopener noreferrer">downme.xyz</a></p>
                    </div>
                </div>
                
            </div>

            <div className="proj" id="SimpleCSS">
                <div className="columns is-desktop">
                    <div className="column">
                        <h3>&#128396; SimpleCSS &#128393;</h3>
                        <img src="https://i.imgur.com/535uowc.png" alt="Minimalistic CSS Framework" />
                    </div>
                    <div className="column projTxt">
                        <h4>simple minimalistic css framework</h4>
                        <br />
                        <p>Flexbox columns</p>
                        <br />
                        <p>visit <a href="https://ac5tin.github.io/simplecss/" target="_blank" rel="noopener noreferrer">simplecss</a></p>
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
                        <h3>&#128477; SimplePassword &#9919;</h3>
                        <img src="https://i.imgur.com/HzD2Tt0.png" alt="Minimalistic Password manager" />
                    </div>
                    <div className="column projTxt">
                        <h4>a minimalistic password manager that work in the terminal ~</h4>
                        <br />
                        <p>Written in pure Go</p>
                        <br />
                        <p>Visit <a href="https://github.com/ac5tin/simplepwd" target="_blank" rel="noopener noreferrer">Simplepwd</a></p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
)

export default Work;