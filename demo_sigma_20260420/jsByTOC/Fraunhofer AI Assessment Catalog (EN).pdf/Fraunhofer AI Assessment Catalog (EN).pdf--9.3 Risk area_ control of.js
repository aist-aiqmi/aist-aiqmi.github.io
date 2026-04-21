var toc_content = `158
Dimension: Data Protection
9.3  Risk area: control of dynamics (CD)
The purpose of the control of dynamics risk area is to ensure that data protection is maintained during the 
operation of the AI application. Changed external circumstances may require action or adjustments even after 
the AI application has been put into operation. For example, new technologies or newly available background 
information may significantly increase the risk of individuals being re-identified in a data set or the risk of 
unwanted visibility of sensitive business data. In addition, a change in the framework conditions, such as the legal 
situation or licensing terms, can present operators and/or developers with new challenges. Last but not least, 
the behavior of users and subjects also influences the operating conditions of the AI application. For example, 
whether an individual consents to the processing of their data depends on various factors including if they trust 
the operator to sufficiently protect their data. This trust can be strengthened by external circumstances but it can 
also be weakened by public scandals.
9.3.1  Risk analysis and objectives
[DP-R-CD-RI-01] Risk analysis and objectives
Requirement: Do
Risk analysis: It must be documented whether and to what extent the AI application processes new incoming 
data during operation, of which category (personal/business-relevant/licensed) the new incoming data is 
and what requirements are placed on the data. A description must also be provided of the processes or 
mechanisms in place to control and protect the new incoming data. The damage caused if the requirements 
for the new incoming data are not met must be examined.  
Furthermore, it is necessary to analyze the framework conditions for data processing by the AI application 
(e.g., laws, internal specifications) and the external factors on which the protective measures are based 
(e.g., available background knowledge, competitive situation). In particular, it is necessary to estimate with 
what probability the framework conditions or relevant external factors would change in the course of 
operation and what damage this would inflict.
Objectives: The objective regarding data protection during operation of the AI application is set based on 
the identified risks. This must at least include the fulfillment of the criteria specified in [DP-R-PD-CR-01] and 
[DP-R-BI-CR-01].
9.3.2  Criteria for achieving objectives
[DP-R-CD-CR-01] Quantification of risk
Requirement: Do
Criteria must be defined and documented to assess the control of operational dynamics in view of new 
incoming data as well as possible changes in the framework conditions. This should at least include 
compliance with the criteria specified in [DP-R-PD-CR-01] and [DP-R-BI-CR-01].
An explanation must be provided that the criteria specified conform to the objectives defined in 
[DP-R-CD-RI-01].

`;