var toc_content = `Operationalizing quality requirements and existing AI guidelines
Although general requirements for the trustworthiness of AI have already been featured in intensive social and 
political discussions for some time and various guidelines on the trustworthiness of AI applications have been 
published, the operationalization of these guidelines is still open to a large extent. This is particularly apparent in 
the system-related requirements in the European Commission’s draft regulation, which are not clearly specified or 
based on quantitative criteria, but rather leave a wide margin of discretion. Regarding the technical specification 
of the requirements, the European Commission refers to harmonized standards and common specifications5. 
However, the Standardization Roadmap on AI6 published in December 2020 makes it abundantly clear that these 
are not yet widely available. The German Federal Office for Information Security (BSI) has also highlighted the 
need for action to develop “standards, technical guidelines, test criteria and assessment methods”7 for the secure 
use of AI applications.
It is important to note here that the specific requirements for an AI application to achieve trustworthiness 
depend heavily on the technology used and the application context. Key performance indicators (KPIs) that 
allow the quality of AI applications to be measured are desirable. The Standardization Roadmap on AI discusses 
the example of AI-based translation systems, where translation quality is evaluated using the BLEU score8. The 
BLEU score compares an AI-based translation with a human translation on a scale of 0 to 100, with the value 
100 indicating a perfect match. The BLEU score must increase in line with the criticality of the intended use of 
the translation. In the example, a BLEU score of at least 35 is recommended for translating social media posts, 
and a BLEU score of at least 45 is recommended for translating medical letters. However, given the abundance 
of AI technologies and their different application contexts, the question crops up as to what metric and 
threshold are adequate to a given application context. In the example of preventing unfair discrimination by an 
AI application, it is necessary to first quantify fairness from a technical perspective. However, a variety of different 
concepts and metrics are available for quantifying fairness. As such, it must be decided on a case-by-case basis 
which criteria and thresholds are appropriate for assessing the fairness of an AI application.
When defining specific quality requirements for AI applications, there is also the challenge that different 
dimensions of trustworthiness cannot be assessed completely independently of each other, but trade-offs need to 
be made. For example, a performance increase, such as recognition performance on image data by deep neural 
networks, can come at the expense of traceability, or an increase in transparency (for example, by revealing all 
hyperparameters of a model) can lead to new attack vectors in terms of IT security.
5  “The precise technical solutions to achieve compliance with those requirements may be provided by standards or by other technical 
specifications or otherwise be developed in accordance with general engineering or scientific knowledge at the discretion of the provider 
of the AI system.” (p. 13) and “common normative standards for all high-risk AI systems should be established” (p. 20): 
European Commission, Directorate-General for Communications Networks, Content and Technology (April 2021). Proposal for a Regulation 
laying down harmonised rules on artificial intelligence (Artificial Intelligence Act) and amending certain Union legislative acts. COM/2021/206 
final 
https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52021PC0206 (last accessed: 06/23/2021)
6  Wahlster; Winterhalter (Editors) (November 2020). German Standardization Roadmap on Artificial Intelligence. German Institute for 
Standardization and German Commission for Electrotechnical, Electronic & Information Technologies of DIN and VDE.  
https://www.dke.de/en/areas-of-work/core-safety/standardization-roadmap-ai (last accessed: 06/23/2021)
7  German Federal Office for Information Security (February 2021). Sicherer, robuster und nachvollziehbarer Einsatz von KI.  
[Secure, robust and transparent application of AI]. https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/KI/Herausforderungen_und_
Massnahmen_KI.pdf?__blob=publicationFile&v=5 (in German, last accessed: 06/23/2021)
8  BLEU stands for Bilingual Evaluation Understudy

13
Introduction

`;