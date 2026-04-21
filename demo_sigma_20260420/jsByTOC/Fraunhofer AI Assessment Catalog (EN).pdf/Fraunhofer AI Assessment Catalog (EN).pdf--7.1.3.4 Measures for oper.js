var toc_content = `95
Dimension: Reliability
7.1.3.3  Embedding
[RE-R-SC-ME-06] AI application real-world tests
Requirements: Do | Pr | Te
Extensive real-world tests of the AI component (already embedded and functioning as an AI application) 
must be performed and documented. This involves determining the relevant performance metrics according 
to [RE-R-SC-CR-01] and also checking embedding-specific requirements such as runtime metrics and input 
distributions changed by the embedding. (The performance of the AI application, with a particular focus on 
the application boundary, is tested in the Risk area: robustness (RO), see [RE-R-RO-ME-06].)
 – For real-world tests, it is particularly important to ensure that all regular application situations have been 
covered. If possible, this can be achieved by testing all possible parameter combinations under real-world 
conditions. Taking the example of a system for sorting apples, this would involve testing all (categorical) 
combinations of color, variety and size. If it can be demonstrated that complete coverage is not possible, 
a suitable option must be chosen instead that illustratively covers the most important cases. This selection 
must be justified in the context of the application.
Model weaknesses uncovered during real tests must be documented along with the corrective measures taken 
and lessons learned.
7.1.3.4  Measures for operation
[RE-R-SC-ME-07] Supplement to open-world coverage
Requirements: Do | Pr
If the AI application is used in an open-world context or complete coverage of the application area according 
to [RE-R-SC-CR-02] cannot be guaranteed, a documented process must exist for the quality control of 
new input data during regular operation. This supplements the continuous testing procedures from [RE-R-
RO-ME-07]. Furthermore, it must be documented how the findings from this process are used to enable 
continuous adaptation and improvement of the AI application (see, for example, [RE-R-CD-ME-02] as well 
as federated learning approaches in [DP-R-PD-ME-08]). If data is logged in this process, the Dimension: 
Data Protection (DP) must be taken into account.
7.1.4  Overall assessment
[RE-R-SC-OA] Overall assessment
Requirement: Do
With reference to the measures taken, it must be demonstrated that the performance metrics defined in 
[RE-R-SC-CR-01] and the coverage metrics defined in [RE-R-SC-CR-02] for the application domain are within 
each of the target intervals defined there. Furthermore, justification must be provided that the data quality 
requirements defined in [RE-R-SC-CR-03] are met.
If not all requirements specified in [RE-R-SC-CR-01] to [RE-R-SC-CR-03] are met, the deviations must be 
documented. This also applies to requirements that have only been partially met, e.g., where the criteria have 
not or not always been met.

`;