var toc_content = `132
Dimension: Safety and Security
8.2.2  Criteria for achieving objectives
Appropriate safeguard measures must be implemented based on the threats identified in the integrity and 
availability risk area. In order to be able to objectively check during the final assessment of the measures if 
identified risks have been successfully mitigated, the objectives described in [S-R-IA-RI-01] must be translated 
into quantitative criteria. This should involve considering a more specific definition of the potential level of 
damage (see [S-R‑IA‑CR-01]) to be used for evaluating the residual risk.
[S-R-IA-CR-01] Quantification of acceptable risk
Requirement: Do
Criteria must be defined for assessing integrity and availability risks based on the level of potential damage 
and its probability of occurrence. The following aspects should be considered as a minimum when defining 
the criteria:
 
Amount of damage:
 – Relevance of the unintentionally disclosed or stolen data/information to the integrity of the AI application 
(in terms of vulnerability)
 – Extent of the availability breach (i.e., is the entire AI application or a subfunction affected?)
 – Duration of downtime (of a part) of the application
 – Number of persons and dependent systems affected in case of unavailability
 – Maximum permissible latency (latency requirements are usually dependent on the application context)
 – Costs due to downtime
 
Probability of occurrence, taking into account possible causes such as:
 – Attacks
 – Unauthorized access to model/data
 – Limited scalability
 – High number of inappropriate uses (prank requests, trolling), e.g., through automated requests or malware
The expected damage is determined over the lifetime of the AI application (or an annual average in the case 
of open-ended use) using the estimated probabilities of occurrence. It is important to work on the basis that 
these situations will arise frequently, particularly in the case of automated breaches, such as those caused 
by scripts for attacking the AI application. In addition to the expected average damage, possible deviations 
should also be taken into account, for example on the basis of worst-case scenario considerations.
With regard to the expected damage, it is important to specify threshold values for the above criteria, which – 
provided they are observed – would ensure an acceptable level of risk or expected damage. A transparent 
argument must be provided demonstrating that the specified criteria and threshold values are appropriate and 
sufficient for the application context in question and that they reflect the objectives defined in [S-R-IA-RI-01].

133
Dimension: Safety and Security
[S-R-IA-CR-02] Data access options
Requirement: Do
Based on the risks identified in [S-R-IA-RI-01] and for all data related to the AI application which, if accessed or 
modified, could reduce the quality of the AI application, it is necessary to record
for which group of people,
how often,
for what reason,
and under which other conditions
insight into or modification of the data point should be possible or, conversely, when this must not be permitted.
[S-R-IA-CR-03] Number of requests/queries of the AI application
Requirement: Do
Under certain circumstances, risks related to targeted attacks, functional changes, for example through 
data poisoning, and denial-of-service attacks, may mean the number of user requests have to be limited. 
If this is the case, the type and scope of the AI application’s request/query options (per user or overall) must 
be designed in a way that guarantees integrity and availability. Otherwise, justification must be provided to 
explain why it is not considered necessary to restrict user requests to the AI application.
8.2.3  Measures
[S-R-IA-ME-01] Security guidelines and instructions for use
Requirements: Do | Pr
Documentation should be available in which security objectives relating to integrity and availability are 
compiled from the business objectives, business processes, relevant laws, regulations and possible threats 
based on the [S-R-IA-RI-01] risk analysis. This security guideline also contains strategic guidance on how to 
achieve these objectives.
A process must be established and documented that makes users and developers aware of risks relating to 
integrity and availability and indicates how to act correctly with respect to the integrity of data, model and 
embedding as well as in relation to the availability of the AI application.
Measures should be described that ensure that all users take note of them. The extent to which these 
measures contribute to mitigating or controlling the identified risks in accordance with [S-R-IA-CR-01] must 
also be explained.  
(based on BSI C5 SA-01)
8.2.3.1  Data
[S-R-IA-ME-02] Data integrity
Requirement: Do
Documentation should be available on what measures, such as signatures or checksums, are taken to ensure 
the integrity of the training data, the trained model (i.e., hyperparameters and weights) and other stored 
data or new incoming data during operation in the training and production environments. Data integrity 
measures can prevent attackers from manipulating weights or data sets, for example, to make the 
AI application susceptible to certain types of attacks (data poisoning).

`;