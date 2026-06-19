var toc_content = `Protection requirements analysis
Although personal and business-related data typically presents different damage scenarios, the amount of 
potential damage still depends in both cases on the type or category of data processed or stored by the 
AI application.
The handling of personal data is governed by the European General Data Protection Regulation as well as the 
German Federal Data Protection Act. It is important to note that unauthorized access by third parties constitutes 
a violation of legal requirements. The same applies, for example, to the mere occurrence of unauthorized access, 
to unsuitably long storage periods or the inability to provide information about the stored data. Both the non-
material damage caused by violation of the personal rights of the data subject(s) and the amount of potential 
financial damage, e.g., through fines or damage to reputation, depend on the significance/category of the 
personal data stored.
The same is true with respect to the financial damage to an organization or company in the event of unjustified 
access to licensed data or the disclosure of business secrets depending on their nature and significance. The term 
“licensed data” is used in the following for ease to refer to all types of data to which third-party rights exist. 
More generally, business-related data is data that contains information about the operator, in particular business 
secrets.
The protection requirement is categorized as follows:
High
The protection requirement is classified as high if one of the following three scenarios applies:
Personal data is processed that contains particularly sensitive personal information, 
or disclosing it would have economic or security-critical consequences for the person 
in question.
Example: Patient file, certificate of good conduct, account information, application 
documents
Licensed data is processed for which the disclosure/access by third parties would violate 
contractual agreements.
Example: Data from other companies was purchased to train the model. Access to this 
data by third parties would violate the contractual agreements.
Organization/business-related data is processed which, if it became known/was accessed by 
third parties, would severely damage the integrity or competitiveness of the organization.
Example: Model extraction would mean that the corresponding AI application could be 
copied or deliberately manipulated by other organizations.
Medium
The protection requirement is evaluated as medium if one of the following three scenarios 
applies and there is no high potential for damage for any of the named data categories 
(personal/business-related or licensed) according to the top row of this table.
The AI application only processes/stores data that does not contain sensitive personal 
information or that would not cause a major economic disadvantage or threaten the security 
of the subject if accessed by a third party.
The AI application processes/stores licensed data, which when accessed by third parties could 
result in negligible consequences.
The AI application processes/stores business-related data, the disclosure of which could result 
in medium economic damage that does not threaten the existence of the company.
Example: Leisure interests of a person, played tracks, videos viewed in anonymized form
Example: An AI application that performs trend analysis based on publicly available social 
media data.

145
Dimension: Data Protection
Low
The AI application does not request, process or store personal data.
In addition, the AI application does not store/process any licensed data.
Disclosure of the processed data and model characteristics (e.g., model parameters) would 
have no or negligible impact on the integrity or competitiveness of the organization.
Example: A company uses a standard AI solution to predict market development. 
Other companies in the industry have similar solutions and it is assumed that there is 
no incentive on the part of the competition to expose or copy this system. For example, 
data from the DAX or other economic indicators that are freely available are used.
[DP-P] Protection requirements analysis documentation
Requirement: Do
The protection requirement of the AI application for the data protection dimension is defined as low, medium 
or high. The choice of the low/medium/high category is justified in detail with reference to the table above.
If the protection requirement for the data protection dimension is low, the individual risk areas do not need to 
be examined more closely. However, if a medium or high protection requirement has been identified, each risk 
area must be examined in more detail below.

146
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

`;