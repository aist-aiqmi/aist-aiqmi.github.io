var toc_content = `89
Dimension: Reliability
7.1  Risk area: reliability in standard cases (SC)
The risk area reliability in standard cases considers all incorrect predictions of an AI application that can 
potentially occur on input data from the application domain and lead to damage. The criteria and measures in 
this risk area address the overall risk of incorrect predictions of the AI component, with the objective of limiting 
it to an acceptable level in the context of the application. In addition to the universal analysis in this risk area, 
specific aspects for avoiding incorrect predictions or errors in the application domain are singled out in the Risk 
area: robustness (RO) and in the Risk area: uncertainty estimation (UE) and covered in more depth.
An important first step in addressing the standard cases is to specify the application domain. To ensure adequate 
quality of the AI application on input data to be used in operation, it must be ensured that the training data 
sufficiently covers the application domain. The correct implementation of training routines and the final trained 
model are another prerequisite for the quality of the AI application.51
The requirements for reliability in standard cases are largely determined by the context in which the AI application 
is applied. Existing requirements for the AI application must first be quantified so they can serve as an objectively 
verifiable criterion. Particularly in the case of qualitative requirements such as “customer satisfaction” or 
“simplifying the work of employees”, the creation of quantitative metrics and target intervals to be used to 
perform tests is always affected by losses. To avoid overfitting to a specific metric, i.e., one-sided optimization 
of the AI component with respect to a single target aspect, as many different performance metrics as possible 
should be considered to assess reliability. To assess whether the target intervals have been met, tests should be 
established that are tailored to the AI application in question and, in particular, to its application context.
7.1.1  Risk analysis and objectives
To perform the risk analysis for the reliability in standard cases risk area, the (permissible) application domain 
must first be specified. Based on this defined domain, a comprehensive assessment is made of the type and 
amount of possible damage that can be caused directly or indirectly by using the AI application for its intended 
purpose.
[RE-R-SC-RI-01] Determining the application area and risk assessment
Requirement: Do
Documentation should be available that addresses the following points in a qualitative and conceptual manner:
Application domain: The application domain is defined as the input data to be expected during operation 
that the AI application is meant to process correctly. This must be described in detail. In addition, the 
application domain should be roughly defined using examples (faulty input data or limiting cases of the 
application domain, including non-semantic corruptions such as noise, are specified in more detail in the Risk 
area: robustness (RO)).  
If possible, the application domain defined here should be distinctly separate from related or supposedly 
similar application domains for which the AI application was not developed and the reliability for which is thus 
not assessed.
Risk analysis: An assessment is made of the risks created by insufficient reliability of the AI application 
when using regular input data. This also describes the potential damage resulting from this insufficiency and, 
if possible, how frequently they can occur. For each identified risk, an assessment must be made as to whether 
the level of associated potential harm is acceptable or not.
51  The description in this section draws heavily on section “3.4 Reliability” in the white paper: Poretschkin, M.; Rostalski, F.; Voosholz, J. et al. 
(2019). Trustworthy Use of Artificial Intelligence. Sankt Augustin: Fraunhofer Institute for Intelligent Analysis and Information Systems IAIS. 
https://www.ki.nrw/wp-content/uploads/2020/03/Whitepaper_Thrustworthy_AI.pdf (last accessed: 06/18/2021)

`;