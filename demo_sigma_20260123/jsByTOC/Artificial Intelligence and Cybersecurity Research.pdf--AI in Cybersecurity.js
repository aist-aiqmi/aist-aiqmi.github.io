var toc_content = `ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
19 
 
AI IN CYBERSECURITY  
This section summarises the current state-of-the-art in the main uses of ‘traditional’, 
long-standing and newer AI applications (deep learning systems), tools and methods 
in cybersecurity, looking at both sides of the use of AI in the context of cybersecurity 
requirements, i.e. malicious and virtuous. Below, is a non-exhaustive list of ways AI 
can be used in cybersecurity: 
a. Cyber-criminals exploiting AI to boost their efficacy; 
b. Security mechanisms encompassing AI to detect, identify and mitigate the 
consequences of compromises; 
c. Using AI to exploit vulnerabilities in existing AI and non-AI tools and 
methodologies, e.g. adversarial attacks61; 
d. Using AI during the design of a system to protect existing AI and non-AI tools and 
methodologies (protection created during system design).  
In the first two cases, AI is used as a tool (an attacker can use AI to design the attack), 
while in the last two cases AI is the actual target (the attack may target an AI-based 
system). Even though AI-based defence mechanisms address a wide variety of 
vulnerabilities, they can themselves be points of attack. Attackers use AI not only to 
orchestrate various cyber threats, but to attack AI-based defence mechanisms by 
exploiting existing vulnerabilities. The table below identifies the use of AI methods in 
cybersecurity functions. 
Table 3: AI methods in cybersecurity functions (source: authors) 
Security function\AI 
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
 
61 For example, in GANs given a training set, the technique learns to generate new data with the same statistics as the 
training set. A GAN trained on photographs can generate new photographs that look at least superficially authentic to 
human observers, having many realistic characteristics.  

ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
20 
 
1.5 EXAMPLES OF USE-CASES 
AI-based tools and methodologies can be used to detect and identify cyberattacks and 
mitigate their consequences. Such tools have the potential to deliver satisfactory 
performance at low cost and in real time. There is a wide range of safeguard 
techniques and capabilities that can be enabled by AI62. AI-based defence 
mechanisms are increasingly adopted in the cybersecurity domain, e.g. network and 
data security, endpoint protection, access reliability, etc63. 
Having described the key concepts and key features in chapter 2, the following 
sections summarise the kinds of AI (task, technique, method) that are at stake in each 
particular cybersecurity function or operation, such as prevention of attacks, detection 
of threats and intrusion, response, and recovery from cyberattacks. In order to do so, 
we review them using the concepts of prevention, detection, response and recovery. 
1.5.1 Prevention 
AI can be used to assess vulnerabilities in computer systems and networks. ML 
algorithms are often used in the analysis of data from multiple sources, such as 
scanners, security logs and patch management systems, to identify vulnerabilities and 
prioritise remediation efforts. 
Deep learning-based fuzzers64 are now considered the most promising route for the 
discovery of vulnerabilities compared to traditional ML65. Reinforcement learning can 
search a computer network for vulnerabilities faster than traditional pen-testing tools. 
Table 4: AI applications for the prevention of attacks 
Task 
Example of AI methods, techniques, approaches  
Fuzzers 
DL 
Pen-testing 
Reinforcement learning 
Vulnerability assessment 
NLP, traditional ML 
Source: Authors’ adaptation based on Micah and Ashton (2021) 
ML can also be beneficial in scoring risk in the network, e.g. to determine the severity of 
a vulnerability. AI can be used to manage user identities and access to computer 
systems and applications. ML algorithms can be used to analyse user behaviour and 
 
62 In particular analyses by Columbus, Louis. n.d. ‘Protecting Your Company When Your Privileged Credentials Are for 
Sale’. Forbes. Accessed 23 August 2021. https://www.forbes.com/sites/louiscolumbus/2018/08/21/protecting-your-
company-when-your-privileged-credentials-are-for-sale/; - Dilmegani Cem. 2021. ‘Security Analytics: The Ultimate Guide 
[2021 Update]’. 20 August 2018. https://research.aimultiple.com/security-analytics/ ; Capgemini. 2019. ‘Reinventing 
Cybersecurity with Artifical Intelligence : The New Frontier in Digiotal Security’. AI-in-
Cybersecurity_Report_20190711_V06.pdf  (capgemini.com) and - 
Jones, Tim. 2019. IBM Developer ‘Take a Look at AI 
and Security and Explore the Use of Machine Learning Algorithms in Threat Detection and Management. (blog). 19 August 
2019. https://developer.ibm.com/articles/ai-and-security /. 
63 Capgemini group. Reinventing cybersecurity with artificial intelligence: A new frontier in digital security. 
Technical report, Capgemini Research Institute, 01 2021. URL https://www.capgemini.com/research/reinventing-
cybersecurity-with-artificial-intelligence/    
64 Examples are the deep learning–based programme NeuFuzz. Microsoft has also studied the use of deep learning for 
fuzzers, see for instance http://arxiv.org/abs/1711.04596  
65 Several teams in DARPA-sponsored Cyber Grand Challenge competitions attempted to use machine learning to identify 
software vulnerabilities 

`;