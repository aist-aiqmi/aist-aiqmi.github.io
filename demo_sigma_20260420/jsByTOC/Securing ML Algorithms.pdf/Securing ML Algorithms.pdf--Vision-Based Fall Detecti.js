var toc_content = `SECURING MACHINE LEARNING ALGORITHMS 
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

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
25 
 
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
Reduce the information given 
by the model19 
Controlling the information (like its verbosity) 
provided by the model by applying basic 
cybersecurity hygiene rules is a way of 
limiting the techniques that an attacker can 
use to build adversarial examples.  
One of the basic rules of hygiene, for 
example, is to reduce the information of the 
output determined by the model to the 
maximum, or by profile making the request. 
For example: considering a classification 
application, it would consist of 
communicating only the predicted class to 
the users of solution, not the associated 
probability. However, it remains notable that 
in many cases, research has shown that 
minimal information is sufficient to mount 
attacks. 
 
 
 
 
 
 
 
 
 
x 
Use federated learning to 
minimize risk of data breaches 
Federated learning is a set of training 
techniques that trains a model on several 
decentraliser servers containing local data 
samples, without exchanging their data 
samples. This avoids the need to transfer 
the data and/or entrust it to an untrusted 
third party and thus helps to preserve the 
privacy of the data. 
 
 
 
x 
x 
 
 
 
 
 
Use less easily transferable 
models20 
The transferability property can be used to 
force adversarial examples from a 
substitution model to evade another. The 
ease of transferring an adversarial example 
from a model to another depends on the 
family of algorithms. One possible defense is 
thus to choose an algorithm family that is 
less sensitive to the transferability of 
adversarial examples. 
 
 
 
x 
 
 
 
 
 
 
 
                                                           
19 It is important to keep in mind that, in case of attacks like evasion or oracle, this security control can help. However, in 
some cases, it may possible to bypass the security control by using more queries. 
20 Some evasion attacks are based on the following principle: train a model with data like the target model used and 
generate adversarial examples from this model. Then, present these adversarial examples to the target model to perform 
an evasion attack. Whether or not to transfer an adversarial example generated by one model to another depends on their 
respective design as shown in the reference 215.  

`;