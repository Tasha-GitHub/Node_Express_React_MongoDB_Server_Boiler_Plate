// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

var Main = require("./components/main");


// This code here allows us to render our main component (in this case Parent)
if (document.querySelector('#app')) {
	ReactDOM.render(<Main />, document.getElementById("app"));
}
