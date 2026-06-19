var toc_content = `1.2.6 Ensemble methods  
ML ensemble methods are techniques that combine multiple machine learning models 
to improve their accuracy and stability. Ensemble methods are popular because they 
can improve the accuracy of individual models, reduce overfitting and improve 
robustness. Even though most of the existing literature utilises systems based on a 
single ML-based tool, there are several scenarios where ensemble methods have 
been applied44. 
The reasoning behind using ensemble models is to combine model types that exhibit a 
promising performance across different cases (e.g. attack types, networks, etc.). Such 
 
40 Temesguen Messay Kebede, Ouboti Djaneye-Boundjou, Barath Narayanan Narayanan, Anca Ralescu, and David 
Kapp. Classification of malware programs using autoencoders based on deep learning architecture and its application 
to the Microsoft malware classification challenge (big 2015) dataset. In 2017 IEEE National Aerospace and 
Electronics Conference (NAECON), pages 70–75, 2017. DOI:10.1109/NAECON.2017.8268747 
41 Hanan Hindy, Robert Atkinson, Christos Tachtatzis, Jean-Noël Colin, Ethan Bayne, and Xavier Bellekens. 
Utilising deep learning techniques for effective zero-day attack detection. Electronics, 9(10):1684, October 2020. 
DOI:10.3390/electronics9101684. URL https://doi.org/10.3390/electronics9101684 
42 https://medium.com/codex/vol-2a-siamese-neural-networks-6df66d33180e, last accessed March 2022.  
43 Attaullah Sahito, Eibe Frank and Bernhard Pfahringer, Semi-supervised Learning Using Siamese Networks, 2019 
Springer International Publishing, DOI: 10.1007/978-3-030-35288-2_47 
44 Dipankar Dasgupta, Zahid Akhtar, and Sajib Sen. Machine learning in cybersecurity: a comprehensive survey. The 
Journal of Defense Modeling and Simulation: Applications, Methodology, Technology, September 2020. 
DOI:10.1177/1548512920951275. URL https://doi.org/10.1177/1548512920951275  

ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
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

`;