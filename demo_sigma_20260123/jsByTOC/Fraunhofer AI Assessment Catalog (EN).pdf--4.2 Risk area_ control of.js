var toc_content = `45
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