var toc_content = `SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
7 
 
2. MACHINE LEARNING 
ALGORITHMS TAXONOMY 
 
One of the objectives of this work was to devise a (non-exhaustive) taxonomy, to support the 
process of identifying which specific threats can target ML algorithms, their associated 
vulnerabilities, and security controls for addressing these vulnerabilities. An important disclaimer 
needs to be made concerning this taxonomy, namely that it is not meant to be complete or 
exhaustive when it comes to ML, instead it aims to support the security analysis of ML 
algorithms in this report. 
Based on the desk research and interviews with experts of the ENISA AI Working group, we 
identified 40 of the most commonly used ML algorithms. A taxonomy was built based on the 
analysis of these algorithms. In particular, it was noted that ML algorithms were driven mainly by 
the learning paradigms and the problem they address (main domain). These aspects were 
therefore chosen to form the key taxonomy dimensions, as seen in Figure 1. It should be noted 
that Annex A provides a complete listing of the 40 algorithms and their mapping to the features 
of the taxonomy, whereas the Figure serves for illustration purposes. 
Figure 1: Machine Learning Algorithm taxonomy 
 

SECURING MACHINE LEARNING ALGORITHMS 
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

`;