var toc_content = `109
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