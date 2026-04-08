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

43
Dimension: Fairness
 – Reweighing34,
 – Fair data representations35.
The documentation should also specify why the measures taken are effective in relation to the chosen fairness 
metric and how they help ensure or improve the fairness of the AI application.
Choosing not to conduct this type of pre-processing should also be justified.
4.1.3.2  AI component
[FN-R-FN-ME-03] Fair modeling
Requirement: Do
Documentation should be available that provides details of the model used and describes how the Machine 
Learning method36 implemented, and particularly the loss function(s)37 chosen, supports the fairness of the 
AI application.
[FN-R-FN-ME-04] Fair adaption and post-processing
Requirement: Do
Documentation should be available describing what measures are taken if the ML model results become unfair 
during training (fair in-processing, optimization at training time). The target intervals under [FN-R-FN-CR-01] 
are used as a basis for the assessment. The measures should be justified.
Documentation should be available describing what measures are taken if the results become unfair after 
the training (fair post-processing38). The target intervals under [FN-R-FN-CR-01] are used as a basis for the 
assessment. These measures should be justified.
Choosing not to take these types of measures should also be justified.
34  For data massaging, uniform/preferential sampling and reweighing, see also: Kamiran, F.; Calders, T. (December 2011).  
Data preprocessing techniques for classification without discrimination. Springer, Knowledge and Information Systems 33, 1–33 (2012).  
https://doi.org/10.1007/s10115-011-0463-8 (last accessed: 06/30/2021)
35  See also: Zemel, R. et al. (2013). Learning fair representations. In Proceedings of the 30th International Conference on Machine Learning, 
PMLR 28(3):325–333, 2013. http://proceedings.mlr.press/v28/zemel13.pdf (last accessed: 06/30/2021) and Lahoti, P.; Gummadi, K. and 
Weikum, G. (2019). ifair: Learning individually fair data representations for algorithmic decision making. In 35th IEEE International Conference 
on Data Engineering, 2019. https://doi.org/10.1109/ICDE.2019.00121 (last accessed: 06/30/2021)
36  For a possible method for fair modeling, see, for example: Zhang, B.; Lemoine, B. and Mitchell, M. (2018). Mitigating Unwanted Biases with 
Adversarial Learning. In Proceedings of the 2018 AAAI/ACM Conference on AI, Ethics and Society (AIES‚ 18). Association for Computing 
Machinery, New York, NY, USA, 335–340. https://doi.org/10.1145/3278721.3278779 (last accessed: 06/30/2021)
37  For an example of possible modifications of the loss function for fair modeling, see: Zafar, M. et al. (2017). Fairness Beyond Disparate 
Treatment & Disparate Impact: Learning Classification without Disparate Mistreatment. In Proceedings of the 26th International Conference 
on World Wide Web (WWW, 17). International World Wide Web Conferences Steering Committee, Republic and Canton of Geneva, 
CHE, 1171–1180. https://doi.org/10.1145/3038912.3052660 (last accessed: 06/30/2021)
38  See also: Hardt, M.; Price, E. and Srebro, N. (2016). Equality of opportunity in supervised learning. In Advances in Neural Information 
Processing Systems 29, 2016. https://papers.nips.cc/paper/2016/file/9d2682367c3935defcb1f9e247a97c0d-Paper.pdf (last accessed: 
06/30/2021) and F. Kamiran, A. Karim and X. Zhang (2012), Decision Theory for Discrimination-Aware Classification, 2012 IEEE 12th 
International Conference on Data Mining, pp. 924–929, https://doi.org/10.1109/ICDM.2012.45 (last accessed: 06/30/2021)

`;