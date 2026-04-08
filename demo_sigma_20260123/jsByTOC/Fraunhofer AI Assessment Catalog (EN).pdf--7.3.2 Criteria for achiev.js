var toc_content = `103
Dimension: Reliability
additionally) should be handled in the Risk area: functional safety (FS). This part of the documentation is 
completed in line with the risk analysis in [S-R-FS-RI-01]. However, input data ranges that are well beyond the 
application boundary, but which could still occur, should also be considered. In addition, justification must be 
provided if detection is deemed unnecessary for identified OOD input areas.
 
Note: The considerations at model level are to be distinguished from the Dimension: Safety and 
Security (S) (see [S-R‑FS‑RI-01]), insofar as technical input variability, e.g., due to sensor failure, can be 
covered there. The focus of the intercepting errors at model level risk area is on inherent properties of the 
AI component, such as the ability to process complex input data. Problems such as complete sensor failure 
that can be handled using conventional methods should ideally be addressed in the Dimension: Safety and 
Security (S).
Risk analysis: The documentation supplements and extends the risk assessment of probabilities of occurrence 
and potential damage in [RE-R-RO-RI-01] to include the input areas discussed above for which detection at 
model level is targeted. The damage in this instance is based on the assumption of faulty processing by the 
model, unless the input is intercepted. For this purpose, both a worst-case scenario, i.e., the most unfavorable 
output from the AI application, and a random output must be examined. Using image segmentation as an 
example, the first case would equate to “overlooking” critical elements, such as missing tumor segmentation 
on a CT image in computed tomography, and the second case would equate to a randomly distorted output 
in which all segmentation regions deviate from their usual shape and only loosely correspond to the actual 
image content.
Objectives: The risk analysis is used to set qualitative requirements or objectives for the detection measures, 
which can classify the risk as controllable if achieved (assuming suitable follow-up responses if successfully 
detected). These requirements are described and examined in more detail below.  
The choice of follow-up responses to detections at model level is addressed in the risk analysis in the Risk 
area: functional safety (FS).
7.3.2  Criteria for achieving objectives
The wide variety of problems in this risk area presents a challenge when it comes to formulating criteria that 
enable any AI application to be quantitatively assessed. The criteria must therefore be adapted to each specific 
case according to the objectives defined in [RE-R-IM-RI-01]. As a minimum, the criteria defined below should be 
used for this purpose.
[RE-R-IM-CR-01] Out-of-distribution coverage
Requirement: Do
In line with [RE-R-RO-CR-03], the coverage of the input space OOD areas to be intercepted as defined in 
[RE-R-IM-RI-01] should be formalized and quantified. If justification can be provided as to why quantification 
is not possible, a qualitative categorical argument can be used instead, as in [RE-R-RO-CR-03], for example 
based on Zwicky boxes, provided that this is sufficiently justified.
In particular, if it is possible to justify that the coverage cannot also be formalized in full using a qualitative 
categorical argument or if generalizability is required in [RE-R-IM-CR-03], the coverage of the OOD 
data should also be assessed using other available OOD data sets. These data sets may contain “noise”, but 
should preferably contain data for another related application purpose. The choice of the data range must be 
justified.

104
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

`;