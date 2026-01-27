---
description:
  Based on interviews with content professionals. Are people looking to swap
  their open-source tools for an enterprise doc writing experience? Find out the
  answer! (Spoiler alert, then answer is no)
author: Paweł Kowaluk
image: /img/abandon.png
---

# Are people abandoning docs as code?

No, they’re not.

## Executive summary

This article started as an attempt to answer questions about tech writing tools.
Instead of using what I personally know or believe I decided to find out what
other people in the field are saying. I also wanted to get quotes to give this
article more substance, like journalists do.

I was looking for answers to these questions:

- Are people migrating from docs as code back to enterprise CCMSes?
- Are the ones who migrated from an enterprise CCMS to docs as code, happy they
  did it?

The answer to the first question was a resounding “no” \- the people I found are
not planning to go back to enterprise CCMSes.

The answer to the second question is generally “yes” \- people are happy they
made the transition to docs as code and open source tools. Are they as happy as
they anticipated? Almost always no, but still much happier than they were.

The main reasons cited for switching were:

- The CCMS was low quality: frequent downtimes, missing features, bugginess,
  slowness, frustration, and general burden on the workforce.
- The CCMS was too expensive compared to the benefits it brought.
- The CCMS makes it hard or impossible to involve software developers in writing
  docs. This also extends to involving any other people who are not specialists
  at using technical writing tools.

Once people switched to docs as code, they were happy. They also enjoyed
additional benefits which they didn’t necessarily anticipate:

- Continuous delivery of docs
- More flexibility with content sources
- More control over the doc site appearance and features
- Integration with the broader company SDLC (rather than having a completely
  separate tech writing process)
- More reliable (fewer bugs) and faster (less time spent waiting on spinning
  cursors) tools based on Git
- New transferable skills, like using Git, acquired by writers
- More empathy from writers towards programmers and their daily work

## Methodology

This is not a study. I don’t have statistics to back me up, I didn't send a
survey to thousands of people to get a good sample size. Instead, I did
something similar to what people do in UX, where they work with a small group of
respondents.

Or, if you wish, this is a piece of journalism where a limited group of people
is interviewed and their words are passed on to the reader.

First, I posted a survey on social media. Out of the people who responded, I
focused on executives who had an active part in making the decision to
transition. I also narrowed it down to people who are experts in the field of
technical writing \- not general business managers, product owners, etc. My
final group were mostly people who called themselves “documentation managers” or
something similar. None of them wanted to make their name public, as they did
not want to speak on behalf of their company or present their opinions as their
own to the public. Nonetheless, I got a solid six interviews.

I was hoping to find instances of people going back to an enterprise CCMS after
they had transitioned to docs as code. I didn’t find a single one. Maybe I will
find somebody who can speak to that in the future. If I can, I will consider
publishing my findings.

## Why people left their CCMSes

The most-cited reasons were around poor functionality. “\[The CCMS\] was very
slow. Writers were spending a lot of their time looking at spinning cursors,”
says a documentation manager at an American software company. “And the rest of
the time, they were working around the limitations of the tool.” She explains in
detail how the versioning scheme for this CCMS did not fit how they wanted to
publish the docs, so they had to make the same change in multiple copies of the
same document. “Reuse did not work at all. We did not want to repeat the same
topic in multiple publications, but we wanted to have a copy for each release.
We ended up with \[the vendor’s\] idea of branching which was more like keeping
copies of the entire topic set in separate folders.”

Multiple interviewees were disillusioned with the promise of reuse and single
sourcing. The CCMSes excelled at putting together books with variations of
reused topics, but that was not what my interviewees needed. “This would work
great in manufacturing,” said one, “but in software you don’t want to break your
SEO with fifteen copies of the same page.”

Another problem was the cost. All my interviewees had to pay vendor fees and at
the same time delegate somebody on their team to look after the CCMS. When they
had problems, the vendor offered support, but rarely bug fixes and never free
features. “\[Most customizations were\] projects we had to pay for,” says one
documentation director. Vendors would seek ways to monetize each engagement, and
the money people were paying already was treated as a given. “We were not
getting good support,” says an interviewee from a European software house.

