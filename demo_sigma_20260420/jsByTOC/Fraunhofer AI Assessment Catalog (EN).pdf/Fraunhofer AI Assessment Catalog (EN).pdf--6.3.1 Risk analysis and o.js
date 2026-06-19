var toc_content = `79
Dimension: Transparency
6.3  Risk area: auditability (AU)
The auditability of an AI application is an umbrella term for the detailed technical documentation on the 
structure, development and workings of the AI application and, in particular, the data used for this purpose.
The auditability of an AI application can serve different purposes. Firstly, subsequent audits (internal or external) 
with potentially different issues can be made easier or actually made possible in the first place. Documentation 
and logged data can be essential requirements, for example, to trace specific outputs of the AI application or the 
cause of errors in liability matters. The reproducibility of outputs and of the ML model itself also contributes to 
this. Secondly, detailed documentation facilitates changes or improvements to the AI application.
Potential auditability requirements may result from the Risk area: transparency for experts (EX), for example. 
However, conflicts may arise with the Dimension: Data Protection (DP), for example, if the data that to be 
documented is of a personal nature, and the Dimension: Safety and Security (S), as auditability measures may 
increase the vulnerability of the AI application. Any such conflicts must be discussed in the cross-dimensional 
assessment.
6.3.1  Risk analysis and objectives
[TR-R-AU-RI-01] Risk analysis and objectives
Requirement: Do
Risk analysis: An analysis is performed to determine which hazards and potential damage may arise due to 
limited auditability, giving consideration to the specific application context of the AI application as well as the 
legal framework. The significance of each auditability aspect (including documentation as a basis for external 
audits, traceability and reproducibility) for the application context in question and potential consequences for 
various degrees of non-compliance should also be examined. In addition, the occurrence probability of the 
identified potential damage must be estimated.
Objectives: Qualitative objectives are defined regarding the different auditability aspects of the AI application 
based on the findings of the risk analysis. This involves describing in detail what auditability specifically 
means in the context of the AI application, e.g., for which parts of the AI application and to what extent 
documentation is required (training data, model characteristics and hyperparameters, logging of input data, 
outputs, system architecture), and to what extent the outputs of the AI application should be traceable or 
even reproducible.
6.3.2  Criteria for achieving objectives
[TR-R-AU-CR-01] Auditability level of the AI application
Requirement: Do
Criteria are established and documented to help meaningfully assess the auditability of the AI application. 
The following aspects should be considered as a minimum when selecting the criteria:
 – Accessibility, source, content, date, revision number and possibility, necessity and duration of storing 
training and test data
 – Existence of documentation explaining the system architecture
 – Possibility and necessity of reproducing outputs, if necessary within a specified period of time, for example 
by accessing saved model versions

`;