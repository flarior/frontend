var React = require('react');

var Week = React.createClass({
    render() {
        return (
          <div className="title">
            <div className="u-1/3 title--item title--previous">
              <a href="#">&lt;</a>
              <span className="text--small"><br/></span>
            </div>
            <div className="u-1/3 title--item title--data">
              <h3>September</h3> <br/>
              <span className="text--small">(11 - 17)</span>
            </div>
            <div className="u-1/3 title--item title--next">
              <a href="#">&gt;</a>
              <span className="text--small"><br/></span>
            </div>
          </div>
        );
    }
});

module.exports = Week;
