var toc_content = `93
Dimension: Reliability
Requirement: Do
Criteria are defined for assessing data quality. The following aspects should be considered as a minimum 
when selecting the criteria:
 – Technical requirements (format, file size)
 – Completeness of the data (e.g., all attributes present)
 – Truthfulness of the data
 – Correctness of annotations/labels
 – Relevance of the data to the application domain
 – Availability/access to data and metadata
A qualitative objective/target characteristic is also formulated for each of the defined criteria, which, if met, 
ensure an acceptable risk level with respect to data quality.
The choice of criteria and associated targeted properties must be justified. It should also be demonstrated that 
this choice is consistent with the objectives defined in [RE-R-SC-RI-01].
7.1.3  Measures
7.1.3.1  Data
[RE-R-SC-ME-01] Origin and quality of the database
Requirement: Do
The origin of the training and test data must be documented and the integrity of the data source(s) assessed.
For annotated data, there must be documentation on how the annotations or labels were created. It should 
also describe how the correctness of data annotations is ensured (e.g., through checks by two people or 
special software).
It must be demonstrated that the data is qualitatively suitable for training. In particular, the extent to which 
the criteria in [RE-R-SC-CR-03] are met must be explained.
There should also be a description of the “compatibility” of training and test data taking the application 
domain of the AI component into account.
 – There should be a particular emphasis on whether the data is structurally identical and belongs to the same 
distribution or whether there are significant deviations.
 – Measures taken to prevent training and test data overlaps (data leakage) must be described (e.g., by local-
sensitive hashing of the data or statistical methods).
[RE-R-SC-ME-02] Choice of database
Requirement: Do
The choice of training and test data must be justified in detail in terms of the regular input data to be 
expected when the AI application is in operation.
It must be documented that the training and test data sufficiently cover the application domain. Specifically, 
the following points should be addressed:
 – Coverage of the application domain should be documented in a, where possible, quantitative fashion using 
the metric and target interval specified in [RE-R-SC-CR-02]. For the coverage of the application boundary, 
reference can be made to [RE-R-RO-ME-01] to [RE-R-RO-ME-03] if necessary.
 – Comprehensible, meaningful documentation should be available describing any measures taken to 
improve coverage of the application domain, such as data augmentations. The choice of these measures 
must be justified. If applicable, reference can be made to [RE-R-RO-ME-01], [RE-R-RO-ME-02] or 
[RE-R-RO-ME-04].
 – If it is not possible to quantify the coverage of the application domain, detailed justification as defined in 
[RE-R-SC-CR-02] must be provided.

`;