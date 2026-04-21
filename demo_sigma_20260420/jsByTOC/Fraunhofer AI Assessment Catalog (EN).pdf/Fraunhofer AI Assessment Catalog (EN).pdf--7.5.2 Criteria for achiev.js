var toc_content = `112
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

113
Dimension: Reliability
It is necessary to define and document (quantitative) criteria (e.g., thresholds regarding performance) that 
describe in which scenarios re-evaluation of the AI application is required, possibly combined with retraining.
Furthermore, it is necessary to develop and document criteria for assessing the quality of procedures used to 
record new application and error cases as well as how they are handled.
It must be demonstrated that the chosen criteria are consistent with the [RE-R-CD-RI-01] objectives.
7.5.3  Measures
7.5.3.1  Data
There are no planned measures for this category.
7.5.3.2  AI component
There are no planned measures for this category.
7.5.3.3  Embedding
There are no planned measures for this category.
7.5.3.4  Measures for operation
[RE-R-CD-ME-01] Avoiding catastrophic forgetting on new training data
Requirement: Pr
A process must be established which – when new training data is used, e.g., when incremental training of 
an AI component takes place over multiple cycles – checks that the incremental training steps do not lead to 
performance losses on the previous database, provided that it is still relevant to the application.
The new training data and model versions should be saved after each incremental training step. Furthermore, 
the distribution of the new training data should be analyzed and the AI application should be tested on both 
the new and old data. It is possible to use additional measures such as a linear combination of outputs from 
the different model versions to counteract previously learned patterns/models being forgotten.
The exact procedures of the established process are documented.
[RE-R-CD-ME-02] Relearning with newly available training data
Requirement: Pr
A process must be established that initiates systematic retraining/relearning of the model based on 
[RE-R‑CD‑CR-01] when new training data is available (e.g., due to the need to keep the data constantly 
up to date or due to new data related to concept drift), while complying with all training and testing 
requirements of this catalog.
The need for new categories or data collection procedures must be reviewed, documented and implemented 
each time new data is collected.
The exact procedures of the established process are documented.

`;