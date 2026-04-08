var toc_content = `→  Systematic approach to the use of AI methods in sub­
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

the data model itself could also adapt to the different sensor 
data. It is unclear today how verification will be ensured. 
Additionally, in order to provide an appropriate response to 
the event by the system, context must be established. This 
context is represented by the allocations. The fire can be the 
fire of a lighter or a burning vehicle – in that there will be 
different responses or reactions to it. Different actuators can 
also be used to implement the responses – in this respect, 
similar conditions apply as for sensor data. In the following, 
the example could be a burning vehicle.
In Figure 38, the “real world” consists of a vehicle in a certain 
dynamically changing state. The digital space (possibly a 
digital twin with an AI component) can simulate the dynam­
ics in the real world in its process and data models and thus 
analyze them. The “vehicle on fire” incident must be detected 
quickly and correctly in the digital space and generate a fast 
and adequate response. Thus, an incident must lead to an ap­
propriate response, because they are semantically related to 
each other as an implication. The cause-effect interpretation 
is “there is a fire, it should be extinguished”. However, this 
interpretation can also be replaced by another interpretation 
“there is a fire --> heating in order” and correspondingly dif­
ferent context. The digital twin will be able to use its models 
to quickly analyze that the first interpretation is “correct” in a 
vehicle and the second may have its validity in a building.
In the digital world, the real objects, in this case the vehicle, 
could be made available through an administration shell and 
the usage could be integrated or monitored based on de­
clared semantics, i.e., respecting axiomatic conditions. In this 
ways about resolving contradictions between reality, models, 
and artefacts. What takes on importance are the interpretive 
mechanisms (cf. Figure 38) that operate from the physical 
space into the digital space and vice versa. The quality of both 
the data itself and the data models and their architectures 
is also underestimated, but this is necessary for successful 
implementation. Here, standardization can provide good 
support through metrics and standards for data quality 
(Chapter 4.5.4, Need for action 05-09). The power of machine 
learning lies in transforming data without the need for a com­
plete mathematical prescription ahead of time. This is also 
known to be the disadvantage, which is specifically discussed 
in the explainability and predictability of the results today.
The importance of semantics, data modelling, data quali­
ty, and the interaction between the real and cyberphysical 
worlds is illustrated by the following general example of fire 
extinguishing. A first question is by which sensor technology 
“fire” should be detected and the context this use case has 
in the “real” environment. “Fire” in human interpretation 
could be sensed, for example, by a temperature sensor, a 
carbon monoxide sensor, or a camera. The generated data 
is completely different in each case, because it can be in 
degrees Celsius, particles or directly coloured or colourless 
images If only one data model may be generated, it must be 
able to handle the respective sensor data. The user is already 
faced with a decision here to determine the further course 
of action. Either each sensor receives its own data model or 
the different sensor data are interpreted and transferred into 
one data model. In practice, available sensors are replaced 
over time by newer sensors – a not uncommon scenario. But 
Reality
_____________
_____________
Physical space with real quantities, 
elements and objects
Model
_____________
_____________
Virtual space, mathematical mapping 
and assignment of sets and elements
Artefact
_____________
_____________
Concrete implementation of the 
models in technical systems and 
interaction of the model with reality
recognize
react
conceive
abstract
Figure 37: Model-building (Source: Working Group Industrial Automation)Systems)
German Standardization Roadmap on Artificial Intelligence – 173
CHAPTER 4 – Industrial automation

building on this and like a “program sequence”, can mean 
two things:
→  As a process, narration represents a dynamic orches­
tration of communicating, interoperable, model-based 
declaratively described systems with their variables. The 
respective orchestratability of the systems spans a search 
space of possible graphs of models through which a tra­
jectory is formed by means of narration. In this respect, 
the concept of narration has a conceptual proximity to 
automated planning (see among others PDDL – Planning 
Domain Definition Language [301]): Plan Generation, 
Plan Execution).
→  As an artefact, narration represents a planned or, as a 
result of a narrative process, an actual sequence of inter­
actions between communicating interoperable systems 
and their model-based defined variables or entities. Due 
to changes in the search space during narration, e.g., due 
to changes in the framework, especially at runtime, the 
concrete trajectory through the search space is formed. 
This can then be fed to further processing, e.g. validation.
In this context, the thematically related notion of “narrative” 
means narrative as an artefact and thus represents a declar­
atively described, reusable, verifiable trajectory through the 
graph search space. Thus, a narrative can be given a priori to 
influence a search space in a certain way (“What should be 
done?”). However, a narrative can also be determined a pos­
Physical, "real" environment
Cyberphysical, "digital" environment
Symbolical 
allocation: 
Fire recognized
Reaction: 
Extinguish fire
Event: 
Perceive fire
Semantic 
reaction: 
Trigger fire 
extinguishing
Correct?
Correct?
Correct?
Identification leads to evaluation
Event leads to response
context, compliance with the declarations in the administra­
tion shell can also be realized and administered via submod­
els. In the example of the vehicle with an AI component, at 
least two submodels are then needed: one for detecting the 
incident and one for analyzing the “correct” response. While 
a data model would likely be appropriate for the incident 
sub-model, a process model based on graph theory would 
likely be more appropriate for the analysis of the potential 
response. It is noteworthy to observe that in a semantic view 
of the considered operations, the facts entered in the sub­
models of the administration shell are sufficient. The verifica­
tion of correctness or the interpretation of these facts could 
be performed by an authorized digital twin with access to the 
submodels of the administration shell from the outside. This 
shows not only the importance, but also the complexity of the 
design of these systems.
Now, the first version of the Standardization Roadmap AI 
pointed out the importance of declaration and narration in 
semantic modelling with respect to the interoperability of 
such systems, especially in their dynamic interaction. The 
term “declaration” – in the sense of declarative knowledge 
representation – refers to the machine-verifiable representa­
tion of the structure and behaviour of interoperable systems, 
which is intended to be free of contradictions, using axioms, 
facts, and rules while at the same time dispensing with 
procedural parts. The term “narration”, on the other hand, 
Figure 38: Interaction (Source: Working Group Industrial Automation)
174 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 4 – KEY TOPICS

the graph. Graph semantics are shared by the sender and re­
ceiver. Taking as an example the W3C Semantic Web Stack as 
basic building blocks that build upon each other: transported 
or delivered Resource Description Framework (RDF)-serial­
ized structures cannot be fed to processing by RDFS- or Web 
Ontology Language (OWL)-based AI mechanisms in every 
case, namely if RDF serialization mechanisms are used that 
do not allow for standardized RDFS- or OWL-compliant inter­
pretation. Even though RDF forms the basis for RDFS/OWL 
and the serialized content would in principle be RDFS/OWL 
compatible and serializable in its interpretation. The same 
is true when using the upcoming RDF* model. A concretely 
affected data structure is an RDF list, which can transport 
RDFS-/OWL-compatible unordered set elements, but for 
which there are no standardized transformations in the tools. 
This is shown in Figure 39.
In addition, tools perform individual transformations of the 
respective content when importing and exporting structures 
and models. These do not often preserve semantics, and are 
at the same time not verifiable, i.e. changed interpretations of 
contents cannot be recognized in every case. Transformation 
mechanisms of tools or systems cannot be addressed and 
tested in a dedicated way according to their capabilities. This 
means that it is not possible to recognize externally whether 
a tool or system can process offered content without loss 
(Chapter 4.5.4, Need for Action 05-08).
teriori by observing changes to a graph (“What was done?”). 
In the case of interoperating (AI) systems, it must be assumed 
that the technical basis is different and not necessarily known 
to each other a priori, particularly in the case of dynamic 
interconnections, especially with regard to the coupling of 
heterogeneous systems. Moreover, different parties (systems, 
tools, knowledge engineers) can use the same models with a 
non-concordant interpretation of their semantics. This results 
in deviations and losses in the processing of the contents. 
Original intentions of data structures and models cannot be 
consistently expressed, passed on, and reconstructed. Thus, a 
lossless application of models and their validation for consist­
ent interpretations across multiple parties along a processing 
chain (“pipeline”) is not guaranteed (Chapter 4.5.4, Need for 
Action 05-06).
However, lossless, consistent horizontal as well as vertical 
interpretability of transmitted declarative knowledge is an 
essential requirement for the successful use of AI processes 
(Chapter 4.5.4, Need for Action 05-07). The transmission of 
knowledge takes place in two stages, once on the level of a 
suitable format and secondly on the semantic-interpretative 
level. A suitable format of knowledge is, among others, its 
representation as cause-effect implication, which can also 
be represented in programming languages. At the semantic 
level, these implications are represented as ordered pairs in 
a graph and are plotted as an event, i.e., a current edge, in 
Source: W3C
User interface and applications
Trust
Querying:
SPARQL
Unifying Logic
Proof
Ontologies: OWL
Taxonomies: RDFS
Rules: RIF/SWRL
Data interchange: RDF
Syntax: XML
Identifiers: URI
Character Set: UNICODE
Cryptography
Required 
standardized 
transformation 
(bi-directional)
RDF content provided: 
ex:item1 ex:links (ex:item2 ex:item3) .
ex:item1
ex:item2
ex:item3
ex:links
Underlying RDF graph structure: List
Required interpretation:
ex:item1 ex:links ex:item2 , 
ex:item3 .
Required  corresponding RDF graph structure for RDFS/OWL
ex:item1
ex:item2
ex:item3
ex:links
ex:links
G = (V, E): 
•
|V| = 6
•
|E| = 5
G = (V, E): 
•
|V| = 3
•
|E| = 2
Interpretation
Transport/Exchange
Figure 39: Data modelling (Source: Working Group Industrial Automation)
German Standardization Roadmap on Artificial Intelligence – 175
CHAPTER 4 – Industrial automation

ent types, the current voltage level of the analogue device 
is converted into a symbol {“0”, “1”, “invalid”} depending on 
the analogue voltage level and the defined voltage ranges for 
{“0”, “1”, “invalid”} is transformed. This process of type match­
ing (AD conversion) is called “coercion” and is performed 
automatically at the interface. As can be easily seen, there 
is a mapping rule for type matching in each direction with 
the two type parameters voltage level and voltage ranges. If 
all declared rules and axioms are observed, all forms can be 
continuously transformed into each other. The challenge here 
is to sufficiently declare all the required facts and transfor­
mation rules that must be adhered to or checked in order to 
maintain the flow of information. Based on the status quo, 
this leads on the one hand to the requirement for standards 
for declarative formats across models to establish semantic 
interoperability between models (Chapter 4.5.4, Need for 
Action 05-06). Furthermore, there is a need for standards for 
the representation of semantic characteristics of technical 
processes, especially involving AI-based components (Chap­
ter 4.5.4, Needs for Action 05-17, 05-07, 05-08)
 4.5.3   Humans and AI
 4.5.3.1  
General considerations 
In Germany, the foundation of the legal framework is formed 
by the Grundgesetz (Basic Law) and made more precise in 
more specific laws and ordinances. There is currently no 
concrete design for AI systems and the EU has submitted a 
proposal for design with the draft Artificial Intelligence Act 
(AI Act) (cf. Chapter 1.4). Furthermore, there are already EU 
publications such as the 2019 “ETHICS GUIDELINES FOR 
TRUSTWORTHY AI”, which also address the tension between 
fundamental rights and ethics in AI application. The guide­
lines state the three characteristics of lawful, ethical, and 
robust as the goal for trustworthy AI.
Technical standardization cannot answer questions about 
lawfulness and ethical principles, and the EU Ethics Guide­
lines also recognize that this is a political process of opin­
ion-forming. In a standardization roadmap, it is therefore 
necessary to present the dividing line between technical 
standardization and the formation of political opinion in a 
recognizable way. In the context of technical standardization, 
this debate is less interesting because, with the exception 
of product safety, humans have experienced only indirect 
effects. In the case of product safety, however, the focus was 
clearly on the objective of not harming people, and technical 
The availability of corresponding transformations, which can 
be classified and also checked by third parties with regard 
to their semantic content, is therefore of central importance 
in order to make different (AI) systems interoperable. This is 
emphasized by [302]. The requirements of the FAIR principles 
(Findable, Accessible, Interoperable, Reusable) regarding 
interoperability [303] are necessary for this, but not sufficient. 
In addition, due to the associated higher complexity of model 
handling, reliable automation of the transformation functions 
is required. Design patterns can increasingly be used as a 
basis for this purpose. This becomes even more important 
with the emergence of data spaces as highly scaled “dynamic 
and automated meeting points” of (AI) systems against the 
backdrop of “trustworthy AI”. This is also where a variety 
of interacting digital twins with individual capabilities and 
processes, typically provided by means of the administration 
shells, come together.
 4.5.2.2  
Requirements and challenges
The overarching challenge of “semantic interoperability” 
is found especially between heterogeneous technical or 
physical processes represented as complex, continuous time 
variables in the model. These variables and their character­
istic properties are declared axiomatically and rule-based, 
for example, in the submodels of an administration shell. 
In interoperations between administered models, there is a 
flow of information of values between instances, objects or 
processes. This flow of values is thus the hallmark of inter­
operability between models or systems. When this stability 
is disrupted, the sequence of relationships is broken, i.e., the 
semantic facts between the models can no longer be satis­
fied. Interoperation should be possible between all models of 
different types with given semantics (Chapter 4.5.4, Need for 
Action 05-07) This means that an interface between models 
always has two sides, a sender side and a receiver side. Both 
sides use different technologies but share semantics, i.e. they 
operate in different “languages” or technologies but with a 
common understanding of, for example, information transfer.
This duality of an interface will be shown with a simple 
example, the interoperability between analogue and digital 
devices. Each device in itself has implemented the concept 
of “information” with its own means. While information in 
the analogue device is represented as voltage, measured in 
volts, as a function of time, in the digital device information 
is represented as a logical symbol “0” or “1” independent of 
time. In case of interoperation between the devices of differ­
176 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 4 – KEY TOPICS

`;