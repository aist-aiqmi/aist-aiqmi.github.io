var toc_content = `136
Dimension: Safety and Security
8.2.3.4  Measures for operation
[S-R-IA-ME-10] Identity and access rights management
Requirements: Do | Pr
Documentation should be available that defines a rights and roles concept, as well as a method for managing 
access and access rights for the training and production environment. The following areas must be addressed:
 – Assigning and modifying access rights to the data, training environment, trained model and embedding 
based on the principle of least privilege and as necessary for performing tasks
 – Registering users and measures to ensure unique user identification
 – As well as possibly (see [S-R-IA-CR-03]), restricting the number of queries/request that users can make 
to the AI application. The type and extent of the restriction must be described. In particular, it must be 
demonstrated that the restriction is imposed based on quantitative measures on the risk of loss of integrity, 
i.e., on the number of queries that are required to reconstruct sensitive information or to manipulate the 
database in a way that reduces the quality of the AI application 
(based on BSI C5 IDM-01)
How the measures taken here help meet the [S-R-IA-CR-02] and [S-R-IA-CR-03] requirements must be 
explained.
[S-R-IA-ME-11] Logging and monitoring
Requirements: Do | Pr
Documentation should be available detailing which technical and organizational measures are used to log and 
monitor defined events in the training and production environment that may affect the integrity or availability 
of the AI application. The following points should be considered as a minimum:
 – Activating, stopping and pausing of logging
 – Creating, modifying or deleting users or user rights with regard to the areas defined in [S-R-IA-ME-10]
 – Creating or inserting data deemed relevant under [S-R-IA-CR-01]
 – Training the model and creating an up-to-date version of the model
 – If this does not contradict the Dimension: Data Protection (DP), the user queries and the associated 
output of the AI application, if necessary without referring to the user (it should be checked whether 
conclusions can be made about the user by the type of query and if this would be critical). For example, 
this can be helpful or relevant in the context of processing security incidents, adapting the AI application 
for general use and the traceability of decisions made by the AI application.
 – Metadata of users, separated from their requests. This can be helpful or relevant in scenarios such as 
troubleshooting and dealing with security incidents. The extent to which metadata is used commercially 
and when it is deleted must be described.
 
If the monitoring or logging of the listed events is already documented elsewhere (e.g., in the Dimension: 
Transparency (TR) or in the Dimension: Reliability (RE)), the corresponding reference can be inserted 
instead.
In addition, integrity or availability breaches must be recorded. The type, scope and, if possible, cause of the 
incident should be documented as well as how the AI application dealt with the incident.

137
Dimension: Safety and Security
The logs are reviewed as required by authorized personnel in the event of unexpected or conspicuous events 
to enable malfunctions and security incidents to be investigated promptly and appropriate measures to be 
initiated. Personal data must be stored and protected in accordance with the applicable data protection 
requirements (see also Dimension: Data Protection (DP)).  
(based on BSI C5 RB-10 and 11)
[S-R-IA-ME-12] Organization of information security
Requirement: Pr
There must be a process in place for organizing information security. The operator should initiate, control 
and monitor an information security management system that takes into account the availability of the 
AI application, based on the ISO 27001 standard for planning, implementing, maintaining and continually 
improving an information security framework for the application.
[S-R-IA-ME-13] Procedure for loss of integrity or availability
Requirements: Do | Pr
The measures taken to avoid or minimize potential further damage in the event of an integrity or availability 
breach must be documented.
The procedures that are triggered when a loss is detected must be described. In the case of a lack of integrity, 
depending on the severity, this may include a diagnostic check of the AI application, shutdown or transition 
to a fail-safe state. For example, if the weights of the ML model have been revealed, the risk of a white-box 
attack can be mitigated by retraining or rolling back to a previous version.
[S-R-IA-ME-14] Restoring the AI component
Requirement: Pr
There should be a procedure in place for restoring the AI component in the event of non-functionality or 
undesired changes within the embedding, if necessary using the data backups (in particular the stored weights 
and the architecture) from [S-R-IA-ME-04]. Reference can be made to classic IT security measures here.
[S-R-IA-ME-15] Detecting loss of integrity or availability
Requirements: Do | Pr
Documentation should be available on measures for detecting loss of integrity or availability. Reference can be 
made to measures including those for detecting model drift (see Risk area: control of dynamics (CD) of the 
reliability dimension). If required, a description must also be provided of reporting mechanisms for users and 
processes for handling user requests in a reliable, appropriate and timely manner.
8.2.4  Overall assessment
[S-R-IA-OA] Overall assessment
Requirement: Do
Detailed justification must be provided that the [S-R-IA-CR-02] and [S-R-IA-CR-03] criteria are met. It must 
also be demonstrated that the residual risk is acceptable according to the [S-R-IA-CR-01] criteria.
If not all requirements specified in [S-R-IA-CR-01] to [S-R-IA-CR-03] are met, the deviations must be 
documented. This also applies to requirements that have only been partially met, e.g., where the criteria have 
not or not always been met.

`;