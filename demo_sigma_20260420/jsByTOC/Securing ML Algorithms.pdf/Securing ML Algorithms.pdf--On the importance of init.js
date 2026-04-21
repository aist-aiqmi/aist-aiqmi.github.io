var toc_content = `SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
16 
 
3.2 VULNERABILITIES MAPPED TO THREATS 
To identify the security controls, we determined vulnerabilities associated with the threats 
described in the previous section. It is important to note that the same vulnerabilities may be found 
behind one or more threats (e.g. the “Poor access management” vulnerability). The table below 
lists vulnerabilities of ML algorithms and maps them to the aforementioned threats. 
Table 4: Threats and associated vulnerabilities 
Threats | sub-threats 
Vulnerabilities 
Evasion 
Lack of detection of abnormal inputs 
Poor consideration of evasion attacks in the model design implementation 
Poor consideration of evasion attacks in the model design implementation 
Lack of training based on adversarial attacks 
Using a widely known model allowing the attacker to study it 
Inputs totally controlled by the attacker which allows for input-output-pairs 
 
Use of adversarial examples crafted in 
white or grey box conditions (e.g. 
FGSM…) 
Too much information available on the model 
Too much information about the model given in its outputs 
Oracle 
Poor access rights management 
The model allows private information to be retrieved 
Too much information about the model given in its outputs 
Too much information available on the model  
Lack of consideration of attacks to which ML applications could be exposed to 
Lack of security process to maintain a good security level of the components of the ML 
application 
Weak access protection mechanisms for ML model components 
Poisoning 
Model easy to poison 
Lack of data for increasing robustness to poisoning 
Poor access rights management 
Poor data management 
Undefined indicators of proper functioning, making complex compromise identification 
Lack of consideration of attacks to which ML applications could be exposed to 
Use of uncontrolled data 
Use of unsafe data or models (e.g. with transfer learning) 
Lack of control for poisoning 
No detection of poisoned samples in the training dataset 
Weak access protection mechanisms for ML model components 
 
Label modification 
Use of unreliable sources to label data 
Model or data disclosure 
Poor access rights management 
Existence of unidentified disclosure scenarios 
Weak access protection mechanisms for ML model components 

SECURING MACHINE LEARNING ALGORITHMS 
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
 

`;