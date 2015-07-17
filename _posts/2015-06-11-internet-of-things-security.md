---
layout: post
title: Consumer Security in an Internet of Things
categories: writing
source-thumb: '/images/logos/cyber.png'
source-name: University of Oxford Cyber Security Centre
source-url: 'http://www.cybersecurity.ox.ac.uk/'
---

## Introduction

For almost as long as computers have existed, designers have used metaphors from the physical world to help users understand how computer interfaces work. Files are stored in folders. Sticky notes are attached to the desktop. Writing can be done in Notepad. Text is cut, stored temporarily on a clipboard, and then pasted to a new location. Files are discarded by dropping them into a trash can or a recycling bin. Shadows and animations help users understand depth and layering. None of these interface design elements are strictly necessary, but the complex virtual workings of a computer are easier to understand when they are explained and understood in familiar physical terms.

Recently, though, the demarcation between virtual and real has begun to blur in the opposite direction. While early user interfaces originally relied on real-world objects to help users understand how computers worked, physical objects are now increasingly relying on computers and the Internet to understand and directly interact with the physical world. The integration into online networks of huge numbers of Internet-enabled everyday objects — the so-called "Internet of Things" — has the potential to be a defining feature of the next wave of Internet innovation, and accordingly has important security implications for users at all levels.

### What is the "Internet of Things?"

In 1999, Kevin Ashton gave a prescient presentation at Proctor and Gamble entitled "The Internet of Things."[^1] He spoke about how it might eventually be possible to integrate two then-emerging technologies: radio-frequency identifier (RFID) chips and the Internet. He was specifically envisioning an Internet-powered supply chain for the company, but the term he used was intentionally broad. As the Internet has grown, so too has the range of devices and use cases that might reasonably be included in Ashton's Internet of Things.

The definition of the Internet of Things given by the RFID group is broad and straightforward:

> The worldwide network of interconnected objects uniquely addressable based on standard communication protocol.[^2]


This definition, though, could include any Internet device, not just "things" that might not have previously connected to the Internet. The Cluster of European Research Projects on the Internet of Things takes a narrower approach:

> 'Things' are active participants in business, information and social processes where they are enabled to interact and communicate among themselves and with the environment by exchanging data and information sensed about the environment... with or without direct human intervention.[^3]

For this paper, I define the Internet of Things even more simply and narrowly. I consider as part of the Internet of Things any device that is able to connect to the Internet, but whose existence does not depend on or require this connectivity. Using this definition, for example, a home thermostat that connects to the Internet to allow remote control, or a shipping container containing wireless sensors that automatically send online status updates, would be considered part of the Internet of Things. In each of these two cases, Internet connectivity is a feature but not the device's _raison d'être_. A computer (or smart phone), however, would not be part of the Internet of Things, because its Internet connectivity is one of its primary features.

The Internet is the infrastructure that allows text, web pages, files, videos, audio, or almost any other conceivable form of data to be transmitted between computers and other devices anywhere in the world, and its sole currency is information. It is important to recognize that the Internet of Things is not a separate concept, but rather a specific and increasingly popular way of using the wider Internet. It still primarily involves transmitting information, but what makes it unique is that the information is transmitted automatically by purpose-built devices, sometimes without any direct human action.

### Focusing on the Home and the Consumer

Potential applications of the Internet of Things are as endless as the number of objects in the world. In this paper, though, I will focus specifically on consumers using commercially available Internet-enabled "things."

Without a doubt, corporations, governments, and other institutional consumers of technology will also pursue the Internet of Things.[^4] In fact, industrial and commercial use of Internet-connected equipment may have a much greater economic and societal impact than consumer use. Institutional consumers, however, are better suited to evaluate the costs and benefits of using these technologies, especially with respect to security. Governments and businesses have experience and academic literature to help them as they evaluate and mitigate security risks in the Internet of Things,[^4] and have a strong commercial or statutory interest in doing so. Large organizations are also more likely to build customised in-house solutions, or to contract directly with vendors to ensure their exact needs are met. As a result, they are better adapted to understanding dealing with the security risks that new technologies may present.

Individual consumers, however, have less choice over which products are available to them; they are limited to what is available on the market. Additionally, individual consumers are less likely to be knowledgeable about security risks of technology than institutional adopters,[^5] and more likely to prioritize convenience and efficiency over security. Accordingly, it is important to evaluate what types of risks consumers are likely to face as they begin adopting the Internet of Things, especially because the consequences of risk can be physical, not just virtual. Understanding these security risks is valuable not only to individual consumers using these new products, but also to vendors and policymakers working to ensure consumer safety more broadly.

