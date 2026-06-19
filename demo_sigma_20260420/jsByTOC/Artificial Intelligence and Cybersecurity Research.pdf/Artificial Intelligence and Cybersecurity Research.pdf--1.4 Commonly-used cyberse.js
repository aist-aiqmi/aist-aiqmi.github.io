var toc_content = `ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
17 
 
changes need to be detected promptly and identified correctly so that protection 
mechanisms are able to function reliably. 
Therefore, learning in non-stationary environments in cybersecurity remains an open 
subject and novel techniques able to detect and react appropriately to stationarity 
changes are required for effective and up-to-date security models. 
1.4 COMMONLY-USED CYBERSECURITY DATA SETS 
The above-mentioned ML-based tools and methodologies are subject to data 
availability, i.e. data sets, collections of potentially heterogeneous types of information, 
attributes or features are necessary for creating such solutions. By analysing the 
available data and discovering existing patterns, one can gain insights regarding 
nominal state as well as cyberattacks.  
Table 2 presents several widely-used data sets by the R&D community to design ML-
based tools and methodologies for cybersecurity applications, such as intrusion 
detection, malware analysis, botnet traffic modelling or spam filtering. The list provided 
hereunder is not exhaustive53, as its aim to present some of the most commonly used 
data sets and their diverse application scenarios.  
Table 2: Widely-used cybersecurity data sets  
Data set 
Description 
KDD Cup 9954 
This is probably the most widely used data set containing 41 features for 
anomaly detection. It was designed and made publicly available by the 
Defence Advanced Research Project Agency (DARPA). It includes full-packet 
data and four categories of attacks, such as DoS, remote-to-local R2L, user-
to-remote (U2R) and probing. It has extensively served approaches to 
intrusion detection. 
DEFCON55 
This data set includes various attacks to assist intrusion modelling 
competitions held on a yearly basis. 
CTU-1356 
This includes 13 diverse situations of real-world botnet traffic considering the 
characteristics of both normal and background traffic. 
 
53 As new data sets are published at a fast pace, the reader is referred for a comprehensive list of related data sets to: 
Kamran Shaukat, Suhuai Luo, Vijay Varadharajan, Ibrahim A. Hameed, and Min Xu. A survey on machine 
learning techniques for cybersecurity in the last decade. IEEE Access, 8:222310–222354, 2020. 
DOI:10.1109/access.2020.3041951. URL https://doi.org/10.1109/access.2020.3041951 ;  Dilara Gümü¸sba¸s, Tulay 
Yıldırım, Angelo Genovese, and Fabio Scotti. A comprehensive survey of databases and deep learning methods for 
cybersecurity and intrusion detection systems. IEEE Systems Journal, pages 1–15, 2020. 
DOI:10.1109/JSYST.2020.2992966; and Iqbal H. Sarker, A. S. M. Kayes, Shahriar Badsha, Hamed Alqahtani, Paul 
Watters, and Alex Ng. Cybersecurity data science: an overview from machine learning perspective. Journal of Big Data, 
7(1), July 2020. DOI:10.1186/s40537-020-00318-5. URL https://doi.org/10.1186/s40537-020-00318-5 . 
54 R.P. Lippmann, D.J. Fried, I. Graf, J.W. Haines, K.R. Kendall, D. McClung, D. Weber, S.E. Webster, D. Wyschogrod, 
R.K. Cunningham, and M.A. Zissman. Evaluating intrusion detection systems: the 1998 DARPA off-line intrusion detection 
evaluation. In Proceedings DARPA Information Survivability Conference and Exposition. DISCEX’00, volume 2, pages 12–
26 vol.2, 2000. DOI:10.1109/DISCEX.2000.821506. 
55 Ali Shiravi, Hadi Shiravi, Mahbod Tavallaee, and Ali A. Ghorbani. Toward developing a systematic approach to generate 
benchmark datasets for intrusion detection. Computers & Security, 31(3):357–374, May 2012. 
DOI:10.1016/j.cose.2011.12.012. URL https://doi.org/10.1016/j.cose.2011.12.012  
56 S. García, M. Grill, J. Stiborek, and A. Zunino. An empirical comparison of botnet detection methods. Computers & 
Security, 45:100–123, September 2014. DOI:10.1016/j.cose.2014.05.011. URL https://doi.org/10.1016/j.cose.2014.05.011  

ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
18 
 
Spam base5 57 
This is a collection of e-mails with several thousand instances facilitating email 
classification purposes. 
SMS Spam 
Collection6 
This includes a wide variety of SMS messages labelled as spam or not spam. 
CICIDS20177 
This consists of traffic data recorded at the Canadian Institute for 
Cybersecurity and provides full-packet data and raw PCAP files. Interestingly, 
several types of attacks are considered. 
CICAndMal2017858 
 
This consists or trustworthy and malware applications conveniently organised 
into four classes, i.e. scareware, SMS malware, ransomware and adware. As 
such, it is able to facilitate the identification of malicious Android applications. 
Android Validation59 
This consists of data characterising relationships existing between various 
applications organised into false siblings, siblings, cousins, and step-siblings. 
IoT-23 data set60 
This is a data set containing malicious and benign IoT network traffic. 
 
 
 
 
57 Tiago A. Almeida, José María G. Hidalgo, and Akebo Yamakami. Contributions to the study of SMS spam filtering. In 
Proceedings of the 11th ACM symposium on Document engineering - DocEng '11. ACM Press, 2011. 
DOI:10.1145/2034691.2034742. URL https://doi.org/10.1145/2034691.2034742  
58 Esra Calik Bayazit, Ozgur Koray Sahingoz, and Buket Dogan. Malware detection in android systems with traditional 
machine learning models: A survey. In 2020 International Congress on Human-Computer Interaction, Optimization and 
Robotic Applications (HORA), pages 1–8, 2020. DOI:10.1109/HORA49412.2020.9152840. 
59 Hugo Gonzalez, Natalia Stakhanova, and Ali A. Ghorbani. DroidKin: Lightweight detection of android apps similarity. In 
Lecture Notes of the Institute for Computer Sciences, Social Informatics and Telecommunications Engineering, pages 436–
453. Springer International Publishing, 2015. DOI:10.1007/978-3-319-23829-6_30. URL https://doi.org/10.1007/978-3-319-
23829-6_30  
60 Sebastian Garcia, Agustin Parmisano and Maria Jose Erquiaga, https://doi.org/10.5281/ZENODO.4743746. Data sets 
available in https://www.stratosphereips.org/datasets-iot23  

ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
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

`;