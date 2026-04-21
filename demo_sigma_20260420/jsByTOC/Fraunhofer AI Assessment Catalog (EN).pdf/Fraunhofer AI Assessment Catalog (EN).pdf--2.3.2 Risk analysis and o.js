var toc_content = `31
Essential Concepts and Methodology for Applying the Catalog
If a low protection requirement is determined for a dimension, it is not necessary to examine it in more detail, 
as there are no significant risks to be addressed. For example, the fairness dimension can be ignored if the 
AI application neither processes personal data nor significantly affects human users by its results. For instance, 
this may be the case in AI applications used in an industrial context. By ignoring dimensions with a low protection 
requirement, the assessment can be tailored to the specific application, thus making it more efficient. Conversely, 
a high protection requirement for a particular dimension may require special attention when performing the 
assessment.
2.3.2  Risk analysis and objectives
If a dimension is deemed to have a medium or high protection requirement, the AI application should be 
examined with regard to each of the subordinate risk areas. In this respect, a key purpose of the assessment 
catalog is to be applicable across the breadth of all possible AI applications. In particular, this prevents 
quantitative minimum requirements and thresholds from being specified that may be suitable for one 
AI application but would be too low or restrictive for other AI applications. In order to still come up with 
a feasible assessment procedure that enables both developers of AI applications and independent technical 
experts to undertake substantial development and assessment, the catalog, similarly to IT-Grundschutz (engl.: 
IT baseline protection) and the Common Criteria26, envisages to first perform a risk analysis specific to the 
AI application in question and define objectives (and later criteria, see Section 2.3.3) based on this.
The purpose of the risk analysis is to determine which of the potential risks in the risk area are relevant to the 
specific AI application and must be controlled. To this end, the associated risks are first identified in view of the 
application context of the AI application. The identified risks are then assessed, in a similar way to the protection 
requirements analysis, based on potential resulting damage and threats. For example, for a handwriting 
recognition AI application that provides suggestions for completing words, incorrect output should be considered 
more acceptable than for an AI application that recognizes handwriting to verify signatures in contracts.
Note: The list of risks provided in the catalog does not claim to be exhaustive and does not free the developer or 
independent assessor from their obligation to identify other risks not listed and to address them accordingly in 
the risk analysis.
Objectives are created based on the relevant risks identified. The objectives specify the circumstances under 
which an acceptable residual risk is established with regard to the risk area being examined. If possible, the 
objectives should already outline an approach for reducing the residual risk to an acceptable level.
2.3.3  Criteria for achieving objectives
An essential prerequisite for being able to impartially check if the objectives have been achieved is to define 
comprehensible criteria for achieving them.
There are now various metrics in the area of AI application development (key performance indicators, KPIs) that 
describe the quality of data or models. Choosing a metric for checking quality characteristics is often dependent 
on the AI application, but is not arbitrary. The AI assessment catalog demonstrates accepted metrics and 
quality characteristics, while also providing guidance on choosing application-specific criteria. In each case, it is 
necessary to justify that these are appropriate for the AI application under consideration. Application-specific 
target intervals should also be defined for quantitative metrics and their suitability should be demonstrated in 
26  For further information and explanations, refer to the following website: https://www.bsi.bund.de/EN/Themen/Unternehmen-und-
Organisationen/Standards-und-Zertifizierung/Zertifizierung-und-Anerkennung/Zertifizierung-von-Produkten/Zertifizierung-nach-CC/
IT-Sicherheiskriterien/CommonCriteria/commoncriteria_node.html (last accessed: 11/18/2022)

`;