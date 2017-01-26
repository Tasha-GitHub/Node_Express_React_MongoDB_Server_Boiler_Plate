// Include React
var React = require("react");

// Here we include all of the sub-components
// subcomponent1
// subcomponent2

// Requiring our helper for making API calls
var helpers = require("../utils/helpers");

// Create the Parent Component
var Nav = React.createClass({

  // Here we render the function
  render: function() {
    return (
        <nav className="bg-info navbar">
          <div>
            <ul className="nav nav-pills" role="tablist">
              <li role="presentation" className="navigation"><a href="/">Home</a></li>
              <li role="presentation" className="navigation"><a href="/tab1">tab1</a></li>
              <li role="presentation" className="navigation"><a href="/tab2">tab2</a></li>
            </ul>
          </div>
        </nav>
    );
  }
});

// Export the component back for use in other files
module.exports = Nav;
