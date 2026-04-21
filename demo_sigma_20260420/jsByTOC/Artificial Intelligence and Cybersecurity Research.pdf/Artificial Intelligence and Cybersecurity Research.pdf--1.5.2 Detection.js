var toc_content = `1.5.2 Detection 
Most ‘traditional’ ML applications fall almost entirely into the detection stage i.e. for 
spam detection, intrusion detection and malware detection, as well the detection of 
attacks. A great amount of existing works is focused on spam detection in computer 
networks. E-mail spams consume relevant resources (e.g. bandwidth, storage, etc.) 
directly reducing the capacity and efficacy of systems and networks.  
Another problem which has been extensively addressed by the research community is 
the detection of malware and intrusions.  
Typically, defence mechanisms are designed to address specific types of attack, such 
as distributed denial of service (DDoS), probe attacks66, remote to local attacks 
(R2L)67, unauthorised access to local super user (U2R)68, host-based, network-based, 
ransomware, etc. A great variety of promising ML-based solutions, including 
supervised and unsupervised approaches, have been employed to address these 
specific types of attacks69 70. Moreover, bio-inspired algorithms have been used to 
address the intrusion detection types of problems71 72. 
In the area of malware detection73 74 75, ML76 has been used for selecting relevant 
features revealing the presence of malware as well as methods for detecting 
anomalies or abnormalities.  
Various ML techniques, such as SVM and DT, have also been used to detect 
cyberattacks, but most of them fail to detect new types of attacks, i.e. attacks that are 
not part of the data set used in training. In this case, solutions need to approximate the 
distribution of the available data so that samples that do not belong to the distribution 
can be detected. For this purpose, adapted versions of existing traditional (one-class 
SVM, HMM, etc.) and NN-based (ANN, CNN, etc.) solutions can be used.  
 
66 In probe attacks the attacker scans the network to gather information on computers in order to identify vulnerabilities. 
67 Remote to local attacks (R2Ls) are known to be launched by attackers to gain unauthorised access to victim machines in 
networks. 
68 An attack by which an attacker uses a normal account to login into a victim system and tries to gain root/administrator 
privileges by exploiting some vulnerability. 
69 Kamran Shaukat, Suhuai Luo, Vijay Varadharajan, Ibrahim A. Hameed, and Min Xu. A survey on machine learning 
techniques for cybersecurity in the last decade. IEEE Access, 8:222310–222354, 2020. doi:10.1109/access.2020.3041951. 
URL https://doi.org/10.1109/access.2020.3041951  
70 The paper A Survey on Machine Learning Techniques for Cyber Security in the Last Decade 
https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9277523  is a survey where the performance of various 
research works is discussed. 
71 Anas Arram, Hisham Mousa, and Anzida Zainal. Spam detection using hybrid artificial neural network and genetic 
algorithm. In 2013 13th International Conference on Intelligent Systems Design and Applications, pages 336–340, 2013. 
doi:10.1109/ISDA.2013.6920760 
72 Hossein Gharaee and Hamid Hosseinvand. A new feature selection ids based on genetic algorithm and SVM. In 2016 
8th International Symposium on Telecommunications (IST), pages 139–144, 2016. doi:10.1109/ISTEL.2016.7881798. 
73 Hamed HaddadPajouh, Ali Dehghantanha, Raouf Khayami, and Kim-Kwang Raymond Choo. A deep recurrent neural 
network-based approach for Internet of Things malware threat hunting. Future Generation Computer Systems, 85:88–96, 
August 2018. doi:10.1016/j.future.2018.03.007. URL https://doi.org/10.1016/j.future.2018.03.007 
74 Temesguen Messay Kebede, Ouboti Djaneye-Boundjou, Barath Narayanan Narayanan, Anca Ralescu, and David Kapp. 
Classification of malware programs using autoencoders based on deep learning architecture and its application to the 
Microsoft malware classification challenge (big 2015) dataset. In 2017 IEEE National Aerospace and Electronics 
Conference (NAECON), pages 70–75, 2017. doi:10.1109/NAECON.2017.8268747 
75 Esra Calik Bayazit, Ozgur Koray Sahingoz, and Buket Dogan. Malware detection in android systems with traditional 
machine learning models: A survey. In 2020 International Congress on Human-Computer Interaction, Optimization and 
Robotic Applications (HORA), pages 1–8, 2020. doi:10.1109/HORA49412.2020.9152840. 
76 See Micah and Ashton (2021) for research exploring the use of ML e.g. HMM and DL techniques. 

ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
22 
 
Furthermore, new data needs to be incorporated into the dictionary for future 
reference and manual analysis. Table 4 below summarises possible uses of AI 
techniques for detection of threats and intrusion. 
Table 5: AI applications for the detection of threats and intrusion (source: authors’ elaboration) 
Task 
Examples of AI techniques 
Spam detection 
SVM, DT 
Intrusion detection 
Supervised and unsupervised approaches, bio-inspired 
algorithms 
Malware detection 
Standard ML classifiers, DL 
Attack detection 
SVM, DT 
 

ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
23 
 
SECURING AI 
This report also examines existing approaches to safer AI, to prevent AI from being 
used to orchestrate cyberattacks or to prevent attacks on AI-based mechanisms and 
tools. AI systems themselves may be vulnerable to threats due to their own 
vulnerabilities or vulnerabilities of other interdependent mechanisms. 
1.6 AI SECURITY 
Security-by-design is a concept in software engineering that emphasises the 
importance of integrating security principles in the early stages of the design and 
development of systems and applications. This includes considering security risks and 
vulnerabilities at every stage of development, from architecture and design to 
implementation and testing. The following list contains examples of security-by-design 
practises that can be applied to AI systems: 
• 
Conducting security risk assessments and threat modelling to identify potential 
vulnerabilities and attack vectors, 
• 
Using secure coding practices and software development frameworks to 
minimise the risk of coding errors and vulnerabilities, 
• 
Implementing secure data handling practices to protect sensitive data and 
prevent data breaches, 
• 
Incorporating security testing and validation into the development process to 
identify and address security issues early on, 
• 
Ensuring that AI systems are designed to be transparent and explainable, so 
that their behaviour can be audited and verified. 
The concepts of security-by-design that apply specifically to AI systems, include: 
• 
Privacy-by-design: this concept emphasises the importance of incorporating 
considerations of privacy and data-confidentiality into the design and 
development of AI systems.  
• 
Explainability-by-design: this concept emphasises the importance of designing 
AI systems that are transparent and explainable, so that their behaviour can 
be understood and audited by humans.  
• 
Robustness-by-design: this concept emphasises the importance of designing 
AI systems that are resilient to attacks and errors, and that can continue to 
function even in the face of unexpected inputs or disturbances.  
• 
Fairness-by-design: this concept emphasises the importance of designing AI 
systems that are fair and unbiased, and that do not perpetuate or amplify 
existing societal biases or discrimination.  
 

`;