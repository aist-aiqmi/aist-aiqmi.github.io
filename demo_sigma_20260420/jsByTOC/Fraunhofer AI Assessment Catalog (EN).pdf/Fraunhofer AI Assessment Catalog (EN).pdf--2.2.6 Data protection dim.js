var toc_content = `26
Essential Concepts and Methodology for Applying the Catalog
2.2.5  Safety and security dimension
Dimension: 
Safety and 
Security (S)
This dimension addresses both functional safety features and safeguarding against attacks 
and manipulation of the AI application. The measures in this dimension primarily concern 
the embedding of the AI component and include classic IT security methods, for example.
Risk areas
Functional safety (FS)
This risk area addresses the risk of accidental bodily 
injury or property damage that is facilitated or 
even caused by the malfunction or failure of the 
AI application as a result of flawed embedding design.
Integrity and 
availability (IA)
This risk area addresses risks that arise when 
data relevant to operating the AI application is falsified, 
resulting in the AI application being manipulated and 
possibly no longer available in some cases.
Control of dynamics 
(CD)
This risk area addresses risks that arise as a result 
of new threats of the above risk areas occurring 
or established safeguarding methods becoming less 
effective.
2.2.6  Data protection dimension
Dimension: 
Data 
Protection 
(DP)
This dimension relates to the protection of sensitive data in the context of developing and 
operating an AI application. This addresses both the protection of personal data and trade 
secrets.
Risk areas
Protection of personal 
data (PD)
This risk area covers risks associated with the 
AI application using personal data that is not 
GDPR‑compliant, as well as the risk of re-identification 
of individuals in a data set.
Protection of business-
relevant information 
(BI)
This risk area addresses risks that arise from the 
unwanted disclosure of business-relevant information 
by the AI application.
Control of dynamics 
(CD)
This risk area addresses the risks that new background 
information will emerge, such as the creation 
of a personal reference, or that the requirements for 
processing data with an AI application will change.

27
Essential Concepts and Methodology for Applying the Catalog
2.3  Logic of the assessment procedure
The assessment catalog provides a guideline for evaluating AI applications in a structured manner. This chapter 
describes how the catalog can specifically be used to conduct an AI assessment. The catalog is a suitable 
supplement to existing assessment procedures that addresses the urgent need for assessing with regard to 
AI-specific risks. The risk-based rationale of the assessment catalog is described below and especially, the logic, 
reasoning as well as the individual steps of the assessment procedure are explained in detail.
The AI assessment catalog can support technical experts or assessors in various ways when evaluating 
AI applications. For example, it serves as a guideline for preparing technical documentation in which developers 
use a defined structure to demonstrate the trustworthiness of an AI application. To achieve this, the assessment 
catalog first of all guides to document the identified risks in the specific application context, then to record 
the quality criteria used to assess the AI application and, lastly, to define the technical precautions, measures 
and test results used to justify that these criteria have been met. As required by the European Commission’s 
draft regulation for high-risk AI systems, this technical documentation can serve as the basis for a conformity 
assessment of the AI application. This involves an expert evaluating the plausibility, completeness and 
appropriateness of the documentation and, on this basis, evaluating the trustworthiness of the AI application.
In addition to drawing up a technical documentation, the assessment catalog can also be applied in other ways. 
For example, an assessor can use the catalog as support for planning the assessment of a given AI application. In 
particular, an assessor or independent technical expert can perform application-specific tests instead of relying on 
documented test results from the developer. These types of independent and more in-depth investigations give 
the assessment a higher assurance level.
The assessment approach of the catalog is split into two phases. The first phase is designed to operationalize 
quality criteria. To achieve this, AI risks are identified and analyzed, and application-specific quality criteria are 
derived based on the findings. The second phase involves developing a safeguarding argumentation for the 
trustworthiness of the AI application. The risk-mitigating measures taken and the tests performed are duly 
considered to justify that the quality criteria have been met. Collectively, the logic of the assessment procedure 
corresponds to a top-down and bottom-up approach to reasoning regarding the trustworthiness of an 
AI application. The first phase (top‑down) is shown in Figure 4 and the second phase (bottom-up) is shown in 
Figure 5. The parallelograms in the figures denote recommended documentation steps if the assessment catalog 
is used as a guideline for preparing AI application documentation.
The first phase of the assessment procedure corresponds to a top-down approach for operationalizing quality 
criteria. First, the relevance of each of the trustworthiness dimensions is examined separately as part of 
a protection requirements analysis. If the relevance identified is not “low”, a detailed risk analysis is performed 
along the risk areas under the dimensions. This procedure produces objectives. A set of qualitative or, where 
possible, quantitative criteria is then defined which shall be used later on for evaluating if the objectives have 
been achieved. The assessment catalog shows typical criteria applicable for this.

`;