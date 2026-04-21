var toc_content = `41
Dimension: Fairness
In addition, the documentation details that there is no conflict for the chosen application-specific distinction 
between accepted and unwanted disadvantageous treatment with applicable law (justified/unjustified 
discrimination). In particular, it should address compatibility with the general principle of equal treatment.
Objectives: For the groups of people identified as relevant in [FN-R-FN-RI-01], the aim is to prevent or 
eliminate both unwanted and unjustified disadvantageous treatment.
4.1.2  Criteria for achieving objectives
Appropriate safeguard measures should be implemented based on the threats identified in the fairness risk 
area. However, in order to objectively check during the overall assessment if existing risks have been successfully 
mitigated, the objective described in [FN-R-FN-RI-02] must first be translated into quantitative criteria. 
A distinction is drawn between criteria that quantify fairness with respect to the outputs of the AI application 
via a fairness metric and criteria that quantify bias in the training data. Choosing the fairness metric requires 
careful attention and detailed justification to ensure that it is consistent with the meaning of fairness in the 
context of the AI application as described in [FN-R-FN-RI-02].
[FN-R-FN-CR-01] Quantifying fairness in the output
Requirement: Do
Documentation should be available to record the formal definition of the groups identified in [FN-R-FN-RI-01] 
that may be disadvantaged. It uses appropriate categories for recording characteristics and combinations of 
characteristics.
It also describes the formal fairness definition(s) chosen and the quantitative fairness metric(s) derived from 
them that will be used to assess the fairness of the AI application.
 – A separate appendix provides legitimate definitions of fairness (and associated metrics). If none of the 
definitions provided there are used, justification should be given detailing why they have not been. In 
this case, the particular definition or criterion used instead should be explained in view of the application 
context and the choice should be fully justified.
 – The documentation should show how conflicting fairness definitions are dealt with, if applicable.
Target intervals are defined for the chosen metrics. This step involves providing detailed justification that 
the selected definition(s), metric(s) and target intervals are consistent with the objectives.
Appendix: Possible fairness definitions32 include the following:
Group fairness (statistical/demographical parity, equal acceptance rate, benchmarking)
Conditional statistical parity
Predictive parity (outcome test)
False positive error rate balance (predictive equality)
False negative error rate balance (equal opportunity)
Equalized odds (conditional procedure accuracy equality, disparate mistreatment)
Conditional use accuracy equality
Overall accuracy equality
Treatment equality
Test fairness (calibration, matching conditional frequencies)
Well calibration
Balance for positive class
Balance for negative class
Causal discrimination
32  For an overview of common fairness metrics and potential advantages and disadvantages of the metrics, see also: Verma, S.; Rubin, J. (2018). 
Fairness Definitions Explained. 2018 ACM/IEEE International Workshop on Software Fairness. https://doi.org/10.1145/3194770.3194776 
(last accessed: 06/30/2021)

42
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