Three interviewees said they kept their doc tools support team but reassigned
them to work on open-source docs-as-code tools. Three others said they had to
grow the team by a little; from 1-2 to 3 people. The cost of hiring was always
lower than what they were paying to the vendor. In addition, the teams were
always able to build their solutions on the existing company infrastructure.

## A qualified success

The people I interviewed were happy they switched to docs as code, but at the
same time they were disappointed in some aspects. One common pattern was that
people wanted to switch to get software developers to contribute to the docs. In
most cases, developers started contributing only very occasionally, not as much
as the doc teams hoped for.

Another source of disappointment was the initial learning curve. Technical
writers who were used to using WYSIWYG tools for documentation needed some time
to ramp up on Git. Some people even left the teams or retired early because of
this. On the other hand, those who stayed said they acquired some “reusable
skills”. One content strategist says her entire team became much more versatile
and branched out into areas which were much more technical than what they used
to do. They started dealing with search optimization, API docs, and some light
front-end development to create more beautiful landing pages.

## But a success undoubtedly

Despite their disappointment in collaboration and the steep learning curve, all
the interviewees were happy with the transition.

“We can now do continuous delivery to our company website. With \[the CCMS\] we
had to publish to \[the vendor’s\] knowledge portal. And each publication job
was a slow manual process,” says a doc team leader at a European software
company.

Another one praised the flexibility of the new tools. “If we want to change
something on the website, we can do it because it’s our website. We don’t have
to pay a huge bill just to change some CSS.” Then they went on to talk about the
features they introduced on the website which were more than CSS: adjustments to
the search engine, pop-up surveys, and a dynamic home page.

One of the interviewees talked about how they integrated multiple content
sources. In their enterprise CCMS they could use only DITA for their website.
After moving to docs as code, they can now use static site generators. “We have
some Docusaurus sites \[and\] a few Hugo sites \[...\] We also pull in articles
from Medium.com.”

An unexpected benefit is that technical writers learn to understand programmers
better. Two interviewees spoke about using the same tools as the software
developers at the company. They mentioned “using the same code editor,
committing changes to Git and using CI/CD” as things that writers now have “in
common with programmers.” One interviewee said: “My team have started writing
better developer docs. We keep getting positive feedback.”

## Process changes

All my interviewees said they had to adjust their writing process. The vast
majority went from big infrequent releases to continuous delivery. One team
leader said: “We could finally step out of the tech writing niche and join the
rest of the company. We went from having a whole separate custom process to
something that mirrored the SDLC \[software development lifecycle\] at every
step.”

The idea of tech writing teams having a separate process from software teams is
broad enough that it could serve as the topic for an entire article. Personally,
I might be interested in exploring that more in the future.

## Conclusions about the process of writing this article

The initial spark for this article was Sarah Moir’s article titled
“[Docs as code is a broken promise](https://thisisimportant.net/posts/docs-as-code-broken-promise/)”.
At first, I considered writing my article as a polemic to Sarah’s, but then, I
decided to go in a different direction. I started wondering if people’s
dissatisfaction with docs as code makes them look for a CCMS. The idea seemed so
interesting to me that I had to explore it. Sarah’s article contains a lot of
criticism for docs as code. Criticism which I’ve seen echoed in the initial
survey responses and the subsequent interviews. Nonetheless, I did not find
anybody who wants to move from docs as code to a vendor CCMS. I hope maybe
posting this article will prompt people to get in touch. If you want to chat,
reach out to me on [Linkedin](https://www.linkedin.com/in/pawel-kowaluk/).

Other than that, I would like to restate one thing: this article does not claim
anything about tech writing **as a whole**. The interviewees all write docs for
software, not manufacturing or the machine industry. Moreover, it’s a very
narrow sample of people from my own bubble. Arguably, there are teams out there
who are having a bad time with docs as code. But as much as I want to present a
balanced view, I just find no evidence for their existence. Could it be that
docs as code is just perfect for software documentation? Seems too good to be
true. I love learning new things and changing my mind, so please, reach out with
evidence to the contrary.
