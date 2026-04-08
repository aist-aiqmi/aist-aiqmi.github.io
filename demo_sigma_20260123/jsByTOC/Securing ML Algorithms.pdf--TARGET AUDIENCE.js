var toc_content = `SECURING MACHINE LEARNING ALGORITHMS 
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

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
5 
 
was to consult documents that are more specific to ML algorithms in general in order to build the 
taxonomy, and to consult documents more specific to security to identify threats, vulnerabilities, 
and security controls. At the end of the systematic review, more than 200 different documents 
(of which a hundred are related to security) on various algorithms of ML had been collected and 
analysed.  
First, we introduced a high-level ML taxonomy. To understand the vulnerabilities of different ML 
algorithms, how they can be threatened and protected, it is crucial to have an overview of their 
core functionalities and lifecycle. To do so, a first version of the desk research on ML-focussed 
sources was compiled and the ML lifecycle presented in ENISA's work on AI cybersecurity 
challenges was consulted3. We then analysed and synthesised all references to produce a first 
draft of the taxonomy. The draft was submitted and interviews were held with the ENISA Ad-Hoc 
Working Group on Artificial Intelligence Cybersecurity. After considering their feedback, the ML 
taxonomy and lifecycle were validated. 
The second step was to identify the cybersecurity threats that could target ML algorithms 
and potential vulnerabilities. For this task, the threat landscape from ENISA’s report on AI 
cybersecurity challenges was the starting point, which was then enriched through desk research 
with sources related to the security of ML algorithms. Additionally, the expertise of the ENISA 
Ad-Hoc Working Group on Artificial Intelligence Cybersecurity was sought. This work allowed us 
to select threats and identify associated vulnerabilities. Subsequently, they were linked to the 
previously established ML taxonomy. 
The last step of this work was the identification of the security controls addressing the 
vulnerabilities. To do this, we utilised the desk research and enriched it with the most relevant 
standard security controls from ISO 27001/2 and the NIST 800-53 framework. The output was 
reviewed with the experts of the ENISA Ad-Hoc Working Group on Artificial Intelligence 
Cybersecurity. This work allowed us to identify security controls that were then linked to the ML 
taxonomy. 
 
It is important to note that we opted to enrich the ML-targeted security controls with more 
conventional ones to highlight that applications using ML must also comply with more classic 
controls in order to be sufficiently protected. Considering measures that are specific to ML 
would only give a partial picture of the security work needed on these applications.  
1.3 TARGET AUDIENCE 
The target audience of this report can be divided into the following categories:  
• 
Public/governmental sector (EU institutions and agencies, Member States’ 
regulatory bodies, supervisory authorities in the field of data protection, military and 
intelligence agencies, law enforcement community, international organisations, and 
national cybersecurity authorities): to help them with their risk analysis, identify threats 
and understand how to secure ML algorithms. 
• 
Industry (including Small and Medium Enterprises (SMEs)) that makes use of AI 
solutions and/or is engaged in cybersecurity, including operators of essential services: 
to help them with their risk analysis, identify threats and understand how to secure ML 
algorithms. 
• 
AI technical community, AI cybersecurity experts and AI experts (designers, 
developers, ML experts, data scientists, etc.) with an interest in developing secure 
solutions and in integrating security and privacy by design in their solutions. 
• 
Cybersecurity community: to identify threats and security controls that can apply to 
ML algorithms. 
                                                           
3 https://www.enisa.europa.eu/publications/artificial-intelligence-cybersecurity-challenges  

`;