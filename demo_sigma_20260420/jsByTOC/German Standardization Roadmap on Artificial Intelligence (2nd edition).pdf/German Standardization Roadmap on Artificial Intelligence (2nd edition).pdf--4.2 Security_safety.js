var toc_content = ` 99
4.2 
Security/safety

quality characteristics. The understanding of the term “risk” 
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

`;