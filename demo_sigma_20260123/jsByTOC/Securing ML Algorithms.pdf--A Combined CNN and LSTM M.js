var toc_content = `SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
21 
 
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
Check the vulnerabilities of 
the components used so that 
they have an appropriate 
security level 
During the lifecycle of an ML algorithm, 
several components (such as software, 
programming libraries or even other models) 
are used to complete the project. Security 
checks have to be carried out to ensure that 
these components offer an adequate level of 
security. Moreover, some mechanisms need 
to be used to prevent tampering with the 
components used. 
For example: if an open-source library is to 
be used, code reviews or check for public 
vulnerabilities on it can be done. 
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
Conduct a risk analysis of the 
ML application 
A risk analysis of the overall application 
should be conducted to take into account the 
specificities of its context, including:  
- The attacker’s motivations 
- The sensitivity of the data handled (e.g. 
medical or personal and thus subject to 
regulatory constraints, strategic for the 
company and should thus be highly 
protected) 
- The application hosting (e.g. through third 
parties services, cloud or on premise 
environments) 
- The model architecture (e.g. its exposition, 
learning methods) 
- The ML application lifecycle (e.g., model 
sharing 
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
Control all data used by the 
ML model 
Data must be checked to ensure they will 
suit the model and limit the ingestion of 
malicious data: 
- Evaluate the trust level of the sources to 
check it's appropriate in the context of the 
application 
- Protect their integrity along the whole data 
supply chain 
- Their format and consistence are verified 
- Their content is checked for anomalies, 
automatically or manually (e.g. selective 
human control) 
-  In the case of labeled data, the issuer of 
the label is trusted. 
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
 
Ensure reliable sources 
are used 
ML is a field in which the use of open-source 
elements is widespread (e.g., data for 
training, including labeled ones, models). 
The trust level of the different sources used 
should be assessed to prevent using 
compromise ones. 
For example: the project wants to use 
labeled images from a public library. Are the 
contributors sufficiently trusted to have 
confidence in the contained images or the 
quality of their labelling? 
x 
 
 
x 
 
 
 
 
 
 
 
Use methods to clean the 
training dataset from 
suspicious samples 
Removing suspicious samples from the 
training and testing dataset can help prevent 
poisoning attacks. Some methods exist to 
identify those that could cause strange 
behavior of the algorithm. 
 
x 
x 
 
x 
 
 
 
 
 

SECURING MACHINE LEARNING ALGORITHMS 
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

`;