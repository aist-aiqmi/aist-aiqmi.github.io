var toc_content = `130
Dimension: Safety and Security
8.2  Risk area: integrity and availability (IA)
Integrity and availability are protection objectives of classic IT security. They are revisited in this AI assessment 
catalog because – firstly – existing risks with regard to these protection objectives are increased by the use of 
Machine Learning and – secondly – new types of risks are emerging, for example because data represents a more 
sensitive attack vector for AI technologies than is the case with classic IT systems. In particular, the fact that 
AI applications are data-driven IT systems results in a larger overlap between AI-specific risks related to integrity 
and availability, which is why these protection objectives are combined into one risk area.
In the context of information security, integrity is synonymous with intactness in the sense that no unauthorized 
or unintended changes are made. This risk area considers the integrity of the AI application. The nature of 
Machine Learning means that data has an essential impact on the quality and functionality of the AI application 
and thus creates an attack surface for its integrity. Integrity breaches can take on different dimensions.
Firstly, the integrity of an AI application can be undermined in specific circumstances. In particular, adversarial 
examples breach the integrity of the AI application if they are deliberately created by attackers, for example to 
force a specific output. These are known as adversarial attacks. Adversarial attacks exploit weaknesses of the 
ML model and – in terms of their cause – are to be assigned to the Dimension: Reliability (RE). However, 
the vulnerability of ML Models represents a security risk that, in addition to the measures in the Risk area: 
robustness (RO), which mainly concern the design and development of the AI component, should also be 
mitigated through classic IT security measures as appropriate in this dimension. Usually, the more precise the 
attacker’s knowledge of the ML model, the more successful an attack on the AI application will be. This means 
the integrity of the AI application is indirectly related to data confidentiality (weights, training data, etc.), 
and data protection measures thus help to mitigate security risks. Relevant conventional measures relating 
to confidentiality, such as encryption, are covered in this risk area to avoid duplication of measures in the 
Dimension: Safety and Security (S) and in the Dimension: Data Protection (DP). However, the Dimension: 
Data Protection (DP) focuses on AI-specific confidentiality measures that relate to the design and modeling of 
the learning algorithm implemented in the AI application.
In addition, the integrity of an AI application can be breached to the extent that its functionality is (permanently) 
changed. This can happen, for example, if attackers make unauthorized changes to the code or the weights. 
Unlike classic IT systems, it is sometimes possible to make functional changes to AI applications by deliberately 
manipulating the database, which is referred to as data poisoning. In the case of AI applications that (continue 
to) learn their decision rules/models online based on user inputs, for example, this can even be achieved by 
sending targeted requests or queries to the application.
Availability in the context of information security means that the AI application is executed or retrieved in a timely 
manner and as intended. In classic IT systems, unavailability is usually experienced either when the hardware is 
overloaded due to a high number of requests, or when the system is in error mode and thus does not process 
requests at all. The first scenario (in terms of denial-of-service attacks) is relevant for AI applications, as they 
are usually CPU-intensive and the number of user requests can often change significantly, e.g., in the case of 
AI applications with a public interface such as an online translation service. This is why scalability should be 
considered in the architecture of an AI application, but hardware is not the focus of this assessment catalog. 
The second scenario, i.e., unavailability due to an error mode as well as other types of failures, is addressed in 
the Dimension: Reliability (RE) and in the Risk area: functional safety (FS) if such scenarios form part of 
the assessment object of the assessment catalog. Restrictions on the availability caused by embedding errors or 
failures when the AI component is functioning correctly are not addressed in this assessment catalog.

131
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

`;