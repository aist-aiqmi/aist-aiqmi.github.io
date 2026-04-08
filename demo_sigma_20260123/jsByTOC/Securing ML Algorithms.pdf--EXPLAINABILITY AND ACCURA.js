var toc_content = `SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
9 
 
2.2 LEARNING PARADIGMS  
Learning paradigm in ML relates to how a machine learns when data is fed to it. For example, 
all the classification and regression algorithms use labelled data, meaning that they are doing 
only supervised learning. Indeed, supervised learning, by definition, is the learning of labelled 
data, which can be either numerical (in this case, the learning paradigm is regression), or 
categorical (the learning paradigm is classification). An example of classification can be 
differentiating a cat from a dog in a picture, and an example of regression can be predicting the 
price of a house. On the other hand, a clustering algorithm uses unlabeled data, which is an 
unsupervised type of learning. Therefore, one can conclude that each learning paradigm is a 
specific case of one data environment. 
 
In addition to the data types fed into the algorithms, we also focused on three learning 
paradigms, namely supervised learning, unsupervised learning, and reinforcement learning: 
• 
Supervised learning learns a function that maps an input to an output based on 
example input-output pairs. It infers a function from labelled training data 
consisting of a set of training examples. 
• 
Unsupervised learning learns patterns from unlabelled data. It discovers hidden 
patterns or data groupings without the need for human intervention. 
• 
Reinforcement learning enables an agent to learn in an interactive environment by 
trial and error using feedback from its own actions and experiences.  
Table 2: Learning paradigms with typical subtypes. 
Learning paradigm 
Subtypes 
Definition 
Supervised learning 
Classification 
Classification is the process of predicting the 
class of given data points. (Is the picture a cat 
or a dog?) 
Regression 
Regression models are used to predict a 
continuous value. (Predict the price of a house 
based on its features).  
Unsupervised learning 
Clustering 
Clustering is the task of dividing a set of data 
points into several groups such that data points 
in the same groups are more similar each other 
than from the data points of the other groups. 
Dimensionality reduction 
Dimensionality reduction refers to techniques 
for reducing the number of input variables in 
training data. 
Reinforcement learning 
Rewarding  
Rewarding is an area of ML concerned with how 
intelligent agents ought to take actions in an 
environment to maximise the notion of 
cumulative reward, learning by using feedback 
from their experiences. 
Each of these learning paradigms have different security-related properties which may lead to 
attacks and therefore, it is relevant to represent this information in the taxonomy of ML algorithms, 
from which security controls will be mapped. For instance, the most common learning paradigm 
is classification and thus, it has many more examples of vulnerabilities due to its popularity. 

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
10 
 
2.3 NAVIGATING THE TAXONOMY 
Each algorithm is placed in its corresponding cell of the taxonomy grid, according to its learning 
paradigm, data type and main domain. For instance, Recurrent Neural Networks6 (RNN), which 
are a type of neural network helpful in modelling sequenced data, are used for regression in 
supervised learning, so they must be mapped in the first column. Moreover, the data fed into 
them can be text, time series, images, or videos so the RNN box covers all the corresponding 
lines in the taxonomy.  
However, some of the widely used and mentioned algorithms are based on common elementary 
components, or are extensions of the same principle, and can therefore form families or clusters 
of algorithms on this taxonomy grid. Hence, we map those specific algorithms in groups by 
using nested boxes, as it allows for the representation of a wide variety of algorithms, while 
showing that some have relationships with one another.  
 
To continue with the previous example, a more recent version of RNN is LSTM7 (Long-Short 
Term Memory), which differs from RNN based on its optimisation techniques, making it faster to 
learn and more precise. Since LSTM is a specific extension of RNN, the LSTM box was nested 
in the RNN box in the taxonomy: this indicates that the two algorithms are part of the same 
family. 
2.4 EXPLAINABILITY AND ACCURACY 
An important aspect of security of AI is that of explainability. Understanding the algorithms and 
making them explainable makes them more accessible to as many people as possible. It also 
helps to increase the trustworthiness of AI and support forensics and analysis of decisions. 
Following inputs from the desk research exercise and from the research on attacks targeting ML 
models, we additionally included two important parameters in the taxonomy:  
• 
Explainability: For the purposes of this study, algorithms are deemed to be 
"explainable" if the decision it makes can be understood by a human. That is to say, 
decisions can be understood by a human such as a developer or an auditor and then 
explained to an end-user, for example. To be fully explainable, an algorithm must be:  
o 
Globally explainable: a user can identify the features’ importance for the 
trained model. 
o 
Locally explainable: a user can explain why the algorithm gives a specific 
output (prediction) to a specific input data (features’ values). 
• 
Accuracy (probability score): Some algorithms provide, in addition to a predictive 
output, the probability of this prediction which can be interpreted as an “accuracy 
level”. If an algorithm doing classification predicts that a picture of a cat is indeed a 
picture of a cat at 95% accuracy, one can say that the algorithm has a “high accuracy 
classification”. Otherwise, if the prediction was at 55% accuracy, one could say that the 
algorithm has a “low accuracy classification”. 
It is important to note that we focused on the algorithms’ explainability because this work is 
important for other parts of the publication. For example, in one identified security control, it is 
highlighted that it is necessary to ensure that ML projects comply with regulatory constraints 
such as the GDPR, which describes some explainability requirements8.  
                                                           
6 https://apps.dtic.mil/dtic/tr/fulltext/u2/a164453.pdf  
7 https://www.bioinf.jku.at/publications/older/2604.pdf  
8 GDPR Recital 71 “The data subject should have the right not to be subject to a decision, which may include a measure, 
evaluating personal aspects relating to him or her which is based solely on automated processing and which produces legal 
effects concerning him or her or similarly significantly affects him or her, such as automatic refusal of an online credit 
application or e-recruiting practices without any human intervention. […] In any case, such processing should be subject to 
1 Please use footnotes for providing additional or explanatory information and/or relevant links. References should be listed 
in a dedicated section. Use only the function References/Insert Footnote 

`;