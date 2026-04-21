var toc_content = `34
Essential Concepts and Methodology for Applying the Catalog
2.3.7  Cross-dimensional assessment of the trustworthiness of the AI application
A cross-dimensional assessment is performed once the AI application has been examined in relation to the 
six dimensions of trustworthiness. The purpose of this assessment is to evaluate possible gaps in risk mitigation 
and potential trade-offs between the dimensions of trustworthiness. This is used as a basis for judging the 
trustworthiness of the AI application, thus concluding the assessment.
Ideally, all risks from the dimensions with medium or high protection requirement should be at an acceptable 
risk level. However, this target status may not be achievable due to trade-offs between different dimensions. 
For example, an increase in transparency could pave the way for attackers to create more effective and targeted 
attacks on the AI application based on newly available information. A further example is that some quantitative 
concepts of fairness may contradict the AI application having high accuracy if the real-world test data sets are 
“unfair” from the perspective of the concept. This may result in a trade-off between the fairness and reliability 
dimensions.
Consequently, criteria or measures to mitigate risks in one dimension may increase risks in another dimension 
that may have a higher protection requirement. This must be given due consideration and is discussed 
accordingly in the cross-dimensional assessment.
The risk-based approach of the catalog enables to comparatively assess different requirements against each other. 
Particularly, when evaluating the AI application, existing gaps may be acceptable under certain circumstances 
if they are within reasonable limits and it can be plausibly demonstrated that they are unavoidable due to 
trade-offs.

35
AI Profile
3.  AI Profile (PF)
27  A variety of comprehensive questionnaires for assessing the trustworthiness of AI systems have already been published in the literature, 
including questionnaires that focus on specific aspects of trustworthiness. The HLEG self-assessment list covers a broad spectrum: 
High-Level Expert Group on AI (HLEG) (July 2020). The Assessment List for Trustworthy Artificial Intelligence (ALTAI). Issued by the 
European Commission. https://digital-strategy.ec.europa.eu/en/library/assessment-list-trustworthy-artificial-intelligence-altai-self-assessment 
(last accessed: 06/21/2021) 
In addition, there is a wide range of contributions available for specifying technical aspects of AI systems. For a structured overview of key 
characteristics of data sets, such as their origin or their intended use, see for example: 
Gebru et al. (2018). Data Sheets for Datasets. In: Proceedings of the 5th Workshop on Fairness, Accountability, and Transparency in Machine 
Learning, PLMR 80. https://www.fatml.org/media/documents/datasheets_for_datasets.pdf (last accessed: 06/29/2021) 
Moreover, the following sources present approaches to recording key ML model characteristics and information in a structured way, using 
manufacturer declarations of conformity as a model: 
M. Arnold et al. (2019). FactSheets: Increasing trust in AI services through supplier’s declarations of conformity, in IBM Journal of Research 
and Development, vol. 63. 4/5, pp. 6:1–6:13, 1 July–Sept. 2019. https://ieeexplore.ieee.org/document/8843893. (last accessed: 06/29/2021); 
and Mitchell et al. (2019). Model Cards for Model Reporting. In: FAT* 2019: Proceedings of the Conference on Fairness, Accountability, 
and Transparency, pp. 220–229; https://doi.org/10.1145/3287560.3287596 (last accessed: 06/29/2021)
The AI profile presented below relates to the case where the assessment catalog is used to assess an 
AI application by an external, third party. Its purpose is to provide the assessment authority with an initial 
overview of the AI application in terms of its functionality, the intended application context and its structure 
before the actual assessment is conducted. The AI profile is only meant to provide a general overview of 
the AI application and not to serve as a basis for a comprehensive assessment of the system27, meaning the 
information provided here can be kept concise. However, the documentation to be created later as part of the 
assessment should include explanations and specific (technical) specifications that are as detailed as possible.
Functionality and intended application context (FA)
[PF-T-FA-01] Describe the task and/or functionality of the AI application. Also explain the following points while 
doing this:
Which problem does the AI application solve? (What exactly does it “do”?)
What input data is provided and of what type is it?
What are the outputs of the AI application and of what type are they?

`;