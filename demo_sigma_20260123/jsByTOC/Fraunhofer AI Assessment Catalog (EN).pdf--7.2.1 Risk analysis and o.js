var toc_content = `96
Dimension: Reliability
7.2  Risk area: robustness (RO)
The robustness risk area accounts for risks that arise from a minor change or disturbance to a use case that 
the AI application is expected to be able to handle without error under normal circumstances. Different types 
of such deviations exist, such as image distortion, sensor noise or failure, or imprecise data collection such as 
measurement or typing errors. A special class of errors that also falls into this risk area are adversarial examples. 
These are characterized by a slight deviation from input data that can be processed correctly, but cause a major 
deviation from the expected result. Adversarial examples may be deliberately designed as an attack (referred 
to as an “adversarial attack” in this case), but are generally an expression of model weaknesses that also carry 
significance beyond attack scenarios.
The deviations in the input data examined here all stay within the application boundary and thus the 
AI component is still meant to correctly process the input despite the deviation. This application boundary must 
be specified. To do this, possible disturbances, including common data perturbations must first be recorded and 
potential damages estimated. Based on this, a check can be performed regarding whether the overall risk of each 
disturbance is acceptable in view of the application context.
The purpose of the measures designated for this risk area is to improve the robustness of the AI component 
against the deviations or perturbations that can occur within the application domain and to demonstrate 
that error-free processing of these deviating inputs has been achieved as far as possible. This clearly separates 
robustness from the Risk area: intercepting errors at model level (IM), which deals with disturbances and 
inputs that, if they occur, would not be expected to lead to any meaningful processing by the AI application, or 
for which processing could only be performed with an unacceptable level of risk. In the Risk area: intercepting 
errors at model level (IM), the measures are aimed at detecting these inputs instead of ensuring that they are 
processed properly by the AI component. In both risk areas mentioned, the measures listed are exclusively related 
to the AI component. In addition, there is the option of intercepting perturbations in the input space through 
measures that do not involve the AI component, but concern its embedding instead (e.g., redundant sensor 
design or hardware monitoring). These measures can be found in the Dimension: Safety and Security (S).
7.2.1  Risk analysis and objectives
[RE-R-RO-RI-01] Risk assessment and definition of the application boundary
Requirement: Do
Documentation should be available that addresses the following points in a qualitative and conceptual manner:
Risk assessment: The types of disturbances that can be expected given the application domain specified in 
[RE-R-SC-RI-01] are examined.
 
Examples of possible disturbances are:
 – Expected sensor noise, e.g., from an optical sensor
 – Delayed data transfer or lower data quality (e.g., for real-time applications)
 ·
For example, audio transmission in an AI application for live translation
 – Distortion or other manipulation of input data
 ·
Typically changed object position during object detection, for example if a target object moves out of 
place or is not optimally positioned
 – Expected change in environmental conditions
 ·
If the AI application is used outside controlled environments, external parameters such as weather may 
change.

97
Dimension: Reliability
 – Adversarial examples (e.g., in image or audio data)
 ·
This is especially relevant for AI applications with a publicly accessible interface, including both public 
online use (e.g., free service offering) and an application positioned in public space (e.g., surveillance 
camera)
 
The list is a selection of examples and does not claim to be exhaustive. It should be explored which other types 
of disturbances can occur in the application domain. Where possible, these disturbances should be formalized 
and purposefully used in later tests. The Risk area: functional safety (FS) is referenced again here. This 
considers possible classical, AI-independent error sources, which can be handled using conventional algorithms 
or measures, such as defective pixels as sensor errors. If these error sources are also dealt with using AI-specific 
methods, these methods and possible overlaps with the Dimension: Safety and Security (S) must also be 
documented here.
 
For each type of disturbance identified, it is necessary to estimate the frequency and intensity of its potential 
occurrence. Based on this, it is necessary to analyze the possibility of a erroneous prediction or failure of the 
AI component for each identified disturbance depending on the intensity, and the potential resulting damage 
must be estimated.
Defining the application boundary: The application boundary is defined based on the risk assessment. 
The application boundary describes the crossover of the application domain into input areas for which 
no meaningful processing is expected. This periphery is defined in terms of expected disturbances and 
describes the disturbance level up to which the AI component should correctly process input. In particular, 
input data (possibly containing perturbations) should only be processed by the AI component if this input 
data allows the AI application to be operated safely. This is why the risk assessments from the Dimension: 
Safety and Security (S) should also be considered during the process of defining the application boundary. 
Using this application boundary, it should be possible to associate which of the previously specified 
disturbances are covered to which extent in the Risk area: robustness (RO) (within the application boundary) 
and which ones are beyond this in the Risk area: intercepting errors at model level (IM) (outside the 
application boundary).
Objectives: For disturbances that are within the application boundary, objectives are set in relation to the 
AI component. If these are achieved, the remaining residual risk is deemed acceptable. The objectives may 
differ according to the nature and level of disturbance. In particular, they should align with the requirements 
and measures in the Dimension: Safety and Security (S), so that the AI application is sufficiently 
safeguarded within the application boundary through combined robustness, safety and security measures. This 
is discussed in the overall cross-dimensional assessment.
 
Example: A facial recognition model is deceived by a photo it is shown. The AI application could intercept this 
by taking dynamics such as blinking into account. A measure from the Dimension: Safety and Security (S), 
however, would be to also use an infrared camera or a lidar system.

98
Dimension: Reliability
7.2.2  Criteria for achieving objectives
The following lists methods for quantifying the robustness and the application boundary, which make it 
objectively verifiable whether the set objectives are achieved and the identified risks are acceptable.
[RE-R-RO-CR-01] Quantification of the application boundary
Requirement: Do
The application boundary described in [RE-R-RO-RI-01] is – as far as possible – formalized, for example 
as a degree of occlusion for pedestrian detection or as a signal-to-noise ratio for conversational AI. The 
application boundary may be defined, as described in [RE-R-RO-RI-01], in terms of different expected 
disturbances and can encompass a quantitative grading of different disturbance levels. For example, if different 
target intervals related to performance of the AI application are provided for different disturbance levels.
As a minimum, qualitative or semantic requirements should be specified for the input data to further 
characterize the application boundary.
[RE-R-RO-CR-02] Quantification of robustness
Requirement: Do
The robustness of the AI component in relation to the boundary of the application area must be determined 
using mathematical-statistical metrics (compare [RE-R-SC-CR-01]). Documentation and justification must be 
provided regarding which of the metrics are subsequently used to evaluate the robustness.
Target intervals are defined for the specified mathematical-statistical metrics for each type of disturbance 
within the application boundary. The robustness of the AI component to these disturbances can then be 
objectively verified by meeting the target interval in a test adapted to the specific disturbance. The target 
intervals may differ depending on the disturbance risk and level, but justification must be provided as to why 
the choice of target intervals is appropriate.
[RE-R-RO-CR-03] Coverage of the application boundary
Requirement: Do
If possible, the coverage of the application boundary is formalized and quantified. The criteria in [RE-R-
SC-CR-02] should be used as a starting point for this, especially if data point pertubations are favored or 
described by factors that are not fully covered in the Risk area: reliability in standard cases (SC). In 
addition, the application boundary can be graded differently depending on the type and level of disturbance 
(see [RE-R-RO-CR-01]). For example, if the input space can be formalized as a low-dimensional vector space, 
the simplest coverage metric to check is whether each cell of a grid in the application boundary contains 
data points.
Application-specific target intervals for the coverage of the application boundary must be defined.
7.2.3  Measures
7.2.3.1  Data
[RE-R-RO-ME-01] Data for testing robustness
Requirement: Do
Documentation should be available describing test data properties and selection according to the following 
structure:
The choice of data sets for evaluating the AI component in relation to possible disturbances must be justified. 
It must be demonstrated how the chosen data sets relate to the specific requirements of the application 

`;