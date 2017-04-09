module.exports = {
  onRun: function (config, dependencies, jobCallback) {
        
        var request = {
            url: "https://jira.atlassian.com/rest/api/latest/search?jql=" + "project = BAM AND issuetype = \"New Feature\" AND status = Open",

            //Uncomment following line if you require non-anonymous username password 
            //auth: {username: "username", password: "password"} 
        };

        dependencies.request.get(request, function(error, response, body) {

          var jsonBody = JSON.parse(body);

          dependencies.logger.info('JIRA Issues found :' + jsonBody.total); 

          jobCallback(error, { issueCount: jsonBody.total});
        });
  }
};