module.exports = {
  onRun: function (config, dependencies, jobCallback) {
    dependencies.easyRequest.HTML('http://google.com', function (err, html) {
      jobCallback(err, {title: config.widgetTitle, html: html});
    });
  }
};