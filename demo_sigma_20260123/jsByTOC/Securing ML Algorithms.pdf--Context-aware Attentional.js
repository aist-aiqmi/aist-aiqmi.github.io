var toc_content = `SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
15 
 
Threats | sub-
threats 
Definition 
Stage of the lifecycle 
Data 
Collection 
Data Cleaning 
Data 
Preprocessing 
Model design  
Model Training 
Model Testing 
Optimisation 
Model 
Evaluation 
Model 
Deployment 
Monitoring 
 
Data disclosure 
This threat refers to a leak of data manipulated 
by ML algorithms. This data leakage can be 
explained by an inadequate access control, a 
handling error of the project team or simply 
because sometimes the entity that owns the 
model and the entity that owns the data are 
distinct. To train the model, it is often necessary 
for the data to be accessed by the model 
provider. This involve sharing the data and thus 
share sensitive data with a third party. 
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
 
Model disclosure 
This threat refers to a leak of the internals (i.e. 
parameter values) of the ML model. This model 
leakage could occur because of human error or 
contraction with a third party with a too low 
security level.  
 
 
 
x 
x 
x 
x 
x 
x 
x 
Compromise of 
ML application 
components  
This threat refers to the compromise of a 
component or developing tool of the ML 
application. 
Example: compromise of one of the open-source 
libraries used by the developers to implement 
the ML algorithm. 
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
Failure or 
malfunction of ML 
application 
This threat refers to ML application failure (e.g. 
denial of service due to bad input, unavailability 
due to a handling error). 
Example: the service level of the support 
infrastructure of the ML application hosted by a 
third party is too low compared to the business 
needs, the application is regularly unavailable. 
Note that this threat does not consider failure of 
business use cases (for example, the algorithm 
fails because it is not accurate enough to handle 
all real-life situations it is exposed to). 
 
 
 
 
 
 
 
 
x 
x 
 
Human error 
The different stakeholders of the model can 
make mistakes that result in a failure or 
malfunction of ML application. For example, due 
to lack of documentation, they may use the 
application in use-cases not initially foreseen. 
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
 
Denial of service 
due to inconsistent 
data or a sponge 
example 
ML algorithms usually consider input data in a 
defined format to make their predictions. Thus, a 
denial of service could be caused by input data 
whose format is inappropriate. It may also 
happen that a malicious user of the model 
constructs an input data (a sponge example) 
specifically designed to increase the 
computation time of the model and thus 
potentially cause a denial of service. 
 
 
 
 
 
 
 
 
 
x 
 
Cybersecurity 
incident not 
reported to 
incident response 
teams 
This threat refers to the possibility that a project 
team may not report security incidents to 
dedicated teams while a policy of mandatory 
incident reporting has been defined. 
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

`;