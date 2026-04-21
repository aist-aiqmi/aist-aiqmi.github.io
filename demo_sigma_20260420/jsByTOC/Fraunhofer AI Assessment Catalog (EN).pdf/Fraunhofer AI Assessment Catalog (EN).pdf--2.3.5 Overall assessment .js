var toc_content = `33
Essential Concepts and Methodology for Applying the Catalog
The life cycle of an AI application offers various approaches to mitigating risks. The measures in the AI assessment 
catalog are divided into the following four categories according to the stages of the life cycle:
1. Data
2. Development and modeling of the AI component
3. Embedding
4. Operation of the AI application
These categories compromise all development steps of the AI application as well as the possibility that the 
AI application continues to learn during operation.
If a measure is taken, its type determines whether a documentation (“Do”), a test report (“Te”), a description 
of a process (“Pr”) or a combination of these is required. For measures that require documentation (“Do”), 
it should be ensured that the effectiveness of the measure is evident in the documentation and can be 
understood by competent third parties. For example, if design decisions are documented, the extent to which 
they contribute to the quality requirements in the examined risk area being met should also be explained. In 
the case of tests (“Te”), it is important to provide detailed descriptions of the setting and execution, e.g., the 
test data used, in addition to the test results. Furthermore, processes (“Pr”) can also be established to mitigate 
AI risks, which must be followed during operation. If a process is required to fulfill a criterion, the planned 
process steps should be documented in detail, even if the AI application is not (yet) in operation.
If a measure helps mitigate different types of risks, it is not necessary to repeat the same documentation in 
multiple risk areas; instead, reference can be made to the documentation specified in one risk area. Similarly, 
reference can be made to the AI profile if information has already been provided there that can be considered 
as a risk-mitigating measure.
2.3.5  Overall assessment (of a risk area)
An overall assessment is carried out upon completion of a risk area. The purpose of this is to demonstrate that 
the previously defined quality criteria have been met while taking the documented measures into account.
The assessment describes in detail how effective the documented measures, the tests performed and the 
processes planned for during operation are in achieving the objectives set for this risk area. Especially, the 
assessment focuses on the extent to which the previously defined, quantitative and qualitative criteria are 
met. Discrepancies are recorded if not all requirements specified in the criteria are met. This also applies to 
requirements that have only been partially met, e.g., where the criteria have not or not always been met. These 
discrepancies do not automatically result in assessment failure, but they must be taken into account in the 
higher-level assessments of the dimensions.
2.3.6  Summary (of a dimension)
Summary is performed on each dimension with a medium or high protection requirement after the AI application 
has been examined in relation to all risk areas under this dimension. This step gathers possible gaps identified 
in the overall assessments of the individual risk areas. The remaining residual risks are assessed in view of the 
protection requirement of the dimension.

`;