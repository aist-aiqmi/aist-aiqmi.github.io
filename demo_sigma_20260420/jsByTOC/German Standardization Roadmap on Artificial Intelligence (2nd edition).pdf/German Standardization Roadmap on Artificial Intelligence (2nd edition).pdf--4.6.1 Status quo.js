var toc_content = `system goes live. For the evaluation e.g. complex simula­
tions or pentests  92 can be used
→  Deployment and scaling phase: Here, the AI systems are 
adapted for practical use and commissioning, which may 
include further optimizations, e.g. with regard to im­
proved scaling or efficiency.
→  Operational phase, including maintenance: In principle, it 
would be conceivable to carry out further training phases 
in the operational phase as well (so-called self-learning or 
online learning systems). However, the resulting changes 
in system behaviour are completely beyond the scope of 
a safety analysis and the associated safety verifications 
compared to the current state of the art, so that certifica­
tion or type approval of such systems is currently not pos­
sible. This type of AI system is therefore not considered in 
this chapter.
→  Retirement: If the AI model and/or training data are to 
be protected against privacy attacks on the model and/
or data even after regular operation (e.g., for privacy or IP 
reasons), an orderly decommissioning that permanently 
prevents public access to the model and data is required. 
Otherwise, this life cycle phase has no AI-specific rele­
vance.
Due to changing requirements, due to weak points of the 
system becoming known during operation, or due to the goal 
of continually improving a system, the above-mentioned 
phases are run through cyclically (continually in the sense 
of a continual development process). There is a continuous 
transition ranging from infrequent, carefully planned and 
executed updates with, if necessary, significant changes to 
the previous version, through to very short update cycles, 
and to self-learning or online-learning systems. While discrete 
updates are now indispensable for many systems and are 
carried out regularly, self-learning systems (i.e., systems that 
adapt in the field based on incoming observations) have not 
yet been used in safety-critical applications such as mobil­
ity, despite a great deal of media attention (see also above 
regarding certifiability).
92  Penetration tests, i.e. controlled cyber attacks with the aim of 
­identifying vulnerabilities.
 4.6.1   Status quo
 4.6.1.1  
Fundamental, qualitatively novel 
properties of AI technology
On the one hand, the use of AI technology opens up new op­
portunities and enables applications that cannot be realized 
with classic technologies, or are realizable only to a very limit­
ed extent. On the other hand, the complexity of AI systems 
and their life cycles leads to qualitatively new problems and 
risks [320], [83]. As described above, the development of AI 
systems usually requires a data-driven approach, and the 
developer has no direct control over the learned parameters 
of the AI system and the input/output correlations implied 
by them. As a result, operational AI systems have black-box 
properties, and their modes of operation (and thus also 
possible errors) are not directly apparent to the developers 
and users. The properties of the functions implicitly encoded 
using machine learning and data depend significantly on the 
underlying training dataset. However, sufficient quality as­
surance of training data is a non-trivial task, especially when 
the data come from external sources. If pre-trained models 
are used, as is often practiced, there may be hard-to-detect 
vulnerabilities in the AI system that often survive further 
post-training sessions unscathed. Many AI systems also have 
a huge input and parameter space. The camera input of a 
4K camera with a high number of colour channels can be 
mentioned here as an example. As a result of this complex­
ity, formal verification methods are not available for many 
practically deployed AI systems, and alternative empirical 
validation methods can only cover a fraction of the parame­
ter space for practical reasons. Thus, an AI system does not 
necessarily fulfil the programmer’s intent, and there is no 
guarantee of what has been learned by the system, nor any 
certainty regarding the trustworthiness aspects listed at the 
beginning (cf. Chapter 4.6) – such as what performance the 
system will achieve in practice. Conversely, there is often no 
or only a limited explanation of how an AI system works for 
humans. Regarding the various trustworthiness aspects of AI 
systems, the technical understanding is currently incomplete, 
including functionality, integrity, reliability, safety, and gener­
alizability, and further extensive R&D efforts are needed.
German Standardization Roadmap on Artificial Intelligence – 191
CHAPTER 4 – Mobility

`;