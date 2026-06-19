var toc_content = `113
Dimension: Reliability
It is necessary to define and document (quantitative) criteria (e.g., thresholds regarding performance) that 
describe in which scenarios re-evaluation of the AI application is required, possibly combined with retraining.
Furthermore, it is necessary to develop and document criteria for assessing the quality of procedures used to 
record new application and error cases as well as how they are handled.
It must be demonstrated that the chosen criteria are consistent with the [RE-R-CD-RI-01] objectives.
7.5.3  Measures
7.5.3.1  Data
There are no planned measures for this category.
7.5.3.2  AI component
There are no planned measures for this category.
7.5.3.3  Embedding
There are no planned measures for this category.
7.5.3.4  Measures for operation
[RE-R-CD-ME-01] Avoiding catastrophic forgetting on new training data
Requirement: Pr
A process must be established which – when new training data is used, e.g., when incremental training of 
an AI component takes place over multiple cycles – checks that the incremental training steps do not lead to 
performance losses on the previous database, provided that it is still relevant to the application.
The new training data and model versions should be saved after each incremental training step. Furthermore, 
the distribution of the new training data should be analyzed and the AI application should be tested on both 
the new and old data. It is possible to use additional measures such as a linear combination of outputs from 
the different model versions to counteract previously learned patterns/models being forgotten.
The exact procedures of the established process are documented.
[RE-R-CD-ME-02] Relearning with newly available training data
Requirement: Pr
A process must be established that initiates systematic retraining/relearning of the model based on 
[RE-R‑CD‑CR-01] when new training data is available (e.g., due to the need to keep the data constantly 
up to date or due to new data related to concept drift), while complying with all training and testing 
requirements of this catalog.
The need for new categories or data collection procedures must be reviewed, documented and implemented 
each time new data is collected.
The exact procedures of the established process are documented.

114
Dimension: Reliability
[RE-R-CD-ME-03] Regular review of the AI application
Requirements: Do | Pr
There must be a procedure for ensuring periodic model monitoring with respect to reliability according to the 
assessment intervals defined in [RE-R-CD-CR-01]. The process can be a combination of review by humans at 
regular intervals, e.g., by the user or IT staff, and continuous automatic monitoring.
 – As part of this review, which can be supplemented by [RE-R-IM-ME-08] if required, it should also be 
examined whether the distribution of the input data changes during operation. To detect changes, either 
related to the input data or to a performance metric for instance, an (online) drift detection algorithm can 
be implemented depending on the complexity of the variable, such as ADWIN (adaptive windowing)77. 
The choice of method must be justified.
 – Critical and new input data that represents concept drifts, for example, is stored permanently with the aim 
of improving reliability in the future, for example through further training or improving detection measures 
(see Risk area: intercepting errors at model level (IM)). This data must be stored in accordance with 
the Dimension: Data Protection (DP).
 – If the reliability targets are no longer met or if there are significant changes in the data basis, this must 
be communicated to the user or affected person and, if necessary, a process must be initiated to update 
or shut down the AI application in a controlled manner. It must be ensured that all relevant scenarios are 
covered in the Risk area: intercepting errors at model level (IM) and in the Risk area: functional 
safety (FS). Furthermore, the measures in the Risk area: control of dynamics (CD) in the safety and 
security dimension must be taken into account.
 
The process and the nature and scope of the reviews must be documented.
7.5.4  Overall assessment
[RE-R-CD-OA] Overall assessment
Requirement: Do
It is demonstrated that a process has been established to regularly review the AI application that meets the 
criteria in [RE-R-CD-CR-01].
If not all requirements specified in [RE-R-CD-CR-01] are met, the deviations to the requirements must be 
documented. This also applies to requirements that have only been partially met, e.g., where the criteria have 
not or not always been met.
Summary
[RE-S] Summary of the dimension
Requirement: Do
If there is a medium or high protection requirement for this dimension, documentation must be prepared 
for the remaining residual risks. First of all, the residual risks from the various risk areas in this dimension are 
summarized. Subsequently, and taking into account the protection requirement, the identified residual risks 
are collectively assessed as negligible, non-negligible (but acceptable) or unacceptable. This analysis should 
specifically assess the impact of measures from the safety and security dimension in terms of whether they 
help mitigate or prevent AI component errors. The result of the analysis must be explained. In addition, if 
trade-offs exist between the Risk area: reliability in standard cases (SC) and Risk area: uncertainty 
estimation (UE), justification of the selected prioritization must be provided.
77  Bifet, A. and Gavalda, R. (2007). Learning from time-changing data with adaptive windowing. In: Proceedings of the 2007 SIAM International 
Conference on Data Mining, SIAM, pp 443–448. https://doi.org/10.1137/1.9781611972771.42 (last accessed: 07/01/2021)

`;