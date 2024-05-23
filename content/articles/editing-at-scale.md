---
cover: https://images.pexels.com/photos/1054713/pexels-photo-1054713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
date: 2022-08-23T00:00:00.000Z
layout: article
title: Editing at Scale - Tips to Date

description: Log of tips learned to date while editing at scale
---

A log of tips to remember RE: editing and creating content at scale

## Getting Final Cut Pro X Markers into Youtube as Chapter Markers

a FREE no XML way to get FCPX chapters into youtube

When creating content at scale using FCPX, it is often necessary to use chapters and marker points to label content appropriately.

Exporting these video markers into youtube chapter timestamps may often be required.

However this is not easily possible in the core app.

### existing methods
- export XML - kinda annoying and the markers are all nested and timestamp data isn't preserved for each marker strangely.
- Logic Pro Plugin - Plugin is called [Creaters best friend](https://apps.apple.com/us/app/creators-best-friend/id1524172135?mt=12) - it's Cheap however not free for a problem that should have simple solution.
- Type it out - Overly manual, cant do that.

### The method I use

open the index tab in FCPX - and click the "tags" heading to show a list of all your markers and the text they have.

Resize the window so all your markers are fully visible and readable.

Take a screenshot of the name column, making sure to select only this portion of the screen (not the whole screen or position column).

Then enter this picture into an online img to text converter - [imagetotext.info](https://www.imagetotext.info/) is the one i used.
This should spit out a list of all your marker text, one on each line.
This can be pasted into a new column in google sheets

Do the same for the position column with the timestamps, and past in the adjacent column in google sheets. 

Now you can just paste the two columns into any youtube description and youtube will recognise the chapters.

You may need to remove the last two digits of the timestamps, but you can also automate this by going back to google sheets, and use the formula in a new column: "=left(timestamp,8)" - which should convert something like 00:03:15:47 into 00:03:15.
