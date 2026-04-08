var toc_content = `ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
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

ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
30 
 
measures to prevent, protect against, mitigate, investigate and attribute such threats 
to security, competitiveness and resilience’109. 
The most important mechanism introduced using AI in biotechnology110 is the ability to 
automate complex tasks without direct supervision or to use cyberattacks to exploit bio 
automation for malicious purposes. 
At the same time, they are examples of 'dual-use research of concern' (DURC), i.e. 
technologies that clearly have positive impacts while opening up new opportunities 
that can also be exploited for malicious purposes (Pauwels, 2021). A major concern 
with AI, as discussed earlier, is explainability and the production of replicable and 
usable knowledge (Jordan et al., 2020). However, it has yet to be demonstrated with 
real evidence that bio-evolution can pose new specific threats that are not just an 
extension of the existing potential attack surface. Biometric systems show that it is 
more about proliferation of cybersecurity deployments than a real paradigm shift, but 
of course it seems a bit early to close this debate. 
 
 
109 Peccoud, J., Gallegos, J. E., Murch, R., Buchholz, W. G., Raman, S.  2018. Cyberbiosecurity: From Naive Trust to Risk 
Awareness. Trends in Biotechnology, 36(1), 4-7. https://doi.org/10.1016/j.tibtech.2017.10.012  
110 This one is, in fact, a very diversified landscape, with obvious cross-fertilising possibilities among domains of application 
and disciplines, as, for instance, one of the primary uses of AI in the biofield is assistance to identify and model new 
proteins of high-potential pharma-oriented molecules. 

ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
31 
 
AI IN CYBERSECURITY - 
RESEARCH GAPS AND 
NEEDS  
The next section identifies research gaps that are linked to some of the issues and 
challenges identified in the previous chapter. To close some of these gaps we 
identified opportunities for further research that are presented in section 7.2.  
1.13 
OPEN ISSUES AND CHALLENGES 
The vast majority of AI systems are being developed based on one (or more) of the 
following assumptions (in the context of this study): (i) availability of a usually 
significant amount of high-quality data representing both normal and attacked states of 
a system; (ii) availability of expert knowledge on the domain based on which features 
tailored to the problem at hand are engineered; (iii) stationarity over time, i.e. 
distributions of data representative of system states do not drift nor alter abruptly over 
time (which of course also depends on the AI technique used); (iv) knowledge of the 
class dictionary including the full range of every system state; (v) knowledge of the 
underlying analytical relationships governing the system being monitored; (vi) that the 
trained models do not present any types of bias(es), and (vii) that there are no ‘hidden’ 
biases in the available data set. 
In this chapter, we provide details on how AI raises specific issues and challenges, on 
which we identify further research opportunities in the next section. 
There are several open issues and challenges that have not yet been addressed and 
that can be further explored by research. The following non-exhaustive list presents 
some of the most noteworthy open issues: 
• 
achieving verifiable, reliable, explainable, auditable, robust and unbiased 
AI111; 
• 
quality of data sets: among the self-built limitations, there is the notion of ‘trash 
in/trash out’ i.e. you need good quality inputs to get reasonable quality 
output112, meaning not only the quality of data bearing in mind their practical 
algorithmic usability but also how well they represent the problem being 
tackled; 
 
111 Verifiable: there should proof that the AI-based approach acts correctly for a range of inputs; Reliable: the AI-based 
approach should operate as expected, even for inputs coming out of data distribution the system has not ‘seen before;  
Explainable: the system should be structured in a way so that the operator is able to backtrack any obtained 
prediction/decision in terms of data, scenarios, and assumptions that led to it; Robust against adversarial attacks that can 
jeopardise an AI-based tool, thus any deployed systems should not be vulnerable to noise and specific inputs designed to 
manipulate its operation; Auditable: the operator should be able to ‘open’ and check the internal state of the deployed 
system at any point in time and especially when a prediction is carried out, and Unbiased: the system should not display 
unintended preference towards specific predictions, recommendations, etc. 
112 Pouyanfar et al, 2019, A Survey on Deep Learning DOI: 10.1145/3234150. Association for Computing Machinery (ACM) 

`;