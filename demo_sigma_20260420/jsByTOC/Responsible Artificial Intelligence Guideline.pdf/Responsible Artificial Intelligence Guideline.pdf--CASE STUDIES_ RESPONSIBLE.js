var toc_content = `CASE STUDIES: RAI GUIDELINES IN PRACTICE
T
his section briefly summarizes the results of applying 
the Responsible AI Guidelines to two specific 
projects at DIU: Predictive Health and Countering 
Foreign Malign Influence. While the data types and 
objectives of these projects are very different, each 
demonstrates how the RAI Guidelines can provide value in 
practice by ensuring that AI capabilities are responsibly planned, 
developed, and deployed via a process that is both time and 
resource efficient. 
PREDICTIVE HEALTH
The project is a partnership between DIU, the Joint Artificial 
Intelligence Center, the Defense Health Agency, Google, 
Jenoptik, and Enlitic. The purpose of this project is to bring 
advanced machine learning capabilities for medical image 
analysis into military treatment facilities. The project has 
two functional branches: digital pathology and radiology. The 
radiology effort—executed in partnership with Enlitic—aims to 
incorporate algorithms that automate worklist prioritization and 
anomaly detection into clinical workflows for chest X-ray triage, 
head computerized tomography (CT) analysis, and lung nodule 
detection. The digital pathology effort aims to deploy machine 
learning models for detecting and classifying various types of 
cancer (developed by Google) in pathology slides to diagnostic 
Augmented Reality Microscopes developed by Jenoptik. This case 
study focuses on the radiology effort only and highlights the most 
important outputs from applying the RAI Guidelines at each phase 
of the AI lifecycle. 
PLANNING PHASE
The planning exercise for the chest radiography branch of the 
Predictive Health program yielded several important conclusions 
that positively impacted the direction of the project. 
First, as the team evaluated the task, metric, and benchmark, 
it became clear that the benchmark for this system is defined 
by real-world radiology workflows in which radiologists read 
images in the order they are received. Thus, if machine learning 
models could identify those cases most likely to require clinical 
intervention, turnaround time for treating cardiothoracic illness 
could be decreased. This provides a clear and useful quantitative 
metric—turnaround time for treating remarkable disease—that 
should be used to evaluate the system. Keeping this concrete 
metric in mind throughout the program helped the team both 
make actionable programmatic decisions and clearly define the 
value the system was intended to provide.
Second, while evaluating the candidate data, it became 
clear that the standard Digital Imaging Communication in 
Medicine (DICOM) files associated with medical imaging data 
contain relevant metadata on scanning parameters, machine 
type, patient demographics, and other important pieces of 
information that can be used for downstream error analysis and 
harms modeling. Notably, without direct access to a small set 
of example data, it would have been difficult to make this useful 
determination conclusively.
Third, in addition to straightforward identification of radiologists 
as end users and patients as stakeholders, the team observed 
that population health professionals and various actors in and 
around the care environment should also be considered as 
stakeholders in this model development process. Thus, when 
evaluating model outputs, it is important to consider how large-
scale use might affect both of these user groups. Without this 
explicit step in the planning workflow—which was intended to 
be provocative—the team might not have considered the AI 
system’s effects beyond the immediate stakeholders.
The harms modeling step of the planning phase revealed that 
errors in this model could send individuals in need of critical 
care to the back of the chest radiograph reading queue. Domain 
shift8 can be problematic for these models if, for instance, we 
Chest radiograph7
7 Häggström, Mikael. Normal posteroanterior (PA) chest radiograph (X-ray). June 28, 2017. Wikimedia Commons, https://commons.wikimedia.org/wiki/File:Normal_posteroanterior_(PA)_
chest_radiograph_(X-ray).jpg
8 Domain shift occurs when the data used to train an algorithm differs from the data encountered during deployment.
11
R E S P O N S I B L E  A I  G U I D E L I N E S  I N  P R A C T I C E

move deployment to a new patient population with a higher 
percentage of remarkable cases than was represented in the 
training distribution. Some edge cases can also cause errors. 
For instance, the model could accidentally be run on a different 
type of scan (e.g. a CT), and its output would be invalid. If the 
clinician is unaware of this error, worklists could be reordered in 
a counterproductive way. 
To mitigate these potential harms, Enlitic explicitly tests models 
against multiple rare classes, on patients between 18 and 65 
years old, and on all U.S. cases for U.S. models. Their testing 
data generally comes from the last ten years. Enlitic typically 
retrains or re-evaluates a model if the class balance changes by 
more than two standard deviations. Note that participation of 
both the government team, the vendor, and the end users—in 
addition to review of the relevant academic literature—was 
extremely important to this exercise, as each group had specific 
knowledge that contributed to potential harms being more fully 
and completely identified. Many of the items identified during 
harms modeling were directly integrated into the Testing and 
Evaluation (T&E) plan for the program in order to realistically 
mitigate unfavorable outcomes.
Finally, while the process for system rollback is relatively 
straightforward in this case—the radiologists would simply return 
to their pre-capability workflow—a rigorous process orchestrated 
by the Food and Drug Administration (FDA) is required not only to 
certify model performance, but also to handle any errors observed 
in practice. Spending time understanding this process was highly 
valuable to the project team, as it helped not only to define how 
rollback was expected to be handled for this particular system, 
but also provided insight on best practices from other public and 
private sector entities.
DEVELOPMENT PHASE
In the development phase, it became clear that the processes in 
place for FDA approval directly incorporated several of the focus 
areas emphasized by DIU’s RAI Guidelines. These included: 
procedures for system performance measurement, post-
deployment monitoring, individual system output verification, 
and model updates. For instance, the company maintains a 
traceability matrix that keeps track of model versions and 
verification and validation results. If an error is identified in 
practice by a clinician user, a corrective action procedure (CAP) 
is initiated: a root cause analysis is performed, and engineers 
determine a solution and distribute a new standard operating 
procedure along with new model versions as required. The 
FDA is notified about any changes to the model, and a new set 
of weights are deployed to multiple customers via a parameter 
server. Implementation of procedures necessary for maintaining 
patient privacy were considered sufficient for preventing data 
or model manipulation. Through this development process, DIU 
realized that our RAI Guidelines can complement other Ethical 
AI efforts that are ongoing across the U.S. government—as in 
the case of the FDA—while providing a framework that other 
organizations can replicate and adapt for their own needs.
DEPLOYMENT PHASE
Discussions around deployment yielded several useful pieces 
of information that should inform long-term system use. Data 
validation—i.e. ensuring that data provided to the algorithm is 
within appropriate parameters—is, at present, performed by 
the user. This means that the user must be sufficiently trained 
to responsibly use this capability in practice, and cannot rely on 
automated checks to ensure correct application of the models. 
Continuous functional testing and harms assessment processes 
do exist; these aspects of deployment are primarily handled 
through the performance reporting process described above 
that is implemented under the auspices of the FDA. Similar to 
the development phase, the deployment phase of this project has 
leveraged a combination of public and private sector expertise.
OUTCOMES 
This project is ongoing. Important outcomes to date include 
several improvements to sections of the T&E plan that 
incorporate clear baselines from academic literature against 
which algorithmic performance may be tested, explicit 
delineation of demographic and disease-based  subpopulations 
upon which model degradation should be evaluated, and 
evaluation of the value added to clinical workflows. Further, the 
project team was able to learn about and ultimately leverage 
best practices from both government and industry, which will 
improve the team’s ability to manage AI projects in the future.
12
R E S P O N S I B L E  A I  G U I D E L I N E S  I N  P R A C T I C E

The Countering Foreign Malign Influence project is a partnership 
between DIU, DoD, and Quantifind. The project aims to better 
support DoD analysts by leveraging analytics derived from 
commercially available information and publicly available 
information to identify, track, and counter transnational criminal 
groups attempting to mask their identities and activities. It 
primarily makes use of open source data to support construction 
of knowledge graphs that allow for more efficient use of analyst 
time and surface relationships between entities that would be 
difficult for human analysts to identify due to the large volume 
and complexity of data that must be analyzed.
PLANNING PHASE
As the team began to evaluate the task, metrics, benchmark, and 
candidate data for this project, it became clear that this work 
would require a substantial amount of engagement between 
Quantifind and the DoD project team. Building and using a 
knowledge graph involves a large number of different modeling 
and analysis steps including named entity recognition, relation 
extraction, visualization, and risk model application. Thus, the 
RAI Guidelines would need to be applied in a manner that was 
both realistic and useful—that is, sufficiently detailed to address 
each of these modeling steps without hindering the overall 
development process.  
In this context, the team chose to focus on two specific types 
of documentation during their planning phase: model cards, 
initially put forth by Mitchell et al., as a way to document 
machine learning model construction and analysis, and risk 
cards, a type of document Quantifind has created to record and 
explain design choices and assumptions.9 
As part of these adaptive efforts to implement the DIU RAI 
Guidelines, the team defined clear metrics (and ontologies 
where necessary) for each task (e.g. named entity recognition, 
relation extraction, etc.), described each data source and its 
potential strengths and weaknesses in relation to the task, and 
considered how to most effectively and responsibly integrate 
structured and unstructured datasets across multiple languages, 
in multiple formats, and from a wide variety of sources (news 
media, commercial data registers, and a variety of data 
aggregators). A major takeaway from these first two sections of 
the planning phase was that complex machine learning systems 
that leverage many interconnected subcomponents need to 
not only be analyzed from an end-to-end perspective, but 
also broken down into their constituent parts such that each 
component can be planned individually.
Through the provocative process of identifying end users and 
stakeholders and performing subsequent harms modeling, 
the team identified a number of nuanced issues that would be 
important to address during development of the capability. One 
compelling example stems from the fact that Quantifind must 
combine relation extraction across content types (structured and 
unstructured) to determine how an entity (person, company, etc.) 
is related to other entities and activities within the same text. 
The context of the situation being described is a significant factor 
in this determination and that nuance needs to be reflected in 
model outputs. It is crucial, for instance, to distinguish between 
an undercover journalist and genuine members of criminal 
groups even if observable activity is identical. The Quantifind 
team planned to address the potential harms to individuals like 
undercover journalists—who were identified as stakeholders in, 
but not end users of their system—in several ways. 
First, Quantifind aimed to construct models in such a way that 
data and context relevant to this source of potential harms were 
provided as inputs to the model. Second, Quantifind worked 
to include raw data such as the source documents that heavily 
influenced a given model result as part of the system output. The 
first intervention improves the chances that the model will be 
able to address this particular source of harm, while the second 
serves as a human-in-the-loop check that allows an analyst to 
leverage the model to identify relevant source documents, but 
ultimately make a determination using human reasoning. These 
activities established additional mechanisms for measuring and 
quantifying platform performance on nuanced subtasks.
 
In this case, the process for system rollback was relatively 
straightforward: analysts would revert back to the workflow 
they currently use in practice. Importantly, this means that 
analysts must still be trained to perform the analytic tasks that 
Quantifind’s platform is meant to support without leveraging the 
capability, which is an important nuance for long-term planning 
and resourcing on the part of the DoD end user.
It is worth noting that throughout the planning phase, the 
project team used both model cards and risk cards to support 
technical development and communication with government 
partners. These model cards contain a substantial proportion 
of the information that the planning phase is intended to 
elicit. Model cards are referenced in the planning worksheets, 
and provide information about each model in the AI system. 
John Stockton, a co-founder of Quantifind, describes them as 
explaining “what goes in, what goes out, what [the models] do, 
with specific examples.”  Stockton emphasizes the importance 
of people in the field knowing what their tools are and are not 
good at, and understanding how to fit an AI system into an 
overall workflow. Importantly, these model card efforts are a 
consultative process with subject matter experts and technical 
COUNTERING FOREIGN MALIGN INFLUENCE
9 Margaret Mitchell, Simone Wu, Andrew Zaldivar, Parker Barnes, Lucy Vasserman, Ben Hutchinson, Elena Spitzer, Inioluwa Deborah Raji, Timnit Gebru. “Model Cards for Model Reporting.” 
Paper presented at the Conference on Fairness, Accountability, and Transparency, January 29--31, 2019, Atlanta, GA, USA. 220-229. https://arxiv.org/abs/1810.03993
13
R E S P O N S I B L E  A I  G U I D E L I N E S  I N  P R A C T I C E

experts collaborating to make a system that enhances analysts’ 
work.  In this particular application, it was critical for Quantifind 
to collaborate with domain experts and data scientists to make 
standardized, operational definitions that enable abstract 
concepts in foreign malign influence to be expressed as concrete 
machine learning tasks with clearly identifiable performance 
metrics, data requirements, stakeholders, end users, and harms 
modeling emphases.
DEVELOPMENT PHASE
During development, Quantifind continuously tests and 
monitors their models to identify changes over time; this 
simultaneously increases the probability of building an effective 
capability and provides the necessary building blocks for 
post-deployment monitoring. Findings from these iterative 
development processes—as well as continued analysis of how 
adversarial actors could seek to undermine the capabilities 
being developed—are continuously integrated into the model 
cards and risk cards alongside advancements in the underlying 
modeling approach (e.g. leveraging embeddings from cutting 
edge natural language processing models). 
Operational risks identified during the development process 
range from explaining the nuance required to decide which topics 
should be considered risk indicators to evaluating the ability of 
named entity recognition and relation extraction models (trained 
on historical data) to continue to perform well once deployed. 
As Quantifind continues through the development process, the 
updates to model cards and risk cards will ensure that, when the 
system is completed, the performance envelope will be clearly 
established, design choices and assumptions will have been made 
clear for users, and operators will be able to make decisions about 
where and when it would be most appropriate to deploy the 
capability in their operational context.
Furthermore, to create a process by which individual outputs of 
the system can be verified and evaluated, the Quantifind team 
conducts user experience studies to determine appropriateness 
Example knowledge graph describing relationships (e.g. depicts, creator, described by, etc.) between entities (Socrates, Raphael, etc.) in the domain of art history.  
Entities in a graph tend to be referred to as “nodes” while relationships are often referred to as “edges.” 10
10 Wikidata knowledge graph example using SPARQL .October 15, 2019. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Wikidata-knowledge-graph-fuzheado-metobjects-2.png
14
R E S P O N S I B L E  A I  G U I D E L I N E S  I N  P R A C T I C E

of use and understand how the user interface influences trust 
and reduces the probability of misinterpretation. This involves 
obtaining direct feedback on the platform on a regular basis, 
exposing source documents that support any given extracted 
relation, and experimenting with different approaches to display 
model confidence to end users. Importantly, while this process 
is critical to building DoD confidence in the capability, it also 
provides valuable feedback that Quantifind can use to improve 
its commercial offerings.
 
Finally, given that the capability is still in development, the team 
and DoD partner are continuing to discuss who would have 
authority to make changes to the system in practice, and how 
system auditing will take place in the future. It is important to 
note that because development is iterative, it may sometimes 
be necessary to update assumptions about the responsible 
authority and auditing approach as the form factor and intended 
deployment pattern of the capability becomes more concrete.
DEPLOYMENT PHASE
While this project has not yet entered the deployment phase, 
the model cards, risk cards, and other pieces of documentation 
have set the project up well for these conversations. The 
team expects that the material contained in these pieces of 
documentation and the continuous testing protocols refined 
during the development phase will enable clear delineation of 
what needs to be accomplished to perform continuous task 
and data validation, functional testing, and harms assessment 
and quality control. Deployment phase documentation will be 
created as the project approaches this phase of maturity.
OUTCOMES
The Countering Foreign Malign Influence project is progressing 
through the development guidelines and the project team is 
beginning to consider the deployment activities as they move 
from prototyping into production. The team continues to work 
closely with their government counterparts and to integrate 
helpful new practices into their work. The documentation 
described above has been an extremely important outcome for 
this project, as it has not only documented the work Quantifind 
has done to a degree that will be important in enabling real-
world adoption, but it has also identified important issues that 
should be addressed before the system is deployed. Going 
forward, for instance, it will be particularly important to analyze 
the concrete tradeoff between performance gains obtained by 
leveraging larger language models and the potential biases or 
performance irregularities that such models can introduce, as 
well as to continually measure performance at both individual 
model and end-to-end system levels.11
A second valuable outcome of this project was the realization 
that DIU’s RAI Guidelines mirrored many of the processes that 
Quantifind uses internally to integrate Ethical AI principles 
into its work. Quantifind described the question-response 
style of the planning worksheet as providing the “opportunity 
to proactively communicate to the government the existing 
company processes, standards, and known problem areas to 
get them on the table,” and stated that integrating DIU’s RAI 
Guidelines into their process helped to “mediate a good two-way 
dialogue” on RAI.  This two-way dialogue benefits both public 
and private participants and creates a model for collaboration 
that can be replicated across the U.S. Department of Defense.
11 Emily M. Bender, Angelina McMillan-Major, Timnit Gebru, Margaret Mitchell. “On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?” Paper presented at the Conference 
on Fairness, Accountability, and Transparency (FAccT ’21), March 3–10, 2021, Virtual Event, Canada. 610-623. ACM, New York, NY, USA. https://dl.acm.org/doi/pdf/10.1145/3442188.3445922
15
R E S P O N S I B L E  A I  G U I D E L I N E S  I N  P R A C T I C E

This section lays out key lessons DIU learned while implementing 
the RAI Guidelines.
Spend time on metrics: How you measure success determines 
success.
Machine learning algorithms seek to optimize pre-defined 
metrics. Selecting these metrics, and ensuring they align with 
operational goals, is crucial. In the field of AI safety this is called 
the alignment problem—the challenge of making sure that AI 
outcomes align with human goals.12 For example, in the case of 
predictive health, metrics for assessing models could include 
accuracy and weighted F1 score, while the operational metric 
could be turnaround time for treating cardiothoracic illness.
Many of the most discussed ethical issues in AI—such as bias in 
facial recognition—can arise because an algorithm is optimizing 
the wrong metric. The default to accuracy or other high-
level metrics means that algorithms often perform poorly on 
underrepresented groups13 or 
edge cases that may be infrequent 
but incredibly consequential. The 
decision of what metric to use is, 
oftentimes, of ethical consequence. 
For example, a hiring system 
might be optimized to ensure that 
candidates of different backgrounds are all treated according to 
the same standard or that candidates of different backgrounds 
are equally likely to be selected. While these two goals both align 
with intuitive notions of fairness, they are often incompatible in 
practice.14 Consequently, it is important to have explicit alignment 
around what definition of fairness—and similar ethical concepts—
will be adopted for the purposes of a given project.15
Account for technology/task fit: High-risk applications should be 
paired with low-risk technology, and vice versa.
Many applications where AI is used commercially—such as 
music recommendation systems—are inherently low risk: the 
worst case scenario is that a user becomes frustrated or selects 
an option that was not optimal for them. However, errors made 
by AI applications in national security use cases can carry much 
higher costs. 
In order to continuously develop better AI-enabled systems that 
perform effectively in the field, it is critical to calibrate technical 
and operational risks appropriately. The correlation between 
technical and operational risks should be negative. Low-risk 
operational applications where the cost of an error is limited—
such as optimizing aircraft cleaning schedules—are excellent 
testbeds for high-risk technologies. On the other hand, high-risk 
operational applications, where even the smallest error could 
be disastrous, should either make use of low-risk technologies 
with proven track records or require human oversight over every 
model output built into the proposed AI-enabled workflow. 
A good example of defining an AI-enabled workflow for a high-risk 
system occurred in the Predictive Health project that is included 
as a case study in this paper. Because the potential downside of 
misdiagnosis on medical imaging is high, humans will ultimately 
review every image that has undergone analysis using the AI 
system to confirm the X-ray results. Thus, while the AI model can 
make diagnosis more efficient by directing physicians to abnormal 
X-rays more rapidly than would their usual workflow, erroneous 
model output would not cause degradation in the end-to-end 
diagnosis process. 
There are some national 
security contexts that may 
require the pairing of high-risk 
technologies with high-risk 
applications. This need is 
more likely in situations where an AI-enabled system is required 
to address an urgent national security crisis event where, for 
instance, the failure to detect, alert, or respond to an adversarial 
threat results in an immediate negative outcome (such as loss of 
life). In these situations, the application of high-risk technologies 
to high-risk mission areas may be warranted and should be 
considered. However, mission users, policy makers, and decision 
makers should be advised of the potential consequences when a 
high-risk technology is fielded to address a high-risk mission area 
or need. 
Incorporate industry best practices where appropriate: DoD 
organizations can learn from commercial sector advances in ethical AI 
development.
Many of the AI solutions sought by the DoD have parallel 
applications in the private sector, where commercial 
organizations are independently developing ethical frameworks 
to guide and inform their AI development activities.16 In project 
execution, DIU has often found that vendors’ internal processes 

`;