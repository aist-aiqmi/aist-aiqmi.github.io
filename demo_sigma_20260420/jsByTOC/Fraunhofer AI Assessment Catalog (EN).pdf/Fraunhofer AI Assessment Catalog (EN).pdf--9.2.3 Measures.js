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

`;