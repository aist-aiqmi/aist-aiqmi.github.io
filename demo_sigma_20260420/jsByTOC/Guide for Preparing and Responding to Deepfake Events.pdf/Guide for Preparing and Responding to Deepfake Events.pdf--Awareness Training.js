var toc_content = `| Guide for Preparing and Responding to Deepfake Events
mitigation identiﬁed:
The deepfake incident response planning process should, at a minimum (Gesser et al., 2022):
●
Establish governance structures to oversee security measures and policies related
to deepfake threats.
●
Document who owns monitoring for deepfakes, what is the alerting process,
channels, and stakeholders.
●
Document who owns the takedown process for deepfakes, and how escalation is
conducted, such as legal action if a takedown request is denied.
●
Create a crisis communication plan for each type of the deepfake scenarios
described below. In all scenarios, quick and effective communication is key to
containment in response.
○
Ensure that templates are developed and approved by all parties with
well-deﬁned approval processes for when to implement them.
○
Ensure distribution plans and templates are updated regularly.
●
Organizations should consider whether the deepfakes are part of a larger campaign
intended to harass, exact revenge, or extort a company or individuals. Incident
response plans should account for the following implications (Gesser et al., 2023):
○
Reputational damage.
○
Extortion pressure following a ransomware or data exﬁltration event.
○
Hacktivism / corporate activism.
○
Financial fraud.
Version: 1
Page 14 of 35

| Guide for Preparing and Responding to Deepfake Events
○
Sensitive information disclosure.
○
Industrial espionage.
○
Computer or network breaches.
○
Misleading stakeholders.
○
Stock prices manipulation.
●
Determine if deepfake identiﬁcation technology needs to be acquired or if existing
incident response retainers include this type of forensic analysis. Review the SLA of
those retainers and determine if that timeframe is an acceptable delay before
making a public statement declaring the content to be veriﬁed as fake.
●
Deﬁne the process and governance for law enforcement involvement.
●
Conduct a tabletop exercise to test the deepfake incident response plan. Some
speciﬁc scenario examples maybe selected from:
○
Deepfakes and Synthetic Media in the Financial System: Assessing Threat
Scenarios - Carnegie Endowment for International Peace
(https://carnegieendowment.org/research/2020/07/deepfakes-and-synthet
ic-media-in-the-ﬁnancial-system-assessing-threat-scenarios)
○
Increasing Threat of Deepfake Identities - DHS
(https://www.dhs.gov/sites/default/ﬁles/publications/increasing_threats_o
f_deepfake_identities_0.pdf)
Once you have established clear roles and responsibilities, the ﬁnal stage of preparation is
establishing a mechanism for reporting deepfakes and then conducting an education and
awareness campaign for all your employees.
Awareness Training
Awareness training for your employees must, at minimum, cover:
●
What deepfakes are
●
What to do if you think you are being targeted by a deepfake
●
What to do if you are a subject of a deepfake
●
Where to report deepfakes
There is a signiﬁcant amount of training material available for deepfake awareness training,
which focuses on educating employees to spot indications that audio or video might be fake.
However, the authors of this guidance urge you to consider how much of the existing guidance is
already outdated and to carefully consider the content of that training before adopting any speciﬁc
training program.
The majority of current awareness training on deepfakes focus on trying to educate
employees how to detect a deepfake, such as providing guidance on detecting imperfections in
video such as lip movements or hands, or artifacts in the audio such as unusual pauses. However,
this is training individuals to believe it is possible for humans to tell the difference between real and
fake in all cases, and as this technology increases in sophistication that guidance will only have
served to provide a false sense of expertise and assurance. Researchers have discovered that even
with training people both cannot reliably detect deepfakes and tend to overestimate their own
ability to identify deepfakes (Köbis et al., 2021). Would it not be preferable, regardless of how
perfect the video or audio is, to train employees to follow ﬁnancial controls and procedures even
when pressured to go around them?
Further, deepfakes do not have to be perfect to be effective since scammers typically exploit
human psychology by employing urgent and high pressure scenarios which intend to create fear and
panic to make targets act rashly. Asking employees who are not experts in audio or video
generation to be hyper-aware of potential telltale artifacts and inconsistencies during an intense
phone call or high-pressure request seemingly coming from someone in a position of authority
seems to be an excessive expectation. When deepfake attacks are successful at conducting fraud
or social engineering a target for the purposes of gaining access, these are almost universal
examples of when a target was manipulated into bypassing established procedures and not
Version: 1
Page 15 of 35

| Guide for Preparing and Responding to Deepfake Events
correlated with the sophistication of the fake. Therefore, defense-in-depth and layered controls is a
key strategy to mitigate and prevent the worst impacts of deepfake social engineering.
Additionally, there are a number of benign video call tools which are able to cause the type of
artifacts that people typically associate with deepfakes. NVIDIA has several such tools, for example,
one feature in the Broadcast tool makes it appear as if the person is always making eye contact with
the camera even when they are not. Many of these tools could be disability accommodations or
simply quality-of-life improvements, which makes banning them outright unlikely.
Oli Buckley, a professor of cyber security at the University of East Anglia and other experts in
the ﬁeld also recommend that organizations should opt for a change in mindset instead of that
approach. “You can’t just believe your eyes these days, think a bit more widely about the videos you
see, or the calls you get. Critical thinking is the most important factor when dealing with deepfakes,
or any scam like this” (Hughes, 2023).
Therefore we recommend your training should:
●
Future-proof educational guidance and prevent accidentally conditioning an
employee to believe they have the expertise to detect a “real” audio or video. This
involves emphasizing that their eyes and ears cannot be trusted. Therefore, the
proper process must be followed in all cases without exception.
●
Reinforce how deepfakes are designed to inﬂuence someone to take an action by
triggering strong emotions such as fear and are often pitched with a sense of
pressure or urgency. This is referred to as an amygdala hūack, overriding normal
logic-based thinking leading a person to take an action before they have time to
reﬂect on the unusual nature of the request (Rowles, 2023).
●
Employees should also hear repeated, reinforced guidance on challenging requests
from senior leadership to move from authenticated meeting platforms to other
conferencing technologies, even when “explained” by “connection issues”, or
requests which originate from unusual sources such as WhatsApp messages.
●
Reinforce with all employees that they are empowered and encouraged to verify all
unusual requests by asking for communication through a different channel.
Requests via email should be veriﬁed with calling a known, good phone number.
Requests by video call could be conﬁrmed through an email and so forth.
●
Provide employees with guidance on what to do if they suspect a deepfake and
where to report it. This could include guidance such as hitting “record” on a
conference call, noting any contact details involved (emails, numbers, apps that were
used) and making notes about the request (company names used, dollar amounts,
bank accounts).
●
Standardize and socialize the practice of requiring veriﬁcation on any meetings
before users may join.
●
We recommend that your deepfake education approach include similar tactics that
are commonly employed for hardening employees against phishing which should
include - although often controversial - conducting deepfake simulations to test
employee awareness and effectiveness of procedures (Francey, 2024). This should
include:
○
Deepfake audio or video impersonation of executives on phone calls or video
conferences
○
Deepfake social media proﬁles and attempt to connect with employees
○
Sending phishing emails or messages with deepfake content to employees
Version: 1
Page 16 of 35

`;