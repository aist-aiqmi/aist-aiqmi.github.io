var toc_content = `CYBERSECURITY OF AI AND STANDARDISATION 
 
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
 

CYBERSECURITY OF AI AND STANDARDISATION 
 
21 
 
certain mandatory requirements and an ex-ante 
conformity assessment. 
Robustness  
AI systems should be resilient against risks 
connected to the limitations of the system (e.g. 
errors, faults, inconsistencies, unexpected 
situations) as well as against malicious actions 
that may compromise the security of the AI 
system and result in harmful or otherwise 
undesirable behaviour. 
Cybersecurity is one of the key aspects – albeit not 
the only one – of robustness. It concerns the 
protection of the AI system against attacks as well as 
the capacity to recover from such attacks.  
 
The general-purpose technical and organisational standards outlined in Section 3.1 cover these 
trustworthiness aspects to some extent. The SDOs are actively tackling the matter and are 
developing AI-specific standards in support of trustworthiness. In particular, ISO/IEC SC 42 is 
developing most of those aspects in multiple standards, and CEN-CENELEC JTC 21 is working 
towards adopting/adapting those standards (see annex A.3). This is normal and, to some 
extent, inevitable at first. Still, in a regulatory context, one could expect a unified 
comprehensive, coherent and synthetic approach to trustworthiness while avoiding the 
multiplication – and to some extent duplication – of efforts. Furthermore, it would be inefficient 
and even counterproductive to have multiple sets of standards for the same characteristics 
(robustness, explainability, etc.), some coming from the cybersecurity domain and some coming 
from the AI domain, with risks of discrepancy. The result is that a unified approach to 
trustworthiness characteristics is highly recommended. In particular, in order to bring coherency 
and comprehensiveness, it is necessary to clarify who is doing what, in order to avoid needless 
and confusing duplication, and a certain level of coordination and liaison is vital. 
Box 4: Example – Cybersecurity conformity assessment 
Box 5: Example – Adversarial attacks 
4.3 CYBERSECURITY AND STANDARDISATION IN THE CONTEXT OF 
THE DRAFT AI ACT 
The draft AI Act refers explicitly to the cybersecurity of high-risk AI systems. High-risk AI 
systems are limited to AI systems intended to be used as safety components of products that 
are subject to third party ex ante conformity assessment, and stand-alone AI systems mainly 
with fundamental rights implications (e.g. for migration, asylum and border control management) 
and for the management and operation of critical infrastructure. More precisely, the draft AI Act 
builds upon a risk-based approach to identify whether an AI system is high risk on the basis of 
the system’s intended use and implications for health, safety and fundamental rights. 
When it comes to AI systems, conformity assessment will be performed against all requirements 
outlined in the draft AI Act, trustworthiness, including its cybersecurity aspects, being among 
them. Existing standards on trustworthiness lack conformity assessment methods, sometimes 
including technical requirements and metrics. While there are a lot of activities in ISO/IEC SC 42 
regarding trustworthiness characteristics, there are also a lot of gaps and very few developed 
requirements and metrics. Therefore, there is the risk that conformity assessment methods will 
be addressed by different standards depending on the characteristic being evaluated. Since 
some characteristics overlap each other, while others might be contradictory (e.g. there might 
be a trade-off between transparency and cybersecurity), a global and coherent approach is 
needed. 
For example, identified adversarial attack threats could be used in both the ML algorithm and 
the testing and validation process. In that specific case, the threats could have been identified 
by the AI system’s monitoring/oversight process and the testing process. It is likely that some 
technical requirements/adjustments coming from the cybersecurity threat assessment should 
find their place in the AI standards repository relating both to oversight and to testing. 

CYBERSECURITY OF AI AND STANDARDISATION 
 
22 
 
It is important to note that this approach differs from the cybersecurity risk-based approach, 
which sees a cybersecurity risk as a function of its adverse impact and its likelihood of 
occurrence. Based on the draft AI Act, cybersecurity is a requirement that applies, and therefore 
is assessed, only once a system is identified as high risk. 
These high-risk systems are subject to a number of requirements, cybersecurity being one of 
them, as in Article 15, ‘Accuracy, robustness and cybersecurity’. The cybersecurity 
requirements outlined are legal and remain at a high level. Still, explicit reference is made to 
some technical aspects: 
High-risk AI systems shall be resilient as regards attempts by unauthorised third parties to alter 
their use or performance by exploiting the system vulnerabilities. 
[…] 
The technical solutions to address AI specific vulnerabilities shall include, where appropriate, 
measures to prevent and control for attacks trying to manipulate the training dataset 
(‘data poisoning’), inputs designed to cause the model to make a mistake (‘adversarial 
examples’), or model flaws. 
The draft AI Act also lays down, in Article 13, ‘Transparency and provision of information to 
users’, that high-risk AI systems are to be accompanied by instructions for use, specifying, 
among other things, the ‘the level of accuracy, robustness and cybersecurity referred to in 
Article 15 against which the high-risk AI system has been tested and validated and which can 
be expected, and any known and foreseeable circumstances that may have an impact on 
that expected level of accuracy, robustness and cybersecurity’. 
In addition, the draft AI Act refers to cybersecurity in its recitals. In particular, recital 51 mentions 
that, ‘To ensure a level of cybersecurity appropriate to the risks, suitable measures should 
therefore be taken by the providers of high-risk AI systems, also taking into account as 
appropriate the underlying ICT infrastructure’. 
Finally, the draft AI Act tackles cybersecurity through a number of other requirements, as 
exemplified in Table 2. The annexes (A.3 and A.4) contain an overview of activities of European 
standardisation organisations (ESOs) with respect to the requirements of the AI Act. Building on 
those, as well as on the previous sections, the following considerations have been outlined 
concerning the implementation of the draft AI Act from a cybersecurity perspective. 
• Given the applicability of AI in a wide range of domains, the identification of 
cybersecurity risks and the determination of appropriate security requirements should 
rely on a system-specific analysis and, where needed, on sectorial standards. Sectorial 
standards should build coherently and efficiently on horizontal ones. In turn, the assessment 
of compliance to security requirements can be based on AI-specific horizontal standards17 and 
on vertical/sector-specific standards as well. 
• It is important to develop the guidance necessary to back up existing technical and 
organisational standards that can support the cybersecurity of AI systems, while 
monitoring R&D advancements. Some aspects of cybersecurity can be addressed now by 
developing specific guidance, while others are still under R&D. For the purposes of the AI Act, 
the technological gaps described and ongoing R&D processes affect some aspects of the 
cybersecurity requirements outlined in Article 15 (adversarial examples and data poisoning) 
and therefore might constitute standardisation gaps with respect to the draft AI Act, depending 
on how conformity assessment will be organised. 
 
17 For example, ISO/IEC JTC 1/SC 42 is working on an AI risk management standard (ISO 23894, Information technology– 
Artificial intelligence – Guidance on risk management) to be complemented by a specific JTC 21 standard on ‘AI risk 
catalogue and AI risk management’. 

CYBERSECURITY OF AI AND STANDARDISATION 
 
23 
 
• As explained in Section 3.1, SDOs are actively working on the standardisation of 
trustworthiness characteristics; however, it is unclear whether those standards will be adopted 
in time for the adoption of the draft AI Act. Therefore, it is recommended to monitor related 
developments closely. 
 
The draft AI Act also depicts a governance system upon which the conformity assessment of 
AI systems relies. Besides the specific recommendations on conformity assessment outlined 
above, the following are noted. 
• Ensure that the actors performing conformity assessment on AI systems have 
standardised tools and competences, including on cybersecurity. In certain cases, 
conformity assessment may be performed by notified bodies. AI trustworthiness will therefore 
rely partly on the competences of those bodies. If those bodies do not have the proper 
competences, they could make bad assessments and even bias the market. To date there are 
no standards that adequately cover cybersecurity and describing the competences of 
organisations for auditing, certification and testing of AI systems (and AI management 
systems) and their evaluators. This is crucial, as it is most likely that some AI algorithms will 
attack AI systems while other AI algorithms will protect them. The new AI threats (threats 
using AI) will probably be more and more efficient at exploiting existing vulnerabilities, while AI 
algorithms (cybersecurity using AI) could, for example, monitor the behaviour of an AI system 
to protect it. To sum up, there are standardisation gaps on competences for validation, testing, 
auditing, certification’ of AI systems and on ‘competences for auditing and certification of AI 
management systems (Although a project on this last point is being prepared by ISO/IEC SC 
42, it is unclear to what extent it will be sufficient.) 
• Ensure regulatory coherence between the draft AI Act and legislation on cybersecurity. 
In particular, Article 42 of the draft AI Act sets out a presumption of conformity with 
cybersecurity requirements for high-risk AI systems that have been certified or for which a 
statement of conformity has been issued under a cybersecurity scheme pursuant to 
Regulation (EU) 2019/881 (the Cybersecurity Act)18. While no official request for a EU 
cybersecurity certification scheme for AI has been issued yet, it is important that, if developed, 
such a scheme would take due consideration of the draft AI Act – and vice versa. For 
example, the Cybersecurity Act sets out three levels of assurance (basic, substantial, high), 
which are commensurate with the level of the risk associated with the intended use of an ICT 
product/service/ process. These levels provide the rigour and depth of the evaluation of the 
ICT product/service/process and refer to technical specifications, standards and procedures, 
including those to mitigate or prevent incidents. It remains to be defined whether and how 
these assurance levels can apply in the context of the draft AI Act. 
• Another regulatory development that might affect the draft AI Act is the proposal COM(2022) 
454 for a regulation on horizontal cybersecurity requirements for products with digital 
elements (the Cyber Resilience Act)19. The proposal was presented in September 2022. 
 
 
 
18 Regulation (EU) 2019/881 on ENISA (the European Union Agency for Cybersecurity) and on information and 
communications technology cybersecurity certification and repealing Regulation (EU) No 526/2013 (Cybersecurity Act) 
(https://eur-lex.europa.eu/eli/reg/2019/881/oj). 
19 https://digital-strategy.ec.europa.eu/en/library/cyber-resilience-act 

`;