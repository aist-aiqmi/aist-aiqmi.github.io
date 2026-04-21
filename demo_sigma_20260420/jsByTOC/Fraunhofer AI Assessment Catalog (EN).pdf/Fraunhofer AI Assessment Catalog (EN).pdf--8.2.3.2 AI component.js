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

`;