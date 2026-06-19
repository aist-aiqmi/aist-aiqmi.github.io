var toc_content = `SECURING MACHINE LEARNING ALGORITHMS 
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

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
11 
 
2.5 AN OVERVIEW OF END-TO-END MACHINE LEARNING LIFECYCLE 
An ML system lifecycle includes several interdependent phases ranging from its design and 
development (including sub-phases such as requirement analysis, data collection, training, 
testing, integration), installation, deployment, operation, maintenance, and disposal. It defines 
the phases that an organisation should follow to take advantage of AI and of ML models in 
particular to derive practical business value. The latter can be represented as the architecture 
illustrated in Figure 229: 
Figure 2: Typical AI lifecycle (from the ENISA AI Threat Landscape) 
 
Building on the AI lifecycle, we describe in Figure 3 an overview of a typical ML lifecycle with a 
complete overview of the principal steps. 
 
 
 
                                                           
suitable safeguards, which should include specific information to the data subject and the right to obtain human 
intervention, to express his or her point of view, to obtain an explanation of the decision reached after such assessment and 
to challenge the decision.” 
9 https://www.enisa.europa.eu/publications/artificial-intelligence-cybersecurity-challenges  
1 Please use footnotes for providing additional or explanatory information and/or relevant links. References should be listed 
in a dedicated section. Use only the function References/Insert Footnote 

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
12 
 
Figure 3: ML Algorithm lifecycle10,11 
 
The aim of the ML algorithm taxonomy is to focus not only on the functionalities of the 
algorithms but also on the ML models’ workflow represented by the lifecycle. This lifecycle 
summarises the principle steps to produce an ML model. It is important to note that several 
steps could have been added, such as data creation and data analysis (for instance, to analyse 
if there are some personal data or biases). However, to simplify the lifecycle, some steps have 
been condensed. Thus, for example, data cleaning has been included. Regarding data creation, 
it was considered as being external to the ML lifecycle. 
                                                           
10 Optimisation is also known as model tuning.  
11 Data cleaning and data processing have been separated to distinguish the cleaning phase from the adaptation phase of 
the dataset for learning (dimension reduction, feature engineering, etc.). 

`;