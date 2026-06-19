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

`;