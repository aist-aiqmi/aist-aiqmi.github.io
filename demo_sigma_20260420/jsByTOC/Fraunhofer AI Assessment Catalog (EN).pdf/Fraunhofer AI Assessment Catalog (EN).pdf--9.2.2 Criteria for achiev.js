var toc_content = `153
Dimension: Data Protection
[DP-R-BI-RI-04] Model results and side channels
Requirement: Do
In addition to and, if applicable, with reference to [DP-R-PD-RI-04], the sensitivity of the results of the 
AI application must be analyzed with regard to the violation of licensing terms or the undesired visibility of 
business-relevant information. In addition to simply analyzing the output of the model, this also includes 
analyzing the possibility of linking the output with background information. Furthermore, the AI application 
must be examined with regard to possible side channels.
[DP-R-BI-RI-05] Risk analysis of the overall AI application
Requirement: Do
Risk analysis: In view of the business-related data described in [DP-R-BI-RI-01] to [DP-R-BI-RI-04], it is 
necessary to analyze what risks exist with regard to unauthorized access by third parties to business-relevant 
information and, in particular, with regard to the violation of licensing terms, both during the development 
and during the use of the AI application. Thus, possible confidentiality threats must be specified i.e., plausible 
causes or possibilities of attack are examined for the particular application context, through which the 
sensitive data described could be accessed without authorization. The probability of these threats occurring 
must be estimated. It is also necessary to analyze the potential damage that could result from unauthorized 
access to business-relevant information and, in particular, licensed data.
Objectives: Based on the risk analysis, the objectives for protecting business-relevant information and the 
licensing terms are formulated. This must at least include compliance with the licensing terms or other usage 
terms associated with the data.
9.2.2  Criteria for achieving objectives
[DP-R-BI-CR-01] Quantification of risk
Requirement: Do
Criteria must be defined and documented to assess the risk of licensing terms being violated or business-
relevant information not being adequately protected. Specifying different criteria for different data sets 
requires detailed justification for each data set. The criteria should preferably be quantitative in nature, but 
qualitative criteria can also be used. The following points should be addressed and discussed as a minimum 
when selecting the criteria:
 – Extent and type of publication or unwanted access to data
 – Volume and scope of unintentionally disclosed data
 – Criticality of the unintentionally disclosed data for the operator’s business relations and competitiveness
 – Costs (e.g., in case of violation of licensing terms)
 – Criticality of the unintentionally disclosed data with respect to the manipulability or attackability of the 
AI application
 – Effort to consult background information
 – If relevant to the type of business-related data:
 ·
Group sizes when using anonymization methods (e.g., k-anonymity, l-diversity or t-closeness)
 ·
Group sizes in statistical aggregation
 ·
Privacy budgets (differential privacy) or limits on query options
 
The choice of criteria must be justified in a transparent way. In particular, criteria that are not from the above 
list must be explained.
Target intervals must also be defined for the selected quantitative criteria, which, if met, produce an 
acceptable level of risk.
It must be demonstrated that the selected criteria and, if applicable, target intervals adequately reflect the 
objectives defined in [DP-R-BI-RI-05].

154
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