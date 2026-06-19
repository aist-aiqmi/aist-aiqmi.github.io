var toc_content = `154
Dimension: Data Protection
9.2.3  Measures
9.2.3.1  Data
[DP-R-BI-ME-01] Perturbation of modeling data
Requirement: Do
In addition to [DP-R-PD-ME-03], it is necessary to document the ways in which data is changed (perturbed) 
by adding intentional random distortions during modeling to prevent or impede the extraction of 
business‑relevant information and, in particular, licensed data. Possible perturbation methods include:
 – Adding additive or multiplicative random noise. The type (e.g., white or uniform noise) and volume 
(e.g., amplitude and standard deviation) of the noise must be specified.
 – Random shuffling of attribute values.
 
If other methods are used, justification must be provided as to why they are suitable as a way of making the 
extraction of business-relevant information and, in particular, licensed data more difficult.
[DP-R-BI-ME-02] Aggregations and generalization of data for modeling
Requirement: Do
In addition to [DP-R-PD-ME-04], it is necessary to document the links/aggregations and generalizations of 
licensed data and business-relevant information created for modeling. Furthermore, the aggregations and 
generalizations must be evaluated in terms of the extent to which they make the unwanted visibility of this 
data more difficult.
[DP-R-BI-ME-03] Anonymization
Requirement: Do
If applicable and appropriate for the type of business-relevant information, it is also possible to use 
anonymization mechanisms for licensed data or business-relevant information in addition to the measures 
in [DP-R-PD-ME-01]. If these types of measures are taken, it is necessary to explain which anonymization 
method has been applied to which business-related data set. In addition, the effectiveness of the method 
must be evaluated, including in relation to potentially available background information.
[DP-R-BI-ME-04] Pseudonymization
Requirement: Do
If applicable and appropriate for the type of business-relevant information, it is also possible to use 
pseudonymization mechanisms for licensed data or business-relevant information in addition to the measures 
in [DP-R-PD-ME-02]. If these types of measures have been taken for business-related data, 
it is necessary to document the choice of method (such as hashing) as well as the data sets processed with it.
Pseudonymization is not the same as anonymization and does not usually provide sufficient protection with 
regard to re-identifiability, for example of pseudonymized companies. Therefore, it must be demonstrated 
to what extent the procedures used for pseudonymization are effective in combination with other measures 
taken (e.g., from the Risk area: integrity and availability (IA)) and, if applicable, what gaps exist.

155
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

`;