var toc_content = `EXECUTIVE SUMMARY 
3 
1. INTRODUCTION 
4 
1.1 OBJECTIVES 
4 
1.2 METHODOLOGY 
4 
1.3 TARGET AUDIENCE 
5 
1.4 STRUCTURE 
6 
2. MACHINE LEARNING ALGORITHMS TAXONOMY 
7 
2.1 MAIN DOMAIN AND DATA TYPES 
8 
2.2 LEARNING PARADIGMS 
9 
2.3 NAVIGATING THE TAXONOMY 
10 
2.4 EXPLAINABILITY AND ACCURACY 
10 
2.5 AN OVERVIEW OF AN END-TO-END MACHINE LEARNING LIFECYCLE 
11 
3. ML THREATS AND VULNERABILITIES 
13 
3.1 IDENTIFICATION OF THREATS 
13 
3.2 VULNERABILITIES MAPPED TO THREATS 
16 
4. SECURITY CONTROLS 
18 
4.1 SECURITY CONTROLS RESULTS 
18 
5. CONCLUSION 
26 
A ANNEX: TAXONOMY OF ALGORITHMS 
28 
B ANNEX: MAPPING SECURITY CONTROLS TO THREATS 
34 
C ANNEX: IMPLEMENTING SECURITY CONTROLS 
38 
D ANNEX: REFERENCES 
43 
 
 
 

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
3 
 
EXECUTIVE SUMMARY 
The vast developments in digital technology influence every aspect of our daily lives. Emerging 
technologies, such as Artificial Intelligence (AI), which are in the epicentre of the digital 
evolution, have accelerated the digital transformation contributing in social and economic 
prosperity. However, the application of emerging technologies and AI in particular, entails perils 
that need to be addressed if we are to ensure a secure and trustworthy environment. In this 
report, we focus on the most essential element of an AI system, which are machine learning 
algorithms. We review related technological developments and security practices to identify 
emerging threats, highlight gaps in security controls and recommend pathways to enhance 
cybersecurity posture in machine learning systems. 
Based on a systematic review of relevant literature on machine learning, we provide a taxonomy 
for machine learning algorithms, highlighting core functionalities and critical stages. The 
taxonomy sheds light on main data types used by algorithms, the type of training these 
algorithms entail (supervised, unsupervised) and how output is shared with users. Particular 
emphasis is given to the explainability and accuracy of these algorithms. Next, the report 
presents a detailed analysis of threats targeting machine learning systems. Identified threats 
include inter alia, data poisoning, adversarial attacks and data exfiltration. All threats are 
associated to particular functionalities of the taxonomy that they exploit, through detailed tables. 
Finally, we examine mainstream security controls described in widely adopted standards, such 
as ISO 27001 and NIST Cybersecurity framework, to understand how these controls can 
effectively detect, deter and mitigate harms from the identified threats. To perform our analysis, 
we map all the controls to the core functionalities of machine learning systems that they protect 
and to the vulnerabilities that threats exploit in these systems. 
Our analysis indicates that the conventional security controls, albeit very effective for 
information systems, need to be complemented by security controls tailored to machine learning 
functionalities. To identify these machine-learning controls, we conduct a systematic review of 
relevant literature, where academia and research institutes propose ways to avoid and mitigate 
threats targeting machine learning algorithms. Our report provides an extensive list of security 
controls that are applicable only for machine learning systems, such as “include adversarial 
examples to training datasets”. For all controls, we map the core functionality of machine 
learning algorithms that they intend to protect to the vulnerabilities that threats exploit.  
Our findings indicate that there is no unique strategy in applying a specific set of security 
controls to protect machine learning algorithms. The overall cybersecurity posture of 
organisations who use machine learning algorithms can be enhanced by carefully choosing 
controls designed for these algorithms. As these controls are not validated in depth, nor 
standardised in how they should be implemented, further research should focus on creating 
benchmarks for their effectiveness. We further identified cases where the deployment of 
security controls may lead to trade-offs between security and performance. Therefore, the 
context in which controls are applied is crucial and next steps should focus on considering 
specific use cases and conducting targeted risk assessments to better understand these trade-
offs. Finally, given the complexity of securing machine learning systems, governments and 
related institutions have new responsibilities in raising awareness regarding the impact of 
threats on machine learning. It is important to educate data scientists on the perils of threats 
and on the design of security controls before machine learning algorithms are used in 
organisations’ environments. By engaging experts in machine learning in cybersecurity issues, 
we may create the opportunity to design innovative security solutions and mitigate the emerging 
threats on machine learning systems.  
 
This report 
provides a 
taxonomy for 
machine learning 
algorithms, a 
detailed analysis 
of threats and 
security controls 
in widely adopted 
standards 
 

`;