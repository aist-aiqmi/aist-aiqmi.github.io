var toc_content = `SECURING MACHINE LEARNING ALGORITHMS 
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

SECURING MACHINE LEARNING ALGORITHMS 
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
 
 
 
 
 

`;