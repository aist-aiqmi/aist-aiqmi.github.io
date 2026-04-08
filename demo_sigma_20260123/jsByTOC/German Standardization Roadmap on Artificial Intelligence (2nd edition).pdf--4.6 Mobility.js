var toc_content = ` 187
4.6 
Mobility

for the other TAI aspects depend on the application: 
Depending on the application context and valid regula­
tions, certain minimum qualities must be realized here as 
well; however, the concrete characteristics of individual 
properties may well differ between different applications 
or the same applications of different manufacturers – also 
deliberately for product differentiation – as long as the 
high minimum qualities are met for each property. For 
safety, however, this must always be implemented „fully“, 
i.e. at the best level of implementation according to the 
respective state of the art, which demonstrably reduces 
the residual risk of damage occurring to below a mini­
mum, socially accepted residual risk. Since the different 
TAI aspects are not independent of each other, there are 
contextual dependencies. In certain applications, for 
example, IT security can be an indispensable prerequisite 
for safety [311], [312] and must therefore meet equally 
strict requirements.
 
With this in mind, this chapter considers trustworthy AI 
from the following two perspectives: 
a)  First, trustworthiness for AI systems in general, name­
ly all TAI aspects are considered equally (the safety 
aspect is only highlighted insofar as it is necessary for 
explaining the overall context and classification in re­
lation to the other TAI aspects). For this purpose, the 
three domains of highly automated driving, mobility 
services or chains, and infrastructure are considered 
or compared with each other in terms of specific func­
tionalities as use cases. 
b)  In addition, against the background of the special role 
of safety and the risks to life and limb of various road 
users inherent in the operation of CCAMs as described 
above, the aspect of safety is subjected to more in-
depth consideration, particularly with regard to the 
verifiability of this property, as is necessary, for exam­
ple, for type approval or certification of vehicles in the 
various application domains. Here, a differentiation is 
made between the modalities automotive, aviation, 
maritime and rail. 
For social or ethical aspects for which specifications cannot 
be made purely from a technical point of view, the technical 
prerequisites necessary for controlling and enforcing these 
specifications are dealt with as examples, but the social impli­
cations are not addressed. 
The mobility sector plays an outstanding role in terms of 
both its economic and overall social significance. Mobility is 
an essential factor in many important life decisions, enables 
participation in social life, and the transportation of people 
and goods is a basic requirement for a functioning economy. 
In addition, automotive engineering is still the industry with 
the highest sales and is an important employer in Germany.
On the one hand, the use of AI as a key technology offers 
important opportunities for the mobility sector, among other 
things by enabling complex automated driving functions and 
the optimization of traffic flows or complex mobility chains; 
on the other hand, it represents an enormous challenge, 
among other things because a safe and trustworthy use of AI 
requires far-reaching efforts in research, development, stand­
ardization and regulation. The transformation of the mobility 
sector through the use of AI is relatively advanced; among 
other things, many automated driving functions have already 
found their way into series-produced vehicles, and consider­
able sums are being invested in corresponding research and 
development (R&D).
In view of the high significance of mobility and AI in mobili­
ty, the focus in the following chapter is on comprehensively 
highlighting the current status, requirements and challenges, 
as well as the standardization needs in this sector. In con­
trast to the first edition of this Standardization Roadmap, 
which focused on the legal framework and the transport of 
goods (logistics), this second edition focuses on the following 
aspects:
1. 
Use of trustworthy artificial intelligence (TAI) in the mo­
bility application domain and here, in particular, in the 
context of „cooperative, connected and automated mobil­
ity“ (CCAM). CCAM covers vehicles of different modalities 
(road, rail, water and air) with automated functions and 
their networking with intelligent infrastructures, such as 
in intermodal mobility.
2. 
Relevance of individual aspects of trustworthiness (cf. in 
more detail the chapter „Embedding and life cycles of AI 
systems“ below) in the context of system embedding on 
the one hand and the different life phases of the CCAM 
system on the other (cf. in more detail the chapter „Em­
bedding and life cycles of AI systems“ below) as well as 
the related status of operationalization or operationaliza­
bility. Aspects of TAI considered include safety, IT security, 
robustness, performance, explainability, traceability, and 
human-machine interaction. In this context, safety in all 
mobility applications is of particular importance under 
the TAI aspects: It is „non-negotiable.” The requirements 
188 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 4 – KEY TOPICS

accounted for during training. This includes robustness 
to stochastic influences such as noise and to interfering 
signals such as interference. 
→  Explainability: Features of an AI system that enable 
humans to understand the AI system‘s decision-making 
process, either through inherently interpretable models 
or through post-hoc interpretation.
→  Interpretability: Properties of an AI system that make 
it possible for its performance to be monitored in the 
overall system. For this purpose, it is necessary to provide 
information for the plausibility of the results, which does 
not necessarily represent an „explanation“ in the sense of 
explainability.
→  Transparency, accountability and documentation (trace­
ability): Traceability of the AI system throughout its life 
cycle, e.g., design decisions, constraints, data, models, 
training algorithms, training processes, evaluations, and 
operation, among others, through technical documenta­
tion and logging.
→  Risk management: Identification, analysis, and prioritiza­
tion of risks and coordinated use of resources to minimize 
risk probabilities or risk impacts (acceptable marginal 
risk).
→  Human-machine interaction / “human oversight”: Im­
plementing human-in-the-loop/on-the-loop solutions – 
these can be seen as measures to increase safety or 
increase user engagement.
→  Acceptance by individual users and society.
→  Bias, impartiality: Measures to prevent unbalanced op­
eration of AI systems, e.g., through training datasets that 
do not meet the IID criteria („independent and identi­
cally distributed“) and lead to discrimination, e.g., with 
respect to gender [317].
→  Data protection and privacy: Appropriate handling of 
sensitive (private and confidential) data.
→  Redundancy: What are the requirements for redundant 
data collection and evaluation in order to trust the 
overall system (also depending on the criticality of the 
functions), especially if black-box AI approaches (lack 
of interpretability or explainability) must necessarily be 
used because conventional algorithms cannot map the 
functions?
On closer examination, it becomes clear that the above-­
mentioned views cannot be sharply demarcated from one 
another and that there are numerous interdependencies. 
For example, there are overlaps between IT security and 
functional safety, since a successful security attack ­changes 
the functionality of the system and thus jeopardizes the 
Trustworthy-AI-relevant aspects of and perspectives on 
AI systems
AI technology, including machine learning (ML) such as deep 
learning (DL) for deep neural networks (DNN), has become 
an indispensable key technology for many application areas, 
assisting humans in decision-making processes or even per­
forming decision-making processes without human interven­
tion. Trustworthy AI, i.e., AI that is trusted by people, organi­
zations, and/or societies, is not only generally desirable, but 
is a prerequisite for the use of AI in safety-critical applications 
[313], [314], [315], [316], [317]. Whether an AI system possess­
es this “trustworthiness” property depends on the specific AI 
system, the specific application, and other framework con­
ditions such as the legal and technical requirements for the 
development and use of this system [311], [312], [318], [319].
There are a variety of different perspectives on AI systems 
and TAI-relevant aspects, from which a large number of 
decisive criteria can be derived [312], [320]. These aspects 
and perspectives can have a (primarily) technical or social 
background. While the technical perspectives lead to purely 
technical criteria, the societal perspectives require technical 
foundations (in particular suitable metrics such as for the 
balance of datasets), yet the concrete requirements for this 
cannot be determined exclusively from the technical perspec­
tive, but require an ethical evaluation or socio-political classi­
fication. With regard to such criteria with (primarily) societal 
criteria – namely the acceptance of an AI system by individual 
users or society, fairness or bias, and data protection and 
privacy – this chapter focuses on the technical perspective, 
namely on the technical basis for verifying and enforcing 
these criteria (e.g.,: How can we support the testing of ethical 
criteria? Which metrics are particularly suitable for this?
Aspects of TAI that are particularly relevant in this context 
include:
→  Performance: Performance of the AI system in terms of 
relevant performance metrics.
→  IT security: passive and active robustness of the AI sys­
tem against attacks and in particular against AI-specific 
attacks (adversarial attacks, „poisoning“ attacks and „pri­
vacy“ attacks) in relation to the three security objectives 
integrity, confidentiality and availability [83], [320].
→  Functional safety: A system is „safe“ if its operation does 
not pose any unacceptable risks to the environment (indi­
viduals, environment, organizations and goods).
→  Robustness and generalizability: Passive and active 
robustness to natural variations in inputs (situations) in­
cluding those that could have been avoided if adequately 
German Standardization Roadmap on Artificial Intelligence – 189
CHAPTER 4 – Mobility

considered when developing, testing, and operating such a 
system.
In classical IT and symbolic AI systems, the structure and pa­
rameters can, at least in principle, be defined or set directly 
by the developer, and their functionality can be reproduced 
in operational use. However, for IT and symbolic AI systems 
above a certain critical size, the large number of parameters 
may make it difficult or impossible to directly design and 
tune the parameters and interpret how they work. In con­
nectionist AI systems such as neural networks and support 
vector machines, this problem is much more pronounced 
due to the fact that their processing is not (a priori) intuitive 
for humans, and thus applies to a large part of the systems 
in use. Such systems must be developed in a data-driven, 
iterative training cycle using machine learning techniques, in 
which the developers define the framework in each case, but 
no longer directly define the parameters of the operational 
system. This results in a complex life cycle, which can be 
divided into the following phases, as has become apparent 
in practice:
→  Planning phase: Here, depending on the desired char­
acteristics of the AI system to be developed, suitable AI 
models, learning methods, required data, metrics, and 
quality assurance measures, including any dependencies, 
are identified, among other things, and a development 
plan is defined.
→  Data collection and QA Phase: Data required for train­
ing is obtained in sufficient quality and quantity. Here, 
data can initially be self-obtained (data acquisition in 
the physical world), obtained from external sources or 
generated synthetically. In addition to combining these 
data sources, data can be enriched in a variety of ways, 
for example, to increase the number of data or to incor­
porate desired properties into the dataset. Depending on 
the specific requirements of the dataset, various quality 
assurance measures follow.
→  Training phase: The developer iteratively starts one or 
more training processes with predefined models, data 
and hyperparameters. Depending on defined termination 
criteria, which are checked using appropriate metrics 
(e.g., performance criteria), the training processes are 
stopped and restarted with adjusted parameters until 
at least one trained system meets the predefined re­
quirements (regarding the defined metrics and quality 
assurance measures).
→  Evaluation phase: Evaluation of the system goes beyond 
the automated calculation of metrics in the training 
process and is performed before, during, and after the 
functional safety of the system, and the non-fulfilment of a 
functional safety property can open up attack surfaces for 
security attacks. Lack of robustness due to built-in semantic 
plausibility, for example, makes a number of attack patterns 
more likely or even possible in the first place. These include 
“adversarial attacks” by pixel-level manipulation, which can 
be intercepted in TAI (cf. [321]). The two properties are thus 
mutual prerequisites for the overall consideration of the sys­
tem. Other interdependencies between TAI aspects obviously 
exist as well; central to this Roadmap is the finding that a 
large number of aspects are highly relevant to TAI systems 
and must be considered accordingly. The relevance and the 
necessary prioritization of the respective aspects must be 
evaluated separately for each application or application class.
Integration and life cycles of AI systems
Systems referred to as AI systems (understood here in terms 
of, among others, the draft ISO/IEC 22989:2022 [16]) often 
consist of multiple interacting software and hardware mod­
ules and are embedded in an overall system of AI and non-AI 
components and in relation to a context [318]. For example, 
the software system consists of a variable number of classical 
IT modules, symbolic AI modules (e.g., logical reasoning or 
decision trees), and connectionist AI modules (e.g., neural 
networks) that communicate with each other via suitable 
interfaces. The software runs on computing units, each 
of which can be connected locally (edge) or via a network 
(cloud). The software interacts with the environment via 
hardware modules. For example, an automated vehicle has a 
large number of sensors and actuators connected via me­
chanical, electrical and IT systems in the vehicle “body”. Sen­
sors can be divided into proprioceptive (internal sensors such 
as wheel rotation sensors), exteroceptive (external sensors 
such as camera sensors), and virtual sensors (such as inputs 
from communication channels or from the fusion of different 
sensors). Actuators range from the powertrain to the brak­
ing system and steering system to the lighting system and 
user-relevant information systems (display, loudspeaker). 
The environment of an AI system here can be various passive 
and active traffic participants, occupants of the embedding 
vehicle, or smart city infrastructures, among others. There is 
usually an organization behind the development of an AI sys­
tem, and one or more organizations also have responsibilities 
during the operation of the AI system, due to the provision or 
processing of data streams. Therefore, these organizations 
must also be included in the overall consideration. Overall, 
the application-specific embedding of an AI system results 
in application-specific requirements and risks that should be 
190 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 4 – KEY TOPICS

system goes live. For the evaluation e.g. complex simula­
tions or pentests  92 can be used
→  Deployment and scaling phase: Here, the AI systems are 
adapted for practical use and commissioning, which may 
include further optimizations, e.g. with regard to im­
proved scaling or efficiency.
→  Operational phase, including maintenance: In principle, it 
would be conceivable to carry out further training phases 
in the operational phase as well (so-called self-learning or 
online learning systems). However, the resulting changes 
in system behaviour are completely beyond the scope of 
a safety analysis and the associated safety verifications 
compared to the current state of the art, so that certifica­
tion or type approval of such systems is currently not pos­
sible. This type of AI system is therefore not considered in 
this chapter.
→  Retirement: If the AI model and/or training data are to 
be protected against privacy attacks on the model and/
or data even after regular operation (e.g., for privacy or IP 
reasons), an orderly decommissioning that permanently 
prevents public access to the model and data is required. 
Otherwise, this life cycle phase has no AI-specific rele­
vance.
Due to changing requirements, due to weak points of the 
system becoming known during operation, or due to the goal 
of continually improving a system, the above-mentioned 
phases are run through cyclically (continually in the sense 
of a continual development process). There is a continuous 
transition ranging from infrequent, carefully planned and 
executed updates with, if necessary, significant changes to 
the previous version, through to very short update cycles, 
and to self-learning or online-learning systems. While discrete 
updates are now indispensable for many systems and are 
carried out regularly, self-learning systems (i.e., systems that 
adapt in the field based on incoming observations) have not 
yet been used in safety-critical applications such as mobil­
ity, despite a great deal of media attention (see also above 
regarding certifiability).
92  Penetration tests, i.e. controlled cyber attacks with the aim of 
­identifying vulnerabilities.
 4.6.1   Status quo
 4.6.1.1  
Fundamental, qualitatively novel 
properties of AI technology
On the one hand, the use of AI technology opens up new op­
portunities and enables applications that cannot be realized 
with classic technologies, or are realizable only to a very limit­
ed extent. On the other hand, the complexity of AI systems 
and their life cycles leads to qualitatively new problems and 
risks [320], [83]. As described above, the development of AI 
systems usually requires a data-driven approach, and the 
developer has no direct control over the learned parameters 
of the AI system and the input/output correlations implied 
by them. As a result, operational AI systems have black-box 
properties, and their modes of operation (and thus also 
possible errors) are not directly apparent to the developers 
and users. The properties of the functions implicitly encoded 
using machine learning and data depend significantly on the 
underlying training dataset. However, sufficient quality as­
surance of training data is a non-trivial task, especially when 
the data come from external sources. If pre-trained models 
are used, as is often practiced, there may be hard-to-detect 
vulnerabilities in the AI system that often survive further 
post-training sessions unscathed. Many AI systems also have 
a huge input and parameter space. The camera input of a 
4K camera with a high number of colour channels can be 
mentioned here as an example. As a result of this complex­
ity, formal verification methods are not available for many 
practically deployed AI systems, and alternative empirical 
validation methods can only cover a fraction of the parame­
ter space for practical reasons. Thus, an AI system does not 
necessarily fulfil the programmer’s intent, and there is no 
guarantee of what has been learned by the system, nor any 
certainty regarding the trustworthiness aspects listed at the 
beginning (cf. Chapter 4.6) – such as what performance the 
system will achieve in practice. Conversely, there is often no 
or only a limited explanation of how an AI system works for 
humans. Regarding the various trustworthiness aspects of AI 
systems, the technical understanding is currently incomplete, 
including functionality, integrity, reliability, safety, and gener­
alizability, and further extensive R&D efforts are needed.
German Standardization Roadmap on Artificial Intelligence – 191
CHAPTER 4 – Mobility

`;