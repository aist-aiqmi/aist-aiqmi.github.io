var toc_content = `MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
6 
 
• 
Academia and research community: to obtain knowledge on the topic of securing 
ML algorithms and identify existing work in the field. 
• 
Standardisation bodies: to help identify key aspects to consider regarding securing 
ML algorithms. 
1.4 STRUCTURE  
The report aims to help the target audience to identify the cyber threats to consider and the 
security controls to deploy in order to secure their ML applications. Accordingly, the report is 
structure into three sections:  
• 
ML algorithms taxonomy: first, a taxonomy to describe the main characteristics of the 
algorithms is defined. The different ML algorithms are categorised based on their core 
functionalities (e.g., the learning paradigm) and the lifecycle of a ML algorithm is 
defined.  
• 
Identification of relevant threats and vulnerabilities: secondly, a list of the 
cybersecurity threats and associated vulnerabilities to consider for ML algorithms is 
defined. Threats are mapped to the taxonomy to highlight the link between them, the 
core functionalities, and the lifecycle of the ML algorithms.   
• 
Security controls: thirdly, a list of security controls for addressing the previously 
considered vulnerabilities is given. They are also mapped to the ML taxonomy. 
This report focuses on threats that target ML algorithms and on the associated security controls. 
It is important to note that this publication examines security controls that are specific to ML 
algorithms as well as standard security controls that are also applicable to ML algorithms and 
systems making use of them. To use this publication effectively, it is important to note that:  
• 
As is the case for any application, when using ML, one must also consider traditional 
security standards (e.g. ISO 27001/2, NIST 800-53), because ML applications are 
subject not only to AI/ML specific threats but also to general nature cybersecurity 
threats. 
• 
The context of the application (e.g. manipulated data, business case, deployment) 
must be considered to correctly assess the risks and prioritise deployment of the 
security controls accordingly. 

SECURING MACHINE LEARNING ALGORITHMS 
December 2021 
 
 
7 
 
2. MACHINE LEARNING 
ALGORITHMS TAXONOMY 
 
One of the objectives of this work was to devise a (non-exhaustive) taxonomy, to support the 
process of identifying which specific threats can target ML algorithms, their associated 
vulnerabilities, and security controls for addressing these vulnerabilities. An important disclaimer 
needs to be made concerning this taxonomy, namely that it is not meant to be complete or 
exhaustive when it comes to ML, instead it aims to support the security analysis of ML 
algorithms in this report. 
Based on the desk research and interviews with experts of the ENISA AI Working group, we 
identified 40 of the most commonly used ML algorithms. A taxonomy was built based on the 
analysis of these algorithms. In particular, it was noted that ML algorithms were driven mainly by 
the learning paradigms and the problem they address (main domain). These aspects were 
therefore chosen to form the key taxonomy dimensions, as seen in Figure 1. It should be noted 
that Annex A provides a complete listing of the 40 algorithms and their mapping to the features 
of the taxonomy, whereas the Figure serves for illustration purposes. 
Figure 1: Machine Learning Algorithm taxonomy 
 

`;