var toc_content = `83
Dimension: Transparency
6.4  Risk area: control of dynamics (CD)
The control of dynamics risk area should ensure that the transparency of the AI application is maintained.
First, it deals with the risk that established transparency properties of the AI application may be lost during 
operation if, for example, the ML model in question changes due to model drift. For example, a change in 
the ML model may result in a decrease in the robustness of explanations. Secondly, there is the risk that the 
transparency requirements of the AI application change, for example due to external factors such as user 
needs or new laws. In addition, advancement in the state of the art may mean that previously unattainable 
requirements become feasible or others become obsolete. An abstract transparency requirement could involve 
monitoring and addressing these advancements.
6.4.1  Risk analysis and objectives
[TR-R-CD-RI-01] Risk analysis and objectives
 Requirement: Do
Risk analysis: An analysis is performed to determine which (external) factors or circumstances affect the 
transparency requirements established in the previous risk areas. This analysis is then used to help estimate the 
likelihood of foreseeable changes to the transparency requirements of the AI application, and what impact 
or potential damage may result. In addition, it is necessary to identify possible causes (external or inherent in 
the AI application) for the loss of existing transparency properties of the AI application during operation and 
estimate their probability of occurrence. Furthermore, it is necessary to investigate what damage may occur if 
such a loss takes place.
Objectives: Qualitative objectives for operation are set based on the risk analysis. They outline the extent to 
which and the approach to be taken for ensuring that the established transparency properties are maintained 
or, if necessary, adapted during operation so that risks are reduced to an acceptable level.
6.4.2  Criteria for achieving objectives
[TR-R-CD-CR-01] Reviewing and adapting transparency requirements
Requirement: Do
Based on the [TR-R-CD-RI-01] risk analysis, external factors are defined that are to be observed due to their 
potential impact on the transparency requirements established in the previous risk areas. The assessment 
or monitoring interval planned must be defined and documented according to the estimated rate of change 
of these factors.
In relation to the change in relevant external factors, the threshold value or the qualitative extent of the 
deviation should be defined and documented. Anything above this threshold should initiate an adjustment 
of the previously established transparency requirements (which are regularly reviewed in accordance with 
[TR-R-CD-CR-02]).
It must be demonstrated that the criteria set conform to the objectives defined in [TR-R-CD-RI-01].

84
Dimension: Transparency
[TR-R-CD-CR-02] Maintaining transparency properties
Requirement: Do
Criteria are defined and documented for a process to regularly review transparency properties against the 
existing requirements. When selecting criteria for assessing the process, the following points (quantitative 
or qualitative) should be considered as a minimum:
 – Assessment interval. This shows the extent to which the reviews of the transparency properties are also 
initiated by other, regular reviews. This approach is useful if a re-evaluation of transparency properties 
results from direct changes to transparency requirements as well as from other initiated changes to the 
AI application, such as retraining.
 – Scope and nature of the review or methods used.
 – Threshold value or qualitative extent of deviation from the requirements, above which corrective measures 
are taken.
 
Quantitative target values or qualitative target characteristics must be specified for each criterion.
It must be demonstrated that the criteria set adequately reflect the objectives defined in [TR-R-CD-RI-01].
6.4.3  Measures
6.4.3.1  Data
There are no planned measures for this category.
6.4.3.2  AI component
There are no planned measures for this category.
6.4.3.3  Embedding
There are no planned measures for this category.
6.4.3.4  Measures for operation
[TR-R-CD-ME-01] Monitoring external factors
Requirements: Do | Pr
A monitoring process is established relating to the external factors that may influence the transparency 
requirements identified in the previous risk areas. The factors specified in [TR-R-CD-CR-01] must be 
considered as a minimum. Depending on the nature of the transparency requirements, the process may 
involve methods such as monitoring and analysis, but it may also include, for example, gathering user 
feedback through questionnaires. The nature and scope of the process must be documented and detailed 
justification must be provided as to how the process contributes to meeting the objectives.
In addition, it must be documented how, as part of the process, the previously established transparency 
requirements are adjusted according to [TR-R-CD-CR-01].
Furthermore, the steps that come after adjustment of the transparency requirements must be described. 
In particular, it must be outlined how adjustments are initiated or made to the AI application (see 
[TR-R-CD-ME-02]).

`;