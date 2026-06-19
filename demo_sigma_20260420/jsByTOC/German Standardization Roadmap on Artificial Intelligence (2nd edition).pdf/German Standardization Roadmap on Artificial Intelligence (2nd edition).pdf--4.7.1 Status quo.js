var toc_content = ` 4.7.1   Status quo
The conformity assessment of medical devices is centrally 
regulated in the EU in the Medical Device Regulation (MDR, 
[350], as of 2021). For the requirements described there, there 
are already a number of standards that cover central aspects 
such as quality management [381], risk management ([351], 
[352]), software life cycle ([353], [354]) or usability ([355], 
[357]) that have been established in the medical technology 
industry for some time. These standards implement general 
requirements for medical devices, but do not include specif­
ic requirements for AI-based systems. In parallel, there are 
horizontal, i.e., cross-industry, sets of rules for implementing 
AI-specific requirements, such as the IEEE 7000 series of 
standards (2021) [10], [11], [12], [13] or those currently being 
developed in ISO/IEC JTC1/SC42. However, these do not con­
sider specific requirements for medical devices and can only 
to a limited extent fill existing gaps regarding the increased 
requirements in medicine.
To nevertheless obtain reliable procedures for the imple­
mentation of AI-based medical devices and their conformity 
assessment, the Association of Notified Bodies for Medical 
Devices in Germany (IG-NB), for example, has published a 
guideline “Artificial Intelligence in Medical Devices” [358], 
which systematically records core requirements for AI-based 
medical devices and thus provides assistance for the con­
formity assessment process. Many notified bodies rely on this 
questionnaire as a key reference when reviewing AI systems. 
Currently, this assumes that an AI-based system always has 
a frozen state when it is evaluated. Further learning after 
commissioning at the customer’s site would consequently 
require a new conformity assessment as soon as substantial 
changes are made to the AI system. There are currently no 
normative or regulatory provisions, which defines substantial 
change in a practical fashion. Likewise in the U.S., there are 
also no specific rules governing the regulation of AI-based 
medical devices. The U.S.-FDA made a proposal for regulating 
AI-based medical devices in April 2019 with [139], but as in 
Europe, it has not yet been translated into concrete guid­
ance documents. Nevertheless, this proposal does include 
AI systems that continue to learn during operation. Based on 
a fixed state, it is already possible to bring AI-based medical 
devices to market. This can be seen, for example, in the list of 
over 300 products now cleared in the USA alone (see [349]). 
There are also systems already on the market in Europe and 
Germany.
The use of AI to improve medical care is one of the appli­
cation areas that the European Union (EU) sees as a key 
application field with great potential [7], [346]. The use of AI 
in medicine for the purpose of diagnosis, screening, thera­
py (recommendation), monitoring, triage, and prognosis of 
diseases occurs both in lightly regulated areas to optimize the 
organization of healthcare facilities, the healthcare system 
as a whole, or general health apps, as well as in the heavily 
regulated areas of medical devices. The issues presented here 
apply analogously on an ongoing basis to in vitro diagnostic.
AI-powered algorithms are capable of analyzing large 
amounts of multimodal data, and in doing so, are able to 
identify patterns within a relatively short period of time that 
humans would have limited ability to do. AI systems can al­
ready outperform human experts in individual medical tasks 
(e.g. skin cancer screening; [347]).
Strict safety requirements must be met before a new product 
can be used on humans, particularly in the case of medical 
devices. This makes the development, implementation, and 
conformity assessment process required for market access 
of AI-based medical devices a complex process with multiple 
regulatory, ethical, technical, and clinical requirements In the 
meantime, a number of medical AI applications have success­
fully undergone such conformity assessment procedures and 
have already been successfully placed on the market (see, for 
example [348], for AI medical devices in the EU and USA, and 
all AI products cleared by the Food and Drug Administration 
(FDA) [349]). For the highly data-driven approaches of AI- or 
ML-based systems, – and compared to non-AI-based systems, 
there are specific aspects that need to be considered in new 
or extended ways in order to successfully pass the conformity 
assessment process: Examples include quality of data and re­
al-time decisions, reliability of results, complexity of models, 
effective integration with existing clinical workflows and IT 
systems.
For the field of AI-based medical devices, generally applicable 
standards and specifications need to be developed, which for 
the most part do not currently exist at the national, European 
or international level. In this context, it is difficult to take a 
generic view that integrates all facets of the application of AI 
in the field of medicine. In the following, three use cases from 
the fields of medical imaging, dentistry and intensive care 
medicine will be discussed in order to derive needs for action 
for the development of suitable procedures and standards.
212 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 4 – KEY TOPICS

of the specified performance requirements, safety and 
patient benefit. Typical evaluation criteria used in other 
fields and still relied upon in many medically oriented 
AI publications generally cannot do this. For example, in 
a diagnostic test, minimizing overlooked diseases (false 
negatives with sometimes serious consequences) usually 
leads to an increase in too many misdiagnosed diseases 
(false positives), which can also cause harm such as pa­
tient uncertainty, unnecessary interventions, and so on. 
It is necessary to find a balance between these opposing 
effects, to include the respective effect of the different 
types of errors in an AI procedure, and ultimately to make 
an evaluation in terms of clinical success and to optimize 
the performance of the overall system. The planned AI 
Act, on the other hand, calls for individual risks to be 
reduced first and foremost. Approaches that map overall 
risk or the risk-benefit ratio are not present in the draft AI 
Act in the form that they should be implemented specifi­
cally for AI-based systems.
→  LIMITED AVAILABILITY/QUANTITY AND HIGH COMPLEXITY 
OF TRAINING DATA: High quality training datasets are 
critical to the performance of an AI system in its anticipat­
ed clinical setting. AI systems may not function properly 
if, for example, they are deployed in different populations 
or in a different context (e.g., different hospital) where 
they may be confronted with different data and circum­
stances than those with which they were trained. In ad­
dition, for some areas, such as surgery, data acquisition, 
e.g., via clinical trials, can be difficult and only a few cases 
can be included. 
Thus, for certain types of treatments, only a very limited 
number of high-quality datasets are available, as these 
must come from dedicated studies in real-world appli­
cation environments. In addition, individual factors and 
multiple aspects of the treatment environment often 
contribute to the success of treatment. When taking such 
variations into account, care must be taken to ensure 
sufficient statistical reliability in all relevant areas (e.g., 
with respect to patient populations, indications, but also 
different physician approaches and different hospital 
environments). In order to realize the added value of AI-
based methods, especially in a more individually orient­
ed treatment up to a personalized medicine, in addition 
to new requirements for the study design beyond clas­
sical-, statistical proofs, ways have to be found to make 
datasets available, e.g. via the generation of synthetic 
data or methods such as federated learning (AI models 
learn from decentralized training data sets, the data 
remain e.g. in the respective hospital). Clear guidelines in 
The planned AI Act will formulate requirements in the EU 
that address AI-specific aspects in a legally binding manner 
in the future. The numerous feedbacks from relevant market 
participants have made it clear that there is a need for further 
harmonization with existing regulatory requirements such as 
the Medical Device Regulation (MDR). If, for example, the con­
tradictions between the MDR and the planned AI Act, are not 
resolved, additional costs must be expected or market access 
will even be denied, since the requirements of the MDR and 
the draft AI Act must be implemented simultaneously in the 
conformity procedure (see also Chapter 1.4 and Annex 13.1, 
Chapter “Exemplary presentation using the example of medi­
cal devices”).
In principle, it should be noted that AI-based medical devices 
have some special features that do not come into play in the 
same way in other areas of application and therefore must 
also be considered separately in standardization. These 
include the following core aspects:
→  HIGHLY PERSONAL DATA: Medical data is usually highly 
personal and often extends into sensitive areas. For Eu­
rope and especially Germany as an important location for 
medical technology, it should be noted that due to exist­
ing data protection rules and additional data protection 
laws at the federal and state levels access to data is more 
heavily regulated compared to countries such as the USA 
or China. On the other hand, the MDR requires compre­
hensive data for demonstrating safety. In the meantime, 
the EU has also taken up this issue, for example, by 
drafting a European Health Data Space (EHDS [359]) to 
enable better access to medical data. Since the EHDS is 
currently still at the planning stage, some points remain 
unresolved. Among other things, this concerns the ques­
tion of how differentiated access to health data can be 
ensured in the future for those directly affected and other 
stakeholders in accordance with the GDPR. This includes 
to what extent and under what conditions a company 
can be granted access to medical data for the purpose 
of developing commercial products. Very important and 
complex sub-issues are the use of anonymized vs. pseu­
donymized medical data and the problem of re-identifi­
cation of personal information for certain types of data 
(especially image data, e.g., cranial imaging, as well as for 
very individual parameters, e.g., persons diagnosed with 
a rare disease in a certain institution) when anonymiza­
tion is actually present.
→  RISK-BENEFIT CONSIDERATION: Before it is placed 
on the market, the decisive target value for a medical 
device is always a clinical evaluation of the fulfilment 
German Standardization Roadmap on Artificial Intelligence – 213
CHAPTER 4 – Medicine

 4.7.2   Requirements and challenges
Basic requirements regarding the implementation of con­
formity assessment for AI-based systems – according to the 
current state of standardization and legislation.
Medical devices, i.e. instruments, devices, software or similar 
with a dedicated medical purpose, are subject to the MDR in 
the EU and thus have to fulfil a wide range of requirements. 
AI-based applications in medical devices mostly fall into the 
software category and are to be classified (according to MDR, 
Annex VIII, Rule 11) as IIa for lower potential harm or as IIb 
up to risk class III for higher potential harm. In these cases, 
the products must be subjected to a conformity assessment 
procedure involving a notified body in accordance with the 
MDR. As a result, they also fulfil the criterion in the planned 
AI Act that leads to a classification in the class of high-risk 
products within the meaning of the AI Act draft (see Art. 6 and 
Annex II there). A large number of AI applications in the field 
of medicine will thus be subject to additional requirements 
of the planned AI Act in the future, in addition to the existing 
requirements of the MDR. Challenges that could arise from 
this in the future from an organizational point of view are pre­
sented in Chapter 1.4 and specifically in Annex 13.1 (clause 
“Exemplary presentation using the example of medical de­
vices”). The focus of this chapter is on the basic requirements 
that an AI-based medical device must fulfil due to the existing 
regulations (especially with regard to the MDR). As described 
above, neither the MDR nor the associated standards contain 
specific requirements for AI-based systems. As a result, man­
ufacturers currently have to make do with using unofficial 
guidelines such as the IG-NB questionnaire [358] to demon­
strate the compliance of an AI-based medical device
To demonstrate the performance and safety of the product 
for the given intended use, corresponding requirements must 
be implemented on both the technical and clinical sides. On 
the clinical side, this includes a comparison with solutions 
that have already been put into operation and tested. In 
addition to the technical comparison of performance, this in­
cludes a positive evaluation in terms of the risk-benefit ratio. 
To this end, it must be defined to what extent additional risks 
(in relation to classical methods or the state of the art) are 
permissible and acceptable, and to what extent these risks 
can at least be offset by a corresponding clinical benefit.
The interaction between the users and the system must also 
be taken into account. This can prove to be complex due to 
interdependencies, especially in the case of AI-based sys­
particular on how to implement quality control are still 
lacking.
→  FORMALIZATION OF PARAMETERS FOR RISK QUANTIFI­
CATION: In the case of AI systems in the medical field, the 
formalization and quantification of risk criteria is natu­
rally subject to particularly high demands. This requires 
a conclusive classification of the risks, which is often 
difficult to achieve with new medical devices as long as 
the products have not yet been used in regular opera­
tion. However, in the case of medical devices, there is a 
requirement that sufficient clinical data (i.e., data from a 
real-world application) must be available or provided via 
clinical trials before the product can be launched on the 
market. For this reason, existing regulations (in particular 
DIN EN ISO 14971:2022 [351]) allow a gradual approach 
in the form of a semi-quantitative assessment of risks for 
pragmatic reasons.
→  VARYING DEGREES OF AUTONOMY AND HUMAN SUPER­
VISION REQUIREMENTS: It should be noted that the pur­
pose of medical devices and the associated risk potential 
can vary greatly depending on the level of autonomy of 
an AI system, from a purely supportive to a largely auton­
omous system. Most AI-based systems currently under 
development or already in use are in the field of diagnos­
tics or radiology (e.g. mammography screening, diagnos­
tics of eye diseases or skin cancer) [348]. For example, in 
diagnostic applications, a human observer could always 
be used as an additional control instance before a final 
decision is made (human-in-the-loop). For other sys­
tems, e.g., an alarm system in an intensive care setting 
or a ventilation system that functions in an automated 
manner, human control would be largely eliminated at 
the highest level of autonomy and the AI would function 
as a closed-loop system. Such aspects would have to be 
systematically included in the risk assessment. To that 
end, the proposed AI Act also includes a requirement 
to integrate human oversight into products so humans 
can intervene in the operation of the system at any time 
However, it does not describe what such oversight can or 
must include. In addition, there is a lack of specifications 
as to what level of explainability AI systems must achieve 
in order to ensure sufficient security.
214 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 4 – KEY TOPICS

`;