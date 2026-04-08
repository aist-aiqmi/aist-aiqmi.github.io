var toc_content = `121
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

122
Dimension: Safety and Security
[S-R-FS-CR-01] Quantification of acceptable risk
Requirement: Do
Appropriate criteria for assessing the risk of potential harm caused by malfunction of the AI application must 
be specified for the particular application context. These criteria should at least include:
 
Amount of damage:
 – Type and severity of possible injuries
 – Number of people affected
 – Costs (loss of work, compensation and additional effort to rectify the incident and for support)
 – Expenditure to repair property damage
 
Probability of occurrence:
 – Specifying possible causes
Target values must be defined for the established criteria (possibly for each damage scenario). A transparent 
argument must be provided of why the risk reaches an acceptable level when these target values are met and 
is in line with the ethical-legal framework. In addition, it must be demonstrated that the criteria defined here 
reflect the objectives.
[S-R-FS-CR-02] Requirements for the test data
Requirement: Do
In view of the aspects considered in this risk area that go beyond the Dimension: Reliability (RE), such as
 – the risk of an embedding malfunction,
 – intercepting harmful inputs or outputs of the AI component through the embedding,
 – embedding mitigation strategies,
 
it may be necessary to supplement the criteria formulated in [RE-R-RO-CR-03] and [RE-R-IM-CR-01] for 
formalizing and quantifying the coverage of the application boundary as well as relevant OOD input areas 
for test data to be used in this risk area. If quantification is justifiably not possible, a qualitative categorical 
argument can be used instead, for example based on Zwicky boxes. If supplementing the criteria is not 
considered necessary and the test data sets are to be taken from the Dimension: Reliability (RE), 
justification must be provided that the previously mentioned aspects are already sufficiently covered by this.
[S-R-FS-CR-03] Existence of mitigation strategies
Requirement: Do
Each (fault) area to be intercepted by embedding methods defined in [S-R-FS-RI-01] is paired, similarly to 
[RE-R-IM-CR-02], with a mitigation strategy (from [S-R-FS-ME-08] or [S-R-FS-ME-10]) to be taken if the 
detection method fails. For example, this can may involve passing control over to the user. A strategy does 
not have to be applicable to all of the areas mentioned, but can also apply only to specific designated areas 
(or even just sub-areas). However, each (sub-)area must be covered by at least one mitigation strategy. This 
classification is recorded in a table.

123
Dimension: Safety and Security
[S-R-FS-CR-04] Requirements for error detection
Requirement: Do
Requirements (quantitative if possible) for detection must be recorded for each of the input areas to be 
intercepted mentioned in [S-R-FS-RI-01] on the basis of the risk analysis and the mitigation strategies to be 
assigned according to [S-R-FS-CR-03]. At least the following points must be addressed:
 – Reliability (Definition of a metric to measure the performance of the detection strategy (see [RE-R-SC-
CR-01] for details) and a target interval or upper limit up to which detection failure would be acceptable)
 – Response time (maximum time offset allowed, depending on the subsequent mitigation strategy)
 – Application threshold (If the shift from “robust” behavior to failure of the AI component in the input space 
is continuous, specifying a threshold for detection to occur is justified.)
 – Generalizability (If the coverage in [S-R-FS-CR-02] is qualitative rather than quantitative, requirement for 
the method of generalization or extrapolation is discussed.)
 – (If applicable) specific additional requirements resulting from each of the subsequent mitigation strategies 
to be defined according to [S-R-FS-CR-03]
[S-R-FS-CR-05] Requirements for mitigation strategies targeting fault tolerance
Requirement: Do
A mitigation strategy targeting fault tolerance must have the following properties for the security-related parts 
of the AI application (characteristic features):
 – A single error or an isolated failure of the AI component does not lead to a loss of safety.
 – If proportionate and reasonably feasible, each individual error is reported to the user and, ideally, to the 
developer or operator. It is important to ensure that error messages containing sensitive data are protected 
accordingly (e.g., personal information, see [S-R-IA-ME-07] and [S-R-IA-ME-11]).
 – If an individual error occurs, basic functionality should be maintained in the safe state until the detected 
error is corrected. A transition to a fail-safe state must be initiated (see [S-R-FS-ME-10]) if the detected 
error cannot be corrected and safe operation can no longer be maintained.  
(based on: ISO 10218-1 5.4)
For each mitigation strategy targeting fault tolerance, the three characteristic features specified must be 
formulated into (quantitative if possible) application-specific criteria based on the risks determined in [S-R‑FS-
RI-01]. For this purpose, at least the following points must be addressed, and further requirements should be 
added depending on the application context:
 – Error scenarios or (if possible) threshold values or qualitative criteria whereby the mitigation strategy should 
take effect
 – Type and scope of functions to be maintained by deploying the mitigation strategy
 – Reliability (definition of a metric and target value that can be used to assess the performance of the 
mitigation strategy, see [RE-R-SC-CR-01])
 – If required, the time frame for which reliability must be kept at least at this level
 – Response time (maximum time offset allowed for deploying the mitigation strategy)
 – Failure scenarios or (if possible) threshold values or qualitative criteria from which the mitigation strategy 
must transition to a fail-safe state (taking into account the operational limits of the embedding, among 
other factors).

124
Dimension: Safety and Security
[S-R-FS-CR-06] Requirements for mitigation strategies targeting a fail-safe state
Requirement: Do
Based on the particular application context and the associated risks identified in [S-R-FS-RI-01], (quantitative 
if possible) requirements must be recorded for each mitigation strategy to be assigned according to [S-R-FS-
CR-03] with the purpose of achieving a fail-safe state. At least the following points must be addressed:
 – Error scenarios or (if possible) appropriate threshold values or qualitative criteria from which the mitigation 
strategy targeting a fail-safe state should take effect. Operational limits of the embedding, e.g., 
maximum rotation speed for motor control, must be taken into account. In addition, this also includes the 
scenarios in which a fail-safe strategy is triggered following a mitigation strategy targeting fault tolerance 
(see [S-R-FS-CR-05]).
 – Response time (maximum time offset allowed before the mitigation strategy is deployed)
 – Description of the fail-safe state to be achieved in the best-case scenario
 – Reliability (if applicable) of the fail-safe strategy, i.e., the reliability with which the fail-safe state is achieved
 – Justifiable maximum damage that may be accepted during transition to the fail-safe state
8.1.3  Measures
The measures in this risk area include embedding methods and tests to intercept errors or a failure of the 
AI application, to bypass them (in terms of fault tolerance) as well as to enter a fail-safe state if necessary.
[S-R-FS-ME-01] Safety guidelines and instructions for use
Requirements: Do | Pr
Safety objectives for functional safety must be derived from business objectives, business processes, relevant 
laws, regulations and potential threats, and these must be documented. This safety guideline also contains 
strategic guidance on how to achieve these objectives.
Based on the safety guideline, instructions are provided in a standard format on
 – using the application safely and
 – developing the application
 
Measures should be described to ensure that all users take note of them.
A process must be established and documented that makes users and developers of the application aware of 
risks relating to functional safety and indicates how to act correctly with respect to the safety of data, model 
and embedding.  
(based on BSI C5 SA-01)
8.1.3.1  Data
[S-R-FS-ME-02] Scenario coverage
Requirement: Do
Documentation should be available describing which test data is used to verify measures in this risk area. 
It should be explained in a transparent way that the test data contains sufficient potential accident scenarios 
and critical situations and thus fulfills the criteria defined in [S-R-FS-CR-02]. If necessary, reference can be 
made to the documentation from the Dimension: Reliability (RE).

`;