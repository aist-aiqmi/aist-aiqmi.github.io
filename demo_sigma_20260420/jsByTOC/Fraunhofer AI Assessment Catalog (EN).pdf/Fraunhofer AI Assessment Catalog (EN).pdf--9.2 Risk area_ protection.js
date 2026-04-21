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

`;