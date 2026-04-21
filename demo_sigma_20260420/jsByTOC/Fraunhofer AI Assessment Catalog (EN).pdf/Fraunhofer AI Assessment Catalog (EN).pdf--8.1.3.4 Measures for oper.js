var toc_content = `129
Dimension: Safety and Security
The choice of test scenarios must be documented and justified. In addition, it must be demonstrated that they 
meet the [S-R-FS-CR-02] criteria. If necessary, reference can be made to the corresponding sections in the 
Dimension: Reliability (RE). It must be demonstrated that the test and the test results obtained are sufficient 
to confirm that the AI application behaves appropriately in threat environments and hazardous situations as 
defined in [S-R-FS-CR-01].
Testing of functional safety measures that are not specific to AI and are thus not addressed in this risk 
area should be performed separately and in accordance with existing norms and standards.
8.1.3.4  Measures for operation
[S-R-FS-ME-14] Dealing with accidents
Requirements: Do | Pr
The nature of accidents occurring in connection with the AI application and the way in which they develop 
must be logged and it must be specified how the AI application deals with each accident situation. 
The accidents that have occurred and their cause must be analyzed.
Continuous checks must be performed to determine whether the way the AI application works in an 
accident situation meets the requirements set out in [S-R-FS-RI-01] and whether the measures in this 
risk area contribute sufficiently to meeting the criteria specified in [S-R-FS-CR-01]. If deviations are 
identified, adjustments must be made to the safety measures or the AI component itself (see Dimension: 
Reliability (RE)). These adjustments must be documented.
8.1.4  Overall assessment
[S-R-FS-OA] Overall assessment
Requirement: Do
With reference to the tests performed and documented, it must be demonstrated in a transparent manner 
that, in accordance with [S-R-FS-CR-01], operation of the AI application is ensured under acceptable accident 
risk, in particular also with regard to unknown input data, if this is required.
It must be documented if the measures in this risk area are not feasible or are not sufficient to meet 
criteria [S-R-FS-CR-01] to [S-R-FS-CR-06]. The problems that cannot be addressed here can be considered in 
the overall cross-dimensional assessment.
If safety measures from this risk area and detection measures from the Risk area: intercepting errors at 
model level (IM) under the reliability dimension complement each other, it must be documented that the 
tests only correlate weakly with each other, so that the risk of simultaneous or interrelated failure can be 
considered manageable.
Furthermore, functional safety standards or norms must be documented that are used in addition to this 
assessment catalog to test the AI application.

`;