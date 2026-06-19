var toc_content = `93
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

94
Dimension: Reliability
If the training data does not correspond to the “real” data in operation, e.g., because it was generated using 
a different process, the evaluation of the AI application should be adjusted accordingly. The evaluation should 
be performed on related data sets that data sets that, while within the application domain, differ qualitatively 
from the training and test data (domain adaptation test set, e.g., simulation data, different data acquisition 
method, different data pre-processing). If applicable, the suitability of the selected evaluation data sets must 
be justified.
7.1.3.2  AI component
[RE-R-SC-ME-03] Component design choice
Requirement: Do
Documentation should be available that links the choice of model components (training algorithm, loss 
function, etc.) to the selected reliability requirements. In addition, justification must be provided as to why the 
design and architecture of the AI component are appropriate for the application area in question. If different 
ML models were considered for the AI application, the documentation should describe the associated 
trade‑offs and the rationale for the choice made. It should also be indicated here if frameworks were used to 
configure the ML model. In addition, there should be an explanation of how the features of the input data for 
the ML model were selected.
If the training data does not match the “real” data in operation, a description must be provided of the 
measures taken to meet the challenges of concept, covariate and/or prior shift (e.g., transfer learning 
methods) and those taken to ensure the generalizability of the model.
[RE-R-RE-ME-04] Systematic search for weaknesses
Requirements: Do | Te
It must be documented how a systematic search for AI component weaknesses by iterative data adjustment 
(closed-loop testing, see also [TR-R-EX-ME-06]) or introspective methods (see [TR-R-EX-ME-02]) is 
performed. If weaknesses were identified in the process, these must be recorded along with the measures 
taken in response.
 
Example: An image classification application which separates ships from other objects was analyzed using 
a heat map-based method. For the “ship” category, the analysis showed that the wave pattern on the water 
was the decisive factor and not the ship as such. In response, the ML model was retrained on an augmented 
data set with a wider variety of wave patterns in the images.
[RE-R-SC-ME-05] AI component reliability tests
Requirements: Do | Pr | Te
Tests of the AI component should be performed on data not seen during training (test data) that sufficiently 
covers the application domain as described in [RE-R-SC-ME-02]. (The performance of the AI component, with 
a particular focus on the application boundary, is evaluated in the robustness risk area tests, see [RE‑R‑RO-
ME-05].) How the tests are performed as well as the metrics considered according to [RE-R-SC‑CR-01] 
and the achieved metric values should be documented. In addition, it must be demonstrated how the tests 
specifically look for model weaknesses.
 – In the event that training data from a different domain or distribution was used (such as transfer learning 
on synthetic data), the test data must correspond to the actual application domain (see [RE-R-SC-ME-01] 
and [RE-R-SC-ME-02]).
If model weaknesses were uncovered during the development of the AI application by missing target intervals 
of relevant metrics according to [RE-R-SC-CR-01], these cases must be documented as well as the corrective 
measures taken and the lessons learned.

`;