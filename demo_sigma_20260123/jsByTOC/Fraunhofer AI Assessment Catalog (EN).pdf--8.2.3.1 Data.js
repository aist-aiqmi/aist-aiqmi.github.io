var toc_content = `133
Dimension: Safety and Security
[S-R-IA-CR-02] Data access options
Requirement: Do
Based on the risks identified in [S-R-IA-RI-01] and for all data related to the AI application which, if accessed or 
modified, could reduce the quality of the AI application, it is necessary to record
for which group of people,
how often,
for what reason,
and under which other conditions
insight into or modification of the data point should be possible or, conversely, when this must not be permitted.
[S-R-IA-CR-03] Number of requests/queries of the AI application
Requirement: Do
Under certain circumstances, risks related to targeted attacks, functional changes, for example through 
data poisoning, and denial-of-service attacks, may mean the number of user requests have to be limited. 
If this is the case, the type and scope of the AI application’s request/query options (per user or overall) must 
be designed in a way that guarantees integrity and availability. Otherwise, justification must be provided to 
explain why it is not considered necessary to restrict user requests to the AI application.
8.2.3  Measures
[S-R-IA-ME-01] Security guidelines and instructions for use
Requirements: Do | Pr
Documentation should be available in which security objectives relating to integrity and availability are 
compiled from the business objectives, business processes, relevant laws, regulations and possible threats 
based on the [S-R-IA-RI-01] risk analysis. This security guideline also contains strategic guidance on how to 
achieve these objectives.
A process must be established and documented that makes users and developers aware of risks relating to 
integrity and availability and indicates how to act correctly with respect to the integrity of data, model and 
embedding as well as in relation to the availability of the AI application.
Measures should be described that ensure that all users take note of them. The extent to which these 
measures contribute to mitigating or controlling the identified risks in accordance with [S-R-IA-CR-01] must 
also be explained.  
(based on BSI C5 SA-01)
8.2.3.1  Data
[S-R-IA-ME-02] Data integrity
Requirement: Do
Documentation should be available on what measures, such as signatures or checksums, are taken to ensure 
the integrity of the training data, the trained model (i.e., hyperparameters and weights) and other stored 
data or new incoming data during operation in the training and production environments. Data integrity 
measures can prevent attackers from manipulating weights or data sets, for example, to make the 
AI application susceptible to certain types of attacks (data poisoning).

134
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

`;