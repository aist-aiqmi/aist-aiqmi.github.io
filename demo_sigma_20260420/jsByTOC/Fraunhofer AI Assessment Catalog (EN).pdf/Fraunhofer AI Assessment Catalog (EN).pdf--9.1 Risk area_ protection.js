var toc_content = `146
Dimension: Data Protection
9.1  Risk area: protection of personal data (PD)
If an AI application processes personal data, there is a risk that specific AI procedures or the addition of 
background knowledge (e.g., other data sets) will allow individuals to be re-identified from the data set. 
Depending on the sensitivity of the information about a person disclosed in this way, this constitutes a serious 
violation of their personal rights. This creates the requirement that the data queried, processed or stored by the 
AI application must be effectively protected both during training and in operation.
Under the General Data Protection Regulation (GDPR), AI applications can only access personal data with the 
consent of the data subjects. Further processing and disclosure to third parties – subject to further restrictions – 
can only take place with the consent of the data subject. It must be ensured that there are no protection gaps 
that would enable unauthorized access. Individuals have the right to have personal data erased.85
Regarding the protection of personal data, the GDPR also ensures data subjects have an extensive right to object 
to the processing of their data at any time. In particular, the legal implementation of this objection to processing 
can pose specific technical and organizational challenges in connection with AI applications. The obligations 
arising from the GDPR that would apply specifically to operators in relation to the deletion of personal data have 
not been fully clarified from a legal perspective. However, it is possible to avoid a potential obligation to provide 
evidence that personal data has been completely deleted as well as the potentially complex technical and 
organizational consequences associated with this by taking appropriate measures. For example, anonymization 
of training data can largely prevent personal references from being made. This would avoid the need to provide 
evidence that there is no longer any personal reference affected by an objection to processing after the data has 
been deleted, and in particular the extreme case of having to completely retrain the model in the event of an 
objection.
The required measures also include informing data subjects about the purpose and use of their personal data or 
data derived from it. In addition to the consent, information, objection and revocation mechanisms to be 
provided for the use of personal data, the principles of data minimization and use for a specific purpose must be 
observed.
The purpose of the risk analysis described below is to determine which specific threats to the protection of 
personal data are possible for the AI application being examined. This should specifically examine the type and 
significance of the data queried or stored in connection with the AI application and where potential protection 
gaps exist. In particular, taking into account any measures used to anonymize or aggregate data, the objective 
is to achieve low risk of re-identification or of the possibility of establishing a personal reference by linking it to 
background knowledge. While it is usually not possible to completely rule out the possibility of re-establishing 
a personal reference, the effort required to re-identify persons in a data set should be disproportionately high.
85  The description in this section and also partly in the following sections draws heavily on section “3.6 Data protection” of the white paper: 
Poretschkin, M.; Rostalski, F.; Voosholz, J. et al. (2019). Trustworthy Use of Artificial Intelligence. Sankt Augustin: Fraunhofer Institute 
for Intelligent Analysis and Information Systems IAIS. https://www.ki.nrw/wp-content/uploads/2020/03/Whitepaper_Thrustworthy_AI.pdf 
(last accessed: 06/18/2021)

147
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

`;