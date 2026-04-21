var toc_content = `46
Dimension: Fairness
4.2.3  Measures
4.2.3.1  Data
[FN-R-CD-ME-01] Monitoring training data
Requirements: Do | Pr
There is a process for checking the training data newly collected during operation to ensure it is free from 
undesirable bias before it is used. To this end, the measures chosen in [FN-R-FN-CR-02] as well as the intervals 
specified in [FN-R-CD-CR-02] are applied. The process is described in documentation.
4.2.3.2  AI component
There are no planned measures for this category.
4.2.3.3  Embedding
There are no planned measures for this category.
4.2.3.4  Measures for operation
[FN-R-CD-ME-02] Application monitoring
Requirements: Do | Pr | Te
There is a documented process for ensuring that AI application outputs are checked for conformity 
with the chosen fairness definitions from [FN-R-FN-CR-01] at the intervals specified in [FN-R-CD-CR-02]. It 
must also be clear during operation or at test times which sensitive characteristics exist and which groups are 
potentially disadvantaged.
[FN-R-CD-ME-03] Application improvement
Requirements: Do | Pr
There is a process in place for improving the ML model and AI application when unfair behavior of the 
AI application is detected or a new type of discrimination is identified.
The application improvements should be recorded in the documentation and always be traceable. 
This improvement must not involve overfitting which would cause other affected parties to be disadvantaged. 
Thus, this documentation should also demonstrate how it is ensured that the improvements are fair and do 
not create new, unjustified disadvantageous treatment.
[FN-R-CD-ME-04] Monitoring external factors
Requirements: Do | Pr
There is a process for monitoring external factors relevant to the fairness of the AI application. For example, 
new forms of unfair treatment of (groups of) individuals may occur and be reflected in the data, or changes in 
the law may be adopted. To manage this, there are persons assigned the task of monitoring and assessing the 
development of external conditions and, if it is considered necessary, initiating changes to the AI application.

47
Dimension: Fairness
4.2.4  Overall assessment
[FN-R-CD-OA] Overall assessment
Requirement: Do
It is demonstrated that a process has been established to regularly review the AI application as well as the 
database that meets the criteria in [FN-R-CD-CR-01] and [FN-R-CD-CR-02].
If not all requirements specified in [FN-R-CD-CR-01] and [FN-R-CD-CR-02] are met, the deviations must be 
documented. This also applies to requirements that have only been partially met, e.g., where the criteria have 
not or not always been met.
Summary
[FN-S] Summary of the dimension
Requirement: Do
If there is a medium or high protection requirement for this dimension, documentation should be prepared 
for the remaining residual risks. First of all, the residual risks from the various risk areas in this dimension 
are summarized. Subsequently, and taking into account the protection requirement, the identified residual 
risks are collectively assessed as negligible, non-negligible (but acceptable) or unacceptable. The result of the 
analysis must be explained.
If risks or measures under this dimension have been identified as having potentially negative effects on other 
dimensions, such as reliability, they must be documented.
A conclusion must be made about the dimension that includes the assessment of residual risks.

`;