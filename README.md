# atlasboard-demo, my awesome Atlasboard dashboard
This is the README for my dashboard. Any info I need to pass on to other users will go here.

## Adding Widget / Jobs / Dashboard Steps 

1. Make sure *atlasboard* is available from the command line -- you may need to run: npm install -g atlasboard
2. Create a new widget *atlasboard generate widget exampleWidget*
3. Create a new job *atlasboard generate job exampleJob*
4. Create a new dashboard *atlasboard generate dashboard exampleDashboard*
5. Update the exampledashboard.json to use / point to newly created widget / job.

## Debugging 

1. Turn on live logging in config/loggig.js  (liveLoggingWebAccess=true)
2. Live logging is available at /log


## Configuring for AWS Beanstalk Deploys

1. Ensure AWS CLI is installed -- on mac's -- *brew install awscli*
2. Run *eb init* from the project directory .. select existing nodeJS based Beanstalk instance
3. To deploy, run: *eb deploy*

