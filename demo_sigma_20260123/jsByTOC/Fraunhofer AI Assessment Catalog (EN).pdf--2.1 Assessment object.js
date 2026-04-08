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

`;