The remainder of this paper investigates the types of Internet-connected devices available to consumers for home and personal use, and discusses their potential security risks. Ultimately, I find that while using any technology product brings some level of security risks, the risks accompanying Internet-enabled products designed for personal and home use are not significantly greater than the risks that come with using a non-Internet-connected counterpart. Furthermore, for most Internet-connected products available to consumers, even the worst-case security risks are likely outweighed by the increased convenience and efficiency the product can provide.

## The Current Internet of Things Landscape for Consumers

Before investigating security issues for consumers connecting to the Internet of Things, it will be helpful to give a brief overview of what types of products are currently available. After surveying online marketplaces selling Internet-enabled personal or home electronics, I find that they generally fall into one of five categories: home automation, home monitoring, home entertainment, personal health, or novelty (see Table 1 for examples).[^6] These categories are very similar to those described by Gubbi _et al._ in [2], but with a more narrow focus on individual consumer use as opposed to corporate or government applications.

### Examples of "Internet of Things" home and personal devices, by category[^6]

**Home Automation**

- Nest Thermostat [^7]
- August Smart Lock [^8]
- Philips Hue Wireless Lighting [^9]
- Skydrop Sprinkler Controller [^10]
- Garageio Garage Door Opener [^11]

**Home Monitoring**

- HomeMonitor Wireless Camera [^12]
- Nest Protect (Smoke/CO detector) [^7]
- Pacific Gas \& Electric SmartMeter [^13]

**Home Entertainment**

- Audiovisual systems
- Smart televisions
- Wireless speakers
- Remote hubs

**Personal Health**

- Withings Smart Body Analyzer [^14]
- Fitness tracking wristbands
- Smart watches

**Novelty**

- Kohler Moxie wireless showerhead [^15]
- Waves wireless lava lamp (unsuccessful KickStarter)


While it is of course possible that new products will someday be envisioned and released that raise novel security concerns, it is impossible to predict the future, so I will focus only on security considerations for products currently available.

## Consumer Security and the Internet of Things

In its _Risk Lexicon_, the United States Department of Homeland Security describes the process of probabilistic risk assessment, and defines the following terms:[^16]

> **Likelihood:** estimate of the potential of an incident or event's occurrence \\
> **Consequence:** effect of an event, incident, or occurrence \\
> **Vulnerability:** attribute that renders an entity open to exploitation

Using these concepts, the security risk to any device or system can be found with this relatively simple mathematical formula:


\$\$ \textrm{Risk} = E[\textrm{Consequence}] = \sum\limits_{\textrm{Vuln.}} \textrm{Likelihood} \times \textrm{Consequence} $$

### Vulnerabilities and Consequences in the Consumer Internet of Things

Of course, this probabilistic strategy is applicable to any consumer product, not just an Internet-connected device. A garage door opener, for example, has vulnerabilities, whether or not it is a part of the Internet of Things. It could be forced open manually, or the radio frequency used for the remote control opener could be guessed using brute force. In either of these cases, the worst case consequence is unauthorized entry to the garage.

Connecting the garage door opener to the Internet may increase the _number_ of potential vulnerabilities (although not necessarily the likelihood), but for physical devices like a garage door opener, it does not change the worst-case consequence. The security risks of Internet of Things devices should therefore be measured as the _difference_ in risk that results from connecting the devices to the Internet, not the total amount of risk they could face.

I contend that in most cases (privacy concerns aside), this difference as a result of Internet connectivity is very low. This is because for most personal and home electronic devices, the worst-case consequences of a security flaw are not increased by connecting the device to the Internet. Furthermore, many of these devices are either simple sensors that report data, like a fitness tracker or a smart gas meter, or simple appliances that respond to data, like a thermostat or an irrigation system. For these simple devices, the worst-case consequences are not only not increased by connecting them to the Internet, they are often negligible in the first place: the worst that could happen if any of these devices were breached would be temporary malfunctioning, easily solvable by shutting the device off.

Of course, a counter-argument to this point would be that this data is precisely what differentiates Internet of Things devices from their unintelligent counterparts, and the potential exposure of this data represents a serious security risk. This may be a bigger concern for Internet of Things devices in corporate or government contexts, but for consumer devices, even the most personal data — say, health data from a wireless scale — is relatively harmless, and much less sensitive than the types of information people typically store on their computers.

Another counter-argument might be that, although Internet connectivity may not noticeably increase the consequences of a security flaw, it makes them more scalable. Returning to the previous example, an Internet-connected garage door opener may be vulnerable to physically forced entry, or to a data breach allowing unauthorized access. In either case, the consequence is the same, but a data breach may allow access into _any_ garage using the product, while physical force must be carried out one device at a time. This is a valid concern, but scalability works both ways: vendors can use the same Internet connection that made their devices vulnerable to send out security updates or patches, addressing flaws more easily than if there had been, say, a physical manufacturing defect.
<h1 id="conclusion">Conclusion</h1>

