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

80
Dimension: Transparency
 – Possibility and necessity of logging decisions and the data required for this (such as input data or additional 
information, e.g., about the operating status, the operational environment or random seeds, if results are 
obtained using non-deterministic methods)
 
The list serves as a starting point for establishing suitable criteria for the application context. Other aspects not 
listed here can also be used to assess auditability provided they are described and the reasons for choosing 
them are justified.
Qualitative target characteristics or, if applicable, quantitative target values are also documented for each 
specified criterion. These criteria must be met to achieve the required auditability of the AI application in 
accordance with the target objectives defined in [TR-R-AU-RI-01].
Justification must be provided that the selected criteria and associated target values conform to the objectives 
defined in [TR-R-AU-RI-01].
6.3.3   Measures
6.3.3.1  Data
[TR-R-AU-ME-01] Availability of training and test data
Requirements: Do | Pr
A storage system for archiving training and test data collected before the AI application is put into operation 
must be developed and documented. Under this system, the training and test data must be available to 
experts and developers in a form that can be used to perform necessary introspections (see Risk area: 
transparency for experts (EX)). The access rights as well as the storage must be aligned with the 
Dimension: Data Protection (DP) if the data in question also includes personal or other data that needs to 
be protected.
If the AI application is capable of relearning, then there must be a process for logging and storing training 
and test data each time the AI application relearns. In particular, the relevant training and test data should 
be versioned and it must be possible to trace which data was used to train the version currently in operation. 
If the AI application learns continually during operation, [TR-R-AU-ME-03] must also be considered.
6.3.3.2  AI component
There are no planned measures for this category.
6.3.3.3  Embedding
[TR-R-AU-ME-02] Software environment and interfaces
Requirement: Do
Documentation of the structure of the AI application must be available which describes the various software 
components and other system components (e.g., cloud storage) and explains how they interact. If this has 
already been described in the AI profile or elsewhere, reference can be made to the relevant documentation.
Documentation should be available on the software libraries used and the exact versions of the packages 
used.
Documentation should be available on the embedding of the AI component with descriptions of all interfaces 
and the respective input and output formats at the interfaces.

`;