var toc_content = `125
Dimension: Safety and Security
8.1.3.2  AI component
[S-R-FS-ME-03] Role of the AI component
Requirement: Do
It must be demonstrated to what extent the architecture and design of the AI component contribute to 
the functional safety of the AI application, in particular to the prevention of accidents. If applicable, it is 
necessary to describe whether the learning function (or the creation of the learning function) takes into 
account accidents and injuries with negative feedback. If this has already been described in the Dimension: 
Reliability (RE), reference can be made to the relevant documentation.
8.1.3.3  Embedding
[S-R-FS-ME-04] Embedding design
Requirement: Do
Documentation should be available detailing the extent to which the design and architecture of the 
embedding (e.g., through redundant design or the integration of classic assistance systems) contribute to the 
prevention or even bypassing of a malfunction and thus to the strengthening of functional safety.
As this assessment catalog primarily addresses the AI-specific risks of the AI application and does not have the 
intention or pretense to fully map out existing conventional standards (on functional safety, product safety, 
information security, etc.), the documentation should focus on aspects of the embedding that are related to 
the further processing or interpretation of the output of the AI component. Reference should be made to the 
current classic norms and standards when dealing with the risks that are not specific to AI.
[S-R-FS-ME-05] Intercepting harmful input data
Requirements: Do | Te
It should be explained in a transparent way which methods at the embedding level are used to detect harmful 
inputs outside the application boundary that would represent an unacceptable safety risk if processed. 
For example, the malfunction of a sensor is a typical error mode that can be detected by conventional 
methods. In the case of image data, harmful inputs could be detected and intercepted by measuring defective 
pixels, for example.
 – If methods are implemented at embedding level to intercept harmful inputs in addition to detection 
mechanisms at model level, these must be aligned with the approach in the Risk area: intercepting 
errors at model level (IM) of the reliability dimension. Furthermore, it must be demonstrated that all 
input areas for which embedding level detection is envisaged in [RE-R-IM-RI-01] are covered effectively by 
the measures presented here.
The effectiveness of the methods for intercepting errors or detecting threats must be demonstrated in suitable 
tests. The tests must be documented and their choice justified. If there is no separate test for this measure, 
it must be demonstrated that the methods have already been adequately examined through [S-R-FS-ME-09], 
[S-R-FS-ME-11] or the [S-R-FS-ME-13] final real test.
An explanation must be provided regarding the extent to which the method(s) described contribute to 
fulfilling the criterion [S-R-FS-CR-04].
[S-R-FS-ME-06] Intercepting errors during interpretation of the AI component output
Requirements: Do | Te
It should be explained in a transparent way which methods at the embedding level are used to detect 
outputs of the AI component that would represent an unacceptable safety risk in the event of further 
processing/interpretation by the embedding. For example, an AI-based collision avoidance system could 
provide an additional safeguard for the interpretation of the AI component by comparing the results of 

126
Dimension: Safety and Security
distance and speed sensors separately from the output of the AI component or by checking the output of the 
AI component for consistency (e.g., in terms of time).
The effectiveness of these measures at embedding level for intercepting errors or detecting threats must be 
demonstrated in suitable tests. The tests must be documented and their choice justified. If there is no separate 
test for the measure, it must be demonstrated that the measure has already been adequately examined 
through [S-R-FS-ME-09], [S-R-FS-ME-11] or the [S-R-FS-ME-13] final real-world test.
An explanation must be provided regarding the extent to which the method(s) described contribute to 
fulfilling the criterion [S-R-FS-CR-04].
[S-R-FS-ME-07] Choice of mitigation strategy
Once an error is intercepted or a threat scenario is detected by embedding methods or the model, a mitigation 
strategy must be deployed to ensure safety in this exceptional situation. The type of error, the operational and 
environmental state of the AI application and the associated risk situation determine whether the mitigation 
strategy contributes to the fault tolerance of the AI application in terms of bypassing the exceptional situation for 
a brief period while maintaining basic functionality, or whether the mitigation strategy transitions to a fail-safe 
state.  
Example: An object detection system in an autonomous car can temporarily override detections with an 
expected uncertainty so high that the position can no longer be reliably determined, if the last known (safe) 
distance to the object is big enough in relation to the car’s speed. Otherwise, it should brake immediately, 
for example.
Requirement: Do
The procedure (e.g., “by design” or depending on situation) and criteria used to determine which subsequent 
mitigation strategy is used to deal with an intercepted error or detected threat (by the embedding or the 
AI component itself) must be documented.
 – It must be demonstrated that the risks and consequences of a fault-tolerant approach have been 
adequately considered, taking into account the risk analyses [S-R-FS-RI-01] and [RE-R-IM-RI-01].
 – It is also necessary to demonstrate that the approach to selecting the subsequent mitigation strategy 
is consistent with the objectives defined in [S-R-FS-RI-01].
Justification must be provided that the described approach for choosing the mitigation strategy is appropriate 
for the particular application context and contributes to the functional safety of the AI application.
In accordance with [S-R-FS-CR-03], a table overview should be available that illustrates the subsequent 
mitigation strategy including its purpose (i.e., fault tolerance or fail-safe state) for each detection mechanism 
(at model and embedding level).
[S-R-FS-ME-08] Mitigation strategies targeting fault tolerance
Fault tolerance relates to the ability of the AI application to maintain its functionality (at least basic functionality) 
even if a malfunction or failure of the AI component occurs. To achieve fault tolerance, the AI application must 
have mitigation strategies that, for example, deal with harmful inputs or briefly bypass a failure until the fault is 
corrected.
Requirements: Do | Te
Documentation should be available that clearly describes the fault tolerance of the AI application. For this 
purpose, the table overview from [S-R-FS-ME-07] is used as a starting point to explain in detail which 
mitigation strategies targeting fault tolerance the AI application has.
 – If applicable (and not already addressed as a model-level detection mechanism), follow-up responses 
related to an uncertainty estimation (see Risk area: uncertainty estimation (UE) under the reliability 
dimension) should also be established and documented.

127
Dimension: Safety and Security
The effectiveness of the mitigation strategies targeting fault tolerance in the intended application scenarios 
defined in [S-R-FS-CR-05] must be demonstrated through suitable tests. The tests must be documented and 
their choice justified. If there is no separate test for the mitigation strategies, it must be demonstrated that 
this has already been adequately examined through [S-R-FS-ME-09] or the [S-R-FS-ME-13] comprehensive 
real-world test.
It must be demonstrated that the existing mitigation strategies targeting fault tolerance meet the 
criteria specified in [S-R-FS-CR-05].
It must also be justified in detail that the fault tolerance achieved is sufficient and appropriate for the 
application context in question.
[S-R-FS-ME-09] Testing fault tolerance and its detection mechanisms
Requirements: Do | Te
Tests of the AI application in unexpected situations and in various threat environments in which the 
AI application is expected to be fault-tolerant must be performed and documented.
 – Detection mechanisms are specifically triggered at model and embedding level for harmful inputs in order 
to test subsequent mitigation strategies targeting fault tolerance (see [S-R-FS-ME-08]). The test data used 
here must at least contain the scenarios from the data set from [S-R-FS-ME-02] and [RE-R-IM-ME-01] 
(and if applicable also [RE-R-IM-ME-02]) for which the AI application is meant to be fault-tolerant.
 – The test data must be expanded to also trigger AI component outputs that should be intercepted at the 
embedding level for the purpose of fault tolerance.
The choice of test data sets must be justified. In addition, it must be demonstrated that they meet the 
[S-R‑FS-CR-02] criteria.
Documentation should be available that justifies that the tests performed and their results are sufficient to 
confirm that the AI application has suitable fault-tolerant behavior in unexpected situations and in threat 
environments.
[S-R-FS-ME-10] Mitigation strategies targeting a fail-safe state
Requirements: Do | Te
Documentation should be available that explains in detail the mitigation strategies of the AI application 
targeting a fail-safe state based on the table overview from [S-R-FS-ME-07]. In addition, the fail-safe state 
to be established by each mitigation strategy must be described. Among others, the following aspects are 
addressed:
 – If a fail-safe strategy is potentially capable of causing damage in an operational scenario, it must be 
demonstrated that different strategies have been considered and that the chosen mitigation strategy 
minimizes the damage.
 – In the case of mitigation strategies targeting a fail-safe state that involve the user (e.g., by passing 
control to the user), it is important to indicate that the user is informed about this option and has been 
instructed on how to act if required. If this has already been addressed in the Dimension: Autonomy and 
Control (AC) or in [S-R-FS-ME-12], or fulfilled by [S-R-FS-ME-01], reference must be made to the relevant 
section.
The effectiveness of the mitigation strategies targeting a fail-safe state in the intended application scenarios 
defined in [S-R-FS-CR-06] must be demonstrated through suitable tests. The tests must be documented and 
their choice justified. If there is no separate test for the mitigation strategy, it must be demonstrated that this 
has already been adequately examined through [S-R-FS-ME-11] or the [S-R-FS-ME-13] comprehensive real-
world test.
Detailed justification must be provided for each fail-safe strategy to demonstrate that it is proportionate 
and appropriate for the application scenarios in which it is to be used in accordance with [S-R-FS-CR-06] 
(and [S-R-FS-CR-05]).

128
Dimension: Safety and Security
[S-R-FS-ME-11] Testing fail-safe strategies and their detection mechanisms
Requirements: Do | Te
In tests, the AI application is subjected to various threats that should initiate a fail-safe response. How the tests 
are performed must be documented.
 – In the tests, these types of detection mechanisms are specifically triggered at the model and embedding 
level and the subsequent mitigation strategy should trigger a transition to a fail-safe state.
 ·
The test data used here must at least contain the scenarios from the data set from [S-R-FS-ME-02], 
[RE-R-IM-ME-01] (and if applicable also [RE-R-IM-ME-02]), which should lead to a fail-safe state.
 ·
The test data must be expanded to also cover the detection mechanisms at the embedding level that 
intercept harmful outputs of the AI component and lead to a fail-safe state.
 – In addition, if they exist, the scenarios in which the AI application must transition from fault-tolerant 
behavior to a fail-safe state must be triggered.
The choice of test data sets must be justified. In addition, it must be demonstrated that they meet the 
[S-R‑FS-CR-02] criteria.
Documentation should be available that justifies that the tests performed and their results are sufficient to 
confirm that the AI application adequately transitions to a fail-safe state in all required situations.
[S-R-FS-ME-12] Option for human intervention
Requirement: Do
Documentation should be available on the extent to which human intervention in the workings or operation 
of the AI application is necessary and possible in order to avoid an accident. If already addressed there, 
reference can be made to relevant mitigation strategies (see [S-R-FS-ME-08] and [S-R-FS-ME-10]) or to the 
Dimension: Autonomy and Control (AC) (see [AC-R-TD-ME-02]).
If the AI application has been identified as having a high protection requirement in the safety and security 
dimension, it must be demonstrated that it has a designated stop function that
 – has priority over all other functions of the application,
 – causes the shutdown of all threats arising from controlled parts,
 – provides the option to control threats arising from the application,
 – remains active until reset and
 – can only be reset by explicit confirmation.  
(based on: ISO 10218-1 5.5)
 
If, in the case of a high protection requirement, use of the stop function is restricted to a certain group of 
people (or if certain groups are excluded from using it), this must be justified in detail in terms of the risks.
As spontaneous shutdowns and other forms of human intervention can potentially involve risks (e.g., a threat 
may still exist due to inactivity), it is also necessary to document that potential users have been instructed 
in how to handle the intervention options appropriately and the consequences that may arise as a result. 
If already discussed there, reference can be made to [S-R-FS-ME-01] or to the Dimension: Autonomy and 
Control (AC).
[S-R-FS-ME-13] Comprehensive real-world test
Requirement: Do | Te
Once the AI application has been installed in the larger surrounding system, if applicable, and is functional, 
it must undergo a real-world test before it is put into operation. This test must cover all the safety functions 
examined in this risk area and how they are linked. The AI application must be presented with all malfunction 
triggers that are identified as relevant; these triggers must first be detected by the application and then trigger 
a mitigation strategy targeting fault tolerance or the transition to a fail-safe state. The performance of the 
tests must be documented.

129
Dimension: Safety and Security
The choice of test scenarios must be documented and justified. In addition, it must be demonstrated that they 
meet the [S-R-FS-CR-02] criteria. If necessary, reference can be made to the corresponding sections in the 
Dimension: Reliability (RE). It must be demonstrated that the test and the test results obtained are sufficient 
to confirm that the AI application behaves appropriately in threat environments and hazardous situations as 
defined in [S-R-FS-CR-01].
Testing of functional safety measures that are not specific to AI and are thus not addressed in this risk 
area should be performed separately and in accordance with existing norms and standards.
8.1.3.4  Measures for operation
[S-R-FS-ME-14] Dealing with accidents
Requirements: Do | Pr
The nature of accidents occurring in connection with the AI application and the way in which they develop 
must be logged and it must be specified how the AI application deals with each accident situation. 
The accidents that have occurred and their cause must be analyzed.
Continuous checks must be performed to determine whether the way the AI application works in an 
accident situation meets the requirements set out in [S-R-FS-RI-01] and whether the measures in this 
risk area contribute sufficiently to meeting the criteria specified in [S-R-FS-CR-01]. If deviations are 
identified, adjustments must be made to the safety measures or the AI component itself (see Dimension: 
Reliability (RE)). These adjustments must be documented.
8.1.4  Overall assessment
[S-R-FS-OA] Overall assessment
Requirement: Do
With reference to the tests performed and documented, it must be demonstrated in a transparent manner 
that, in accordance with [S-R-FS-CR-01], operation of the AI application is ensured under acceptable accident 
risk, in particular also with regard to unknown input data, if this is required.
It must be documented if the measures in this risk area are not feasible or are not sufficient to meet 
criteria [S-R-FS-CR-01] to [S-R-FS-CR-06]. The problems that cannot be addressed here can be considered in 
the overall cross-dimensional assessment.
If safety measures from this risk area and detection measures from the Risk area: intercepting errors at 
model level (IM) under the reliability dimension complement each other, it must be documented that the 
tests only correlate weakly with each other, so that the risk of simultaneous or interrelated failure can be 
considered manageable.
Furthermore, functional safety standards or norms must be documented that are used in addition to this 
assessment catalog to test the AI application.

`;