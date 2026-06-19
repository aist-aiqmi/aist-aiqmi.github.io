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

149
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

`;