# Shout [![](https://badge.fury.io/js/shout.png)](https://www.npmjs.org/package/shout)

### [Try the Demo](http://demo.shout-irc.com/)

__What is it?__  
Shout is a web IRC client that you host on your own server.

__What features does it have?__  
- Multiple user support
- Stays connected even when you close the browser
- Connect from multiple devices at once
- Responsive layout — works well on your smartphone
- _.. and more!_

## Running locally

Click the button bellow to quickly and safely install this project on your local machine.

[![Run project](https://s3-sa-east-1.amazonaws.com/assets.azk.io/run-project.png)](http://run.azk.io/start/?repo=azk-button/shout&ref=azkfile)

The `Run Project` button employs `azk`, a lightweight open source orchestration tool that will automatically isolate and configure the application's environment for you.

Learn more about `azk` [here](Azkfile.md).

## Deploying to DigitalOcean

After you run this project locally using [`Run Project` button](#running-locally), deploying to [DigitalOcean](http://digitalocean.com/) is very simple.

First, be sure you have SSH keys configured in your machine. If you don't have it yet (or if you aren't sure about it), just follow steps 1 and 2 of [this tutorial](https://help.github.com/articles/generating-ssh-keys/).

Next, put your [personal access token](https://cloud.digitalocean.com/settings/applications) into a `.env` file:

```bash
$ cd path/to/the/project
$ echo "DEPLOY_API_TOKEN=<YOUR-PERSONAL-ACCESS-TOKEN>" >> .env
```

Then, just run the following:

```bash
$ azk shell deploy
```

The `Run Project` button employs `azk`, a lightweight open source orchestration tool that will automatically isolate and configure the application's environment for you.

Find instructions for further resources (mostly customizations) to deploy to DigitalOcean using `azk` [here](http://docs.azk.io/en/deploy/README.html).

## License

Available under [the MIT license](http://mths.be/mit).
