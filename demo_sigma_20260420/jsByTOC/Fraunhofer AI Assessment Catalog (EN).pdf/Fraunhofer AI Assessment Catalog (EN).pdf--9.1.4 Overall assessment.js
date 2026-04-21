var toc_content = `151
Dimension: Data Protection
[DP-R-PD-ME-11] Ability to provide information about personal data
Requirements: Do | Pr
It must be documented how it is ensured that data subjects and users can obtain information about the 
data used by them or collected about them.
How data subjects and users can find out what decisions the AI application has made regarding them or their 
queries must be documented. In some circumstances, reference can be made to the documentation from the 
Dimension: Transparency (TR) and/or Dimension: Autonomy and Control (AC).
A breach of confidentiality of data may not be recoverable, depending on its nature. However, procedures can 
be introduced to reduce damage, for example to notify data subjects. If these types of processes have been 
established, they should be documented.
9.1.4  Overall assessment
[DP-R-PD-OA-01] Evaluating anonymization
Requirement: Do
It must be explained to what extent the anonymization measures taken and documented result in the 
anonymized data not allowing any undesired/unauthorized creation of a personal reference, or if this is only 
possible with a great deal of effort, which would typically not be proportional to the expected benefit.
[DP-R-PD-OA-02] Declaration of data protection conformity
Requirement: Do
It must be documented that the use of the potentially personal data described in [DP-R-PD-RI-01] to [DP-R-
PD-RI-04] is compliant with the GDPR and the BDSG (German Data Protection Law). Reference must be made 
to points including the risk assessment, the consent and protection mechanisms adopted and the legitimate 
interest for processing.
In addition, a data protection impact assessment in line with Art. 35 Para. 1 of the GDPR must be made 
available, or clear justification must be provided that such an assessment is not necessary due to the 
measures taken (e.g., to anonymized data). If a data protection impact assessment has been prepared, the 
data protection officer must confirm its compliance with the GDPR.
Lastly, a summary must be provided demonstrating that the objectives set in [DP-R-PD-CR-01] have been 
achieved.
If not all requirements specified in [DP-R-PD-CR-01] are met, the deviations must be documented. This also 
applies to requirements that have only been partially met, e.g., where the criteria have not or not always been 
met.

152
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

`;