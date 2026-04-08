var toc_content = `SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
42 
 
Security controls 
Examples for operational implementation 
References 
Include ML applications into 
detection and response to 
security incident processes 
The NIST 800-53 and the ISO 27001/2 provides several 
points: 
- Include ML projects into the Business Continuity Plan 
- Include ML projects into the Cybersecurity Disaster 
Recovery Plan 
- Define a backup strategy for ML projects (and test it) 
- Define a strategy for public relations during recovery 
(Identify and train possible spokespersons, Adapt 
communication responses to different categories of 
interlocutors) 
ISO 27001/2 
NIST 800-53 
Integrate ML applications into 
the overall cyber-resilience 
strategy 
The NIST 800-53 and the ISO 27001/2 provides several 
points: 
- Include ML projects into the Business Continuity Plan 
- Include ML projects into the Cybersecurity Disaster 
Recovery Plan 
- Define a backup strategy for ML projects (and test it) 
- Define a strategy for public relations during recovery 
(Identify and train possible spokespersons, Adapt 
communication responses to different categories of 
interlocutors) 
ISO 27001/2 
NIST 800-53, 162 
Integrate ML specificities to 
existing security policies 
The NIST 800-53 and the ISO 27001/2 provides the 
following point: 
- Review policies for information security 
ISO 27001/2 
NIST 800-53 
Integrate ML specificities to 
awareness strategy and ensure 
all ML stakeholders are 
receiving it 
The NIST 800-53 and the ISO 27001/2 provides several 
points: 
- Organise training sessions  
- Perform locally cyber risks reporting 
ISO 27001/2 
NIST 800-53 
Integrate poisoning control 
after the "model evaluation" 
phase 
The literature provides the following technique:  
- STRIP technique 
198 
Reduce the available 
information about the model 
The NIST 800-53 and the ISO 27001/2 provides the 
following point: 
- Implement a classification policy 
ISO 27001/2 
NIST 800-53 
Reduce the information given 
by the model 
The literature provides the following technique: 
- Gradient Masking 
89, 145 
Use federated learning to 
minimise risk of data breaches 
 
194 
Use less easily transferable 
models 
 
65, 215 
Use methods to clean the 
training dataset from suspicious 
samples 
The literature provides the following techniques:  
- Data sanitisation 
- RONI and tRONI technics 
- Point out important data and put a human in the loop 
(Human in the loop) 
114, 162, 210 

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
43 
 
D ANNEX: REFERENCES 
Index 
Title 
Source 
Publication date 
Author 
Type of data 
ingested 
Supervised 
Learning 
Unsupervis
ed Learning 
Reinforcem
ent learning 
Video 
Image 
Text 
Time series 
Structured Data 
Regression 
Classification 
Clustering 
Dimension 
Reduction 
Rewarding 
1 
Adversarial Machine 
Learning, Synthesis 
Lectures on Artificial 
Intelligence and 
Machine Learning 
https://www.morga
nclaypool.com/doi/
abs/10.2200/S008
61ED1V01Y20180
6AIM039 
2018 
• Yevgeniy 
Vorobeychik             
• Murat 
Kantarcioglu 
 
 
 
 
 
X 
 
 
 
 
2 
The Elements of 
Statistical Learning  
https://web.stanfor
d.edu/~hastie/Pap
ers/ESLII.pdf 
2001 
• Trevor Hastie 
• Robert Tibshirani    
• Jerome Friedman 
X 
X 
X 
X 
X 
X 
X 
X 
X 
 
3 
XGBoost: a scalable 
tree boosting system 
https://arxiv.org/pdf
/1603.02754.pdf 
2016 
• Tianqi Chen 
• Carlos Guestrin 
 
 
 
 
X 
 
X 
 
 
 
4 
EfficientNet: Rethinking 
Model Scaling for 
Convolutional Neural 
Networks 
https://proceedings
.mlr.press/v97/tan1
9a/tan19a.pdf 
2019 
• Mingxing Tan  
 • Quoc V. Le 
 
X 
 
 
 
 
X 
 
 
 
5 
BERT: Pre-training of 
Deep Bidirectional 
Transformers for 
Language 
Understanding 
https://arxiv.org/pdf
/1810.04805.pdf 
2019 
• Jacob Devlin 
• Ming-Wei Chang 
• Kenton Lee 
• Kristina 
Toutanova 
 
 
X 
 
 
 
 
X 
 
 
6 
Language Models are 
Few-Shot Learners 
https://arxiv.org/pdf
/2005.14165.pdf 
2020 
• Tom B. Brown 
• Benjamin Mann 
• Nick Ryder 
• Melanie Subbiah 
• Jared Kaplan 
• Prafulla Dhariwal 
• Arvind 
Neelakantan 
• Pranav Shyam 
• Girish Sastry 
• Amanda Askell 
• Sandhini Agarwal 
• Ariel Herbert-
Voss 
• Gretchen Krueger 
• Tom Henighan 
• Rewon Child 
• Aditya Ramesh 
• Daniel M. Ziegler 
• Jeffrey Wu 
• Clemens Winter 
• Christopher 
Hesse 
• Mark Chen 
• Eric Sigler 
• Mateusz Litwin 
• Scott Gray 
• Benjamin Chess 
• Jack Clark 
• Christopher 
 
 
X 
 
 
 
 
X 
 
 

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
44 
 

`;