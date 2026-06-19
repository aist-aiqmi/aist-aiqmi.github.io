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

159
Dimension: Data Protection
9.3.3  Measures
The measures listed below apply to the data, AI component, embedding and operation in equal measure.
9.3.3.1  Data
9.3.3.2  AI component
9.3.3.3  Embedding
9.3.3.4  Measures for operation
[DP-R-CD-ME-01] Consent, complaints, deletion of personal data
Requirements: Do | Pr
Documentation should be available that explains how the data protection requirements regarding consent for 
a specific purpose, revocation of consent, complaints in the event of suspected non-compliance and deletion 
are implemented in the handling of personal data in the course of operating the AI application. If operational 
processes have been established for this purpose, they must be described in detail.
[DP-R-CD-ME-02] Future development relating to personal data
Requirement: Do
It is necessary to investigate, assess and document how the privacy risk will develop in the context of the 
AI application considering the collection of further data (training, input, usage data) and with respect to 
background knowledge that will be (generally) available in the future.
[DP-R-CD-ME-03] Consent, complaints, deletion of licensed data
Requirements: Do | Pr
Documentation should be available that explains how compliance with licensing terms is achieved in the 
course of operating the AI application when dealing with licensed data. If operational processes have been 
established for this purpose, they must be described in detail.
[DP-R-CD-ME-04] Future development relating to business-relevant information
Requirement: Do
It is necessary to investigate, assess and document how the context-specific significance of business-related 
information will develop in the future. More specifically, it must be analyzed whether it is foreseeable 
that certain data processed by the AI application or the model itself will be classified as business-relevant 
information in the future or whether this categorization will no longer apply to this data in the future.

`;