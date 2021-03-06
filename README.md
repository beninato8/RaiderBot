# RaiderBot
## Table of contents
1. [Welcome to RaiderBot](https://github.com/dpalay/RaiderBot/blob/master/README.md#welcome-to-raiderbot)
  1. [Shameless Plug](https://github.com/dpalay/RaiderBot/blob/master/README.md#shameless-plug)
  2. [Intro](https://github.com/dpalay/RaiderBot/blob/master/README.md#intro)
2. [Setting up and Installing RaiderBot](https://github.com/dpalay/RaiderBot/blob/master/README.md#setting-up-and-installing-raiderbot-dev-stuff)
3. [RaiderBot Usage](https://github.com/dpalay/RaiderBot/blob/master/README.md#raiderbots-usage-after-its-live-on-a-server)


## Welcome to RaiderBot
__TL; DR:__  RaiderBot is for Pokemon GO Discord chats to help organize raids.

### Shameless Plug
I maintain and distribute RaiderBot free of charge.  However, if you enjoy it, please consider donating either directly through [PayPal](https://www.paypal.me/Lthanda) or becoming a patron on [Patreon](https://www.patreon.com/davepalay)  These contributions keep me caffeinated well enough to continue to develop, improve, and support RaiderBot and other bots like it!

### Intro
Pokemon GO's raid mechanics is a pretty interesting twist on an Augmented Reality game.  It forces players to come together and coordinate in order to receive better rewards than they could get alone. However, there is no in-game mechanism for organizing raids.  This makes it risky for some players to go out of their way to get to a location, only to find that no other players were going to that raid (or even knew that raid existed!). 

#### Early Steps and problems
The first solution to this problem was the organic establishment of communities.  Sub-reddits, Facebook groups, Group Mes, Hangouts, and Discord are all examples of places that Pokemon GO regional groups have established themselves.  In my area, near Madison, WI, we have mostly settled onto a single Discord server.  
On the server though, the following situation was fairly common:
> Person 1:  There's an Articuno at the Memorial Rock starting at 3:00.  Anyone interested?
>
> Person 2:  I've got 2 people, we can make it there by 3:20.
>
> Person 3:  I can come, but only if it starts by 3:05
>
> Person 4:  We can't make it
>
> Person 5:  I'll do it at 3:10
>
> Person 1:  So...  

At this point, there's typically several other people on the server waiting for this to resolve before they commit, until finally the time passes, and no one is going because no one else said they'd go too.

This problem gets even worse when the server has overlapping sub-regions.  In that case, the above conversation could be happening in "#downtown" and an entirely separate conversation could be happening in "#northside". With better communication, the raid could have happened.

#### Enter RaiderBot
With RaiderBot, we get to add another layer of organization. When you set up RaiderBot, you give it permission to manage messages in the channels that your raid groups are using.  Using the above example above, the chat would instead look something like this:
> Person 1:  There's an Articuno at Memorial Rock starting at 3:00
>
> Person 1:  !raider new 3:05, Articuno, Memorial Rock
>
> RaiderBot: __3:05__ Raid (4X) created by @Person_1 for __Articuno__ at __Memorial Rock__
>
> Person 3:  !raider join 4x, 3
>
> RaiderBot: @Person_3, added to raid 4X owned by @Person_1 Total confirmed is: _4_
>
> Person 2:  Can't make that, sorry.
>
> Person 2:  !raider new 3:45, Articuno, Memorial Rock, 2
>
> RaiderBot: __3:45__ Raid (9J) created by @Person_2 for __Articuno__ at __Memorial Rock__
>
> Person 4:  !raider join 9J, 4
>
> RaiderBot: @Person_4, added to raid 9J owned by @Person_2 Total confirmed is: _6_

And so on and so forth.  In other channels, anyone could type `!raider info 9j` or `!raider info 4x` to post information about that raid, including time, location, pokemon, and a list of current attendees.

## RaiderBot's Usage (After it's live on a server)
Probably the simpliest thing you can do to learn how to use the bot is type `!raider help` which the bot will then PM you a list of the available commands.

MORE COMING HERE.  

## Setting up and Installing RaiderBot (dev stuff)
Option 2 is listed first because Option 1 is way more work, but I expect more people to go that route.

### Option 2: Have me run it
This is the much simpler option for many, but would not be free.  I have a VPS with a 99.99% uptime SLA, so your RaiderBot would only be down during catastrophic failure.  Additionally, your code would be updated to always be current with each patch.

### Option 1: DIY
The recommended method of running RaiderBot is to host it yourself on a server capable of running Node applications.  There's quite a bit of setup involved, but I've done what I can to simplify this.
For now, I'm assuming you're running this on some local machine or a remote server that you have shell access (and thus can treat it like local).
__Note about Heroku:__ I did not design this with hosting elsewhere in mind.  I did work on a heroku build for a little, but couldn't get it stable.  If you want to go that route, consider yourself warned.

#### Install Node, NPM, and Python
There's tons of documentation on how to install these.  I may flesh out this section later, but for now, you should get them installed.

#### Install Git
This one's actually optional but HIGHLY recommended.  If you're going to do all the rest of this, you probably want to pull from this repository.  If you have git, you can watch this repository for updates and bring them into your own copy with very little effort.
I personally recommend [GitKraken](https://www.gitkraken.com/) for this.  They don't give me anything to say that, although I wish they did.  I'll modify these sentences if that ever changes.

#### Install a code editor
Another optional.  You've probably got something already, but having a dedicated code editor is really helpful. I use [VS Code](https://code.visualstudio.com/) and love it.

#### Pull the Repo to the local machine
If everything else is set up, this is where it actually starts to get easier, but it DOES assume you know how to use the command prompt in your OS (Windows, OSX, or *nix)
1. Create and open a directory for RaiderBot.  
2. run `git init` in that directory to create an empty repository
3. run `git pull https://github.com/dpalay/RaiderBot`
Congratulations.  You should know have all of RaiderBot's files in the directory.

#### Install dependencies
It's time to get some things put in!
1. run `npm install` in the directory with the files.  
  * This will install all of the node dependencies for Raiderbot locally. Raiderbot uses several other libraries
2. run ` pip3 install -r requirements.txt` in the directory with the files.

#### Create a bot
Head on over to [Discord's Bot creation page](https://discordapp.com/developers/applications/me) and make yourself a shiny new bot! For now, I suggest 1 bot per Discord server ("Guild", in Discord speak)
1. Click on "New Application" and give your bot a good name.  Pick a fun picture to represent it and creat it!
2. On this page, here is an item labeled "Client ID". You'll need this for a future step.
3. **Important step**: Your "App" isn't a bot yet.  To do that, you need go to the "Bot" tab on the left, and click "Add Bot".
4. One this page, there is an item labeled "Token". You'll need this for a future step.
5. Now that you have a Bot created, you need to specify permissions. Click on the "OAuth2" tab, which is right above the "Bot" tab.  Under "Scopes", check `bot`. Under "General Permissions", check `View Channels`. Under "Text Permissions", check `Send Messages`, `Manage Messages`, `Embed Links`, `Read Message History`, and `Add Reactions`.
6. Time to invite the bot to your server.  You can only do this for **servers you own**. Copy the link inside the "Scopes" box and open it in a new tab. 
7. Select the right server to add the bot to, and Double-check that everything looks right.  Once it does, Authorize the bot to join the server.

#### Update config.json
1. One of the files in the repository is `config.json.example`.  Copy that file and name it just `config.json`.
  * `config.json` is the file where we're going to be storing some VERY secret and important data.  **DO NOT POST YOUR config.json file to any websites**
2. The sample `config.json.example` file contains placeholders for the information for you to put in, such as your discord Token and Bot's user ID. 
3. Replace the `Your secret Token for this bot` with the token from step 4 of `Create a bot` above.  
4. Replace the `The discord user id of the bot` with the Client ID from step 2 of `Create a bot` above.
5. `raidChannels` will only be useful if you're using PokeAlarm's webhooks to post raids in your server, and is currently only if you use the same PA config that we're using on the Madison server.  If you're not doing that, then just leave this as `"raidChannels": []`
6. Save your `config.json` file.
7. Create a copy of `forms.json.example`. Copy that file and name it just `forms.json`.

#### Start the bot
If you did everything up to this point, you should be all set.  There are two ways of starting the bot:  
1. `node Raider.js config.json`
  * This is a great way to test changes to the bot, since the log outputs to the console.  However, if the bot crashes, then it does not reboot.
2. `npm start`
  * This actually launches another command: `pm2 start Raider.js`.  [PM2](https://www.npmjs.com/package/pm2) is a process management option designed for node.  It starts the process as a background process, and will automatically restart the process if it crashes.  Additionally, it comes with some pretty sick monitoring tools, and I'm currently adding integration into the [Dashboard](https://app.keymetrics.io/#/) it comes with.

## Final Thoughts
That should be it.  This is the first project that I've done that would potentially be large-scale, so your patience is appreciated.

## Contributing

 - Support for pokemon with multiple forms added by [Nicholas Beninato](https://github.com/beninato8)
