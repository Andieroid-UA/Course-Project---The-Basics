# Recipe and Shopping List App

![We are Building this](image.png)

Make sure, you do create that app by also adding the --no-strict flag to the ng new command - otherwise you will run into issues later on (we'll still dive into that "Strict Mode" later in the course of course, no worries)!

We'll also install the Bootstrap CSS Framework and in this course, we use version 3 of the framework. Install it via npm install --save bootstrap@3 => The @3 is important!

Additionally, when using a project created with Angular CLI 6+ (check via ng v ), you'll have an angular.json file instead of an .angular-cli.json file. In that file, you still need to add Bootstrap to the styles[] array as shown in the next video, but the path should be node_modules/bootstrap/dist/css/bootstrap.min.css , NOT ../node_modules/bootstrap/dist/css/bootstrap.min.css. The leading ../ must not be included.

--------------

*In the video 'Creating the Components' there is a chyron that pops up to say a command has changed to skipTests true instead of --spec false that Max uses. The actual new command is --skip-tests true with a hyphen between the words. ng g c componentname --skip-tests true*