One of the more memorable episodes of the television series _Homeland_ involved a United States double agent giving the serial number of the Vice President's pacemaker to a group of terrorists so they could wirelessly disable it, allowing them to effectively assassinate a world leader without a trace.[^17] Although this scenario is implausible in reality, it highlights an important point: computers and electronic devices are inherently insecure, and as they permeate more and more aspects of life, they bring these security risks along with advances in convenience and efficiency.

Although the Internet of Things has not yet grown to include pacemakers and other embedded medical devices, it has begun to affect users' lives in more direct ways. The range of Internet-connected consumer electronics available for personal and home use continues to grow. For the present and foreseeable future though, the potential security risks presented by these devices are not cause for major concern, and are outweighed by the convenience and efficiency these devices can provide. Of course, users should be cautious and practice common sense when using any electronic device — but careful users can and should embrace the Internet of Things with confidence.

## Works Cited

[^1]: K. Ashton, "That 'Internet of Things' Thing," _RFiD Journal_, p. 4986, 2009.

[^2]: J. Gubbi, R. Buyya, S. Marusic, and M. Palaniswami, "Internet of Things (IoT): A vision, architectural elements, and future directions," _Future Generation Computer Systems_, vol. 29, no. 7, pp. 1645–1660, 2013 [Online]. Available: <a href="http://dx.doi.org/10.1016/j.future.2013.01.010" class="uri">http://dx.doi.org/10.1016/j.future.2013.01.010</a>

[^3]: H. Sundmaeker, P. Guillemin, P. Friess, and S. Woelfflé, "Vision and challenges for realising the Internet of Things," 2010.

[^4]: R. H. Weber, "Internet of Things – New security and privacy challenges," _Computer Law &amp; Security Review_, vol. 26, no. 1, pp. 23–30, 2010 [Online]. Available: <a href="http://dx.doi.org/10.1016/j.clsr.2009.11.008" class="uri">http://dx.doi.org/10.1016/j.clsr.2009.11.008</a>

[^5]: L. Fritsch, A. K. Groven, and T. Schulz, "On the internet of things, trust is relative," in _Communications in computer and information science_, 2012, vol. 277 CCIS, pp. 267–273.

[^6]: "Internet of Things Product List." [Online]. Available: <a href="http://iotlist.co/" class="uri">http://iotlist.co/</a>. [Accessed: 10-Jun-2015]

[^7]: "Nest Support", "What does Nest do with private data?" [Online]. Available: <a href="https://nest.com/uk/support/article/What-does-Nest-do-with-private-data" class="uri">https://nest.com/uk/support/article/What-does-Nest-do-with-private-data</a>

[^8]: "August", "August Smart Lock: Frequently Asked Questions." [Online]. Available: <a href="http://www.august.com/faq.html" class="uri">http://www.august.com/faq.html</a>

[^9]: "Philips", "Philips Hue Personal Wireless Lighting." [Online]. Available: <a href="http://www2.meethue.com/en-gb/" class="uri">http://www2.meethue.com/en-gb/</a>

[^10]: "Skydrop", "Skydrop Technical Specifications." [Online]. Available: <a href="http://www.skydrop.com/tech-specs/" class="uri">http://www.skydrop.com/tech-specs/</a>

[^11]: "Garageio", "Garagio." [Online]. Available: <a href="https://garageio.com/" class="uri">https://garageio.com/</a>

[^12]: "HomeMonitor", "What is HomeMonitor." [Online]. Available: <a href="http://www.homemonitor.me/what-is-homemonitor/" class="uri">http://www.homemonitor.me/what-is-homemonitor/</a>

[^13]: "Pacific Gas and Electric Company", "What is a SmartMeter?" [Online]. Available: <a href="http://www.pge.com/en/myhome/customerservice/smartmeter/index.page" class="uri">http://www.pge.com/en/myhome/customerservice/smartmeter/index.page</a>

[^14]: "Withings", "Withings Smart Body Analyzer" [Online]. Available: <a href="http://www2.withings.com/uk/en/products/smart-body-analyzer/" class="uri">http://www2.withings.com/uk/en/products/smart-body-analyzer/</a>

[^15]: "Kohler", "Moxie Showerhead + Wireless Speaker.".

[^16]: "Department of Homeland Security", "DHS Risk Lexicon," September, 2008 [Online]. Available: <a href="papers2://publication/uuid/F73C2CF2-B443-49CA-B66A-DB4CFE244F76" class="uri">papers2://publication/uuid/F73C2CF2-B443-49CA-B66A-DB4CFE244F76</a>

[^17]: S. Knapton, "Terrorists could hack pacemakers like in Homeland, say security experts." Nov-2014.
