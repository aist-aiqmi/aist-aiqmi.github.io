var toc_content = `70
Dimension: Transparency
 – Accumulated local effects (ALE) plot
 – Feature interaction
 – Feature importance
 – Global surrogate model
 – Student-teacher-model with interpretable student
 – Local surrogate (LIME)
 – Shapley values
 
The following example-based explanations are also permissible (mostly model-agnostic, but related to 
individual data points rather than to the complete input-output context):
 – Counterfactual explanations
 – Prototypes
 – Influential instances
[TR-R-UA-ME-05] Statistical evaluation of explanations
Requirements: Do | Te
Tests are performed and documented to illustrate that the explanations of the outputs of the AI application, 
as presented in [TR-R-UA-ME-04], meet the required characteristics in [TR-R-UA-CR-01]. The fidelity of the 
explanations should be taken into account, especially in the case of error modes. The type of test used for this 
should have a strong focus on the chosen explanatory method.  
For example, a heat map method could be used to explain image classification. In this case, a check could 
be carried out regarding whether the highlighting on the heat map is on parts of the image that are relevant 
for the classification (based on human judgment) and to what extent the heat map is still localized to specific 
areas in the event of misclassification.
Parts of this test may coincide with measures to review requirements from the Risk area: transparency for 
experts (EX), see, for example, [TR-R-EX-CR-02]. If tests are identical or overlap, the corresponding measures 
can be referenced at this point.
6.1.3.3  Embedding
[TR-R-UA-ME-06] Communicating the justifications for decisions
Requirement: Do
Documentation should be available that makes it clear in which cases or according to which criteria the 
AI application communicates the justifications for its decisions to the outside world. The form of 
communication (e.g., display or visualization of the explanations from [TR-R-UA-ME-04]) must also be 
described. If decisions are not communicated or there is no communication in any cases, justification 
must be provided as to why this does not happen or why this is not possible in relation to the principle of 
proportionality and the risk analysis carried out.
[TR-R-UA-ME-07] Human evaluation of the explanations
Requirements: Do | Te
Tests must be carried out and documentation must be available to demonstrate that the requirements 
regarding the clarity and comprehensibility of explanations for users and affected persons, as defined in 
[TR-R‑UA‑CR-01], have been met with regard to both presentation and content. A study involving human 
testers can be conducted and evaluated for this purpose. The nature and questions of the study must be 
described in detail and the reasons behind them justified. Documentation must be provided regarding 
how the study is conducted, including the selection of participants, how many participants there are, their 
qualifications and the results of the study. The qualification level of the study participants should roughly 
correspond to that of the expected and/or desired target group. This can be undertaken by referencing the 
appropriate subsections of the study.

71
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

`;