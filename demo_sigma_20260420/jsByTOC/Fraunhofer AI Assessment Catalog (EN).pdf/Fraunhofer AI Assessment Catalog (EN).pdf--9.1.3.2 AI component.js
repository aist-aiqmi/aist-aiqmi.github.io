var toc_content = `149
Dimension: Data Protection
[DP-R-PD-ME-02] Pseudonymization
Requirement: Do
It is necessary to document which procedures are used to pseudonymize personal data (such as hashing) 
in order to make it more difficult to re-identify individuals in a data set.
Pseudonymization is not the same as anonymization and does not usually provide sufficient protection with 
regard to creating a personal reference. Therefore, it must be demonstrated to what extent the procedures 
used for pseudonymization are effective in combination with other measures taken (e.g., from the Risk area: 
integrity and availability (IA) of the safety and security dimension) and, if applicable, what gaps exist.
[DP-R-PD-ME-03] Perturbation of modeling data
Requirement: Do
It is necessary to document the ways in which data is changed (perturbed), if necessary, by adding 
intentional random distortions to the modeling to prevent or impede the extraction of personal data. Possible 
perturbation methods include:
 – Adding additive or multiplicative random noise. The type (e.g., white or uniform noise) and volume 
(e.g., amplitude and standard deviation) of the noise must be specified.
 – Random shuffling of attribute values.
 
If other methods are used, justification must be provided as to why they are suitable as a way of making the 
extraction of personal data more difficult.
[DP-R-PD-ME-04] Aggregation and generalization of data for modeling
Requirement: Do
The extent to which data is linked or aggregated and generalized during modeling to prevent or impede 
the extraction of personal data must be documented. Furthermore, it is necessary to evaluate the effectiveness 
of the aggregations or generalizations in terms of data protection.
9.1.3.2  AI component
[DP-R-PD-ME-05] Data minimization for modeling
Requirement: Do
Documentation and justification must be provided that the modeling performed is not also possible using 
other data that is less sensitive (in terms of a personal reference).
[DP-R-PD-ME-06] AI application purpose
Requirement: Do
If the AI application processes personal data on the basis of consent for a specific purpose, it must be 
documented that the implemented ML model only uses this data in accordance with the authorized purpose. 
If necessary, reference can be made to the documentation from the Dimension: Reliability (RE).
[DP-R-PD-ME-07] Novelty of outputs
Requirement: Do
In principle, there is the risk that the outputs of the ML model reflect parts of the training data, particularly 
for generative models, but also for predictive models e.g., for expanding inputs. If the training data according 
to [DP-R-PD-RI-01] potentially allows a personal reference to be made, it should be ensured, depending 
on the model type, that the outputs of the AI component deviate sufficiently from the training data and do 
not unintentionally reveal them to a disproportionate extent. In this case, it is necessary to document what 
measures have been taken to prevent the immediate disclosure of potentially personal training data through 

150
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