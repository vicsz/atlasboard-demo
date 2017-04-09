module.exports = {

  onRun: function (config, dependencies, jobCallback) {
    dependencies.logger.info('Job action being called!!'); 

    dependencies.easyRequest.JSON('https://status.github.com/api/status.json', function (err, json) {
      jobCallback(err, {title: config.widgetTitle, status: json.status});
    });
  }
};