var toc_content = `108
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

109
Dimension: Reliability
7.4.2  Criteria for achieving objectives
The risk analysis produces one or more primary requirements that the uncertainty estimation must fulfill. These 
relate to its quality, and in a sense the reliability of the uncertainty estimation itself, that can be measured 
using a suitable (calibration) metric. In this context, it is important to consider that uncertainty estimations may 
be subject to bias, causing incorrect uncertainty estimations to accumulate in certain use cases. For example, 
a system for detecting people might overestimate the confidence in detecting people wearing bright clothes, 
but generally still meet the quality requirements for the uncertainty estimation. It is important to consider ways to 
measure these irregularities and minimize the resulting risks.
[RE-R-UE-CR-01] Documentation of uncertainty metrics and uncertainty estimation quality
Requirement: Do
At least one metric for assessing the quality of the uncertainty estimation and target intervals must be 
specified. The choice should correspond to the targets described in [RE-R-UE-RI-01] and must be justified. 
One of the options listed below should be chosen as the metric. If a different metric is used, it must be 
described in detail and this alternative choice must be justified.
In addition, semantic dimensions of the use case can be specified along which the quality of the uncertainty 
estimation should be constant. For example, if it is known that the model performance is low for a certain 
subset of the data, the uncertainty estimation should also reflect this.  
Example: If facial recognition on images of people of color has an increased error rate, then the uncertainty 
estimation should be increased in line with this. These semantic dimensions must be specifically examined in 
subsequent tests to avoid problems such as incorrect uncertainty estimations accumulating for certain cases.
Types of evaluation for uncertainty metrics discussed in the literature include:
The negative log-likelihood evaluates a probabilistic output of the AI component and accumulates – for each 
example of the test data set – the “probability” of drawing the associated correct label under the predicted 
probability distribution.
For classifications, a popular choice is the Brier score, which calculates the squared Euclidean distance of the 
confidence output on the simplex (the interval [0,1] in the case of binary classification) to the label considered 
correct as the corner of the simplex (in binary increments of {0,1}) and accumulates it for the test data set.
The expected calibration error (ECE) represents whether statements with e.g., 90 percent confidence are 
also correct in 90 percent of the cases. This method could also be adapted to categorical uncertainty scores, 
provided that these correspond to probability intervals.
For categorical uncertainty statements, usually a heuristic evaluation scheme is needed that should take into 
account the specific risks and be documented in detail.
7.4.3  Measures
7.4.3.1  Data
[RE-R-UE-ME-01] Choice of a data set annotated with uncertainties
Requirement: Do
In some cases, uncertainty can already be a property of the ground truth data set. For example, several 
experts may provide (slightly) different labels for segmenting a medical image data set, or there may be 
intrinsic (referred to as aleatoric) uncertainty due to the aggregation of complex or large data sets, e.g., 
regarding averaged data points and their associated standard deviation. If a data set is available that contains 
information about the uncertainty of labels, it must be documented whether and in what way or to what 

`;