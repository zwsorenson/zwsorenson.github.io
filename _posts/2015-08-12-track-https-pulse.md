---
layout: post
title: 'Track which federal websites are using HTTPS with Pulse'
categories: writing
source-thumb: /images/logos/sunlight.png
source-name: The Sunlight Foundation
source-url: 'http://sunlightfoundation.com/blog/2015/08/12/track-which-federal-websites-are-using-https-with-pulse/'
image-url: 'https://horseradish.s3.amazonaws.com/CACHE/images/photos/80/b5/748229a9472c/pulse-wide-800.png'
image-caption: 'Pulse, a new online tool, tracks progress towards implementing HTTPS across federal agencies (Source: Pulse.CIO.gov)'
---

In June, the federal chief information officer
[instructed](https://www.whitehouse.gov/sites/default/files/omb/memoranda/2015/m-15-13.pdf)
all executive departments and agencies to ensure that their websites and
online services use secure Internet connections by default. Adoption of
secure web standards will not be instantaneous, but several agencies
have made notable strides towards improving security — and a new online
dashboard called
[Pulse](https://18f.gsa.gov/2015/06/02/taking-the-pulse-of-the-federal-governments-web-presence/)
allows anyone to follow along with the progress.

Whenever users access a page on the Internet, they send and receive a
variety of information. Text, images and videos become the page the
browser displays. Websites receive metadata like IP addresses. In many
cases, users also send sensitive personal information like names,
contact information, addresses and credit card information.

Historically, most websites used the Hypertext Transfer Protocol (HTTP)
for public web connections (this is the protocol being used anytime
“http://” appears before a web address). But HTTP is not entirely secure
— information can be intercepted, tracked or modified during
transmission — which means it is only suitable for sites that do not
send sensitive data. The aptly named HTTP Secure (HTTPS) protocol
addresses this problem by verifying the identity of websites and
encrypting information sent between websites and users. HTTPS is already
used in online services like banking, shopping or document storage, but
many security experts now advise using HTTPS in all cases.

Many government websites already make HTTPS connections available as an
option, and some further increase security by requiring it. For example,
the Centers for Medicare and Medicaid Services (CMS) recently made HTTPS
the default protocol for cms.gov and medicare.gov, bringing the
proportion of federal websites that use secure connections to 29
percent. The goal of the [new policy](https://https.cio.gov/) put
forward by the chief information officer is that all federal websites
will eventually be available only through secure connections.

In addition to tracking HTTPS adoption, the Pulse dashboard also
monitors which sites use the Digital Analytics Platform, a shared
anonymous tracking service for U.S. federal agencies. Using the Digital
Analytics Platform allows agencies to track how their sites are used,
and also publicly shares real-time usage data on
[analytics.usa.gov](https://analytics.usa.gov/).

Sunlight has previously analyzed and
[reported](https://sunlightfoundation.com/blog/2015/05/26/sunlight-analysis-reveals-15-of-congressional-websites-are-https-ready/)
on HTTPS adoption across congressional websites, but this new tool makes
it easy for anyone to monitor HTTPS adoption in the executive branch
— check it out at [Pulse.CIO.gov](https://pulse.cio.gov/).
