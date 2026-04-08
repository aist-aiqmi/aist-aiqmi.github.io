var toc_content = `99
Dimension: Reliability
domain and that the data is quantitatively or otherwise qualitatively or semantically appropriate for the 
disturbances described in [RE-R-RO-CR-01].
 – The disturbances included in the data set should be semantically close to an adversarial example or 
technical fault relevant to the AI application.
 – If the data set is created using augmentation or other methods, such as applying adversarial attacks, the 
suitability of the chosen method (regarding quality, proximity to the disturbance, etc.) and additionally of 
the underlying data set the method uses must be demonstrated. For this purpose, reference can be made 
to [RE-R-SC-ME-02], for example.
 – If the data sources or the method used to collect the data were also used in [RE-R-RO-ME-02], it must 
be discussed whether the test data has sufficient variability in terms of the disturbances they represent 
compared to the associated training data so that the test can still detect possible overfitting to relevant 
disturbance patterns.  
Example: Using only slightly variable augmentations (e.g., 90° image rotations in the case of image 
recognition) can lead to overfitting to the chosen augmentation (and therefore no robustness to 45° 
rotations, for example).
It must be documented how the integrity of the data source(s) is assessed. If already described there, reference 
can be made to [RE-R-SC-ME-01].
[RE-R-RO-ME-02] Data for robust training
Requirement: Do
Documentation should be available to demonstrate whether specific training data is used to achieve increased 
robustness (“robust training data”). To do this, the data sources mentioned in [RE-R-RO-ME-01] can be 
referred to, provided that their scope allows an appropriate split into training and test data. Alternatively, 
augmentation techniques68 can be used to create a more diverse data set from existing data. These techniques 
can already be dynamically integrated into the training process, see [RE-R-RO-ME-04].
It must be examined to what extent the choice of training data is statistically representative for the application 
domain or why it is not critical or even appropriate to use data with possibly limited representativeness. For 
example, a model for collision detection could be trained using an over-representative number of (near-) 
collision examples in order to improve its performance in rare but critical situations (see also [RE-R-RO-ME-03]).
[RE-R-RO-ME-03] Examining corner cases
Requirement: Do
Documentation should be available that demonstrates effort has been made to search for challenging input 
data (referred to as corner cases). These cases involve “difficult” data, such as the type of data from class 
boundaries, or input data that occurs so rarely that it is unlikely to be found in a randomly selected data set, 
even though correct processing of the data is meant to be possible.  
Example: For image recognition in autonomous driving, a ball rolling onto the road behind a parked vehicle 
represents a corner case.
7.2.3.2  AI component
[RE-R-RO-ME-04] Development and training procedure
Requirement: Do
Documentation should be available that uses the following structure to describe the extent to which 
development and training improve the robustness of the AI component:
68  For example, see: Hendrycks, D. et. al. (December 2019). AugMix: A Simple Data Processing Method to Improve Robustness and Uncertainty. 
Cornell University https://arxiv.org/pdf/1912.02781.pdf (last accessed: 06/22/2021).

100
Dimension: Reliability
The possible disturbances specified in [RE-R-RO-RI-01] must be linked to the development or training of 
the ML model. Specifically, the measures taken that contribute to the desired level of robustness must be 
described, such as
 – Augmented training (e.g., AugMix, adversarial training69),
 – Regularization (e.g., label smoothing, self-distillation, dropout, batch normalization),
 – Transfer approaches (e.g., pre-trained backbones, multi-task learning),
It must be demonstrated how the measures taken, as well as the choice of loss function(s) and training 
algorithm,
 – promote reliability or robustness with respect to the disturbances specified,
 – (if applicable) achieve the desired level of generalizability, e.g., through multi-task or transfer learning 
approaches. If already described there, reference can be made to [RE-R-SC-ME-03].
[RE-R-RO-ME-05] Testing of AI component robustness
Requirements: Do | Pr | Te
Using the data sets specified in [RE-R-RO-ME-01], tests of the AI component, which reflect identified relevant 
disturbances, are performed and documented. The target values achieved and the lessons learned during the 
tests are recorded.
7.2.3.3  Embedding
[RE-R-RO-ME-06] Real-world generalization/exploration testing of the AI application
Requirements: Do | Pr | Te
In addition to the real-world tests performed in the Risk area: reliability in standard cases (SC), the 
robustness of the AI application is tested using embedding-specific requirements, such as changed input 
distributions and other conceivable pertubations/errors/deviations. These generalization/exploration tests 
focusing on disturbances should be performed and documented while the AI component is already embedded 
and functioning as an AI application. In particular, a description must be provided regarding which of the 
disturbances identified as relevant in [RE-R-RO-RI-01] are taken into account by these tests.
Justification must be provided regarding which of the previously established target intervals (from [RE-R-
SC-CR-01] or [RE-R-RO-CR-02]) is used to evaluate the generalization/exploration tests. The target values 
achieved and lessons learned must be documented.
7.2.3.4  Measures for operation
[RE-R-RO-ME-07] Monitoring input data in operation
Requirements: Do | Pr | Te
Where possible, tests must be carried out to determine whether the input data meets minimum requirements 
(technical quality, correct format) and is admissible (e.g., data cleansing through outlier detection). Depending 
on the data complexity, it is also necessary to check the semantic proximity to the use case (for complex 
inputs, a possible breach of the application boundary is reviewed in depth in [RE-R-IM-ME-08]). The test for 
monitoring the input data should be performed continuously during live operation. The methods on which 
this test is based, as well as possible follow-up responses, must be documented and justified if not already 
described in the Risk area: functional safety (FS) of the safety and security dimension.
69  See also Carlini, N. et. al. (February 2019). On Evaluating Adversarial Robustness. Cornell University https://arxiv.org/pdf/1902.06705.pdf 
(last accessed: 06/22/2021); Kolter, Z. and Madry, A. (2021) Adversarial Robustness – Theory and Practice. https://adversarial-ml-tutorial.org/ 
(last accessed: 06/22/2021) and Zheng, S. et. al. (April 2016). Improving the Robustness of Deep Neural Networks via Stability Training. 
Cornell University. https://arxiv.org/pdf/1604.04326.pdf (last accessed: 06/22/2021).

`;