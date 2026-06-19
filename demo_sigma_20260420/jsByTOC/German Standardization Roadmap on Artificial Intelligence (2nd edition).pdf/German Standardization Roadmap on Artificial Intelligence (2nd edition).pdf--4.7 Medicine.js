var toc_content = ` 211
4.7 
Medicine

 4.7.1   Status quo
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

`;