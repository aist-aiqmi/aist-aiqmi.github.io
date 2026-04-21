var toc_content = `SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
18 
 
4. SECURITY CONTROLS 
4.1 SECURITY CONTROLS RESULTS 
Having identified a set of threats that can target vulnerabilities in applications which use ML 
algorithms, it is possible to identify which security controls can be put in place to mitigate them. 
To do this, we commenced with the vulnerabilities identified in the previous Chapter and came up 
with a list of 37 security controls that were then mapped to the taxonomy. Table 5 summarises 
security controls for ML algorithms and lists:  
• 
Security controls definitions. 
• 
At which stage of the lifecycle the security controls can be applied. 
For ease of reading, they were divided into three categories: 
• 
“Organisational and Policy” are more traditional security controls, either organisational 
or linked to security policies. 
• 
“Technical” are more classic technical security controls. 
• 
“Specific to ML” are security controls that are specific to applications using ML. 
In Annex 5.C, a set of operational implementation examples are listed for each of the security 
controls. This includes: 
• 
For security controls not specific to ML algorithms: examples from the ISO 27001/213 
family of standards or NIST 800-53 14 framework that should be considered when 
implementing the security control. 
• 
For security controls specific to ML: examples of techniques found in the current 
literature. All sources are referenced and may be found in Annex 5.D. 
The overall mapping of threats, vulnerabilities and security controls is available in Annex 5.B. 
 
 
 
 
 
 
 
 
                                                           
13 https://www.iso.org/isoiec-27001-information-security.html  
14 https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final   

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
19 
 
Table 5: Security controls 
Security controls 
Definition 
Stages of the lifecycle 
Data Collection 
Data Cleaning 
Data Preprocessing 
Model design and 
Implementation 
Model Training 
Model Testing 
Optimisation 
Model Evaluation 
Model Deployment 
Monitoring 
ORGANISATIONAL 
Apply a RBAC model, 
respecting the least privileged 
principle 
Define access rights management using a 
RBAC (Role Based Access Control) model 
respecting the least privileged principle. This 
should cover all components of the ML 
model (e.g. host infrastructures) and allow 
for the protection of resources such as the 
model (e.g. its configuration, its code) and 
the data it used (e.g. training data).  
It is notable that the roles to be included also 
concern the end user. 
For example: the end user who can submit 
inputs to the model should not be able to 
have access to its configuration. 
x 
x 
x 
x 
x 
x 
x 
x 
x 
x 
Apply documentation 
requirements to AI projects 
As for all projects, documentation must be 
produced for AI to preserve knowledge on 
the choices made during the project phase, 
the application architecture, its configuration, 
its maintenance, how to maintain its 
effectiveness over time and the assumptions 
made about the model use. 
This documentation should also include the 
changes that will be applied, including to the 
documentation throughout the algorithm's 
life cycle. 
x 
x 
x 
x 
x 
x 
x 
x 
x 
x 
Assess the regulations and 
laws the ML application must 
comply with 
As all applications, those using ML can be 
subject to regulations and laws (e.g., 
depending on collected data). Such 
assessment must be done as soon as 
possible during the project phase, and 
should be regularly updated thereafter as 
regulations are rapidly evolving (e.g., an AI 
Act has been proposed at the European 
level). 
x 
x 
x 
x 
x 
x 
x 
x 
x 
x 
Ensure ML applications 
comply with data security 
requirements 
As all applications, those using ML must 
comply with data security requirements to 
ensure the overall lifecycle of the data they 
use will be secured (e.g. description of data 
lifecycle and associated controls, data 
classification, protection of data at rest and 
in transit, use of appropriate cryptographic 
means, data quality controls). 
x 
x 
x 
x 
x 
x 
x 
x 
x 
x 
Ensure ML applications 
comply with identity 
management, authentication, 
and access control policies 
As all applications, those using ML must 
comply with defined policies regarding 
identity management (e.g. ensure all users 
are integrated in the departure process), 
authentication (e.g. passwords complexity, 
use of Multi-Factors Authentication (MFA), 
access restriction) and access control (e.g. 
RBAC model, connection context). 
Underlying security requirements must be 
applied to all ML application components 
(e.g. model configuration, host 
infrastructures, training data). 
x 
x 
x 
x 
x 
x 
x 
x 
x 
x 

`;