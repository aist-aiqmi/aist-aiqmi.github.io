var toc_content = `69
Dimension: Transparency
6.1.3.2  AI component
[TR-R-UA-ME-02] Interpretability of the ML model
Requirement: Do
Documentation regarding which models were considered to address the present problem must be available. 
In addition, it must be demonstrated that these models have been evaluated in terms of their interpretability, 
e.g., by in-depth analysis of the choice of architecture, thus examining the possible operations and their 
possible sequence.
Documentation should be available describing why the model (or architecture) was chosen. If no interpretable 
model is used, it must be made clear why no such model is used. The list below provides a selection of models 
considered interpretable at the time when this catalog was published.
Interpretable models46 include (as of July 2021):
Linear and logistic regression (as well as their extensions including generalized linear models and generalized 
additive models)
Linear and logistic classification
Decision trees
Rule learning
Naive Bayesian classifier
K-nearest neighbor
[TR-R-UA-ME-03] Traceability of how the application works
Requirement: Do
Documentation and/or a visualization of the model (including a schematic diagram of the architecture, if 
applicable) must be available that contains sufficient explanations to make the way the application works 
comprehensible. There is an outline of how this visualization or explanation will be made available to users 
and affected persons of the AI application.
[TR-R-UA-ME-04] How the results are generated
Requirement: Do
Documentation should be available describing the measures taken to explain how results are generated. The 
type and scope of the explanations must always be chosen based on proportionality, taking into account the 
level of qualification of users and affected persons as well as their use of the AI application. For example, 
explanations might be useful for users but might be excessive for other affected persons of the same 
AI application.
In the case of models that are intrinsically interpretable:
 – For rule-based models, it is necessary to specify which rules apply to the current decision (e.g., in the case 
of decision trees, the branching selected could be displayed next to the result).
 – For linear regression and related models, it is necessary to specify the most relevant or crucial attributes for 
making a decision (the largest absolute value of the coefficients for normalized inputs).
For black box models:
 
Methods used to create explanations or support interpretability should be described. Methods should either 
be model-specific or model-agnostic, as in the sample methods listed below:
 – Partial dependence plots
 – Individual conditional expectation plots
46  According to: Molnar, C. (June 2021). Chapter 4 Interpretable Models | Interpretable Machine Learning: A Guide for Making Black Box 
Models Explainable. https://christophm.github.io/interpretable-ml-book/simple.html (last accessed: 06/16/2021)

70
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

`;