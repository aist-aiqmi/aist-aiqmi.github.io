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

`;