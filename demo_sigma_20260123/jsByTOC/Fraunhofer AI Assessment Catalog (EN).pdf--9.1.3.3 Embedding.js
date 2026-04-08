var toc_content = `150
Dimension: Data Protection
AI application outputs. For this purpose, reference can be made to data pre-processing measures taken, 
such as [DP-R-PD-ME-01] to [DP-R-PD-ME-04], as well as to documentation from the Risk area: integrity 
and availability (IA) of the safety security dimension, for example on the restriction of query options in 
[S-R‑IA‑ME-10] in accordance with [S-R-IA-CR-03].
An assessment must also be made regarding the risk of immediate disclosure of potentially personal 
training data by the AI application, given the various dimensions of the embedding, as is the case in 
generative models, for example.
[DP-R-PD-ME-08] Federated learning
Requirement: Do
One way of making unwanted access to data more difficult is distributed learning or federated learning. This 
involves training models locally at different computer nodes so that the respective training data does not have 
to leave its local position. The separately created models are then combined to form a global model. If the 
ML model was built by federated learning (or a variation of it), this should be documented. In particular, it is 
necessary to describe to what extent the distributed learning of the AI component makes it more difficult to 
expose personal data.
9.1.3.3  Embedding
[DP-R-PD-ME-09] Unintentional release of information
Requirement: Do
Through targeted querying of the AI application, it may be possible to reconstruct data, especially 
training data of the ML model, directly or through side channels. For example, through alternating queries of 
the AI application and adjusting the input, an input data point could be constructed that achieves a particular 
output. The form of the input data point could in turn provide an inference to the training data or to 
relationships learned through the ML model. If, in accordance with [DP-R-PD-RI-04], there is a risk of personal 
data being exposed in this way, it is necessary to document what measures have been taken to prevent or 
impede the unintentional leakage of information through queries of the AI application or via side channels. 
For this purpose, reference can be made to data pre-processing measures taken, such as [DP-R-PD-ME-01] 
to [DP-R-PD-ME-04], as well as to documentation from the Risk area: integrity and availability (IA) 
of the safety and security dimension, for example on the restriction of query options in [S-R-IA-ME-10] in 
accordance with [S-R-IA-CR-03].
9.1.3.4  Measures for operation
[DP-R-PD-ME-10] Storage and deletion
Requirements: Do | Pr
The technical implementation and the storage location of potentially personal data (training, input, output 
and usage data) must be documented as well as the measures taken to protect stored personal data from 
cyberattacks. If applicable, reference can be made here to measures from the Risk area: integrity and 
availability (IA) of the safety and security dimension, such as measures for ensuring confidentiality (see 
[S-R‑IA‑ME-03]) and for securing data (see [S-R-IA-ME-04]) and the storage location (see [S-R-IA-ME-05]).
The technical procedures for deleting potentially personal data must also be described. In particular, it is 
necessary to explain how to deal with the fact that individuals are entitled to revoke their consent to the 
processing of their data. If operational processes have been established in relation to this, they must be 
documented.

`;