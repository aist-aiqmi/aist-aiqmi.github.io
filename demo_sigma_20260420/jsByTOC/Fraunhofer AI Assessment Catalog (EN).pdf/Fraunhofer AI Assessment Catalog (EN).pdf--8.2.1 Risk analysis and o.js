var toc_content = `131
Dimension: Safety and Security
In addition to the scenarios related to unavailability in classic IT systems, there is another form of unavailability 
that is specific to AI applications. It stems from the fact that the AI component may (continue to) learn its 
decision rules/model during operation and thus change how it functions based on this. If this continual learning 
causes the AI application to lose its original form and quality during operation, this constitutes a form of 
unavailability. This can be illustrated by the example of a chatbot80 that (continues to) learn online through user 
interaction. If a chatbot faces large quantities of unwanted inputs, such as expletives, meaning that it mainly 
outputs inappropriate expressions, then – even if the chatbot continues to answer messages in a timely manner 
and is not noticeably in error mode – this should be interpreted as a negative impact on its availability, as its 
AI-based functionality is no longer provided in its original form and quality. This example of data poisoning also 
illustrates the connection between risks relating to the integrity and availability of an AI application.
Similarly to adversarial examples, the cause of the change of the AI application during operation (in the sense 
of model drift) falls under the Dimension: Reliability (RE). Since a major functional change also poses 
a security risk, particularly if it is the result of targeted attacks such as data poisoning, this risk area also 
addresses AI application drift. However, the availability measures in this risk area do not relate to the design and 
development of the AI component (as in the Dimension: Reliability (RE)), but are based on classic IT security 
measures to limit potential unavailability and to quickly restore the availability of the AI application if required. 
Specifically, the focus is on (potentially financial) damage that the operator of the AI application may incur due 
to unavailability. Measures with the purpose of preventing or mitigating damage to users or the environment 
during or due to unavailability in terms of failure of the AI application, however, are addressed in the Risk area: 
intercepting errors at model level (IM) of the reliability dimension and in the Risk area: functional safety 
(FS). The two risk areas mentioned include measures to prevent damage in the event of failure of system-relevant 
components, e.g., due to harmful inputs.
8.2.1  Risk analysis and objectives
[S-R-IA-RI-01] Risk analysis and objectives
Requirement: Do
Integrity risk analysis: Integrity threats must be specified for the AI application being examined. Typical 
threats to integrity are those that lead to undesired modification of the AI application and specifically its 
outputs. Risks related to manipulation of training data or the training environment, as well as manipulation 
of the ML model, must be examined considering the application context in question. Furthermore, plausible 
possibilities of attack on the AI application must be analyzed and their probability of occurrence must be 
estimated. In this respect, it is also necessary to consider the risk of data leakage regarding training data or 
model parameters, if this creates an increased risk of manipulation of the AI application. Lastly, it is necessary 
to examine the effects of an integrity breach of the AI application and specifically the damage that may result 
from this.
Availability risk analysis: Availability threats must be specified for the AI application being examined. 
Considering the particular application context, the analysis should examine risks related to attacks that 
can cause a change in function, with regard to delays or interruptions in communication between the 
AI component and the embedding (for example, when online services are integrated), and with regard to the 
scalability of requests. In particular, it is necessary to take into account the frequency and duration of use of 
the AI application. Furthermore, the (non-physical) damage that could potentially occur if the AI application is 
unavailable must be estimated. (Physical damage is covered in the Risk area: functional safety (FS).)
Objectives: Based on the risk analysis, objectives regarding safeguarding and testing with respect to integrity 
and availability must be documented. In particular, the objectives should describe the circumstances in which 
control of the threats or risks identified as relevant in the risk analysis is gained.
80  Beuth, P. (March 2016). Twitter-Nutzer machen Chatbot zur Rassistin [Twitter users teach chatbot to be racist]. Zeit Online.  
https://www.zeit.de/digital/internet/2016-03/microsoft-tay-chatbot-twitter-rassistisch (in German, last accessed: 06/16/2021)

132
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

`;