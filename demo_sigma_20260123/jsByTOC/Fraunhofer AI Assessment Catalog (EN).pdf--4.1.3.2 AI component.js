var toc_content = `43
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

44
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