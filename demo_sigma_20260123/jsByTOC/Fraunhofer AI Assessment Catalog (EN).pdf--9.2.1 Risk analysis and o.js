var toc_content = `152
Dimension: Data Protection
9.2  Risk area: protection of business-relevant information (BI)
Aside from personal data, the digitalization of business processes is generating more and more business data that 
requires protection. Machine Learning models for various applications are being trained on powerful computers 
using large volumes of data: from anomaly detection in condition monitoring and predictive maintenance 
to recommendations for machine settings and autonomous vehicles, cooperative robots and smart controls. 
Currently, learning from these big data sets mainly happens in the cloud, i.e., on a central big data platform 
where historical data is continuously supplemented by data sets newly acquired from operation. However, this 
type of application is neither technically desirable nor legally possible in numerous areas: While data protection is 
the primary challenge to overcome in healthcare, the information contained in business data, for example about 
devices and machine manufacturers, carries the risk of internal and business secrets being exposed.
This means that non-personal data may also require protection, e.g., because it should remain secret on 
competitive grounds or because its use is contractually regulated. In the following, the latter will simply be 
referred to as licensed data, and, in short, concerns all types of data to which third parties have rights. In 
particular, this can also be publicly accessible data. For the sake of simplicity, the rights of third parties are 
referred to below as “licensing terms”. In the following, business-relevant information refers to all data that 
relates to the operator or the operator’s business and/or business contacts and that should be protected from 
access or unregulated viewing by third parties. This specifically includes data containing business secrets and, 
where applicable, licensed data. In particular, business-relevant information includes all data that, if disclosed, 
would negatively affect the company’s competitiveness or damage the security or integrity of the operator. The 
model in the AI component itself can also be business-relevant information if, for example, it is a unique selling 
point of the operator and thus gives the operator a competitive advantage.
9.2.1  Risk analysis and objectives
The risk analysis for this risk area should determine the extent to which the AI application being assessed 
processes business-relevant information and which potential threats of the risk area are possible in the specific 
application context. Based on this, objectives for protecting business-relevant information must be defined.
[DP-R-BI-RI-01] Risk analysis of training data
Requirement: Do
In addition to and, if applicable, with reference to [DP-R-PD-RI-01], it must be documented whether and 
which elements of the training data used contain business-relevant information or, in particular, are licensed 
data.
[DP-R-BI-RI-02] Risk analysis of model characteristics
Requirement: Do
It must be documented whether and which properties of the ML model (e.g., the type of model, model 
parameters) or of the AI component constitute business-relevant information or, in particular, are licensed 
data.
[DP-R-BI-RI-03] Risk analysis of input and usage data
Requirement: Do
In addition to and, if applicable, referring to [DP-R-PD-RI-02], it must be documented whether and which of 
the input and usage data used contains business-relevant information or, in particular, is licensed data.

153
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

`;