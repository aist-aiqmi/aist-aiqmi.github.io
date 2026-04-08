var toc_content = `SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
22 
 
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
Define and monitor indicators 
for proper functioning of the 
model 
Define dashboards of key indicators 
integrating security indicators (peaks of 
change in model behavior etc.) to follow-up 
the proper functioning of the model 
regarding the business case, in particular to 
allow rapid identification of anomalies. 
 
 
 
 
 
 
 
 
 
x 
Ensure appropriate protection 
is deployed for test 
environments 
Test environments must also be secured 
according to the sensitivity of the information 
they contain. Special care must be paid to 
the data used in these environments, to 
ensure their protection (e.g., same 
protection measures as for production if not 
desensitiser). 
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
comply with third parties’ 
security requirements 
As all applications, those using ML must 
comply with third parties’ security 
requirements if their context involves 
suppliers. 
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
Ensure ML projects follow the 
global process for integrating 
security into projects 
As any project, ML projects must comply to 
process for integrating security into projects, 
including the followings: 
- Risk analysis on the whole application 
- Check of the integration of cybersecurity 
best practices regarding architecture, secure 
development. 
- Check that the application will be 
integrated in existing operational security 
processes: monitoring and response, patch 
management, access management, cyber-
resilience. 
- Check of the production of adequate 
documentation to ensure the sustainability of 
the application (e.g., technical architecture, 
hardening, exploitation, configuration and 
installation documents) 
- Security checks before going to production 
(e.g. security audit, pen tests) 
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
SPECIFIC ML 
Add some adversarial 
examples to the training 
dataset16 
Include adversarial examples to the 
algorithm's training to enable it to be more 
resilient to such attacks. Depending on the 
application domain and ambient conditions, 
such training could be done continuously. 
x 
x 
x 
 
 
 
 
 
 
 
Apply modifications on 
inputs17 
Adding a step to modify the model's inputs 
(e.g. data randomisation which consists in 
adding random noise to each piece of data), 
can improve the robustness of the model to 
attacks. Such steps can make it more 
difficult for an attacker to understand the 
functioning of the algorithm and thus to 
manipulate it and reduce the impacts of an 
attack. This security control can be applied 
during training or model deployment stages. 
 
 
x 
 
 
 
 
 
 
x 
                                                           
16 This security control is often referred to as “Robust adversarial training” in the literature. 
17 One important thing to keep in mind is that such modifications should not overly impact model performance on benign 
inputs. 

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
23 
 
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
Build explainable models 
The ML models should be explainable, even 
if it means simplifying them, to enable a 
good understanding of their functioning and 
decision factors. 
It can also be a regulatory requirement (e.g. 
GDPR). However, once again, security 
interferes with the explainability property of 
the model (easier-to-understand decisions 
can be easier-to-build adversarial 
examples). It is therefore a trade-off 
between the need for explainability and 
security. 
 
 
 
x 
 
 
 
x 
 
 
Choose and define a more 
resilient model design 
Some model designs can be more robust 
than others against attacks. For instance, 
ensemble methods like bagging can mitigate 
the impact of poisoning (during the training 
phase). Another example is defensive 
distillation, which may allow deep neural 
networks to better deal with evasion attacks. 
 
 
 
x 
 
 
 
 
 
 
Enlarge the training dataset 
Using a set of training data expansion 
techniques (e.g. data augmentation) 
addresses the lack of data and improves the 
robustness of the model to poisoning attacks 
by diluting their impact. It is notable, 
however, that this security control more 
specifically addresses poisoning attacks that 
aim to reduce the performance of the model 
than those that seek to establish a backdoor. 
Moreover, one needs to ensure the reliability 
of the sources used to augment the dataset. 
x 
 
x 
 
 
 
 
 
 
 
Ensure that models are 
unbiased 
The introduction of bias in ML algorithms will 
not be detailed because it is not the topic of 
the publication. 
However, some techniques can be used to 
mitigate bias: verify the training dataset is 
representative enough regarding the 
business case, check the relevance of the 
attributes used to make decisions etc. 
x 
x 
x 
x 
x 
 
 
x 
 
 
Ensure that models respect 
differential privacy to a 
sufficient degree 
Differential privacy (DP) is a strong, 
mathematical definition of privacy in the 
context of statistical and ML analysis. 
According to this mathematical definition, DP 
is a criterion of privacy protection, which 
many tools for analysing sensitive personal 
information have been devised to satisfy. It 
is noticeable that this security control can 
greatly reduce the performance of the 
model. It is therefore important to estimate 
the need for data or model protection. 
Example: Differential privacy makes it 
possible for technology companies to collect 
and share aggregate information about user 
habits, while maintaining the privacy of 
individual users. 
 
x 
x 
x 
x 
x 
x 
x 
 
x 
Ensure that the model is 
sufficiently resilient to the 
environment in which it will 
operate. 
Ensure that the model is sufficiently resilient 
against the environment in which it will 
operate. This includes, for instance, ensure 
that learning process and data are 
representative enough of the real conditions 
in which the model will evolve. 
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

`;