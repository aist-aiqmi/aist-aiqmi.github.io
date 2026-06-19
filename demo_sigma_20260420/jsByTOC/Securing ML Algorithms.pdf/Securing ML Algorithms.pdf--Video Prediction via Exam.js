var toc_content = `SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
14 
 
Table 3: Threats and sub-threats 
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
Evasion 
A type of attack in which the attacker works on 
the ML algorithm's inputs to find small 
perturbations leading to large modification of its 
outputs (e.g. decision errors). It is as if the 
attacker created an optical illusion for the 
algorithm. Such modified inputs are often called 
adversarial examples. 
Example: the projection of images on a house 
could lead the algorithm of an autonomous car to 
take the decision to suddenly make it brake. 
 
 
 
 
 
 
 
 
 
x 
 
Use of adversarial 
examples crafted 
in white or grey 
box conditions 
(e.g. FGSM…) 
In some cases, the attacker has access to 
information (model, model parameters, etc.) that 
can allow him to directly build adversarial 
examples. One example is to directly use the 
model's gradient to find the best perturbation to 
add to the input data to evade the model. 
 
 
 
 
 
 
 
 
 
x 
Oracle 
A type of attack in which the attacker explores a 
model by providing a series of carefully crafted 
inputs and observing outputs. These attacks can 
be previous steps to more harmful types, 
evasion or poisoning for example. 
It is as if the attacker made the model talk to 
then better compromise it or to obtain 
information204 about it (e.g. model extraction) or 
its training data (e.g. membership inferences 
attacks and Inversion attacks). 
Example: an attacker studies the set of input-
output pairs and uses the results to retrieve 
training data. 
 
 
 
 
 
 
 
 
 
x 
Poisoning 
A type of attack in which the attacker altered 
data or model to modify the ML algorithm's 
behavior in a chosen direction (e.g. to sabotage 
its results, to insert a backdoor). It is as if the 
attacker conditioned the algorithm according to 
its motivations. 
Such attacks are also called causative attacks. 
Example: massively indicating to an image 
recognition algorithm that images of dogs are 
indeed cats to lead it to interpret it this way. 
x 
x 
x 
x 
x 
 
x 
 
x 
x 
 
Label modification 
An attack in which the attacker corrupts the 
labels of training data. 
This sub-threat is specific to Supervised 
Learning. 
x 
x 
x 
 
x 
 
 
 
 
 
Model or data 
disclosure 
This threat refers to the possibility of leakage of 
all or partial information about the model.12 
Example: the outputs of a ML algorithm are so 
verbose that they give information about its 
configuration (or leakage of sensitive data) 
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
                                                           
12 We have chosen to separate the oracle attacks from this threat to address the specifics of both threats and give them both a fair 
representation. However, Oracle-type attacks may be considered as a ML specific sub-threat of model or data disclosure. 

SECURING MACHINE LEARNING ALGORITHMS 
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
 

`;