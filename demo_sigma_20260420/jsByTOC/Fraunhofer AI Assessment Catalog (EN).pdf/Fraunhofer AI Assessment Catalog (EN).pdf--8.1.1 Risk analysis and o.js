var toc_content = `120
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

121
Dimension: Safety and Security
Scope for intercepting errors through embedding: Justification should be provided for the scope of 
disturbances or errors and the input/output scenarios of the AI component to be intercepted by embedding 
methods, i.e., at the system level.
 – On the one hand, errors or failures of the AI application can be counteracted by intercepting input 
data that sits outside the application boundary defined in [RE-R-RO-RI-01].  
Example: The optical environment recognition of an autonomous device does not recognize glass as an 
obstacle. To avoid damage at the embedding level, pressure sensors could stop the movement of the device 
in case of resistance.  
The documentation of which input areas should be intercepted using methods from this risk area should 
be drawn up in accordance with the risk analysis in [RE-R-IM-RI-01] so that all relevant harmful input 
areas are covered. In particular, input data areas that are not related to the AI application or its application 
boundary, but that could still occur, should also be considered.
 – On the other hand, errors or faults can be intercepted that only arise as a result of embedding. However, 
this assessment catalog addresses the AI-specific risks of an AI application and does not have the intention 
or pretense to fully map out classic functional safety or information security. This is why, in relation to 
embedding, only the errors or malfunctions of the embedding that are directly related to the AI component 
or the interpretation of its output are considered in this documentation. This does not include, for 
example, intercepting hardware faults or avoiding the operational limits of the embedding from being 
exceeded, unless this is related to the function of the AI component. However, intercepting outputs of the 
AI component that would compromise functional safety if processed further by the embedding is explicitly 
included in the scope of this risk area. An example of this type of threat is that an AI component for object 
detection outputs so many detections that the components of the embedding cannot handle them in 
a reasonable amount of time. It must be determined which output scenarios should be intercepted by the 
embedding on the basis of the risk analysis.
 
It must be explained for which areas fault detection is not considered necessary. Furthermore, justification 
should be provided that sufficient risk mitigation is possible for the different kinds of disturbances, errors or 
input or output scenarios that are to be detected.
Objectives: Qualitative objectives are set for the embedding to safeguard the AI application with regard to 
functional safety based on the risk analysis of this risk area and also considering [RE-R-SC-RI-01], [RE-R-RO-
RI-01] and [RE-R-IM-RI-01]. Firstly, it is necessary to roughly describe with which approach the scopes defined 
in the previous section (of errors, disturbances, input/output scenarios) are to be intercepted. Secondly, it 
should be outlined to what extent and with which fundamental approach the embedding threats identified 
as relevant as well as the errors intercepted are to be mitigated or eliminated. Potential follow-up responses 
to the detection mechanisms from the Risk area: intercepting errors at model level (IM) must also be 
addressed. In particular, based on the identified risks, a broad classification should be provided detailing in 
which threat scenarios a fault-tolerant approach (maintenance of basic functionality) is desirable, and at what 
point the transition to a fail-safe state (safe but dysfunctional state) should take place.
8.1.2  Criteria for achieving objectives
Based on the identified threats for this risk area, appropriate safeguard measures must be taken that aim to 
reduce the risks covered here to an acceptable level. In order to be able to objectively check during the final 
assessment of the measures if these risks have been successfully mitigated, the objectives described in [S-R-
FS-RI-01] must be translated into quantitative criteria. For this purpose, the desired risk level that is considered 
acceptable for the application context in question must be specified. In addition, requirements for the test data 
as well as the mitigation strategies must be specified.

`;