var toc_content = ` 
62 
MG-4.2-006 
Practice and follow incident response plans for addressing the generation of 
inappropriate or harmful content and adapt processes based on findings to 
prevent future occurrences. Conduct post-mortem analyses of incidents with 
relevant AI actors, to understand the root causes and implement preventive 
measures. 
Human AI Configuration, 
Dangerous or Violent 
Recommendations 
MG-4.2-007 
Provide external stakeholders with regular updates about the progress, 
challenges, and improvements made based on their feedback through the use of 
public venues such as online platforms and communities, and open-source 
initiatives. 
Intellectual Property 
MG-4.2-008 
Simulate various scenarios to test GAI system responses and verify intended 
performance across different situations. 
 
MG-4.2-009 
Use visualizations to represent the GAI model behavior to ease non-technical 
stakeholders understanding of GAI system functionality. 
Human-AI Configuration 
AI Actors: AI Deployment, AI Design, AI Development, Affected Individuals and Communities, End-Users, Operation and 
Monitoring, TEVV 
 
1 
*MANAGE 4.3: Incidents and errors are communicated to relevant AI actors, including affected communities. Processes for tracking, 
responding to, and recovering from incidents and errors are followed and documented. 
Action ID 
Action 
Risks 
MG-4.3-001 
Conduct after-action assessments for GAI system incidents to verify incident 
response and recovery processes are followed and effective. 
 
MG-4.3-002 
Establish and maintain change management records and procedures for GAI 
systems, including the reasons for each change, how the change could impact 
each intended context of use, and step-by-step details of how changes were 
planned, tested, and deployed. 
 
MG-4.3-003 
Establish and maintain policies and procedures to record and track GAI system 
reported errors, near-misses, incidents, and negative impacts. 
Confabulation, Information 
Integrity 
MG-4.3-004 
Establish processes and procedures for regular sharing of information about 
errors, incidents, and negative impacts for each and across contexts, sectors, 
and AI actors, including the date reported, the context of use, the number of 
reports for each issue, and assessments of impact and severity. 
Confabulation, Human AI 
Configuration, Information 
Integrity 
AI Actors: AI Deployment, Affected Individuals and Communities, Domain Experts, End-Users, Human Factors, Operation and 
Monitoring 
 
2 

 
63 
Appendix A. Primary GAI Considerations 
1 
The following primary considerations were derived as overarching themes from the GAI PWG 
2 
consultation process. These considerations (Governance, Pre-Deployment Testing, Content 
3 
Provenance, and Incident Disclosure) are relevant to any organization designing, developing, and 
4 
using GAI and also inform the Actions to Manage GAI risks. Information included about the primary 
5 
considerations is not exhaustive, but highlights the most relevant topics derived from the GAI PWG.  
6 
Acknowledgments: These considerations could not have been surfaced without the helpful analysis 
7 
and contributions from the community and NIST staff GAI PWG leads: George Awad, Luca Belli, Mat 
8 
Heyman, Yooyoung Lee, Reva Schwartz, and Kyra Yee. 
9 
A.1. Governance 
10 
A.1.1. Overview 
11 
Like any other technology system, governance principles and techniques can be used to manage 
12 
risks related to generative AI models, capabilities, and applications. Organizations may choose to 
13 
apply their existing risk tiering to GAI systems, or they may opt to revise or update AI system risk 
14 
levels to address these unique GAI risks. This section describes how organizational governance 
15 
regimes may be re-evaluated and adjusted for GAI contexts. It also addresses third-party 
16 
considerations for governing across the AI value chain.  
17 
A.1.2. Organizational Governance 
18 
GAI opportunities, risks and long-term performance characteristics are typically less well-
19 
understood than non-generative AI tools. and may be perceived and acted upon by humans in ways 
20 
that vary greatly. Accordingly, GAI may call for different levels of oversight from AI actors or 
21 
different human-AI configurations in order to manage their risks effectively. Organizations’ use of 
22 
GAI systems may also warrant additional human review, tracking and documentation, and greater 
23 
management oversight.  
24 
AI technology can produce varied outputs in multiple modalities and present many classes of user 
25 
interfaces. This leads to a broader set of AI actors interacting with GAI systems for widely differing 
26 
applications and contexts of use. These can include data labeling and preparation, development of 
27 
GAI models, content moderation, code generation and review, text generation and editing, image 
28 
and video generation, summarization, search, and chat. These activities can take place within 
29 
organizational settings or in the public domain. 
30 
Organizations can restrict AI applications that cause harm, exceed stated risk tolerances, or that 
31 
conflict with their tolerances or values. Governance tools and protocols that are applied to other 
32 
types of AI systems can be applied to GAI systems. These plans and actions include: 
33 
 Accessibility and reasonable 
34 
accommodations 
35 
 AI actor credentials and qualifications  
36 
 Alignment to organizational values 
37 
 Auditing and assessment 
38 
 Change-management controls 
39 
 Commercial use 
40 
 Data provenance 
41 
 Data protection 
42 
 Data retention  
43 
 Consistency in use of defining key terms 
44 
 Decommissioning 
45 

 
64 
 Discouraging anonymous use 
46 
 Education  
47 
 Impact assessments  
48 
 Incident response 
49 
 Monitoring 
50 
 Opt-outs  
51 
 Risk-based controls 
52 
 Risk mapping and measurement 
53 
 Science-backed TEVV practices 
54 
 Secure software development practices 
55 
 Stakeholder engagement 
56 
 Synthetic content detection and 
57 
labeling tools and techniques 
58 
 Whistleblower protections 
59 
 Workforce diversity and 
60 
interdisciplinary teams
61 
62 
Establishing acceptable use policies and guidance for the use of GAI in formal human-AI teaming 
63 
settings as well as different levels of human-AI configurations can help to decrease risks arising 
64 
from misuse, abuse, inappropriate repurpose, and misalignment between systems and users. These 
65 
practices are just one example of adapting existing governance protocols for GAI contexts.  
66 
A.1.3. Third-Party Considerations 
67 
Organizations may seek to acquire, embed, incorporate, or use open source or proprietary third-
68 
party GAI models, systems, or generated data for various applications across an enterprise. Use of 
69 
these GAI tools and inputs has implications for all functions of the organization – including but not 
70 
limited to acquisition, human resources, legal, compliance, and IT services – regardless of whether 
71 
they are carried out by employees or third parties. Many of the actions cited above are relevant and 
72 
options for addressing third-party considerations. 
73 
Third party GAI integrations may give rise to increased intellectual property, data privacy, or 
74 
information security risks, pointing to the need for clear guidelines for transparency and risk 
75 
management regarding the collection and use of third-party data for model inputs. Organizations 
76 
may consider varying risk controls for foundation models, fine-tuned models, and embedded tools, 
77 
enhanced processes for interacting with external GAI technologies or service providers. 
78 
Organizations can apply standard or existing risk controls and processes to proprietary or open-
79 
source GAI technologies, data, and third-party service providers, including acquisition and 
80 
procurement due diligence, requests for software bills of materials (SBOMs), application of service 
81 
level agreements (SLAs), and statement on standards for attestation engagement (SSAE) reports to 
82 
help with third-party transparency and risk management for GAI systems. 
83 
A.1.4. Pre-Deployment Testing 
84 
A.1.4.1. Overview 
85 
The diverse ways and contexts in which GAI systems may be developed, used, and repurposed 
86 
complicates risk mapping and pre-deployment measurement efforts. Robust test, evaluation, 
87 
validation, and verification (TEVV) processes can be iteratively applied – and documented – in early 
88 
stages of the AI lifecycle and informed by representative AI actors (see Figure 3 of the AI RMF). Until 
89 
new and rigorous early lifecycle TEVV approaches are developed and matured for GAI, 
90 
organizations may use recommended “pre-deployment testing” practices to measure performance, 
91 
capabilities, limits, risks, and impacts. This section describes risk measurement and estimation as 
92 

 
65 
part of pre-deployment TEVV, and examines the state of play for pre-deployment testing 
93 
methodologies.  
94 
A.1.4.2. Limitations of Current Pre-deployment Test Approaches 
95 
Currently available pre-deployment TEVV processes used for GAI applications may be inadequate, 
96 
non-systematically applied, or fail to reflect or mismatched to deployment contexts. For example, 
97 
the anecdotal testing of GAI system capabilities through video games or standardized tests designed 
98 
for humans (e.g., intelligence tests, professional licensing exams) does not guarantee GAI system 
99 
validity or reliability in those domains. Similarly, jailbreaking or prompt-engineering tests may not 
100 
systematically assess validity or reliability risks.  
101 
Measurement gaps can arise from mismatches between laboratory and real-world settings. Current 
102 
testing approaches often remain focused on laboratory conditions or restricted to benchmark test 
103 
datasets and in silico techniques that may not extrapolate well to—or directly assess GAI impacts in 
104 
– real world conditions. For example, current measurement gaps for GAI make it difficult to 
105 
precisely estimate its potential ecosystem-level or longitudinal risks and related political, social, and 
106 
economic impacts. Gaps between benchmarks and real-world use of GAI systems may likely be 
107 
exacerbated due to prompt sensitivity and broad heterogeneity of contexts of use. 
108 
A.1.5. Structured Public Feedback 
109 
Structured public feedback can be used to evaluate whether GAI systems are performing as 
110 
intended and to calibrate and verify traditional measurement methods. Examples of structured 
111 
feedback include, but are not limited to: 
112 
 
Participatory Engagement Methods: Methods used to solicit feedback from civil society groups, 
113 
affected communities, and users, including focus groups, small user studies, and surveys. 
114 
 
Field Testing: Methods used to determine how people interact with, consume, use, and make 
115 
sense of AI-generated information, and subsequent actions and effects, including UX, usability, 
116 
and other structured, randomized experiments.  
117 
 
AI Red-teaming: A structured testing exercise used to probe an AI system to find flaws and 
118 
vulnerabilities such as inaccurate, harmful, or discriminatory outputs, often in a controlled 
119 
environment and in collaboration with system developers. 
120 
Information gathered from structured public feedback can inform design, implementation, 
121 
deployment approval, maintenance, or decommissioning decisions. Results and insights gleaned 
122 
from these exercises can serve multiple purposes, including improving data quality and 
123 
preprocessing, bolstering governance decision making, and enhancing system documentation and 
124 
debugging practices. When implementing feedback activities, organizations should follow human 
125 
subjects research requirements and best practices such as informed consent and subject 
126 
compensation. 
127 
A.1.5.1. Participatory Engagement Methods 
128 
On an ad hoc or more structured basis, organizations can design and use a variety of channels to 
129 
engage external stakeholders in product development or review. Focus groups with select experts 
130 
can provide feedback on a range of issues. Small user studies can provide feedback from 
131 

 
66 
representative groups or populations. Anonymous surveys can be used to poll or gauge reactions to 
132 
specific features. Participatory engagement methods are often less structured than field testing or 
133 
red teaming, and are more commonly used in early stages of AI or product development.  
134 
A.1.5.2. Field Testing 
135 
Field testing involves structured settings to evaluate risks and impacts and to simulate the 
136 
conditions under which the GAI system will be deployed. Field style tests can be adapted from a 
137 
focus on user preferences and experiences towards AI risks and impacts – both negative and 
138 
positive. When carried out with large groups of users, these tests can provide estimations of the 
139 
likelihood of risks and impacts in real world interactions. 
140 
Organizations may also collect feedback on outcomes, harms, and user experience directly from 
141 
users in the production environment after a model has been released, in accordance with human 
142 
subject standards such as informed consent and compensation. Organizations should follow 
143 
applicable human subjects research requirements, and best practices such as informed consent and 
144 
subject compensation, when implementing feedback activities. 
145 
A.1.5.3. AI Red-teaming 
146 
AI red-teaming exercises are often conducted in a controlled environment and in collaboration with 
147 
AI developers building AI models. AI red-teaming can be performed before or after AI models or 
148 
systems are made available to the broader public; this section focuses on red-teaming in pre-
149 
deployment contexts.  
150 
The quality of AI red-teaming outputs is related to the background and expertise of the AI red-team 
151 
itself. Demographically and interdisciplinarily diverse AI red-teams can be used to identify flaws in 
152 
the varying contexts where GAI will be used. For best results, AI red-teams should demonstrate 
153 
domain expertise, and awareness of socio-cultural aspects within the deployment context. AI red-
154 
teaming results should be given additional analysis before they are incorporated into organizational 
155 
governance and decision making, policy and procedural updates, and AI risk management efforts. 
156 
Various types of AI red-teaming may be appropriate, depending on the use case: 
157 
 
General Public: Performed by general users (not necessarily AI or technical experts) who are 
158 
expected to use the model or interact with its outputs, and who bring their own lived 
159 
experiences and perspectives to the task of AI red-teaming. These individuals may have been 
160 
provided instructions and material to complete tasks which may elicit harmful model behaviors. 
161 
This type of exercise can be more effective with large groups of AI-teamers. 
162 
 
Expert: Performed by specialists with expertise in the domain or specific AI red-teaming context 
163 
of use (e.g., medicine, biotech, cybersecurity).  
164 
 
Combination: In scenarios when it is difficult to identify and recruit specialists with sufficient 
165 
domain and contextual expertise, AI red-teaming exercises may leverage both expert and 
166 
general public participants. For example, expert AI red-teamers could modify or verify the 
167 
prompts written by general public AI red-teamers. These approaches may also expand coverage 
168 
of the AI risk attack surface.  
169 

`;