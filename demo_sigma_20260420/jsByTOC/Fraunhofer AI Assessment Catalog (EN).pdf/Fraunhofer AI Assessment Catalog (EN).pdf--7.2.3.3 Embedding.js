var toc_content = `100
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