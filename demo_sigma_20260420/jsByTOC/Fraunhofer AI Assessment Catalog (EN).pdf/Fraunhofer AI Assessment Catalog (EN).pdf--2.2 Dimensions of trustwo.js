var toc_content = `22
Essential Concepts and Methodology for Applying the Catalog
2.2  Dimensions of trustworthiness
While ML technologies establish a wide range of opportunities, they also bear new risks due to their complexity, 
dynamics and lack of transparency. In particular, numerous AI-specific risks are not covered by the existing 
assessment and certification schemes for conventional IT systems. The AI assessment catalog provides an 
approach for evaluating AI applications in a structured manner, while not aiming to rewrite or replace existing 
assessment procedures or standards for (conventional) IT systems, for example on IT security. In fact, the 
AI assessment catalog aims to serve as a compatible supplement to existing assessment and certification 
processes with the objective of closing the gap described. The main focus of the AI assessment catalog is on the 
AI-specific risks of AI applications.
The question of which AI-specific risks an AI assessment should cover and which criteria should be used to 
assess them has long been the subject of intense societal and scientific debate. From the various contributions to 
this discussion – including the especially prominent key requirements of the HLEG21 – six topics have emerged, 
which will be referred to below as dimensions of trustworthiness: fairness, autonomy and control, transparency, 
reliability, safety and security and data protection.
These six dimensions of trustworthiness form the fundamental structure of the AI assessment catalog and 
primarily serve as a systematic and granular approach to deriving quality criteria. The descriptions of the 
dimensions in this catalog are based on the white paper “Trustworthy Use of Artificial Intelligence”22, which was 
compiled through interdisciplinary dialogue between computer scientists, lawyers and philosophers. We refer to 
the white paper for a comprehensive discussion of the six dimensions.
The core focus of each of the six dimensions is on the risks that stem from the Machine Learning technique 
implemented in the AI application or that are at least directly related to its functionality. In addition to these risks 
that arise as a result of the use of Machine Learning, also such risks are addressed by the catalog that are already 
covered in existing standards, but which become much more significant as a result of the use of AI, for example 
data protection risks. Regarding the latter, the assessment catalog elaborates on the novel risk factors that exist 
due to the use of ML and provides AI-specific measures for mitigating them in addition to the (classic) measures 
already known. According to the catalog’s focus on AI-specific risks, code quality or hardware security analyses, 
for example, are explicitly not included in the assessment catalog. Furthermore, in the safety and security 
dimension, safety and security risks that stem from the embedding, or that even exist during error-free operation 
of the AI application, are not examined, as they are not AI-specific.
The assessment catalog further divides the dimensions of trustworthiness into risk areas. The purpose of these 
risk areas is to group related risks within a dimension that can be mitigated by similar measures. Thus, the risk 
areas differ in terms of factors such as the failure causes or attack scenarios examined. With respect to the 
reliability dimension, for example, issues related to the performance of the AI application under normal operating 
conditions, to the handling of potential disturbances as well as to the continual learning of the ML model are 
addressed in separate risk areas. In particular, the quality criteria for assessing trustworthiness are derived at the 
level of risk areas.
21  The High-Level Expert Group on AI (HLEG) is an expert commission on Artificial Intelligence set up by the European Commission.  
It has formulated seven key requirements for trustworthy AI, see: High-Level Expert Group on AI (HLEG). (April 2019). Ethics Guidelines 
for Trustworthy AI. European Commission. https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai (last accessed: 
6/21/2021).
22  Poretschkin, M.; Rostalski, F.; Voosholz, J. et al. (2019). Trustworthy Use of Artificial Intelligence. Sankt Augustin: Fraunhofer Institute 
for Intelligent Analysis and Information Systems IAIS. https://www.ki.nrw/wp-content/uploads/2020/03/Whitepaper_Thrustworthy_AI.pdf 
(last accessed: 06/18/2022) Note: The white paper refers to the dimensions as “audit areas”.

23
Essential Concepts and Methodology for Applying the Catalog
The six dimensions of trustworthiness and the risk areas involved within them are presented in more detail below.
Note: For greater clarity, each dimension and each risk area is assigned an abbreviation. This will be used 
later on for various purposes including giving criteria and measures a unique alphanumeric identifier 
(see also Section 2.3).
Example: The fairness dimension uses the abbreviation [FN] and the risk area control of dynamics in this 
dimension uses the abbreviation [CD]. The first criterion in this risk area uses the identifier [FN-R-CD-CR-01] in 
the assessment catalog, where [R] stands for risk area and [CR] for criterion.
2.2.1  Fairness dimension
Dimension: 
Fairness (FN)
The purpose of the fairness dimension is to ensure that the AI application does not 
lead to unjustifiedly disadvantageous treatment of individuals. Typical causes for this 
are unbalanced (biased) training data or the statistical underrepresentation of certain 
population groups, which can lead to reduced quality of the AI application in relation to 
these groups.
Risk areas
Fairness (FN)
This risk area addresses the risk that the AI application learns 
unfair or discriminatory behavior toward users or subjects 
during development.
Control of 
dynamics (CD)
This risk area covers fairness risks arising from changes in 
the external conditions or changes in user behavior.

`;