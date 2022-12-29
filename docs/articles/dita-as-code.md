---
title: DITA as code - a modern approach to the classic standard
description:
  This article aims to show how you can use DITA in the docs as code model
---

The title of this article may raise some eyebrows among our fellow content
specialists. We are aware that for some of them “DITA as code” may sound like an
oxymoron or be the last thing they would think of. Nevertheless, we decided to
explore this unconventional idea and we hope that you will join us on this
exciting journey to discover new opportunities for the tech comm world.

## Purpose of this article

This article aims to show how you can use DITA in the docs as code model. Unlike
some of the more accessible but simpler markup languages like Markdown, DITA
offers a structured framework for content creation. At the same time, it has
enough flexibility to fit modern workflows and create a collaborative space for
cross-functional teams.

We’re not saying that:

- DITA is a silver bullet for your content challenges and you should **always**
  use it
- DITA is better than Markdown or other markup languages
- CCMSes are pure evil

Instead, we want to convince you that:

- Thinking “either DITA **or** docs as code” is not right
- Docs as code is not reserved only for light markup languages and popular
  static site generators
- DITA can be cool
- DITA can still hold up in the face of rapidly changing modern technologies
- DITA can be used in the docs as code model and in some cases can give you more
  benefits than simple markup languages

## Tribute

