var toc_content = `134
Dimension: Safety and Security
[S-R-IA-ME-03] Data confidentiality
Requirement: Do
Documentation should be available on what measures, such as encryption, are taken to ensure the 
confidentiality of the training data, the trained model (i.e., hyperparameters and weights) and other stored 
data or new incoming data during operation in the training and production environments.  
Measures to ensure the confidentiality of the model make it difficult, for example, for attackers to design 
specific attacks (known as white-box attacks) that could, for example, force a specific output.
[S-R-IA-ME-04] Data backup and restoration
Requirement: Do
Documentation should be available on technical and organizational measures to prevent data loss with 
regard to training data, the trained model or other settings and data, so that these are available again 
within a reasonable time after a failure resulting from loss. With respect to ML models developed using 
incremental learning in particular, it should be possible to roll back to the last version of the model at any 
time. The measures established to regularly back up and restore data, as well as the scope, duration and 
frequency of them, must be documented. If this is already documented elsewhere, e.g., in the Dimension: 
Transparency (TR), reference can be made to the corresponding section.
8.2.3.2  AI component
There are no planned mitigation measures related to development and modeling of the AI component for the 
integrity and availability risk area. However, as described in the introduction, the integrity of the AI application 
is indirectly related to the confidentiality of data. The Dimension: Data Protection (DP) describes measures 
for protecting data related to the AI component. In addition, there is the risk of model drift for AI applications 
that continue learning. Measures to combat this at the level of the AI component are provided in the Risk area: 
control of dynamics (CD) of the reliability dimension.
8.2.3.3  Embedding
[S-R-IA-ME-05] Physical protection of the storage location
Requirement: Do
Documentation should be available on which locations are used to store data related to the AI application. 
In particular, it is necessary to describe the storage locations of training data, weights and hyperparameters 
of the trained model, as well as other data such as logging data.
In addition, documentation must be provided of the measures taken to adequately protect the data and 
the training and productive environment from unauthorized physical access and the associated theft or 
damage. In the case of external providers, such as cloud services, it must be demonstrated that they ensure 
an adequate security concept.  
(based on BSI C5 PS)

135
Dimension: Safety and Security
[S-R-IA-ME-06] Protection against malware
Requirements: Do | Pr
Documentation should be available that describes what protection against malware is available in the training 
and production environment. To this end, it is also important to consider AI-specific malware, such as software 
for executing adversarial attacks (see Dimension: Reliability (RE)).
Furthermore, there must be an established process for monitoring and identifying possible new types of 
malware, as well as for checking the state of the art of the protection software, including regular updates.
[S-R-IA-ME-07] Communication security
Requirement: Do
Documentation should be available on the measures taken to ensure secure, confidential communication. 
This should cover both the user’s communication with the AI application and the communication within 
the application e.g., between the AI component and the embedding. Existing norms/standards relating 
to information security must be consulted to identify appropriate measures depending on the protection 
requirement. (based on BSI C5 COS-01)
[S-R-IA-ME-08] AI application timeout
Requirement: Do
Documentation should be available that demonstrates a timeout within the AI component or in the interaction 
of the AI component with the embedding does not represent an unacceptable risk. Firstly, it is necessary to 
document to what extent it can be guaranteed that the AI component always responds in the required time. 
If this is not the case, e.g., because resources cannot be made available permanently, the response time is not 
deterministic, or there are delays in the communication of the AI component to the embedding, it is necessary 
to explain how a timeout situation is managed without risks becoming unacceptable.
Secondly, it is necessary to examine to what extent feedback loops with other components of the embedding 
are exited/terminated in the required time for AI applications with direct feedback loops between classic 
software components of the embedding and the AI component.
[S-R-IA-ME-09] Scalability testing
Requirements: Do | Te
Documentation should be available that records how the AI application deals with an influx of requests 
where there is a high risk of unavailability. A typical example where there is an unavailability risk is outsourced 
AI components, such as smart home systems, which rely on server-side computing capacity to process user 
requests. However, chatbot systems, e.g., for automated acquisitions or customer support, on websites can 
also be affected by a substantial change in user behavior, for example, if demand or interest in a product 
increases unexpectedly. Compared to concepts such as software-as-a-service, AI applications thus often have 
higher requirements for “real-time availability” (see previous example) with a computing load that can cope 
with them, as information must be processed before it is made available.
Tests must be performed and documented that specifically trigger a failure of the AI application. The test 
scenarios examined and any data sets used for this purpose must be documented. It must be justified that 
the test results confirm appropriate behavior with respect to scalability according to the defined objectives in 
[S-R-IA-CR-01].

136
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

`;