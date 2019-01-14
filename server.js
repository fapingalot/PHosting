// Angular requires Zone.js
require('zone.js/dist/zone-node');

const express = require('express');
const logger = require('morgan');
const compression = require('compression');
const seo = require('seo-bot-detect');
const { ngExpressEngine } = require('@nguniversal/express-engine');
const {
  provideModuleMap
} = require('@nguniversal/module-map-ngfactory-loader');

// Express App
const app = express();

// Config
app.set('port', process.env.PORT || 4000);
app.use(logger('dev'));
app.use(compression());

// import server module bundle
var {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP
} = require('./dist/phosting-client-server/main');

// set up engine for .html file
app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)]
  })
);

app.set('view engine', 'html');
app.set('views', 'dist/phosting-client');

// server static files
app.use(express.static(__dirname + '/dist/phosting-client', { index: false }));

// return rendered index.html on every request
app.get('*', (req, res, next) => {
  if (seo(req)) {
    res.render('index', { req, res });
  } else {
    res.sendFile(__dirname + '/dist/phosting-client/index.html', { req, res });
  }
});

app.listen(app.get('port'), () => {
  console.log(
    '  Listening on http://localhost:' +
      app.get('port') +
      ' in ' +
      app.get('env')
  );
  console.log('  Press Ctrl+C to quit');
});
