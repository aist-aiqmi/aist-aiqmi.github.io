var toc_content = `40
Dimension: Fairness
4.1  Risk area: fairness (FN)
The fairness risk area aims to ensure that the output of the AI application does not involve or cause unintentional 
or unjustified disadvantageous treatment of individuals (or groups of individuals)30. As described in the German 
General Equal Treatment Act, the following are typical threats in this risk area:
Discrimination against people
of a particular nationality or ethnic origin,
of a particular gender,
who belong to a particular religion or ideology,
who have a disability,
of a certain age group,
of a particular sexual identity.
The relevance of these threats considering the AI application in question is to be assessed. In addition, other 
groups of people should be considered and added if there is a risk that these people might be treated unfairly 
due to the specific application context or the requirements of the AI application. The exact procedure in the risk 
analysis for the fairness risk area is described in the following section.
4.1.1  Risk analysis and objectives
[FN-R-FN-RI-01] Identifying potentially disadvantaged groups
Requirement: Do
Documentation should be available that identifies potential groups or individuals disadvantaged by the 
outputs of the AI application and how they are characterized using sensitive characteristics present in the 
data. For this purpose, the typical threats mentioned above should first be examined and their relevance to the 
AI application in question should be assessed. Other context-specific or system-specific threats to the fairness 
risk area are also to be identified and analyzed.
[FN-R-FN-RI-02] Determining a suitable fairness approach
Requirement: Do
Documentation should be available that describes in detail what fairness means in the specific application 
context of the AI system. In particular, the documentation should outline which types of disadvantageous 
treatment (i.e., based on which sensitive attributes) are acceptable or even appropriate and which types are 
unjustified and discriminatory or at least undesirable.  
Example: If an insurance premium is based on factors such as the person’s age when taking out the policy, 
this could be appropriate, as age could correlate with the potential financial cost of insurance for that person. 
However, gender-based discrimination for car insurance premiums is undesirable31.
30  A similar approach to the one described in this risk area for developing a safeguarding argumentation for the fairness of algorithmic decision-
making is also outlined in the following paper. This combines the concepts of acceptance test-driven development (ATDD) and assurance 
cases: 
Hauer, M. P.; Adler, R.; Zweig, K. (2021). Assuring Fairness of Algorithmic Decision Making. 2021 IEEE International Conference on Software 
Testing, Verification and Validation Workshops (ICSTW). https://doi.org/10.1109/icstw52544.2021.00029 (last accessed: 06/30/2021)
31  Sommer, M. (November 2012). Der Lady-Tarif hat ausgedient [The end of cheaper insurance for female drivers]. Zeit Online.  
https://www.zeit.de/auto/2012-11/autoversicherung-unisex (in German, last accessed: 06/16/2021)

41
Dimension: Fairness
In addition, the documentation details that there is no conflict for the chosen application-specific distinction 
between accepted and unwanted disadvantageous treatment with applicable law (justified/unjustified 
discrimination). In particular, it should address compatibility with the general principle of equal treatment.
Objectives: For the groups of people identified as relevant in [FN-R-FN-RI-01], the aim is to prevent or 
eliminate both unwanted and unjustified disadvantageous treatment.
4.1.2  Criteria for achieving objectives
Appropriate safeguard measures should be implemented based on the threats identified in the fairness risk 
area. However, in order to objectively check during the overall assessment if existing risks have been successfully 
mitigated, the objective described in [FN-R-FN-RI-02] must first be translated into quantitative criteria. 
A distinction is drawn between criteria that quantify fairness with respect to the outputs of the AI application 
via a fairness metric and criteria that quantify bias in the training data. Choosing the fairness metric requires 
careful attention and detailed justification to ensure that it is consistent with the meaning of fairness in the 
context of the AI application as described in [FN-R-FN-RI-02].
[FN-R-FN-CR-01] Quantifying fairness in the output
Requirement: Do
Documentation should be available to record the formal definition of the groups identified in [FN-R-FN-RI-01] 
that may be disadvantaged. It uses appropriate categories for recording characteristics and combinations of 
characteristics.
It also describes the formal fairness definition(s) chosen and the quantitative fairness metric(s) derived from 
them that will be used to assess the fairness of the AI application.
 – A separate appendix provides legitimate definitions of fairness (and associated metrics). If none of the 
definitions provided there are used, justification should be given detailing why they have not been. In 
this case, the particular definition or criterion used instead should be explained in view of the application 
context and the choice should be fully justified.
 – The documentation should show how conflicting fairness definitions are dealt with, if applicable.
Target intervals are defined for the chosen metrics. This step involves providing detailed justification that 
the selected definition(s), metric(s) and target intervals are consistent with the objectives.
Appendix: Possible fairness definitions32 include the following:
Group fairness (statistical/demographical parity, equal acceptance rate, benchmarking)
Conditional statistical parity
Predictive parity (outcome test)
False positive error rate balance (predictive equality)
False negative error rate balance (equal opportunity)
Equalized odds (conditional procedure accuracy equality, disparate mistreatment)
Conditional use accuracy equality
Overall accuracy equality
Treatment equality
Test fairness (calibration, matching conditional frequencies)
Well calibration
Balance for positive class
Balance for negative class
Causal discrimination
32  For an overview of common fairness metrics and potential advantages and disadvantages of the metrics, see also: Verma, S.; Rubin, J. (2018). 
Fairness Definitions Explained. 2018 ACM/IEEE International Workshop on Software Fairness. https://doi.org/10.1145/3194770.3194776 
(last accessed: 06/30/2021)

`;