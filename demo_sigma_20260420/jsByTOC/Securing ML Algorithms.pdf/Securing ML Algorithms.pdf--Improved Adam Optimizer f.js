var toc_content = `SECURING MACHINE LEARNING ALGORITHMS 
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

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
24 
 
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
Implement processes to 
maintain security levels of ML 
components over time 
ML is a rapidly evolving field, especially 
regarding its cybersecurity. Regular 
checking of new attacks and defenses must 
be integrated into the processes for 
maintaining security level applications. The 
security level should thus be regularly 
assessed too. 
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
Implement tools to detect if a 
data point is an adversarial 
example or not 
Input-based detection tools can be of 
interest to identify whether a given input has 
been modified by an attacker or not. 
One example, in the case of Deep Neural 
Networks (DNNs), is to add a neural 
subnetwork to an architecture trained to 
detect adversarial examples. 
 
 
 
x 
x 
 
 
 
 
x 
Integrate ML specificities to 
awareness strategy and 
ensure all ML stakeholders 
are receiving it 
ML considerations should be added to 
awareness programs for concerned 
stakeholders and they must all receive 
cybersecurity awareness training: 
- Global cybersecurity awareness training 
including best practices to prevent attackers 
compromising the ML application. 
- Manipulation of potentially sensitive data or 
data subject to regulatory restrictions. 
- Configurations to prevent applications 
being vulnerable 
- ML-specific attack awareness 
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
Integrate poisoning control 
after the "model evaluation" 
phase 
Before moving the model to production and 
then on a regular basis, the model should be 
evaluated to ensure it has not been 
poisoned. This differs from the security 
control “Use methods to clean the training 
dataset from suspicious samples”. Indeed, 
here, it’s the model itself that is evaluated. 
For example: deep learning classification 
algorithms can be checked for poisoning 
using the STRIP18 technique. The principle is 
to disturb the inputs and observe the 
randomness of the predictions. 
 
 
 
 
 
 
 
x 
 
 
Reduce the available 
information about the model 
This defense consists of limiting the 
information about the model when it is not 
necessary. More precisely, it aims at taking 
the necessary actions in order to reduce the 
information available on the model such as 
information on the training data set or any 
other information that could be used by an 
attacker (e.g., not publishing the model in 
open source). Of course, there is a trade-off 
between security and the fact that 
stakeholders (e.g., users, ML teams) 
sometimes want open source models. 
However, it remains notable that in many 
cases, research has shown that minimal 
information is sufficient to mount attacks. 
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
                                                           
18 See https://arxiv.org/pdf/1902.06531.pdf. It is notable that STRIP (STRong Intentional Perturbatio) may have a huge 
runtime overhead and may be infeasible for large dataset.  

`;