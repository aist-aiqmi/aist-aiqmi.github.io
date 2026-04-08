var toc_content = `27
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

28
Essential Concepts and Methodology for Applying the Catalog
Dimension 1 
is not relevant
Definition of objectives
Specification of criteria 
that can be used to verify 
control of the identified risks.
Risk analysis
The risk areas represent the 
possible malfunctions/violations 
within a dimension.
Relating to a defined 
application context
Assessment 
of the trustworthiness 
of the AI application
Dimension 2
Dimension 6
Risk area 1.n
Dimension 1
…
…
…
Risk area 1.1
low
medium/high
Specification 
of criterion 1.1.1
Specification 
of criterion 1.1.m
…
…
Protection requirements analysis
…
Figure 4:  Top-down – risk-based derivation of application-specific quality criteria. Note: The parallelograms represent the 
documentation steps.
The second phase follows a bottom-up approach that works in the opposing direction. Measures are taken and/
or documented within each risk area that work toward mitigating risks or meeting previously defined quality 
criteria. These measures are differentiated according to where in the system they apply, i.e., whether they affect 
the data, the AI component, its embedding or later the ongoing operation of the AI application. Thus, the 
assessment catalog presents an approach for mitigating risks. The measures taken are used as a basis to discuss 
whether the criteria have been met and an overall assessment is performed to argue to what degree relevant 
risks are mitigated for the respective risk area. Similar reasoning is used at the dimension level as well as across 
dimensions. Particularly for the latter step it is important that any trade-offs between the dimensions must also 
be taken into account.

29
Essential Concepts and Methodology for Applying the Catalog
…
Dimension 1 
is not relevant
…
Data
AI component
Embedding
Operation
Documentation of measures related 
to these four categories that collectively 
assure that the criteria have been met. 
Measures range from design decisions 
to testing.
Measures
Criterion 1.1.m
The criteria can be used to verify 
the control of the identified risks.
Overall assessment
The risk areas 
represent the possible 
malfunctions/violations 
within a dimension.
Relating to a defined 
application context
AI application 
is trustworthy
Cross-dimensional assessment
Criterion 1.1. 1
Dimension 2
Dimension 6
AI application is 
safeguarded in relation 
to dimension 1
Summary of dimension 1
…
AI application
is safeguarded 
in relation to risk area 1.1
Risk area 1.n
…
…
Figure 5:  Bottom-up – safeguarding argumentation for the trustworthiness of the AI application based on measures taken. 
Note: The parallelograms represent the documentation steps.
Note: As noted in Section 2.2, the individual steps of the assessment procedure are assigned identifiers for 
clarity. The following system is used to allocate a general identifier:
[chapter – category – more detailed category name,  
if applicable – aspect, if applicable – numbering, if applicable]
Example 1: First, a protection requirements analysis [P] is performed for the fairness dimension [FN].  
This uses the identifier: [FN-P]
Example 2: In the fairness dimension [FN] in the risk area [R] control of dynamics [CD], the first criterion [CR] 
is allocated the number [01]: [FN-R-CD-CR-01]

30
Essential Concepts and Methodology for Applying the Catalog
The following table provides an additional explanation of the composition of the identifiers:
Section
Category
Aspect
PF (AI profile)
T – Topic area abbreviation
Dimension abbreviation
P (Protection requirements analysis)
R – Risk area abbreviation
RI (Risk analysis and objectives)
CR (Criteria for achieving objectives)
ME (Measures)
OA (Overall assessment)
S (Summary)
AT (Assessment of 
trustworthiness)
Figure 6:  Composition and meaning of the identifiers.
The individual steps and aspects of the assessment procedure are presented in detail below.
2.3.1  Protection requirements analysis
The AI assessment catalog provides a structured procedure for assessing an AI application with regard to six 
dimensions of trustworthiness. However, depending on the task and application context of the AI application, 
all six dimensions may not be equally relevant for assessing its trustworthiness. This is why a protection 
requirements analysis is first performed for each dimension. The purpose of the analysis is to determine the 
“protection requirement” of a dimension, following the procedure from IT-Grundschutz24 (engl.: IT baseline 
protection). This is similar to an initial assessment of the relevance of this dimension for the AI application to be 
assessed.
The protection requirement is determined based on the potential damage25 that could be caused by 
a malfunction or a breach of requirements with regard to the dimension being examined. The protection 
requirement can be classsified as low, medium and high. The only exception when determining the protection 
requirement is in the reliability dimension. This dimension cannot have a low protection requirement. This 
is because a low protection requirement for reliability would mean that in the event of a malfunction, even 
financial damage, such as loss of earnings or reputational damage, would either not be a threat or would only be 
a threat to a negligible extent. This would make the quality of the AI application completely uncritical and, taken 
to extremes, the application could also be replaced by a non-AI-based system that generates random outputs. 
Moreover, there should be a minimum level of functionality so that meaningful assessment is also possible for the 
other dimensions. This is why assessing an AI application with a low protection requirement in terms of reliability 
does not seem necessary.
24  For further information and explanations, refer to the following website: https://www.bsi.bund.de/EN/Themen/Unternehmen-und-
Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/it-grundschutz_node.html (last accessed: 11/18/2022)
25  This includes (material) property damage and bodily injury, as well as non-material damage to users or affected persons which are directly 
caused by the AI application. In addition, indirect damage associated with the malfunction of the AI application, such as financial losses of an 
organization caused by reputational damage, should be taken into account.

`;