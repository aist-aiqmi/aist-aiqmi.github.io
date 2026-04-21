var toc_content = `| Guide for Preparing and Responding to Deepfake Events
Note from OWASP CTI Layer Lead Authors
Early in 2024, the OWASP Top 10 for LLM & GenAI community expressed a
great deal of interest in covering the adversarial use of artiﬁcial
intelligence. On reﬂection, the core team determined that since
vulnerabilities within AI systems was the primary focus of the Top 10,
guidance on adversarial use fell outside the scope of that publication.
The OWASP community came together and volunteered to create a
separate resource group, one that would focus on creating actionable
guidance, checklists and research into adversarial
use for cybersecurity professionals. That group
became known as the CTI Layer team, led by Rachel
James and Bryan Nakayama.
This Guide for Preparing and Responding to Deepfake
Events is the ﬁrst of several planned publications of
the CTI Layer. This publication was developed by
cybersecurity professionals for cybersecurity professionals. We intended to
provide practical guidance for a technical and leadership audience who must
create playbooks, response plans and quickly respond to a deepfake event. It is
the hope of the authors and contributors of this document that we can improve
the cultivation of best practices and provide a comprehensive overview of what
is involved in preparing, detecting, and responding to such events.
Rachel James, CISSP, CISA, OSCP, GMLE
Bryan Nakayama, Ph.D.
CyberShujin LLC
CTI Professional
racheljames@cybershujin.com
bryan.nakayama@owasp.org
Version: 1
Page 6 of 35

| Guide for Preparing and Responding to Deepfake Events
Overview
Deepfakes—hyper-realistic digital forgeries—have gained signiﬁcant attention as the rapid
development of generative AI has made it easier to produce convincingly realistic videos and audio
recordings that can deceive even the most discerning viewers. They pose a potentially daunting
challenge for cybersecurity professionals since fraudsters and cybercriminals can leverage
deepfakes to carry out sophisticated impersonation and social engineering attacks. Due to the
widespread use of social media, everyone from high-proﬁle individuals like CEOs to average
citizens are at the risk of impersonation since it can take as little as 10 seconds of audio or video to
produce a convincing deepfake. Deepfake-generated content has already been used in phishing
and fraud schemes, where attackers created videos of CEOs and other trusted ﬁgures to
manipulate employees into divulging sensitive information and/or transferring funds (Chen &
Magramo, 2024).
While deepfakes are a powerful tool for social engineering, cybersecurity professionals do
not need to turn to new detection technologies or intensive “how to spot a deepfake” training
programs in order to mitigate the risk that they pose. Recent studies suggest that deepfake
detection technologies are still immature and the rapid advance of the technology will make
training programmes focused on looking for speciﬁc visual or audio artifacts rapidly out-of-date
(GAO, 2024). Moreover, researchers have discovered that even with training people both cannot
reliably detect deepfakes and tend to overestimate their own ability to identify deepfakes (Köbis et
al., 2021). Like many other social engineering attacks, deepfake-enhanced attacks frequently
depend on the victim bypassing established procedures and controls at the behest of the attacker.
Therefore, this guide emphasizes practical and pragmatic defense-in-depth strategies as well as
layered controls as a key approach that cybersecurity professionals should take to deepfakes.
The hope is to provide a guide that is resilient to evolving deepfake-enhanced threats by
applying fundamental security principles. Key strategies that the guide endorses include:
●
Focusing on process adherence rather than visual or auditory detection of fakes.
●
Implementing and maintaining strong ﬁnancial controls and veriﬁcation procedures.
●
Cultivating a culture of awareness and skepticism towards unusual requests.
●
Developing and regularly updating incident response plans.
The ﬁrst section in the guide is the 
`;