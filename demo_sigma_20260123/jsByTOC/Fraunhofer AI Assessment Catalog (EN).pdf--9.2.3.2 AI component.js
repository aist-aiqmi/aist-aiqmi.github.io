var toc_content = `155
Dimension: Data Protection
[DP-R-BI-ME-05] Data obfuscation
Requirement: Do
In mitigation and/or in addition to [DP-R-BI-ME-01], the content of stored data can be concealed. For 
example, birth dates could be stored as a real number in the normalized interval (-1, +1) rather than as years 
(taking into account the exact date). This can help ensure that if the data is lost, its semantic context is not 
recognized, thus making deductions more difficult without falsifying connections in the data set. It must be 
documented whether, to what extent and in what form data concealment was performed.
9.2.3.2  AI component
[DP-R-BI-ME-06] AI application purpose
Requirement: Do
In the case of licensed data, it must be demonstrated and documented that the AI application only uses this 
data in accordance with the license granted. If necessary, reference can be made to the documentation from 
the Dimension: Reliability (RE).
If the AI application processes business-related data, it must be demonstrated and documented that the 
processing of the business-relevant information by the AI application is indeed necessary to ensure its 
functionality and suitability.
[DP-R-BI-ME-07] Novelty of outputs
Requirement: Do
If the training data according to [DP-R-BI-RI-01] contains business-relevant information or, in particular, 
licensed data that requires protection, it is necessary to document, in line with [DP-R-PD-ME-07], which 
measures have been taken to prevent the training data from being directly disclosed by outputs of the 
AI application. If applicable, direct reference can be made to [DP-R-PD-ME-07], or to measures taken for 
data pre-processing such as [DP-R-BI-ME-01] to [DP-R-BI-ME-04], as well as to documentation from the Risk 
area: integrity and availability (IA) of the safety and security dimension, for example on the restriction of 
query options (see [S-R-IA-ME-10]).
An assessment must also be made regarding the risk of immediate disclosure of business-related training data 
by the AI application, given the various dimensions of the embedding as is the case in generative models, for 
example.
[DP-R-BI-ME-08] Federated learning
Requirement: Do
In addition to [DP-R-PD-ME-08], it is necessary to document the extent to which distributed learning of the 
AI component makes it more difficult or impossible to expose business-relevant information.
[DP-R-BI-ME-09] Weight signatures
Requirement: Do
If learned weights within the AI component are an asset worth protecting, for example in the sense of 
copyright law, they can be given a digital signature86, similar to a watermark. This ensures that authorship can 
always be proven through the model. It must be documented whether, to what extent and in what form the 
weights of the ML model were signed.
86  For example, see: Chen, H. et al. (2019). Deepmarks: A secure fingerprinting framework for digital rights management 
of deep learning models. In: Proceedings of the 2019 International Conference on Multimedia Retrieval. pp. 105–113.  
https://doi.org/10.1145/3323873.3325042 (last accessed: 06/23/2021)

156
Dimension: Data Protection
9.2.3.3  Embedding
[DP-R-BI-ME-10] Unintentional information leakage
Requirement: Do
In accordance with [DP-R-BI-RI-04], if there is a risk that business-relevant information and, in particular, 
licensed data may be exposed by means of targeted queries of the AI application, it must be documented, in 
line with [DP-R-PD-ME-09], which measures have been taken to prevent or impede the unintentional leakage 
of information. For this purpose, direct reference can be made to [DP-R-PD-ME-09], or to data pre-processing 
measures taken, such as [DP-R-BI-ME-01] to [DP-R-BI-ME-04], as well as to documentation from the Risk 
area: integrity and availability (IA) of the safety and security dimension, for example on the restriction of 
query options (see [S-R-IA-ME-10]).
[DP-R-BI-ME-11] Preventing model extraction
Requirement: Do
It is necessary to demonstrate the extent to which the output of the AI application only contains/displays the 
results required for its use.  
Example: It is not usually necessary for the AI application to output the entire softmax vector; instead, it is 
sufficient for users to know which class achieves the highest softmax value.
It is necessary to document what information regarding the technical properties of the AI application or its 
AI component is publicly available. In addition, it must be explained that this information does not go beyond 
what is necessary to inform subjects or users (see Dimension: Transparency (TR)).
It must be demonstrated to what extent the sensitive model characteristics defined in [DP-R-BI-RI-02] are 
protected against reconstruction in view of the freely accessible information about the AI application and the 
allocated query options (see [S-R-IA-ME-10]). If required, the possible contradictions or trade-offs with regard 
to providing information to subjects and users (see Dimension: Transparency (TR)) must be addressed.
9.2.3.4  Measures for operation
[DP-R-BI-ME-08] Storage and deletion
Requirement: Do
In addition to [DP-R-PD-ME-10], it is necessary to document the technical implementation and the location 
of the storage of licensed data or business-relevant information. If possible, direct reference can be made 
to [DP-R-PD-ME-10], or to measures from the Risk area: integrity and availability (IA) of the safety and 
security dimension, such as [S-R-IA-ME-04] and [S-R-IA-ME-05].
In addition, the technical procedures used to delete data when the license expires must be documented.
It is also necessary to explain what measures have been taken to protect the licensed data or business-relevant 
information from cyberattacks. In this case, reference can be made to measures from the Risk area: integrity 
and availability (IA), for example [S-R-IA-ME-03].

`;