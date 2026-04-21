var toc_content = `114
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

`;