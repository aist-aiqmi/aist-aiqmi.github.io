var toc_content = `44
Dimension: Fairness
[FN-R-FN-ME-05] Testing the AI component on unseen data
Requirements: Do | Te
Tests of the AI component on data that were not part of the training data are performed and the significance 
of this data with respect to the fairness of the AI application is documented. The target intervals achieved 
should also be specified.
4.1.3.3  Embedding
[FN-R-FN-ME-06] Fair further processing
Requirement: Do
Documentation should be available to illustrate what processing steps, which may be relevant to fairness, 
are performed by components of the embedding on the outputs of the AI component.
It describes how it is ensured that this further processing is fair. Specifically, it shows how weaknesses 
identified in [FN-R-FN-ME-05] are addressed.
[FN-R-FN-ME-07] AI application tests
Requirements: Do | Te
Extensive testing of the AI application regarding fairness is performed and documented. The data used in the 
test should be described and its selection should be justified. The target intervals achieved should also be 
specified. Specifically, the tests check fairness-relevant processing steps performed by components of the 
embedding.
4.1.3.4  Measures for operation
[FN-R-FN-ME-08] Monitoring outputs in operation
Requirements: Do | Pr | Te
Documentation should be available describing how the fairness of the AI application’s outputs is monitored 
during operation.
4.1.4  Overall assessment
[FN-R-FN-OA] Overall assessment
Requirement: Do
Documentation should be available confirming that the quantitative criteria have been met.
Furthermore, the extent to which the non-quantitative criteria have been achieved by the measures taken 
for operation must be assessed.
If not all requirements specified in [FN-R-FN-CR-01] and [FN-R-FN-CR-02] are met, the deviations must be 
documented. This also applies to requirements that have only been partially met, e.g., where the criteria have 
not or not always been met.

`;