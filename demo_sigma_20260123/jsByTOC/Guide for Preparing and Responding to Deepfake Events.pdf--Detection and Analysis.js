var toc_content = `| Guide for Preparing and Responding to Deepfake Events
■
T1082: System Information Discovery
●
Technique: Lateral Movement
○
Related ATT&CK TTPs: 
■
T1021: Remote Services
●
Technique: Collection
○
Related ATT&CK TTPs: 
■
T1114: Email Collection
■
T1213: Data from Information Repositories
■
T1005: Data from Local System
●
Technique: Exﬁltration
○
Related ATT&CK TTPs: 
■
T1048: Exﬁltration Over Alternative Protocol
■
T1052.003 Exﬁltration Over Physical Medium: Removable Media -
Transferring ﬁles using a Raspberry Pi indicates the use of
removable media to exﬁltrate data from the organization.
●
Impact
○
Related ATT&CK TTPs: 
■
T1499: Endpoint Denial of Service
■
T1565: Data Manipulation
■
T1486: Data Encrypted for Impact
■
T1490: Inhibit System Recovery
■
T1005: Data from Local System
■
T1056: Input Capture
Containment, Eradication and Recovery:
●
Consult with legal counsel to ensure compliance with privacy laws and employment
regulations.
●
If a breach is conﬁrmed, activate your incident response plan.
●
Isolate affected systems and revoke any access granted to the malicious actor.
Post-Incident Activity:
●
Create a detailed timeline of the hiring process, from initial application to the report
of suspicion.
●
Collect any bank accounts or other ﬁnancial accounts used by the suspect
●
Identify any anomalies or deviations from standard procedures.
●
Report the incident to relevant authorities and information sharing organizations.
●
Share sanitized details with industry peers to raise awareness and improve collective
defense.
Version: 1
Page 28 of 35

| Guide for Preparing and Responding to Deepfake Events
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

`;