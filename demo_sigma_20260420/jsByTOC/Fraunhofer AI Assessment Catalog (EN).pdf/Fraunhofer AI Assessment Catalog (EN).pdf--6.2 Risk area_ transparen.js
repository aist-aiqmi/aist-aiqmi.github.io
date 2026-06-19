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

`;