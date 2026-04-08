var toc_content = `129
Dimension: Safety and Security
The choice of test scenarios must be documented and justified. In addition, it must be demonstrated that they 
meet the [S-R-FS-CR-02] criteria. If necessary, reference can be made to the corresponding sections in the 
Dimension: Reliability (RE). It must be demonstrated that the test and the test results obtained are sufficient 
to confirm that the AI application behaves appropriately in threat environments and hazardous situations as 
defined in [S-R-FS-CR-01].
Testing of functional safety measures that are not specific to AI and are thus not addressed in this risk 
area should be performed separately and in accordance with existing norms and standards.
8.1.3.4  Measures for operation
[S-R-FS-ME-14] Dealing with accidents
Requirements: Do | Pr
The nature of accidents occurring in connection with the AI application and the way in which they develop 
must be logged and it must be specified how the AI application deals with each accident situation. 
The accidents that have occurred and their cause must be analyzed.
Continuous checks must be performed to determine whether the way the AI application works in an 
accident situation meets the requirements set out in [S-R-FS-RI-01] and whether the measures in this 
risk area contribute sufficiently to meeting the criteria specified in [S-R-FS-CR-01]. If deviations are 
identified, adjustments must be made to the safety measures or the AI component itself (see Dimension: 
Reliability (RE)). These adjustments must be documented.
8.1.4  Overall assessment
[S-R-FS-OA] Overall assessment
Requirement: Do
With reference to the tests performed and documented, it must be demonstrated in a transparent manner 
that, in accordance with [S-R-FS-CR-01], operation of the AI application is ensured under acceptable accident 
risk, in particular also with regard to unknown input data, if this is required.
It must be documented if the measures in this risk area are not feasible or are not sufficient to meet 
criteria [S-R-FS-CR-01] to [S-R-FS-CR-06]. The problems that cannot be addressed here can be considered in 
the overall cross-dimensional assessment.
If safety measures from this risk area and detection measures from the Risk area: intercepting errors at 
model level (IM) under the reliability dimension complement each other, it must be documented that the 
tests only correlate weakly with each other, so that the risk of simultaneous or interrelated failure can be 
considered manageable.
Furthermore, functional safety standards or norms must be documented that are used in addition to this 
assessment catalog to test the AI application.

130
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

`;