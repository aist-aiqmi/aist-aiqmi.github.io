var toc_content = `SECURING MACHINE LEARNING ALGORITHMS 
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

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
20 
 
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
Ensure ML applications 
comply with protection 
policies and are integrated to 
security operations processes 
As all applications, those using ML must 
comply with protection policies (e.g. 
hardening, anti-malware policy) and be 
integrated to security operations processes 
(e.g. vulnerability management, backups). 
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
comply with security policies 
As all applications, those using ML must 
comply with existing security policies. 
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
Include ML applications into 
detection and response to 
security incident processes15 
As all applications, those using ML must be 
integrated in global processes for detection 
and incident response. This implies 
collecting the appropriate logs, configuring 
relevant detection use cases to detect 
attacks on the application, and giving the 
keys to incident response team for efficient 
response. 
x 
x 
x 
x 
x 
x 
x 
x 
x 
X 
Include ML applications in 
asset management processes 
As all applications, those using ML must be 
integrated to global processes for asset 
management to ensure their assets are 
inventoried, their owners are identified, their 
information classified. 
x 
x 
x 
x 
x 
x 
x 
x 
x 
X 
Integrate ML applications into 
the overall cyber-resilience 
strategy 
As any application, ML ones must be 
integrated in the overall cyber-resilience 
strategy, to ensure their architecture and 
operational processes (e.g. backups) take 
into account cybersecurity scenario. 
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
Integrate ML specificities to 
existing security policies 
Specific ML security attention points should 
be integrated in existing security policies and 
guidelines to ensure they are taken into 
consideration. 
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
TECHNICAL 
Assess the exposure level of 
the model used 
Some model designs are more commonly 
used or shared than others and, especially 
in the ML field; it can be included in their 
lifecycle to widely share them (e.g. open 
source sharing). These aspects must be 
considered in the global application risk 
analysis. For example, two elements can be 
distinguished:  
- Do not reuse models taken directly from 
the internet without checking them. 
- Use models for which the threats are 
clearly identified and for which security 
controls exist. 
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
                                                           
15 Please note that ML components with false positives might have adverse effect. 

`;