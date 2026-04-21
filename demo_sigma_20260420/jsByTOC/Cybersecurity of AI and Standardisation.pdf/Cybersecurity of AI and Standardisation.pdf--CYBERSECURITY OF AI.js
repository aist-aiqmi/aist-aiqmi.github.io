var toc_content = `CYBERSECURITY OF AI AND STANDARDISATION 
 
9 
 
2. SCOPE OF THE REPORT: 
DEFINITION OF AI AND 
CYBERSECURITY OF AI 
2.1 ARTIFICIAL INTELLIGENCE 
Understanding AI and its scope seems to be the very first step towards defining cybersecurity of 
AI. Still, a clear definition and scope of AI have proven to be elusive. The concept of AI is 
evolving and the debate over what it is, and what it is not, is still largely unresolved – partly due 
to the influence of marketing behind the term ‘AI’. Even at the scientific level, the exact scope of 
AI remains very controversial. In this context, numerous forums have adopted/proposed 
definitions of AI.2 
Box 1: Example – Definition of AI, as included in the draft AI Act 
In line with previous ENISA work, which considers it the driving force in terms of AI 
technologies, the report mainly focuses on ML. This choice is further supported by the fact that 
there seem to be a general consensus on the fact that ML techniques are predominant in 
current AI applications. Last but not least, it is considered that the specificities of ML result in 
vulnerabilities that affect the cybersecurity of AI in a distinctive manner. It is to be noted that the 
report considers AI from a life cycle perspective3. Considerations concerning ML only have been 
flagged. 
 
 
2 For example, the United Nations Educational, Scientific and Cultural Organization (UNESCO) in the ‘First draft of the 
recommendation on the ethics of artificial intelligence’, and the European Commission’s High-Level Expert Group on 
Artificial Intelligence. 
3 See the life cycle approach portrayed in the ENISA report Securing Machine Learning Algorithms 
(https://www.enisa.europa.eu/publications/securing-machine-learning-algorithms). 
In its draft version, the AI Act proposes a definition in Article 3(1): 
‘artificial intelligence system’ (AI system) means software that is developed with one or more of 
the techniques and approaches listed in Annex I and can, for a given set of human-defined 
objectives, generate outputs such as content, predictions, recommendations, or decisions 
influencing the environments they interact with. The techniques and approaches referred to in 
Annex I are: 
• Machine learning approaches, including supervised, unsupervised and reinforcement learning, 
using a wide variety of methods including deep learning; 
• logic- and knowledge-based approaches, including knowledge representation, inductive (logic) 
programming, knowledge bases, inference and deductive engines, (symbolic) reasoning and 
expert systems; 
• statistical approaches, Bayesian estimation, search and optimisation methods 

CYBERSECURITY OF AI AND STANDARDISATION 
 
10 
 
Box 2: Specificities of machine learning – examples from a supervised learning model4 
2.2 CYBERSECURITY OF AI 
AI and cybersecurity have been widely addressed by the literature both separately and in 
combination. The ENISA report Securing Machine Learning Algorithms5 describes the 
multidimensional relationship between AI and cybersecurity, and identifies three dimensions: 
• cybersecurity of AI: lack of robustness and the vulnerabilities of AI models and algorithms, 
• AI to support cybersecurity: AI used as a tool/means to create advanced cybersecurity (e.g., 
by developing more effective security controls) and to facilitate the efforts of law enforcement 
and other public authorities to better respond to cybercrime, 
• malicious use of AI: malicious/adversarial use of AI to create more sophisticated types of 
attacks. 
The current report focuses on the first of these dimensions, namely the cybersecurity of AI. Still, 
there are different interpretations of the cybersecurity of AI that could be envisaged: 
• a narrow and traditional scope, intended as protection against attacks on the confidentiality, 
integrity and availability of assets (AI components, and associated data and processes) 
across the life cycle of an AI system, 
• a broad and extended scope, supporting and complementing the narrow scope with 
trustworthiness features such as data quality, oversight, robustness, accuracy, explainability, 
transparency and traceability. 
The report adopts a narrow interpretation of cybersecurity, but it also includes considerations 
about the cybersecurity of AI from a broader and extended perspective. The reason is that links 
between cybersecurity and trustworthiness are complex and cannot be ignored: the 
requirements of trustworthiness complement and sometimes overlap with those of AI 
cybersecurity in ensuring proper functioning. As an example, oversight is necessary not only for 
the general monitoring of an AI system in a complex environment, but also to detect abnormal 
behaviours due to cyberattacks. In the same way, a data quality process (including data 
traceability) is an added value alongside pure data protection from cyberattack. Hence, 
 
4 Besides the ones mentioned in the box, the ‘False Negative Rate” and the ‘False Positive Rate” and the ‘F measure” are 
examples of other relevant metrics. 
5 https://www.enisa.europa.eu/publications/securing-machine-learning-algorithms 
ML systems cannot achieve 100 % in both precision and recall. Depending on the situation, ML needs to 
trade off precision for recall and vice versa. It means that AI systems will, once in a while, make wrong 
predictions. This is all the more important because it is still difficult to understand when the AI system will fail, 
but it will eventually. 
This is one of the reasons for the need for explainability of AI systems. In essence, algorithms are 
deemed to be explainable if the decisions they make can be understood by a human (e.g., a developer or an 
auditor) and then explained to an end user (ENISA, Securing Machine Learning Algorithms). 
A major specific characteristic of ML is that it relies on the use of large amounts of data to develop 
ML models. Manually controlling the quality of the data can then become impossible. Specific traceability or 
data quality procedures need to be put in place to ensure that, to the greatest extent possible, the data being 
used do not contain biases (e.g. forgetting to include faces of people with specific traits), have not been 
deliberately poisoned (e.g. adding data to modify the outcome of the model) and have not been deliberately 
or unintentionally mislabelled (e.g. a picture of a dog labelled as a wolf). 

CYBERSECURITY OF AI AND STANDARDISATION 
 
11 
 
trustworthiness features such as robustness, oversight, accuracy, traceability, explainability and 
transparency inherently support and complement cybersecurity. 
 
 

`;