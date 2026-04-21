var toc_content = `2 
 
EXECUTIVE SUMMARY 
The aim of the Guidelines is to promote Trustworthy AI. Trustworthy AI has three components, which should be 
met throughout the system's entire life cycle: (1) it should be lawful, complying with all applicable laws and 
regulations (2) it should be ethical, ensuring adherence to ethical principles and values and (3) it should be robust, 
both from a technical and social perspective since, even with good intentions, AI systems can cause unintentional 
harm. Each component in itself is necessary but not sufficient for the achievement of Trustworthy AI. Ideally, all 
three components work in harmony and overlap in their operation. If, in practice, tensions arise between these 
components, society should endeavour to align them.  
These Guidelines set out a framework for achieving Trustworthy AI. The framework does not explicitly deal with 
Trustworthy AI’s first component (lawful AI).1 Instead, it aims to offer guidance on the second and third 
components: fostering and securing ethical and robust AI. Addressed to all stakeholders, these Guidelines seek to go 
beyond a list of ethical principles, by providing guidance on how such principles can be operationalised in socio-
technical systems. Guidance is provided in three layers of abstraction, from the most abstract in Chapter I to the 
most concrete in Chapter III, closing with examples of opportunities and critical concerns raised by AI systems. 
I. 
Based on an approach founded on fundamental rights, Chapter I identifies the ethical principles and their 
correlated values that must be respected in the development, deployment and use of AI systems.  
Key guidance derived from Chapter I: 
 Develop, deploy and use AI systems in a way that adheres to the ethical principles of: respect for human 
autonomy, prevention of harm, fairness and explicability. Acknowledge and address the potential tensions 
between these principles.  
 Pay particular attention to situations involving more vulnerable groups such as children, persons with 
disabilities and others that have historically been disadvantaged or are at risk of exclusion, and to situations 
which are characterised by asymmetries of power or information, such as between employers and workers, 
or between businesses and consumers.2 
 Acknowledge that, while bringing substantial benefits to individuals and society, AI systems also pose 
certain risks and may have a negative impact, including impacts which may be difficult to anticipate, 
identify or measure (e.g. on democracy, the rule of law and distributive justice, or on the human mind 
itself.) Adopt adequate measures to mitigate these risks when appropriate, and proportionately to the 
magnitude of the risk. 
II. Drawing upon Chapter I, Chapter II provides guidance on how Trustworthy AI can be realised, by listing seven 
requirements that AI systems should meet. Both technical and non-technical methods can be used for their 
implementation.  
Key guidance derived from Chapter II: 
 Ensure that the development, deployment and use of AI systems meets the seven key requirements for 
Trustworthy AI: (1) human agency and oversight, (2) technical robustness and safety, (3) privacy and data 
governance, (4) transparency, (5) diversity, non-discrimination and fairness, (6) environmental and societal 
well-being and (7) accountability.  
 Consider technical and non-technical methods to ensure the implementation of those requirements.  
                                                           
1  
All normative statements in this document aim to reflect guidance towards achieving the second and third component of 
trustworthy AI (ethical and robust AI). These statements are hence not meant to provide legal advice or to offer guidance on 
compliance with applicable laws, though it is acknowledged that many of these statements are to some extent already reflected 
in existing laws. In this regard, see §21 and following.  
2  
See articles 24 to 27 of the Charter of Fundamental Rights of the EU (EU Charter), dealing with the rights of the child and the 
elderly, the integration of persons with disabilities and workers’ rights. See also article 38 dealing with consumer protection.  

3 
 
 Foster research and innovation to help assess AI systems and to further the achievement of the 
requirements; disseminate results and open questions to the wider public, and systematically train a new 
generation of experts in AI ethics. 
 Communicate, in a clear and proactive manner, information to stakeholders about the AI system’s 
capabilities and limitations, enabling realistic expectation setting, and about the manner in which the 
requirements are implemented. Be transparent about the fact that they are dealing with an AI system. 
 Facilitate the traceability and auditability of AI systems, particularly in critical contexts or situations.  
 Involve stakeholders throughout the AI system’s life cycle. Foster training and education so that all 
stakeholders are aware of and trained in Trustworthy AI. 
 Be mindful that there might be fundamental tensions between different principles and requirements. 
Continuously identify, evaluate, document and communicate these trade-offs and their solutions. 
III. Chapter III provides a concrete and non-exhaustive Trustworthy AI assessment list aimed at operationalising 
the key requirements set out in Chapter II. This assessment list will need to be tailored to the specific use case 
of the AI system.3  
Key guidance derived from Chapter III: 
 Adopt a Trustworthy AI assessment list when developing, deploying or using AI systems, and adapt it to the 
specific use case in which the system is being applied.  
 Keep in mind that such an assessment list will never be exhaustive. Ensuring Trustworthy AI is not about 
ticking boxes, but about continuously identifying and implementing requirements, evaluating solutions, 
ensuring improved outcomes throughout the AI system’s lifecycle, and involving stakeholders in this. 
A final section of the document aims to concretise some of the issues touched upon throughout the framework, by 
offering examples of beneficial opportunities that should be pursued, and critical concerns raised by AI systems that 
should be carefully considered.   
While these Guidelines aim to offer guidance for AI applications in general by building a horizontal foundation to 
achieve Trustworthy AI, different situations raise different challenges. It should therefore be explored whether, in 
addition to this horizontal framework, a sectorial approach is needed, given the context-specificity of AI systems. 
These Guidelines do not intend to substitute any form of current or future policymaking or regulation, nor do they 
aim to deter the introduction thereof. They should be seen as a living document to be reviewed and updated over 
time to ensure their continuous relevance as the technology, our social environments, and our knowledge evolve. 
This document is a starting point for the discussion about “Trustworthy AI for Europe”.4  
Beyond Europe, the Guidelines also aim to foster research, reflection and discussion on an ethical framework for AI 
systems at a global level.  
                                                           
3  
In line with the scope of the framework, this assessment list does not provide any advice on ensuring legal compliance (lawful AI), 
but limits itself to offering guidance on meeting the second and third components of trustworthy AI (ethical and robust AI). 
4  
This ideal is intended to apply to AI systems developed, deployed and used in the Member States of the European Union (EU), as 
well as to systems developed or produced elsewhere but deployed and used in the EU. When referring to "Europe" in this 
document, we mean this to encompass the EU Member States. However, these Guidelines also aspire to be relevant outside the 
EU. In this regard, it can also be noted that both Norway and Switzerland are part of the Coordinated Plan on AI agreed and 
published in December 2018 by the Commission and Member States.  

4 
 
A. INTRODUCTION 
In its Communication of 25 April 2018 and 7 December 2018, the European Commission set out its vision for 
artificial intelligence (AI), which supports “ethical, secure and cutting-edge AI made in Europe”.5 Three pillars 
underpin the Commission’s vision: (i) increasing public and private investments in AI to boost its uptake, (ii) 
preparing for socio-economic changes, and (iii) ensuring an appropriate ethical and legal framework to strengthen 
European values. 
To support the implementation of this vision, the Commission established the High-Level Expert Group on Artificial 
Intelligence (AI HLEG), an independent group mandated with the drafting of two deliverables: (1) AI Ethics 
Guidelines and (2) Policy and Investment Recommendations.  
This document contains the AI Ethics Guidelines, which have been revised following further deliberation by our 
Group in light of feedback received from the public consultation on the draft published on 18 December 2018. It 
builds on the work of the European Group on Ethics in Science and New Technologies6 and takes inspiration from 
other similar efforts.7 
Over the past months, the 52 of us met, discussed and interacted, committed to the European motto: united in 
diversity. We believe that AI has the potential to significantly transform society. AI is not an end in itself, but rather 
a promising means to increase human flourishing, thereby enhancing individual and societal well-being and the 
common good, as well as bringing progress and innovation. In particular, AI systems can help to facilitate the 
achievement of the UN’s Sustainable Development Goals, such as promoting gender balance and tackling climate 
change, rationalising our use of natural resources, enhancing our health, mobility and production processes, and 
supporting how we monitor progress against sustainability and social cohesion indicators. 
To do this, AI systems8 need to be human-centric, resting on a commitment to their use in the service of humanity 
and the common good, with the goal of improving human welfare and freedom. While offering great opportunities, 
AI systems also give rise to certain risks that must be handled appropriately and proportionately. We now have an 
important window of opportunity to shape their development. We want to ensure that we can trust the socio-
technical environments in which they are embedded. We also want producers of AI systems to get a competitive 
advantage by embedding Trustworthy AI in their products and services. This entails seeking to maximise the 
benefits of AI systems while at the same time preventing and minimising their risks.   
In a context of rapid technological change, we believe it is essential that trust remains the bedrock of societies, 
communities, economies and sustainable development. We therefore identify Trustworthy AI as our foundational 
ambition, since human beings and communities will only be able to have confidence in the technology’s 
development and its applications when a clear and comprehensive framework for achieving its trustworthiness is in 
place.  
This is the path that we believe Europe should follow to become the home and leader of cutting-edge and ethical 
technology. It is through Trustworthy AI that we, as European citizens, will seek to reap its benefits in a way that is 
aligned with our foundational values of respect for human rights, democracy and the rule of law. 
Trustworthy AI 
Trustworthiness is a prerequisite for people and societies to develop, deploy and use AI systems. Without AI 
systems – and the human beings behind them – being demonstrably worthy of trust, unwanted consequences may 
ensue and their uptake might be hindered, preventing the realisation of the potentially vast social and economic 
                                                           
5  
 COM(2018)237 and COM(2018)795. Note that the term “made in Europe” is used throughout the Commission’s communication. 
The scope of these Guidelines however aims to encompass not only those AI systems made in Europe, but also those developed 
elsewhere and deployed or used in Europe. Throughout this document, we hence aim to promote trustworthy AI “for” Europe.  
6  
 The European Group on Ethics in Science and New Technologies (EGE) is an advisory group of the Commission. 
7  
 See Section 3.3 of COM(2018)237. 
8  
 The Glossary at the end of this document provides a definition of AI systems for the purpose of this document. This definition is 
further elaborated on in a dedicated document prepared by the AI HLEG that accompanies these Guidelines, titled "A definition 
of AI: Main capabilities and scientific disciplines". 

`;