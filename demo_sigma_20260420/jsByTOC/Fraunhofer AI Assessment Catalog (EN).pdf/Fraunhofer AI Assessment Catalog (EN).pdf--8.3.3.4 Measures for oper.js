var toc_content = `139
Dimension: Safety and Security
Lastly, an assessment must be made of potential damage that may result from vulnerabilities due to continued 
learning in operation as well as changed safety or security requirements due to external conditions and their 
probability of occurrence considering the application context in question.
Objectives: Based on the risk analysis, objectives are set for avoiding, detecting, recording and handling 
potential safety or security incidents due to model or concept drift.
8.3.2  Criteria for achieving objectives
Appropriate safeguard measures must be implemented based on the threats in the control of dynamics risk area. 
In order to be able to objectively check during the final assessment of the measures if existing risks have been 
successfully mitigated, the objectives described in [S-R-CD-RI-01] must be translated into quantitative criteria.
[S-R-CD-CR-01] Framework for dealing with changing safety and security risks
Requirement: Do
Criteria used to assess how changing safety and security risks are dealt with must be documented. The 
criteria can be quantitative or qualitative in nature and should at least include:
 – Assessment interval for checking how up to date the implemented safety and security measures are
 – Scope of the review
 – User behavior requirements
 – Threshold value or qualitative criterion at which (depending on the metrics from the Dimension: 
Reliability (RE) as well as criteria from the safety and security dimension) adjustment of the safety and 
security measures is required
Target values (or qualitative target characteristics) must be specified for each criterion established. It must 
be demonstrated in a transparent way that these objectives are consistent with the target values and are 
appropriate for the particular application context.
8.3.3  Measures
8.3.3.1  Data
There are no planned measures for this category.
8.3.3.2  AI component
There are no planned measures for this category.
8.3.3.3  Embedding
There are no planned measures for this category.
8.3.3.4  Measures for operation
[S-R-CD-ME-01] Training and raising awareness of employees
Requirement: Do
Documentation should be available on how to ensure that employees and service providers are aware of their 
safety and security responsibilities. The following measures are considered for this purpose:

140
Dimension: Safety and Security
 – Reliability assessment of employees (e.g., verification of the person by identity card, verification of CVs or 
also the request for a police clearance certificate in the case of sensitive roles)
 – Employment agreement with commitment to comply with laws, rules and regulations
 – Safety and security education and awareness-raising program, including regular briefings and training on 
secure development and maintenance of the application on appropriate handling of training and user data, 
regular briefing on potential – particularly AI-specific – attacks and regular training on the course of action 
to take when safety- or security-related events occur
 – Disciplinary action for breaches of policies and instructions 
(based on BSI C5 HR-01 to HR-04)
[S-R-CD-ME-02] Monitoring external conditions
Requirement: Pr
A process must exist for monitoring external conditions as well as potential new threats to safety and security 
that may require adjustments to requirements and measures. As a minimum, the process should address the
 – advances in the field of research, especially the possibility of attacks and malware for the AI application,
 – correctness of the basic assumptions made about the application context in question and according to 
which the safety and security measures are aligned,
 – changes to the software framework used so that, for example, the current version of the code cannot be 
read, or security vulnerabilities emerge,
 – changes in legal and regulatory conditions, including changes that may also affect the Dimension: 
Data Protection (DP) and Dimension: Reliability (RE).
The type and scope of the process are documented.
Responses or next steps that will be taken if a relevant change in external conditions is identified must also be 
defined.
[S-R-CD-ME-03] Emergency management
Requirement: Pr
A process must exist for managing emergencies. An emergency can be an accident, failure or safety/security 
incident. In this process, emergency concepts (see also [S-R-FS-ME-14]) must be planned, implemented, 
tested, monitored and regularly reviewed and improved. This includes recognizing the emergency, dealing 
with it and using the incident to improve safety and security. The following are performed following 
an emergency:
 – Emergency analysis (incident management): The history of emergencies that have occurred is logged and 
the resulting data is used to improve the safety and security of the application.
 – A review of all safety and security measures to determine how effective they are.
If there are overlaps in terms of content, conformity with the guidelines [S-R-FS-ME-01] and [S-R‑IA-ME-01] 
must be ensured.  
(based on BSI C5 BCM, SIM)

141
Dimension: Safety and Security
8.3.4  Overall assessment
[S-R-CD-OA] Overall assessment
Requirement: Do
Considering the measures taken, it must be demonstrated that procedures or external conditions have been 
created that meet the [S-R-CD-CR-01] criteria and thus achieve an acceptable level of risk with regard to the 
dynamics of the AI application in terms of safety and security.
If not all requirements specified in [S-R-CD-CR-01] are met, the deviations from the requirements must be 
documented. This also applies to requirements that have only been partially met, e.g., where the criteria have 
not or not always been met.
Summary
[S-S] Summary of the dimension
Requirement: Do
If there is a medium or high protection requirement for this dimension, documentation must be provided 
for the remaining residual risks. First of all, the residual risks from the various risk areas in this dimension are 
summarized. Subsequently, and taking into account the protection requirement, the identified residual risks 
are collectively assessed as negligible, non-negligible (but acceptable) or unacceptable. This analysis should 
specifically assess the impact of measures from the reliability and data protection dimensions in terms of 
whether they help to mitigate or control safety and security risks. The result of the analysis must be explained.
If risks or measures under this dimension have been identified as having potentially negative effects on other 
dimensions, such as autonomy and control, transparency or data protection, they must be documented.
A conclusion must be made about the dimension that includes the assessment of residual risks.

`;