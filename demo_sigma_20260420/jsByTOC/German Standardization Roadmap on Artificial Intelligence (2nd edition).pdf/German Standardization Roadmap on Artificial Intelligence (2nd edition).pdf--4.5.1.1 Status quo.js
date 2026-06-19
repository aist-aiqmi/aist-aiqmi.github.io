var toc_content = `time of components are predicted on the basis of symbolic as 
well as by means of machine learning models and collected 
operating data. To ensure the availability of necessary data 
(across companies), data spaces are becoming increasingly 
important in Industrie 4.0 [283] for the application of AI; here, 
too, explicit data models and their automatic processing 
(“reasoning”) play a key role.
The importance of explicit (semantic) models in industrial au­
tomation results, among other things, from their long-stand­
ing use in the development of machines and plants, which 
are often mechanically and electrically planned in detail and 
then automated by software. A large number of models are 
already emerging in this process, and their use shows great 
potential through the application of AI. Therefore, a not 
insignificant part of current activities in Industrie 4.0 is the 
development of technical systems in which artificial intelli­
gence is used [297]. For this reason, the topic of “AI Systems 
Engineering” is considered and analyzed in detail for the first 
time in this edition of the Roadmap AI, and its relationship to 
standardization is described (see Chapter 4.5.1). 
In addition, further applications of artificial intelligence are 
considered in the context of Industrie 4.0. In addition to 
autonomous intralogistics (see also Chapter 4.6), industrial 
image processing and image recognition, as well as the im­
provement of human-machine interaction and integration are 
also taken into account, for example. This is done through the 
use of new interaction mechanisms such as speech and ges­
ture, new display capabilities such as augmented reality (AR), 
and the strengthening of collaboration through collaborative 
robotics, for example. Here, AI technologies find intensive 
application throughout.
 4.5.1   AI systems engineering
 4.5.1.1  
Status quo
AI systems engineering addresses the systematic develop­
ment and operation of AI-based solutions as part of ­systems 
that perform complex tasks [cf. Competence Centre AI 
Systems Engineering Karlsruhe CC-KING  88]. Thus, AI systems 
engineering complements basic research on artificial intel­
ligence (AI) and machine learning (ML) and bridges the gap 
to engineering sciences. The goal of industrial automation is 
88  https://www.ki-engineering.eu/en/what-is-ki-engineering.html
standards and specifications. Standards are also essential for 
defining solutions for compliance with regulatory framework 
conditions such as the Machinery Directive [216] or com­
pliance with protection targets such as safe operation (see 
Chapter 4.2.1). Consequently, this also applies to the use of 
AI and thus underpins the standardization activities called for 
by the German government’s AI Strategy [2]. For this reason, 
the topic of standardization for the manufacturing industry 
has already been examined in detail for many years in the 
DIN/DKE Standardization Roadmap Industrie 4.0, and ded­
icated needs have been derived; AI has also been explicitly 
addressed from the 4th edition of the Roadmap Industrie 4.0 
[291] onwards and the standardization of AI in industrial ap­
plications has been continuously monitored [292].
In this context, according to the first edition of the Roadmap 
AI [63] there is a fundamental need for structured analysis of 
use cases and the derivation of normative requirements in 
industrial automation, which has already been addressed by 
IEC/TC 65/WG 23 and ISO/IEC/JTC 1/SC42/WG 4, with cor­
responding technical reports being updated (as in the case 
of ISO/IEC TR 24030:2021 [293]) or recently published such 
as PD IEC TR 63283-2 [294]. Consequently, the topic of use 
cases is no longer listed in detail in this current edition of the 
Roadmap AI.
An important role in the digital transformation is attributed 
to the digital mapping of physical reality: the “digital twin”. To 
ensure interoperability within a digital ecosystem, Plattform 
Industrie 4.0 is working with all participating institutions to 
develop the specification of the “administration shell” as a 
digital image of each relevant object (asset) in networked pro­
duction [295], [296], [283]. An administration shell stores all 
the essential properties of an asset, such as physical proper­
ties (weight, size), process values, configuration parameters, 
states, and capabilities. In this context, the administration 
shell is not only an information store, but also a commu­
nication interface via which an asset is integrated into the 
networked, organized Industrie 4.0 production. This makes 
it possible to access and control all information in an asset. 
This provides the framework and an important foundation for 
the application of artificial intelligence for Industrie 4.0, as it 
allows data and metadata of relevant assets to be accessed 
in a uniform manner and to be made available in a structured 
data format. Current challenges related to data models and 
their semantics for the use of AI in industrial automation is 
considered in detail in Chapter 4.5.2. Well-known application 
examples for AI in Industrie 4.0 include predictive mainte­
nance, where the service life and necessary maintenance 
German Standardization Roadmap on Artificial Intelligence – 169
CHAPTER 4 – Industrial automation

There is a visionary notion that AI systems engineering can 
deliver a method toolbox with clear statements about which 
capabilities, both functional and non-functional/­qualitative, 
are achievable with which methods and under which 
­conditions. For this purpose, it is necessary to be able to de­
scribe, evaluate and thus compare AI/ML methods according 
to uniform (meta-)models. This also includes the following 
tasks:
→  Development of a classification scheme for AI/ML 
methods: supervised vs. unsupervised ML methods vs. 
­reinforcement learning methods; pre-trained ML methods 
vs. self-learning systems (reinforcement learning, Kalman 
filter etc.)
→  Description and validation of quality criteria in AI-based 
systems
→  Development of a domain-oriented explainability of 
­AI-based decisions/decision proposals
→  Elaboration of the framework and meta-descriptions in 
structured and systematic data pre-processing, for struc­
tured, semi-structured and unstructured data, and for 
both static and dynamic data (including time series).
For most of these topics and tasks, rudimentary and singular 
approaches to solutions exist from science and industrial 
practice. AI systems engineering aims to bring these ap­
proaches and solutions together in a systematic and interdis­
ciplinary manner and to establish cross-disciplinary stand­
ards that are accepted in practice for this purpose.
Use cases
The use cases described below are intended to describe 
and illustrate the interdisciplinary nature of AI systems 
­engineering.
→  Reliable energy supply for industrial production in the 
event of a fault 
For industrial production, it is essential to be able to 
rely on a reliable energy supply. Reliable energy supply 
means, in particular, avoiding cascading effects in the 
event of possible failure of distributed energy resourc­
es (DER) for energy transmission and distribution. The 
failure or breakdown of individual components can be 
withstood due to existing DER resilience and redundancy, 
while a cascading effect of failure of coupled DER com­
ponents can result in a high risk of the blackout of entire 
network parts. 
A cascade of failure of individual DER components, even 
under normal circumstances, can lead to a chain of 
further failures in power transmission or distribution. To 
to make AI and ML methods usable according to the typical 
requirements and procedures of engineers, in safety-critical 
applications as well.
A major goal is the acceptability of AI methods, especially 
their use in subsystems of critical applications and complex 
systems. This requires a high degree of reliability, trustwor­
thiness, safety/security and controllability. For this, there is 
a lack of accepted procedures and development methods in 
the industry. One first approach is PAISE(R)  89 – Process Model 
for AI Systems Engineering. Not all applications require the 
same level of these non-functional requirements. Therefore, 
a process model must be tailorable for a given situation. In 
addition, the question arises of how quality criteria can be 
described and validated in AI-based systems.
Since in practice AI methods have to be introduced into 
already existing systems (legacy systems), a process model 
should also support migration approaches and agile exten­
sions of existing systems. In addition, AI systems engineering 
must consider the complete life cycle of AI-based systems, 
since deviations from the system context at the time of 
development can arise during operation, which must be sys­
tematically addressed. For example, the sensor data used by 
ML methods in operation may deviate from the training data 
used in the development environment in their statistical dis­
tribution to such an extent that the validity of the ML method 
is impaired (distributional shift).
AI systems engineering requires the coordinated ­interaction 
of representatives from different disciplines and back­
grounds: engineers, AI experts and computer scientists. While 
the expertise and thus the technical requirements are typi­
cally covered by engineers (mechanical engineering, chem­
istry, process engineering, electrical engineering, ...), the 
knowledge of AI methods is mostly reserved for specialists 
(AI experts) who have dedicated mathematical and statistical 
methodological skills. Ultimately, an AI-based system is an 
IT system consisting of hardware and software components/
subsystems that is to be developed and operated according 
to established system and software engineering methods. 
The necessary competencies are embodied in particular by IT 
experts with proven IT skills.
89  https://www.ki-engineering.eu/content/dam/iosb/ki-engineering/
downloads/PAISE(R)_Whitepaper_english.pdf
170 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 4 – KEY TOPICS

building block for increasing the value of a product. The 
complete life cycle of a product can be mapped and 
optimized by means of an AAS. The closer the modelling 
of a product corresponds to the „real“ object, the more 
accurately it can represent the „real“ object virtually and 
the closer one is to the idealized concept of a fully com­
prehensive digital twin. In conjunction with AI, process 
flows can thus be optimized virtually, for example, with­
out having to intervene in real processes. For example, 
implementation in the physical world can only take place 
after a successful simulation in the virtual world using the 
digital twin.
A digital twin is understood here as a logical concept that 
fully maps the state and behaviour of a real asset in the 
virtual world. In practice, this is not economically feasible 
and, according to the use cases, not necessary. However, 
there is a vision that in a digital twin system, the data 
required for the respective use case can be procured via 
defined interfaces using a suitable service infrastructure 
of a data space, cf. the Reference System for Digital Twin 
Systems (DTS-RM).
Below are two examples of the use of AI in conjunction 
with the administration shell or digital twin.
Example 1: Use of AI in the digital twin for “predictive 
maintenance”
The massive expansion of the use of sensors (e.g. for tem­
peratures, noises or vibrations) within a plant means that 
sources of error can be detected as they arise, thus mini­
mizing downtimes. For detection, the digital twin – which 
reflects the target state – provides an optimal reference 
for the AI-based detection algorithm (anomaly detection).
Example 2: AI-based optimization of 5G campus networks 
based on a digital twin
The increasing demand for highly flexible production 
systems (e.g. batch size one) poses new challenges for 
planning and set-up. Moving parts such as automated 
guided vehicles (AGVs) must be fully integrated into the 
plant. The 5G campus networks offer a suitable solution.
The use of a digital twin for a 5G campus network offers 
great potential for optimizing the entire system, both 
in planning and in ongoing operations. Appropriate AI 
methods are used for the optimization processes. By 
combining sensor technology and corresponding a-priori 
information, shadowing effects of 5G network coverage 
in a production hall caused by movement, for ­example, 
can be predicted and the path of the AGV adjusted 
­accordingly. 
 
Relationship to AI systems engineering: In order to relia­
bly apply AI methods based on data from a digital twin, 
avoid the cascading effect, the following three factors 
must be kept under control by utilities [298], [299]: 
●
●Attention to DER components because failures mostly 
happen in subcomponents.
●
●The power management system (PMS) must be able 
to remain fully in operation mode even under stress 
conditions.
●
●A possible cascading is an effect of the behaviour of 
very large systems („very large-scaled systems“ VLS, 
which are also called „systems-of-systems“).
 
It follows that the PMS must follow a new adapted 
“security policy”. To enforce such a policy, a measure is 
needed to classify technical stress, e.g. that caused by 
a thunderstorm. This categorization could be done, if nec­
essary, by a suitable ML-based categorization procedure 
oriented, for example, to the severity of a thunderstorm. 
Furthermore, regulatory measures should be provided to 
increase the sensitivity of the PMS with respect to compo­
nent failures with high risk for cascading. A practicable 
set of rules is based, among other things, on informa­
tion and knowledge of how the failure of individual DER 
components influences the behaviour of the entire power 
supply network (failure propagation), e.g., in that black­
outs of large supply areas or large industrial consumers 
can occur and thus cause great damage to the energy 
supply or production. 
A blackout interrupts the power supply because the 
immediate compensation of the failure of a transmission 
line by other lines cannot take place due to indirect load 
overload or possible overheating, or the lines for com­
pensation also fail. 
A formalized scheme for the PMS requires computerized 
knowledge of high voltage transmission lines and trans­
formers represented by nodes (graph vertices). Empirical 
values about transmission line failures, or “distribution 
factors”, characterize the possible consequences of a 
transmission line failure on other lines, which are plotted 
as graph edges on a graph. 
Relationship to AI systems engineering: If AI methods are 
used in a subsystem of a PMS, e.g. ML methods for the op­
timization of energy networks in normal operation, early 
detection of anomalies in the energy network for the 
prediction of energy supply failures, as well as possible 
solution proposals for problem elimination or mitigation, 
statements on the reliability of such statements must be 
able to be made and justified on the technical level.
→  Interaction of AI methods with the Industrie 4.0 
­concept of the administration shell
The Asset Administration Shell (AAS) is an essential 
German Standardization Roadmap on Artificial Intelligence – 171
CHAPTER 4 – Industrial automation

→  Systematic approach to the use of AI methods in sub­
systems of complex systems (AI systems engineering 
approach model)
●
●In all phases of the life cycle of a system (design → 
realization → operation and maintenance including 
enhancements/modifications)
→  Modelling of AI-based systems (technical and application 
aspects), e.g. Unified Modelling Language (UML) profile, 
special stereotypes for AI aspects
 4.5.2   Data modelling and semantics
 4.5.2.1  
Status quo
A typical approach to AI data modelling today is based on the 
exploration of historical data. In this regard, initial methods 
such as the Cross Industry Standard Process for Data Mining, 
as proposed in AI systems engineering, have been widely 
established to perform the processing in an industrial context 
and achieve model building with the corresponding optimi­
zation. After implementation and the necessary testing of an 
AI system, the transition to operational use takes place, and 
downstream monitoring ensures that the data and data mod­
el, as well as the routines used are operated in the quality 
then required. Unresolved questions are, for example, how 
quality can be achieved with historical data that were created 
under different boundary conditions (Chapter 4.5.4, Need for 
action 05-09). By methodically extending systems engineering 
to include aspects of AI, for example, through the proposed 
AI systems engineering, industry can profitably use this new 
technology. Especially in modelling, the approach of putting 
elements and quantities into a context and explaining them 
in diagrams and figures has become established in indus­
try. For example, well-known semantic data models are the 
entity-relationship model or the Unified Modelling Language 
used in object-oriented modelling. Abstraction for model 
building is necessary to represent the real world in the digital 
space (see Figure 37).
Conversely, the digital space reacts to the physical world, for 
example via “robot process automation” mechanisms. Data 
modelling involves considerable manual effort and is subject 
to a certain degree of arbitrariness. In addition, the challenge 
in modelling is that the system boundaries of the models 
are dynamic, and there is a great need for coordination in 
the creation of the models. This is ultimately reflected in the 
range of applications from highly specialized algorithms to 
general solutions. In doing so, modelling is fundamentally al­
well-defined provenance and quality data of the digital 
twin is required. Since the data mostly originates from 
different sources, a standardized provision of the data 
and its processing is indispensable.
Standardization need
AI systems engineering is on its way to developing inde­
pendently as a sub-discipline of systems engineering. This 
includes independent processes and methods that are 
scientifically based and generally accepted in practice, so that 
requirements for the necessary quality and the non-func­
tional properties of a system can also be derived from them. 
These will be incorporated into specifications and also used 
in regulations. One example is the emerging AI Regulation of 
the European Union (EU) Commission, which will derive and 
make binding rules for the use of AI procedures based on the 
criticality of a system.
Generally accepted, coordinated and preferably standardized 
methods, models and approaches are required to implement 
these requirements and regulations efficiently and in a legally 
compliant manner. This is necessary because AI systems 
engineering can only succeed in an interplay of actors from 
engineering disciplines (mechanical engineering, electrical 
engineering, chemistry, process engineering, ...), computer 
science and data sciences [300]. The prevailing standards 
and specifications in these existing disciplines cannot be 
adopted unchanged, but must be conceptually merged. This 
includes a uniform definition of terms and the description 
of non-functional system properties that are also achievable 
and, if necessary, certifiable through the use of AI processes 
in subsystems.
 4.5.1.2  
Requirements and challenges
The following topics for standardization needs are derived 
from the described challenges of AI systems engineering:
→  Metadata descriptions of input/output datasets of ML 
methods
→  Metadescription of AI methods
→  Taxonomy, textual and, if necessary, formal description of 
quality criteria of AI-based systems, including reliability, 
dependability, plannability, controllability...
→  Metrics on explainability
●
●Goal: Description of the trade-off between the ex­
plainability of the applied machine learning methods 
(thought model of the user) and accuracy or quality
●
●Use of semantic models in explainability
172 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 4 – KEY TOPICS

`;