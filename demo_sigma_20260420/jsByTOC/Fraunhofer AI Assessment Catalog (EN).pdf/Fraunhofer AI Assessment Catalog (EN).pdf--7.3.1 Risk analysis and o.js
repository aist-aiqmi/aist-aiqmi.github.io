var toc_content = `102
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

103
Dimension: Reliability
additionally) should be handled in the Risk area: functional safety (FS). This part of the documentation is 
completed in line with the risk analysis in [S-R-FS-RI-01]. However, input data ranges that are well beyond the 
application boundary, but which could still occur, should also be considered. In addition, justification must be 
provided if detection is deemed unnecessary for identified OOD input areas.
 
Note: The considerations at model level are to be distinguished from the Dimension: Safety and 
Security (S) (see [S-R‑FS‑RI-01]), insofar as technical input variability, e.g., due to sensor failure, can be 
covered there. The focus of the intercepting errors at model level risk area is on inherent properties of the 
AI component, such as the ability to process complex input data. Problems such as complete sensor failure 
that can be handled using conventional methods should ideally be addressed in the Dimension: Safety and 
Security (S).
Risk analysis: The documentation supplements and extends the risk assessment of probabilities of occurrence 
and potential damage in [RE-R-RO-RI-01] to include the input areas discussed above for which detection at 
model level is targeted. The damage in this instance is based on the assumption of faulty processing by the 
model, unless the input is intercepted. For this purpose, both a worst-case scenario, i.e., the most unfavorable 
output from the AI application, and a random output must be examined. Using image segmentation as an 
example, the first case would equate to “overlooking” critical elements, such as missing tumor segmentation 
on a CT image in computed tomography, and the second case would equate to a randomly distorted output 
in which all segmentation regions deviate from their usual shape and only loosely correspond to the actual 
image content.
Objectives: The risk analysis is used to set qualitative requirements or objectives for the detection measures, 
which can classify the risk as controllable if achieved (assuming suitable follow-up responses if successfully 
detected). These requirements are described and examined in more detail below.  
The choice of follow-up responses to detections at model level is addressed in the risk analysis in the Risk 
area: functional safety (FS).
7.3.2  Criteria for achieving objectives
The wide variety of problems in this risk area presents a challenge when it comes to formulating criteria that 
enable any AI application to be quantitatively assessed. The criteria must therefore be adapted to each specific 
case according to the objectives defined in [RE-R-IM-RI-01]. As a minimum, the criteria defined below should be 
used for this purpose.
[RE-R-IM-CR-01] Out-of-distribution coverage
Requirement: Do
In line with [RE-R-RO-CR-03], the coverage of the input space OOD areas to be intercepted as defined in 
[RE-R-IM-RI-01] should be formalized and quantified. If justification can be provided as to why quantification 
is not possible, a qualitative categorical argument can be used instead, as in [RE-R-RO-CR-03], for example 
based on Zwicky boxes, provided that this is sufficiently justified.
In particular, if it is possible to justify that the coverage cannot also be formalized in full using a qualitative 
categorical argument or if generalizability is required in [RE-R-IM-CR-03], the coverage of the OOD 
data should also be assessed using other available OOD data sets. These data sets may contain “noise”, but 
should preferably contain data for another related application purpose. The choice of the data range must be 
justified.

`;