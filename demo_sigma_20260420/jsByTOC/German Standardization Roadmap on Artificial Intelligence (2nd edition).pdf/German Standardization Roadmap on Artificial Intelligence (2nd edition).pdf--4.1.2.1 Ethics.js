var toc_content = `game in corresponding application-specific contexts. AI ethics 
should also be understood in this context. 
Moral principles are not necessarily explicit or even formal­
ized; they can also be implicit conventions of individuals and 
groups that influence their actions. These general principles 
have to be transferred by actors to their concrete situation 
and operationalized in relation to the context of the respec­
tive situation. In constitutional states, parts of established 
rules may be formalized as law, although this is not always 
congruent with the general moral principles and values of 
a society, which may also change over time (see Figure 17, 
right). Taken together, both represent the framework of so­
cially represented goals and expectations, according to which 
AI must be guided both by morality in its respective context 
and by applicable law.
An AI system produces effects that operate within and outside 
a socially negotiated ethical framework (Figure 17, middle). 
A distinction must be made between the goals explicitly pur­
sued by the AI system and the modalities of goal achievement 
or implementation aspects (Figure 17, top left). For example, 
a system can obviously violate ethical values because their 
fulfilment has not been sufficiently taken into account in the 
system’s objectives. However, even a system that aims to ad­
here to all relevant moral principles can be criticized from an 
AI ethics perspective if the modalities for achieving the goals 
are insufficient; for example, if it is not possible for outsiders 
to judge whether the system actually adheres to these values, 
or if the system fails to achieve these goals, for example, due 
to a lack of robustness.
Accordingly, a distinction can be made between those expec­
tations that are placed on the explicit system goals and those 
expectations that are placed on the way in which the goals 
are achieved. Only the consideration of both aspects leads 
to an overall effect of the system that proves itself in ethical 
reflection.
Ensuring this is a process that is important throughout the 
life cycle of an AI system (Figure 17, bottom left) and must be 
ensured by different actors responsible for the AI system (AI 
system owners for short, for example clients, developers, test 
organizations, public bodies or operators). Along the seven 
phases of this life cycle, as well as in the context of overar­
ching governance, different needs for standardization arise, 
which are presented and classified accordingly in the chapter 
on ethics (Chapter 4.1.3). 
Classification of AI autonomy
AI applications and the computer systems that implement 
them can have different degrees of decision autonomy. For 
example, the German government’s Data Ethics Commission 
distinguishes between three classes of autonomy: 
→  Algorithmically based AI applications operate as pure 
assistance systems without autonomous decision-mak­
ing authority. However, the (partial) results and (partial) 
information they calculate form the basis for human 
decisions.
→  Algorithm-controlled AI applications take partial deci­
sions from humans or shape human decisions through 
the results they calculate. As a result, the actual deci­
sion-making scope of humans and consequently their 
possibilities for self-determination shrink.
→  Algorithmically-determined AI applications make deci­
sions independently and thus exhibit a high degree of 
autonomy. Due to the high degree of automation, there is 
no longer a human decision in individual cases, especial­
ly no human review of automated decisions.
 4.1.2   Requirements and challenges
 4.1.2.1  
Ethics
Ethical principles in the context of AI and standardization
An essential task of ethics is to establish and justify generally 
acceptable standards, oriented to values and principles (e.g., 
human dignity, justice, freedom), from which instructions for 
action and behaviour for human (co)life can be derived with a 
justified (rationally comprehensible) claim to general validity. 
On this basis, established social moral concepts are also crit­
ically scrutinized once again (cf. “Standardization Roadmap 
Artificial Intelligence Edition 1”, Chapter 11.2 “Philosophical 
Foundations of Ethics”, [63]).
Since the beginning of the 20th century at the latest, ethically 
relevant questions and problems no longer arise solely in the 
context of interpersonal interaction, but also as a result of the 
effects of new technologies on human (co)life or in the inter­
action between humans and technology. Against this back­
ground, applied ethics developed as a further sub-discipline 
from the middle of the 20th century. It deals with correspond­
ing specific aspects that go beyond the classical questions of 
ethics (e.g. medical, technical and business ethics). Its aim 
is to bring ethical standards and the norms and principles 
derived from them to bear in the sense of general rules of the 
72 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 4 – KEY TOPICS

Those responsible for AI systems can promote and justify 
the value-based development and operation of the systems 
through ethical reflection (see also [64]). This apparent value 
base is a key factor in AI systems gaining social acceptance. 
Sensitivity to and criticality of the technical implementation 
of a value base, for example, are two aspects that shape 
the sense of duty of those responsible for AI systems. This 
sense of duty is comparable to a professional ethos of those 
responsible for AI systems (analogous to the Hippocratic 
oath in medicine). It is clear that the aforementioned ethical 
reflection in the development and operation of AI systems 
strengthens and updates this ethos. 
Ethical reflection in the development and operation of AI 
systems can involve the following basic steps, which will be 
illustrated here using the field of medicine as an example. 
The example represents an AI-based diagnostic system for 
skin cancer detection as a smartphone application, a teleder­
matology app (referred to below as the Derma app). Users 
photograph the relevant skin area. The Derma app analyzes 
the photograph and makes a recommendation. In case of a 
possible suspicion of skin cancer, it advises the user to con­
sult a specialist doctor.
Ethically, the development and operation of AI systems are 
viewed as to how they operationalize values in concrete 
terms, i.e.: implement them. Here, it is possible to check how 
an AI system ensures the principle, for example: “AI systems 
must respect human self-determination”. It is therefore about 
the concrete application of AI that is ethically classified and 
evaluated. The aforementioned persons responsible for the 
AI system must regularly ensure and comprehensibly explain 
that the AI system for which they are responsible continu­
ously complies with ethical principles. Design decisions also 
favour those that promote adherence to ethical principles. 
Wherever compliance with ethical principles is jeopardized, 
the responsible actors must explain thoroughly (in the sense 
of convincingly and rationally comprehensibly) why this is the 
case and, if necessary, draw the consequences (e.g. condi­
tions for operation, decommissioning or no operating license, 
etc.).
The actors involved in operationalizing ethical principles in 
the environment of a specific AI system can be diverse. How­
ever, it must always be assumed that those designated as 
being responsible for the AI system are significantly involved 
in the ethical considerations related to their AI system. This 
is because they have a duty to bring the AI system for which 
they are responsible into line with the legal and identified 
ethical principles in its concrete context of action.
Recht
Morality
Law
Inception
Design & 
Developm.
Verif. & 
Valid.
Deploy-
ment
Operat.
& Moni-
toring
Re-
Evaluation
Retire-
ment
Governance
Diverse entities ensure acceptability of goals 
& achievement modalities throughout the AI 
system life cycle, including feedback re-
evaluations
AI System
Aspects of imple-
mentation, e.g.:
• Robustness
• Transparency
• (Over-) 
Controllability
• Testability
• …
Goals, e.g.:
• Fairness
• Ecology
• Increase of
mobility
• Safety
• Comfort
• …
Effects inside and outside 
the framework
Framework of socially 
represented goals and 
expectations
Situational operationalization and 
ultimate justification of values & 
standards in relation to AI system 
life cycle
Ethos
Ethics
Figure 17: Ethics between AI system life cycle (Source: adapted from [16], Working Group Basic topics)
German Standardization Roadmap on Artificial Intelligence – 73
CHAPTER 4 – Basic topics

Aligning AI development and operations with ethical principles and values requires the following steps:
Those responsible for the 
AI system
Example Derma app: AI-assisted diagnostic system for skin cancer detection as a 
smartphone application
→  develop an AI design based on 
values: They define the under­
standing of values (for example, 
based on their code of conduct) 
and prioritize values for their 
use case, i.e., including the 
respective context. They make 
this process transparent and 
comprehensible.
For the Derma app, those responsible for the AI system take into account various 
values and ethical principles, for example:
→  Equal treatment and explainability, for example by or for people with different 
educational backgrounds: by means of clear model representations or explana­
tions in easy-to-understand language, it must be reasonably comprehensible how 
the app works and on what basis it makes recommendations. Users must be able 
to classify the recommendation as a guide and not as a substitute for treatment 
by medical professionals. It must be clear that a holistic diagnosis also includes 
other examinations (e.g., a palpation result) in addition to the visual observation, 
as well as a progress and comparative observation. The app cannot do this. Equal 
treatment also implies that the use of the app (e.g., in terms of taking pictures 
or entering further data) can be reliably implemented for different user groups 
without causing significant restrictions in the reliability of the results (see below re 
diversity).
→  Reliability, here in terms of the clarity of the basis for the recommendation: In order 
for patients and doctors to be able to assess the basis on which the Derma app 
makes recommendations and the likelihood that these recommendations are cor­
rect, they need concrete insight. For example, the parts of the skin photograph that 
are decisive for the diagnosis can be marked, so that users can directly see which 
features the app uses to make its recommendation. A continual improvement in the 
rate of accurate recommendations is also required as part of quality assurance. This 
can also be achieved by including various training data (see below). To reduce mis­
diagnoses, those responsible for the AI system can provide for balancing of artefact 
sources (so that, for example, skin photography exposure errors are not misinter­
preted as pathogenic abnormalities).
→  Diversity, for example, through appropriately diverse training data: The app must 
be able to be used equally by all people (regardless of age, gender or skin colour). 
To avoid overfitting to specific patterns, those responsible for the AI system can use 
data from multiple sources, such as different laboratories.
→  Self-determination, e.g. with regard to a suitable user interface with correspond­
ing intervention options: Dermatologists and patients need to be able to provide 
feedback to those responsible for the AI system. It must be possible for those 
responsible for the AI system to react to this in order to eliminate sources of error. 
They must be able to delete incorrect or erroneous data or reset the AI system.
To incorporate and prioritize values to the extent necessary, those responsible for 
the AI system engage in dialogue with stakeholders. Together with representatives, 
for example from the groups healthcare professionals and patients, they examine 
the listed values and their prioritization, taking into account diversity aspects (such 
as age, educational background, gender, etc.). They document this result and make 
it publicly available in its most important aspects and in a clear form accompanying 
information from the Derma app.
74 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 4 – KEY TOPICS

Those responsible for the 
AI system
Example Derma app: AI-assisted diagnostic system for skin cancer detection as a 
smartphone application
→  formulate requirements for 
the AI system based on their 
findings on the relevant values: 
Based on the respective target 
value and the application con­
text of the system, they deter­
mine key requirements on how 
its functions are to be imple­
mented in compliance with the 
created value listing and prior­
itization. They take a systematic 
approach to align the evaluation 
of individual sub-requirements 
for their AI system and achieve 
„ethics by design.”
Two values that are exemplified as mutually reinforcing for the above use case 
are equal treatment and explainability. It can be argued that both pay into the 
target value of self-determination, because a fundamental understanding of the 
­functions and processes of the Derma app is required for well-founded criticism and 
feedback capability on the part of affected groups. In order to implement the ethical 
­principle “AI systems must respect human self-determination” as an overriding goal, 
those responsible for the AI system must ensure that users retain sovereignty over 
their decisions at all times. But also the understanding of a recommendation of the 
system must be given in a sufficient way with different user groups. If such under­
standing is limited for certain user groups, e.g., people with insufficient technology 
or media literacy, those responsible for the AI system must specify measures that 
can ensure appropriate assessment. This could be achieved, for example, through 
the mandatory involvement of additional persons such as medical professionals: 
A dialogue area can be set up within the Derma app where patients can contact 
doctors with their queries. Similarly, there may be an area to provide further contact 
with medical practices and medical outreach clinics to achieve immediate network­
ing and assistance.
→  must describe and resolve 
­conflicting goals in terms of 
their values.
There may be different trade-offs with respect to the above-mentioned value of 
­reliability. The threshold value at which the Derma app recommends a visit to a 
doctor should be taken into account at this point:
→  If the threshold value is very high, the Derma app would react very sensitively to 
skin changes. A doctor‘s visit would then tend to be recommended frequently (risk 
of false positives).
→  If the threshold value is very low, the Derma app would react comparatively insen­
sitively to skin changes. A doctor‘s visit would then tend to be recommended less 
often (risk of false negatives).
In terms of reliability, it is now necessary to consider: Are those responsible for the 
AI system to accept more false positives to reduce the risk of missed alarms and 
to enable early detection that is reliable in this sense? Or are they to accept more 
false negatives in order not to overburden the health care system with unnecessary 
examinations and treatments as well as burdens for users? It is important to balance 
these two aspects.
In addition to the balancing of objectives within a value, there is also the question 
of balancing two values in opposition. At this point, equal treatment (here: regard­
ing access to the system) should be balanced with reliability (here: through quality 
assurance). If the same access is granted for all user groups, the reliability of the app 
may be reduced for less technically savvy people if the required recordings cannot 
be created properly or the results cannot be interpreted correctly. This concerns, 
for example, different age groups and different technical, and also linguistic under­
standing. In this respect, the value of equal treatment competes with the value of 
reliability, and a balance must be achieved between these aspects as well, for ex­
ample, by designing the user interface in such a way that it is accessible to different 
user groups in an appropriate manner or is safeguarded by appropriate measures 
(e.g., involvement of specialist personnel).
German Standardization Roadmap on Artificial Intelligence – 75
CHAPTER 4 – Basic topics

Those responsible for the 
AI system
Example Derma app: AI-assisted diagnostic system for skin cancer detection as a 
smartphone application
→  demonstrate whether the AI 
system ultimately functions 
according to the identified 
­requirements and ensure 
­ongoing quality assurance.
As the above shows, those responsible for the AI system for the Derma app must 
determine how individual values are implemented in a traceable manner. They 
determine through which measures...
→  users have equal access to the app,
→  recommendations are classified appropriately and in a user-friendly manner,
→  recommendations are ensured with reasonable reliability,
→  users can use the app in a self-determined manner,
and how this can be verified.
It should be noted that there are different levels of verification or validation. 
­Ultimately, those responsible for an AI system must examine not only the individual 
requirements, but the system as a whole. Only in this way can they assess the inter­
actions of individual components or decisions and the potentially resulting conflicts 
of objectives, especially in complex systems. This concerns an overall evaluation 
that integrates clinical effectiveness criteria and ethical aspects. In essence, it must 
be validated whether the values specified at the beginning of the development 
could be implemented in the present use case in a sufficient manner. This includes 
representative coverage of the user groups and application contexts present in the 
use case.
Since it is often not possible to cover and/or foresee all situations during the 
development process, it is also necessary to systematically collect data from the 
­operation of the system in the sense of a quality backward chain and to have it 
re-evaluated at regular intervals by a suitable body. In the present example, the 
quality backward chain would include a systematic review ...
→  of the extent to which the individual user groups have received the right decisions 
for their personal case, or
→  whether the human oversight mechanisms (involving other people) were effective 
enough to handle this individual case appropriately.
The re-evaluation is a review of whether the ethical dimension of the envisaged 
objectives could be implemented appropriately across the entire spectrum of use 
cases, or of where there is a need for action with regard to improving the system or 
the associated business processes. Important aspects include:
→  the avoidance of potentially systematic unequal treatment of certain user groups 
and promotion of equal treatment; or
→  the reliability and explainability, i.e. the accuracy with which the app makes 
­recommendations and presents them in a way that users can understand. This is 
the basis for trust in their functionality on the part of all target groups.
76 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 4 – KEY TOPICS

Standardization can support the complex process of im­
plementing values in the development and operation of AI. 
Standardization ...
→  provides impetus for goals that are suitable for justi­
fying the ethical defensibility of an AI system. In doing 
so, it takes up the central ethically relevant questions 
and problems of this special field, which are identified 
socio-politically,
→  provides the basis for arguments that can be used by 
people acting ethically as part of their discourse,
→  creates an intersubjective understanding of language by 
shaping and defining terms (the use of a common lan­
guage is what makes communication and the exchange 
of arguments possible in the first place),
→  develops schemas to classify AI systems in a uniform way,
→  develops procedures that standardize ethical processes 
and make value-based system requirements measurable.
Standardization supports the implementation of values – 
sometimes making thinking, communicating and arguing with 
regard to ethically relevant issues more efficient in the context 
of AI. A key goal here is to lay the foundation for developing 
and operating AI in a systematic and contextually trustworthy 
manner – that is, in terms of the value trustworthiness. The 
following section deals with this aspect and its prerequisites.
Value systems for trustworthy AI
The term “trustworthiness” can basically refer to both organ­
izations and technical systems. In contrast, it is to be speci­
fied that: Ethics [65] only refers to “rational beings” who are 
actors (e.g. those responsible for AI systems) in organizations, 
but not in technical or algorithmic systems. More concrete 
explanations of trustworthiness in relation to organizations or 
technical systems can be found in Chapter 4.1.2.2.
Values and requirements for trustworthy AI in general
The “High Level Expert Group on Artificial Intelligence of the 
European Commission” (HLEG-AI) [8] as well as the “Enquete 
Commission AI” [66] have described a number of require­
ments for AI systems with regard to their trustworthiness. 
These values or requirements for trustworthy AI systems, 
referred to as guidelines, include the following points (see 
Chapter 1.4).
1. 
The prioritization of human oversight of AI systems and 
respecting and ensuring fundamental rights: The Group 
requires that information, oversight and control mecha­
nisms should be available in connection with AI systems 
in order to avoid negative effects, e.g. on fundamental 
rights, but also the misuse of AI systems.
2. 
Technical robustness and security, e.g. resistance to 
attacks and security breaches, fallback plans and general 
security, precision, reliability and reproducibility.
3. 
Privacy and data quality management, such as respect 
for privacy, data quality and integrity, and data access. 
Issues that relate to standardization activities include 
data protection management in the context of AI, but also 
how to ensure data quality overall.
4. 
Transparency, traceability and explainability. In practice, 
these terms are often used synonymously. However, they 
relate to various aspects of disclosure, as defined below.
a)  Transparency refers to the question of „what“. It 
aims to make the use of AI components in a system 
recognizable and to describe the system’s relevant 
properties. This knowledge is necessary to enable an 
informed decision about the use of the AI system.
b)  Traceability in this context refers to the possibility 
of being able to independently verify the properties 
made transparent.
c) 
Explainability refers to the question of „why.” 
Through explainability, the behaviour of AI compo­
nents and their interaction in a concrete situation can 
be understood. This knowledge makes it possible to 
trace decisions of the AI system back to their influ­
encing factors and thus to understand the cause of 
individual decisions. Datasets and processes that led 
to the AI system decision should be documented.
5. 
Fairness, non-discrimination, and diversity, e.g., avoiding 
unfair bias, accessibility and universal design and stake­
holder participation, promoting diversity.
6. 
Social and environmental well-being, e.g. sustainability 
and environmental protection, social impact, society and 
democracy.
7. 
Accountability, e.g., verifiability, minimizing and report­
ing negative impacts, compromises, and remedies.
This can also be compared to the Landscape of AI Ethics 
guidelines, which identified five values or ethical principles 
of fundamental importance for AI systems: Transparency, 
justice, fairness, non-maleficence, responsibility and privacy 
[67]. Another approach to value-based development and the 
use of AI systems can also be found, for example, in the White 
Paper Ethics briefing [68].
The value of fairness in particular
Fairness has a special position as a requirement (see item 5 
above) for trustworthy AI systems for several reasons. On the 
one hand, society rightly demands fairness in general and 
in principle, especially in exponential technologies such as 
German Standardization Roadmap on Artificial Intelligence – 77
CHAPTER 4 – Basic topics

AI-supported applications (cf. [69], 3) as a possible extension 
of social inequalities embodied by humans as social actors 
(cf. [69], 6). Therefore, the social background, structured 
by possible hierarchical power asymmetries, from which 
algorithmic systems can emerge, should also be taken into 
account (cf. [70], 2). Thus, there cannot be “the one” fair­
ness measure, but rather a deliberate selection of fairness 
measures should be made to measurably and demonstrably 
promote the intended fairness goals. In this respect, it ap­
pears essential – in order to be able to do justice to the value 
of fairness in its respective context-related implementation – 
to enter into dialogue with relevant stakeholder groups (as 
also exemplified in the example under item 1 of this section) 
in order to be able to determine and take into account the 
fairness opportunities and challenges of an AI system in 
direct relation to the respective stakeholders. In addition to 
value-based engineering in the context of the above-men­
tioned IEEE 7000:2021 [64], approaches such as participatory 
design [71] or value-sensitive design [72] also incorporate this 
aspect. There is disagreement about group fairness measures 
in that they must be about the (conditional) equal treatment 
of groups. Individual fairness, on the other hand, is the view 
that similar individuals should be treated similarly, based on 
some (arbitrary) function that determines similarity. It should 
be noted here that unequal treatment may also be justified 
(e.g., in the allocation of a job that requires a high level of 
physical strength, or the prioritization of vulnerable groups in 
the allocation of vaccines).
Different measures of fairness represent different notions of 
fairness, and many of them cannot be optimized at the same 
time because they conflict with each other to some degree. 
If optimization is targeted to a specific fairness measure, the 
results of other fairness measures are sometimes inevitably 
reduced. This may even increase discrimination according to 
the understanding of reduced measures (see Chapter 4.8.2.3).
Since it is virtually impossible to map morally imperative 
actions in fixed algorithms or rigid sets of rules, a trustworthy 
organization consisting of “rational beings”, i.e. employees, 
(loosely based on Kant) is characterized by its ability to 
behave in an ethically reflective manner, especially in conflict 
situations, even if existing laws or company regulations might 
conflict with this (see Ethical Guidelines of the Gesellschaft 
für Informatik e. V. (Society for Informatics) [73]). Modern 
governance and management systems (see Chapter 4.1.2.2) 
include clear and effective compliance reporting channels for 
precisely such conflict situations to protect employees.
the application of artificial intelligence; on the other hand, 
fairness as an operationalization of non-discrimination (in 
the sense of unjust disadvantage, bias, or unequal treatment) 
has already become established in computer science and its 
practical application in the last ten years.
If the general definition of fairness according to the German 
Duden dictionary of “decent behaviour; fair, honest attitude 
towards others” or “corresponding to the [game] rules, 
decent and comradely behaviour in the game, competition or 
the like” is widely accepted, a common more specific defini­
tion, for example, from the two perspectives of the disciplines 
of philosophy and technology would already be much more 
difficult. Even limiting the focus to just one discipline, such as 
computer science, is still a challenge when defining fairness 
specifically.
However, as fairness is increasingly required in the use of 
algorithmic and sociotechnical systems more broadly and 
machine learning systems more narrowly, action is ­required. 
The meaning of the term in this context is also highly 
­controversial. Broadly speaking, two main streams can be 
distinguished: Fairness as an ethical principle (based on 
values such as justice) and fairness as an operationalization 
of non-discrimination. It is often not clear what the call for 
fairness is based on in a specific case. In terms of operational­
izing non-discrimination, however, there are not only con­
crete implementation strategies, but also already concrete 
proposals for measurement and assessment that are used in 
practice
Over the past decade, a limited understanding of fairness in 
computer science has developed in parallel with an ethical 
understanding from applied philosophy. In computer science, 
there is an effort to measure “only” the extent of discrimi­
nation by an algorithmic system through fairness measures 
inversely (i.e., the “non-discrimination”). This does not cover 
all aspects of fairness.
The variety of approaches to measuring fairness in terms 
of non-discrimination represent different perspectives and 
strategies and can be broadly divided into individual and 
group fairness measures. In any case, a universally applicable 
fairness measure presupposes a common understanding 
of discrimination. However, this is not available or given by 
various moral concepts, systems of norms, principles, values 
or dispositions, all of which claim to be the basis of correct 
action (see Glossary “Ethics”). For an ethical reflection it is 
furthermore essential to examine discrimination occurring in 
78 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 4 – KEY TOPICS

In addition, an AI ethics governance structure consisting of 
external and internal experts is to be established, for example 
in the form of an “AI Ethics Steering Committee”, “AI Ethics 
Office” or “External Advisory Panel on AI”. This structure is re­
sponsible for the permanent design and further development 
of the principles, guiding principles and recommendations 
for action, inherently maps the corporate values and keeps 
them up to date. 
This example shows practical steps that can be taken within 
the company to operationalize ethics. However, there are 
already efforts by organizations and academia to provide 
cross-enterprise process structures and concepts in this area 
(e.g., IEEE 7000:2021 [64] and KIDD process [74]). Standardi­
zation can support here to provide a reference and ensure the 
comparability of measures.
 4.1.2.2  
Implementation in AI development 
and operations: A look at products 
and services as well as organizational 
structures
As shown in Chapter 4.1.2.1, the term “trustworthiness” can 
refer to both organizations and technical systems. A technical 
system (i.e., a product or a service provided electronically) 
can be trusted with respect to certain properties such as safe­
ty/security or reliability if there is evidence (e.g., in the form of 
a test report or certificate) that the system meets such prop­
erties. The trustworthiness of an organization is broader: It 
refers to the fact that an organization is trusted to implement 
appropriate actions and maintain management structures – 
called a management system – to meet the expectations of 
its stakeholders and other interested parties. In addition to 
an appropriate audit report, an organization’s reputation or 
its acceptance in the marketplace can also contribute to its 
trustworthiness.
Trust in products and services
The Common Criteria (CC) describe a methodology for testing 
products and services with a focus on their safety, which can 
be used as a conceptual framework for corresponding tests of 
AI systems. The CC are also available as International Stand­
ard ISO/IEC 15408:2020 [445]. Supporting this, an agreed 
methodology for evaluation based on the CC is described in 
the International Standard DIN EN ISO/IEC 18045:2021 [75]. 
These documents form the technical basis of the Common 
Criteria Recognition Arrangement (CCRA) [76], which has been 
signed by a large number of countries, including Germany. 
Case example governance
The possibilities for implementing values such as trustwor­
thiness will be described below using an example based on 
the specific case of a large software company that has been in 
practical use for several years.
In the example, the operationalization in the form of “princi­
ples” for an ethical approach to AI goes back to an initiative of 
the employees. They enlist the support of top management 
and conduct international workshops with global participa­
tion from all business units affected by AI or ML. The princi­
ples developed herein include three perspectives or roles: 
Employees/employers, solution providers and members of 
society. The principles describe their interaction in accord­
ance with the principle of sustainability, in the sense of the 
conscious use of tangible and intangible resources in such a 
way that their creation, use and further development today 
do not compromise the needs of future generations.
These abstract principles are then concretized into “guiding 
principles” and further detailed into instructions for action 
and rules, for example as follows:
Principle
We develop for people. (This goes 
back to Kant’s self-purpose formula 
and ­implies, among other things: 
­Technology is always there for people – 
never the other way around.) 
Guiding principle
Clarification for employees on how 
ethical principles are to be incorpo­
rated into everyday working life.
Concrete 
­instructions for 
action
→  No grey, dark, or black patterns (for 
example, purposefully misleading 
user interaction, e.g., with cookie 
selection options by highlighting or 
darkening the buttons).
→  Supply chain check for third-party 
service providers
→  No de-anonymization
→  ...
Concrete tools such as a criticality pyramid or risk matrix 
(cf. Roadmap AI 1st edition [63]) for classifying the company’s 
internal algorithmic systems support a comprehensible and 
low-threshold implementation.
German Standardization Roadmap on Artificial Intelligence – 79
CHAPTER 4 – Basic topics

`;