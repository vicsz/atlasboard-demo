# Atlasboard Demo 

Demo app of Atlasboard dashboard framework written in NodeJS including JIRA integration example. 

https://bitbucket.org/atlassian/atlasboard


## Adding Widget / Jobs / Dashboard Steps 

1. Make sure *atlasboard* is available from the command line -- you may need to run: npm install -g atlasboard
2. Create a new widget *atlasboard generate widget exampleWidget*
3. Create a new job *atlasboard generate job exampleJob*
4. Create a new dashboard *atlasboard generate dashboard exampleDashboard*
5. Update the exampledashboard.json to use / point to newly created widget / job.

## Debugging Raspberry PI

1. Turn on live logging in config/loggig.js  (liveLoggingWebAccess=true)
2. Live logging is available at /log


## Configuring for AWS Beanstalk Deploys

1. Ensure AWS CLI is installed -- on mac's -- *brew install awscli*
2. Run *eb init* from the project directory .. select existing nodeJS based Beanstalk instance
3. To deploy, run: *eb deploy*



## Raspberry PI Setup Notes

Notes for getting a Raspberry PI configured for "kiosk" mode -- including starting up a browser in fullscreen to point to webbased dashboard of your choice. 

## Raspberry PI Initial Setup for Kiosk Mode (Dashboard) 

Create a startup script:
```sh
nano /home/pi/startup.sh
```

Recommend file contents: 

```sh
#! /bin/sh
# launch the web page of choice (note update URL as needed) 
sudo -u pi epiphany-browser -a --profile ~/.config http://127.0.0.1/index.html --display=:0 > /dev/null 2>&1 &
sleep 15s;
# this does the same job as pressing the F11 key to force Kiosk mode
xte "key F11" -x:0 &
```

Add script to auto start:
```sh
sudo nano ~/.config/lxsession/LXDE/autostart
```
Append the following line
```sh
@/home/pi/startup.sh
```

Optional -- if dashboard server is hosted on PI also add Application start in the startup script.  To get latest source code updates automatically also add GIT updates, and application build step. 

###  Setup Notes - Incorrect Keyboard Settings 

If Default Keyboard is wrong — i.e. incorrect number keys :
```sh
sudo nano /etc/default/keyboard
```

###  Setup Notes - Getting to GUI from prompt 

```sh
startx
```