Before we move on to the areas that we want to explore, we would like to stop
for a moment and pay tribute to the pioneers of the “DITA as code” idea - “DITA
For Small Teams”. This project hasn’t been active for a few years now but we
still encourage you to learn more about it at
[http://www.d4st.org/](http://www.d4st.org/).

## What is “docs as code”?

Docs as code isn't a specific tool or solution. It's a philosophy, approach,
model of work where you use the same techniques, tools and processes for
documentation as you use for code. Typically in this model, you store sources of
your documentation in a version control system, you write your content using a
markup language and you automate the process of building and publishing the
docs. However, there are no hard and fast rules on what tools and technologies
constitute a docs-as-code setup. That's why we are bold enough to claim that
DITA can work well in such a setup.

If you want to read more about docs as code, you can try these resources:

- [“Docs like code” by Anne Gentle](https://www.docslikecode.com/book/)
- [https://technology.blog.gov.uk/2017/08/25/why-we-use-a-docs-as-code-approach-for-technical-documentation/](https://technology.blog.gov.uk/2017/08/25/why-we-use-a-docs-as-code-approach-for-technical-documentation/)
- [https://www.writethedocs.org/guide/docs-as-code/](https://www.writethedocs.org/guide/docs-as-code/)
- https://www.knowledgeowl.com/home/docs-as-code

## Goals of the docs as code model

The docs as code approach sounds interesting but why should you bother to use
it? What benefits do you get?

Here are the main goals that docs as code tries to achieve:

- Better collaboration with developers
- Easier maintenance and faster delivery through automation
- More eagerness from developers to actively contribute to documentation - they
  can create content in the same context as they write code
- Higher quality of documentation, as a result of all the points above
- Cost and time savings - you use the toolset that is already available in the
  company therefore you don't need to buy new tools, spend time on research
  before buying a new solution, or worry about being on your own with
  tech-comm-specific tools that no dev wants to touch.

## Is DITA suitable for docs as code?

We believe that all the goals outlined above can also be achieved while using
DITA as the authoring standard.

These goals don’t necessarily require a lightweight markup language, like
Markdown. Nevertheless, docs as code and Markdown have become near synonyms.
[The description of docs as code on the Write The Docs page](https://www.writethedocs.org/guide/docs-as-code/),
specifically lists: “Plain Text Markup (Markdown, reStructuredText, Asciidoc)”.
Tom Johnson in his blog post about
[docs-as-code tools](https://idratherbewriting.com/learnapidoc/pubapis_docs_as_code.html)
also states that working in plain text files is part of the docs-as-code model.

This emphasis on using plain text markup draws the line between the docs-as-code
model with a light markup, and a help authoring system with a binary or
proprietary format and gives us the impression that there is nothing in between.

The use of simple markup is further cemented by how a lot of dev teams add a
Markdown folder to their repository and render that markdown as the
documentation website. Just look at examples for
[Next.js](https://github.com/vercel/next.js/tree/canary/docs) and
[React](https://github.com/reactjs/reactjs.org/tree/main/content/docs).

Why not DITA? We think part of the problem is that **vendors “locked” DITA and
DITA OT in their CCMSes.** We hear about these systems all the time in the
context of DITA. We have heard it so much that we started to think that DITA ==
CCMS.

CCMSes are meant to be powerhouses that provide an end-to-end solution for
authoring in DITA. Many companies purchased a CCMS to reduce the time required
for DITA implementation. We hear stories that using DITA without a CCMS is hard
or even impossible. Is it really true or is it because these CCMSes were created
before certain technologies were available? These new technologies, often freely
available, open new possibilities and allow for an easier adoption of any
open-source technology, including DITA.

Let us restate this liberating truth: DITA is an open and free standard and
nobody forces you to use it with a CCMS. The main publishing tool, DITA Open
Toolkit, is a vendor-independent, open-source implementation of a static site
generator for the DITA standard. It’s actively developed, it follows trends, and
is well documented. You can add the standard and the publishing tool to your dev
workflow at no monetary or licensing cost.

As we hinted above, , DITA OT is a static site generator, just like Jekyll or
Hugo. Granted, it is unique because you need to know XSL to work with it, so the
learning curve may be a little steeper. But it’s still just an engine that
transforms one format into another. And so, you are free to use DITA OT in a
docs as code setup like you would Jekyll or Hugo. You can use a free source
control system, a free editor, and a free CI/CD pipeline.

It’s worth mentioning that DITA OT also supports Markdown as an authoring
format.

## Tools

Let's look at tools which allow you to adopt DITA in the docs as code model.

### Content authoring

In a "typical" docs-as-code setup, not too much attention is devoted to this
part. Since you use a simple markup language, like Markdown, you don't need a
dedicated doc editor. A text editor with a plugin will do the job.

If you use DITA, it can be a little more complex. Of course, you can create DITA
content in a simple text editor, but it won't get you far and your productivity
will probably be lower. Authoring content in DITA requires a more robust and
powerful tool. In fact, writing DITA content is more like coding, so you need
something that is closer to an IDE than a text editor. A good example of an IDE
which supports DITA is Oxygen XML.

However, you can also use an IDE like IntelliJ or Eclipse, and it requires very
little setup. You can even use a rich code editor, like Visual Studio Code.
These solutions may mean you are less productive than with a dedicated DITA
editor, but they can be free, and are a lot better than a simple text editor.
They also have the advantage of being well-integrated into coding environments
and come equipped with tools for version control and a variety of other
challenges.

### Version control system (VCS)

You can use any of the VCSes available on the market. The most popular VCS among
software development teams is git. You want to adopt the docs-as-code philosophy
to be as close to your devs as possible, so it is likely you will use git
provided by services like GitHub, Bitbucket or GitLab. Git can have a steep
learning curve but it’s a great tool and it’s definitely worth investing your
time to learn it.

### Static site generator

The bad news is that you don't have a choice here. The only free and
vendor-independent tool that enables you to transform DITA into other formats is
DITA Open Toolkit. It's a golden standard and many CCMSes use this tool under
the hood. The **good** news is that it's a solid and actively-developed tool
with exhaustive documentation and its maintainers try to keep pace with
technology trends. For example, DITA OT offers an official Docker image and
support for Markdown.

You can extend the tool by adding your own plugins. If you know XSL and Java,
you can build some really powerful stuff. Just look around
[the official plugin registry](https://www.dita-ot.org/plugins) to see what’s
already available. Or, if you prefer, you can use one of the existing output
formats and modify it to suit your needs. One option could be to configure the
DITA OT HTML5 output with CSS and JavaScript until it becomes a fully-fledged
static site in its own right. Another option is to consume the HTML5 output into
your existing website or web CMS and integrate seamlessly into a publication
pipeline that already exists at your company.

Having just one option for selecting a generator can definitely raise some
objections. If you use Markdown, you have a plethora of options. But when you
decide to use restructuredText, the number of available options drops down
significantly, and you have two or maybe three engines to choose from. Maybe
it's some kind of mysterious law of nature - the number of available generators
decreases as the complexity of the markup language increases.

### Local builds

You can build DITA locally from your command line. At first, installing the DITA
Open Toolkit may seem like a daunting task. In reality, it’s as simple as, or
even simpler than, installing a regular static site generator. For example, the
[installation instructions](https://jekyllrb.com/docs/installation/) for Jekyll,
one of the most popular generators, tell you that you need Ruby, RubyGems, GCC
and Make. On the other hand, DITA Open Toolkit requires only Java (JRE or JDK),
and maybe HTML Help Workshop if you want to generate Microsoft CHM Help. You can
also install DITA OT via Homebrew or use an official Docker image.

Another option is to use transformation scenarios in your DITA IDE. For example,
Oxygen XML offers this feature, and does not ask you to install anything extra.

### Automatic testing

There are two major areas of testing - making sure the documentation is
published successfully and making sure the content is right.

The first area is familiar to people who maintain websites. You need to make
sure your content was published successfully which you can achieve by reviewing
differences in snapshots between the previous version and the current version.
You also need to check whether all links work, all images display, and all
accessibility and performance goals are met. Finally, you make sure that your
site is discoverable by web crawlers, if that’s a concern.

The second area is more familiar to technical writers. Before you publish your
content, you want to make sure it meets internal standards of quality
(styleguide, correct terminology, spelling and grammar). To achieve that, you
can run a series of tests that will flag potential issues, or sometimes maybe
even fix them.

The most popular tool to verify “XML correctness” of DITA is Schematron which
can help you check how you use XML markup in your documents. You can integrate
Schematron with the Oxygen XML editor, or run it at specified times, like when
you push content to a git branch. Schematron is a great way to enforce your
styleguide. It can check if your document follows rules like “do not create
lists with one item” or “always put a path-like string of characters into a
filepath tag”. You can also add “quick fixes” to Schematron - small
transformations that change existing content into compliant content.

To check spelling, grammar, punctuation, and other language-related issues, you
can use a free program like LanguageTool, or integrate with a paid product, like
Acrolinx. You could even integrate something like Grammarly with your text
editor. In addition, you might want to invest in a command line tool that can
measure the readability score of your documents.

It might be a little more tricky to develop something for DITA, because you
would have to get rid of DITA tags, and perhaps even segment your content
properly. For example, text in a uicontrol tag is still part of the same
sentence, but an sli tag means a new item in a simple list. Also, some tags do
not need spell checking, like codeph which is meant to contain code, not
language.

You may have better results if you check the readability of your HTML output.
The first major advantage of that is you are looking at text which is filtered
by your ditaval and put together from all content references and so on.
Secondly, there are a variety of tools that understand HTML, for example
[a tool called readability-checker on NPM](https://www.npmjs.com/package/readability-checker).

You also want to make sure it reflects the product correctly. That last part is
where DITA can truly shine because of its semantics. It gives you the power to
create various tests that you wouldn’t be able to use with lightweight markup
languages. For example, you can test if the properties that you list in the docs
actually exist in the config of your application. Or you can run the commands
described in your docs and make sure they achieve the results you promise.
[You can see an example implementation of semantic tests here](https://github.com/techwriterkoduje/dita-semantic-tests).

### Content review

Since we are working with DITA as code and we are in a version control platform
like Github, along with our friends, software developers, architects, and
product owners, we are already part of the code review process, we just have to
take advantage of it. A typical way of reviewing code is through pull requests,
and we can review document sources in the same way. Github, Bitbucket, Gitlab,
and other platforms come with features which allow us to comment on code,
approve or reject pull requests, and prevent merging if tests are not passed.

Granted, DITA is a complex markup language which can make it harder to read than
something as simple as Markdown. However, our reviewers in a software
development process are people with a high level of technical sophistication,
and they are usually able to read XML without any problems. DITA becomes
challenging only when there are a lot of content references to parse, but this
can work, as our reviewers get used to the markup and learn how DITA works.

### Automatic publishing

You can use the same tools and workflows for DITA as for any other markup
language. A great advantage of working in a software company is that you
probably already have a CI/CD solution that you can plug your docs into. Talk to
developers and devops engineers in your organization to see what options you
have. Let machines do the cumbersome work of generating the output and
publishing it to the server.

## What about reuse?

In the docs as code philosophy, there's no place for a CCMS. However, one of the
most useful aspects of a CCMS is how it helps with reuse . When you switch to a
git-based solution, this feature is no longer available. So what can you do to
make up for this loss?

Before we jump into devising a technical solution to this challenge, let's think
about reuse itself. We often hear that it's very beneficial and gives you
nothing but advantages. But the truth is that content reuse comes with
challenges. You need to decide how granular your reuse should be. Is reusing
topics enough? Or maybe it would be better to reuse paragraphs?

You also need to think how widespread reuse needs to be. Across one document?
Across a document family? Across all documents? Each option has its pros and
cons. For example, reusing content across all documents may seem like a good
idea, but after some time you will realize that it's harder and harder to keep
the content generic enough to fit all scenarios. Also, every change is more
expensive because you need to analyze it from the perspective of every place the
content is used.

Taking all these factors into account, it may be possible to address content
reuse needs by simply making a smart decision when dividing content into git
repos. For example, you can keep all docs belonging to the same product family
in one repo. This way, you can reuse content between specific docs. In this
scenario, your IDE, like Oxygen XML, will help you with renaming and moving
resources without breaking stuff. Working this way is very similar to coding.
You have your software project cloned locally, you use IDE to write and edit
code without breaking things.

But just like with a software project, there comes a moment when you need to use
an external library, that is content stored outside your project. How can you
handle this requirement? The same way you would handle it in a software
project - by using dependency management.

Your document is a project that requires some external resources to build
properly. In case of a software project, you have libraries available in
different repositories, like Artifactory or Maven, from which you download them
and then use them in your code. You need to do the same for your documents. If
you need to use some assets, like common topics or images, across different
documents stored in separate repositories, create a place where you will publish
these assets and then add them as a dependency to your document.

We use DITA OT to build the document. It's like using Gradle to build a Java
project. We could write a plugin for the toolkit that downloads the assets
before building the document. DITA OT offers many extension points where we can
add this task.

Another option that you can consider is git submodules. You create a repository
with common assets and then add this repository as a submodule to the git
repository that stores source files for the document. After that, you can pull
changes to the linked submodule when you pull changes for your document. This
solution has one advantage over using a plugin for DITA OT - the shared
resources are available at the time of editing the document.

## What about link management?

Even without a CCMS, link management is an area where your “DITA IDE” shines.
Similar to IDEs used for writing code, Oxygen XML offers some refactoring
options that help you manage links. For example, the option for renaming a
resource, like a topic, isn’t limited to changing the name of the resource. It
can also update all references for the resource.

An IDE can help us with managing links at editing time. On top of that, we need
other mechanisms that catch invalid links at other stages of the content
delivery process.

At the time of committing changes, we can use a pre-commit hook in git to run a
script that automatically validates all the links in the repository and then
blocks the commit if it finds any issues.

We can also create validation builds that run when you create a pull request.
The policy can be configured to prevent merging changes if the validation build
fails. This gives you another safety mechanism that protects you against
publishing broken content. Validation builds can be part of you automatic
testing.

## Example setup for DITA as code

Here’s an example “recipe” for the toolset that you could use in the DITA as
code model:

- Content authoring -
  [Oxygen XML Author](https://www.oxygenxml.com/xml_author.html) with the git
  plugin
- Version control system - [git](https://git-scm.com/) through
  [Bitbucket](https://bitbucket.org/)
- Static site generator - [DITA Open Toolkit](https://www.dita-ot.org/) with
  custom plugins, used in a Docker image
- CI/CD solution - [TeamCity](https://www.jetbrains.com/teamcity/)
- Testing tools - [Schematron](https://www.schematron.com/),
  [Vale](https://docs.errata.ai/),
  [custom validators written in Python](https://github.com/techwriterkoduje/dita-semantic-tests)
- Hosting solution - a [Node.js](https://nodejs.org/en/) server serving static
  HTML5 pages from an [S3](https://aws.amazon.com/s3/) bucket,
  [Elasticsearch](https://www.elastic.co/elasticsearch/)

We aren’t in any way sponsored by or associated with the providers of these
tools. We simply want to give you something practical that complements the
theoretical description of the tools that we provided in the previous sections.
We have experience working with these solutions, so we know that this setup
works well for the DITA as code model.

## DITA as code - what’s the catch?

DITA as code has its advantages but that’s just one side of the story. To our
knowledge, so far nobody has invented a silver bullet for the content delivery
process and DITA as code is no exception.

If you want devs to contribute to the documentation, they may be reluctant to
use an XML standard. They are more inclined to use Markdown and you may have a
hard time convincing them to change their mind. Their reluctance may in turn
create a temptation to delegate all content-related tasks to tech writers; they
already know the content delivery system inside-out so they are able to make
changes faster and better, right?

But there’s hope. At the [soap!](http://soapconf.com/) 2019 conference, Panny
Luo in her talk
[“Content as Code: A manager’s perspective”](https://www.youtube.com/watch?v=2R-8e_GtM0Y&list=PLUY0lajb-kiaIbF6clQaxTp2lwqmrDDC5&index=4),
showed us how her organization managed to implement the DITA as code model and
how content specialists collaborated with devs. If you have a **strong business
case** for using DITA at your organization, e.g., reuse, more granular control
over your content, robust semantic options - you may be able to convince all the
stakeholders to play along.

A big catch of DITA as code is that you have to code a lot. Maintain your
development infrastructure, localization, and publication. There are tools that
can help, but you have to customize them and know how to use them.

DITA as code is also harder for contributors (both writers and reviewers) who
are less technical. A content management system comes with a streamlined user
interface, kind of like writing Word documents. This creates a familiar
experience to most people and is easy to learn for newcomers. When maintaining
DITA as code, the contributors have to know the principles of VCS, understand
their development pipeline, and troubleshoot daily problems with both their
computers and their infrastructure.

When you write content Markdown, you can pick and choose which editor you want
to use. You have plenty of options, many of them free. When you use DITA, it’s
quite the opposite. You only have a few options and the best ones aren’t free.
In a big organization this cost may not be significant but in smaller companies
it can be a deal breaker.

## Conclusion

Here are the key takeaways from this article:

- DITA can be used in the docs as code model - we have done it and it works.
- In some areas, DITA can offer more than lightweight markup languages, like
  better reuse possibilities and semantics that can be used for testing
- DITA as code is not a silver bullet and comes with challenges, like a small
  selection of content authoring tools and a steeper learning curve for
  non-technical users than Markdown
- You need to weigh all the pros and cons before deciding if the DITA as code
  model is the right fit for you and your team.
