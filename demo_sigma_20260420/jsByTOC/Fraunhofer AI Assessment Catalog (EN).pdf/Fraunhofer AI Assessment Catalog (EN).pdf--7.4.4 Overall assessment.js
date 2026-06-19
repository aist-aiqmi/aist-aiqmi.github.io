var toc_content = `111
Dimension: Reliability
[RE-R-UE-ME-04] Testing the uncertainty estimation
Requirements: Do | Pr | Te
The uncertainty estimation must be tested on data not used in training or for calibration. If specific semantic 
dimensions have been specified in [RE-R-UE-CR-01], test data should be chosen that allows the uncertainty 
estimation to be examined along these dimensions. Furthermore, the requirements in [RE-R-IM-ME-06] 
should be taken into account if uncertainty estimation is used as a detection method for intercepting errors. 
The metrics and target intervals defined in [RE-R-UE-CR-01] are used to evaluate quality. The test results must 
be documented.
It must be documented if (iterative) adjustment of the uncertainty estimation has taken place (e.g., by means 
of additional post-processing measures) during the tests in the event of potentially inadequate quality.
7.4.3.3  Embedding
[RE-R-UE-ME-05] Assessing follow-up responses
Requirements: Do | Te
If the uncertainty estimation can or should initiate follow-up responses, these responses and how they are 
implemented must be documented, if necessary in line with the Risk area: intercepting errors at model 
level (IM) (see [RE-R-IM-ME-06] and [RE-R-IM-CR-02]). Real-world tests are also performed in which 
the initiation of the follow-up responses by the uncertainty estimation is purposely triggered and tested. 
If the tests required by this measure are already documented elsewhere, for example in [RE-R-IM-ME-07] 
or [S-R‑FS-ME-13], reference can be made to this instead.
7.4.3.4  Measures for operation
There are no planned measures for this category.
7.4.4  Overall assessment
[RE-R-UE-OA] Overall assessment
Requirement: Do
Documentation should be available demonstrating that the criteria specified in [RE-R-UE-CR-01] have been 
achieved.
If not all requirements specified in [RE-R-UE-CR-01] are met, the deviations must be documented. 
This also applies to requirements that have only been partially met, e.g., where the criteria have not or not 
always been met.

112
Dimension: Reliability
7.5  Risk area: control of dynamics (CD)
The control of dynamics risk area deals with risks linked to model and concept drift. This ensures that 
AI application reliability is maintained during operation.
The reliability of the AI application can be weakened by changing external circumstances. If, for example, the 
statistical properties of the variable to be predicted change, the ML model may no longer be suitable to optimally 
describe this variable and its performance would suffer in line with this. This could be the case, for example, with 
an AI application that was trained to recognize faces before the onset of the COVID-19 pandemic and now has 
to deal with faces partially covered by masks. Furthermore, changes in the external conditions, such as changes 
in legislation, may require measures to be taken after the AI application has been put into operation.
To ensure AI application reliability at all times during live operation, the application should be checked on 
a regular basis and at appropriate intervals to make sure that it is functioning correctly. Furthermore, suitable 
measures can be established, such as logging challenging scenarios in live operation, in order to continually 
increase the reliability of the AI application.
In summary, this risk area deals with the following two risk categories:
1. Model drift: The AI application has reduced reliability after retraining on new training data collected during 
operation.
2. Concept drift: Changed external conditions impose new demands on reliability.
7.5.1  Risk analysis and objectives
[RE-R-CD-RI-01] Risk analysis and objectives
Requirement: Do
Risk analysis: It must be documented whether and to what extent the AI application continues to learn 
during operation. If this is the case, it is also necessary to explain what the requirements are for the new 
incoming training data and what processes or mechanisms are in place to check the new incoming data. 
Based on this, it is necessary to estimate the probability of incorrect continual learning during operation 
and the damage that may arise as a result. It is also necessary to analyze the types of concept drift that can 
conceivably or potentially occur, and to document the potential consequences or damage that could result if 
external (possibly changed) requirements are not met.
Objectives: Objectives should be set to detect, record and handle new error cases that emerge during 
operation. An acceptable risk level is achieved if these objectives are met.
7.5.2  Criteria for achieving objectives
[RE-R-CD-CR-01] Intervals and quality requirements for assessing during operation
Requirement: Do
Appropriate assessment intervals for the AI application to assess reliability must be defined and documented 
according to the metrics and target intervals chosen in the previous risk areas in the reliability dimension. 
Prioritization of the risk areas in the planned regular testing must be application-specific and justified in detail. 
The size of the assessment intervals should specifically relate to the expected speed of relevant concept drifts 
(e.g., in an application that detects road users, the decision may be made to carry out a check once a year 
regarding whether new road users, such e-scooter riders, are detected with sufficient accuracy).

`;