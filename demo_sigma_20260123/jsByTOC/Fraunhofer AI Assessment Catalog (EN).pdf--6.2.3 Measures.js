var toc_content = `74
Dimension: Transparency
 
This list is not exhaustive. Requirements specific to the application context in question should also be included 
to define the criteria.
Example: Possible criteria for evaluating the outputs of a heat map method to be used by experts to corroborate 
the outputs of an image classification include:
 – The heat map method should provide a similar explanation on similar input images (stability).
 – The heat map represents the effect of certain image regions and can therefore highlight relevant image 
features. These features can be interpreted by humans in terms of classification.
 – Both the confidence of the ML model and the strength of the heat map should decrease if the input image 
is distorted, see also Risk area: uncertainty estimation (UE) in the Dimension: Reliability (RE).
It should be justified in detail that the specified criteria can be met separately and simultaneously, so there 
are no conflicting objectives. Requirements that can only be used together to achieve an objective should be 
combined into a common criterion.
It is demonstrated that sufficient domain knowledge was involved during the selection of transparency criteria. 
This can be ensured by involving domain experts in the target area of the AI application. If no such knowledge 
is required when selecting transparency criteria, justification must be provided.  
Example: On the advice of medical professionals, the decision is made to perform a plausibility check on 
the outputs of an AI application used to analyze a blood count by determining the relevance of each input 
parameter.
For each criterion and its associated target values or qualitative target characteristics, justification must 
be provided that they are suitable for the application context and conform to the objectives defined in 
[TR‑R‑EX‑RI-01]. If qualitative criteria are used, an additional explanation must be provided as to why 
a quantitative criterion was not chosen.
6.2.3  Measures
The objective regarding introspective measures differs depending on the underlying AI application and its 
application context. This is why possible approaches should ideally be considered at an early stage during the 
development of the AI application as guiding elements, see [TR-R-EX-ME-02]. The transparency of Machine 
Learning processes is an active field of research. At the time of publication of the assessment catalog, the 
current state of this field can only be presented here as a snapshot. It is critical to undertake a more in-depth 
examination of the state of the art applicable at the time of the assessment, especially for applications that 
require a high level of transparency.
6.2.3.1  Data
[TR-R-EX-ME-01] Suitability of training and test data
Requirement: Do
Documentation should be available on the training and test data of the ML model that indicates what kind of 
data is involved and whether it is understandable/interpretable for the intended experts (related to the intrinsic 
interpretability of the data). If the data is not intrinsically interpretable, then a reason must be provided as to 
why this particular type of data is being used. Furthermore, there must be a description of the measures taken 
to give experts the required understanding of the data, for example through documentation or guidance 
about the data. If necessary, reference can be made to [TR-R-UA-ME-01].
If applicable, the data used for training and for testing the introspective methods is documented and its choice 
or suitability is justified. Depending on the approach used, the requirements may be higher than would be 
necessary for purely training the AI component.
 
For example, out-of-domain data may be required to justify sufficient validity of the tests performed. 
In addition, there may be a requirement for more detailed labeling for correlation analyses regarding the 
application purpose, or for traceable data sources to better confine the underlying domain. In this instance, 

`;