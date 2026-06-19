var toc_content = `10. Cross-dimensional Assessment 
of Trustworthiness (AT)
87  For a detailed review of these types of issues, see the Fraunhofer IAIS study “AI Management Systems” (available now), which discusses 
requirements for organizations dealing with AI in terms of governance, management and technical and organizational measures, including 
the current standardization work of ISO/IEC JTC1/SC 42 “Artificial Intelligence”.
The discussion of the individual risk areas in the previous chapters always includes a concluding assessment 
of the measures taken (overall assessment), which argues that these measures are sufficient to meet the 
quality criteria defined on the basis of the risk analysis. However, as explained in the summary of the individual 
dimensions, there may be conflicting objectives between different quality dimensions. The purpose of this 
chapter is to illustrate how these conflicting objectives should be dealt with.
Conflicting objectives between the dimensions can result, for example, from a lack of feasibility of opposing 
requirements or because meeting the requirements of one dimension would increase the risks related to another 
dimension. The complexity of possible quality requirements can be demonstrated in detail using the example of 
an AI application for assessing creditworthiness. A trade-off must be made as early on as the point at which the 
features are selected, i.e., the characteristics contained in the input data on which the AI component operates. 
This is because requirements regarding data minimization and fairness – given that sensitive personality traits 
should not influence decision on creditworthiness in any way – could conflict with the objective of high accuracy, 
which is usually increased by providing as much information (features) as possible about the individual. Another 
conflicting objective regarding the performance could arise from the choice of fairness concept. For example, 
implementing statistical parity when faced with an “unfair” data set goes against a perfect prediction (compared 
to the unfair data set). In addition, conflicting objectives usually arise from the choice of model. For example, 
models that provide reliable results about the creditworthiness of potential customers may not be interpretable 
by experts. In this sensitive application context and after careful consideration, it may be possible to accept 
a decline in performance provided that an interpretable model is used. Last but not least, the intervention 
options during operation and the amount of information provided to employees or customers via the system, 
for example, must also be discussed in this example. The essential requirement here of human supervision 
and autonomy may possibly conflict with security in the sense that options for attacking or manipulating the 
AI application could be opened up or made easier.
It is important to consider all key stakeholder interests in order to achieve a sustainable balance between the 
existing conflicting objectives as well as the associated residual risks. In particular, risks and their effects should 
be considered from two different perspectives, as shown in the following. In the six dimensions, risks are mainly 
examined in terms of potential effects on users, affected persons or the (immediate) environment. However, 
risks such as faulty or even harmful behavior of an AI application also have an impact on the organization 
operating it. For example, an AI application for credit lending involves the risk of discrimination, whereby the 
personal rights of customers are violated as well as the reputation of the credit institution involved is damaged. 
This example demonstrates that AI risks must be considered in an organization’s decision-making process. 
Organizations that use or operate AI applications should establish AI governance for this purpose. They should 
also form organizational structures87 that manage roles and responsibilities regarding AI (risk) management. 
In terms of implementation, this includes having an appropriate process to balance conflicting objectives and 
potential residual risks. In particular, an authority is needed within an organization to confirm the outcome of the 
evaluation process and assume responsibility for the associated residual risks.

162
Cross-dimensional Assessment of Trustworthiness
For this purpose, the High-Level Expert Group on AI suggests an “AI Ethics Review Board”88 to discuss 
responsibilities and ethical practices with respect to the use of AI, as well as processes to perform ongoing 
evaluation of the system.
Thus, the following requirement results from the preceding discussion:
[AT] Cross-dimensional assessment of the trustworthiness of the AI application
Requirement: Do
The AI application must not be deemed trustworthy if the conclusion was made in a dimension with 
a medium or high protection requirement that unacceptable residual risks exist.
If no unacceptable, but still non-negligible residual risks were identified, it is necessary to investigate the 
extent to which these are related to potential conflicting objectives between the dimensions. In particular, 
it is necessary to discuss the extent to which residual risks in one dimension may be unavoidable in order 
to mitigate risks in another dimension. If it is argued that a residual risk cannot or should not be mitigated 
due to a conflicting objective, it is necessary to assess and justify the chosen prioritization in relation to the 
trade‑off in question. In particular, the justification should take into account the protection requirement of the 
dimensions being examined.
 – If it cannot be plausibly justified that the existing residual risks are unavoidable due to the existence of 
conflicting objectives, the AI application should not be classified as trustworthy.
 – If it can be plausibly demonstrated that all existing residual risks must be accepted due to barely avoidable 
conflicting objectives, and the chosen prioritization has been explained in relation to the existing trade-offs, 
it is possible to judge the AI application as trustworthy despite non-negligible residual risks. The judgment 
of whether the AI application is trustworthy must be explained in detail.
The AI application is to be deemed trustworthy if it was concluded in each dimension with a medium or high 
protection requirement that the residual risks are negligible.
88  High-Level Expert Group on AI (HLEG) (July 2020). The Assessment List for Trustworthy Artificial Intelligence (ALTAI). Issued by the 
European Commission. https://digital-strategy.ec.europa.eu/en/library/assessment-list-trustworthy-artificial-intelligence-altai-self-assessment 
(last accessed: 06/21/2021)


`;