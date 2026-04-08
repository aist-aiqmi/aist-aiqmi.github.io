var toc_content = `ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
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

ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
32 
 
• 
how to achieve end-to-end protection (data is particularly at risk when it is in 
transit113); 
• 
how to achieve optimal accuracy under real-world conditions and not in a 
simulated environment114; 
• 
the need for computational complexity and ‘low-latency operation’ to be 
addressed especially when the system being monitored is of critical 
importance115; 
• 
the need to investigate whether the inferred models are valid or biased, or 
whether there are perceive changes in the time variance116;  
• 
Ensuring that the security of the protection mechanism is assessed following a 
standardised framework considering diverse malicious attempts, cases, 
figures of merit, etc. (security-by-design)117;  
• 
preservation of privacy e.g. training data and confidentiality of the information 
flowing in the system so that the characteristics of the system are not exposed 
indirectly and potentially classified information is not also revealed118. 
1.14 
RESEARCH GAPS 
The following non-exhaustive list provides the research gaps that were identified in our 
study: 
• 
Construction of effective AI models with a relatively small amount of data by 
moving from big data to a small data environment; 
• 
Elaboration on raw data targeting end-to-end solutions where feature 
engineering and the need for domain expertise (knowledge) is minimised or 
even eliminated; 
• 
Incorporation of change detection and adaptation mechanisms to address 
non-stationarities (changes in the time variance of system states);  
• 
Periodical assessment of the validity of the developed model(s) so as to 
promptly detect and address potential bias(es) which introduce additional 
vulnerabilities; 
• 
Development of approaches to remove existing biases, imbalances, etc. which 
may degrade the performance of the model; 
• 
Development of standardised data sets following these requirements in order 
to reliably reproduce and compare existing AI-based solutions;  
 
113 Trantidou, et al, 2022, SENTINEL - Approachable, tailor-made cybersecurity and data protection for small enterprises, in 
PROCEEDINGS 2022 IEEE International Conference on Cyber Security and Resilience (CSR), DOI:  
10.1109/CSR54599.2022.9850297. 
114 Kavak et al, 2021, Simulation for cybersecurity: state of the art and future directions, DOI: 10.1093/cybsec/tyab005, 
Oxford University Press (OUP), Journal of Cybersecurity. 
115 Zhenyu Guan, Liangxu Bian, Tao Shang, and Jianwei Liu. When machine learning meets security issues: A survey. In 
2018 IEEE International Conference on Intelligence and Safety for Robotics (ISR), pages 158–165, 2018. 
doi:10.1109/IISR.2018.8535799. Liu et al, 2022, Complexity Measures for IoT Network Traffic, IEEE Internet of Things 
Journal, DOI: 10.1109/JIOT.2022.3197323. 
116 Ntalampiras and Potamitis, 2022, Few-shot learning for modelling cyber physical systems in non-stationary 
environments, DOI: 10.1007/s00521-022-07903-0. Springer Science and Business Media (LLC), Journal Neural Computing 
and Applications. 
117 Karie et al, 2021 A Review of Security Standards and Frameworks for IoT-Based Smart Environments, DOI: 
10.1109/ACCESS.2021.3109886, IEEE 
118 Domingo Ferrer and Alberto Blanco-Justicia, 2020, Privacy-Preserving Technologies, DOI: 10.1007/978-3-030-29053-
5_14, Springer International Publishing, The International Library of Ethics, Law and Technology. 

`;