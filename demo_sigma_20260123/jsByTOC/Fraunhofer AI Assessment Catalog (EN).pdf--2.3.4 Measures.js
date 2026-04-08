var toc_content = `32
Essential Concepts and Methodology for Applying the Catalog
view of the application context. If the objectives cannot be illustrated by quantitative criteria, purely qualitative 
criteria can be used instead.
In order to respond to the fact that AI applications may be exposed to changing external conditions when 
operating, quality requirements are also explicitly formulated that relate to the operating conditions of the 
AI application. These types of objectives or criteria are found in particular in the risk areas entitled “control 
of dynamics”, in which one of the main aims is to control dynamics that potentially result from concept drift. 
Regarding processes during operation, that might be envisaged in these risk areas to address potential drifts, the 
consideration of the catalog is mainly whether implementing them would be sufficient for the AI application and 
not necessarily whether these processes are actually implemented. This means that a positive assessment result 
for an AI application can also be achieved before it goes into operation. Still, an assessment conducted during 
operation should also investigate whether the required processes are actually implemented and effective in the 
real operational environment.
2.3.4  Measures
Once quality criteria have been derived following a risk-based approach, the next step is to prove that these 
criteria have been met. For this purpose, the AI assessment catalog suggests introducing specific technical 
and organizational measures that mitigate relevant risks to an acceptable level or demonstrate that these risks 
have been controlled through testing. The following describes how the assessment catalog helps develop 
a safeguarding argumentation for AI applications. In particular, it illustrates to what extent and with regard 
to which categories measures can be introduced and how conventional or AI-unspecific measures fit into the 
procedure of the catalog.
The AI assessment catalog provides guidance for documenting measures in a structured way along the life 
cycle of an AI application. However, in contrast to conventional standards and assessment approaches from 
functional safety and IT security, AI applications encounter the specific challenge that both the possible threats 
that are the cause of a risk and the possible measures to mitigate the risk cannot be mapped out fully due to 
the broad spectrum of AI applications and will continue to develop over time. As such, the procedure described 
in the catalog offers guidance on which mitigation and testing measures can be considered for AI applications. 
In every instance, if methods from the assessment catalog are taken, they must be specifically adapted to 
the AI application and its application context. Furthermore, it is not mandatory and usually not feasible or 
proportionate to take all the precautions suggested in the assessment catalog for a specific AI application. The 
important thing is that the measures taken and documented are sufficient when considered together in order to 
reduce relevant risks to an acceptable level.
In addition, measures can be taken and documented that are not addressed in the assessment catalog, 
particularly those that are not specific to AI. Since the AI assessment catalog should be seen as a supplement 
to existing assessment procedures, it primarily addresses AI-specific measures. Measures for mitigating risks 
that also exist in conventional IT systems are only mentioned occasionally in the assessment catalog if they play 
an essential role in mitigating risks (which are not specific to AI, but increased by the use of AI). For example, 
the integrity and availability risk area under the safety and security dimension includes some measures from 
conventional IT security, such as the physical protection of the data storage location and the restriction of query 
options. The assessment catalog thus justifies the fact that data is an even more sensitive attack vector in the 
case of AI-based applications than in relation to conventional IT systems. However, while the AI assessment 
catalog sometimes identifies measures that are not specific to AI, it does not claim to replace existing standards, 
such as those used in IT security, in the context of AI applications.

33
Essential Concepts and Methodology for Applying the Catalog
The life cycle of an AI application offers various approaches to mitigating risks. The measures in the AI assessment 
catalog are divided into the following four categories according to the stages of the life cycle:
1. Data
2. Development and modeling of the AI component
3. Embedding
4. Operation of the AI application
These categories compromise all development steps of the AI application as well as the possibility that the 
AI application continues to learn during operation.
If a measure is taken, its type determines whether a documentation (“Do”), a test report (“Te”), a description 
of a process (“Pr”) or a combination of these is required. For measures that require documentation (“Do”), 
it should be ensured that the effectiveness of the measure is evident in the documentation and can be 
understood by competent third parties. For example, if design decisions are documented, the extent to which 
they contribute to the quality requirements in the examined risk area being met should also be explained. In 
the case of tests (“Te”), it is important to provide detailed descriptions of the setting and execution, e.g., the 
test data used, in addition to the test results. Furthermore, processes (“Pr”) can also be established to mitigate 
AI risks, which must be followed during operation. If a process is required to fulfill a criterion, the planned 
process steps should be documented in detail, even if the AI application is not (yet) in operation.
If a measure helps mitigate different types of risks, it is not necessary to repeat the same documentation in 
multiple risk areas; instead, reference can be made to the documentation specified in one risk area. Similarly, 
reference can be made to the AI profile if information has already been provided there that can be considered 
as a risk-mitigating measure.
2.3.5  Overall assessment (of a risk area)
An overall assessment is carried out upon completion of a risk area. The purpose of this is to demonstrate that 
the previously defined quality criteria have been met while taking the documented measures into account.
The assessment describes in detail how effective the documented measures, the tests performed and the 
processes planned for during operation are in achieving the objectives set for this risk area. Especially, the 
assessment focuses on the extent to which the previously defined, quantitative and qualitative criteria are 
met. Discrepancies are recorded if not all requirements specified in the criteria are met. This also applies to 
requirements that have only been partially met, e.g., where the criteria have not or not always been met. These 
discrepancies do not automatically result in assessment failure, but they must be taken into account in the 
higher-level assessments of the dimensions.
2.3.6  Summary (of a dimension)
Summary is performed on each dimension with a medium or high protection requirement after the AI application 
has been examined in relation to all risk areas under this dimension. This step gathers possible gaps identified 
in the overall assessments of the individual risk areas. The remaining residual risks are assessed in view of the 
protection requirement of the dimension.

`;