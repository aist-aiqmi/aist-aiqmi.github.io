var toc_content = `SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
27 
 
2) 
ML-specific mitigation controls are not generally evaluated in a standardised way even 
if it is a current and important issue to enable comparability. More research should be 
devoted to standardised benchmarks for comparing ML-specific mitigations on a level 
playing field. These benchmarks should also be enforced to ensure that the methods 
used in practice are the ones that perform best. 
3) 
Deploying security controls often leads to a trade-off between security and 
performance and this is a topic of particular importance that should be further pursued 
by the research and cybersecurity communities. 
 

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
28 
 
A ANNEX: TAXONOMY OF 
ALGORITHMS  
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
AdaBoost 
AdaBoost uses multiple 
iterations to generate a 
single composite strong 
learner by iteratively adding 
weak learners. During each 
phase of training, a new 
weak learner is added to the 
ensemble, and a weighting 
vector is adjusted to focus 
on examples that were 
misclassified in previous 
rounds.  
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
 
38 
Adam 
optimisation 
Adam optimisation is an 
extension to Stochastic 
gradient decent and can be 
used in place of classical 
stochastic gradient descent 
to update network weights 
more efficiently, thanks to 
two methods: adaptative 
learning rate and 
momentum 
Classic 
Data 
Science 
Structured 
data 
/ 
Optimisation 
 
 
24 
Agglomerative 
clustering 
Agglomerative clustering is 
a "bottom-up" approach of 
hierarchical clustering. Each 
observation starts in its own 
cluster, and pairs of clusters 
are merged as one moves 
up the hierarchy. 
Classic 
Data 
Science 
Structured 
data 
Unsupervised 
Learning 
Clustering 
 
 
32 
ARMA/ARIMA 
model 
Given a time series Xt, the 
ARMA/ARIMA model is a 
tool to understand and 
predict the future values of 
this series. The model is 
composed of two parts: an 
autoregressive part (AR) 
and a moving average part 
(MA) 
Classic 
Data 
Science 
Time series Supervised 
learning 
Regression 
Fully Explainable 
 
136 
BERT 
Bidirectional Encoder 
Representations from 
Transformers (BERT) is a 
Transformer-based ML 
technique for natural 
language processing (NLP) 
pre-training developed by 
Google. 
NLP & 
Speech 
processing 
Text 
Supervised 
learning 
Classification 
Not Explainable 
Yes 
5 
Convolutional 
Neural 
Network 
A Convolutional Neural 
Network is a deep learning 
algorithm which can take in 
an input, assign importance 
(learnable weights and 
biases) to various 
aspects/objects in the data 
and be able to differentiate 
one from the other. 
Computer 
Vision, NLP 
& Speech 
processing 
Image, 
video, text, 
time series 
Supervised 
learning 
Classification 
Not Explainable 
Yes 
16, 22, 
36, 43, 
49, 50, 
56, 58, 
59; 64, 
67, 68, 
69, 70, 
82, 89, 
103, 
124, 
161 

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
29 
 
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
DBSCAN 
DBSCAN - Density-Based 
Spatial Clustering of 
Applications with Noise is a 
density-based clustering 
non-parametric algorithm: 
given a set of points in 
some space, it groups 
together points that are 
closely packed together 
(points with many nearby 
neighbours), marking as 
outliers points that lie alone 
in low-density regions 
(whose nearest neighbours 
are too far away). 
Computer 
Vision 
Image 
Unsupervised 
Learning 
Clustering 
 
 
26, 
129, 
142 
Decision tree 
A decision tree is a graph 
that uses a branching 
method to illustrate every 
possible output for a specific 
input in order to break down 
complex problems. 
Classic 
Data 
Science 
Structured 
data 
Supervised 
learning 
Classification, 
Regression 
Fully Explainable 
 
40, 42, 
120, 
Deep Q-
learning 
Deep Q-learning works as 
Q-learning algorithm at the 
difference that it uses a 
neural network to 
approximate the Q-value 
function to manage big 
amount of states and 
actions. 
Classic 
Data 
Science 
Time series Reinforcement 
learning 
Rewarding 
 
Yes 
65, 85 
EfficientNet 
EfficientNet is a 
Convolutional Neural 
Network based on depth 
wise convolutions, which 
makes it lighter than other 
CNNs. It also allows to 
scale the model with a 
unique lever: the compound 
coefficient. 
Computer 
Vision 
Image 
Supervised 
learning 
Classification 
Not Explainable 
Yes 
4 
Factor 
analysis of 
corresponde
nces 
The factorial 
correspondence analysis 
(CFA) is a statistical method 
of data analysis which 
allows the analysis and 
prioritisation of the 
information contained in a 
rectangular table of data 
and which is today 
particularly used to study 
the link between two 
variables (qualitative or 
categorical). 
Classic 
Data 
Science 
Structured 
data 
Unsupervised 
Learning 
Dimension 
Reduction 
 
 
 
GAN 
A GAN is a generative 
model where two networks 
are placed in competition. 
The first model is the 
generator, it generates a 
sample (e.g. an image), 
while its opponent, the 
discriminator, tries to detect 
whether a sample is real or 
whether it is the result of the 
generator. Both improve on 
the performance of the 
other. 
Computer 
Vision 
Image, 
Video 
Unsupervised 
Learning 
 
 
 
53, 135 

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
30 
 
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
GMM 
A Gaussian mixture model 
is a probabilistic model that 
assumes all the data points 
are generated from a 
mixture of a finite number of 
Gaussian distributions with 
unknown parameters. 
Computer 
Vision, NLP 
& Speech 
processing 
Text, time 
series, 
Image, 
video, 
Unsupervised 
Learning 
Clustering 
 
 
31, 131 
GPT-3 
Generative Pre-trained 
Transformer 3 (GPT-3) is an 
autoregressive language 
model that uses deep 
learning to produce human-
like text. 
NLP & 
Speech 
processing 
Text 
Supervised 
learning 
Classification 
Not Explainable 
Yes 
6 
Gradient 
boosting 
machine 
Gradient boosting is a 
technique that optimises a 
decision tree by combining 
weak models to improve 
model prediction. 
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
 
3, 51, 
54, 55, 
140 
Gradient 
descent 
Gradient descent is a first-
order iterative optimisation 
algorithm for finding a local 
minimum of a differentiable 
function. The idea is to take 
repeated steps in the 
opposite direction of the 
gradient (or approximate 
gradient) of the function at 
the current point, because 
this is the direction of 
steepest descent. 
Classic 
Data 
Science 
Structured 
data 
/ 
Optimisation 
 
 
17 
Graph neural 
networks 
(GNNs) 
Graph neural networks 
(GNNs) are deep learning-
based methods that operate 
on graph domain. Graphs 
are a kind of data structure 
which models a set of 
objects (nodes) and their 
relationships (edges) 
Computer 
Vision, 
Speech 
processing 
Image 
Supervised 
learning 
Regression, 
classification 
 
 
20 
Hierarchical 
clustering 
Hierarchical clustering is a 
method of cluster analysis 
which seeks to build a 
hierarchy of clusters. The 
result is a tree-based 
representation of the 
objects, named a 
dendrogram. 
Classic 
Data 
Science 
Structured 
data 
Unsupervised 
Learning 
Clustering 
 
 
32 
Hidden 
Markov 
Model (HMM) 
Hidden Markov Model is a 
statistical Markov model in 
which the system being 
modelled is assumed to be 
a Markov process with 
unobservable hidden states. 
Structured 
data, NLP & 
Speech 
processing 
Structured 
data, time 
series, text 
Reinforcement 
learning 
Rewarding 
 
Yes 
29 
Independent 
component 
analysis 
ICA is a special case of 
blind source separation. A 
common example 
application is the "cocktail 
party problem" of listening in 
on one person's speech in a 
noisy room. 
Classic 
Data 
Science 
Structured 
data 
Unsupervised 
Learning 
Dimension 
Reduction 
 
 
2 

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
31 
 
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
Isolation 
forest 
The isolation forest returns 
the anomaly score of each 
sample. It isolates 
observations by randomly 
selecting a feature, and then 
randomly selecting a split 
value between the 
maximum and minimum 
values of the selected 
feature. 
Classic 
Data 
Science 
Structured 
data 
Unsupervised 
learning 
Anomaly 
detection 
 
 
157, 
161 
K-means 
K-means clustering is a 
method of vector 
quantification that aims to 
partition n observations into 
k clusters in which each 
observation belongs to the 
cluster with the nearest 
mean (cluster centres or 
cluster centroid), serving as 
a prototype of the cluster. 
Classic 
Data 
Science 
Structured 
data 
Unsupervised 
Learning 
Clustering 
 
 
129 
K-Nearest 
Neighbour 
K-Nearest Neighbour is a 
simple algorithm that stores 
all the available cases and 
classifies the new data or 
case based on a similarity 
measure. It is mostly used 
to classify a data point 
based on how its 
neighbours are classified. 
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
21, 40, 
Linear 
regression 
Linear regression attempts 
to model the relationship 
between two or more 
variables by fitting a linear 
equation to observed data. 
One variable is considered 
to be an explanatory 
variable, and the other is 
considered to be a 
dependent variable. For 
example, a modeller might 
want to relate the weights of 
individuals to their heights 
using a linear regression 
model. 
Classic 
Data 
Science 
Structured 
data 
Supervised 
learning 
Regression 
Fully Explainable 
 
2, 117, 
221 
Logistic 
regression 
Logistic regression is used 
to classify data by modelling 
the probability of a certain 
class or event existing such 
as pass/fail, win/lose, 
alive/dead or healthy/sick. 
This can be extended to 
model several classes of 
events such as determining 
whether an image contains 
a cat, dog, lion, etc. 
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
2, 120, 
177 
LSTM 
Long short-term memory 
(LSTM) is an artificial 
recurrent neural network 
(RNN) architecture used in 
the field of deep learning. 
Unlike standard feedforward 
neural networks, LSTM has 
feedback connections. It 
cannot only process single 
data points (such as 
images), but also entire 
sequences of data (such as 
speech or video). 
NLP & 
Speech 
processing, 
computer 
vision 
Text, 
image, 
video 
Supervised 
learning 
Regression 
Not Explainable 
 
22, 44, 
45, 46, 
47, 50, 
84, 85, 
131, 
158, 
161 

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
32 
 
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
Mean shift 
Mean shift is a non-
parametric feature-space 
analysis technique for 
locating the maxima of a 
density function, a so-called 
mode-seeking algorithm 
Computer 
Vision 
Image, 
video 
Unsupervised 
Learning 
Clustering 
 
 
27 
MobileNet 
MobileNets are based on a 
streamlined architecture that 
uses depth-wise separable 
convolutions instead of 
convolutions, in order to 
build light wFeight deep 
neural networks. 
Computer 
Vision, 
Classic 
Data 
Science, 
NLP & 
Speech 
processing 
Image, 
video, text, 
time series, 
structured 
data 
Unsupervised 
learning 
Clustering 
 
Yes 
4 
Monte Carlo 
algorithm 
A Monte Carlo algorithm is a 
randomised algorithm 
whose output may be 
incorrect with a certain 
(typically small) probability. 
Classic 
Data 
Science 
Structured 
data 
Reinforcement 
learning 
Rewarding 
 
 
30, 105 
Multimodal 
Parallel 
Network 
A Multimodal Parallel 
Network helps to manage 
audio-visual event 
localisation by processing 
both audio and visual 
signals at the same time. 
Computer 
Vision, 
Speech 
processing 
Video 
Supervised 
learning 
Classification 
 
 
18 
Naive Bayes 
classifiers 
Naive Bayes classifiers are 
a family of simple 
probabilistic classifiers 
based on applying Bayes' 
theorem with strong (naïve) 
independence assumptions 
between the features. 
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
39, 40, 
89, 
120, 
210 
Proximal 
Policy 
Optimisation 
A family of policy gradient 
methods for Reinforcement 
Learning that alternate 
between sampling data and 
optimising a surrogate 
objective function using 
stochastic gradient ascent. 
Classic 
Data 
Science 
Structured 
data, time 
series 
Reinforcement 
learning 
Rewarding 
 
Yes 
137 
Principal 
Component 
Analysis 
The main idea of principal 
component analysis (PCA) 
is to reduce the 
dimensionality of a data set 
consisting of many variables 
correlated with each other, 
either heavily or lightly, 
while retaining the variation 
present in the dataset, up to 
the maximum extent. 
Classic 
Data 
Science 
Structured 
data 
Unsupervised 
Learning 
Dimension 
Reduction 
 
 
2 
Q-learning 
Q-learning is a model-free 
reinforcement learning 
algorithm to learn the value 
of an action in a particular 
state. It does not require a 
model of the environment. 
Classic 
Data 
Science 
Structured 
data, time 
series 
Reinforcement 
learning 
Rewarding 
 
Yes 
28 
Random 
forests 
Random forests are an 
ensemble learning method 
that operates by 
constructing a multitude of 
decision trees at training 
time and outputting the 
class that is the mode of the 
classes (classification) or 
mean/average prediction 
(regression) of the individual 
trees. 
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
 
51, 
136, 
140 

SECURING MACHINE LEARNING ALGORITHMS 
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
 
 

`;