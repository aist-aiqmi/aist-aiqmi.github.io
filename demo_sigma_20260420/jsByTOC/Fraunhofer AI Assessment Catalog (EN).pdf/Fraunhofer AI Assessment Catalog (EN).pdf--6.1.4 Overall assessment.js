var toc_content = `71
Dimension: Transparency
6.1.3.4  Measures for operation
[TR-R-UA-ME-08] Process for responding to user queries
Requirements: Pr | Te
A process that has previously undergone empirical testing is established to ensure that explanations for 
the outputs of the AI application can be provided upon request to users and affected persons of the 
AI application. This process must be documented. Alternatively, justification must be provided as to why 
such a process is not needed to achieve the objective. To do this, reference can also be made to the 
information normally provided to users and affected persons in accordance with [TR-R-UA-ME-03] and 
[TR-R-UA-ME-06].
6.1.4  Overall assessment
[TR-R-UA-OA] Overall assessment
Requirement: Do
Documentation should be available explaining that the criteria defined in [TR-R-UA-CR-01] are met on the 
basis of the measures taken.
If not all requirements specified in [TR-R-UA-CR-01] are met, the deviations must be documented. 
This also applies to requirements that have only been partially met, e.g., where the criteria have not or not 
always been met.

72
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