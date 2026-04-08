var toc_content = `SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
33 
 
Algorithm 
Name 
Definition 
Main 
domain 
Data 
type 
Data 
environments 
Learning 
Paradigm 
Explainability 
Accuracy 
Provided 
Refs 
Recurrent 
neural 
network 
A recurrent neural network 
(RNN) is a class of artificial 
neural networks where 
connections between nodes 
form a directed graph along 
a temporal sequence. This 
allows it to exhibit temporal 
dynamic behaviour. 
Computer 
Vision, NLP 
& Speech 
processing 
Time 
series, text, 
image, 
video 
Supervised 
learning 
Regression 
Not Explainable 
 
14, 17, 
44, 45, 
46, 47, 
49, 50, 
52, 89, 
13 
ResNet 
A residual neural network 
(ResNet) is an artificial 
neural network (ANN) that 
builds on constructs known 
from pyramidal cells in the 
cerebral cortex by utilising 
skip connections, or 
shortcuts to jump over some 
layers. 
Computer 
Vision 
Image 
Supervised 
learning 
Classification 
Not Explainable 
Yes 
4, 7, 37 
Spatial 
Temporal 
Graph 
Convolutiona
l Networks 
Spatial Temporal Graph 
Convolutional Networks is a 
convolutional neural 
network that automatically 
learns both the spatial and 
temporal patterns from data.  
Computer 
Vision 
Video 
Supervised 
learning 
Classification 
 
 
25 
Stochastic 
gradient 
descent 
Stochastic gradient descent 
is an iterative method for 
optimising an objective 
function with suitable 
smoothness properties. It 
can be regarded as a 
stochastic approximation of 
gradient descent 
optimisation, since it 
replaces the actual gradient 
(calculated from the entire 
data set) by an estimate 
thereof (calculated from a 
randomly selected subset of 
the data). 
Classic 
Data 
Science 
Structured 
data 
/ 
Optimisation 
 
 
17, 24 
Support 
vector 
machine  
SVM are linear classifiers 
which are based on the 
margin maximisation 
principle. They accomplish 
the classification task by 
constructing, in a higher 
dimensional space, the 
hyperplane that optimally 
separates data into two 
categories. 
Classic 
Data 
Science 
Structured 
data 
Supervised 
learning 
Classification 
Fully Explainable 
Yes 
42, 47, 
51, 67, 
69, 87, 
89, 92, 
98, 
106, 
120, 
136, 
139, 
142, 
152, 
177, 
185 
WaveNet 
Wavenet is a deep neural 
network for generating raw 
audio waveforms. The 
model is fully probabilistic 
and autoregressive, with the 
predictive distribution for 
each audio sample 
conditioned on all previous 
ones 
NLP & 
Speech 
processing 
Time series Unsupervised 
learning 
NLP task 
 
 
44, 
45,131, 
132 
XGBoost 
XGBoost is an extension to 
gradient boosted decision 
trees (GBM) and specially 
designed to improve speed 
and performance by using 
regularisation methods to 
fight overfitting. 
Classic 
Data 
Science 
Structured 
data 
Supervised 
learning 
Classification, 
Regression 
Globally 
Explainable 
 
3 
 
 

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
34 
 
B ANNEX: MAPPING 
SECURITY CONTROLS 
TO THREATS 
 
Threats | sub-
threats 
Vulnerabilities 
Security Controls 
Threats 
references 
Evasion 
Lack of detection of abnormal inputs 
Implement tools to detect if a data point is an 
adversarial example or not 
13, 34, 37, 48, 
49, 51, 53, 56, 
59, 60, 62, 65, 
66, 67, 73, 80, 
81, 82, 83, 84, 
90, 
95, 
97, 
100, 107, 109, 
110, 121, 125, 
139, 144, 154, 
155, 162, 163, 
169, 170, 175, 
181, 183, 185, 
199, 200, 201, 
202, 204, 205, 
206, 207, 209, 
211, 213, 215 
Include ML applications in detection and 
response to security incident processes 
Poor consideration of evasion attacks 
in the model design implementation 
Choose and define a more resilient model 
design 
Lack of consideration of attacks to 
which ML applications could be 
exposed  
Integrate ML specificities to awareness 
strategy and ensure all ML stakeholders are 
receiving it 
Lack of training based on adversarial 
attacks 
Add some adversarial examples to the training 
dataset 
Use a widely known model allowing 
the attacker to study it 
Lack of security process to maintain a good 
security level of the components of the ML 
application 
Use less easily transferable models 
Assess the exposure level of the model used 
Inputs totally controlled by the attacker 
which allows for input-output-pairs 
Apply modifications to inputs 
 
Use of 
adversarial 
examples 
crafted in white 
or grey box 
conditions (e.g. 
FGSM…) 
Too much information available on the 
model 
Reduce the available information about the 
model 
34, 35, 48, 51, 
56, 59, 60, 62, 
65, 80, 81, 82, 
100, 109, 110, 
125, 139, 144, 
154, 170, 204, 
209 
Too much information about the model 
given in its outputs 
Reduce the information given about the model 
Oracle 
Poor access rights management 
Apply a RBAC model, respecting the least 
privileged principle 
121, 145, 146, 
152, 170, 177, 
194, 203, 204, 
208, 214 
The model allows private information 
to be retrieved 
Ensure that models respect differential privacy 
Too much information about the model 
given in its outputs 
Reduce the information given about the model 
Too much information available on the 
model  
Reduce the available information about the 
model 
Lack of consideration of attacks to 
which ML applications could be 
exposed to 
Integrate ML specificities to awareness 
strategy and ensure all ML stakeholders are 
receiving it 
Lack of security process to maintain a 
good security level of the components 
of the ML application 
Implement processes to maintain security 
levels of ML components over time 
Weak access protection mechanisms 
for ML model components 
 
Ensure ML applications comply with identity 
management, authentication, and process 
control policies 

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
35 
 
Threats | sub-
threats 
Vulnerabilities 
Security Controls 
Threats 
references 
Poisoning 
Model easy to poison 
Choose and define a more resilient model 
design 
74, 77, 79, 99, 
114, 115, 116, 
117, 118, 121, 
126, 140, 142, 
143, 162, 167, 
170, 171, 172, 
173, 189, 196, 
197, 198, 199, 
204, 210 
Implement processes to maintain security 
levels of ML components over time 
Assess the exposure level of the model used 
Lack of data for increasing robustness 
to poisoning 
Enlarge the training dataset 
Poor access rights management 
Apply a RBAC model, respecting the least 
privileged principle 
Poor data management 
Ensure ML applications comply with data 
security requirements 
Undefined indicators of proper 
functioning, making complex 
compromise identification 
Define and monitor indicators for proper 
functioning of the model 
Lack of consideration of attacks to 
which ML applications could be 
exposed to 
Integrate ML specificities to awareness 
strategy and ensure all ML stakeholders are 
receiving it 
Use of uncontrolled data 
Control all data used by the ML model 
Use of unsafe data or models (e.g with 
transfer learning) 
Ensure reliable sources are used 
Lack of control for poisoning 
Integrate poisoning control after the "model 
evaluation" phase 
No detection of poisoned samples in 
the training dataset 
Use methods to clean the training dataset from 
suspicious samples 
Weak access protection mechanisms 
for ML model components 
Ensure ML applications comply with identity 
management, authentication, and access 
control policies 
 
Label 
modification 
Use of unreliable source to label data 
Ensure reliable sources are used 
125, 140, 204 
Model or data 
disclosure 
Poor access rights management 
Apply a RBAC model, respecting the least 
privileged principle 
121, 194, 221, 
222 
Existence of unidentified disclosure 
scenarios 
Conduct a risk analysis of the ML application 
Weak access protection mechanisms 
for ML model components 
Ensure ML applications comply with identity 
management, authentication, and access 
control policies 
Lack of security process to maintain a 
good security level of the components 
of the ML application 
Implement processes to maintain security 
levels of ML components over time 
Unprotected sensitive data on test 
environments 
Ensure appropriate protection are deployed for 
test environments as well 
 
Data 
disclosure 
Too much information about the model 
given in its outputs 
Integrate ML specificities to awareness 
strategy and ensure all ML stakeholders are 
receiving it 
The model can allow private 
information to be retrieved 
Ensure that models respect differential privacy 
The model can allow private 
information to be retrieved 
Reduce the information given by the model 
Disclosure of sensitive data for ML 
algorithm training 
Use federated learning to minimise the risk of 
data breaches 
 
Model 
disclosure 
Too much information available on the 
model  
Reduce the available information about the 
model 
Too much information about the model 
given in its outputs 
Reduce the information given by the model 

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
36 
 
Threats | sub-
threats 
Vulnerabilities 
Security Controls 
Threats 
references 
Compromise of ML 
application 
components  
Poor access rights management 
Apply a RBAC model, respecting the least 
privileged principle 
121, 164, 183, 
189 
Too much information available on the 
model 
Reduce the available information about the 
model 
Existence of several vulnerabilities 
because the ML application was not 
integrated into process for integrating 
security into projects 
Ensure ML projects follow the global process 
for integrating security into projects 
Use of vulnerable components (among 
the whole supply chain) 
Check the vulnerabilities of the components 
used so that they have an appropriate security 
level 
Too much information about the model 
given in its outputs 
Reduce the information given by the model 
Existence of unidentified compromise 
scenarios 
Conduct a risk analysis of the ML application 
Undefined indicators of proper 
functioning, making complex 
compromise identification 
Define and monitor indicators for proper 
functioning of the model 
Bad practices due to a lack of 
cybersecurity awareness 
Integrate ML specificities to awareness 
strategy and ensure all ML stakeholders are 
receiving it 
Lack of security process to maintain a 
good security level of the components 
of the ML application 
Implement processes to maintain security 
levels of ML components over time 
Ensure ML applications comply with protection 
policies and are integrated to security 
operations processes 
Weak access protection mechanisms 
for ML model components 
Ensure ML applications comply with identity 
management, authentication, and access 
control policies 
Existence of several vulnerabilities 
because ML specificities are not 
integrated to existing policies 
Integrate ML specificities to existing security 
policies 
Existence of several vulnerabilities 
because ML application do not comply 
with security policies 
Ensure ML applications comply with security 
policies 
Include ML applications into asset 
management processes 
Contract with a low security third party 
Ensure ML applications comply with third 
parties’ security requirements 
Failure or 
malfunction of ML 
application 
Existing biases in the ML model or in 
the data 
Ensure that models are unbiased 
121, 164, 183, 
189, 191 
Lack of consideration of real-life 
conditions in training the model 
Ensure that the model is sufficiently resilient to 
the environment in which it will operate. 
ML application not integrated in the 
cyber-resilience strategy 
Integrate ML applications into the overall 
cyber-resilience strategy 
Existence of unidentified failure 
scenarios 
Conduct a risk analysis of the ML application 
Undefined indicators of proper 
functioning, making complex 
malfunction identification 
Define and monitor indicators for proper 
functioning of the model 
Lack of explainability and traceability 
of decisions taken 
Build explainable models 
Lack of security process to maintain a 
good security level of the components 
of the ML application 
Implement processes to maintain security 
levels of ML components over time 

SECURING MACHINE LEARNING ALGORITHMS 
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

`;