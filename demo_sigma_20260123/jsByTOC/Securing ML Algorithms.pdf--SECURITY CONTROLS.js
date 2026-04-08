var toc_content = `SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
17 
 
Threats | sub-threats 
Vulnerabilities 
Lack of security process to maintain a good security level of the components of the ML 
application 
Unprotected sensitive data on test environments 
 
Data disclosure 
Too much information about the model given in its outputs 
The model can allow private information to be retrieved 
Disclosure of sensitive data for ML algorithm training 
 
Model disclosure 
Too much information available on the model  
Too much information about the model given in its outputs 
Compromise of ML application 
components  
Poor access rights management 
Too much information available on the model 
Existence of several vulnerabilities because the ML application was not included into process 
for integrating security into projects 
Use of vulnerable components (among the whole supply chain) 
Too much information about the model given in its outputs 
Existence of unidentified compromise scenarios 
Undefined indicators of proper functioning, making complex compromise identification 
Bad practices due to a lack of cybersecurity awareness 
Lack of security process to maintain a good security level of the components of the ML 
application 
Weak access protection mechanisms for ML model components 
Existence of several vulnerabilities because ML specificities are not integrated to existing 
policies 
Existence of several vulnerabilities because ML application do not comply with security 
policies 
Contract with a low security third party 
Failure or malfunction of ML 
application 
Existing biases in the ML model or in the data 
ML application not integrated in the cyber-resilience strategy 
Existence of unidentified failure scenarios 
Undefined indicators of proper functioning, making complex malfunction identification 
Lack of explainability and traceability of decisions taken 
Lack of security process to maintain a good security level of the components of the ML 
application 
Existence of several vulnerabilities because ML specificities are not integrated in existing 
policies 
Contract with a low security third party 
Application not compliant with applicable regulations 
 
Human error 
Poor access rights management 
Lack of documentation on the ML application 
 
Denial of service due to inconsistent 
data or a sponge example 
Use of uncontrolled data 
 
Cybersecurity incident not reported to 
incident response teams 
Lack of cybersecurity awareness 
 

SECURING MACHINE LEARNING ALGORITHMS 
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

`;