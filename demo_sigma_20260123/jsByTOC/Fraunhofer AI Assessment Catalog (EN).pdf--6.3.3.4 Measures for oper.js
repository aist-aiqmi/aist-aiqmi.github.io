var toc_content = `81
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

82
Dimension: Transparency
[TR-R-AU-ME-06] Logging of user queries
Requirements: Do | Pr
If a process for responding to user queries has been established under [TR-R-UA-ME-08], it must be 
documented
 – how user queries and the explanations given in response are logged.
 – for how long this information is stored. It must be ensured that the data of users and affected persons is 
protected in this process.
 – that information is provided about the storing of the queries.
 – whether a process is established to delete these queries in certain cases. If applicable, the procedure should 
be aligned with the Dimension: Data Protection (DP).
6.3.4  Overall assessment
[TR-R-AU-OA] Overall assessment
Requirement: Do
Documentation should be available explaining that the criteria regarding the auditability of the AI application 
defined in [TR-R-AU-CR-01] are met on the basis of the measures taken.
There must be a record of the extent to which relevant negative impacts on other dimensions (in particular the 
Dimension: Data Protection (DP)) were identified in this risk area that need to be addressed and evaluated 
in the cross-dimensional assessment.
If not all requirements specified in [TR-R-AU-CR-01] are met, the deviations must be documented. 
This also applies to requirements that have only been partially met, e.g., where the criteria have not or not 
always been met.

`;