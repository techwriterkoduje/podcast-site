---
description:
  CCMS vendors are creating a flase equivalency between docs as code and their
  systems. If naything is wrong with docs as code, their CCMS is supposed to be
  the answer. We beg to differ.
author: Paweł Kowaluk, Michał Skowron
---

# A tech Writing CCMS can also be a broken promise

This article is inspired by Sarah Moir's
[article about docs as code with a similar title](https://thisisimportant.net/posts/docs-as-code-broken-promise/),
but it's by no means an attack on the author. Nor are we trying to be nasty,
mean, or to mock anyone. This is rather a response to people who are using the
article to sell you an enterprise CCMS as a remedy to the problems of docs as
code.

Their shenanigans cannot go uncontested.

Sarah's article rightfully points out what problems docs as code can cause and
how much work it takes to make the most of it. We have a lot of empathy for
those who experience hardship but at the same time we think that the article
doesn't tell the whole story. People saying "you might as well pay a vendor" are
creating a false equivalency. We would like to point out that you will pay a bag
of money 💰 and replace your docs-as-code problems with a whole set of new
problems. You will be babysitting a system, a vendor, and your docs, and then
also paying an arm and a leg for it.

But let's not speak in generalities. Let's go through our grievances one by one.

## The trailer is better than the movie

Sarah lists several promises that, in her opinion, the docs as code philosophy
doesn't deliver. However, we have spoken to multiple real-life vendors who
promised us the moon and then we found ourselves lost in the emptiness of space.

The following are actual quotes, not even heightened for dramatic effect:

"We'll allow creating branches, just like Git" \- turns out it is very much
**not** like Git and the branches are just copies of folders.

"You can publish from any source format you want" \- as long as it's DITA or a
.zip archive of pages that have already been published with something else.

"The UI is customizable, you will be able to apply your branding" \- cannot
change spacing and adding a font costs $3k a year.

"We'll add support for publishing PDFs in Chinese" \- have to use a Windows
virtual machine where the system language is set to Chinese. (Okay, that one was
a long time ago, but it was just too funny not to quote.)

They will promise anything, but you pay to get all your dreams dashed.
Meanwhile, your PDF or website is not the quality you would expect, and you are
left frustrated and burnt out.

## Avoid complexity \- focus on writing

You are a writer, it's what you do best. You should be given time to research
topics, interview SMEs, study your audience, and then write, edit, and refine.
We agree with that. You should be given a blank sheet of paper and a keyboard,
and then have at it.

But this is not what you are given by a CCMS. Every little tool, no matter how
similar it is to a piece of paper, is not that. It has quirks and bugs and
errors that you will run into. It won't work on your OS, so you need to run a
virtual machine, or it's an old version of Oxygen with a plugin, or it requires
Java 8, or a specific web browser. Now you're worrying about all those technical
details, like you would with Markdown.

And even if it works perfectly well, it's never just writing. Your CCMS makes
assumptions on how docs should be versioned and how metadata should be injected.
So you spend time learning the system to find out what works with what.

Then you generate your website or PDF and you notice something is not right \- a
paragraph is missing, or something does not display correctly. Among all this
complexity, you made a mistake. That's okay, that's understandable. Mistakes are
there until you correct them. So you go back and try, and sometimes you fix it.
But other times, you can't fix it \- it's a proprietary system, intellectual
property, a treasure of human achievement, so you need to go back to a
technologist \- either your internal doc tools support team, or the vendor. And
now, instead of writing, you're dealing with all that.

Sarah points out that Git is confusing. We can't deny that it takes time and
effort to grok this version control system, but we could say the same thing
about any other solution that you aren't familiar with. Is learning a
vendor-specific versioning system easier? It also has its rules that you need to
dig into and they can also be confusing, at least at the beginning of your
journey. You can learn this vendor solution using their docs or courses.

Similarly, you can learn Git. It can be even easier for Git than for vendor
solutions because everyone in your software organization already uses it and can
help. Plus, there's plenty of resources available online for free.

The same cannot be said for vendor solutions. More often than not, learning
resources and knowledge are delivered and controlled by the vendor, which can
significantly reduce their variety and completeness.

## Don't take shared ownership for granted {#don't-take-shared-ownership-for-granted}

Sarah is disappointed with docs as code because it doesn't deliver on its
promise of shared ownership of documentation. In our opinion, it isn't the issue
with the docs as code philosophy itself. If you make a decision about using a
particular solution in isolation, there's nothing shared about it. If the doc
team decides to use docs as code and doesn't involve devs in the decision making
process at the very beginning, they shouldn't be surprised that they're on their
own with their technical challenges.

Sarah talks about merge gates and build checks and how they're great in theory
but in practice you need to build them yourself so in most cases they don't
exist. Again, if you work across teams while making decisions about using docs
as code, your chances of getting those checks are much higher.

On the other hand, if the dev team makes such a decision without talking to the
doc team, they shouldn't be surprised that writers are reluctant to use their
state-of-the-art toolset, struggle with basic tasks, and are slow to deliver
content. As the name suggests, tech writers are technical but by no means are
they programmers, so they need support with tooling.

In both cases, it's an organizational problem. But at least, there's a promise
that can be delivered if you make decisions and set expectations correctly. With
a vendor solution you cannot break this promise because it doesn't exist in the
first place. Devs won't touch your CCMS with a ten-foot pole so shared ownership
of documentation is as real as yeti. By choosing a vendor solution, you
automatically exclude other teams from truly participating in the doc delivery
process. No promise, no problem.

## Control the tools

In case of a vendor solution, you get a unified writing environment, most likely
a bundled editor of some kind. In Sarah's opinion, it's better than what docs as
code offers \- an uncontrolled environment where people use different writing
tools. To us, it's quite the opposite. Imagine a dev coding happily in VS Code,
implementing a new feature. When they're done, they want to update the docs.
Instead of doing it in their coding environment, committing changes and moving
to another task, they are forced to switch context completely, open a CCMS
editor, check out the proper topic and do all other things that are required to
make an update. (Assuming they have a license to use it…) In such a scenario,
more often than not, the dev will try not to touch the docs.

Sure, it's easier to control a CCMS tool made strictly for writing docs. You can
enforce all the linters, formatters, etc. But we think it's not worth it if it
means sacrificing contributions from non-writers. You can tell your writing
teams which linters and formatters they have to use, and suggest your
non-writers do the same.

Also, there are ways to share settings in an environment where people write in
whatever editor they like. Devs do it all the time for coding \- in many
projects, you have freedom to choose your IDE and it works. A good example of
this is Prettier. It's a community linter which has a standardized way of
defining settings in a file, and most IDEs support it.

## Somebody takes care of problems

So let's talk about what happens now that something is broken. If you have a doc
tools support team, they will deal with it, or interface with the vendor. But
there are things they cannot change, because it's precious proprietary code, so
it's the vendor who has to fix it. Except they "don't have cycles this quarter".
And you might say "this is not my problem" which is fair enough, but your thing
is still not working until somebody takes care of it.

Or you might say "but with open source tech, the same thing would happen" \- to
which we say yes, but it would be much easier to fix. Because the code is open,
there's plenty of people who would've dealt with it before (i.e., you can Google
it), and once it's fixed, you know how to deal with things like that in the
future.

Fixing a technical problem in open source stuff is only unfair if you, the
writer, are left to your own devices. But then it's not a problem with choosing
the wrong tool. You **should** get support from either a dedicated doc tools
team, or from software developers at your company. If you do not, it's an
organizational issue and it would've been the same with a vendor. We've already
covered this point in
[Don't take shared ownership for granted](#don't-take-shared-ownership-for-granted).

## A fundamental conflict of interest

You may argue that a vendor solution comes with real support. However, the
support team you're paying for is hoping you do not ask them for help. The whole
business model relies on **people paying for the service and not using it**, so
each time they do something for you, they lose money. You think we're
exaggerating? Ask your own boss how your support team works and weep.

And if you ask for something which goes beyond the scope of simple issues, they
won't "have cycles this quarter". What are you going to do? Sue them? If your
organization has left you in this state of neglect, they are not going to use
their army of lawyers to fight for you. They'll have whiskey and cigars with Reg
the Customer Success Manager, and they will go into a conference room where they
will be shown all the advances coming in the next release.

## Awesome features

But for the sake of the argument, let's say nothing ever goes wrong, or if it
does somebody takes care of it and you never worry. Now you get to use all these
amazing features, like simplified workflows, full automation, and seamless
collaboration.

If you've been paying attention, you probably know we are about to dispel these
illusions now.

### Simplified workflows

Or masterful versioning, or hands-off content management, or whatever they call
it. It's never done the way your company does versioning. It's always some weird
idea that's supposed to work for everyone but works for very few. For example,
the CCMS wants you to maintain a single version and once it's published, you
move on to another one. Updating multiple releases is not a feature. Or the
opposite, every update causes updates in multiple places, so it's a very
labor-intensive process.

Whatever it is, you have to **change your workflow to suit the tool**.

A concrete example of this could be a reused piece of content \- a paragraph
about something that's universal across 24 of your products, so it's reused.
Until it's not and you have to "break reuse" in 12 places. How does the vendor
intend for you to do it? You need to open 12 docs and clickety-clack some
options. Yes, it might be easy to do, but it's most likely error-prone and
annoying.

What's the point here? The simplified workflow means you have to do things a
certain way and cannot deviate too much, otherwise it wouldn't be simplified.

Now, if this was docs as code and you were using Git, and you were already
well-versed with how things work, you could issue a few commands or write a
script and deal with any edge case that comes your way. Your skills would be
sharper and you would have more freedom.

### Full automation

Just click this button and your PDF/website is published. But where? Is the CCMS
now your documentation portal? Shouldn't this be somewhere on a website your
company already has?

And if the CCMS allows you to publish to any platform and automate your
integrations, what happens when something changes? Like your company changes the
release strategy, or the vendor system is behind on security. You will have to
go back to the vendor or whoever set it up and fix it. Upgrade the old Tomcat
server running on an old virtual machine somewhere, the last one at your
company, because the vendor license agreement does not allow running their
solution in a CI/CD pipeline or on a server in the cloud.

You don't know what that last part means? Then good luck making it work. 😅

### Seamless reviews

Get your SMEs to review the content in the CCMS \- it's that simple\! That is
assuming you don't have to be a technical writer to understand what's going on.
If your SMEs are programmers, they could probably learn anything, while mumbling
complaints quietly. But any non-technical folks will struggle, so you will spend
time teaching them, or copying their comments from emails, or Google Docs, or
Adobe PDF reviews.

That is, if your company can afford enough "reviewer seats". That's right, you
have to pay\! You might say "what do I care?" Granted, if your company pays, you
don't have to care. You only have to care if they don't.

Sarah rightfully points out that reviewing content directly in platforms like
GitHub or GitLab doesn't work well. But does this argument really invalidate
using docs as code? Our experience tells us that such tools can be used mostly
for reviewing simple changes. For more complex modifications spanning across the
document, you need to find something better.

It's exactly the same when you review code. It's not like devs review all their
code directly in GitHub. They have more robust solutions, like VS Code plugins
or Git clients built into their IDEs, that offer more features and better user
experience. The beauty of open source is there is this huge variety of solutions
that have been tested by the community. And your dev community will probably
have solutions. After all, they're the ones who will be doing the reviewing.

So you could be reviewing a copy of your docs built from a branch, hosted on a
side-server, with comments enabled by a free comment plugin. And then the review
is done, CI/CD cleans up the deployment. Or it's some other solution that a
single dev can put together in a couple of days. And then it's yours forever.

## So what? I have to use Markdown in Git?

No, we're not saying that. The thesis of this article is not "there's a solution
that fits all and it's docs as code". Problems described by Sarah are real, no
doubt about it, but for us the article **is used by bad actors** to create a
false equivalency between docs as code and vendor CCMS. The article lists a lot
of problems you could run into when doing docs as code, and they are all true
grievances somebody has. And then a CCMS vendor grabs the article and uses it in
their marketing to say: "look at all these bad things, they never happen with
our tools\!"

For us, the docs as code model isn't the culprit. Sarah doesn't give us any
background on who and how decided to implement this model, but we're pretty sure
that the issues she described could have been avoided. Maybe it's by involving
all interested parties in the decision making process, stating goals and
requirements together, and setting the right expectations before implementing
the solution. We don't know the exact situation, so we're only hinting at one
possible avenue.

Each and every system will have its issues, and it will be up to you to deal
with them. It's your choice how you approach it. Will you learn some proprietary
vendor CCMS and deal with people and politics to make your project move forward
(and pay a lot of money for the experience)?

Or will you sharpen your technical skills, use free and open technology, and
have the satisfaction of approaching your docs holistically? Yeah, it's hard.
Your team's time and emotional work is probably similar to what you go through
with a CCMS, but there's no additional vendor fee attached. And your skillset
expands with skills you can take with you anywhere you go.

Is this a fairer equivalency? That's up to you to decide.
