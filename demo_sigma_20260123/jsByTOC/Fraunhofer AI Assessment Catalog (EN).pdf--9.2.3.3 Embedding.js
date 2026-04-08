var toc_content = `156
Dimension: Data Protection
9.2.3.3  Embedding
[DP-R-BI-ME-10] Unintentional information leakage
Requirement: Do
In accordance with [DP-R-BI-RI-04], if there is a risk that business-relevant information and, in particular, 
licensed data may be exposed by means of targeted queries of the AI application, it must be documented, in 
line with [DP-R-PD-ME-09], which measures have been taken to prevent or impede the unintentional leakage 
of information. For this purpose, direct reference can be made to [DP-R-PD-ME-09], or to data pre-processing 
measures taken, such as [DP-R-BI-ME-01] to [DP-R-BI-ME-04], as well as to documentation from the Risk 
area: integrity and availability (IA) of the safety and security dimension, for example on the restriction of 
query options (see [S-R-IA-ME-10]).
[DP-R-BI-ME-11] Preventing model extraction
Requirement: Do
It is necessary to demonstrate the extent to which the output of the AI application only contains/displays the 
results required for its use.  
Example: It is not usually necessary for the AI application to output the entire softmax vector; instead, it is 
sufficient for users to know which class achieves the highest softmax value.
It is necessary to document what information regarding the technical properties of the AI application or its 
AI component is publicly available. In addition, it must be explained that this information does not go beyond 
what is necessary to inform subjects or users (see Dimension: Transparency (TR)).
It must be demonstrated to what extent the sensitive model characteristics defined in [DP-R-BI-RI-02] are 
protected against reconstruction in view of the freely accessible information about the AI application and the 
allocated query options (see [S-R-IA-ME-10]). If required, the possible contradictions or trade-offs with regard 
to providing information to subjects and users (see Dimension: Transparency (TR)) must be addressed.
9.2.3.4  Measures for operation
[DP-R-BI-ME-08] Storage and deletion
Requirement: Do
In addition to [DP-R-PD-ME-10], it is necessary to document the technical implementation and the location 
of the storage of licensed data or business-relevant information. If possible, direct reference can be made 
to [DP-R-PD-ME-10], or to measures from the Risk area: integrity and availability (IA) of the safety and 
security dimension, such as [S-R-IA-ME-04] and [S-R-IA-ME-05].
In addition, the technical procedures used to delete data when the license expires must be documented.
It is also necessary to explain what measures have been taken to protect the licensed data or business-relevant 
information from cyberattacks. In this case, reference can be made to measures from the Risk area: integrity 
and availability (IA), for example [S-R-IA-ME-03].

`;