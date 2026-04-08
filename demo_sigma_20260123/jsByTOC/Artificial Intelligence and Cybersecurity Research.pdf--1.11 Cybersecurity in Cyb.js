var toc_content = `ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
28 
 
AI is undoubtedly an excellent set of tools for mitigating IoT risks, whether by 
investigating vulnerabilities, anticipating problems (or even predicting them through 
self-reporting capabilities), controlling cross-network issues, orchestrating traffic flows, 
and generally reducing risk95.  
A particular source of vulnerabilities lies in the so-called Internet of Everything (IoE), 
an evolution of the Internet of Things (IoT), which through the architecture of 'tiny cells' 
becomes a comprehensive ecosystem connecting billions of different devices96. These 
devices are a prime target for attackers97. In addition, this architectural feature also 
poses privacy risks in terms of the collection of location and identity data. Smaller, 
dense and constantly connected local networks will potentially include body-worn 
networks, drones and environmental sensors with low levels of security that collect 
and share highly sensitive information, as we will see for the IoT in general, a problem 
that the 6G community will have to deal with efficiently. 
Security issues arise when Edge Intelligence (Cloud at the Edge) ML deploys tools 
that are vulnerable to poisoning attacks or other forms of intrusion during their learning 
process. Intentionally injecting false data or manipulating the logic of the data can lead 
to errors in interpretation or nefarious behaviour98. One theoretical countermeasure to 
this threat is defence systems that are able to mimic and outperform the attacker. 
1.11 
CYBERSECURITY IN CYBER-PHYSICAL SYSTEMS (CPS) 
Cyber-physical systems are a crucial element in complex technical systems such as 
power supply systems, water supply networks, transport systems, robotic systems, 
smart buildings, etc., improving the overall utilisation and control of their components. 
However, their presence has opened the door for cyberattacks99 100. The purpose of 
such malicious acts can vary and usually involves the theft, corruption or even 
destruction of information and/or system components101. Needless to say, as we write 
these lines, there is a real situation with the war in Ukraine that permanently includes 
these threats to critical infrastructure102. 
There are three methods for detecting cyberattacks in CPSs: 
 
95 For that, see in particular Hodo, Elike, et al. 2016. ‘Threat Analysis of IoT Networks Using Artificial Neural Network 
Intrusion Detec-tion System’. 2016 International Symposium on Networks, Computers and Communications (ISNCC), May, 
1–6. https://doi.org/10.1109/ISNCC.2016.7746067  
96 Presentation at Black Hat USA 2022 of the API ecosystem connecting IoT/IOE devices with functionalities 
https://i.blackhat.com/USA-22/Wednesday/US-22-Shaik-Attacks-From-a-New-Front-Door-in-4G-5G-Mobile-Networks.pdf  
97 Idem as Error! Bookmark not defined. 
98 Benzaid and T. Taleb. 2020. AI for Beyond 5G Networks: A Cyber- Security Defense or Offense Enabler? IEEE Network, 
Vol. 34, No. 6, Pp. 140–147, 2020. https://doi.org/10.1109/MNET.011.2000088  
99 Sridhar Adepu, Venkata Reddy Palleti, Gyanendra Mishra, and Aditya Mathur. Investigation of cyber-attacks on a water 
distribution system. In Lecture Notes in Computer Science, pages 274–291. Springer International Publishing, 2020. 
DOI:10.1007/978-3-030-61638-0_16. URL https://doi.org/10.1007/978-3-030-61638-0_16  
100 Peter Eder-Neuhauser, Tanja Zseby, Joachim Fabini, and Gernot Vormayr. Cyber-attack models for smart grid 
environments. Sustainable Energy, Grids and Networks, 12:10–29, December 2017. DOI:10.1016/j.segan.2017.08.002. 
URL https://doi.org/10.1016/j.segan.2017.08.002  
101 Antonello Monti and Ferdinanda Ponci. Electric power systems. In Intelligent Monitoring, Control, and Security of Critical 
Infrastructure Systems, pages 31–65. Springer Berlin Heidelberg, September 2014. DOI:10.1007/978-3-662-44160-2_2. 
URL https://doi.org/10.1007/978-3-662-44160-2_2  
102 Just to give an idea, according to the New York Times of Nov. 17, 2022, there had already been, until then, 126 
cyberattacks on the Ukrainian power system from the Russians. Russian Attacks on Ukraine’s Power Grid Endanger 
Nuclear Plants, U.N. Agency Says - The New York Times (nytimes.com) 

ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
29 
 
a) signature-based i.e. searching for known patterns of malicious activity in the 
data stream using a predefined dictionary of attacks103, 
b) anomaly-based i.e. estimating characteristic features of normal behaviour and 
subsequently detecting deviations that may appear during an intrusion104, 
c) countermeasure-based i.e. adapting the signals involved (by adding 
information which demonstrates authenticity) so that the task of intrusion 
detection is simplified105.   
The above methods can be used as a first line of defence if the computational cost is 
relatively low. 
Anomaly-based methods and suspicious correlations with big data should be able to 
address more complicated cases of malicious events and sophisticated attacks and 
are considered promising, i.e. for CPS families such as smart grids, vehicular, 
industrial and medical CPS, and are being explored in the literature106). This has more 
to do with the idea of acceptable confidence in a given system at a given time and 
context rather than goals for measuring absolute effectiveness107. 
Various ML techniques can be used for modelling and anomaly detection, including 
NNs, rule-based schemes, predefined suspicious big data filtering schemes108. There 
has been a remarkable increase in research in ML-based solutions due to the 
widespread development and application of DL/RL algorithms. However, despite these 
continuous improvements, it seems that the current state of security algorithms cannot 
quite keep up with the development of novel attacks. This is partly due to the ingenuity 
of attackers, but also due to the difficulty of defending complex systems that involve 
not only infrastructures but also all the people inside and outside them, making them 
true information ecosystems. 
1.12 
CYBER BIOSECURITY 
The increasing convergence of biotechnology and AI is an emerging field for 
exploitation. An initial attempt to problematise the research area at the intersection of 
cybersecurity, cyber-physical security and biosecurity resulted in the proposed 
definition of cyber biosecurity as ‘understanding the vulnerability to unwanted 
surveillance, intrusions, and malicious and harmful activities, that may occur in or at 
the interfaces of interconnected life and medical sciences, cyber, cyber-physical, 
supply chain and infrastructure systems, and the development and implementation of 
 
103 Hu Zhengbing, Li Zhitang, and Wu Junqi. A novel network intrusion detection system (NIDS) based on signatures search 
of data mining. In First International Workshop on Knowledge Discovery and Data Mining (WKDD 2008), pages 10–16, 
2008. doi:10.1109/WKDD.2008.48. 
104 Jan Neuzil, Ondrej Kreibich, and Radislav Smid. A distributed fault detection system based on IWSN for machine 
condition monitoring. IEEE Transactions on Industrial Informatics, 10(2):1118–1123, 2014. DOI:10.1109/TII.2013.2290432. 
105 Yilin Mo, Rohan Chabukswar, and Bruno Sinopoli. Detecting integrity attacks on SCADA systems. IEEE Transactions on 
Control Systems Technology, 22(4):1396–1407, 2014. DOI:10.1109/TCST.2013.2280899. 
106 Felix O. Olowononi, Danda B Rawat, and Chunmei Liu. Resilient machine learning for networked cyber physical 
systems: A survey for machine learning security to securing machine learning for CPS. IEEE Communications Surveys & 
Tutorials, 23(1):524–552, 2021. ISSN 2373-745X. DOI:10.1109/comst.2020.3036778. URL 
http://dx.doi.org/10.1109/COMST.2020.3036778  
107 See in particular for that Siau Keng and Wang Weiyu (2018). Building Trust in Artificial Intelligence, Machine Learning, 
and Robotics. CUTTER Business Technology Journal (2) (PDF) Building Trust in Artificial Intelligence, Machine Learning, 
and Robotics (researchgate.net) 
108 Siddharth Sridhar and Manimaran Govindarasu. Model-based attack detection and mitigation for automatic generation 
control. IEEE Transactions on Smart Grid, 5(2):580–591, 2014. DOI:10.1109/TSG.2014.2298195 

`;