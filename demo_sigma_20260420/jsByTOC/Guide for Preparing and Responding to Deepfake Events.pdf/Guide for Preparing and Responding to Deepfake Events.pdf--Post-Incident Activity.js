var toc_content = `| Guide for Preparing and Responding to Deepfake Events
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

| Guide for Preparing and Responding to Deepfake Events
infringement or if there is an argument for “fair use” considerations (Gesser et al.,
2023).
●
Terms of Service Violation Reporting: another possible method for removing
deepfakes involves reviewing the hosting website’s terms and conditions to
determine if manipulated or synthetic media clauses may allow you to submit a
violation report (Gesser et al., 2023).
●
Establish contacts with members of your organization’s public
relations/communications team.
Post-Incident Activity:
●
Conduct post-incident reviews to identify areas for improvement in security controls
and response procedures.
●
Determine if additional training is needed for your staff. Your people are your best
resource and an educated workforce will reduce your risk. Everybody, no matter their
role in your company, has a responsibility for the security and privacy of your data as
well as that of your customers.
●
Evaluate if deepfake detection technologies should be acquired, know that these are
still immature (GAO, 2024) as discussed above.
Version: 1
Page 32 of 35

`;