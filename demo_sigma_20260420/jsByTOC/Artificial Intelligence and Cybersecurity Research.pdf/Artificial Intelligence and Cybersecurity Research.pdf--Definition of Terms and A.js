var toc_content = `ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
8 
 
DEFINITION OF TERMS AND 
ABBREVIATIONS  
The following list describes the terms used in this document. 
Artificial 
Intelligence (AI) 
There is no commonly agreed definition of AI4. Though a common definition 
is lacking, a number of commonalities may be observed (cf. JRC5) in the 
definitions analysed that may be considered as the main features of AI: (i) 
perception of the environment, including consideration of the complexity of 
the real-world; (ii) information processing (collecting and interpreting inputs 
(in the form of data); (iii) decision-making (including reasoning and learning): 
taking actions, performing tasks (including adaptation and reaction to 
changes in the environment) with a certain level of autonomy; (iv) 
achievement of specific goals. 
Artificial 
Intelligence 
systems 
AI systems are software (that is developed through machine learning 
approaches and logic- and knowledge-based approaches6). In addition, they 
can, for a given set of human-defined objectives, generate outputs such as 
content, predictions and recommendations or decisions influencing the 
environments with which they interact. AI systems may also possibly include 
hardware systems designed by humans that, given a complex goal, act in the 
physical or digital dimension by perceiving their environment through data 
acquisition, interpreting the collected structured or unstructured data, 
reasoning on the knowledge or processing the information derived from this 
data and deciding the best action(s) to take to achieve a given goal7 8. 
Artificial neural 
networks (ANNs) 
Artificial neural networks (ANNs), usually simply called neural networks 
(NNs) or neural nets, are computing systems based on a collection of 
connected units or nodes called artificial neurons, which loosely model the 
neurons in a biological brain. 
Cyber-physical 
systems (CPS) 
Cyber-physical systems (CPSs) are the integrations of computation, 
communication and control that achieve the desired performance of physical 
processes. 
Decision Tree 
(DT) 
Decision Tree learning is a form of supervised machine learning. 
 
4 European Commission. Joint Research Centre. AI watch: defining Artificial Intelligence: towards an operational 
definition and taxonomy of artificial intelligence. Publications Office, 2020. doi:10.2760/382730. URL https: 
//data.europa.eu/doi/10.2760/382730. The update to this JRC Technical Report in 2021 https://ai-
watch.ec.europa.eu/document/download/e90645f1-662e-470d-9af9-848010260b1f_en  provided a qualitative analysis of 37 
more AI policy and institutional reports, 23 relevant research publications and 3 market reports, from the beginning of AI in 
1955 until 2021. 
5 Idem as 4 
6 Commission proposal for an EU Regulation and Council’s General Approach on a Draft AI Act, December 2022, 
https://data.consilium.europa.eu/doc/document/ST-14954-2022-INIT/en/pdf. The initial definition in the Commission’s 
Proposal was narrowed down by the Council to distinguish AI from more classical software systems.  
7 Idem as 4. ETSI defines AI (system) as: ’Artificial intelligence is the ability of a system to handle representations, both 
explicit and implicit, and procedures to perform tasks that would be considered intelligent if performed by a human’. 
8 The legal definition of AI in the draft EU Regulation is work in progress in the EU Parliament. 

ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
9 
 
Deep Learning 
(DL)  
 
Deep Learning9 is part of a broader family of machine learning methods 
based on artificial neural networks (ANNs10). 
Ensemble 
methods 
Techniques that aim at improving the accuracy of results in models by 
combining multiple models instead of using a single model. 
Hidden Markov 
Model (HMM) 
Hidden Markov Model (HMM) is a statistical model which is also used in 
machine learning. It can be used to describe the evolution of observable 
events that depend on internal factors that are not directly observable. 
Hidden Markov models (HMMs) originally emerged in the domain of speech 
recognition. In recent years, they have attracted growing interest in the area 
of computer vision as well. 
K-means 
clustering 
K-means clustering is one of the simplest and most popular unsupervised 
machine learning algorithms. 
Machine Learning 
(ML) 
Machine learning is a subset of AI which essentially employs advanced 
statistics in order to construct frameworks with the ability to learn from 
available data, identify patterns and make predictions without requiring 
human intervention11. 
Naive Bayes’ 
classifier (NB) 
Naive Bayes is a popular supervised machine learning algorithm. 
Reinforcement 
learning (RL) 
Reinforcement learning (RL) is an area of machine learning concerned with 
how intelligent agents take actions in an environment in order to maximise 
the notion of cumulative reward. Reinforcement learning is one of three basic 
machine learning paradigms, alongside supervised learning and 
unsupervised learning. 
Security-by-
design 
A concept in software engineering and product design that takes security 
considerations into account at the early stages of product development. 
Supervised ML  
Supervised learning is a subcategory of machine learning defined by its use 
of labelled data sets to train algorithms to classify data or predict outcomes 
accurately. 
Support Vector 
Machine (SVM) 
A Support Vector Machine (SVM) algorithm is a supervised learning 
algorithm used in the classification of training data sets.  
Unsupervised ML 
One of the three basic machine learning paradigms, together with 
reinforcement learning and supervised learning, dealing with the process of 
inferring underlying hidden patterns from historical data12. 
 
 
 
9 For example, LeCun, Yann; Bengio, Yoshua; Hinton, Geoffrey (2015). Deep Learning. Nature. 521 (7553): 436–444. 
Bibcode:2015 Nature 521.436L. DOI:10.1038/nature14539 
10 For example, Hardesty, Larry (14 April 2017). Explained: Neural networks. MIT News Office. Retrieved 2 June 2022. 
11 Dipankar Dasgupta, Zahid Akhtar, and Sajib Sen. Machine learning in cybersecurity: a comprehensive survey. The 
Journal of Defense Modeling and Simulation: Applications, Methodology, Technology, page 154851292095127, 
September 2020. doi:10.1177/1548512920951275. URL https://doi.org/10.1177/1548512920951275  
12 Hinton, Geoffrey; Sejnowski, Terrence (1999). Unsupervised Learning: Foundations of Neural Computation. MIT Press. 
ISBN 978-0262581684. 

ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
10 
 
KEY AI CONCEPTS AND 
FEATURES 
Machine learning is by far the most popular field in AI. It is used in cybersecurity in a 
variety of ways. Table 1 below depicts the use of AI methods in cybersecurity 
functions.  
ML involves the development of algorithms and statistical models that allow computer 
systems to learn from experience and improve without having to be explicitly 
programmed. In this chapter, we categorise the existing methods of ML into two 
distinct groups: traditional, and neural network-based tools and methods. This type of 
categorisation is widely used in the literature to show the advantages and 
disadvantages of each tool.  
There are also other ways to make this categorisation, depending on the use of 
information (supervised vs unsupervised), scope of application (classification, 
regression and clustering), depth of architecture (shallow vs deep), etc.  
Another school of thought should also be mentioned, namely reinforcement learning 
(RL), a hybrid approach that aims to learn an environment through an agent based on 
trial and error.  
Table 1: AI methods in cybersecurity functions (source: authors) 
Security function/AI 
DT 
SVM 
NB 
K-
means 
HMM 
GAS 
ANN 
CNN 
RNN 
Encoders 
SNN 
Intrusion detection 
X 
X 
X 
X 
X 
X 
X 
X 
X 
X 
Malware detection 
X 
X 
X 
X 
X 
X 
Vulnerability 
assessment 
X 
Spam filtering 
X 
Anomaly detection 
X 
X 
Malware classification 
X 
X 
X 
Phishing detection 
X 
Traffic analysis 
X 
X 
Data compression 
X 
Feature extraction 
X 
 
1.1 TRADITIONAL ML 
Traditional ML-based solutions include DT, SVM and K-means clustering which have 
been widely used in different cybersecurity tasks such as detection of spam13, 
 
13 Saumya Goyal, R. K. Chauhan, and Shabnam Parveen. Spam detection using KNN and decision-tree mechanisms in 
social networks. In 2016 Fourth International Conference on Parallel, Distributed and Grid Computing (PDGC), pages 522–
526, 2016. doi:10.1109/PDGC.2016.7913250. 

`;