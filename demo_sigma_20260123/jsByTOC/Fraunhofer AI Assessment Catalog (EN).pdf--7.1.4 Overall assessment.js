var toc_content = `95
Dimension: Reliability
7.1.3.3  Embedding
[RE-R-SC-ME-06] AI application real-world tests
Requirements: Do | Pr | Te
Extensive real-world tests of the AI component (already embedded and functioning as an AI application) 
must be performed and documented. This involves determining the relevant performance metrics according 
to [RE-R-SC-CR-01] and also checking embedding-specific requirements such as runtime metrics and input 
distributions changed by the embedding. (The performance of the AI application, with a particular focus on 
the application boundary, is tested in the Risk area: robustness (RO), see [RE-R-RO-ME-06].)
 – For real-world tests, it is particularly important to ensure that all regular application situations have been 
covered. If possible, this can be achieved by testing all possible parameter combinations under real-world 
conditions. Taking the example of a system for sorting apples, this would involve testing all (categorical) 
combinations of color, variety and size. If it can be demonstrated that complete coverage is not possible, 
a suitable option must be chosen instead that illustratively covers the most important cases. This selection 
must be justified in the context of the application.
Model weaknesses uncovered during real tests must be documented along with the corrective measures taken 
and lessons learned.
7.1.3.4  Measures for operation
[RE-R-SC-ME-07] Supplement to open-world coverage
Requirements: Do | Pr
If the AI application is used in an open-world context or complete coverage of the application area according 
to [RE-R-SC-CR-02] cannot be guaranteed, a documented process must exist for the quality control of 
new input data during regular operation. This supplements the continuous testing procedures from [RE-R-
RO-ME-07]. Furthermore, it must be documented how the findings from this process are used to enable 
continuous adaptation and improvement of the AI application (see, for example, [RE-R-CD-ME-02] as well 
as federated learning approaches in [DP-R-PD-ME-08]). If data is logged in this process, the Dimension: 
Data Protection (DP) must be taken into account.
7.1.4  Overall assessment
[RE-R-SC-OA] Overall assessment
Requirement: Do
With reference to the measures taken, it must be demonstrated that the performance metrics defined in 
[RE-R-SC-CR-01] and the coverage metrics defined in [RE-R-SC-CR-02] for the application domain are within 
each of the target intervals defined there. Furthermore, justification must be provided that the data quality 
requirements defined in [RE-R-SC-CR-03] are met.
If not all requirements specified in [RE-R-SC-CR-01] to [RE-R-SC-CR-03] are met, the deviations must be 
documented. This also applies to requirements that have only been partially met, e.g., where the criteria have 
not or not always been met.

96
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