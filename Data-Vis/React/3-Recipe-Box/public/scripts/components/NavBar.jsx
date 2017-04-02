var React = require('react');
class NavBar extends React.Component{
    render() {

        let style = {
            brandStyle:  {
                fontFamily: "'Spirax', cursive",
                fontSize: "34px"
            }
        };

        let brandStyle = {
                fontFamily: "'Spirax', cursive"
        };


        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo center" style={style.brandStyle}>Recipe-Box</a>

                    </div>
                    <div className="nav-content">
                        <span className="nav-title"></span>
                        <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
                            <i className="material-icons">add</i>
                        </a>
                    </div>
                </nav>
            </div>
        )
    }
}

module.exports = NavBar;