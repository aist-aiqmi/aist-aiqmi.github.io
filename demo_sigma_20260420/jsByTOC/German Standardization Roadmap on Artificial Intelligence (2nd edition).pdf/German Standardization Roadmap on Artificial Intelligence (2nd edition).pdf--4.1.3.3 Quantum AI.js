var toc_content = `→  For manufacturers: a targeted clarification of which re­
quirements from which legislation are to be implemented 
for which applications or criticality levels in order to be 
able to develop legally compliant and trustworthy AI sys­
tems. Suitable standards/tools should be used to create 
an easily understandable overview that breaks down the 
relationships between the requirements, the associated 
laws, and the steps required for each use case.
→  For users: a quick and low-threshold insight into the 
different levels of criticality and their requirements at 
an understandable level in order to make the trustwor­
thiness of AI systems ascertainable in an appropriate 
manner.
 4.1.3.3  
Quantum AI
Need 01-14: Artificial intelligence (especially machine 
learning) and quantum computing in the context of IT 
security
The use of quantum computing has the potential to have 
a profound impact on the practice of artificial intelligence, 
particularly machine learning. Although the state of devel­
opment of current quantum hardware still imposes strong 
limitations on the current application of quantum AI to prac­
tical problems, significant progress can be expected in the 
next few years. Numerous national and international funding 
projects are also being driven forward with commitment 
with regard to the corresponding quantum software stack. 
Quantum AI methods play a very crucial role at this point as 
components of the first essential applications for quantum 
computers and especially already in the NISQ era.
Developments in the field of quantum AI, and in particular 
in the field of quantum machine learning (QML), will need 
to be continuously monitored and thoroughly evaluated in 
the coming years. This presents a great opportunity to work 
towards the secure design of the new technology at an early 
stage and to identify and address both potentials and risks 
in its use. Looking at the current state of the art, this requires 
targeted research efforts and related activities that, on the 
one hand, investigate and strengthen the security properties 
of QKI systems and, on the other hand, consider the use of 
QKI within IT security. The realities and challenges of the 
corresponding quantum infrastructure must also be consid­
ered beyond the mere focus of QKI models. These include 
the interfaces between classical IT and quantum computers 
in the form of hybrid systems, as well as the fact that the dis­
semination and distribution of quantum computers will in all 
research (see also research fields artificial ethics and artificial 
morality).
Where ethical concepts are to influence the decisions of AI 
systems at run-time, their formalization and representation 
in machine-usable form is required, for example in the form 
of ontologies or in the form of computational principles for 
permissible risk considerations.
Need 01-13: Improved and lower-threshold overview of 
the interplay between criticality levels and associated 
requirements (especially for low-risk AI systems)
In order to be able to quickly classify AI systems in terms of 
their criticality and to be able to grasp the associated require­
ments well, clearly structured provisions would be helpful for 
manufacturers. This is especially true for the question of what 
requirements low-risk AI applications should meet in order 
to comply with regulatory requirements, but also to achieve 
a high level of trustworthiness. The planned AI Act does 
provide a classification into certain classes for the EU area, 
e.g. by defining prohibited areas or also high-risk systems, 
whereby the classification is primarily made according to 
the area of application and less according to the risk arising 
for the respective concrete product. However, few concrete 
requirements remain, especially for the area of less critical 
systems, so that in this case the manufacturers do not get a 
clear picture of which requirements are to be implemented. 
This effect is reinforced by the fact that there is now a wide 
variety of other laws at EU level, such as the General Data Pro­
tection Regulation, the Digital Service Act, the planned Data 
Act, and also the EU Charter of Fundamental Rights, among 
others, which provide further important requirements that 
play a central role in the development of AI-based systems. 
This also makes it confusing for users as to how they should 
classify the systems, what constitutes a trustworthy system, 
and which requirements they fulfil in what way. 
Better transparency and clarity with regard to the different 
levels of criticality (also beyond the classification in the 
planned AI Act [4] and the associated requirements) should 
be created and anchored in corresponding standards. The 
aim is to convey in a low-threshold manner what constitutes 
trustworthy AI, how the systems are to be classified, and 
which requirements from which laws are to be implemented.
Specifically, this includes the following points:
→  A low-threshold classification of AI applications that is 
transparent for manufacturers and users, with regard to 
the criticality of such applications.
92 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 4 – KEY TOPICS

ized methods and interfaces are mission critical to adapt the 
language model to the specific use case.
At least a Europe-wide standardization of language tech­
nology and natural language processing APIs with regard 
to functional scope and parameterization should take place, 
so that more interoperability and also better comparability 
between the cloud services of individual providers is created. 
In this context, data formats, e.g. regarding data exchange, 
and semantic annotation formats can also be considered. 
This includes standardization of metadata, data collections, 
data sheets, model cards, language models, accessibility, 
use of data and data collections for research and commercial 
applications (can be embedded in NFDI, EOSC, Gaia-X, etc. 
as appropriate). Furthermore, it is helpful to standardize 
guidelines for transcription procedures that often include 
ASR or build on ASR output, e.g., number as number, number 
as word, etc., punctuation, capitalization, etc.
This point also includes the orchestration of services in the 
form of workflows or pipelines. This aspect also concerns 
the standardization of benchmarks for comparing diverse 
solutions, e.g. ASR or natural language understanding (NLU). 
In the context of dialogue management applications, this 
aspect also concerns the standardization of resources for 
modelling dialogues.
Need 01-16: Standardization of the measurement of 
­performance, correctness, precision and plausibility of 
large language models as well as data quality
Language models currently represent the state of the art 
in research and technology for many language technology 
applications, but there are still no standards for or meas­
urement of fundamental properties such as correctness, 
precision, facticity, self-consistency, etc. – among others, to 
be able to assess a language model and compare different 
language models. Self-consistency of a model may include, 
for example, whether a model contradicts itself on certain 
related questions. (Note: However, rule-based/symbolic 
models are already part of hybrid systems or pipelines today). 
For example, measuring the degree of truth of the output of 
language model-based applications (or the self-consistency 
of the model) – if technically feasible (and if only in some 
well-defined domains) and resiliently realizable – can signal 
the quality of the language model. It should be noted that 
increasingly multimodal models, image understanding, com­
bination of language and images, sign language (recognition 
and generation) are also performed on the basis of large lan­
guage models (Stanford also calls these foundation models).
likelihood not be the same as that of classical IT due to their 
technical nature. Overall, a consistent pursuit of the aspects 
just mentioned is essential to enable the development of 
suitable security standards for QML systems in perspective. 
Synergy effects between the multitude of nationally and 
internationally funded projects for the development of quan­
tum hardware and software, as well as the respective security 
requirements can only be exploited if early coordination and 
exchange processes take place for this purpose.
 4.1.3.4  
Language technologies
Need 01-15: Standardization of language technology and 
natural language processing APIs and data structures
The APIs of language technology cloud services are not stand­
ardized and are therefore different in each case, which makes 
the comparison, testing, benchmarking and exchange of 
different APIs difficult or impossible, i.e. there is currently no 
interoperability. For in the best case automated usability of 
data collections, it is necessary to standardize metadata de­
scriptions in such a way that all essential properties of a data 
collection are available in machine-readable, semantically 
annotated form. Numerous initiatives are working on this 
issue, in particular the National Research Data Infrastructure 
(NFDI), European Open Science Cloud (EOSC) and Gaia-X.
For automatic speech recognition (ASR) processes, there are 
also no specifications or guidelines as to how, for example, 
punctuation or numbers should be handled, i.e. transcribed. 
Standardization is necessary for better comparison, for 
benchmarking and also for the exchange of corresponding 
services. 
The DFKI has already gained initial experience in this area 
within the framework of the EU project European Language 
Grid, as well as presenting initial proposals with the cooper­
ation of the University of Sheffield. This aspect also affects a 
number of associated topics, e.g. annotation formats, work­
flows, benchmarks, transfer learning for language models. 
The problem is: All vendors each follow their own philosophy, 
i.e. they offer different, proprietary APIs. It would be helpful 
to be able to evaluate and thus compare a vendor’s technolo­
gies using standard datasets (or their own data) and standard 
metrics (e.g., WER for ASR). This topic also concerns large 
language models, i.e., in particular, how language models 
are addressed to perform transfer learning. Of relevance for 
industry: No company can develop a large language model 
on its own, so fine-tuning and transfer based on standard­
German Standardization Roadmap on Artificial Intelligence – 93
CHAPTER 4 – Basic topics

`;