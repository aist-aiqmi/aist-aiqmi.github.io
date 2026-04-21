var toc_content = `SECURING MACHINE LEARNING ALGORITHMS 
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
 

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
4 
 
1. INTRODUCTION 
Artificial Intelligence (AI) has grown significantly in recent years and driven by computational 
advancements has found wide applicability. By providing new opportunities to solve decision-
making problems intelligently and automatically, AI is being applied to more and more use 
cases in a growing number of sectors. The benefits of AI are significant and undeniable. 
However, the development of AI is also accompanied by new threats and challenges, which 
relevant professionals will have to face.  
In 2020, ENISA published a threat landscape report on AI1. This report, published with the 
support of the Ad-Hoc Working Group on Artificial Intelligence Cybersecurity2, presents the 
Agency’s active mapping of the AI cybersecurity ecosystem and its threat landscape. This threat 
landscape not only lays the foundation for upcoming cybersecurity policy initiatives and 
technical guidelines, but also stresses relevant challenges. 
Machine learning (ML), which can be defined as the ability for machines to learn from data to 
solve a task without being explicitly programmed to do so, is currently the most developed and 
promising subfield of AI for industrial and government infrastructures. It is also the most 
commonly used subfield of AI in our daily lives.  
ML algorithms and their specificities, such as the fact that they need large amount of data to 
learn, make them the subject of very specific cyber threats that project teams must consider. 
The aim of this study is to help project teams identify the specific threats that can target ML 
algorithms, associated vulnerabilities, and security controls for addressing these vulnerabilities.  
Building on the ENISA AI threat landscape mapping, this study focuses on cybersecurity threats 
specific to ML algorithms. Furthermore, vulnerabilities related to the aforementioned threats and 
importantly security controls and mitigation measures are proposed.  
The adopted description of AI is a deliberate simplification of the state of the art regarding that 
vast and complex discipline with the intent of not precisely or comprehensively define it but 
rather pragmatically contextualise the specific technique of machine learning. 
1.1 OBJECTIVES 
The objectives of this publication are:  
• 
To produce a taxonomy of ML techniques and core functionalities to establish a logical 
link between threats and security controls. 
• 
To identify the threats targeting ML techniques and the vulnerabilities of ML algorithms, 
as well as the relevant security controls and how these are currently being used in the 
field to ensure minimisation of security risks. 
• 
To propose recommendations on future steps to enhance cybersecurity in systems that 
rely on ML techniques. 
1.2 METHODOLOGY 
To produce this report, the work was divided into three stages. At the core of the methodology 
was an extensive literature review (full list of references may be found in Annex D). The aim 
                                                           
1 https://www.enisa.europa.eu/publications/artificial-intelligence-cybersecurity-challenges  
2 See https://www.enisa.europa.eu/topics/iot-and-smart-infrastructures/artificial_intelligence/ad-hoc-working-
group/adhoc_wg_calls 

`;