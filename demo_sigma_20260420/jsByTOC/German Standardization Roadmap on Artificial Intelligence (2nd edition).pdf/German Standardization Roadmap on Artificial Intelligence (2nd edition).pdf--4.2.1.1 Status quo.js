var toc_content = `quality characteristics. The understanding of the term “risk” 
in the proposed AI Act is then discussed. Finally, we deter­
mine how the terms will be used in the rest of the chapter.
“Safety and risk” according to ISO/IEC Guide 51:2014 [99]
ISO/IEC Guide 51:2014 [99] gives guidance for work on stand­
ards and guidelines regarding the inclusion of “safety”. “Work 
on standards deals with safety aspects in many different 
forms across a wide range of technologies […].” In this Guide 
the term safety stands for “freedom from risk which is not 
tolerable”, risk standing for the “combination of the probabil­
ity of occurrence of harm and the severity of that harm“ and 
harm is defined as “injury or damage to the health of people, 
or damage to property or the environment“.
The existing chain of consequences in the area of safety 
(functional safety) is often extended into areas that are not 
absolutely independent of it, but do not belong causally 
to the topic of safety. An example would be the failure of a 
­power plant, which is problematic for the availability of the 
power supply, but is not actually a safety issue. Nevertheless, 
a power failure can lead to concrete damage for humans as 
well.
In addition to the consequence, however, there are also 
extensions of the causal relationships in the direction of the 
causes, e.g. the subject area of security (information ­security). 
It should be noted here that the cause of a manipulative intent 
on the part of the attacker requires a dimension of consid­
eration that is not originally included in safety risk analyses. 
The debates about the meaning of the topics of safety and 
security have been and are still being debated in technical 
regulation and standardization, whereby there is consensus 
that both topics must be considered and that security is 
considered a basic prerequisite for safe operation in the sense 
of safety. With regard to the cross-sectional topics of safety 
and security, reference is made to documents such as the 
technical report DIN CLC IEC/TR 63069:2021 “Industrial-pro­
cess measurement, control and automation – Framework for 
functional safety and security” [100], as well as to the work 
results of the maintenance team on DIN EN 61508-1:2011 
[101], DIN EN 61508-2:2011 [102] and DIN EN 61508-3:2011 
[103] which have dealt with these issues over a longer period 
of time, in order to establish that it is an important prereq­
uisite that the safety consideration presupposes effective 
protection by security measures and can only be valid if this 
prerequisite is assumed. This chapter takes up this approach 
and refers later to the area of security in the case of causal 
security threats.
The fundamental need for testing and certification of the 
safety, security and privacy properties of an AI system arises 
almost naturally from the context of the use of AI systems 
in existing processes and products and the existing require­
ments for risk minimization and secure/safe operation in that 
context. 
The task of this chapter is to develop recommendations 
for action that make it possible to use existing testing and 
certification models from product safety and IT security for 
AI systems as sensibly as possible. Also, AI systems should be 
provides with the possibility to increase their security/safety 
by means of suitable procedures (controls) and with the pos­
sibility to demonstrate an appropriate level of security/safety. 
As already pointed out in the first edition of the Standardiza­
tion Roadmap, people trust in safety-tested coffee machines 
or safe components in nuclear power plants, as well as in 
trained personnel, and for all these areas there are corre­
sponding standards and methods that make the degree of 
implementation of a standard assessable and thus make the 
safety gain certifiable. Ultimately, it is precisely this certified 
proof of compliance with basic principles in all areas of safety 
and security of an AI system that should help to create trust.
 4.2.1   Safety
 4.2.1.1  
Status quo
In the opinion of the authors, the topic of safety is of par­
ticular importance and it was dealt with intensively in the 
sector-specific chapters in the first edition of the Standards 
Roadmap, with many cross-sectoral aspects. That is why the 
topic of safety (product safety) was included as a horizontal 
topic in this Roadmap. Further sector-specific safety aspects 
are described in Chapters 4.6 and 4.7.
The term “safety” is closely related to the term “risk,” 
­although the term “risk” can be understood in different ways. 
The German term “Sicherheit” can mean “safety” as well as 
“security”. Therefore, a clarification of terms follows first. 
Then, the topics of “AI” and “Safety” are related and two 
types of relationships are derived: “direct safety relationship” 
and “indirect safety relationship”. Then, the two types of rela­
tionship are examined in more detail. Finally, a conclusion is 
drawn with key recommendations for action.
In the following, we first explain how the term “safety” is re­
lated to the term “risk” and how it is distinguished from other 
100 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 4 – KEY TOPICS

well as the corresponding reduction of risks over the entire 
life cycle of the product.
Risk assessment is the first and most important step in 
planning and evaluating suitable safety measures. ISO/
IEC Guide 51:2014 [99] describes the most elementary 
­considerations for this and the steps to be taken to achieve 
an acceptable level of risk (see diagram in Figure 22).
 4.2.1.2  
Requirements and challenges
Software (AI or conventional software) in the risk 
­management process
AI as software can play a role in different ways for different 
steps in the process. For example, software can be the object 
of consideration in a process step or be used to perform a 
process step, thereby moving it into the scope of risk assess­
ment.
Software itself does not represent a hazard in the sense of 
safety, but it is decisive and increasingly responsible for the 
behaviour of technical systems. Software can contribute 
to the emergence of hazardous situations due to system 
behaviour. The relationship of software to safety is therefore 
always about the behaviour of a technical system, and this 
also applies to AI.
However, the behaviour of a technical system never depends 
on software alone. It typically results from an interaction of 
software, hardware and other elements in a possibly ­complex 
environment with people and other technical systems. 
Software must always run on hardware. Accordingly, safety 
considerations must be applied to software and hardware 
in combination. This aspect comes up short in the planned 
AI Act. Hardware faults and failures are to be considered in 
the AI system robustness requirement, but since the AI Act 
specifically refers to software in the AI system definition, the 
hardware relationship is not explicitly addressed.
Nominal behaviour vs. risk reduction behaviour
AI can have an influence on the nominal behaviour of the 
system in terms of “intended use”, e.g. in the driver assistance 
system of a car (see Figure 22). 
Nominal behaviour can contribute to hazardous situations 
arising from hazards such as mechanical hazards, electrical 
hazards, thermal hazards, etc. (see e.g., [517]). No new risk 
approaches are needed to assess the risks posed by the 
“Risk” according to the EU AI Act
With regard to AI, the EU is pursuing a “risk-based approach 
of AI regulation“. Here, the meaning of the term risk is broader 
than in the context of “safety” or the ISO/IEC Guide 51:2014 
[99]. It also refers to risks relating to fundamental rights. 
This includes issues such as data protection, freedom from 
discrimination, protection of privacy and protection against 
subliminal manipulation of individuals, see Chapter 1.4.4.
Discussion and definition of terms
Within the meaning of the EU AI Act, any safety-relevant AI 
system falls into the “high-risk” category. In terms of ISO/
IEC Guide 51:2014 [99], high risk has a different meaning, as 
risk is fundamentally about safety risks. These safety risks 
can be marginal and thus acceptable to very high and thus 
unacceptable. In the following, the terms “safety”, and “risk” 
are used in the sense of ISO/IEC Guide 51:2014 [99].
Regarding the term “AI system,” the definition of the pro­
posed AI Act is used. This definition clearly states that an 
“AI system” is a specific type of software. However, it is very 
broad and fuzzy in terms of defining the type of software. 
It does not define a clear boundary between conventional 
software and AI software. In the following, we will elaborate 
on the role of AI software in the context of safety.
Relationship between AI and safety
Safety is achieved through an iterative process of risk iden­
tification, risk assessment and risk reduction. An AI system 
can play a role in this risk management process in a number 
of ways. In the following, the risk management process is 
explained. We then look at how software in general, and AI in 
particular, can play a role in this risk management process. 
It then addresses the difference between AI being able to be 
used to realize the “normal” behaviour of a system or being 
used to achieve the necessary risk reduction. Based on this, 
specifics regarding the behaviour of autonomous systems in 
complex environments are discussed. Finally, two classes of 
safety references are presented: “AI with direct safety rela­
tionship” and “AI with indirect safety relationship”.
Iterative risk management process according to 
ISO/IEC Guide 51:2014 [99]
The Introduction to ISO/IEC Guide 51:2014 [99] states that 
“the increasing complexity of products and systems entering 
the market makes it necessary to place a high priority on 
­consideration of safety aspects”. The section below describes 
the approach to risk identification and risk assessment, as 
German Standardization Roadmap on Artificial Intelligence – 101
CHAPTER 4 – Security/safety

`;