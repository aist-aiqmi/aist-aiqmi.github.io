var toc_content = `to optimally exploit the current potential of AI in the safe­
ty-critical context as well, and to avoid unacceptable risks. 
Today, methods are not sufficient to provide the required 
evidence. The viability of safety concepts for AI must be able 
to be proven argumentatively based on facts (assurance case 
approach). In particular, the use of certain AI software tech­
nologies in directly safety-critical applications still requires 
some research and development work. Today, methods are 
not sufficient to provide the required evidence.
Need 02-04: Safety of autonomous systems
In the case of explicitly programmed behaviour for dealing 
with hazardous situations, the ethical (legal) question arises 
as to which rules are permissible and which moral values 
apply. For example, to what extent is it acceptable to detect 
collision risks, algorithmically evaluate them, and make 
trade-off decisions? Ethical issues are a cultural and social 
question and cannot be unified within the framework of 
standardization. Dealing with dilemma situations is less rele­
vant in practice. Relevant are algorithmic decisions regarding 
the handling of risks and uncertainties (e.g., perceptions).
 4.2.2   Security
 4.2.2.1  
Status quo
In principle, all the usual security protection targets such as 
confidentiality, availability, integrity or even resilience can 
be compromised in AI systems, as wellas in other IT systems. 
One speaks then of risks of the violation of a protection target 
for an object of protection. With DIN EN ISO/IEC 27701:2021 
[128] and other subordinate standards, a standardized infor­
mation security management system is already available for 
information security, including various measures and a risk 
assessment, as well as a testing and certification option. Sim­
ilar standards exist in other areas or industries, for example 
TISAX for the automotive industry.
One example of additional risks associated with artificial 
intelligence is the risk of unauthorized, undetected, and 
targeted manipulation of training data. In a so-called “data 
poisoning” attack, the training data is manipulated with the 
aim of influencing the entire AI system by introducing an 
influence and thus incorrect AI model because it was trained 
based on the manipulated training data. Standards, e.g., of 
the DIN EN ISO/IEC 27000 series [131], are a basis for informa­
tion security and need to be examined to see if they need to 
be supplemented to account also for systems with artificial 
on a safety rationale for AI software can take on broad signifi­
cance for other application areas as well.
It is recommended that the first steps towards safety AI 
software should initially be taken using simple use cases, in 
order to simplify the task and to be able to better evaluate the 
methods. Unfortunately, these simple tasks usually do not 
receive the necessary attention in R&D.
 4.2.1.3  
Standardization needs for safety 
Need 02-01: Suitable definitions and regulatory criteria as 
a basis
Refine the AI definition in regulations in terms of safety action 
needs
High-risk AI systems (as defined by the EU AI Act [4]) can also 
be systems that are not considered safety systems. However, 
similar requirements do apply. Is it the legislators’ wish to 
design all high-risk AI systems as safety systems (in the sense 
of fail-safe, functional safety) in the future? 
Any regulation whose core aspect to be regulated is not de­
fined cannot be applied.
Current regulation and standardization regarding safety takes 
software into account. From a safety perspective, the defi­
nition of an AI system should only address types of software 
that are not yet sufficiently addressed by current regulation 
and standardization.
Need 02-02: Evaluate research on safety concepts and 
standards 
R&D on the reliability of AI technologies is necessary. Meth­
ods and procedures are needed to use this technology with 
confidence. The current state is not sufficient to implement 
resilient risk-reducing measures with AI. The first steps 
towards safety AI software should initially be taken using 
simple use cases in order to simplify the task and to be able 
to better evaluate the methods. These simple tasks usually 
do not receive the necessary attention today. There is interest 
here on the part of research and industry to implement these 
use cases, but there is a lack of funding. 
Need 02-03: Promote research on safety assurance cases 
and evaluate standards
In addition to research on AI assurance measures and their 
collection, research on assurance cases for AI is essential 
German Standardization Roadmap on Artificial Intelligence – 109
CHAPTER 4 – Security/safety

(= for all components of the AI system). To stay with the exam­
ple, a necessary protection against manipulation of the AI sys­
tem includes protection against manipulation of the trained 
model and protection against manipulation of the training 
data, and this protection must take place throughout the life 
cycle: Beginning with the creation of the data and models, 
and continuing through their use and also during operation, 
AI systems´protection and its compliance must be accompa­
nied by the appropriate monitoring of the AI system.
Status of the recommendation for action on IT security 
from the first edition of the Standardization Roadmap 
Artificial Intelligence
The recommendations for action from the first edition of the 
Roadmap are included again in Table 5 in order to briefly 
outline where there are already considerations or work in 
standardization and where there is still a need for action.
intelligence. Vulnerabilities in the AI system that impact safe­
ty, security, and privacy can be much harder to identify and 
to remedy without transparency, traceability, and explaina­
bility. Without further information about the inner workings 
of the AI system, a vulnerability analysis is comparable to 
that of a software system using closed-box testing (ISO/IEC/
IEEE 29119-1:2022 [464]), often better known as black-box 
testing; the vulnerability analysis is then comparatively more 
difficult than in a glass box test, since here the tester is only 
given a specification or only access to external inputs and 
the responses of the AI system, but no internals such as the 
AI model used. There is already a lot of preparatory work in 
terms of IT security and software security. Nevertheless, the 
required bridging between existing IT security standards and 
AI remains to be done and is a very significant challenge. 
Just like IT security, AI security must also be regarded accord­
ingly in terms of time (= over the entire life cycle) and scope 
Table 5: Overview of recommendations for action of the 1st ed. of the Roadmap and their status quo
Need from 1st ed. 
of ­Roadmap
Description of current status 
In standardization 
work
1
Research/examination/
evaluation of existing 
standards, conformity and 
certification procedures 
and existing laws
A complete research and overview has not been created yet.
Standardization bodies tend not to produce overviews, but rather 
develop concrete criteria that are not yet available. A budget, e.g. 
from politics, is required for a study.
The standardization and regulatory landscape on AI is also still very 
much in flux.
An overview is given by the EU’s Observatory for ICT Standardi­
zation [115] with its Report of TWG AI: Landscape of AI Standards 
[116].
Yes, partially
2
Recommendations 
for actors and market 
­participants
These have not yet been taken on by a standards body.
No
3
Development of 
­supplements/adjustments 
in risk management
ISO/IEC 23894:2022 [25] on AI risk management developed by 
ISO/IEC SC 42 AI will soon be published. From a security/privacy 
perspective and with regard to safety issues, this standard would 
have to be reviewed again.
Yes
ISO SC 42/CEN 
JTC21
4
Combining criticality levels 
and IT security
There is a standardization proposal from Germany at CEN/
CENELEC for the classification of AI. It is planned to address risk 
and criticality from an AI perspective. The result is still open.
Yes
CEN JTC21
110 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 4 – KEY TOPICS

Need from 1st ed. 
of ­Roadmap
Description of current status 
In standardization 
work
5
Define IT security criteria 
for training methods
This point is being dealt with together with recommendation for 
action 7.
Yes, partially
6
Create explainable AI
ISO/SC 42 is working on a Technical Specification on this 
­topic: ISO/IEC TS 6254 [36] Information technology – Artificial 
­intelligence – Objectives and approaches for explainability of ML 
models and AI systems.
At DIN, a DIN SPEC 92001-3 [117] on the topic of explainability has 
currently been launched.
Need for research: Still open is the initiation of basic research, 
which is additionally required as methods are not yet fully and 
widely researched and applicable. 
Yes, partially
ISO SC 42;
DIN SPEC 92001-3 
[117]
7
Define controls for IT 
­security for AI
So far, there are studies by the European Union Agency for 
­Cybersecurity (ENISA) [118], [119], the German BSI [81] and the 
Fraunhofer-Gesellschaft together with the BSI [120].
The need has not yet been taken up by a German standards body 
and has therefore been included again in this 2nd edition of the 
Roadmap in the context of testing and certification. In addition, 
there is the standardization requirement in the draft AI Act on 
cybersecurity.
At ISO/IEC level, there is an initial activity in ISO/IEC JTC 1/SC 27 
to confront attacks such as data poisoning with measures, but 
the ISO/IEC 27090 project [121] is still in its very early stages (WD 
stage). Activities should be strengthened for this purpose, as lists of 
measures (controls) suitable for AI are relevant for certification.
Yes, partially
ISO Liaison
SC 27/SC42
8
AI security by design and AI 
security by default
Security by design and security by default is required by the 
­Cybersecurity Act. This criterion is part of a standards series for 
secure software development, e.g. ISO/IEC 27034 Information 
­technology – Security techniques – Application security [122], 
[123], [124], [125], [126], [127].
In a possible complementary security standard for AI, this point 
would have to be adopted, as well as testing and certification 
mechanisms
No
9
Verification of the origin 
and protection of data
For this requirement, the AI standard series ISO/IEC 5259 Artificial 
intelligence – Data quality for analytics and machine learning (ML) 
[39] is under development at ISO/IEC JTC 1/SC 42.
Yes
ISO SC 42
10
IT security of training data
All data situations of an AI require IT security measures. For 
­activities, see Recommendation for action 7 of the 1st ed. of the 
Roadmap.
Yes, partially, 
ISO SC 42
11
Define IT security criteria 
for learning systems
See Recommendation for action 7 of the 1st ed. of the Roadmap.
No
German Standardization Roadmap on Artificial Intelligence – 111
CHAPTER 4 – Security/safety

Need from 1st ed. 
of ­Roadmap
Description of current status 
In standardization 
work
12
Verifiable identity of AI 
algorithms
AI algorithms would have to be provided with a verifiable identity 
and their function and mode of operation would have to be record­
ed in documentation. If possible, results should not only be shown 
as the probability value of a result class as the basis for a decision, 
but also as a confidence interval. No standardization body is cur­
rently active on this recommendation.
No
13
IT security metrics for 
learning systems and 
­adversarial machine 
­learning (AML)
There is a need for research.
No
14
Impact of availability of 
resources
There is a need for research.
No
protection against a breach of security. The organizational 
and technical solutions should, as far as possible, prevent 
cyberattacks on specific AI subcomponents such as training 
data (cf. data poisoning attack) and ensure the security and 
functioning of the underlying information and communica­
tion infrastructure. The technical solutions should always be 
chosen according to the relevant circumstances and risks.
Status quo 
Testing and certification of privacy/data protection in the 
use of artificial intelligence (Level 5)
The protection of personal data in accordance with the 
General Data Protection Regulation (GDPR) also applies to 
artificial intelligence. Art. 4 no. 2 of the GDPR states: “ ‘Pro­
cessing’ means any operation or set of operations which is 
performed on personal data or on sets of personal data.” This 
includes the collection, recording, organization, structuring, 
storage, adaptation or alteration, retrieval, consultation, 
use, disclosure by transmission, dissemination or otherwise 
making available, alignment or combination, restriction, 
erasure or destruction of data. When these operations take 
place by means of automated procedures, they are referred 
to as “automated processing”. In addition, data security must 
be ensured in accordance with Art. 32, which includes a risk 
assessment and IT security measures.
This means that the GDPR must be taken into account in 
every risk assessment and associated measure. In Germany, 
the Data Protection Amendment and Implementation Act EU 
Regulation, draft AI Act and standardization requirements
At the European regulatory level, more attention has been 
paid to the topic of security in recent years resulting in special 
regulations on cybersecurity. The EU Network and Informa­
tion Security (NIS) Directive, which is currently being revised, 
has been implemented in Germany as the IT Security Act 2.0. 
In addition, the European Cybersecurity Act (CSA) describes 
further security requirements, including security/privacy by 
design and default, and gives ENISA more competencies and 
tasks. The EU Cyber Resilience Act is still in preparation, and 
will further increase the requirements (see Chapter 1.4).
For AI, the Artificial Intelligence Act (AI ACT) is in ­preparation 
(see Chapter 1.4). It contains instructions for action depending 
on a risk assessment for the use of AI, especially for high-­risk 
AI applications. Included among others is the requirement for 
cybersecurity, which is always related to other requirements 
such as risk and quality management, logging and monitor­
ing, transparency and information, human oversight, accuracy 
and robustness. In summary, a conformity assessment is 
expected, which should be underpinned by standards. Their 
development and provision should, if possible, be carried out 
by the European standardization organizations.
The associated draft of requirements for standardization 
includes a requirement for “Cybersecurity specifications for 
AI systems” in Chapter 2.8 [4]: The draft calls for ­European 
Standards that provide appropriate organizational and 
technical solutions to ensure that AI systems are resistant to 
changes in their use, behaviour, performance, and provide 
112 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 4 – KEY TOPICS

(DSAnpUG-EU) [129] was supplemented. Depending on the 
application and on the basis of the consent for processing, 
the methods of pseudonymization and/or anonymization in 
particular play an important role, which unfortunately are 
often not sufficient in the context of AI systems, since re-iden­
tifications of individuals may be possible in some cases, e.g., 
from the MRI (magnetic resonance imaging) scan of the head 
in the case of a rare disease that was treated in a specific hos­
pital during a specific period of time. Depending on the classi­
fication of the data (personal or not and anonymized or not), 
the privacy of the data and the underlying individuals must 
be protecteddifferently . The specific data protection require­
ments according to the GDPR as well as the requirements 
from DIN EN ISO/IEC 17065:2013 [17] for conformity must be 
taken into account. Furthermore, standardization provides a 
series of standards as the Privacy Framework with DIN EN ISO/
IEC 29100:2020 [133] and DIN EN ISO/IEC 29134:2020 [134] 
Impact Assessment and DIN EN ISO/IEC 29151:2022 [135] 
Guideline as well as DIN EN ISO/IEC 27701:2021 [128] (data 
protection along the lines of the GDPR).
An official test and certification according to the procedure 
in DIN EN ISO/IEC 17065:2013 [17] according to the GDPR has 
not yet been published, but is planned soon.
Testing and certification according to DIN EN ISO/
IEC 27701:2021 [128] (when using DIN EN ISO/IEC 27001:2017 
[480]) is possible, although this does not include testing and 
certification according to the GDPR, but supports it. 
Further information is available in the Bitkom guide “Machine 
Learning and the transparency requirements of the GDPR 
[136]. 
For examples of existing tests and certifications in the areas 
of safety, security and privacy, see Annex 13.3.
 4.2.2.2  
Requirements, challenges and 
standardization needs for security
First Challenge: Definition of protection targets on the 
level of processes and data within the AI component
As explained, IT security targets such as integrity always refer 
to an object for which this protection target is to be achieved. 
The object in the sense of a test can be processes, data or 
physical components, for example AI training data. For target­
ed description and testing of security, it is therefore necessary 
and desirable to further subdivide the AI component, i.e., the 
system component that provides artificial intelligence. This 
enables to look more specifically at corresponding protection 
targets and thus also at individual measures for increasing 
protection (controls) on the basis of small and delimited 
areas. Staying with a concrete example: The IT security pro­
tection target of integrity should apply to the training data 
to provide the attacker with fewer opportunities for a data 
poisoning attack.
The challenge is to perform the decomposition of the AI 
component itself into different data or different subprocesses 
in such a way that existing attacks can be described, as far 
as possible, as a violation of protection targets of individual 
subcomponents. In detail, this may be different for different 
AI methods, but decomposing an AI component as abstractly 
as possible helps to describe attacks and countermeasures 
for entire or even multiple classes of AI methods. This then 
also makes it possible to prescribe the use of these measures 
(controls) across AI methods for the successful certification 
of an AI system. At the same time, a breakdown of the AI 
component helps to better understand the complexity and 
identify problems that may arise in the interaction of the AI 
component with the overall system. Within the life cycle of an 
AI system, individual subcomponents have different effects; 
this should also be represented by a model. Ultimately, this 
decomposition is also necessary from an economic point 
of view, as it helps to sensibly limit the scope of the corre­
sponding measures and thus to use resources for a targeted 
and purposeful enforcement of security, safety and privacy 
protection targets.
For decomposition into AI subcomponents, ISO/IEC 22989:
2022 [16] already makes a good start. This decomposition, for 
which there are already further approaches in research (e.g. 
ISTQB syllabus for Certified Tester AI Testing [137]  79 (Fig. 1, 
page 30)), should also be pursued further in standardization 
and taken up and expanded for individual AI methods or 
method classes. The following is a proposal for discussions 
on an abstract component diagram that is generic enough 
across AI process boundaries to serve as the basis for more 
refined component diagrams. However, the extent to which 
this needs to be adapted for different AI methods should be 
investigated. For individual AI methods (Chapter 4.1.1.1), 
some AI subcomponents or process steps may be omitted 
from the generic component diagram. In Figure 25, the AI 
component is shown decomposed into different processes 
79  https://www.istqb.org/certifications/artificial-inteligence-tester
German Standardization Roadmap on Artificial Intelligence – 113
CHAPTER 4 – Security/safety

`;