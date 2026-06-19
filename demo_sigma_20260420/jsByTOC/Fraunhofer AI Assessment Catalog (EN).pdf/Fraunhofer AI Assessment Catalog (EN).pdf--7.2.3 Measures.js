var toc_content = `98
Dimension: Reliability
7.2.2  Criteria for achieving objectives
The following lists methods for quantifying the robustness and the application boundary, which make it 
objectively verifiable whether the set objectives are achieved and the identified risks are acceptable.
[RE-R-RO-CR-01] Quantification of the application boundary
Requirement: Do
The application boundary described in [RE-R-RO-RI-01] is – as far as possible – formalized, for example 
as a degree of occlusion for pedestrian detection or as a signal-to-noise ratio for conversational AI. The 
application boundary may be defined, as described in [RE-R-RO-RI-01], in terms of different expected 
disturbances and can encompass a quantitative grading of different disturbance levels. For example, if different 
target intervals related to performance of the AI application are provided for different disturbance levels.
As a minimum, qualitative or semantic requirements should be specified for the input data to further 
characterize the application boundary.
[RE-R-RO-CR-02] Quantification of robustness
Requirement: Do
The robustness of the AI component in relation to the boundary of the application area must be determined 
using mathematical-statistical metrics (compare [RE-R-SC-CR-01]). Documentation and justification must be 
provided regarding which of the metrics are subsequently used to evaluate the robustness.
Target intervals are defined for the specified mathematical-statistical metrics for each type of disturbance 
within the application boundary. The robustness of the AI component to these disturbances can then be 
objectively verified by meeting the target interval in a test adapted to the specific disturbance. The target 
intervals may differ depending on the disturbance risk and level, but justification must be provided as to why 
the choice of target intervals is appropriate.
[RE-R-RO-CR-03] Coverage of the application boundary
Requirement: Do
If possible, the coverage of the application boundary is formalized and quantified. The criteria in [RE-R-
SC-CR-02] should be used as a starting point for this, especially if data point pertubations are favored or 
described by factors that are not fully covered in the Risk area: reliability in standard cases (SC). In 
addition, the application boundary can be graded differently depending on the type and level of disturbance 
(see [RE-R-RO-CR-01]). For example, if the input space can be formalized as a low-dimensional vector space, 
the simplest coverage metric to check is whether each cell of a grid in the application boundary contains 
data points.
Application-specific target intervals for the coverage of the application boundary must be defined.
7.2.3  Measures
7.2.3.1  Data
[RE-R-RO-ME-01] Data for testing robustness
Requirement: Do
Documentation should be available describing test data properties and selection according to the following 
structure:
The choice of data sets for evaluating the AI component in relation to possible disturbances must be justified. 
It must be demonstrated how the chosen data sets relate to the specific requirements of the application 

`;