var React = require('react');

var Week = React.createClass({
    render() {
        return (
          <div className="title">
            <div className="u-1/3 title--item title--previous">
              <a href="#">&lt;</a>
            </div>
            <div className="u-1/3 title--item title--data">
              <h3>September</h3> (11 - 17)
            </div>
            <div className="u-1/3 title--item title--next">
              <a href="#">&gt;</a>
            </div>
          </div>
        );
    }
});

module.exports = Week;
