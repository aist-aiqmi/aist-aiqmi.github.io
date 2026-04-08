var toc_content = `77
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

78
Dimension: Transparency
In some circumstances, this test may replace the previous tests (in [TR-R-EX-ME-04] and if applicable 
[TR‑R‑EX-ME-05]) at the AI component level, as long as sufficient justification is provided.
If adjustments have been made to the embedding in advance due to a breach of transparency requirements, 
the change history, including tests of previous versions, should be provided if possible.
[TR-R-EX-ME-08] Contribution of embedding
Requirement: Do
Depending on the nature of the AI application, it might be possible to some extent to achieve compliance 
with transparency requirements through characteristics of the embedding. The extent to which embedding 
contributes to fulfilling the transparency objectives must be documented.  
Example: If transparency is linked to the objective of additional validation and resulting improvement of the 
AI component, this could perhaps also be achieved by collecting additional training data. The input data that 
is treated with a high level of uncertainty or as faulty predictions can be examined separately by having the 
overall function mirror those input data back to a server. In this example, the procedure would also need to 
be considered in the Dimension: Data Protection (DP) and in the Risk area: uncertainty estimation (UE) 
reliability dimension.
6.2.3.4  Measures for operation
There are no planned measures for this category.
6.2.4  Overall assessment
[TR-R-EX-OA] Overall assessment
Requirement: Do
Referencing the previously described measures and tests, it must be demonstrated that the criteria defined 
in [TR-R-EX-CR-01] and [TR-R-EX-CR-02] are met.
If not all requirements specified in [TR-R-EX-CR-01] or [TR-R-EX-CR-02] are met, the deviations must be 
documented. This also applies to requirements that have only been partially met, e.g., where the criteria have 
not or not always been met.
There must be a record of the extent to which relevant negative impacts on other dimensions (in particular the 
Dimension: Reliability (RE)) were identified in [TR-R-EX-ME-02] that need to be addressed and evaluated in 
the overall cross-dimensional assessment.

`;