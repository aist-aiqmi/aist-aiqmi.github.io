var toc_content = `148
Dimension: Data Protection
[DP-R-PD-RI-05] Risk analysis of the overall AI application
Requirement: Do
Risk analysis: The overall risks and potential damage associated with the potentially personal data described 
in [DP-R-PD-RI-01] to [DP-R-PD-RI-04] must be documented, both during development and operation of the 
AI application. This involves analyzing the risks with regard to unintended or unauthorized processing of and 
access to personal data that has been collected and used in accordance with data protection requirements. 
In addition, it is necessary to examine the risk that unwanted or unauthorized personal references could be 
created by using background information and/or AI techniques. An assessment must also be made of the 
damage that could result if the potentially personal data was not viewed and used as intended.
Objectives: Based on the risk analysis, formal protection objectives are set in connection with personal data, 
which must at least comply with the GDPR and are implemented and examined in more detail below.
9.1.2  Criteria for achieving objectives
[DP-R-PD-CR-01] Quantification of data protection risk
Requirement: Do
The criteria to be used to assess the risk of creating a personal reference must be documented. Criteria should 
preferably be quantitative, such as
 – Group sizes when using anonymization methods (e.g., k-anonymity, l-diversity or t-closeness),
 – Group sizes in statistical aggregation,
 – Privacy budgets (differential privacy) or limits on query options,
 – Effort to consult useful background information,
 – Effort to create a personal reference through calculations (e.g., when using encryption methods).
 
In addition, qualitative criteria may be considered, such as evidence of legitimate interest within the meaning 
of the GDPR as well as GDPR-compliant handling of explicit consent for the use of personal data. Other 
criteria not listed here may also be specified. Specifying different criteria for different data sets requires 
detailed justification for each data set.
Target intervals must also be defined for the selected quantitative criteria, which, if met, produce an 
acceptable level of risk.
The choice of criteria and, if applicable, target intervals must be justified in a transparent way. In particular, 
it must be made clear to what extent these are consistent with the objectives defined in [DP-R-PD-RI-05].
9.1.3  Measures
9.1.3.1  Data
[DP-R-PD-ME-01] Anonymization
Requirement: Do
It is necessary to document which procedures are used to anonymize data. From the many existing 
procedures, the following are examples of established anonymization procedures:
 – K-anonymity
 – Differential privacy
The choice of anonymization methods used must be justified. In addition, the effectiveness of the procedures 
must be evaluated, including in relation to potentially available background information.

`;