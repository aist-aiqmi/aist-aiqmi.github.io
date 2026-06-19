var toc_content = `CYBERSECURITY OF AI AND STANDARDISATION 
 
18 
 
often rely upon a small set of vulnerabilities that can be exploited that are specific to a domain 
or an application. In this sense, ETSI TS 102 165-1, Methods and protocols; Part 1: Method 
and pro forma for threat, vulnerability, risk analysis (TVRA)10, and ISO/IEC 15408-1, 
Evaluation criteria for IT security, can be used to perform specific risk assessments. 
• The support that standards can provide to secure AI is limited by the maturity of 
technological development, which should therefore be encouraged and monitored. In 
other words, in some areas existing standards cannot be adapted or new standards cannot be 
fully defined yet, as related technologies are still being developed and not yet quite mature 
enough to be standardised. In some cases, first standards can be drafted (e.g. ISO/IEC TR 
24029-1:2021 on the robustness of deep neural networks) but will probably need to be 
regularly updated and adapted as research and development (R&D) progresses. For example, 
from the perspective of ML research, much of the work on adversarial examples, evasion 
attacks, measuring and certifying adversarial robustness, addressing specificities of data 
poisoning for ML models, etc. is still quite active R&D. Another challenge related to R&D on AI 
and standardisation is benchmarking: research results are often not comparable, resulting in a 
situation where it is not always clear what works under what conditions. 
Box 3: Example of technological gap: continuous learning11 
• The traceability and lineage of both data and AI components are not fully addressed. 
The traceability of processes is addressed by several standards related to quality. In that 
regard, ISO 9001 is the cornerstone of quality management. However, the traceability of data 
and AI components throughout their life cycles remains an issue that cuts across most threats 
and remains largely unaddressed. Indeed, both data and AI components may have very 
complex life cycles, with data coming from many sources and being transformed and 
augmented, and, while AI components may reuse third parties’ components or even open-
source components, all of those are obviously a source of increased risks. This aspect implies 
that technologies, techniques and procedures related to traceability need to be put in place to 
ensure the quality of AI systems, for instance that data being used do not contain biases (e.g. 
forgetting to include faces of people with specific traits), have not been deliberately poisoned 
(e.g. adding data to modify the outcome of the model) and have not been deliberately or 
unintentionally mislabelled (e.g. a picture of a dog labelled as a wolf). 
• The inherent features of ML are not fully reflected in existing standards. As introduced in 
Section 2.1, ML cannot, by design, be expected to be 100 % accurate. While this can also be 
true for (for example) ruled-based systems designed by humans, ML has a larger input space 
(making exhaustive testing difficult), black box properties and high sensitivity, meaning that 
small changes in inputs can lead to large changes in outputs. Therefore, it is even more 
 
10 Currently under revision to include AI as well. 
11  It is to be noted though that the concept of continuous learning is subject to different interpretations. It is not always clear 
how it differs from updating the system from time to time, i.e. what frequency of re-training would justify the label 
‘continuous learning”. 
Continuous learning is the ability of an AI component to evolve during its operational life through 
the use of in-operation data for retraining the AI component. This function is often perceived as 
the key ability of AI. 
Model poisoning is easy to do during continuous learning / in-operation learning. For example, 
during continuous learning, it is very challenging to check the quality of the data in real time. 
When it comes to high-risk AI components, the use of continuous learning would imply 
continuous validation of the data used for the training of the AI component (continuous data 
quality assessment), continuous monitoring of the AI component, continuous risk assessment, 
continuous validation and continuous certification if needed. While the issues with continuous 
learning have been described in ISO/IEC 22989, Information technology – Artificial intelligence 
– Artificial intelligence concepts and terminology, and the activities described above are 
conceptually feasible, their execution is still the object of R&D. 

CYBERSECURITY OF AI AND STANDARDISATION 
 
19 
 
important to understand, on the one hand, how the risk of failure can be mitigated and, on the 
other, if/when a failure is caused by a malicious actor. The most obvious aspects to be 
considered in existing/new standards can be summarised as follows. 
• AI/ML components may be associated with hardware or other software components in order 
to mitigate the risk of functional failure, therefore changing the cybersecurity risks associated 
with the resulting set-up12. 
• Reliable metrics can help a potential user detect a failure. For example, with precision and 
recall metrics for AI systems relying on supervised classification, if users know the 
precision/recall thresholds of an AI system they should be able to detect anomalies when 
measuring values outside those thresholds, which may indicate a cybersecurity incident. 
While this would be a general check (more efficient for attacks on a massive scale than for 
specific attacks), the accurate definition of reliable metrics is a prerequisite to define more 
advanced measurements. 
• Testing procedures during the development process can lead to certain levels of 
accuracy/precision. 
It is to be noted that the subject of metrics for AI systems and of testing procedures is 
addressed by standardisation deliverables such as ISO/IEC DIS 5338-AI system life cycle 
processes (under development); ISO/IEC AWI TS 12791-Treatment of unwanted bias in 
classification and regression machine learning tasks (under development); ETSI TR 103 305-x, 
Critical security controls for effective cyber defence; and ETSI GR SAI-006, The role of 
hardware in security of AI13. However, the coverage of the AI systems trustworthiness metrics 
that are needed is incomplete, which is one reason for the CEN-CENELEC initiative on the ‘AI 
trustworthiness characterisation’ project. 
4.2 STANDARDISATION IN SUPPORT OF THE CYBERSECURITY OF AI – 
TRUSTWORTHINESS 
As explained in Section 2.2, cybersecurity can be understood as going beyond the mere 
protection of assets and be considered fundamental to the correct implementation of 
trustworthiness features of AI, and – conversely – the correct implementation of trustworthiness 
features is key to ensuring cybersecurity. 
Table 3 exemplifies this relation in the context of the draft AI Act. It shows the role of 
cybersecurity within a set of requirements outlined by the act that can be considered as 
referring to the trustworthiness of an AI ecosystem. In fact, some of them (e.g. quality 
management, risk management) contribute to building an AI ecosystem of trust indirectly, but 
have been included because they are considered equally important and they are requirements 
of the draft AI Act14. 
 
 
 
12 For example, a self-driving car could be automatically deactivated if the supervising system detected abnormal conditions 
that could signal a cybersecurity attack. 
13 Other examples include ISO/IEC 23894, Information technology – Artificial intelligence – Guidance on risk management; 
ISO/IEC DIS 42001, Information technology – Artificial intelligence – Management system; and ISO/IEC DIS 24029-2, 
Artificial intelligence (AI) – Assessment of the robustness of neural networks – Part 2: Methodology for the use of formal 
methods. 
14 The European Commission’s High-Level Expert Group on Artificial Intelligence has identified seven characteristics of 
trustworthiness: human agency and oversight; technical robustness and safety; privacy and data governance; 
transparency; diversity, non-discrimination and fairness; societal and environmental well-being; and accountability. 

CYBERSECURITY OF AI AND STANDARDISATION 
 
20 
 
Table 315: Role of cybersecurity within a set of requirements outlined by the draft AI Act 
Draft AI Act 
Requirement 
Description 
Relevance of cybersecurity 
Data and data 
governance 
High-risk AI systems which make use of 
techniques involving the training of models with 
data shall be developed on the basis of training, 
validation, and testing datasets that meet a set 
of quality criteria 
The requirements here address data quality, which is 
key to secure data feeds, processing and outputs. 
Data quality can be reinforced by the use of tools that 
verify the source of data and the integrity of data (i.e. 
to prove that data have not been manipulated 
between source and sink), and by limiting access to 
data.  
Record-keeping 
High-risk AI systems shall be designed and 
developed with capabilities enabling the 
automatic recording of events (‘logs’) while the 
high-risk AI systems is operating. Those logging 
capabilities shall conform to recognised 
standards or common specifications. 
All of the major security management control 
standards (e.g. ISO 27000 and ETSI TR 103 305) 
address the importance of event logging and having 
the staff to analyse the logs. These logs probably 
contain sensitive data, and appropriate standard 
cybersecurity measures, i.e. CIA, need to be 
deployed. 
Transparency and 
provision of 
information to 
users 
High-risk AI systems shall be designed and 
developed in such a way to ensure that their 
operation is sufficiently transparent to enable 
users to interpret the system’s output and use it 
appropriately. An appropriate type and degree of 
transparency shall be ensured, with a view to 
achieving compliance with  the  relevant 
obligations of the user and of the provider set 
out in Chapter 3 of [COM(2021) 206 final]. 
As noted above, documentation in itself is not a 
security requirement. However, as a security control, 
technical documentation is a key element in system 
transparency and in (high-level) explainability. 
Human oversight 
High-risk AI systems shall be designed and 
developed in such a way, including with 
appropriate human–machine interface tools, that 
they can be effectively overseen by natural 
persons during the period in which the AI system 
is in use. 
This form of control is identified in ISO27001 and in 
ETSI TS 103 305-1. (16) Where human oversight is 
required, it should form an integral part of the design 
of the system, and performance and other constraints 
should be added to the role of oversight. This may 
include the performance of mandatory actions and 
checks, and rules for escalation of an event 
assessment. 
Risk management 
system 
An assessment through internal checks for 
‘stand-alone’ high-risk AI systems would require 
a full, effective and properly documented ex ante 
compliance with all requirements of the 
regulation and compliance with robust quality 
and risk management systems and post-market 
monitoring.  
A risk management system shall be established, 
implemented, documented and maintained in 
relation to high-risk AI systems. 
ISO/IEC 31000 is a framework for risk analysis and 
the management of risk analysis systems. At a more 
detailed level, tools for vulnerability analysis (e.g. 
ETSI TS 102 165-1) may apply, as well as runtime 
analysis tools. Many development environments will 
perform both static and dynamic tests on software 
that allow risks in the codebase to be identified. The 
suite of measures should operate in concert. 
Quality 
management 
system 
Providers of high-risk AI systems shall put a 
quality management system in place that 
ensures compliance with this Regulation.  
The provider should establish a sound quality 
management system, ensure the 
accomplishment of the required conformity 
assessment procedure, draw up the relevant 
documentation and establish a robust post-
market monitoring system. 
ISO 9001 is the overarching standard for the 
implementation of a quality management system in 
development environments, which should include 
security management aspects. 
Conformity 
assessment 
AI systems that create a high risk to the health 
and safety or fundamental rights of natural 
persons: in line with a risk-based approach, 
these high-risk AI systems are permitted on the 
European market subject to compliance with 
This is necessary for the evaluation of all 
requirements, including cybersecurity. 
 
15 Source: adapted from Nativi, S. and De Nigris, S., AI Standardisation Landscape: State of play and link to the EC 
proposal for an AI regulatory framework (https://publications.jrc.ec.europa.eu/repository/handle/JRC125952). 
 

`;