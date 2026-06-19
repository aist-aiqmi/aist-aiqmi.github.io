var toc_content = `72
Dimension: Transparency
6.2  Risk area: transparency for experts (EX)
The transparency for experts risk area is closely related to the objective in the Risk area: transparency in 
relation to users and affected persons (UA). However, this risk area focuses on validation, for example 
to detect model weaknesses and on the (technical) traceability and reproducibility of outputs of the AI application 
by experts. The technical level is correspondingly higher.
In many cases, such as the use of neural networks, it is difficult even for AI experts to understand how outputs 
are generated. In areas with high reliability and/or traceability requirements, this represents a potential risk. 
The purpose of this risk area is therefore to use introspective methods
to make decisions transparent,
to make outputs plausible,
to test the inherent “logic” of the AI application,
and to uncover potential causes of errors and, if necessary, systematic model weaknesses.
In doing so, meeting these goals can contribute not only to transparency, but also to the Dimension: 
Reliability (RE) of the AI application.
Transparency and interpretability are usually intrinsic qualities for AI methods with low levels of complexity, e.g., 
decision trees or clustering. However, in the case of a complex AI application, all four of the objectives specified 
involve substantial effort. In fact, it is possible that in these cases total transparency cannot be achieved due to 
trade-offs between effort and scope of introspection on the one hand and also necessity and practicality on the 
other. This is why the subsequent risk analysis must clarify what level of transparency for experts is targeted in 
relation to the AI application.
6.2.1  Risk analysis and objectives
[TR-R-EX-RI-01] Risk analysis and objectives
Requirement: Do
Risk analysis: An analysis is performed to determine what possible damage and hazards can occur due 
to a lack of transparency of the AI application for experts and, in particular, due to the experts’ inability to 
validate or check the plausibility of the outputs of the AI application. The probability of occurrence as well as 
the potential amount of damage are assessed.
Objectives: Based on the risk analysis, qualitative targets are set regarding the various transparency aspects of 
an AI application (interpretability, explainability and traceability) for experts.
 
Example 1: The pedestrian detection system in an autonomous vehicle should meet high reliability standards. 
In the event of damage, it may be necessary to closely trace the AI application’s decisions.
 
Example 2: An AI application for flood forecasting models physical processes. To check how reliable they are, 
it is useful to corroborate and validate the outputs in terms of simple (physical) relationships.

73
Dimension: Transparency
6.2.2  Criteria for achieving objectives
The complex set of requirements in the area of transparency poses a challenge when it comes to checking that 
targets have been achieved. Quantitative specifications should be favored over qualitative ones wherever possible 
to ensure accurate verifiability. If there is more than one requirement, quantitative and qualitative specifications 
can be combined. However, the determining factor is that the criteria for all requirements must be achievable 
separately and at the same time. Exceptions, such as criteria that replicate the same transparency requirement, 
must be justified separately.
[TR-R-EX-CR-01] Requirements for the characteristics of transparency/introspection methods
Requirement: Do
Documentation should be available describing the criteria to be used to evaluate transparency/introspection 
methods. Firstly, each criterion should specify the circumstance or context to which it refers, which 
should be explainable/interpretable/comprehensible to experts. Secondly, it should include requirements 
for the transparency method that is used to explain the corresponding circumstance or context to experts. 
In particular, target intervals to be achieved (quantitative) or target characteristics to be achieved (qualitative, 
structural) must be specified. The following points should be addressed and discussed as a minimum when 
selecting the criteria:
 – The scope, design and level of detail of transparency methods. In particular, it is necessary to investigate 
whether the level of transparency required in the application context is achieved by the method.
 – The depth and breadth of introspection in relation to model outputs. This involves discussing whether an 
introspection method has to be used for each model output (breadth) and for which model depth the 
introspection methods have to be used (e.g., transparency only for final outputs of the model or also for 
preliminary results within the model).
 – The time frame within which an explanation/introspection must be made available. For this, particular 
attention must be paid to whether there are real-time requirements for the introspection methods.
 – Complexity of the transparency method, i.e., how costly implementing the method may be.
It should be justified in detail that the established criteria can be met separately and simultaneously, so there 
are no conflicting objectives. Requirements that are only collectively meaningful for assessing if an objective 
has been achieved should be combined into a common criterion.
For each criterion and its associated target values or qualitative target characteristics, justification must 
be provided that they are suitable for the application context and conform to the objectives defined in 
[TR-R-EX-RI-01].
[TR-R-EX-CR-02] Requirements for the outputs or results of transparency/introspection methods
Requirement: Do
The requirements specified in [TR-R-EX-CR-01] regarding the characteristics of transparency and/or 
introspection methods must be enhanced based on findings associated with these. The choice of criteria must 
be documented and justified. The following aspects should be taken into consideration:
 – The stability of the explanation in relation to similar cases
 – The correlation between the confidence of the model and the accuracy of the explanation
 – The comprehensibility of the results of the transparency method for experts (confirmed by human testers)
 – An intrinsic weighting of the statement, i.e., whether one or more statements have a weighting in terms of 
a confidence level
 – Fidelity, i.e., the smallest possible deviation of the prediction suggested by the explanation from the actual 
prediction

`;