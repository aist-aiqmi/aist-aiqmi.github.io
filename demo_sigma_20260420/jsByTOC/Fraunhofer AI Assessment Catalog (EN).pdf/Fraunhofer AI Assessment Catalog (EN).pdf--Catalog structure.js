var toc_content = `Catalog structure
Chapter 2 explains how the AI assessment catalog can be concretely used to assess the trustworthiness of 
AI applications. In doing so, it first introduces the basic concepts and important terms and then explains the risk-
based methodology developed in the catalog in detail. According to this methodology, the trustworthiness of 
AI applications is assessed in terms of the six dimensions fairness, autonomy and control, transparency, reliability, 
safety and security and data protection. The third chapter presents the AI profile, which is used to provide 
an overview of the AI application and narrow down the assessment object. The following chapters provide 
a guideline that can be used to assess AI risks in terms of the six dimensions of trustworthiness in a structured 
manner. The final chapter describes the procedure for performing the final cross-dimensional assessment.
16  The European Commission’s requirements for technical documentation are described in Annex IV of the draft regulation. The AI assessment 
catalog covers the contents required in points 1, 2, 3, 5 and partly in point 8 of Annex IV.

16
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

`;