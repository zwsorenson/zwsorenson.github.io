---
layout: post
title: Patching Problems and the Patriot Missile Defense System
categories: writing
noun: paper
color: 8c1515
source-thumb: '/images/logos/stanford.png'
source-name: 'Computers, Ethics, and Public Policy (CS 181)'
---

## Introduction

On February 25, 1991, three days before the end of the Gulf War, an Iraqi *Al Hussein* missile hit an American barracks in Al Khobar, near Dhahran, Saudi Arabia.[^5] The attack killed 28 American soldiers and injured around 100 more — the worst American casualty toll of the war.[^1] The missile should have been intercepted, but the MIM-104 Patriot missile defense system protecting the barracks was not able to detect the missile due to a minor miscalculation caused by software failure.[^5]

The MIM-104 Patriot, a surface-to-air missile system built for the United States Army and its allies by the Raytheon Company, was originally envisioned as a portable, short-term defensive system to protect local airspace against aerial attack by the Soviet Union.[^2] Although the system was designed to shoot down aircraft, its designers intended that it could later be modified to work against missiles as well. When the system was deployed for Operation Desert Storm, however, it had to defend against Iraqi Scud missiles travelling twice as fast as the Soviet aircraft and missiles it was originally designed to intercept.[^2] Ultimately, the evolving requirements of the Patriot system and the demanding conditions under which it was used during the Gulf War allowed a miniscule software miscalculation to cause a fatal catastrophic failure that could have been avoided through more realistic testing and better communication.

## Technical Analysis

Patriot battalions are composed of six individual batteries, each of which includes a control station, a communications relay, a radar unit for detecting and tracking incoming missiles, and eight missile launchers.[^8] The Patriot’s radar scans the sky for incoming targets by sending out regular electronic pulses, and if the pulses hit a target, they are reflected back to the system, which is then able to calculate the target’s latitude, longitude, and angle of elevation relative to the radar unit.

The distinguishing characteristic of planes, cruise missiles, and tactical ballistic missiles like the *Al Hussein*, however, is their high velocity, which the radar unit cannot detect using information from a single scan. Accordingly, when the radar detects an incoming object, the weapons control computer assumes it has found a potential target and calculates an area of space — the “range gate” — in which to look for the object next. If the system detects an object in range gate during its next scan, the target is validated and the system can launch a missile to intercept it; if not, the object is ignored.

There are three inputs to the range gate algorithm used to calculate the area scanned for target validation: the location where the object was first detected, the target velocity, and the time since the last radar detection.[^8] The location information comes directly from the radar system, and the velocity is set in advance by system operators depending on what types of targets the system is being used to intercept.

The time since the last radar detection, however, is calculated using the computer’s internal clock, which keeps track of how long the system has been running in tenths of seconds.[^8] In order to calculate the elapsed time between two radar scans, the system multiplies the internal clock time of each scan by 0.1 to convert from an integer representation in tenths of seconds to floating-point representation in seconds, and subtracts to calculate the difference between the two values.[^7]

This seems like a simple calculation, but the weapons control computer was based on a 1970s design and only had a 24-bit register to perform its calculations.[^8] Accordingly, the internal clock times were actually multiplied by the 24-bit representation of 0.1, or \\(0.1\ \times \ \left( 1 - 2^{- 20} \right)\\), reducing all times by 0.0001%.[^7] After eight hours, this inaccuracy would amount to 0.0275 seconds; after 100 hours, the times would be off by 0.3433 seconds. Still, even if the absolute internal clock times became increasingly inaccurate the longer the system ran, calculating the difference between two absolute times should have cancelled out any inaccuracy.

As mentioned earlier, however, the Patriot system was not originally designed to be able to intercept targets travelling as fast as the Iraqi Scud missiles like the one that hit the Dhahran base.[^2] When the Patriot systems were brought into the Gulf War, Raytheon modified the software to address the higher missile speeds, including a patch with a subroutine to more accurately convert integer clock time to floating-point time.[^7] Unfortunately, this patch was not applied everywhere it was needed, so when the elapsed time between radar pulses was calculated using one time converted with the new subroutine and one time converted with the old subroutine, the inaccuracy no longer cancelled out in subtraction. This meant that the longer a Patriot system’s target tracking became increasingly inaccurate the longer it remained in continuous operation.[^8]

On February 25, 1991, the Alpha Patriot Battery protecting the American Air Base in Dhahran, Saudi Arabia, had been running nonstop for more than 100 hours, meaning its internal clock was off by 0.3433 seconds.[^8] A Scud missile, flying at approximately Mach 5, travels nearly 600 meters in 0.3433 seconds, meaning that after 100 hours of operation, the range gate had shifted so much that the system was not able to detect incoming missiles.

## Costs of the Failure

