var toc_content = `94
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

95
Dimension: Reliability
7.1.3.3  Embedding
[RE-R-SC-ME-06] AI application real-world tests
Requirements: Do | Pr | Te
Extensive real-world tests of the AI component (already embedded and functioning as an AI application) 
must be performed and documented. This involves determining the relevant performance metrics according 
to [RE-R-SC-CR-01] and also checking embedding-specific requirements such as runtime metrics and input 
distributions changed by the embedding. (The performance of the AI application, with a particular focus on 
the application boundary, is tested in the Risk area: robustness (RO), see [RE-R-RO-ME-06].)
 – For real-world tests, it is particularly important to ensure that all regular application situations have been 
covered. If possible, this can be achieved by testing all possible parameter combinations under real-world 
conditions. Taking the example of a system for sorting apples, this would involve testing all (categorical) 
combinations of color, variety and size. If it can be demonstrated that complete coverage is not possible, 
a suitable option must be chosen instead that illustratively covers the most important cases. This selection 
must be justified in the context of the application.
Model weaknesses uncovered during real tests must be documented along with the corrective measures taken 
and lessons learned.
7.1.3.4  Measures for operation
[RE-R-SC-ME-07] Supplement to open-world coverage
Requirements: Do | Pr
If the AI application is used in an open-world context or complete coverage of the application area according 
to [RE-R-SC-CR-02] cannot be guaranteed, a documented process must exist for the quality control of 
new input data during regular operation. This supplements the continuous testing procedures from [RE-R-
RO-ME-07]. Furthermore, it must be documented how the findings from this process are used to enable 
continuous adaptation and improvement of the AI application (see, for example, [RE-R-CD-ME-02] as well 
as federated learning approaches in [DP-R-PD-ME-08]). If data is logged in this process, the Dimension: 
Data Protection (DP) must be taken into account.
7.1.4  Overall assessment
[RE-R-SC-OA] Overall assessment
Requirement: Do
With reference to the measures taken, it must be demonstrated that the performance metrics defined in 
[RE-R-SC-CR-01] and the coverage metrics defined in [RE-R-SC-CR-02] for the application domain are within 
each of the target intervals defined there. Furthermore, justification must be provided that the data quality 
requirements defined in [RE-R-SC-CR-03] are met.
If not all requirements specified in [RE-R-SC-CR-01] to [RE-R-SC-CR-03] are met, the deviations must be 
documented. This also applies to requirements that have only been partially met, e.g., where the criteria have 
not or not always been met.

`;