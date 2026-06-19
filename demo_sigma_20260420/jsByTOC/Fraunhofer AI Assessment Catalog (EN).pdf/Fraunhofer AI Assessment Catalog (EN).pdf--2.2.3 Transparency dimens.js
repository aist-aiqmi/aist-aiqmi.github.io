var toc_content = `24
Essential Concepts and Methodology for Applying the Catalog
2.2.2  Autonomy and control dimension
Dimension: 
Autonomy and 
Control (AC)
This dimension focuses on two things: the autonomy of the AI application and the 
autonomy of humans. Firstly, it is vital to assess what degree of autonomy is appropriate for 
the application (e.g., human-in/on/out-of-the-loop23). Secondly, it is important to examine 
whether the human is properly supported by the AI application and is given sufficient 
freedom in their interaction with the AI application.
Risk areas
Appropriate and 
responsible task 
distribution between 
humans and 
AI application (TD)
This risk area covers risks arising from limitations on 
user autonomy or inappropriate autonomy of the 
AI application.
Information and 
empowerment of users 
and affected persons (IE)
This risk area addresses risks that arise because users 
and affected persons are not properly informed about 
the AI application, its use and the associated risks.
2.2.3  Transparency dimension
Dimension: 
Transparency 
(TR)
This umbrella term covers aspects of traceability, reproducibility and explainability. 
The transparency dimension primarily examines whether the basic functionality of the 
AI application is sufficiently comprehensible for users and experts and whether results of the 
AI application can be reproduced and justified if necessary.
Risk areas
Transparency in relation 
to users and affected 
persons (UA)
This risk area addresses risks that arise from decisions 
and effects of the AI application not being sufficiently 
explainable to users and affected persons.
Transparency for experts 
(EX)
This risk area addresses risks that arise from the 
behavior of the AI application not being sufficiently 
transparent and comprehensible for experts.
Auditability (AU)
This risk area covers risks arising from the development 
as well as the individual procedures performed 
during the operation of the AI application not being 
sufficiently documented and verified.
Control of dynamics (CD)
This risk area addresses risks that arise because 
transparency requirements or the implemented 
transparency methods themselves change.
23  For an explanation of the levels of autonomy, see: Nothwang, W. et al. (2016). The Human Should be Part of the Control Loop? In 2016 
Resilience Week (RWS), pp. 214–220, IEEE https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7573336 (last accessed: 06/22/2021) 
Note: The level of autonomy described as “complete autonomy” in the paper is referred to as “human-out-of-the-loop” in this catalog.

25
Essential Concepts and Methodology for Applying the Catalog
2.2.4  Reliability dimension
Dimension: 
Reliability (RE)
This dimension primarily relates to the quality of the AI component and assesses factors 
including its robustness, i.e., the consistency of its outputs following small changes in the 
input data. In addition to the performance and robustness of the AI component, its potential 
output (un)certainty is also reviewed.
Risk areas
Reliability in standard 
cases (SC)
This risk area addresses the risk of incorrect predictions 
by the AI component on regular input data.
Robustness (RO)
This risk area addresses risks that arise when 
input data is corrupted or manipulated, but for 
which accurate processing by the AI component is 
intended. Both qualitative and quantitative input 
data pertubations are considered, such as noise or 
adversarial examples.
Intercepting errors at 
model level (IM)
This risk area addresses risks from input data that 
is not in the application domain and that the 
AI component is not expected to process correctly. 
This data should be intercepted by a detection 
strategy.
Uncertainty estimation 
(UE)
This risk area examines risks that arise due to an 
unrealistic, unusable or absent uncertainty estimation.
Control of dynamics (CD)
This risk area addresses the risk that the ML model 
implemented in the AI component will experience 
a decline in performance or losses in relation to other 
requirements due to unintended model drifts or 
changes in application context (concept drift).

`;