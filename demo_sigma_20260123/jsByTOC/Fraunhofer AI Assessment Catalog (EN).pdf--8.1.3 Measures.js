var toc_content = `124
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