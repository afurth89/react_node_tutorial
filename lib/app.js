/**
 * Created by andrewfurth on 11/7/16.
 */

var http = require('http')
var React = require('react')
var ReactDOMServer = require('react-dom/server')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(
      ReactDOMServer.renderToString(
        React.createElement("html", null, 
          React.createElement("head", null, 
	          React.createElement("title", null, "Hello World")
          ), 
          React.createElement("body", null, 
          "app.jsx, automatically processed" + ' ' +
          "through gulp and gulp-react, with" + ' ' +
          "node automatically restarted" + ' ' +
          "through gulp-nodemon!"
          )
        )
      )
    )
}).listen(1337);
console.log('Server running at http://localhost:1337/');





