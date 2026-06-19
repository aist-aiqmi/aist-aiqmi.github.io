var toc_content = `SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
37 
 
Threats | sub-
threats 
Vulnerabilities 
Security Controls 
Threats 
references 
Existence of several vulnerabilities 
because ML specificities are not 
integrated to existing policies 
Ensure ML projects follow the global process 
for integrating security into projects 
Contract with a low security third party 
Ensure ML applications comply with third 
parties’ security requirements 
Application not compliant with 
applicable regulations 
Assess the regulations and laws the ML 
application must comply with 
 
Human error 
Poor access rights management 
Apply a RBAC model, respecting the least 
privilege principle 
Lack of documentation on the ML 
application 
Apply documentation requirements to AI 
projects 
Include ML applications into asset 
management processes 
 
Denial of 
service due to 
inconsistent 
data or a 
sponge 
example 
Use of uncontrolled data 
Control all data used by the ML model 
 
Cybersecurity 
incident not 
reported to 
incident 
response 
teams 
Lack of cybersecurity awareness 
Integrate ML specificities to awareness 
strategy and ensure all ML stakeholders are 
receiving it 

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
38 
 
C ANNEX: IMPLEMENTING 
SECURITY CONTROLS  
 
Security controls 
Examples for operational implementation 
References 
Add some adversarial 
examples to the training 
dataset 
The literature provides the following techniques: 
- Adversarial Training 
- Ensemble Adversarial Training 
- Cascade Adversarial Training 
- Principled Adversarial Training 
- Gradient Band Based Adversarial Training 
13, 23, 48, 51, 59, 65, 72, 95, 108, 
162, 200, 201, 202, 211, 215 
Apply a RBAC model, 
respecting the least privilege 
principle 
The NIST 800-53 and the ISO 27001/2 provides several 
points: 
- Manage access permissions and authorisations, 
incorporating the principles of least privilege and 
separation of duties 
- Manage the identity of the users (Couple lifecycle 
management processes and procurement processes etc.) 
ISO 27001/2 
NIST 800-53, 162 
Apply documentation 
requirements to Artificial 
Intelligence projects 
The NIST 800-53 and the ISO 27001/2 provides several 
points: 
- Define change management processes, integrating the 
update of the documentation 
148 
 
ISO 27001/2 
NIST 800-53 
Apply modifications on inputs 
The literature provides the following techniques:  
- Data randomisation 
- Input transformation 
- Input denoising 
64, 65, 108, 208 
Assess the exposure level of 
the model used 
 
 
Assess the regulations and 
laws the ML application must 
comply with 
The NIST 800-53 and the ISO 27001/2 provides several 
points: 
- Identify applicable legislation 
- Meet the requirements of GDPR for personal data 
ISO 27001/2 
NIST 800-53, 162 
Build explainable models 
The literature provides the following techniques:  
- Interpret models with some tools 
- Use model more explainable like regression instead of 
Deep Neural Network for supervised learning when it is 
necessary 
164, 225, 226, 227 

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
39 
 
Security controls 
Examples for operational implementation 
References 
Check the vulnerabilities of the 
components used so that they 
have an appropriate security 
level 
The NIST 800-53 and the ISO 27001/2 provides several 
points: 
- Manage the exemptions by following it industrially, also 
including remediation plans 
- Make an inventory of the infrastructure equipment, the 
applications (Define, document, improve and review a 
regular process to make inventory) 
- Manage the maintenance, the obsolete assets etc. 
(Define a process and continuously improve it, define a 
roadmap to replace obsolescent technologies) 
- Implement a vulnerability management policy (Control 
regularly its implementation) 
- Perform and manage vulnerability scans on servers OS, 
middleware, database and network infrastructure (Perform 
regularly automatics scans) 
ISO 27001/2 
NIST 800-53 
Choose and define a more 
resilient model design 
For poisoning, the literature provides the following 
technique:  
- Bagging or weight Bagging 
- TRIM algorithm  
 
For evasion, the literature provides the following 
technique:  
- Randomisation 
- Stability terms into objective function 
- Adversarial perturbation-based regulariser 
- Input gradient regularisation 
- Defensive distillation 
- Random feature nullification 
35, 65, 108, 110, 112, 113, 114, 
143, 196, 206, 213 
Conduct a risk analysis of the 
ML application 
The NIST 800-53 and the ISO 27001/2 provides several 
points: 
- Coordinate the compliance process with legal and audit 
functions 
- Identify legal requirements (e.g. GDPR or NIS for 
European countries) 
- Establish a methodology to manage identified risks 
- Establish a formal methodology to analyse risk 
- Define and monitor the IT resource availability 
(Formalise a capacity management plan) 
ISO 27001/2 
NIST 800-53 
Control all data used by the ML 
model 
The literature provides the following techniques:  
- Data sanitisation 
- RONI and tRONI technics 
- Point out important data and put a human in the loop 
(Human in the loop) 
114, 116, 118, 142, 162,  197, 228 
Define and monitor indicators 
for proper functioning of the 
model 
The NIST 800-53 and the ISO 27001/2 provides several 
points: 
- Formalise a dashboard, bringing together a series of 
indicators enabling the state of the information system to 
be judged in relation to the objectives set.  
- Take actions in case of deviation from the objective 
- Manage changes on assets, ensure changes will not 
impact the production and detect any changes in assets' 
baseline configuration 
- Guarantee the integrity of the code at all stage (Perform 
integrity control etc.) 
ISO 27001/2 
NIST 800-53 

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
40 
 
Security controls 
Examples for operational implementation 
References 
Enlarge the training dataset 
The literature provides the following technique:  
- Data augmentation 
68, 150 
Ensure appropriate protection 
are deployed for test 
environments as well 
The NIST 800-53 and the ISO 27001/2 provides several 
points: 
- Protect data when there are in non-production 
environment (implement desensitisation measures etc.) 
ISO 27001/2 
NIST 800-53 
Ensure that the model is 
sufficiently resilient to the 
environment in which it will 
operate. 
 
 
Ensure ML applications comply 
with Data Security 
requirements 
The NIST 800-53 and the ISO 27001/2 provides several 
points: 
- Apply a methodology for data classification. Review the 
classification regularly 
- Implement measures to detect data leakage on the 
Internet (Antivirus, Data right management solution on all 
sensitive folders) 
- Secure sensitive data in transit (Deploy mechanisms to 
detect bypasses on all networks) 
- Deploy security solutions on network points to prevent 
data leaks (DLP etc.) 
ISO 27001/2 
NIST 800-53 
Ensure ML applications comply 
with identity management, 
authentication and access 
control policies 
The NIST 800-53 and the ISO 27001/2 provides several 
points: 
- Define a policy regarding users’ authentication (Define 
an authentication policy that considers the sensitivity of 
resources and the connection context for all types of 
account, use Multi-Factor Authentication) 
- Define a remote access policy (Verify security 
configuration, authenticate connected devices) 
ISO 27001/2 
NIST 800-53, 162 
Ensure ML applications comply 
with protection policies and are 
integrated to security 
operations processes 
The NIST 800-53 and the ISO 27001/2 provides several 
points: 
- Manage the maintenance, the obsolete assets etc. 
(Define a process and continuously improve it, define a 
roadmap to replace obsolescent technologies) 
- Implement a vulnerability management policy (Control 
regularly its implementation) 
- Perform and manage vulnerability scans on servers OS, 
middleware, database and network infrastructure (Perform 
regularly automatics scans) 
ISO 27001/2 
NIST 800-53 
Ensure ML applications comply 
with security policies 
The NIST 800-53 and the ISO 27001/2 provides the 
following point: 
- Define policies for information security 
ISO 27001/2 
NIST 800-53 
Ensure ML applications comply 
with third parties’ security 
requirements 
The NIST 800-53 and the ISO 27001/2 provides several 
points: 
- Integrate the security into contracts (Define a security 
insurance plan for strategic contracts representing high 
risks for company security. Communicate roles and 
responsibilities to every new third party) 
- Monitor and review third parties services 
ISO 27001/2 
NIST 800-53 

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
41 
 
Security controls 
Examples for operational implementation 
References 
Ensure ML projects follow the 
global process for integrating 
security into projects 
The NIST 800-53 and the ISO 27001/2 provides several 
points: 
- Integrate the security into contracts (Define a security 
insurance plan for strategic contracts representing high 
risks for company security. Communicate roles and 
responsibilities to every new third party) 
- Define and manage a patch management policy 
- Manage the interconnections with external systems 
(establish a formal process to regularly review the 
exhaustiveness of interconnections inventory) 
- Integrate and manage security protection for applications 
(firewalls, WAF, reverse proxy) 
- Perform security controls on application 
ISO 27001/2 
NIST 800-53 
Ensure reliable sources are 
used 
The NIST 800-53 and the ISO 27001/2 provides several 
points: 
- Manage the interconnections with external systems 
(establish a formal process to regularly review the 
exhaustiveness of interconnections inventory) 
ISO 27001/2 
NIST 800-53 
Ensure that models are 
unbiased 
The literature provides the following techniques:  
- Classification parity 
- Calibration 
- Anti-classification 
- Having a diverse dataset 
- Some other technics: samples bias, measurement 
error… 
217, 229 
Ensure that models respect 
differential privacy to a 
sufficient degree 
The literature provides the following techniques: 
- Model design adapted like PATE for Deep Neural 
Network based classifier 
- Data randomisation 
- Randomisation 
- Objective function perturbation 
63, 108, 112, 194, 203, 208, 214 
Implement processes to 
maintain security levels of ML 
components over time 
The NIST 800-53 and the ISO 27001/2 provides the 
following point: 
- Perform technical and organisational audits regularly on 
critical scope and develop an action plan after each audit 
ISO 27001/2 
NIST 800-53 
Implement tools to detect if a 
data point is an adversarial 
example or not 
The literature provides the following technique:  
- Adding detector subnetworks 
65, 207 
Include ML applications into 
asset management processes 
The NIST 800-53 and the ISO 27001/2 provides several 
points: 
- Create an inventory of the infrastructure equipment, the 
applications (Define, document, improve and review a 
regular process to make inventory) 
- Classify information 
- Manage the maintenance, the obsolete assets etc. 
(Define a process and continuously improve it, define a 
roadmap to replace obsolescent technologies) 
ISO 27001/2 
NIST 800-53 

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
42 
 
Security controls 
Examples for operational implementation 
References 
Include ML applications into 
detection and response to 
security incident processes 
The NIST 800-53 and the ISO 27001/2 provides several 
points: 
- Include ML projects into the Business Continuity Plan 
- Include ML projects into the Cybersecurity Disaster 
Recovery Plan 
- Define a backup strategy for ML projects (and test it) 
- Define a strategy for public relations during recovery 
(Identify and train possible spokespersons, Adapt 
communication responses to different categories of 
interlocutors) 
ISO 27001/2 
NIST 800-53 
Integrate ML applications into 
the overall cyber-resilience 
strategy 
The NIST 800-53 and the ISO 27001/2 provides several 
points: 
- Include ML projects into the Business Continuity Plan 
- Include ML projects into the Cybersecurity Disaster 
Recovery Plan 
- Define a backup strategy for ML projects (and test it) 
- Define a strategy for public relations during recovery 
(Identify and train possible spokespersons, Adapt 
communication responses to different categories of 
interlocutors) 
ISO 27001/2 
NIST 800-53, 162 
Integrate ML specificities to 
existing security policies 
The NIST 800-53 and the ISO 27001/2 provides the 
following point: 
- Review policies for information security 
ISO 27001/2 
NIST 800-53 
Integrate ML specificities to 
awareness strategy and ensure 
all ML stakeholders are 
receiving it 
The NIST 800-53 and the ISO 27001/2 provides several 
points: 
- Organise training sessions  
- Perform locally cyber risks reporting 
ISO 27001/2 
NIST 800-53 
Integrate poisoning control 
after the "model evaluation" 
phase 
The literature provides the following technique:  
- STRIP technique 
198 
Reduce the available 
information about the model 
The NIST 800-53 and the ISO 27001/2 provides the 
following point: 
- Implement a classification policy 
ISO 27001/2 
NIST 800-53 
Reduce the information given 
by the model 
The literature provides the following technique: 
- Gradient Masking 
89, 145 
Use federated learning to 
minimise risk of data breaches 
 
194 
Use less easily transferable 
models 
 
65, 215 
Use methods to clean the 
training dataset from suspicious 
samples 
The literature provides the following techniques:  
- Data sanitisation 
- RONI and tRONI technics 
- Point out important data and put a human in the loop 
(Human in the loop) 
114, 162, 210 

`;