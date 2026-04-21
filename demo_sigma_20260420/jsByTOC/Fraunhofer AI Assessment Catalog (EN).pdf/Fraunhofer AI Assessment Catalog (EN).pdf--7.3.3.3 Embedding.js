var toc_content = `106
Dimension: Reliability
[RE-R-IM-ME-05] Extrapolation test
Requirements: Do | Te
If methods defined in [RE-R-IM-CR-03] are also to be applied to unknown data/data that is not sufficiently 
specifiable, it should be documented that the tests from [RE-R-IM-ME-04] were performed on the data sets 
created through [RE-R-IM-ME-02]. In each case, part of the data, being separated according to the criteria for 
each split, should be considered as outside the application domain and the same AI component should be 
retrained on the rest of the data. Furthermore, it is necessary to document how the effectiveness of the 
detection methods for the newly trained AI components were tested in the resulting OOD input area, and the 
test result must be recorded.
If not all splits were used because a data split is not deemed relevant for one of the detection methods, for 
example because the risk to be avoided cannot occur in principle, this must be documented and justified in 
summary for the splits that were ignored.
It should be documented if (iterative) adjustment of the existing data set has taken place during the tests 
in the event of potentially inadequate performance of the detection method or has led to new data being 
created or requested or to the adjustment of the AI component or its detection method.
[RE-R-IM-ME-06] Uncertainty estimation
Requirement: Do
In principle, an intrinsic uncertainty estimation of the AI component can be used as a form of self-assessment 
to detect failures due to input data outside the application domain or due to model uncertainty. If this is 
intended, the Risk area: uncertainty estimation (UE) must include corresponding measures. In this case, 
explicit reference must be made in the measures to the intercepting errors at model level risk area.
 – In particular, the OOD data sets specified in [RE-R-IM-ME-01] and data set splits in [RE-R-IM-ME-02] 
should be considered when performing tests related to the uncertainty estimation in the Risk area: 
uncertainty estimation (UE). The [RE-R-IM-CR-03] criteria must be addressed when evaluating the 
corresponding findings and in the final assessment in [RE-R-UE-OA].
7.3.3.3  Embedding
[RE-R-IM-ME-07] Real-world tests
Requirements: Do | Te
Where possible, the detection of error modes that may result from the OOD input areas to be intercepted 
according to [RE-R-IM-RI-01] should be tested under real conditions. This supplements and extends the 
existing tests under [RE-R-RO-ME-06] and should take place under the same conditions and requirements. 
The real-world test results as well as how the test was performed should be documented. If there is no 
separate test for this measure, it should be demonstrated, where necessary, that the measure is already 
covered by [S-R-FS-ME-09], [S-R‑FS-ME-11] or [S-R-FS-ME-13].

107
Dimension: Reliability
7.3.3.4  Measures for operation
[RE-R-IM-ME-08] Monitoring of input and output data
Requirements: Do | Te
The existing measures for monitoring input and output data (see [RE-R-RO-ME-07] and [RE-R-RO-ME-08]) 
should be evaluated with respect to their suitability for detecting potential error sources on the basis of the 
OOD data set from [RE-R-IM-ME-01]. These measures can be supplemented at model level by additional pre-
processing, post-processing and monitoring procedures71. The findings and adjustments must be documented.
7.3.4  Overall assessment
[RE-R-IM-OA] Overall assessment
Requirement: Do
Considering the testing performed and documented in this risk area, it must be demonstrated that the 
[RE-R-IM-CR-01] and [RE-R-IM-CR-03] criteria are met. Where measures complement each other, it must be 
demonstrated that the risk of correlated failure of these measures can be considered manageable.
Furthermore, a table overview should be available that assigns corresponding mitigation strategies to the 
detection mechanisms for intercepting errors from this risk area. If necessary, reference can also be made 
to [S-R-FS-ME-07]. It must be demonstrated that this assignment is consistent with the risk analysis and 
objectives defined in [S-R-FS-RI-01] and meets the requirements in [RE-R-IM-CR-02].
It must be documented if the planned detection measures are not feasible or are not sufficient to meet the 
criteria in this risk area. The problems that cannot be addressed here can be re-examined in the Risk area: 
functional safety (FS) and the residual risk can be considered in the overall cross-dimensional assessment.
71  For example, MetaSeg could be used for segmentation tasks, see: Rottmann, M. et. al. (November 2018). Prediction Error 
Meta Classification in Semantic Segmentation: Detection via Aggregated Dispersion Measures of Softmax Probabilities. Cornell University.  
https://arxiv.org/pdf/1811.00648.pdf (last accessed: 06/22/2021).

`;