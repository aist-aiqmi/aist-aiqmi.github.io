var toc_content = `58
Dimension: Autonomy and Control
5.2.1  Risk analysis and objectives
[AC-R-IE-RI-01] Risk assessment
Requirement: Do
Risk analysis: An analysis is performed to determine which risks exist for the AI application in question with 
regard to insufficient information or empowerment of users and affected persons and what potential damage 
can result from this. The analysis is structured as follows:
 – The risks arising from insufficient information regarding the correct use of the AI application are 
investigated. It should be considered to what extent or in what way the AI application could be operated 
incorrectly or supervised insufficiently by users. Both normal operation and exceptional situations must be 
considered, although in the case of the latter, reference can be made to the explanations in the Risk area: 
functional safety (FS). An assessment is then carried out regarding potential damage that may occur if 
the AI application is not used/operated/supervised by humans as intended.
 – In addition, the analysis should describe how the AI application interacts with users and affected persons 
and what the user interface looks like. Based on this, an assessment is made regarding the extent to 
which involved individuals may develop an inappropriately high level of trust or emotional attachment to 
the AI application. It should also analyze which (material or non-material) damage scenarios may occur in 
the case of inappropriately high trust or emotional attachment by involved persons. As a minimum, it is 
necessary to investigate to what extent and on which topics users or affected persons can be manipulated 
by the AI application.
 – Lastly, it is necessary to examine the damage that may occur if users and affected persons are insufficiently 
informed about the business model behind the AI application or possible interests with regard to the 
AI application.
Objectives: Based on the risk analysis, objectives are formulated regarding informing and empowering users 
and affected persons.  
The information that users and affected persons should receive about the AI application is documented. 
This should cover both information on proper use of the application and education on the associated risks. 
A specific list is provided in [AC-R-IE-CR-02]. Qualitative objectives are also set with regard to the visibility 
of information. It should be explained that information-related objectives have been set taking into account 
the interests of all humans involved in accordance with the proportionality principle (e.g., protection of trade 
secrets, public interest) and are appropriate to the context of the AI application.
 
If necessary, requirements for the qualification of users resulting from the risk analysis are listed, providing 
a supplement to the requirements documented in [AC-R-TD-ME-02]. These can be supplemented by 
additional objectives regarding empowering users and affected persons. The choice of objectives must be 
justified.
5.2.2  Criteria for achieving objectives
[AC-R-IE-CR-01] Qualification of users
Requirement: Do
The requirements for the qualification of users are set based on the objectives in [AC-R-IE-RI-01], 
the documentation in [AC-R-TD-ME-02] and [AC-R-TD-ME-05] and also taking into account [S-R-CD-CR-01].

59
Dimension: Autonomy and Control
[AC-R-IE-CR-02] Comprehensiveness of information for users and affected persons
Requirement: Do
The risk analysis serves as a basis for listing content/information that must be communicated to users and 
affected persons in order to enable proper and self-determined use and awareness of all relevant risks. If 
certain groups of people within the users and affected persons are to be given different information, separate 
lists must be created for these groups of people. For example, bank employees who directly supervise an 
AI application for credit checks should be provided with information on the operation and functionality of the 
AI application that may not be relevant for customers. The list will be used as part of the overall assessment 
of whether the information is complete for users and affected persons. When compiling this list, at least the 
following points should be considered:
 – Users and affected persons are informed that the AI application is being used.
 – Insight into the purpose and functions of the AI application is provided.
 ·
Users and affected persons are able to understand the scope and purpose of the AI application.
 ·
A precise and complete description of the AI application is available. (The definition of “complete” 
must be specified depending on the application context. Reference can be made to AI Profile (PF), 
for example.)
 ·
Reference is made to information from other dimensions (e.g., risks, relevant target values are 
communicated). In particular, users and affected persons are informed about how complete, reliable 
and fair the outputs derived by the AI application are. For example, an AI application may also provide 
a confidence statement for each output that is linked to understandable recommendations for action 
by the individual. Similarly, guidance is provided on how to verify the outputs of the AI application. 
For example, this can be done by consulting other independent sources of information.
 – Insight into the business models of the operators and the embedding of the AI application in processes 
is provided.
 ·
The underlying business model of the AI application and its purpose are explained.
 ·
The distribution of tasks between the AI application and its users is described.
 ·
The work processes associated with the AI application and the persons and roles involved 
(including contact persons for questions) are described (e.g., in [AC-R-TD-RI-01]).
 ·
The consequences of a partial or full shutdown of the AI application are described 
(as in [AC-R-TD-ME-06]).
 ·
Users and affected persons are aware of the ways in which a (partial) shutdown of the AI application can 
be effected. They are aware of the relevant decision-making committees and processes (see also [AC-R-
TD-ME-06], [AC-R-TD-ME-07], [S-R-CD-ME-01] and [S-R-CD-ME-03]).
 – Information on correct use and supervision as well as intervention options is provided. It is necessary to 
ensure there is a way to implement the actions.
 ·
Users and affected persons can give their informed consent or reject use of the application.
 ·
Users and affected persons are informed about alternatives to using the AI application. For example, 
if it is possible to direct an issue to a designated responsible person instead of having it processed 
automatically by the AI application, the users or affected persons will be made aware of this option.
 ·
Users are informed about how to use the AI application correctly, e.g., through proper instruction.
 ·
A user manual is available that describes the AI application, how to use and supervise it correctly, 
and the intervention options.
 
 
 
–  Correctness of the description
 
 
 
–  Regular reviews (at least once a year) and updates to the manual
 
 
 
–  Versioning
 ·
Users are able, if required, to overwrite AI application outputs or even to intervene in actions while the 
AI application is operating. In particular, they should be able to use the intervention options described 
in [AC-R-TD-ME-02] and [S-R-FS-ME-12].

60
Dimension: Autonomy and Control
 ·
Users are informed about how the AI application is effectively and appropriately supervised and 
controlled. At the very least, users should be informed about the processes described in [AC-R-TD-
ME-05] for supervising and controlling the AI application.
 ·
Users know how to behave in exceptional situations. Information about this is provided in [S-R-FS-
ME-12], [S-R-FS-ME-01], [S-R-IA-ME-01] and [S-R-CD-ME-03].
 – Users and affected persons are informed about the risks.
 ·
Users and affected persons are informed about application-specific risks in relation to user autonomy, 
particularly in cases where the AI application can influence the decisions of humans by making 
suggestions or even by manipulating them. If relevant for the application in question, information is 
provided about the risk of emotional attachment/dependence and about the risk of placing too much 
trust in the AI application (automation bias).
 ·
Users and affected persons are informed about their rights and ways to complain. As a minimum, they 
should be informed about the ways to complain as described in [AC-R-TD-ME-03].
If any of the above aspects are not communicated to users or affected persons, justification of this must be 
provided. Furthermore, the list can be supplemented by additional (application-specific) content/information.
[AC-R-IE-CR-03] Visibility and accessibility of information for users
Requirement: Do
Requirements regarding the visibility and accessibility of the information to be communicated according to 
[AC-R-IE-CR-02] are specified. The following points should be addressed as a minimum:
 – The extent to which knowledge of the information is required: This ranges from retrievable information 
(e.g., instruction manual) and terms of use that must be read and confirmed before using the 
AI application to the explicit instruction and training of users, as well as the completion of knowledge tests. 
The requirements in this respect should be consistent with [S-R-CD-ME-01].
 – Preparing the information: This should be comprehensible and adapted to the qualification of the persons 
involved as required in [AC-R-IE-CR-01].
Justification must be provided that the criteria are consistent with the objectives defined in [AC-R-IE-RI-01].
5.2.3  Measures
The following measures are not specifically assigned to any of the categories of data, AI component, embedding 
or operation.
5.2.3.1  Data
5.2.3.2  AI component
5.2.3.3  Embedding

`;