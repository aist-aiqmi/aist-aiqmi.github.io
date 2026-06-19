var toc_content = `| Guide for Preparing and Responding to Deepfake Events
Mis/Dis/Mal Information
According to a comprehensive study conducted by Google DeepMind, mis/dis/mal
information is the leading way in which malicious actors abuse Generative AI. Threat actors
motivated by political ideology, such as hacktivists, could leverage generative AI to defame a
company or government by creating fake representations of organizational leaders saying offensive
things. Similarly, criminals could seek to manipulate the stock price of a company by creating a
deepfake of a CEO making a major business announcement (Reuters, 2024).
(Graphic via Google DeepMind)
Detection and Analysis
Detection efforts typically focus on developing methods that seek evidence of manipulation
and present that evidence as a numerical output or a visualization to alert an analyst that the media
needs further analysis. These methods are developed assuming that modiﬁcations to the original
media or completely synthetic media contain statistically signiﬁcant traces that can be found. This
form of detection is a cat-and-mouse game; as detection methods are developed and made public,
there is often a quick response from the generation community to counter them.
(media.defense.gov)
For several years, public and private organizations have expressed concern over manipulated
multimedia and developed means to detect and identify countermeasures. Many public and private
partnerships have since emerged, focusing on cooperative efforts to detect these manipulations
and verify/authenticate multimedia (DOD, 2023).
A 2024 assessment of deepfake detection challenges by GAO point out several limitations to
the current maturity of detection technology including:
●
Data needs for detection. Deepfake detection tools must generally be trained with
large and diverse data sets to reliably detect deepfakes. Technology companies and
researchers have released data sets to help train detection tools, but the current
data sets are not suŨcient by themselves. Detection tools must be constantly
updated with data of increasing sophistication to ensure that they continue to be
effective at detecting manipulated media.
Version: 1
Page 29 of 35

| Guide for Preparing and Responding to Deepfake Events
●
Cat and Mouse - techniques used to identify deepfakes tend to lead to the
development of more sophisticated deepfake techniques. This “cat and mouse”
situation means detection tools must be regularly updated to keep pace
●
According to recent studies, existing detection methods and models may not
accurately identify deepfakes in real-world scenarios. For example, accuracy may be
reduced if lighting conditions, facial expressions, or video or audio quality are
different from the data used to train the detection model, or if the deepfake was
created using a different method than that used in the training data. Further, future
advances in deepfake generation are expected to eliminate hallmarks of current
deepfakes, such as abnormal eye blinking (GAO, 2024).
While there are some recent advancements in the detection technology space, such as Intel’s
FakeCatcher (McFarland, 2024) that show promising initial results, our belief is that the maturity of
the technology offerings in the space is limited and due to the challenges above, will require
substantial investment and ongoing research into accuracy over time before most organizations
should consider adoption. For now, the audience for the acquisition of this type of bleeding edge
deepfake detection solutions remains the government, defensive agencies and media
organizations.
Our recommendations:
●
Encourage employees to report video or audio of organizational leaders being
released through non-standard channels or making unusual claims.
●
Leverage reputation and brand monitoring services to detect when there are spikes
in negative sentiment against your organization. Work with your vendor or teams
responsible for monitoring sentiment around important times such as earnings
announcements.
●
If possible, secure the original or a copy of the deepfake content.
●
If you have a forensic or incident response retainer that included deepfake analysis,
provide the original ﬁle and its hash value to forensic examiners.
●
If you do not have a retainer for analysis, examine metadata looking for
inconsistencies such as timestamps, location or tools used to generate the media.
Various guidance on how to do this type of analysis can be found at WITNESS Media
Lab | WITNESS Media Lab Veriﬁcation Resources. Variations in recording
parameters, mismatched metadata or jumps in timestamps can indicate the media
has been manipulated. Some suggestions for this type of analysis include:
○
InVID Veriﬁcation Plugin - InVID project (invid-project.eu)
○
Video / Photo / Audio tools Digital Journalism | OSINT Essentials
○
Collection of tools for Video Editing and Analyzing can be found at
cipher387/osint_stuff_tool_collection: A collection of several hundred online
tools for OSINT (github.com)
●
Through OSINT, look for additional sources of the media. This can help determine the
provenance of the data and additional metadata may be found in other sources. It
can also be used to identify if any other internal resources are a target of a
campaign. Some suggestions for this include:
○
TinEye and Google Reverse Image Search
○
Collection of tools for Image Search and Identiﬁcation can be found at
cipher387/osint_stuff_tool_collection: A collection of several hundred online
tools for OSINT (github.com)
Common TTPs:
●
Technique: Gather Victim Information
○
Tactic: Reconnaissance
○
Related MITRE ATT&CK/ATLAS TTPs:
■
Refer to the section from “Financial gain through fraud by
Impersonation”
Version: 1
Page 30 of 35

| Guide for Preparing and Responding to Deepfake Events
○
Description:
Refer to the procedure from “Financial gain through fraud by Impersonation”
section. In this case the victim could just be one persona as opposed to
multiple like what is in previous events.
●
Technique: Gather Victim Artifacts
○
Refer to “Financial gain through fraud by Impersonation” for details.
●
Technique: Finalize hosting options
○
Tactic: Resource Development
○
Related MITRE ATT&CK/ATLAS TTPs:
■
T1583.001:Acquire Infrastructure: Domains
■
T1583.006: Acquire Infrastructure: Web Services
■
T1583.008:Acquire Infrastructure: Malvertising
■
T1585.001: Establish Accounts: Social Media Accounts
○
Description:
Adversaries would look to acquire infrastructure or create fake proﬁles to
upload & publish faked audios or videos. The infrastructure could be a
dedicated website, as an advertisement or video content in existing
websites or via social media like faked linkedIn proﬁles, youtube accounts,
whatsapp accounts etc.
●
Technique: Develop Deepfake Models
○
Refer to “Financial gain through fraud by Impersonation” for details.
●
Technique: Upload Deepfake Materials
○
Tactic: Initial Access
○
Related MITRE ATT&CK/ATLAS TTPs:
■
No current TTP mapping
○
Description:
Adversaries upload the faked materials into the hosted environment
ﬁnalized in the previous TTP.
●
Technique: Attempt Mass Circulation
○
Tactic: Lateral Movement
○
Related MITRE ATT&CK/ATLAS TTPs:
■
No current TTP mapping
○
Description:
Adversaries may attempt to initiate mass circulation of the content. This
could be achieved via posting the faked audio or video directly from a fake
social media proﬁle (Like LinkedIn, Whatsapp, Youtube etc) or as a link to the
content which is hosted in an adversary controlled infrastructure.
●
Technique: Reputational Harm
○
Tactic: Impact
○
Related MITRE ATT&CK/ATLAS TTPs:
■
AML.T0048.001: External Harms: Reputational Harm
○
Description:
Reputational harm involves a degradation of public perception and trust in
organizations. Examples of reputation-harming incidents include scandals
or false impersonations.
Containment, Eradication and Recovery:
●
Takedown Requests: if the deepfake contains any copyrighted material it maybe
possible to submit a “takedown notice” under the Digital Millennium Copyright Act
(DMCA) to the website on which the infringing deepfake is hosted. However, it should
be noted that this could be fraught with issues if it is not clear there was copyright
Version: 1
Page 31 of 35

`;