var toc_content = ` 4.3.1   Status quo
A programme for developing cross-application AI certifica­
tion can have great appeal if it is compatible with existing 
conformity assessment methods and quality infrastructures. 
In the following, the term “AI certification” refers to a toolbox 
that includes different types of conformity assessment that 
may come into play as evaluation activities in the context 
of AI. The naturally brief description of the status quo here 
focuses on a few key questions, such as:
→  What shape and scope can AI certifications take?
→  Which quality dimensions of an AI certification can be 
identified? How can they be classified and, if necessary, 
also related to regulatory requirements?
→  How is the object of conformity assessment to be identi­
fied and selected?
→  What types of conformity assessment are relevant? Which 
test and inspection procedures and validations play a 
role?
→  What can AI certifications look like? How can they be 
applied to existing horizontal standards?
→  What vertical standards can be used to implement testing 
and inspection procedures and validations? Which ones 
need to be further developed and which ones need to be 
newly developed? (See also AI suitability in Chapter 3.3).
→  How do users, providers, manufacturers, and developers 
benefit from the proof of AI trustworthiness? What con­
tribution can a cross-application certification procedure 
make to the acceptance of AI in industry and society?
This results in a three-stage cascade of requirements from the 
ethical to the normative to the technical level (see Figure 27), 
whereby the classification into risk groups is sensibly carried 
out at the application-oriented level, but the actual technical 
verification of the requirements is performed at the horizon­
tal level.
The cascade and relationships and responsibilities must be 
addressed for the successful implementation of legal frame­
works for action. For example, in responding to the European 
Commission’s standardization requirements related to the 
proposed Artificial Intelligence Act (AI Act) in the current 
version, there is much leeway to propose standards at all 
of the above levels and with any hybrid forms. The require­
ments cascade is also reflected in the organization of national 
and international standardization bodies for AI (Chapter 3.2). 
Working groups and projects for vertical, i.e. application-re­
lated standards make conceptual use of horizontal, cross-ap­
plication standards. And this Roadmap also follows this 
approach: The sectoral studies build on the basic technologi­
cal and testing methodology aspects.
The consensus in standardization bodies and expert groups is 
as follows: There is an urgent need for clarification and action 
to establish test methods at the different evaluation levels 
and to make quality assurance for trustworthy AI in industry 
and society transparent. This chapter provides insight into 
the various dimensions of implementation, formulates the 
resulting issues as standardization needs, and concludes by 
bundling them as an urgent recommendation of developing 
and establishing a horizontal, cross-application AI certifica­
tion programme.
Acceptance
Marketability, 
testing, 
approval
Technical 
testing
Ethical and normative 
requirements and 
framework conditions
Application-specific 
requirements and 
deployment conditions
Technical requirements and 
characteristics
Regulation
Vertical 
standards in 
application
Horizontal 
standards in 
application
Figure 27: Three-level require­
ments cascade (Source: BSI)
German Standardization Roadmap on Artificial Intelligence – 123
CHAPTER 4 – Testing and certification

DAkkS is permitted. Details of these regulations are explained 
in Chapter 1.4 and Annex 13.
Most of the EU regulations and directives relevant to AI expect 
risk-based testing and, if necessary, certification for defined 
high-risk applications and harmonized standards suitable for 
this purpose. The aim of this chapter is to develop recom­
mendations for these and other requirements for testing and 
certification.
 4.3.1.2  
Ensuring the competence of 
organizations and protecting 
consumers
For example, a working group of the international standardi­
zation organizations is developing an International Standard 
ISO/IEC 42001 [27] for AI Management Systems (AIMS). An 
AIMS supports companies, organizations and institutions. 
This should define suitable strategies and processes for the 
trustworthy development and use of AI systems. The aim is 
to increase trust and acceptance of AI as a key digitalization 
technology. The development of AI and especially of auto­
mated decision-making processes leads to challenges regard­
ing consumer trust and welfare.
Consumer protection’s view of learning systems is naturally 
critical. Since learning algorithms can process data with a 
precision and speed that humans can no longer comprehend, 
consumer protection points to associated risks, especially 
when decisions are made without the results being verified 
by humans. A major problem is the distortion of relevant 
data. Machine learning is based on the recognition of patterns 
within datasets. Problems arise when the database does not 
form a representative cross-section and distorts the learning 
processes. This problem is addressed in particular in the 
test dimension “Bias, fairness and avoidance of undesirable 
discrimination” (cf. Chapter 4.3.2.1).
Consumer advocates also point to the potential consequences 
of such biases in algorithmic decision-making (ADM) ­systems 
as specific AI systems. In many cases, a decision made with 
the help of such systems can have a significant impact on 
individuals, for example in the credit industry, on the ­labour 
market, in healthcare, or in legal disputes. A European 
Parliament Decision calls on the European Commission to 
investigate whether there is legal certainty for consumers in a 
world increasingly influenced by AI and automated decision-­
making.
This sub-chapter introduces important concepts and termi­
nology that form the basis for further discussion of the topic 
of “testing and certification” of AI systems. For this purpose, it 
is discussed at the beginning (Chapter 4.3.2.1) which entities 
(such as systems, organizations, persons, etc.) can be the ob­
ject of an AI certification. Since the discussion should build as 
much as possible on the established concepts of conformity 
assessment, the following (Chapter 4.3.2.1) introduces impor­
tant principles and concepts of conformity assessment. The 
sub-chapter ends with a presentation of the most important 
quality dimensions for trustworthy AI (Chapter 4.3.2.1).
 4.3.1.1  
Regulatory requirements
There are a number of international and national regulations, 
three of which are considered as being particularly ­significant 
for conformity assessments of AI applications, services 
and systems for the Standardization Roadmap Artificial 
­Intelligence:
1. 
the European General Data Protection Regulation (GDPR) 
with the implementing or accompanying standards for a 
data protection certificate and data protection manage­
ment,
2. 
the European Machinery Directive (to be replaced by the 
Machinery Regulation in the near future) and the German 
Product Safety Act and their implementation with a focus 
on accident prevention, and
3. 
the European Commission’s draft regulation establishing 
harmonized rules for artificial intelligence.
The European regulations mentioned as examples are part 
of the implementation of the “New Legislative Framework” 
(NLF). This is a package of measures to improve market sur­
veillance (Decision of the Parliament of the European Union 
(EU),768/2008/EC [144]) and for the placing on the market 
of industrial products (Regulation (EC) No 1025/2012 [169]) 
in the member states, as well as to increase the quality of 
conformity assessment through clear rules of accreditation 
(Regulation (EC) No 765/2008 [145]). With the entry into force 
of this latter Regulation under this package of measures 
(the NLF), accreditation is a sovereign task throughout the 
EU and is performed in the respective member states by a 
single national accreditation body. In Germany, the Deutsche 
Akkreditierungsstelle (German Accreditation Body) (DAkkS) 
is the competent authority. For independent conformity 
assessment bodies of the first, second or third side with their 
head office in Germany, this means that only accreditation by 
124 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 4 – KEY TOPICS

`;