var toc_content = `110
Dimension: Reliability
extent the AI component was trained with this data set, and in what form the uncertainty annotation was 
used. Furthermore, the process for gathering or estimating the uncertainty annotations must be documented 
and an estimate of the quality of these annotations must be provided.
 
Note: Data sets of this nature are only available in rare cases. This measure therefore has limited applicability, 
but can provide significant added value.
7.4.3.2  AI component
[RE-R-UE-ME-02] Selecting an appropriate uncertainty estimation method
Requirement: Do
Depending on the ML model used, it is possible to choose between different approaches with varying levels of 
quality and expenditure when implementing an uncertainty estimation. Based on the objectives and criteria, 
it is necessary to justify the relevant choice, highlighting both positive and negative characteristics of the 
method. Established methods for performing uncertainty estimation include (combinations of):
 – Bayesian network (e.g., Monte Carlo dropout72),
 – Parametric uncertainty,73
 – Deep ensembles.74
[RE-R-UE-ME-03] Post-processing for calibration
Requirement: Do
To improve uncertainty estimations, procedures can be implemented which post-process the confidence 
output for the purpose of better calibration. The choice of post-processing method must be justified and 
documented on the basis of the quality criteria. Established methods for post-processing confidence outputs 
include temperature scaling75 or isotonic regression76.
72  Gal, Y. and Ghahramani, Z. (2016). Dropout as a Bayesian approximation: Representing model uncertainty in deep learning. In International 
Conference on Machine Learning. pp. 1050–1059.
73  Nix, D. A. and Weigend, A. S. (1994). Estimating the mean and variance of the target probability distribution. In Proceedings 
of IEEE International Conference on Neural Networks 1994, volume 1, pp. 55–60. IEEE
74  Lakshminarayanan, B.; Pritzel, A.; Blundell, C. (2017). Simple and Scalable Predictive Uncertainty Estimation using Deep Ensembles. 
In I. Guyon and U. V. Luxburg and S. Bengio and H. Wallach and R. Fergus and S. Vishwanathan and R. Garnett, ed. Advances 
in Neural Information Processing Systems. Curran Associates, Inc.  
https://proceedings.neurips.cc/paper/2017/file/9ef2ed4b7fd2c810847ffa5fa85bce38-Paper.pdf. (last accessed: 06/22/2021).
75  Guo, C. et al. (2017). On Calibration of Modern Neural Networks. In Precup, Doina and Teh, Yee Whye, ed. Proceedings 
of the 34th International Conference on Machine Learning. Proceedings of Machine Learning Research. PMLR, pp. 1321–1330.  
http://proceedings.mlr.press/v70/guo17a.html (last accessed: 06/22/2021).
76  Niculescu-Mizil, A. and Caruana, R. (2005). Predicting good probabilities with supervised learning. In Proceedings of the 22nd International 
Conference on Machine Learning (ICML 2005). Association for Computing Machinery, New York, NY, USA, 625–632.  
https://doi.org/10.1145/1102351.1102430 (last accessed: 06/22/2021).

111
Dimension: Reliability
[RE-R-UE-ME-04] Testing the uncertainty estimation
Requirements: Do | Pr | Te
The uncertainty estimation must be tested on data not used in training or for calibration. If specific semantic 
dimensions have been specified in [RE-R-UE-CR-01], test data should be chosen that allows the uncertainty 
estimation to be examined along these dimensions. Furthermore, the requirements in [RE-R-IM-ME-06] 
should be taken into account if uncertainty estimation is used as a detection method for intercepting errors. 
The metrics and target intervals defined in [RE-R-UE-CR-01] are used to evaluate quality. The test results must 
be documented.
It must be documented if (iterative) adjustment of the uncertainty estimation has taken place (e.g., by means 
of additional post-processing measures) during the tests in the event of potentially inadequate quality.
7.4.3.3  Embedding
[RE-R-UE-ME-05] Assessing follow-up responses
Requirements: Do | Te
If the uncertainty estimation can or should initiate follow-up responses, these responses and how they are 
implemented must be documented, if necessary in line with the Risk area: intercepting errors at model 
level (IM) (see [RE-R-IM-ME-06] and [RE-R-IM-CR-02]). Real-world tests are also performed in which 
the initiation of the follow-up responses by the uncertainty estimation is purposely triggered and tested. 
If the tests required by this measure are already documented elsewhere, for example in [RE-R-IM-ME-07] 
or [S-R‑FS-ME-13], reference can be made to this instead.
7.4.3.4  Measures for operation
There are no planned measures for this category.
7.4.4  Overall assessment
[RE-R-UE-OA] Overall assessment
Requirement: Do
Documentation should be available demonstrating that the criteria specified in [RE-R-UE-CR-01] have been 
achieved.
If not all requirements specified in [RE-R-UE-CR-01] are met, the deviations must be documented. 
This also applies to requirements that have only been partially met, e.g., where the criteria have not or not 
always been met.

`;