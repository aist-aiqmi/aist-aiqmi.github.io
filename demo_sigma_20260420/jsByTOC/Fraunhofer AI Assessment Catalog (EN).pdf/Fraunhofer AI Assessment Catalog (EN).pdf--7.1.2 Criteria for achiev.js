var toc_content = `90
Dimension: Reliability
Objectives: It is documented which residual risks are acceptable for the application context in question. 
Furthermore, objectives are set for developing and operating the application so that the tolerable residual risk 
is not exceeded when these objectives are met.
7.1.2  Criteria for achieving objectives
The following covers methods and metrics for risk assessment and for defining the application area. This involves 
determining value ranges (target intervals) for all metrics used, which quantify the desired level of acceptable risk 
in the objectives. The reliability of the AI application can be assessed in the overall assessment based on these 
target intervals.
[RE-R-SC-CR-01] Quantification of reliability
The reliability of an AI application is illustrated by mathematical-statistical measures or metrics. It is important to 
draw a distinction between general performance metrics and the loss function.
The latter is a crucial part of the training of many ML models. In the case of supervised Machine Learning in 
particular, learning algorithms such as stochastic gradient descent are generally used to adjust the model at each 
training step in a way that the loss function of the training data set is gradually optimized. The value of the loss 
function (also referred to as loss) with respect to the training data, compared to the loss with respect to the test 
data, provides information about the quality of the training and can indicate aspects such as possible overfitting.
However, a performance metric is the general term for a measure or metric that assesses how good/bad a model 
or the AI application based on it is at solving a given task. The performance metric used to assess the quality of 
a model can differ from its loss function (if there is one). In particular, it is not part of the training process, but is 
actually determined on the basis of validation or test data to measure the performance of the AI component in 
relation to a given task.
Common loss functions are listed below for regression and classification, which represent two major problems 
of supervised Machine Learning. In practice, a regularization term for the model parameters (e.g., the weights of 
a neural network) is also often used in addition to these loss functions to counteract overfitting.
Regression:52
Squared error loss
Absolute error loss
Classification:53
Cross-entropy loss
Hinge loss
Kullback-Leibler divergence
Brier score54
52  Specifics of the loss functions are described in: Patterson, J. and Gibson, A. (2017). Deep Learning – A Practitioner’s Approach. O’Reilly Media; 
also to some extent in: Goodfellow, I.; Bengio, Y.; Courville, A. (2016). Deep Learning. MIT Press.
53  Specifics of the loss functions (except Brier scores) are described in: Patterson, J. and Gibson, A. (2017). Deep Learning – A Practitioner’s 
Approach. O’Reilly Media; also to some extent in: Goodfellow, I.; Bengio, Y.; Courville, A. (2016). Deep Learning. MIT Press.
54  See: Brier, G. W. (1950). Verification of Forecasts Expressed in Terms of Probability, Monthly Weather Review, 78(1), 1–3. Retrieved Jun 23, 
2021. https://journals.ametsoc.org/view/journals/mwre/78/1/1520-0493_1950_078_0001_vofeit_2_0_co_2.xml (last accessed: 06/23/2021).

91
Dimension: Reliability
The following list provides an overview of key performance metrics for different (also unsupervised) Machine 
Learning tasks. Various other metrics also exist.
Regression:55
(Mean) squared error
(Mean) absolute error
Classification:56
(Mean) accuracy
F1 score
Precision and recall
Sensitivity and specificity
AUC value57
Ranking:
Mean reciprocal rank58
Discounted cumulative gain59
Clustering:
Silhouette value60
Adjusted mutual information score61
Completeness score62
Computer vision:63
Peak signal-to-noise ratio (SNR)
Structural similarity index64
(Mean) intersection over union (mIoU)
Natural language processing:
Perplexity score65
BLEU score66
55  References same as in footnote 51
56  References same as in footnote 51 (except AUC value)
57  See: Smola, A.; Vishwanathan, S. V. N. (2008). Introduction to Machine Learning, Cambridge University Press.
58  See: Radev, D. R. et al. (2002). Evaluating Web-based Question Answering Systems. Proceedings of the Third International Conference 
on Language Resources and Evaluation, pp. 1153–1156.
59  For example, see: Pedregosa, F. et al. (2020). Scikit-Learn: User Guide (Release 0.23.2). https://scikit-learn.org/stable/user_guide.html 
(last accessed: 06/23/2021).
60  Andrienko, N. et al. (2020). Visual Analytics for Data Scientists. Springer Nature Switzerland.
61  See footnote 57 for reference
62  See: Bonaccorso, G. (2018). Mastering Machine Learning Algorithms. Packt Publishing.
63  For peak SNR and mIoU: Szeliski, R. (2021). Computer Vision: Algorithms and Applications (2nd edition). Springer.
64  See: Dosselmann, R.; Yang, X.D. A comprehensive assessment of the structural similarity index. SIViP 5, 81–91 (2011).  
https://doi.org/10.1007/s11760-009-0144-1 (last accessed: 06/23/2021).
65  For example, in: Buduma, N. (2017). Fundamentals of Deep Learning. O’Reilly Media
66  In: Papineni, K. et al. (2002). BLEU: a method for automatic evaluation of machine translation. In Proceedings of the 40th Annual 
Meeting on Association for Computational Linguistics (ACL 2002). Association for Computational Linguistics, USA, 311–318.  
https://doi.org/10.3115/1073083.1073135 (last accessed: 06/23/2021).

92
Dimension: Reliability
Requirement: Do
The documentation covers which performance metric(s) should be used to assess the reliability of the 
AI application in the application domain. Justification must be provided as to why the chosen metrics are 
appropriate for evaluating the fulfillment of a task by the AI application and adequately reflect the specific 
quality requirements of the model that for example stem from the business context of the AI application. If the 
model is trained with a loss function, it is also necessary to specify and justify the choice of the loss function. 
If none of the evaluation metrics specified in the list above are used, the reason for this must be provided. 
If this is the case, documentation must be provided as to why the loss function or metric chosen instead is 
reasonable and appropriate for the AI application.
Furthermore, target intervals for the chosen performance metric(s) and, if applicable, the loss function should 
be defined in the application area. The choice of values to be achieved should be comprehensively justified in 
view of the application context in question and the criticality of the task to be solved by the AI application.
[RE-R-SC-CR-02] Quantification of the application domain coverage
Requirement: Do
Coverage of the application area by the training, test, and validation data set is formalized and captured 
using a quantitative metric, if possible. For example, if the input space can be formalized as a low-dimensional 
vector space and the application domain as a subset of it, then the simplest metric to check is whether each 
cell of a grid in that area contains data points.
 – In general, it may be useful to rely on methods that generate additional input data, for example, to achieve 
better coverage through the enriched training data (see [RE-R-RO-ME-01] and [RE-R-RO-ME-02], as well 
as [RE-R-RO-ME-04] for augmentation techniques). It is often possible to make use of additional criteria to 
evaluate the “newness” of created data points67.
If possible, application-specific target intervals should be defined and justified for the coverage metric chosen 
previously for the application domain.
If adequate coverage of the application domain justifiably cannot be demonstrated using quantitative means, 
qualitative reasoning may be used instead. Particularly in contexts such as open-world applications in which 
this type of review can never be conclusive, there must be a strategy to consider (e.g., logging) new scenarios 
and input data during operation.
[RE-R-SC-CR-03] Quality of training and test data
Adequate (quantitative) coverage of the application domain by training and test data is a key factor for ensuring 
that the ML model considers all possible application scenarios and therefore learns optimal decision rules. 
However, in order to ensure reliable performance of the AI component in the application domain, qualitative 
requirements should also be set for the data, as these can have an equal effect on the quality of the ML model. 
For example, the truthfulness of the data or the accuracy of annotations/labels is essential to ensure that the 
AI component draws the right conclusions from the learned context. Data processed and stored must be 
accurate, particularly with regard to personal data. In addition, depending on the application context, there may 
be additional qualitative data requirements that are related to technical constraints or arise from operational 
processes and requirements, such as the need to reproduce outputs (see [TR-R-AU-CR-01]) and associated 
inputs, from analyzing causes of errors/accidents (see e.g., [S-R-CD-ME-03] and [S-R-FS-ME-14]) or from 
the ability to provide information about data and models (see also [TR-R-UA-ME-01], [TR-R-EX-ME-01] and 
[DP-R-PD-ME-11]).
67  See for example. Odena, A. and I. Goodfellow (2018) TensorFuzz: Debugging Neural Networks with Coverage-Guided Fuzzing. Cornell 
University. https://arxiv.org/pdf/1807.10875.pdf (last accessed: 06/23/2021).

93
Dimension: Reliability
Requirement: Do
Criteria are defined for assessing data quality. The following aspects should be considered as a minimum 
when selecting the criteria:
 – Technical requirements (format, file size)
 – Completeness of the data (e.g., all attributes present)
 – Truthfulness of the data
 – Correctness of annotations/labels
 – Relevance of the data to the application domain
 – Availability/access to data and metadata
A qualitative objective/target characteristic is also formulated for each of the defined criteria, which, if met, 
ensure an acceptable risk level with respect to data quality.
The choice of criteria and associated targeted properties must be justified. It should also be demonstrated that 
this choice is consistent with the objectives defined in [RE-R-SC-RI-01].
7.1.3  Measures
7.1.3.1  Data
[RE-R-SC-ME-01] Origin and quality of the database
Requirement: Do
The origin of the training and test data must be documented and the integrity of the data source(s) assessed.
For annotated data, there must be documentation on how the annotations or labels were created. It should 
also describe how the correctness of data annotations is ensured (e.g., through checks by two people or 
special software).
It must be demonstrated that the data is qualitatively suitable for training. In particular, the extent to which 
the criteria in [RE-R-SC-CR-03] are met must be explained.
There should also be a description of the “compatibility” of training and test data taking the application 
domain of the AI component into account.
 – There should be a particular emphasis on whether the data is structurally identical and belongs to the same 
distribution or whether there are significant deviations.
 – Measures taken to prevent training and test data overlaps (data leakage) must be described (e.g., by local-
sensitive hashing of the data or statistical methods).
[RE-R-SC-ME-02] Choice of database
Requirement: Do
The choice of training and test data must be justified in detail in terms of the regular input data to be 
expected when the AI application is in operation.
It must be documented that the training and test data sufficiently cover the application domain. Specifically, 
the following points should be addressed:
 – Coverage of the application domain should be documented in a, where possible, quantitative fashion using 
the metric and target interval specified in [RE-R-SC-CR-02]. For the coverage of the application boundary, 
reference can be made to [RE-R-RO-ME-01] to [RE-R-RO-ME-03] if necessary.
 – Comprehensible, meaningful documentation should be available describing any measures taken to 
improve coverage of the application domain, such as data augmentations. The choice of these measures 
must be justified. If applicable, reference can be made to [RE-R-RO-ME-01], [RE-R-RO-ME-02] or 
[RE-R-RO-ME-04].
 – If it is not possible to quantify the coverage of the application domain, detailed justification as defined in 
[RE-R-SC-CR-02] must be provided.

`;