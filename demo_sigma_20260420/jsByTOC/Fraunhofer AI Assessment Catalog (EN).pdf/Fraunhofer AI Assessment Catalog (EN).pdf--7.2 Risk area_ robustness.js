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

`;