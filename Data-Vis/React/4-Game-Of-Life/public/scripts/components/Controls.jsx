const React = require('react');

class Controls extends React.Component {
    render() {
        return (
            <div className="controls container">
                <div className="row">

                    <div className="col s3">
                        {/*<i className="material-icons">play_arrow</i>*/}
                        {/*<i className="material-icons">pause</i>*/}
                        <a className="waves-effect waves-light btn"><i className="material-icons left">play_arrow</i>Play</a>
                    </div>
                    <div className="col s3">
                        <a className="waves-effect waves-light btn"><i className="material-icons left">shuffle</i>Randomize</a>

                    </div>
                    <div className="col s3">
                        <a className="waves-effect waves-light btn"><i className="material-icons left">clear_all</i>Clear</a>
                    </div>
                    <div className="col s3">
                        <a className='dropdown-button btn' href='#' data-activates='dropdown1'><i className="material-icons left">settings</i>Speed</a>

                        <ul id='dropdown1' className='dropdown-content'>
                            <li><a href="#!">Slow</a></li>
                            <li><a href="#!">Medium</a></li>
                            <li><a href="#!">Fast</a></li>
                        </ul>

                    </div>

                </div>

            </div>
        )
    }
}

module.exports = Controls;
