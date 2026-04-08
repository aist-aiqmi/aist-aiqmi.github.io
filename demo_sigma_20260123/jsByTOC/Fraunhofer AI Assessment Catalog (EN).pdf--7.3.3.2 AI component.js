var toc_content = `105
Dimension: Reliability
[RE-R-IM-ME-02] Data set splits for extrapolation
Requirements: Do | Pr
If [RE-R-IM-CR-03] requires generalizability of the detection method or the coverage as defined in 
[RE-R‑IM‑CR-01] cannot be achieved, “artificial” OOD data should be generated based on the overall 
data set. For this purpose, the overall data set is split so that the resulting sub-data sets are structurally 
different from each other. To create this split, the following measurable criteria can be used, for example:
 – semantic properties, e.g., on the basis of existing label information
 – statistical properties, e.g., distribution properties of subsets
 – latent representations of Deep Learning approaches, such as variational auto encoders (in which use of 
DNN features should also consider the lessons learned from the Risk area: transparency for experts 
(EX))
The choice of the criterion for splitting data sets must be justified. This choice should always be based on the 
application context and each method used, taking into account the purpose of obtaining additional “artificial” 
OOD data sets.
The data set splits created must be documented and can be used for extrapolation tests in [RE-R-IM-ME-05].
7.3.3.2  AI component
[RE-R-IM-ME-03] Design for intercepting errors in outputs with correlation-based methods
Requirement: Do
There are numerous design approaches that can be used for complex tasks at the AI component level that lead 
to more reliable detection of inadmissible situations. One option concerns certain multi-sensor approaches 
that create an ensemble of ML models, each combining information from different “perspectives”. Another 
design approach is multi-label learning, which involves training an ML model to solve different but related 
tasks simultaneously and thus output multiple labels, for example. While these approaches improve the 
robustness of the AI component (see [RE-R-RO-ME-04]), conflicts between the outputs can also serve as an 
indicator for the unreliability of the overall output. It must be demonstrated to what extent the design of the 
AI component helps intercept errors at model level, or it must be justified if intercept errors was not explicitly 
considered in the design.
[RE-R-IM-ME-04] OOD tests
Requirements: Do | Pr | Te
The OOD test data set from [RE-R-IM-ME-01] is used to statistically analyze the proportion of the cases in 
which implemented detection mechanisms are effective. This analysis falls under binary classification (success/
no success) and should at least be statistically evaluated with the associated criteria from [RE-R-IM-CR-03]. 
The qualitative requirements for the detection mechanism specified there should also be checked. The findings 
must be documented.
It should be documented if, during the tests, the existing test data has been (iteratively) adjusted, new 
data has been created, or the detection mechanism has been adjusted, e.g., in reaction to inadequate 
performance.

106
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

`;