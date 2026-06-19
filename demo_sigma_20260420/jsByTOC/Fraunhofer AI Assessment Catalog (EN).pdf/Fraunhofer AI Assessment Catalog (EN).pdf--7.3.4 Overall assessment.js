var toc_content = `107
Dimension: Reliability
7.3.3.4  Measures for operation
[RE-R-IM-ME-08] Monitoring of input and output data
Requirements: Do | Te
The existing measures for monitoring input and output data (see [RE-R-RO-ME-07] and [RE-R-RO-ME-08]) 
should be evaluated with respect to their suitability for detecting potential error sources on the basis of the 
OOD data set from [RE-R-IM-ME-01]. These measures can be supplemented at model level by additional pre-
processing, post-processing and monitoring procedures71. The findings and adjustments must be documented.
7.3.4  Overall assessment
[RE-R-IM-OA] Overall assessment
Requirement: Do
Considering the testing performed and documented in this risk area, it must be demonstrated that the 
[RE-R-IM-CR-01] and [RE-R-IM-CR-03] criteria are met. Where measures complement each other, it must be 
demonstrated that the risk of correlated failure of these measures can be considered manageable.
Furthermore, a table overview should be available that assigns corresponding mitigation strategies to the 
detection mechanisms for intercepting errors from this risk area. If necessary, reference can also be made 
to [S-R-FS-ME-07]. It must be demonstrated that this assignment is consistent with the risk analysis and 
objectives defined in [S-R-FS-RI-01] and meets the requirements in [RE-R-IM-CR-02].
It must be documented if the planned detection measures are not feasible or are not sufficient to meet the 
criteria in this risk area. The problems that cannot be addressed here can be re-examined in the Risk area: 
functional safety (FS) and the residual risk can be considered in the overall cross-dimensional assessment.
71  For example, MetaSeg could be used for segmentation tasks, see: Rottmann, M. et. al. (November 2018). Prediction Error 
Meta Classification in Semantic Segmentation: Detection via Aggregated Dispersion Measures of Softmax Probabilities. Cornell University.  
https://arxiv.org/pdf/1811.00648.pdf (last accessed: 06/22/2021).

108
Dimension: Reliability
7.4  Risk area: uncertainty estimation (UE)
The uncertainty estimation risk area is designed to ensure that the AI application makes an accurate statement 
about the confidence of its outputs when required. Performing a realistic uncertainty estimation through the 
AI component enables to predict the risk of further processing its output and to implement an application-
specific response. Similarly to the actual outputs of an AI component, the confidences are subject to 
misjudgments, so the resulting risk must be assessed.
Self-estimation of uncertainty through the AI component is not required for all application areas. However, 
it may be helpful or even necessary for more complex applications, particularly in an open-world context. 
Even uncertainty estimations containing errors can, in some cases, be subsequently corrected and mapped 
to realistic variables by means of calibration. A (correctly) calibrated uncertainty estimation can help detect 
unusual situations early on or even signal a departure from the application area. There are a number of methods 
that already intrinsically include uncertainty estimation (e.g., the probabilistic output of a DNN-based image 
classification), but these are usually poorly calibrated. Especially in the case of neural networks, it is common for 
intrinsic uncertainty estimation to significantly underestimate risks and specify high confidences even in cases 
of blatant misclassification. For this risk area, it therefore important to first assess to what extent an uncertainty 
estimation is needed for the AI application in question and the quality level required.
Example: The quality of the end product of an automated production line can be determined either by laborious 
quality control by experts or by an AI application using suitable sensor data. While the quality control method 
is costly, the AI-based method provides less reliable assessments. An uncertainty estimation can increase the 
benefit of the AI application for quality control by identifying products where further manual inspection could be 
worthwhile. The level of uncertainty estimation should be good enough to ensure that there are not too many 
rejected products and that not too much testing is required.
7.4.1  Risk analysis and objectives
[RE-R-UE-RI-01] Defining and illustrating an estimation of uncertainty
Requirement: Do
Risk analysis: It must be examined how the residual risk resulting from the preceding risk areas can be 
further mitigated in terms of reliability by performing a realistic uncertainty estimation. In doing so, the specific 
use case must be addressed. If uncertainty estimation is used to intercept model-level errors, as defined in 
[RE-R-IM-ME-06], this analysis should also take into account the follow-up responses that are supposed to 
start when high uncertainty is indicated. If an uncertainty estimation is not considered necessary or feasible in 
the application context in question, detailed justification must be provided.
Objectives: Based on the risk analysis, it must be determined whether an uncertainty estimation should be 
implemented in the AI application. If this is the case, formal and qualitative objectives must be set to ensure 
that the planned uncertainty estimation contributes to mitigating existing residual risks in relation to reliability.
 – In particular, the formal objectives should specify the output of the uncertainty estimation, e.g., whether 
it is categorical or probabilistic. The former refers to categorization as discrete levels (certain/uncertain or 
low/medium/high), while the probabilistic approach is supposed to make probability statements that are as 
accurate as possible about the failure of the AI component for given input.

`;