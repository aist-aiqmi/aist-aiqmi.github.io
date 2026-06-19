var toc_content = `89
Dimension: Reliability
7.1  Risk area: reliability in standard cases (SC)
The risk area reliability in standard cases considers all incorrect predictions of an AI application that can 
potentially occur on input data from the application domain and lead to damage. The criteria and measures in 
this risk area address the overall risk of incorrect predictions of the AI component, with the objective of limiting 
it to an acceptable level in the context of the application. In addition to the universal analysis in this risk area, 
specific aspects for avoiding incorrect predictions or errors in the application domain are singled out in the Risk 
area: robustness (RO) and in the Risk area: uncertainty estimation (UE) and covered in more depth.
An important first step in addressing the standard cases is to specify the application domain. To ensure adequate 
quality of the AI application on input data to be used in operation, it must be ensured that the training data 
sufficiently covers the application domain. The correct implementation of training routines and the final trained 
model are another prerequisite for the quality of the AI application.51
The requirements for reliability in standard cases are largely determined by the context in which the AI application 
is applied. Existing requirements for the AI application must first be quantified so they can serve as an objectively 
verifiable criterion. Particularly in the case of qualitative requirements such as “customer satisfaction” or 
“simplifying the work of employees”, the creation of quantitative metrics and target intervals to be used to 
perform tests is always affected by losses. To avoid overfitting to a specific metric, i.e., one-sided optimization 
of the AI component with respect to a single target aspect, as many different performance metrics as possible 
should be considered to assess reliability. To assess whether the target intervals have been met, tests should be 
established that are tailored to the AI application in question and, in particular, to its application context.
7.1.1  Risk analysis and objectives
To perform the risk analysis for the reliability in standard cases risk area, the (permissible) application domain 
must first be specified. Based on this defined domain, a comprehensive assessment is made of the type and 
amount of possible damage that can be caused directly or indirectly by using the AI application for its intended 
purpose.
[RE-R-SC-RI-01] Determining the application area and risk assessment
Requirement: Do
Documentation should be available that addresses the following points in a qualitative and conceptual manner:
Application domain: The application domain is defined as the input data to be expected during operation 
that the AI application is meant to process correctly. This must be described in detail. In addition, the 
application domain should be roughly defined using examples (faulty input data or limiting cases of the 
application domain, including non-semantic corruptions such as noise, are specified in more detail in the Risk 
area: robustness (RO)).  
If possible, the application domain defined here should be distinctly separate from related or supposedly 
similar application domains for which the AI application was not developed and the reliability for which is thus 
not assessed.
Risk analysis: An assessment is made of the risks created by insufficient reliability of the AI application 
when using regular input data. This also describes the potential damage resulting from this insufficiency and, 
if possible, how frequently they can occur. For each identified risk, an assessment must be made as to whether 
the level of associated potential harm is acceptable or not.
51  The description in this section draws heavily on section “3.4 Reliability” in the white paper: Poretschkin, M.; Rostalski, F.; Voosholz, J. et al. 
(2019). Trustworthy Use of Artificial Intelligence. Sankt Augustin: Fraunhofer Institute for Intelligent Analysis and Information Systems IAIS. 
https://www.ki.nrw/wp-content/uploads/2020/03/Whitepaper_Thrustworthy_AI.pdf (last accessed: 06/18/2021)

90
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

`;