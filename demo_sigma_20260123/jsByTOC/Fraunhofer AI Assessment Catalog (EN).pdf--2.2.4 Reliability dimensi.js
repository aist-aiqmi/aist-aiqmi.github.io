var toc_content = `25
Essential Concepts and Methodology for Applying the Catalog
2.2.4  Reliability dimension
Dimension: 
Reliability (RE)
This dimension primarily relates to the quality of the AI component and assesses factors 
including its robustness, i.e., the consistency of its outputs following small changes in the 
input data. In addition to the performance and robustness of the AI component, its potential 
output (un)certainty is also reviewed.
Risk areas
Reliability in standard 
cases (SC)
This risk area addresses the risk of incorrect predictions 
by the AI component on regular input data.
Robustness (RO)
This risk area addresses risks that arise when 
input data is corrupted or manipulated, but for 
which accurate processing by the AI component is 
intended. Both qualitative and quantitative input 
data pertubations are considered, such as noise or 
adversarial examples.
Intercepting errors at 
model level (IM)
This risk area addresses risks from input data that 
is not in the application domain and that the 
AI component is not expected to process correctly. 
This data should be intercepted by a detection 
strategy.
Uncertainty estimation 
(UE)
This risk area examines risks that arise due to an 
unrealistic, unusable or absent uncertainty estimation.
Control of dynamics (CD)
This risk area addresses the risk that the ML model 
implemented in the AI component will experience 
a decline in performance or losses in relation to other 
requirements due to unintended model drifts or 
changes in application context (concept drift).

26
Essential Concepts and Methodology for Applying the Catalog
2.2.5  Safety and security dimension
Dimension: 
Safety and 
Security (S)
This dimension addresses both functional safety features and safeguarding against attacks 
and manipulation of the AI application. The measures in this dimension primarily concern 
the embedding of the AI component and include classic IT security methods, for example.
Risk areas
Functional safety (FS)
This risk area addresses the risk of accidental bodily 
injury or property damage that is facilitated or 
even caused by the malfunction or failure of the 
AI application as a result of flawed embedding design.
Integrity and 
availability (IA)
This risk area addresses risks that arise when 
data relevant to operating the AI application is falsified, 
resulting in the AI application being manipulated and 
possibly no longer available in some cases.
Control of dynamics 
(CD)
This risk area addresses risks that arise as a result 
of new threats of the above risk areas occurring 
or established safeguarding methods becoming less 
effective.
2.2.6  Data protection dimension
Dimension: 
Data 
Protection 
(DP)
This dimension relates to the protection of sensitive data in the context of developing and 
operating an AI application. This addresses both the protection of personal data and trade 
secrets.
Risk areas
Protection of personal 
data (PD)
This risk area covers risks associated with the 
AI application using personal data that is not 
GDPR‑compliant, as well as the risk of re-identification 
of individuals in a data set.
Protection of business-
relevant information 
(BI)
This risk area addresses risks that arise from the 
unwanted disclosure of business-relevant information 
by the AI application.
Control of dynamics 
(CD)
This risk area addresses the risks that new background 
information will emerge, such as the creation 
of a personal reference, or that the requirements for 
processing data with an AI application will change.

`;