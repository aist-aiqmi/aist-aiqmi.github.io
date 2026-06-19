var toc_content = `119
Dimension: Safety and Security
8.1  Risk area: functional safety (FS)
Functional safety is part of the safety domain that is concerned with protecting the outside world from threats 
caused by the AI application. In this respect, the assessment catalog focuses on AI-specific accident risks79 in the 
sense of unintended and harmful effects of the AI application that are facilitated or even caused by defective 
design. In particular, the functional safety risk area is designed to reduce to an acceptable level the risk of bodily 
injury or material damage in the event of a malfunction or even failure of the AI application.
As this risk area covers the consequences of malfunction or failure of the AI application, it addresses a risk class 
that is also dealt with in the Dimension: Reliability (RE). The measures in the reliability dimension have an 
impact on various aspects including the avoidance of malfunctions (Risk area: robustness (RO)) and detection 
of errors (Risk area: intercepting errors at model level (IM), Risk area: uncertainty estimation (UE)) 
through methods at ML model level. Functional safety continues in the vein of these measures in that it helps to 
detect errors or threats by using methods at the embedding level and deploys (partly conventional) mitigation 
strategies at the embedding level to ensure that safety is maintained in the case of detected threats.
Typical threats in the context of functional safety are those that lead to minor to severe injury, death or property 
damage and result from incorrect behavior or failure of the AI application. One possible cause is incorrect or 
harmful inputs outside the application domain. Problematic inputs can be detected at the embedding level in 
many cases. For example, an error message can be implemented to indicate when the camera of an image-
processing AI application has malfunctioned. This would prevent the AI application from processing interfering 
signals, which could possibly lead to errors.
However, for AI applications that process complex input data, conventional methods are often not sufficient 
to detect harmful inputs. This is especially true in the case of open-world applications such as speech recognition 
where conventional methods would not be able to detect if a user is operating the AI application in the wrong 
language. For these scenarios, the Risk area: intercepting errors at model level (IM) of the reliability 
dimension covers model-level detection mechanisms. This allows the AI component to intercept problematic 
input data that would otherwise lead to unacceptable risk in terms of bodily injury, property damage or financial 
damage if (further) processing was not obstructed. The procedure in the Risk area: intercepting errors at 
model level (IM) of the reliability dimension must be aligned with the implementation of possible (additional) 
conventional function monitoring methods in this risk area. In particular, follow-up responses (mitigation 
strategies) must be established if errors or threats are detected at model level.
Another approach for intercepting errors or detecting threats is to perform a sanity check of the AI component’s 
outputs before they are processed further by the surrounding software modules. In the case of an AI application 
used to detect objects in video footage, for example, the current segmentation mask could be compared with 
those of previous frames and checked for significant deviations. Furthermore, it is important to ensure that errors 
are not caused by the embedding itself, e.g., when interpreting the output of the AI component. Appropriate 
follow-up responses (mitigation strategies) must also be established in the event that errors or threats are 
detected at the system level.
79  The concept of safety risks in the context of Artificial Intelligence in this risk area is based on the definition of accident risk in the paper: 
Amodei, D. et al. (2016). Concrete Problems in AI Safety. arXiv: 1606.06565 https://arxiv.org/abs/1606.06565 (last accessed: 06/30/2021)

120
Dimension: Safety and Security
If an error occurs or a threat is detected that only results in an isolated or short-term failure with manageable 
risk, the subsequent mitigation strategy should work toward fault tolerance. For this purpose, a safety function 
is usually triggered to ensure that the AI application is protected during the isolated failure while maintaining 
rudimentary functionality. Once the error is fixed, the AI application can return to operating as usual without 
much effort. For example, if an AI component for continuous environment recognition fails, the data no longer 
being supplied could be approximated for a short period using recently created environment descriptions to 
briefly bypass the failure.
However, the AI application must be put into a fail-safe state if an error occurs or a threat is detected that would 
lead to a sequential failure or even result in the loss of the overall functionality of the AI application under 
uncontrollable risk. Fail-safe means transitioning to a safe state where the top priority is to minimize the damage 
to the lowest possible level. The fail-safe state may deactivate the intended function of the AI application and, in 
extreme cases, even willfully destroy the AI application or the larger surrounding system. In the above example 
of environment recognition, if the AI application cannot be restored in a timely manner due to a sensor failure, 
for instance, the AI application could be transferred to a fail-safe state by giving control to the user (in this case, 
the AI application would be dysfunctional). In human-out-of-the-loop systems, which have no direct user, the 
transition to the fail-safe state must be designed based on the type and operating state of the AI application. 
In the case of AI-based environment recognition in a robot vacuum cleaner, for example, a fail-safe state can be 
achieved simply by switching off the application. However, if the environment recognition is linked to the control 
of a moving driverless vehicle, a fail-safe state might need to include the gradual reduction of speed and the 
sending of warning signals.
Aside from the scenario of a faulty function or even a failure of the AI application, safety risks can arise even 
when the AI application is operating correctly, for example due to external factors. Taking the AI-based control of 
an autonomous vehicle as an example, a human could suddenly run into the road. If the AI application correctly 
detects this person, there may still be a safety threat if, for example, the braking distance between the vehicle 
and detected human is too long. However, the purpose of functional safety is only to mitigate the types of risks 
and threats that arise from a malfunction of the AI application. For example, the risk of collision with people or 
objects correctly detected by the AI application is not a functional threat and is therefore not the focus of the 
functional safety risk area.
8.1.1  Risk analysis and objectives
[S-R-FS-RI-01] Risk analysis and objectives
Requirement: Do
Risk analysis: Threats or potential damage due to low reliability for regular inputs (see [RE-R-SC-RI-01]) or 
a malfunction in case of emerging disturbances (see [RE-R-RO-RI-01]) have already been analyzed and their 
probability of occurrence estimated. The risk analyses specified are relevant to the objective of this risk area, 
but do not need to be reiterated again here.  
In addition, the risk of embedding malfunctions, which were not considered in the Dimension: 
Reliability (RE), contribute to the safety of the AI application. It is necessary to analyze which AI-specific 
factors may lead to a malfunction of the embedding (among other aspects, it must be clarified whether 
certain outputs of the AI component may cause errors during further processing by the embedding), what 
damage may arise as a result and what the probability of this occurring is. User behavior (that is foreseeable) 
should also be taken into account when investigating possible causes of a malfunction or failure in the 
AI application, at least including:
 – foreseeable misuse of the application
 – unexpected start of the application 
(based on ISO 10218-1 4)

`;