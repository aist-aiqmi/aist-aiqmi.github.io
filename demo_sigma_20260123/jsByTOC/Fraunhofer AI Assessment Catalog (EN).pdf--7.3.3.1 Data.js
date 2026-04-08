var toc_content = `104
Dimension: Reliability
[RE-R-IM-CR-02] Existence of mitigation strategies
Requirement: Do
Similarly to [S-R-FS-CR-03], each input area from [RE-R-IM-RI-01] to be used for detection is paired with 
a mitigation strategy that will be used if the detection procedures from that risk area take effect. For example, 
this may involve passing control over to the user. A strategy does not have to be applicable to all of the areas 
mentioned, but can also apply only to specific areas (or even sub-areas). However, each (sub-)area must be 
covered by at least one measure. This classification is recorded in a table.
[RE-R-IM-CR-03] Requirements for the detection methods
Requirement: Do
Requirements (quantitative if possible) for the detection methods should be recorded for each of the input 
areas mentioned in [RE-R-IM-RI-01] on the basis of the risk analysis and the assigned mitigation strategies 
defined in [RE-R-IM-CR-02]. At least the following points should be addressed:
 – Reliability. (Definition of a metric to measure the performance of the detection methods and a target 
interval or upper limit up to which detection failure would be acceptable. One of the metrics from [RE-R-
SC-CR-01] can be selected.)
 – Response time. (The maximum detection time allowed is determined depending on the subsequent 
mitigation strategy.)
 – Application threshold. (If the shift from “robust” behavior and failure of the AI component in the input 
space is continuous, specifying a detection threshold is justified.)
 – Generalizability. (If the coverage in [RE-R-IM-CR-01] is qualitative rather than quantitative, the 
requirement for the detection method to be able to generalize or extrapolate is discussed. In this context, 
generalizability refers to the detection method’s ability to work, even in the case of input data outside 
the application boundary, which is not necessarily to be expected in operation and thus was not explicitly 
included when designing the detection method.)
 – (If applicable) specific additional requirements resulting from each of the subsequent mitigation strategies 
defined in [RE-R-IM-CR-02].
7.3.3  Measures
7.3.3.1  Data
[RE-R-IM-ME-01] Out-of-distribution data set
Requirement: Do
Out-of-distribution (OOD) data sets are prepared for testing the detection measures. If necessary, input 
data from relevant OOD input areas can be generated from the existing data in [RE-R-RO-ME-01]. 
This data must be enriched with further data in such a way that coverage is achieved for relevant input 
data outside the application domain according to [RE-R-IM-CR-01]. If the required quantitative or qualitative 
categorical coverage cannot be achieved, the suitability of the test data sets must be justified. This also applies 
to the scope of the test data.

105
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

`;