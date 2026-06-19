var toc_content = `breakthrough lies in the development of GANs as a machine 
learning principle that can, for example, generate photore­
alistic human faces that are not readily distinguishable from 
real photographs even by humans. However, if synthetic data 
of an arbitrary generation method are used for training and 
testing AI methods, essential questions also arise here con­
cerning representativeness and correctness, but especially 
also concerning the degree of realism of the synthesized data, 
which has to be proven especially for high-risk applications. 
Again, there is a significant need, analogous to the need for 
quality assessment of training datasets, to standardize spe­
cific criteria of quality assessment of synthetically generated 
data or synthesis methods with the specific challenges.
In addition, synthetic data can also be used for non-AI appli­
cations, such as art or entertainment However, the methods 
used for this purpose, especially GANs, can often be used for 
abusive purposes with little effort, for example in the context 
of “deep fakes”, in which photos of people can be deceptively 
inserted into video recordings of other people, even realisti­
cally depicting their facial expressions and the lighting of the 
scene. This challenge only concerns standardization to a com­
paratively small extent, but primarily requires an increase in 
social competence in dealing with image data. However, a rel­
evant perspective is that authentication procedures in busi­
ness processes, for example, which have so far been based on 
photo or video data, should also take this new development 
into account – for example, through standardized guidelines 
on which verification or multi-factor authentication steps can 
be used to exclude corresponding deep fakes.
 4.1.3   Standardization needs
 4.1.3.1  
General
Need 01-01: Cross-sectoral standardization of terms
Especially due to the cross-sectoral meaning of “AI” as a 
technology, the differences in meaning named above often 
lead to considerable misunderstandings in interdisciplinary 
discussions. This creates friction even without substantive 
dissent and, accordingly, without substantive progress. As the 
operationalization of AI and AI discussions increasingly re­
quire cross-sector and cross-domain measures, it is expected 
that common terminologies for these will provide a necessary 
foundation.
As the Glossary makes clear, common terms (for example, 
“bias,” “safety”) sometimes have significant variations in 
unrecognized challenges (so-called unknown uncertain states 
and thus “unknown unknowns”), which are essentially asso­
ciated with the open world. This is seen in the ASAM standard 
OpenODD (Operational Design Domain), the aim of which is 
to make permissible application fields for a driving function 
as precisely specifiable as possible.
Correspondingly advanced considerations in the stand­
ardization environment have so far been lacking in other 
sectors, for example for AI-based construction machinery, 
human-robot collaboration or civil security. For example, 
existing standardization activities on AI methods such as 
ISO/IEC TR 24029-1:2021 [91] and ISO/IEC 24029-2 [92] 
(which also include an overview of methods) suggest the use 
of formal verification approaches that are difficult to practi­
cally apply to the field of imaging sensing given the scale and 
complexity of these data. Therefore, empirical test proce­
dures often have to form the basis for robustness analyses 
(e.g. common corruptions & adversarial attacks). Standard­
ization can make a significant contribution here by estab­
lishing guidelines for industrial applications that address, 
among other things, the following questions in the area of 
robustness analysis with empirical test procedures:
→  What is the „optimal“ testing strategy/process with em­
pirical testing procedures?
→  How can different test procedures be aggregated?
→  How can a risk estimate be extracted from empirical test 
results?
→  How is a „diverse set“ of test methods developed?
→  How do you define „success“ in an adversarial attack on 
an AI model?
Challenge area “synthesis”
The synthesis of image data, i.e. their artificial generation, 
can, among other things, make a significant contribution 
to meeting existing data requirements. At the same time, it 
raises its own challenges and questions depending on the 
purpose and technology of synthesis.
Synthesis can be used to provide test, training, and validation 
data for AI procedures. Here, for example, classical computer 
graphics methods can be used to generate realistic image 
data. A key factor here is that with appropriately synthesized 
data, the annotation (i.e., for example, the objects contained 
in the image and their positions) is usually also directly avail­
able, thus eliminating the need for annotation. Raw data of 
infrequent or high-risk events can also be generated simula­
tively. But AI methods, specifically machine learning meth­
ods, can also be used for synthesis purposes. A significant 
88 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 4 – KEY TOPICS

Need 01-04: Test standard for AI systems following the CC
Since the CC is a globally accepted approach to security 
evaluation of IT systems used by testing laboratories and 
certification bodies, this avoids or minimizes additional 
effort in product certification of AI systems by relying on best 
practices.
For the testing and evaluation of AI systems, a horizontal test­
ing standard is to be developed that is based on the Common 
Criteria documents in terms of terminology, methodology, 
and structural specifications. 
Need 01-05: Requirements for certification bodies
Required auditor competencies and the time required for an 
audit according to ISO/IEC 42001 [27] may differ from audit 
requirements in other areas.
Formulation of requirements for certification according to 
ISO/IEC 42001 [27], which must be fulfilled by certification 
bodies. A German project proposal on this topic is in prepa­
ration; however, the project implementation must be signifi­
cantly supported by the German side.
Need 01-06: Standardized form of describing AI solutions
Complementary to the draft EU AI Act, a standardized form 
of describing AI solutions should be made available. Chapter 
4.1.1.1 of the German Standardization Roadmap AI presented 
here can be used as the basis for this. The corresponding 
test methods can also be precisely detailed on the basis of 
such a scientifically sound description of the AI technologies 
used. Regulatory and certification efforts would therefore 
­decrease, while quality would increase. The same applies to 
the description of entire AI applications in which, for exam­
ple, several AI technologies are used:
→  This could also significantly improve the required tech­
nical documentation (Draft AI Act Art. 11), increasing the 
transparency (Draft AI Act Art. 13) and trustworthiness of 
AI. 
→  The European AI Database for managing “high-risk” 
applications listed in the EU would also benefit from a 
unified taxonomy for describing AI. 
→  Furthermore, it is conceivable that, using the proposed AI 
classification, uniform “harmonized European labels” will 
emerge in the future to further promote and accelerate 
the dissemination of transparency and quality of AI. 
→  Another important point is that conformity assessments 
would become simpler and easier to standardize through 
uniform classes of AI applications. The same applies to 
market surveillance. 
standards and conventions across different domains or 
sectors. It is proposed to create unified definitions across 
sectors to ensure an overarching terminology especially in AI 
debates.
Need 01-02: Applicability of the ISO/IEC 5259 ­series 
of standards [39] for sector-specific data quality 
­management
Using the ISO/IEC 5259 series [39] as a common starting 
point for vertical standardization activities in the field of data 
quality will make it possible to draw on a common framework 
and to describe terminology, concepts and processes for data 
quality management across sectors.
With the initiation of the ISO/IEC 5259 series of standards [39], 
the topics of data quality and data management are being 
addressed in international standardization, at least in general 
terms. Nevertheless, it is to be expected that for specific 
sectors and applications more stringent and possibly differ­
ent quality criteria than those mentioned above will become 
relevant. Quality management processes must also be imple­
mented and, if necessary, enriched on a sector-specific basis. 
Thus, it is recommended to examine, in vertical standardi­
zation of data quality management, to what extent the ISO/
IEC 5259 series [39] can be used as a general reference and to 
what extent sector-specific adaptations will be necessary.
Need 01-03: Drawing up of a technology roadmap for AI
A technology roadmap for AI developments can provide a 
valuable basis for contrasting standardization needs with 
a detailed timeline of technological developments and 
needs, and thus sharpening the focus of this Standardization 
Roadmap in this respect While AI developments are ­generally 
very dynamic, trends in processes are foreseeable early on, 
especially where they play into critical product areas, particu­
larly with regard to ethical trade-offs in AI use (example: the 
use of neural networks for perception in automated driving). 
Corresponding developments can be estimated with reasona­
ble robustness and at first independently of concrete stand­
ardization needs; at the same time, such a representation 
can help to identify standardization needs more sharply and 
along market and technology lines.
In addition to the AI classification methodology outlined in 
Chapter 4.1.1.1, it is recommended that support be given 
to work on the development of a technology roadmap that 
summarizes current technology trends in AI and makes 
­recommendations for the future development of Germany as 
an industry location.
German Standardization Roadmap on Artificial Intelligence – 89
CHAPTER 4 – Basic topics

to ensure the ability to respond (appropriately) to damage 
caused by deployment. The quality backward chain provides 
data for the subsequent assessment of possible wrong deci­
sions and thus helps both the provider and the user.
Mandatory content in the context of field data collection in 
the sense of a quality backward chain, which must system­
atically cover not only technical but also ethical aspects, 
requires standardization as well as uniform data formats to 
ensure future reporting obligations. This is to ensure that the 
option to make reports is as low-threshold as possible and 
is as accessible as possible for all user groups. This should 
ensure democratic use with regard to the value level. This 
is also necessary with regard to interoperability in order to 
enable the free use of products, services and systems away 
from monopolies, and to support users in their sovereign 
decision-making in this respect as well.
Need 01-09: Provide opportunities for re-evaluation
The ethical re-evaluation of AI systems is based on their core 
values. These core values must be identified beforehand in 
the development process by the company as part of a stake­
holder process. On the basis of the values that have been 
considered, the company internally classifies the results or 
decisions of the AI system in terms of its ethical dimension in 
operation, but also already as part of the development pro­
cess. Field data from a quality backward chain can support 
this evaluation. The relevant stakeholders must be involved 
in the review. It can be completed by a panel of experts, such 
as an Expert Review Board, or other trained personnel. The 
review also includes looking at the company’s processes 
with regard to ensuring ethical principles and correcting 
them if necessary. If a violation of the above-mentioned core 
values is discovered, a major review of the processes and 
data basis will be required. A reporting obligation analo­
gous to that in the case of data protection violations would 
also be conceivable. Re-evaluation should take place on an 
as-needed basis or at fixed intervals, for example every three 
years. Core elements of this process are already addressed 
in ISO/IEC 38507:2022 [26], where for the most part the core 
objectives of the company are placed in the foreground and 
ethical aspects occur more as a secondary requirement. 
Moreover, it has not been worked out which concrete con­
tents are to be taken into account with regard to the ethical 
evaluation and to what extent they are to be considered.
Documentation requirements and intervals for mandatory 
re-evaluations are to be standardized.
It is therefore recommended to initiate a standardization pro­
ject for the classification of AI systems on a European level.
 4.1.3.2  
Ethics
Need 01-07: Design interfaces for the AI development 
process
Standardized interfaces and a modular model of typical AI 
building blocks can enable interchangeable development 
and individual evaluation according to standardized criteria, 
thus contributing to overarching usability, transferability 
of approvals, and transparency. Appropriate methods for 
viewing models and datasets are also required by the draft AI 
Act [4]. Building on this, standardized process models can be 
created (cf. [93] for example) that integrate the provision of 
appropriate interfaces as a regular artefact of development 
and minimize additional effort. The resulting comparability 
of the interface management of different institutions will pro­
vide orientation and thus contribute to the value of self-deter­
mination in the sense of self-determined use.
Standardized interfaces in AI systems should provide exter­
nal auditors with insight into, for example, training datasets 
and models already in the development phase, and should 
merge AI subsystems, where possible, into common uniform 
functional descriptions in order to simplify development, 
testing, and deployment, especially with regard to ethics and 
trustworthiness goals (for example, with regard to tracea­
bility, authenticity of data, transparency). Standardized role 
descriptions of AI components and actors should be defined. 
Furthermore, a standardized description of the interaction 
of the individual components among each other as well as in 
the overall context (including non-AI system parts and system 
environment) should be created. Which degree of abstraction 
is advisable in practice is to be defined – for example, in order 
not to have to disclose all components of a dataset, but only 
abstracted characteristics, in consideration of data protec­
tion, data economy and data scope.
Need 01-08: Design of the contents of a quality backward 
chain
In order to also be able to evaluate artificial intelligence sys­
tems in their ethical dimension during their use and, if neces­
sary, to model decision bases, the use of a quality backward 
chain is recommended. This acquires field data as part of the 
deployment, which enables a judgement to be made about 
ethical decisions made by the system. Fundamental correc­
tions to the system are not envisaged here; rather, the aim is 
90 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 4 – KEY TOPICS

`;