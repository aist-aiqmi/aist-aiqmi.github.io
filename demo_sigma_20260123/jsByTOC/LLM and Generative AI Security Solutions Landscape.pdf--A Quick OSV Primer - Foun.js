var toc_content = `| GenAIƬ LLMSecOps and SecķriĴř SolķĴion Landscape
LLM Development and Consumption Models
One of the ﬁrst considerations for an organization is deciding upon the approach to leveraging
LLM capabilities based on the type of application and goals for the projectƫ TodayƬ developers have
a choice of two primary deployment models when implementing LLMǀbased applications and
systemsƫ
CīeaĴe a Neœ Mďdelƭ
The training process for custom LLMs is intensiveƬ often involving
domainǀspeciﬁc datasets and extensive ﬁneǀtuning to achieve desired performance levelsƫ This
approach is more akin to MLOps building ML models from the ground upƬ with detailed data
analysisƬ collection formattingƬ cleaningƬ and labelingƫ One of the beneﬁts of this approach is that
you know the lineage and source of the data the model is built on and can attest directly to its
validity and ﬁtƫ HoweverƬ a major downside is the resourcesƬ costƬ and expertise necessary to buildƬ
trainƬ and verify a model that meets the project objectivesƫ Custom LLMs provide tailored solutions
optimized for speciﬁc tasks and domainsƬ offering higher accuracy and alignment with an
organizationǑs speciﬁc needsƫ
CďnĮķme and CķĮĴďmiše EŘiĮĴing
MďdelĮƭ Preǀtrained ƺfoundationƻ modelsƬ whether
selfǀhosted or offered as a serviceƬ such as with ChatGPTƬ Bert and others on the other hand
provide a more accessible entry point for organizationsƫ These models can be quickly deployed via
APIsƬ allowing for rapid solution validation and integration into existing systemsƫ The LLMOps
process in this scenario emphasizes customization through ﬁneǀtuning with speciﬁc datasetsƬ
ensuring the model meets the applicationǑs unique requirementsƬ followed by robust deployment
and monitoring to maintain performance and securityƫ
Version 1ƫ0
10 of 34

| GenAIƬ LLMSecOps and SecķriĴř SolķĴion Landscape
LLMOps and LLMSecOps Defined
Having a common view of typical LLM application architecturesƬ including agentsƬ modelsƬ
LLMsƬ and the ML application stackƬ is crucial for deﬁning and aligning the application stack and
security modelƫ
ƺﬁgureƭ LLMOps related Operations Process for DataƬ Machine Learning and DevOpsƻ
A Q˨ick Oˣ˦ P˥iˠe˥ - Fˢ˨ˡda˧iˢˡ fˢ˥ LLMOˣ˦
DevOpsƬ which emphasizes collaborationƬ automationƬ and continuous integration and
deployment ƺCIƸCDƻƬ has laid the groundwork for eŨcient software development and operationsƫ By
streamlining the software development lifecycleƬ DevOps enables rapid and reliable delivery of
applicationsƬ fostering a culture of collaboration between development and operations teamsƫ
DataOps builds on DevOpsƬ where data pipelines are managed with similar automationƬ version
controlƬ and continuous monitoringƬ ensuring data quality and compliance across the data lifecycleƫ
MLOps also extends the DevOps principles to machine learningƬ focusing on the unique challenges
of model developmentƬ trainingƬ deploymentƬ and monitoringƫ Utilizing DevOps as a foundation
ensures that both DataOps and MLOps inherit a robust infrastructure that prioritizes eŨciencyƬ
scalabilityƬ securityƬ and faster innovation in dataǀdriven and machine learning applicationsƫ
MLOps and DataOps are foundational to LLMOps because they establish the critical processes
and infrastructure needed for managing the lifecycle of large language models ƺLLMsƻƫ DataOps
ensures that data pipelines are eŨciently managedƬ from data collection and preparation to
storage and retrievalƬ providing highǀqualityƬ consistentƬ and secure data that LLMs rely on for
training and inferenceƫ MLOps extends these principles by automating and orchestrating the
machine learning lifecycleƬ including model developmentƬ trainingƬ deploymentƬ and monitoringƫ
Version 1ƫ0
11 of 34

`;