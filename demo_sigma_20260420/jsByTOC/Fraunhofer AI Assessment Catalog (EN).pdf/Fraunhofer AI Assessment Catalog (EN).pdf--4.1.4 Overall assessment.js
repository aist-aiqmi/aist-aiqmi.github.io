var toc_content = `44
Dimension: Fairness
[FN-R-FN-ME-05] Testing the AI component on unseen data
Requirements: Do | Te
Tests of the AI component on data that were not part of the training data are performed and the significance 
of this data with respect to the fairness of the AI application is documented. The target intervals achieved 
should also be specified.
4.1.3.3  Embedding
[FN-R-FN-ME-06] Fair further processing
Requirement: Do
Documentation should be available to illustrate what processing steps, which may be relevant to fairness, 
are performed by components of the embedding on the outputs of the AI component.
It describes how it is ensured that this further processing is fair. Specifically, it shows how weaknesses 
identified in [FN-R-FN-ME-05] are addressed.
[FN-R-FN-ME-07] AI application tests
Requirements: Do | Te
Extensive testing of the AI application regarding fairness is performed and documented. The data used in the 
test should be described and its selection should be justified. The target intervals achieved should also be 
specified. Specifically, the tests check fairness-relevant processing steps performed by components of the 
embedding.
4.1.3.4  Measures for operation
[FN-R-FN-ME-08] Monitoring outputs in operation
Requirements: Do | Pr | Te
Documentation should be available describing how the fairness of the AI application’s outputs is monitored 
during operation.
4.1.4  Overall assessment
[FN-R-FN-OA] Overall assessment
Requirement: Do
Documentation should be available confirming that the quantitative criteria have been met.
Furthermore, the extent to which the non-quantitative criteria have been achieved by the measures taken 
for operation must be assessed.
If not all requirements specified in [FN-R-FN-CR-01] and [FN-R-FN-CR-02] are met, the deviations must be 
documented. This also applies to requirements that have only been partially met, e.g., where the criteria have 
not or not always been met.

45
Dimension: Fairness
4.2  Risk area: control of dynamics (CD)
The control of dynamics risk area aims time to ensure that the fairness of the AI application is maintained during 
operation. In particular, challenges emerge with AI applications that continue to learn with new incoming data. 
Furthermore, changes in the external conditions, such as changes in legislation, may require measures to be 
taken even after the AI application has been put into operation. Fundamentally, the following two threats exist 
in this risk area:
1. Model drift: The model learns unfair treatment of individuals through new training data collected during 
operation.  
Example: The AI application is retrained at regular intervals using data that is labeled, for example, through 
crowdsourcing or user inputs. This data could be subject to bias due to trends or social events, unlike the 
original training data.
2. Concept drift: Changed external conditions impose new demands on a definition of fairness.  
Example: A change in the law states that the cost of an insurance premium may no longer differ on the basis 
of gender.
4.2.1  Risk analysis and objectives
[FN-R-CD-RI-01] Risk analysis documentation
Requirement: Do
Risk analysis: Documentation should be available describing whether and to what extent the AI application 
continues to learn during operation and what risks this creates in relation to the fairness of the AI application.
Objectives: In the case of continual learning during operation, the requirements for the new incoming 
data from which the AI application continues to learn are outlined and the processes or mechanisms that exist 
for monitoring the new incoming data with regard to its fairness are explained. It also describes how it shall 
be ensured that the AI application remains fair during operation.
4.2.2  Criteria for achieving objectives
[FN-R-CD-CR-01] Maintaining AI application fairness
Requirement: Do
Appropriate, application-specific intervals are defined for assessing fairness in AI application outputs. 
The assessment is performed according to the metrics and target intervals chosen in [FN-R-FN-CR-01]. 
The choice of intervals is documented and justified.
[FN-R-CD-CR-02] Maintaining fairness in training data
Requirement: Do
Appropriate, application-dependent intervals for assessing fairness in the training data according to the 
metrics and target intervals chosen in [FN-R-FN-CR-02] are defined, documented and justified.

`;