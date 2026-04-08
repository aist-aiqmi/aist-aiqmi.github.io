var toc_content = `75
Dimension: Transparency
there may be overlaps with the requirements from the Dimension: Reliability (RE), and if already covered 
there, reference can be made to the corresponding section in the reliability dimension for the choice of test 
data.
 – Furthermore, it may be necessary to provide metadata for the test data that increases the interpretability of 
the test and training data used and/or also of the transparency method used. This is particularly the case 
for transparency methods in the form of a visual interactive interface (see [TR-R-EX-ME-06]).
6.2.3.2  AI component
Given that the criteria defined in [TR-R-EX-CR-01] and [TR-R-EX-CR-02] require transparency/introspection with 
regard to different circumstances or contexts, measures [TR-R-EX-ME-03] to [TR-R-EX-ME-05] must be applied 
separately for each of these circumstances or contexts.
[TR-R-EX-ME-02] Justified choice of introspection/transparency methods
 Requirement: Do
Documentation should be available that demonstrates engagement with the current state of the art for 
implementing traceable Machine Learning in relation to the AI application and the application context in 
question. In general, transparency can be achieved at different levels of an AI application, e.g., by analyzing 
outputs but also by defining internal states or auxiliary variables such as gradients. The technical options 
considered for achieving transparency of the AI application and plausibility of its outputs should be described. 
The focus of the description must align with the objectives defined in [TR-R-EX-RI-01].  
The following are possible approaches to introspection that can be considered for implementing transparency 
requirements:
 – Analysis of boundaries, for example in classification
 – Heat maps on the output (e.g., DeconvNet)
 – Analysis of (latent) representations (e.g., TCAV)
 – Relationship between correlation or causality (see brittle features)
 – Use of interpretable local proxy models (e.g., LIME)
 – Sensitivity analyses concerning parameters, both of the model and the input
 – Consideration of the loss function used
 – Evaluation of attention
 
Both the purpose and underlying ML models of these methods differ (e.g., random forests, SVMs or DNNs). 
This list does not claim to be exhaustive.
Furthermore, the extent to which the transparency methods considered affect the reliability and performance 
of the AI application must be documented. The characteristics that are likely to be affected should be outlined 
for each approach/method for achieving transparency considered.  
Example: An interpretability requirement of the latent representation of an autoencoder that interferes with 
the loss (e.g., by a regularization term) usually leads to larger to medium reconstruction errors.
The documentation covers which approaches or methods for implementing the transparency requirements 
formulated in [TR-R-EX-RI-01] are implemented in the AI application in addition to the explanation methods 
provided for users and affected persons (see measure [TR-R-UA-ME-04]).
 – Detailed justification must be provided regarding the choice of the implemented approaches or 
transparency methods based on the consideration of the current state of the art and the effect of 
transparency methods on reliability and performance.
 – If applicable, it must be explained how negative effects on other dimensions (in particular the Dimension: 
Reliability (RE)) were handled during development (by considering transparency requirements in the 
design, or even by implementing methods to achieve transparency).

76
Dimension: Transparency
 – Furthermore, an explanation must be provided regarding the extent to which the selected approaches 
or methods (“by design” or as transparency methods implemented at a later stage) fulfill the criteria in 
[TR-R-EX-CR-01].
It should also be discussed whether an aggregate view of the chosen introspection methods, for example 
using a visual interactive interface (see [TR-R-EX-ME-06]), is meaningful and applicable. If the introspection 
methods are used individually, i.e., no aggregate view, this decision must be justified.
[TR-R-EX-ME-03] Sanity check of the approach/transparency method implemented
Requirements: Do | Te
Documentation should be available covering a test (referred to as a sanity check) that proves the effectiveness 
or plausibility of the implemented approach. More specifically, the test is designed to check whether the 
implemented approach actually provides insight into the specific workings of the ML model, rather than, 
for example, generating an explanation that is de facto separate from the model. The design of the test47 and 
the choice of the test data set must be justified with reference to the AI application. How the test is performed 
and the test results must be documented.
 
Example: A heat map method can be used to explain an AI application for image classification. In order 
to check the plausibility of the explanation for a specific classification, the model implemented in the 
AI application is retrained on a training data set with randomized labels and the heat map method is then 
applied to the classification of the retrained model. If it appears that the heat maps are very similar in 
terms of the original and the newly trained model, it is likely that the heat map method is more of an edge 
detector than something capable of explaining the intrinsic decision processes of the (very different) models. 
Furthermore, for input data far outside the application domain, such as an untrained class, the heat map 
should ideally not provide a meaningful explanation for any classification for the known classes.
[TR-R-EX-ME-04] Quality assurance of the transparency method results
Requirements: Do | Te
In addition to being suitable for the chosen purpose, the results of the introspective measures taken should 
meet the requirements of [TR-R-EX-CR-02]. This must be verified by suitable tests.
 – The quantitative criteria can be verified by statistical tests, as in [TR-R-UA-ME-05]. The test data sets used 
must be documented.
 – The qualitative criteria can be verified, for example, in tests with test affected persons, as in 
[TR-R-UA-ME-07].
How the tests are performed and the test results are documented and the extent to which the test results 
fulfill the criteria set in [TR-R-EX-CR-02] is presented.
[TR-R-EX-ME-05] Complete fulfillment of a criterion
 Requirements: Do | Te
If several approaches/transparency methods are aligned to jointly fulfill a single criterion, i.e., are applied 
for a common purpose, the documentation must justify that the criterion is completely fulfilled by the 
combination of these methods. If this is technically possible, gaps are actively searched for and the outcome is 
documented. Otherwise, justification can be provided as to why such a gap cannot exist. This measure is only 
applied if a combination of approaches/transparency methods is used.
47  The following article offers guidance: Adebayo, J. et al. (November 2020). Sanity Checks for Saliency Maps. GitHub.  
https://github.com/adebayoj/sanity_checks_saliency (last accessed: 06/16/2021)

77
Dimension: Transparency
6.2.3.3  Embedding
[TR-R-EX-ME-06] Visual interactive interface
Requirements: Do | Pr | Te
Depending on the complexity of the underlying AI component and the data, it may be helpful and/or 
necessary to use a visual interactive interface to aggregate different introspection measures and to visually 
prepare data and metadata. In particular, this type of interface can visually break down the huge amount 
of data for experts and facilitate an improved understanding of data. Furthermore, experts can investigate 
semantic hypotheses, identify clusters and thus be supported when searching for weaknesses in the model 
(e.g., in the sense of closed-loop testing, see [RE-R-SC-ME-05]).  
Example: When examining an AI application for pedestrian detection, an image is found in which a person 
wearing a red sweater is not detected. The experts would like to investigate whether this error also occurs 
with similar input data and thus constitutes a systematic weakness. The corresponding image area with 
the person in the red sweater can be marked within the visual interface. Based on this example image, the 
data set is searched for similar images using a similarity metric. This produces a filtered data set that the 
experts can now use to analyze the performance of the AI application for this specific case.
A detailed description of a visual interactive interface should be available if one has been created for the 
AI application. It is important to specify certain details including which interfaces the visual interactive interface 
has, which data formats are supported and how the embedding of the outputs of the AI application or the 
ML model itself is implemented. Furthermore, the implemented methods for visually preparing the data within 
the interface must be described, e.g., which graphs, tables, image data or similar are displayed, which areas 
are linked and how the data is processed in the background. The interactivity and the visual representation or 
aggregation of the data should be based on visual analytics methods. In addition, the process of operating the 
interface should be explained using examples.
The documentation covers the extent to which the visual interactive interface was used to investigate model 
weaknesses (for example, in the sense of closed-loop testing, see [RE-R-SC-ME-05]) and which weaknesses 
were identified in the process. If this is related to measures in the Dimension: Reliability (RE), reference can 
be made to them.
If a visual interactive interface is available that is also to be used during operation to (systematically) search for 
weaknesses in the ML model, there must be an established process for this. In particular, it should be specified 
which aspects the analysis focuses on using the interface, which criteria are used to identify weaknesses and 
which measures are taken in light of the findings.
[TR-R-EX-ME-07] Effect of integration
Requirements: Do | (Te)
Documentation should be available to show that the transparency properties of the AI application are not 
impacted by it being embedded in a larger surrounding system. If there is a justified suspicion that this might 
not be fulfilled, this is tested using the measures [TR-R-EX-ME-04] and if required [TR-R-EX-ME-05] for the 
AI component (already embedded and functioning as an AI application). The choice of test data sets, how 
tests are performed and the test results must be documented.  
Example: In an autonomous vehicle, an AI component is embedded in an online monitoring system that 
monitors all embedded modules based on complex rules. In certain situations, for example in the event of 
an external error, the embedding can overwrite the outputs of the modules or even disable them to enter 
a fail-safe mode. If this online monitoring system behaves erratically, there could be a negative impact on 
the traceability of the AI component’s decisions, particularly if the complex rules make it difficult to trace 
the embedding activities.

`;