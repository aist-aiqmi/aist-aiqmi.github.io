var toc_content = `ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
16 
 
methods have been used for several applications including malware detection45, 
intrusion detection46, etc. 
1.3 RELEVANCE OF DEEP LEARNING (DL)-BASED APPROACHES 
In recent years enormous amounts of work have been undertaken on designing DL-
based solutions to be used in cybersecurity applications including protection and 
defence47. DL-based solutions have been able to offer excellent performance which is 
often superior to traditional ML dealing with large data sets and currently constitute the 
state-of-the-art in many areas. 
However, they come with some important limitations that should be considered during 
development and implementation. The first is the availability and reliability of data 
sets, i.e. the need for large data sets containing high quality data48. The vast majority 
of the literature focuses on improving state-of-the art performance, while the reliability 
of data sets is hardly considered. 
Current literature proposes reliability criteria49 50 such as: a) attack diversity, b) 
anonymity, c) available protocols, d) complete capture (with payloads), e) complete 
interaction, f) complete network configuration, g) complete traffic, h) feature set, i) 
heterogeneity (all network traffic and system logs), j) correct labelling and k) metadata 
(full documentation of data collection).  
Unfortunately the existing reliability criteria focus on intrusion detection, while similar 
requirements for other cybersecurity applications are yet to be addressed. 
A second important aspect to consider in this specific context is the fact that attackers 
constantly design new types of attacks bypassing existing security systems. This 
specific problem falls into the area of learning in non-stationary environments and is 
usually referred to as concept drift51.  
In addition, the system under study might undergo a shift in its nominal operating 
conditions (a time-variance), where the nominal model needs updating52. Such 
 
45 Sanjay Kumar, Ari Viinikainen, and Timo Hamalainen. Evaluation of ensemble machine learning methods in 
mobile threat detection. In 2017 12th International Conference for Internet Technology and Secured Transactions 
(ICITST), pages 261–268, 2017. DOI:10.23919/ICITST.2017.8356396. 
46 Anna Magdalena Kosek and Oliver Gehrke. Ensemble regression model-based anomaly detection for cyber-physical 
intrusion detection in smart grids. In 2016 IEEE Electrical Power and Energy Conference (EPEC), pages 1–7, 2016. 
DOI:10.1109/EPEC.2016.7771704. 
47 Dilara Gümü¸sba¸s, Tulay Yıldırım, Angelo Genovese, and Fabio Scotti. A comprehensive survey of databases and 
deep learning methods for cybersecurity and intrusion detection systems. IEEE Systems Journal, pages 1–15, 2020. 
DOI:10.1109/JSYST.2020.2992966. 
48 Samira Pouyanfar, Saad Sadiq, Yilin Yan, Haiman Tian, Yudong Tao, Maria Presa Reyes, Mei-Ling Shyu, Shu- 
Ching Chen, and S. S. Iyengar. A survey on deep learning. ACM Computing Surveys, 51(5):1–36, January 2019. 
DOI:10.1145/3234150. URL https://doi.org/10.1145/3234150  
49 Iman Sharafaldin, Arash Habibi Lashkari, and Ali A. Ghorbani. Toward generating a new intrusion detection 
dataset and intrusion traffic characterization. In Proceedings of the 4th International Conference 
on Information Systems Security and Privacy. SCITEPRESS - Science and Technology Publications, 2018. 
DOI:10.5220/0006639801080116. URL https://doi.org/10.5220/0006639801080116  
50 Amirhossein Gharib, Iman Sharafaldin, Arash Habibi Lashkari, and Ali A. Ghorbani. An evaluation framework 
for an intrusion detection dataset. In 2016 International Conference on Information Science and Security (ICISS), 
pages 1–6, 2016. DOI:10.1109/ICISSEC.2016.7885840. 
51 Gregory Ditzler, Manuel Roveri, Cesare Alippi, and Robi Polikar. Learning in nonstationary environments: A 
survey. IEEE Computational Intelligence Magazine, 10(4):12–25, 2015. doi:10.1109/MCI.2015.2471196. 
52 Cesare Alippi, Stavros Ntalampiras, and Manuel Roveri. Model-free fault detection and isolation in large-scale 
cyber-physical systems. IEEE Transactions on Emerging Topics in Computational Intelligence, 1(1):61–71, 2017. 
DOI:10.1109/TETCI.2016.2641452. 

ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
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

`;