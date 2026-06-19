var toc_content = `84
Dimension: Transparency
[TR-R-CD-CR-02] Maintaining transparency properties
Requirement: Do
Criteria are defined and documented for a process to regularly review transparency properties against the 
existing requirements. When selecting criteria for assessing the process, the following points (quantitative 
or qualitative) should be considered as a minimum:
 – Assessment interval. This shows the extent to which the reviews of the transparency properties are also 
initiated by other, regular reviews. This approach is useful if a re-evaluation of transparency properties 
results from direct changes to transparency requirements as well as from other initiated changes to the 
AI application, such as retraining.
 – Scope and nature of the review or methods used.
 – Threshold value or qualitative extent of deviation from the requirements, above which corrective measures 
are taken.
 
Quantitative target values or qualitative target characteristics must be specified for each criterion.
It must be demonstrated that the criteria set adequately reflect the objectives defined in [TR-R-CD-RI-01].
6.4.3  Measures
6.4.3.1  Data
There are no planned measures for this category.
6.4.3.2  AI component
There are no planned measures for this category.
6.4.3.3  Embedding
There are no planned measures for this category.
6.4.3.4  Measures for operation
[TR-R-CD-ME-01] Monitoring external factors
Requirements: Do | Pr
A monitoring process is established relating to the external factors that may influence the transparency 
requirements identified in the previous risk areas. The factors specified in [TR-R-CD-CR-01] must be 
considered as a minimum. Depending on the nature of the transparency requirements, the process may 
involve methods such as monitoring and analysis, but it may also include, for example, gathering user 
feedback through questionnaires. The nature and scope of the process must be documented and detailed 
justification must be provided as to how the process contributes to meeting the objectives.
In addition, it must be documented how, as part of the process, the previously established transparency 
requirements are adjusted according to [TR-R-CD-CR-01].
Furthermore, the steps that come after adjustment of the transparency requirements must be described. 
In particular, it must be outlined how adjustments are initiated or made to the AI application (see 
[TR-R-CD-ME-02]).

85
Dimension: Transparency
[TR-R-CD-ME-02] Reviewing and maintaining transparency properties
 Requirements: Do | Pr | Te
A process is established that checks if the existing transparency properties of the AI application are maintained 
in accordance with the specifications in [TR-R-CD-CR-02] and, if necessary, initiates or makes corrections.
 – The nature and scope of the tests performed per assessment interval must be documented. If applicable, 
the methodology in [TR-R-UA-ME-05], [TR-R-UA-ME-07] and [TR-R-EX-ME-04] can be used. In particular, 
it is important to specify which test data sets are used and the reasons for using them. If test data sets are 
gathered during operation, these data sets should be favored in the assessment process over the test data 
used before the application was put into operation (appropriate handling of concept drift). Otherwise, 
the reason why these test data sets were not used must be provided.
 – How to proceed with the documentation from the assessment intervals and in particular the test results 
should be described. In doing so, a description must be provided regarding which steps are taken to restore 
the transparency properties if the checks yield insufficient test results.
6.4.4   Overall assessment
[TR-R-CD-OA] Overall assessment
Requirement: Do
It must be demonstrated that processes have been established to monitor external factors and regularly review 
the AI application. These processes must meet the requirements in [TR-R-CD-CR-01] and [TR-R-CD-CR-02].
If not all requirements specified in [TR-R-CD-CR-01] and [TR-R-CD-CR-02] are met, the deviations must be 
documented. This also applies to requirements that have only been partially met, e.g., where the criteria have 
not or not always been met.
Summary
[TR-S] Summary of the dimension
Requirement: Do
If there is a medium or high protection requirement for this dimension, documentation must be prepared 
for the remaining residual risks. First of all, the residual risks from the various risk areas in this dimension 
are summarized. Subsequently, and taking into account the protection requirement, the identified residual 
risks are collectively assessed as negligible, non-negligible (but acceptable) or unacceptable. The result of the 
analysis must be explained.
If risks or measures under this dimension have been identified as having potentially negative effects on other 
dimensions, such as reliability or security, they must be documented.
A conclusion must be made about the dimension that includes the assessment of residual risks.

`;