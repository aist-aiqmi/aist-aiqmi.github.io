var toc_content = `17
Essential Concepts and Methodology for Applying the Catalog
2.1  Assessment object
This section provides a general, and thus highly abstract, description of the formal structure of an AI application 
by splitting it into various functional components. These can vary in complexity or scope depending on the nature 
of the actual application. In addition to this functional perspective, the life cycle of such an application is also 
examined in Section 2.1.2. Both perspectives are holistically portrayed within the catalog by different categories 
of measures, see Section 2.3.4. Here, the distinction between embedding and AI component relates to the 
structure of the application, while data and operation roughly refer to different stages of the life cycle. As with 
all complex systems, these categories are not necessarily clear-cut; for example, data can also be recorded during 
operation.
2.1.1  Structure of an AI application
A first step in the discussion and assessment of an AI application is to specify its formal structure as well as to 
define the assessment object. While the AI Profile (PF) provides an initial overview of the AI application, more 
detailed documentation of the assessment object is requested as the assessment progresses, in particular with 
regard to the reliability dimension. The purpose of this section is to create a shared understanding of terms 
relating to the structure of an AI application.
The AI assessment catalog is focused on AI applications that are based on Machine Learning (ML). While neural 
networks in particular play a major role in the field of ML today, the assessment catalog is not applicable solely 
to this technology. The assessment catalog can also be used to examine other methods, such as decision trees 
or support vector machines, which may even meet transparency or security requirements better than neural 
networks.
The ML model forms the core of the AI component, which is further extended by pre- and post-processing 
steps relating to the inputs and outputs of the ML model. The ML model and AI component are mathematical 
objects that can serve as the basis for a functionality, meaning an input-output mapping – for example, 
in order to detect objects or assess job applicants. In real-world use cases, the input-output mapping is usually 
performed through interactions with other (embedding) components which, for example, record or monitor 
the inputs by means of a rule-based (non-ML) expert system. The input-output mapping performed in this way 
in a given application context is referred to in this catalog as an AI application. Figure 1 depicts the concept of 
an AI application and its functional structure that represents the various input data processing steps; these are 
explained in more detail in the following section.
If an AI application is part of a larger system that is not entirely based on AI technologies, its boundaries within 
this surrounding system must be clearly defined. For example, ML-based object recognition (AI application) can 
be integrated into an autonomous vehicle, into a drone or into a site surveillance system (as larger system). 
Defining an AI application within a surrounding system is largely based on its functionality. For example, 
regarding an AI-based pedestrian detection system (AI application) in an autonomous car (larger system), the 
software modules that perform consistency checks on the outputs of the AI component should be seen as part of 
the AI application; however, other components that perform the overall planning of a driving route, for instance, 
would not be.

18
Essential Concepts and Methodology for Applying the Catalog
Interface
Interface
ML model
EEmbedding
AI component
Pre-processing
Post-processing
Inference
User or other components of 
the larger surrounding system
AI application
Software 
component 
of the 
embedding
Software 
component 
of the 
embedding
User or other components of 
the larger surrounding system
Input
Monitoring
Output of 
AI component
Output of 
AI application
Monitoring
Input
Monitoring
Figure 1:  Formal structure of an AI application
(ML) model: The ML model is a mathematical, abstract object that was created by a Machine Learning 
technique and serves to solve a task in the sense of creating an input-output relation. For example, regarding 
a neural network, the model consists of a list of hyperparameters, learned parameters and a description of how 
they interact when operating (architecture), among others. The ML model provides the functional basis of the 
AI application. For instance, a model can serve as the basis for performing a classification task, where the input 
is the object to be classified and the model output characterizes its class. In some cases, such as in generative 
models, the input (usually random numbers) may be of secondary importance to the actual task to be solved.
AI component: The AI component consists of the ML model and the implemented (model-specific) methods for 
data pre-processing and post-processing of the model outputs. Thus, the AI component is also a mathematical 
object.
Note: For simplification, the assessment catalog assumes that, unless explicitly stated otherwise19, an 
AI application only contains one AI component.
19  For example, ensemble methods can be considered a single ML model and thus explicitly fall within the scope of the assessment catalog.

19
Essential Concepts and Methodology for Applying the Catalog
Embedding: The AI component is usually linked to additional (classic) software modules and technical 
components to store data or to implement physical reactions to AI component outputs, for instance. Embedding 
is the term used to describe the entirety of these surrounding components that relate directly to the way the 
AI component functions and operates. These components can include software modules that activate the 
AI component and further process its results. In particular, classic components that make the functionality of the 
AI component visible to the outside world and enable interaction (see Interface) are part of the embedding. 
In addition, embedding software modules can also help detect and intercept an AI component failure (referred 
to as monitoring in Figure 1).
Interface: The interface is the part of the embedding that enables the AI application to interact with the outside 
world, such as users or other components within a larger surrounding system. The interface offers various 
interaction options depending on the function and design of the AI application. Usually, these options involve 
recording input data (e.g., requests from users) and communicating the results/outputs of the AI component to 
the outside world or making them available for retrieval.
AI application: The AI application is the input-output mapping in a given application context based on the 
implemented AI component. Importantly, the AI assessment catalog does not take an isolated view of the 
ML model or the AI component. In fact, the catalog examines whether the individual processing steps performed 
up to the results being generated by the AI component through interaction with other components of the 
embedding are meaningful and appropriate for the given application context. For example, it assesses whether 
they are sufficiently free of errors and discrimination or secure against attacks and manipulation. Thus, the 
assessment object of the catalog is not predominantly the mathematical concepts underlying the AI component, 
but the functionality i.e., the input-output mapping, that is performed based on the AI component (as 
a functional basis) in a given application context. An AI application can be a standalone system that, for example, 
communicates directly with users, or it can be integrated into a larger (IT) system or product.
Note 1: In principle, the AI application is an abstract assessment object. However, usually (and particularly in 
the case of complex neural networks), it cannot be considered in isolation from how it is implemented, which is 
to some extent physical too. In particular, the testing measures described in the assessment catalog require that 
the AI application is implemented or even installed and functional in the actual application environment or end 
product. However, the focus of the AI assessment catalog is not on the challenges of implementation, but on 
whether the AI component is a suitable and trustworthy basis for realizing the desired functionality.
Note 2: Unless explicitly stated otherwise, this assessment catalog does not consider AI applications which are 
based on multiple AI components and particularly not on multiple structurally different ML models. While the 
AI assessment catalog can be used to examine different AI components separately, the catalog does not address 
how they interact.

20
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

`;