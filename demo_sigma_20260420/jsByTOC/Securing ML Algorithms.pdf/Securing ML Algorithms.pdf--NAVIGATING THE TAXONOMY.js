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

`;