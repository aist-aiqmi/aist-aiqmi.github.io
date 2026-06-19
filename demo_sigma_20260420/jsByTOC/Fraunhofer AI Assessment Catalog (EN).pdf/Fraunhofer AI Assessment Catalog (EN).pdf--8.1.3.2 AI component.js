var toc_content = `125
Dimension: Safety and Security
8.1.3.2  AI component
[S-R-FS-ME-03] Role of the AI component
Requirement: Do
It must be demonstrated to what extent the architecture and design of the AI component contribute to 
the functional safety of the AI application, in particular to the prevention of accidents. If applicable, it is 
necessary to describe whether the learning function (or the creation of the learning function) takes into 
account accidents and injuries with negative feedback. If this has already been described in the Dimension: 
Reliability (RE), reference can be made to the relevant documentation.
8.1.3.3  Embedding
[S-R-FS-ME-04] Embedding design
Requirement: Do
Documentation should be available detailing the extent to which the design and architecture of the 
embedding (e.g., through redundant design or the integration of classic assistance systems) contribute to the 
prevention or even bypassing of a malfunction and thus to the strengthening of functional safety.
As this assessment catalog primarily addresses the AI-specific risks of the AI application and does not have the 
intention or pretense to fully map out existing conventional standards (on functional safety, product safety, 
information security, etc.), the documentation should focus on aspects of the embedding that are related to 
the further processing or interpretation of the output of the AI component. Reference should be made to the 
current classic norms and standards when dealing with the risks that are not specific to AI.
[S-R-FS-ME-05] Intercepting harmful input data
Requirements: Do | Te
It should be explained in a transparent way which methods at the embedding level are used to detect harmful 
inputs outside the application boundary that would represent an unacceptable safety risk if processed. 
For example, the malfunction of a sensor is a typical error mode that can be detected by conventional 
methods. In the case of image data, harmful inputs could be detected and intercepted by measuring defective 
pixels, for example.
 – If methods are implemented at embedding level to intercept harmful inputs in addition to detection 
mechanisms at model level, these must be aligned with the approach in the Risk area: intercepting 
errors at model level (IM) of the reliability dimension. Furthermore, it must be demonstrated that all 
input areas for which embedding level detection is envisaged in [RE-R-IM-RI-01] are covered effectively by 
the measures presented here.
The effectiveness of the methods for intercepting errors or detecting threats must be demonstrated in suitable 
tests. The tests must be documented and their choice justified. If there is no separate test for this measure, 
it must be demonstrated that the methods have already been adequately examined through [S-R-FS-ME-09], 
[S-R-FS-ME-11] or the [S-R-FS-ME-13] final real test.
An explanation must be provided regarding the extent to which the method(s) described contribute to 
fulfilling the criterion [S-R-FS-CR-04].
[S-R-FS-ME-06] Intercepting errors during interpretation of the AI component output
Requirements: Do | Te
It should be explained in a transparent way which methods at the embedding level are used to detect 
outputs of the AI component that would represent an unacceptable safety risk in the event of further 
processing/interpretation by the embedding. For example, an AI-based collision avoidance system could 
provide an additional safeguard for the interpretation of the AI component by comparing the results of 

`;