The primary costs of the Patriot system’s failure were human: 28 soldiers were killed in the attack,[^8] and another 98 were injured.[^3] The leading academic study of the statistical value of human life, which is used by many government agencies for cost-benefit analysis, estimates that the median value of a life is around \$7 million.[^9] If anything, this value underestimates the loss in the attack, because it does not include the additional expense incurred by the military to train and deploy the soldiers who were killed. By comparison, the physical damage was minimal, because the barracks were temporary and located in a repurposed corrugated-metal warehouse building.[^3] According to Army investigators, the software problem that caused the incident was easy and inexpensive to fix once it was identified.[^6] The U.S. Government likely incurred expenses as part of its follow-up investigation, but since the investigation was conducted by the General Accounting Office[^8] and not by a committee or group specifically created to look into the incident, additional expenses were probably minimal. Raytheon, the system’s manufacturer, had to fix the software problem, but did not face additional fines. In fact, despite the accident at Dhahran, the Patriot system — which Raytheon sold for around \$1 million each — was considered a resounding success during the Gulf War, and Raytheon’s stock price increased accordingly, from \$68.50 in January 1991 to\$81.88 in May.[^6]

## Assessment of Responsibility

Because a variety of factors combined to cause the Patriot system in Dhahran to fail, responsibility for the failure is dispersed between Raytheon, the system’s manufacturer, and the Army, its operator. As the targeting requirements for the Patriot system evolved from aircraft to cruise missiles to ballistic missiles, Raytheon should have tested the system more carefully — if engineers had detected the software error that caused the time inaccuracy, the incident at Dhahran could have been avoided.

Ultimately, responsibility lies with the Army for using the Patriot system differently from how it was intended, and specifically with Patriot Project Office officials for not informing Patriot battalions about the potential inaccuracy once they knew about it. The Army’s Patriot Project Office first received reports about issues with the Patriot’s targeting system after long periods of continuous use on February 21, 1991.[^8] Army officers assumed that Patriot systems were not being used for more than eight hours at a time, but they still made a software change to fix the problem and informed Patriot users that extended run times could render the system ineffective (*ibid*). Unfortunately, because of their assumptions about how the system was being used, the Patriot Project Office did not specify how long the system could be safely run before needing to be restarted (*ibid)*. Had there been more effective communication between the Patriot Project Office and users in the field, the entire incident might have been avoided.

## Conclusion

Failure of a defensive military system presents an interesting ethical question. The 28 Americans killed in Dhahran lost their lives not only because the Patriot system failed, but because the Iraqi forces launched a missile at their base. The fact that the Patriot system was not able to intercept the incoming missile under one very specific set of extreme circumstances does not negate the fact that it saved hundreds of other lives throughout the Gulf War and was largely considered a success by the U.S. Army and its allies. Still, both Raytheon and the U.S. Army made mistakes that could have been avoided. Raytheon should have more carefully tested the system as the requirements changed, and the Army, once it knew about the potential issue with target tracking, should have sent clearer instructions to Patriot battalions waiting for the software update to arrive. Ultimately, a series of small mistakes combined with bad timing and extreme circumstances to produce an unfortunate result that could have been avoided.

## Sources

[^1]: Arnold, Douglas N. *The Patriot Missile Failure*. University of Minnesota, 2000. Web.

[^2]: Morgan, Tom, and Jason Roberts. *Analysis of the Patriot Missile System*. East Tennessee State University, 2002. Web.

[^3]: Apple, R.W. “War in the Gulf: Scud Attack; Scud Missile Hits a U.S. Barracks, Killing 27.” *The New York Times* 26 February 1991. Print.

[^4]: Marshall, Eliot. "Fatal Error: How Patriot Overlooked a Scud."*Science* 255.5050 (1992): 1347. Print.

[^5]: Schmitt, Eric. "After the War: Army Is Blaming Patriot's Computer for Failure to Stop the Dhahran Scud." *The New York Times* 19 May 1991. Print.

[^6]: Schmitt, Eric. “U.S. Details Flaws in Patriot Missile.” *The New York Times* 5 June 1991. Print.

[^7]: Skeel, Robert. "Roundoff Error and the Patriot Missile." *Society for Industrial and Applied Mathematics News* 25.4 (1992): 11-12. Print.

[^8]: United States. General Accounting Office. Information Management and Technology Division. Report to the Chairman, Subcommittee on Investigations and Oversight, Committee on Science, Space, and Technology, House of Representatives: Patriot Missile Defense Software Problem Led to System Failure at Dhahran, Saudi Arabia. By Michael Blair, Sally Obenski, and Paula Bridickas. Washington, D.C.: 1992. Print.

[^9]: Viscusi, W. Kip and Joseph E. Aldy. “The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World.”*Harvard Law School John M. Olin Center for Law, Economics, and Business.* Cambridge, MA: 2002. Print.
