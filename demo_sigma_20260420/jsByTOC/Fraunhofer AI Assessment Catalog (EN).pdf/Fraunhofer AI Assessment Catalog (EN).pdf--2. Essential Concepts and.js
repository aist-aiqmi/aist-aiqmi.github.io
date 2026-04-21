var toc_content = `16
Essential Concepts and Methodology for Applying the Catalog
2.  Essential Concepts 
and Methodology for 
Applying the Catalog
17  An AI application that is assessed using the catalog is subsequently referred to as an assessment object. However, this term is not intended to 
exclude the possibility that, in addition to assessing AI applications, the catalog can also be used to develop or improve AI applications.
18  The assessment approach of this catalog is also explained in: Poretschkin, M.; Mock, M.; Wrobel, S. Zur Systematischen Bewertung der 
Vertrauenswürdigkeit von KI-Systemen [Systematic Assessment of the Trustworthiness of AI Systems]. In: D. Zimmer (Editor), Regulierung 
für Algorithmen und Künstliche Intelligenz [Regulating algorithms and Artificial Intelligence] (in German, available now).
The intended use and application context have a significant impact on the quality requirements for an 
AI application. How these quality requirements are implemented to develop a trustworthy AI application also 
depends heavily on the underlying AI technology.
The AI assessment catalog presents a framework for performing trustworthiness assessments in a structured 
manner. An essential prerequisite for applying the catalog is a clearly defined assessment object17, which may 
have to be differentiated from a larger surrounding system. As such, this chapter will first cover technical and 
conceptual foundations regarding the formal structure of an AI application (Section 2.1). It will also explain 
which risks the quality criteria of the AI assessment catalog cover (Section 2.2) and how an AI assessment can be 
conducted based on this catalog18 (Section 2.3).
AI applications are complex constructs in which implemented ML models usually interact with expert systems 
and other classic software components; or which are even designed as hybrid systems that combine structured 
knowledge, for example such as knowledge graphs, with Machine Learning. In addition, AI applications are 
often embedded into a larger surrounding system. However, there is no consistent terminology in the literature 
that clarifies how to differentiate single components as well as the AI application from the surrounding system. 
It is also ambiguous on which technical parts and on which abstract risks the assessment of an AI application 
should focus. Consequently, Section 2.1 provides an overview of the formal structure and the life cycle of an 
AI application, which can be used for alignment within the catalog and aims to create a shared understanding of 
the assessment object.
In terms of content, the AI assessment catalog covers six dimensions of trustworthiness, which are in turn 
classified into different risk areas. This thematic structure, along which quality criteria and risk-mitigating 
measures in particular are organized, is explained in Section 2.2. In addition, there is an overview of the content 
of the various dimensions and risk areas.
The last section of this chapter presents how the catalog can be applied in practice as a basis for assessing 
or auditing. This involves a description of the catalog’s risk-based approach. In particular, there is a detailed 
explanation of the logic and reasoning developed in the assessment catalog, starting with identifying AI risks and 
deriving quality criteria through to performing the final assessment of the AI application.

17
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