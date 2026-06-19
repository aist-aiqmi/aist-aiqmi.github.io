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

99
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

`;