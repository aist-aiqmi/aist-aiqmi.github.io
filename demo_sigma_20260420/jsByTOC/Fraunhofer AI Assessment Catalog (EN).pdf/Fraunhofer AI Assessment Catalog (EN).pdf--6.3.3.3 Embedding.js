var toc_content = `80
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

81
Dimension: Transparency
6.3.3.4  Measures for operation
In the case of transparency requirements at runtime, it may be necessary to log input data, predictions or 
internal states of the AI application. If such a requirement exists, a process for logging and storing the necessary 
data must be developed. In some cases, this may also involve the Dimension: Data Protection (DP). The 
following measures cover the storage of various data during operation.
[TR-R-AU-ME-03] Availability of data from operation (for training and/or validating the model)
Requirement: Do
If the AI application continues to learn during operation, or data on validating or upgrading the model is 
collected during operation, there is a logging and storage system for the data collected for this purpose in 
addition to [TR-R-AU-ME-01]. In particular, if the model is trained further during operation without revision 
by means of the collected data, this data should also be made available to the experts and developers 
afterwards. The system for and scope of logging is documented.
If the data to be stored is personal information or business data that needs to be protected, then the 
Dimension: Data Protection (DP) must be involved.
[TR-R-AU-ME-04] Storage of model and training parameters
Requirement: Do
The model parameters, e.g., the weights of a neural network, are stored and versioned.
The hyperparameters that characterize the training procedure when the model relearns or continuously learns 
during operation are stored and versioned.
[TR-R-AU-ME-05] Reproducibility and traceability
Requirement: Do
A logging and storage system for the outputs of the AI application must be available. The system for and 
scope of logging is documented. Access to logged outputs (e.g., on the basis of [RE-R-RO-ME-08] or to 
correct outputs as in [AC-R-TD-ME-02]) must be aligned with the appropriate measures from the other 
dimensions.
A logging and storage system for the inputs of the AI application must be available. The system for and scope 
of logging is documented. If necessary, reference can be made to [TR-R-AU-ME-03]. Access to logged inputs 
(e.g., on the basis of [RE-R-RO-ME-07]) must be aligned with the appropriate measures from the other 
dimensions.
If model results are not produced using a deterministic method, and if required for reproducibility or 
traceability purposes, the intermediate representations computed during ML model inference (e.g., feature 
maps of a neural network) are stored. In doing so, it is possible to evaluate to what extent logging system 
states such as random seeds is sufficient to reliably reproduce these intermediate representations. Otherwise, 
justification must be provided as to why this data is not stored.
If the data to be stored is personal information or business data that needs to be protected, for example, then 
the Dimension: Data Protection (DP) must be involved.
It must be demonstrated how the measures taken contribute to the reproducibility and traceability required in 
[TR-R-AU-CR-01]. Justification must be provided if the scope of logging and storage is not sufficient to meet 
the requirements.

`;