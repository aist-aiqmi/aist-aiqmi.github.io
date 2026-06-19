var toc_content = `101
Dimension: Reliability
[RE-R-RO-ME-08] Monitoring outputs in operation
Requirements: Do | Pr | Te
If possible, a monitoring process should be established with regard to the outputs of the AI component in live 
operation (sanity check). If it is detected that outputs are moving away from the application domain, these 
outputs must be intercepted. The technical implementation of the monitoring process must be documented 
and checked.
 
Example: The speed of a pedestrian is estimated to be 35 km/h. This dubious prediction is detected and 
results in verification by a redundant unit.
7.2.4  Overall assessment
[RE-R-RO-OA] Overall assessment
Requirement: Do
Considering the tests performed in [RE-R-RO-ME-05] and [RE-R-RO-ME-06], it must be demonstrated that 
the AI component is robust according to the criteria in [RE-R-RO-CR-02]. It should also be documented that 
the [RE-R-RO-CR-01] and [RE-R-RO-CR-03] criteria are met.
If not all requirements specified in [RE-R-RO-CR-01] to [RE-R-RO-CR-03] are met, the deviations from these 
requirements must be documented. This also applies to requirements that have only been partially met, e.g., 
where the criteria have not or not always been met.

102
Dimension: Reliability
7.3  Risk area: intercepting errors at model level (IM)
While the Risk area: robustness (RO) targets error-free outputs of the AI component in relation to the 
application boundary, the intercepting errors at model level risk area specifically addresses cases where failure of 
the AI component is foreseeable or unavoidable, or where an excessive number of erroneous predictions results 
in unacceptable risk. An example of foreseeable failure is an optical detection system faced with unfavorable 
conditions for capturing shots. For example, unacceptable risk can be caused by an unanticipated domain shift, 
such as when an autonomous drone with an AI control system for open area operation is deployed in a street 
canyon.
The transition from robustness to failure can be fluent. A certain level of noise is unavoidable even in normal 
operation and therefore only falls into this category if it is above a threshold value. This application boundary has 
already been examined in the Risk area: robustness (RO) and described as far as possible.
The intercepting errors at model level risk area sits alongside the Risk area: robustness (RO) and also the Risk 
area: functional safety (FS), as both chapters deal with monitoring the functional status. While the Risk area: 
functional safety (FS) examines risks from the embedding side, this section focuses on the AI component and, 
in particular, the ML model. Additional reference can be made to approaches from the Dimension: Safety and 
Security (S), where possible. A number of constraints, such as the noise mentioned above, can be detected 
using conventional algorithms (i.e., measures from the Risk area: functional safety (FS)). However, the 
application domain of an AI application is often too broad to be fully covered using conventional monitoring. 
For example, it is reasonable to assume that conventional approaches are usually unable to detect whether 
a home user is trying to operate a voice assistance system in a language other than the one the system is 
expecting. A detection method is required at model level to prevent the AI application from misinterpreting 
the unknown input as an instruction to order a product. Therefore, a key focus in this risk area is to reliably 
test problematic input data for which meaningful processing cannot be expected and unobstructed processing 
by the AI component may lead to unacceptable risk in terms of bodily injury, property damage or financial 
damage. A model-level detection mechanism is designed to intercept these inputs and can also initiate follow-up 
responses.
It is important not to assume that detection strategies to be implemented at ML model level can be generalized 
to other (or even similar) problems. This is why the detection scope must first be defined, which presents 
a particular challenge with respect to disturbances on the semantic level. Here, a distinction can be made 
between a closed scope and an open-world context. An example of the former would be a static machine 
on a conveyor belt. An example of an open-world application, however, would be a smart appliance used by 
untrained users in day-to-day life, such as the speech recognition system mentioned previously. In the second 
case, the data is inherently more widely distributed, but even a closed scope does not provide protection against 
unknown input data. For example, there could be a person on a conveyor belt.
7.3.1  Risk analysis and objectives
[RE-R-IM-RI-01] Scope, risk analysis and objectives
Requirement: Do
Scope: It is outlined what input data outside the application domain should be considered in order to 
intercept errors at the model level. To do this, it is first necessary to analyze the extent to which the 
unobstructed processing of out-of-distribution data (OOD data)70 poses an unacceptable safety risk or 
would result in major financial damage. Based on the analysis, it is then necessary to consult the application 
boundary described in [RE-R‑RO-RI-01] and determine which aspects that overstep this boundary should 
be considered in this risk area, i.e., by detection mechanisms at model level, and which aspects (instead or 
70  Out-of-distribution data is input data that is outside the application domain and not part of the original problem.

`;