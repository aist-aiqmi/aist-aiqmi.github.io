var toc_content = `42
Dimension: Fairness
Fairness through awareness (individual fairness33)
Counterfactual fairness
No unresolved discrimination
No proxy discrimination
Fair inference
The definitions above refer to binary classification. They can also be extended to classification with k-classes 
and can also potentially be applied to regression. It is possible to derive quantitative metrics of fairness from the 
listed fairness definitions e.g., by taking the absolute value of the difference in the statistical quantities from the 
definition.
[FN-R-FN-CR-02] Quantifying fairness in training data
Requirement: Do
Documentation should be available describing and justifying the choice of one or more quantitative metrics 
to assess bias in the training data (or why the training data is not being examined more closely, if necessary).
Appropriate target intervals are defined for the metrics that will be applied to the training data. When 
defining them, the appropriateness of the target intervals should be justified in relation to the application 
context of the AI application.
4.1.3  Measures
4.1.3.1  Data
[FN-R-FN-ME-01] Checking data for bias
Requirement: Do
Documentation should be available that records how the data is checked to ensure that it is free of bias 
(particularly with regard to potentially disadvantaged groups). The checked data as well as the metrics selected 
under [FN-R-FN-CR-02] and the target intervals achieved are specified.
[FN-R-FN-ME-02] Fair data pre-processing
Requirement: Do
Documentation should be available that shows which conclusions are drawn from [FN-R-FN-ME-01] and how, 
if necessary, the data is processed in the sense of fair pre-processing, for example using
 – Data massaging,
 – Uniform/preferential sampling,
33  Dwork, C. et al. (January 2012). Fairness Through Awareness. In: Proceedings of the 3rd Innovations in Theoretical Computer Science 
Conference 2012, pp. 214–226. https://doi.org/10.1145/2090236.2090255 (last accessed on 06/30/2021)

`;