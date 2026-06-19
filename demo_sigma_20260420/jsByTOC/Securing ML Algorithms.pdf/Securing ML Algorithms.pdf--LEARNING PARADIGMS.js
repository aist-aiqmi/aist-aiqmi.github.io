var toc_content = `SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
8 
 
There is a strong correlation between the domain of application (the problem being addressed) 
and the data type which is being worked on, as well as between data environments and learning 
paradigm. Thus, further dimensions of the taxonomy were introduced accordingly.  
2.1 MAIN DOMAIN AND DATA TYPES 
Different algorithms are used in different domains of ML. Therefore, the algorithms have been 
categorised according to the main domains represented. Three main domains were (non-
exhaustively) selected, namely Computer Vision, NLP (Natural Language Processing) & Speech 
Processing (understanding and generating speech), and Classic Data Science. 
The inputs that are given to a ML algorithm are data and therefore, the algorithms can be 
categorised based on the types of data that is fed into them. In most cases, specific types of 
data are used in certain domains of ML. Indeed, all the algorithms used in computer vision are 
fed with images and videos, in the same way that all algorithms used in Natural Language 
Processing are fed with text4. In Table 1, the main domains and the type of data used in each of 
them are listed. 
Table 1: Main domains and data types 
Main 
domain 
Data type 
Definition 
Computer 
Vision 
Image 
Visual representation of a matrix of pixels constituted of 1 channel for black and 
white images, 3 elements (RGB) for coloured images or 4 elements (RGBA) for 
coloured images with opacity. 
Video 
A succession of images (frames), sometimes grouped with a time series (a 
sound). 
NLP & 
Speech 
processing 
Text  
A succession of characters (e.g. a tweet, a text field). 
Time series5 
A series of data points (e.g. numerical) indexed in time order. 
Classic 
Data 
Science 
Structured Data  
Data organised in a predefined model of array with one specific column for each 
feature (e.g. textual, numerical data, date). To be more accurate, structured data 
refer to organised data that can be found in a relational data base for example 
(that may contain textual columns as mentioned).  
Quantitative data can be distinguished from qualitative data. Quantitative data 
corresponds to the numerical data that can supports some arithmetic operations 
whereas qualitative data is usually used as categorical data to classify data 
according to their similarities. 
Certain domains such as NLP and Computer Vision have been separated from Classic Data 
Science. The purpose of this separation was to make a distinction between algorithms that may 
be used specifically or predominantly for each domain. 
 
 
 
                                                           
4 Audio data are also used for speech recognition. For the purposes of this report, we consider only text for the NLP for the 
taxonomy. considering that this will not create differences for the work on threats.   
5  For the purposes of this report, time series belong to the two main domains: Classic Data Science and Speech 
processing. By restraining Time series to Classic Data Science and Speech processing, we aspired to emphasise the 
specific approaches that are used for this domain like ARIMA and Hidden Markov Model. Furthermore, we include audio 
data under time series and made the choice to separate video from time series. 

SECURING MACHINE LEARNING ALGORITHMS 
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