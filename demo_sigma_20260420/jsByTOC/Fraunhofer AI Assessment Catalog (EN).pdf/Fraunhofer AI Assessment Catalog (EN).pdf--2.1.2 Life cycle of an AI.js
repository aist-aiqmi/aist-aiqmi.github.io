var toc_content = `20
Essential Concepts and Methodology for Applying the Catalog
2.1.2  Life cycle of an AI application
In addition to its structure, the life cycle of an AI application is a key starting point for identifying and mitigating 
AI risks and should therefore be examined fully in a quality assessment. Data is crucially important in the life 
cycle of an AI application based on Machine Learning, as the functionality of the application is usually derived 
directly from data. In particular, the life cycle of an AI application is more closely related to data mining processes 
than to developing and operating conventional IT systems (completely designed and programmed by humans). 
The CRISP-DM standard20, which sees data mining as a process ranging from setting goals and selecting 
data to modeling and deployment, can essentially also be applied to the often more complex model classes of 
the AI applications examined here, such as deep neural networks. Figure 2 shows a simplified version of this 
process.
▪Design of AI component
▪Optimization (training)
▪Testing
▪Design of embedding
▪Monitoring
▪Adjustment/Feedback
▪Further learning
▪Concept/Model drift
▪Acquisition, selection
▪Labeling
▪Pre-processing 
(cleansing, enriching, etc.)
Data
Development
Operation
Figure 2:  Overview of the life cycle of an AI application
The selection and processing of data in particular plays a critical role, since characteristics of an AI application 
(e.g., the learned model weights) and thus also its functionality stem from data-driven optimization. Compared 
to original data mining, complex Machine Learning methods often replace manual data pre‑processing, such as 
the process of defining relevant data features. This is why data‑related risks must be given more attention and 
suitable measures to meet requirements regarding the data should be demonstrated in a quality assessment. 
For example, these measures can relate to fairness, in particular the risk of inherent bias, or to the quality and 
suitability of data, for example in terms of sufficient coverage or the quality of labels.
Development is the second phase of the life cycle and involves aspects of design, training and testing. In relation 
to this phase, the assessment catalog distinguishes between AI component and its embedding as described 
in Section 2.1.1. Targeted design can favor or help achieve desired quality characteristics of an AI application. 
For example, this could involve selecting a certain model architecture or selecting embedding components that 
perform consistency checks on outputs of the AI components or establish redundancy to a certain degree in 
the event that the AI component fails. In addition, the ML model training, which is explained in Figure 3 using 
a simple standard workflow, has an essential impact on the quality of AI applications. Training is the procedure 
of creating a model using Machine Learning. For this purpose, the model parameters, also called weights, are 
determined by optimization on the basis of training data and fixed hyperparameters. Training data is input 
into the model following what is usually a random initialization of the weights. The results calculated with this 
data are subsequently evaluated using a loss function, in the case of supervised ML techniques using the labels 
(ground truth) associated with the data. The loss function measures the discrepancy between the model results 
and the ground truth. The value of the loss function is optimized iteratively by adjusting the weights. Because the 
hyperparameters can strongly influence the weights resulting from the optimization, an additional (validation) 
data set should be used to compare which hyperparameter configuration is most suitable for solving the given 
problem. In addition to the loss function, which is what is being optimized, other performance metrics should 
be used to evaluate the ML model. On the whole, the quality of the AI component depends on various factors, 
20  For a detailed description of the Cross-Industry Standard Process for Data Mining (CRISP-DM), see: Shearer, C. (2000). The CRISP-DM model: 
The new blueprint for data mining. Journal of Data Warehousing, 5(4):13–22.

21
Essential Concepts and Methodology for Applying the Catalog
such as the database choice, the learning algorithm including the loss function as well as the hyperparameters. 
Accordingly, testing is important for ensuring the quality of the AI component and test data should be selected 
carefully. This data must not match the training or validation data, as the ML model was previously optimized for 
this. Tests can both evaluate the behavior of the AI application with respect to the input data anticipated during 
operation and specifically look for weaknesses in the model.
AI application
Learning 
algorithm
Choice 
of hyper-
parameters
Input
(Curated) training data
Loss function
Performance 
metric
Labels
ML model
AI component
Pre-processing
Post-processing
Inference
Output of 
AI component
Figure 3:  Training the ML model of an AI application.
When in operation, there are two different perspectives that should be covered in an assessment. Users and 
affected persons should be given the possibility to intervene and provide feedback. Moreover, adequate 
precautions must also be taken to deal with the risks of concept drift and model drift that are associated with 
a data-driven approach of AI applications. Concept drift is the risk that the properties of the input data or 
external conditions change and the AI application therefore no longer meets the requirements during operation. 
Model drift, by contrast, relates to a circumstance where the AI application (more specifically the ML model) 
continues to learn during operation and no longer meets the requirements due to the resulting change.

22
Essential Concepts and Methodology for Applying the Catalog
2.2  Dimensions of trustworthiness
While ML technologies establish a wide range of opportunities, they also bear new risks due to their complexity, 
dynamics and lack of transparency. In particular, numerous AI-specific risks are not covered by the existing 
assessment and certification schemes for conventional IT systems. The AI assessment catalog provides an 
approach for evaluating AI applications in a structured manner, while not aiming to rewrite or replace existing 
assessment procedures or standards for (conventional) IT systems, for example on IT security. In fact, the 
AI assessment catalog aims to serve as a compatible supplement to existing assessment and certification 
processes with the objective of closing the gap described. The main focus of the AI assessment catalog is on the 
AI-specific risks of AI applications.
The question of which AI-specific risks an AI assessment should cover and which criteria should be used to 
assess them has long been the subject of intense societal and scientific debate. From the various contributions to 
this discussion – including the especially prominent key requirements of the HLEG21 – six topics have emerged, 
which will be referred to below as dimensions of trustworthiness: fairness, autonomy and control, transparency, 
reliability, safety and security and data protection.
These six dimensions of trustworthiness form the fundamental structure of the AI assessment catalog and 
primarily serve as a systematic and granular approach to deriving quality criteria. The descriptions of the 
dimensions in this catalog are based on the white paper “Trustworthy Use of Artificial Intelligence”22, which was 
compiled through interdisciplinary dialogue between computer scientists, lawyers and philosophers. We refer to 
the white paper for a comprehensive discussion of the six dimensions.
The core focus of each of the six dimensions is on the risks that stem from the Machine Learning technique 
implemented in the AI application or that are at least directly related to its functionality. In addition to these risks 
that arise as a result of the use of Machine Learning, also such risks are addressed by the catalog that are already 
covered in existing standards, but which become much more significant as a result of the use of AI, for example 
data protection risks. Regarding the latter, the assessment catalog elaborates on the novel risk factors that exist 
due to the use of ML and provides AI-specific measures for mitigating them in addition to the (classic) measures 
already known. According to the catalog’s focus on AI-specific risks, code quality or hardware security analyses, 
for example, are explicitly not included in the assessment catalog. Furthermore, in the safety and security 
dimension, safety and security risks that stem from the embedding, or that even exist during error-free operation 
of the AI application, are not examined, as they are not AI-specific.
The assessment catalog further divides the dimensions of trustworthiness into risk areas. The purpose of these 
risk areas is to group related risks within a dimension that can be mitigated by similar measures. Thus, the risk 
areas differ in terms of factors such as the failure causes or attack scenarios examined. With respect to the 
reliability dimension, for example, issues related to the performance of the AI application under normal operating 
conditions, to the handling of potential disturbances as well as to the continual learning of the ML model are 
addressed in separate risk areas. In particular, the quality criteria for assessing trustworthiness are derived at the 
level of risk areas.
21  The High-Level Expert Group on AI (HLEG) is an expert commission on Artificial Intelligence set up by the European Commission.  
It has formulated seven key requirements for trustworthy AI, see: High-Level Expert Group on AI (HLEG). (April 2019). Ethics Guidelines 
for Trustworthy AI. European Commission. https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai (last accessed: 
6/21/2021).
22  Poretschkin, M.; Rostalski, F.; Voosholz, J. et al. (2019). Trustworthy Use of Artificial Intelligence. Sankt Augustin: Fraunhofer Institute 
for Intelligent Analysis and Information Systems IAIS. https://www.ki.nrw/wp-content/uploads/2020/03/Whitepaper_Thrustworthy_AI.pdf 
(last accessed: 06/18/2022) Note: The white paper refers to the dimensions as “audit areas”.

`;