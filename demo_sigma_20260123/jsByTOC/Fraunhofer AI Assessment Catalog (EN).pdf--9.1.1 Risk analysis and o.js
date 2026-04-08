var toc_content = `147
Dimension: Data Protection
9.1.1  Risk analysis and objectives
[DP-R-PD-RI-01] Risk analysis of training data
Requirement: Do
The properties of the training data used must be described and their choice or suitability must be documented 
and justified. Furthermore, it must be explained whether the training data of the AI component contains 
information that enables a personal reference to be made. In particular, the attributes, the volume, as well 
as the possibility of linking the data with other (personal) background information must be documented.
Sample training data must be available which can be used to understand the characteristics of the 
training data described in the documentation with regard to the protection of personal data.
[DP-R-PD-RI-02] Risk analysis of input and usage data
Requirement: Do
It is necessary to document and explain which of the input or usage data that is collected and stored 
during the operation of the AI application enables a potential personal reference to be made. In particular, 
the documentation must describe which potentially personal attributes are available and what possibilities 
there are for linking them to other data sets.
The volume of potentially personal inputs and outputs as well as other usage data (e.g., through logging) 
that is collected and stored must also be described.
Lastly, it is necessary to specify which of the collected data is to be used as training data 
(see [DP-R‑PD‑RI-01]), or is stored and used only for information and verification purposes, 
or for other purposes (e.g., load analysis).
Example data must be available that can be used to understand the characteristics of the input and usage 
data described in the documentation with regard to the protection of personal data.
[DP-R-PD-RI-03] Biometric features
Requirement: Do
It must be documented how biometric data (e.g., images, handwriting, health data, fingerprints, key and 
mouse operation) is collected and used by the AI application. In particular, it is necessary to explain whether 
and with which background knowledge and AI procedure a personal reference could be created from this 
data.
[DP-R-PD-RI-04] Model results and side channels
Requirement: Do
It must be analyzed and documented to what extent the results of the AI application are susceptible to 
an unintentional person reference being created. In addition to simply analyzing the output of the model, 
this also includes analyzing the possibility of linking the output with background information. Furthermore, 
the AI application should be examined with regard to possible side channels. For example, the processing time 
of input data could allow us to make an inference to person-related information.

148
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