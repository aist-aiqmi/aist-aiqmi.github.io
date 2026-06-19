var toc_content = `Executive Summary
Executive Summary
Artificial Intelligence (AI) has made impressive progress in recent years and represents a key technology that has 
a crucial impact on the economy and society. Prominent use cases include applications in medical diagnostics, 
predictive maintenance and, in the future, autonomous driving. However, it is clear that AI and business 
models based on it can only reach their full potential if AI applications are developed according to high quality 
standards and are effectively protected against new AI risks. For instance, AI bears the risk of unfair treatment of 
individuals when processing personal data e.g., to support credit lending or staff recruitment decisions. Serious 
false predictions resulting from minor disturbances in the input data are another example – for instance, when 
pedestrians are not detected by an autonomous vehicle due to image noise. The emergence of these new risks 
is closely linked to the fact that the process for developing AI applications, particularly those based on Machine 
Learning (ML), strongly differs from that of conventional software. This is because the behavior of AI applications 
is essentially learned from large volumes of data and is not predetermined by fixed programmed rules.
Thus, the issue of the trustworthiness of AI applications is crucial and is the subject of numerous major 
publications by stakeholders in politics, business and society. Noteworthy mentions include the European 
Commission’s draft regulation1, the AI Standardization Roadmap2 and the recommendations of the High-Level 
Expert Group on AI3, which formulate essential guidelines for the trustworthy use of Artificial Intelligence. In 
addition to these resources, there is mutual agreement that the requirements for trustworthy AI, which are 
often described in an abstract way, must now be made clear and tangible. One challenge to overcome here 
relates to the fact that the specific quality criteria for an AI application depend heavily on the application 
context and possible measures to fulfill them in turn depend heavily on the AI technology used. For example, 
the requirements for the trustworthiness of an AI system for automated analysis of job application documents 
need to be evaluated differently than those for an image recognition process for the quality assurance of car 
bodies. Lastly, practical assessment procedures are needed to evaluate whether specific AI applications have been 
developed according to adequate quality standards.
This AI assessment catalog addresses exactly this point and is intended for two target groups: Firstly, it provides 
developers with a guideline for systematically making their AI applications trustworthy. Secondly, it guides 
assessors and auditors on how to examine AI applications for trustworthiness in a structured way.
1  European Commission, Directorate-General for Communications Networks, Content and Technology (April 2021). Proposal for a Regulation 
laying down harmonised rules on artificial intelligence (Artificial Intelligence Act) and amending certain Union legislative acts. COM/2021/206 
final https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52021PC0206 (last accessed: 06/23/2021)
2  Wahlster; Winterhalter (Editors) (November 2020). German Standardization Roadmap on Artificial Intelligence. German Institute for 
Standardization and German Commission for Electrotechnical, Electronic & Information Technologies of DIN and VDE.  
https://www.dke.de/en/areas-of-work/core-safety/standardization-roadmap-ai (last accessed: 06/23/2021)
3  High-Level Expert Group on AI (HLEG) (April 2019). Ethics Guidelines for Trustworthy AI. European Commission.  
https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai (last accessed: 06/21/2021)

10
Executive Summary
To do this, the catalog sets out a four-step approach:
1. Conducting a comprehensive risk analysis with regard to the following dimensions: fairness, autonomy and 
control, transparency, reliability, safety and security and data protection.
2. Establishing objectives that are preferably measurable to ensure mitigation of the risks identified in step 1 is 
demonstrable.
3. Systematically listing measures along the life cycle of an AI application to achieve the objectives defined in 
step 2.
4. Creating a stringent argumentation that the objectives formulated in step 2 have been achieved 
(“safeguarding argumentation for trustworthiness”), also taking into account AI-specific trade-offs, e.g., 
security vs. transparency.

11
Introduction
1.  Introduction
4  European Commission, Directorate-General for Communications Networks, Content and Technology (April 2021). Proposal for a Regulation 
laying down harmonised rules on artificial intelligence (Artificial Intelligence Act) and amending certain Union legislative acts. COM/2021/206 
final https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52021PC0206 (last accessed: 06/23/2021)
Artificial Intelligence (AI) is becoming part of more and more areas of our everyday lives and performing 
increasingly responsible tasks. Examples include AI-based quality control in production, support systems for 
medical diagnostics, automated stock exchange transactions and, in the future, autonomous driving. In terms 
of AI-based business models, it is crucial that the AI application is reliable, safe and resilient. At the same 
time, it is important for humans as users and affected persons that the use of AI is in line with societal values. 
Thus, it is clear that the potential of AI can only be fully exploited, particularly for sensitive application contexts, 
if AI applications are implemented according to strict quality standards.
There are various challenges involved with regard to the responsibility for the quality of AI applications and also 
with regard to the technical verifiability of quality requirements.
Responsibility for the quality of AI systems is spread along a value chain that differs hugely from the development 
of conventional software. AI applications are often based on Machine Learning (ML) techniques that learn 
patterns in training data and build a model to apply what is learned to unknown data (but structurally 
comparable to the training data). Because these types of models are often created using millions (sometimes 
billions) of parameters, AI applications are primarily based on processing large volumes of data, for which suitable 
IT infrastructures and computing power are required. Alongside the data producers, cloud service providers 
also play a key role in this area by providing the necessary computing capacity, infrastructure and suitable 
basic AI services such as optical character recognition (OCR), and can thus significantly influence the quality of 
AI applications.
In addition to a complex value chain, the complexity of the AI applications themselves also presents a challenge 
for ensuring their quality. Even experts often find it difficult to understand how the underlying models work, 
because of factors such as the large number of parameters. Furthermore, ML-based procedures can theoretically 
continue to learn during the operation of the AI applications, which implies that measures are required to prevent 
the learning of incorrect behavior, for example.
Assessment constitutes a key component for trust and quality
For these reasons, it is vital for AI experts to systematically implement quality in the development of their own 
AI applications, as well as to assess the quality of third-party systems. Furthermore, users and affected persons 
must be able to trust that relevant AI applications satisfy appropriate quality requirements. Unbiased and expert 
assessment is a tried-and-tested component used in other domains to establish trust. Marketable assessment 
procedures that confirm the guaranteed characteristics of AI products and services can, for example, contribute 
to branding and thus create competitive advantages. In addition, assessments and audits can also be part of 
mandatory approval and supervisory procedures. The draft regulation of the European Commission4 indicates 
that these types of approval procedures in the field of AI will be established for the European market in the near 
future. This is because, in addition to prohibiting certain applications for AI, the draft regulation specifies that 
“high-risk systems” must undergo a conformity assessment. This affects a large number of AI applications that 
are already an established part of our everyday lives.

`;