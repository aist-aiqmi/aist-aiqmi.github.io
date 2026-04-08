var toc_content = `ISO/IEC FDIS 42001:2023(E)
Annex B 
(normative) 
 
Implementation guidance for AI controls
B.1  General
The implementation guidance documented in this annex relates to the controls listed in Table A.1. It 
provides information to support the implementation of the controls listed in Table A.1 and to meeting 
the control objective, but organizations do not have to document or justify inclusion or exclusion of 
implementation guidance in the statement of applicability (see 6.1.3).
The implementation guidance is not always suitable or sufficient in all situations and does not always 
fulfil the organization’s specific control requirements. The organization can extend or modify the 
implementation guidance or define their own implementation of a control according to their specific 
requirements and risk treatment needs.
This annex is to be used as guidance for determining and implementing controls for AI risk treatment 
in the AI management system defined in this document. Additional organizational and technical 
controls other than those included in this annex can be determined (see AI system management risk 
treatment in 6.1.3). This annex can be regarded as a starting point for developing organization-specific 
implementation of controls.
B.2  Policies related to AI
B.2.1  Objective
To provide management direction and support for AI systems according to business requirements.
B.2.2  AI policy
Control
The organization should document a policy for the development or use of AI systems.
Implementation guidance
The AI policy should be informed by:
—  business strategy;
—  organizational values and culture and the amount of risk the organization is willing to pursue or 
retain;
—  the level of risk posed by the AI systems;
—  legal requirements, including contracts;
—  the risk environment of the organization;
—  impact to relevant interested parties (see 6.1.4).
The AI policy should include (in addition to requirements in 5.2):
—  principles that guide all activities of the organization related to AI;
© ISO/IEC 2023 – All rights reserved 
﻿
﻿
21

ISO/IEC FDIS 42001:2023(E)
—  processes for handling deviations and exceptions to policy.
The AI policy should consider topic-specific aspects where necessary to provide additional guidance or 
provide cross-references to other policies dealing with these aspects. Examples of such topics include:
—  AI resources and assets;
—  AI system impact assessments (see 6.1.4);
—  AI system development.
Relevant policies should guide the development, purchase, operation and use of AI systems.
B.2.3  Alignment with other organizational policies
Control
The organization should determine where other policies can be affected by or apply to, the organization’s 
objectives with respect to AI systems.
Implementation guidance
Many domains intersect with AI, including quality, security, safety and privacy. The organization 
should consider a thorough analysis to determine whether and where current policies can necessarily 
intersect and either update those policies if updates are required or include provisions in the AI policy.
Other information
The policies that the governing body sets on behalf of the organization should inform the AI policy. 
ISO/IEC 38507 provides guidance for members of the governing body of an organization to enable and 
govern the AI system throughout its life cycle.
B.2.4  Review of the AI policy
Control
The AI policy should be reviewed at planned intervals or additionally as needed to ensure its continuing 
suitability, adequacy and effectiveness.
Implementation guidance
A role approved by management should be responsible for the development, review and evaluation 
of the AI policy, or the components within. The review should include assessing opportunities for 
improvement of the organization’s policies and approach to managing AI systems in response to changes 
to the organizational environment, business circumstances, legal conditions or technical environment.
The review of AI policy should take the results of management reviews into account.
B.3  Internal organization
B.3.1  Objective
To establish accountability within the organization to uphold its responsible approach for the 
implementation, operation and management of AI systems.
B.3.2  AI roles and responsibilities
Control
Roles and responsibilities for AI should be defined and allocated according to the needs of the 
organization.
 
﻿
© ISO/IEC 2023 – All rights reserved

﻿
22

ISO/IEC FDIS 42001:2023(E)
Implementation guidance
Defining roles and responsibilities is critical for ensuring accountability throughout the organization 
for its role with respect to the AI system throughout its life cycle. The organization should consider AI 
policies, AI objectives and identified risks when assigning roles and responsibilities, in order to ensure 
that all relevant areas are covered. The organization can prioritize how the roles and responsibilities 
are assigned. Examples of areas that can require defined roles and responsibilities can include:
—  risk management;
—  AI system impact assessments;
—  asset and resource management;
—  security;
—  safety;
—  privacy;
—  development;
—  performance;
—  human oversight;
—  supplier relationships;
—  demonstrate its ability to consistently fulfil legal requirements;
—  data quality management (during the whole life cycle).
Responsibilities of the various roles should be defined to the level appropriate for the individuals to 
perform their duties.
B.3.3  Reporting of concerns
Control
The organization should define and put in place a process for employees of the organization to report 
concerns about the organization’s role with respect to an AI system throughout its life cycle.
Implementation guidance
The reporting mechanism should fulfil the following functions:
a)  options for confidentiality or anonymity or both;
b)  available and promoted to employed and contracted persons;
c) 
staffed with qualified persons;
d)  stipulates appropriate investigation and resolution powers for the persons referred to in b);
e)  provides for mechanisms to report and to escalate to management in a timely manner;
f) 
provides for effective protection from reprisals for both the persons concerned with reporting and 
investigation (e.g. by allowing reports to be made anonymously and confidentially);
g)  provides reports according to 4.4 and, if appropriate, e); while maintaining confidentiality and 
anonymity in a), and respecting general business confidentiality considerations
h)  provides response mechanisms within an appropriate time frame.
© ISO/IEC 2023 – All rights reserved 
﻿
﻿
23

ISO/IEC FDIS 42001:2023(E)
NOTE 
The organization can utilize existing reporting mechanisms as part of this process.
Other information
In addition to the implementation guidance provided in this clause, the organization should further 
consider ISO 37002.
B.4  Resources for AI systems
B.4.1  Objective
To ensure that the organization accounts for the resources (including AI system components and assets) 
of the AI system in order to fully understand and address risks and impacts.
B.4.2  Resource documentation
Control
The organization should identify and document relevant resources required for the activities at given 
AI system life cycle stages and other AI-related activities relevant for the organization.
Implementation guidance
Documentation of resources of the AI system is critical for understanding risks, as well as potential AI 
system impacts (both positive and negative) to individuals and societies. The documentation of such 
resources (which can utilize, for instance, data flow diagrams or system architecture diagrams) can 
inform the AI system impact assessments (see B.5).
Resources can include, but are not limited to:
—  AI system components;
—  data resources, i.e. data used at any stage in the AI system life cycle;
—  tooling resources (e.g. AI algorithms, models or tools);
—  system and computing resources (e.g. hardware to develop and run AI models, storage for data and 
tooling resources);
—  human resources, i.e. people with the necessary expertise (e.g. for the development, sales, training, 
operation and maintenance of the AI system) in relation to the organization’s role throughout the AI 
system life cycle.
Resources can be provided by the organization itself, by its customers or by third parties.
Other information
Documentation of resources can also help to determine if resources are available and, if they are not 
available, the organization should revise the design specification of the AI system or its deployment 
requirements.
B.4.3  Data resources
Control
As part of resource identification, the organization should document information about the data 
resources utilized for the AI system.
 
﻿
© ISO/IEC 2023 – All rights reserved

﻿
24

ISO/IEC FDIS 42001:2023(E)
Implementation guidance
Documentation on data should include, but is not limited to, the following topics:
—  the provenance of the data;
—  the date that the data were last updated or modified (e.g. date tag in metadata);
—  for machine learning, the categories of data (e.g. training, validation, test and production data);
—  categories of data (e.g. as defined in ISO/IEC 19944-1);
—  process for labelling data;
—  intended use of the data;
—  quality of data (e.g. as described in the ISO/IEC 5259 series2));
—  applicable data retention and disposal policies;
—  known or potential bias issues in the data;
—  data preparation.
B.4.4  Tooling resources
Control
As part of resource identification, the organization should document information about the tooling 
resources utilized for the AI system.
Implementation guidance
Tooling resources for an AI system and particularly for machine learning, can include but not limited to:
—  algorithm types and machine learning models;
—  data conditioning tools or processes;
—  optimization methods;
—  evaluation methods;
—  provisioning tools for resources;
—  tools to aid model development;
—  software and hardware for AI system design, development and deployment;
Other information
ISO/IEC 23053 provides detailed guidance on the types, methods and approaches for various tooling 
resources for machine learning.
B.4.5  System and computing resources
Control
As part of resource identification, the organization should document information about the system and 
computing resources utilized for the AI system.
2)   Under preparation. Stage at the time of publication: ISO/IEC DIS 5259-1:2023, ISO/IEC DIS 5259-2:2023, ISO/
IEC DIS 5259-3:2023, ISO/IEC DIS 5259-4:2023, ISO/IEC CD 5259-5:2023, ISO/IEC CD TR 5259-6:2023.
© ISO/IEC 2023 – All rights reserved 
﻿
﻿
25

ISO/IEC FDIS 42001:2023(E)
Implementation guidance
Information about system and computing resources for an AI system can include but is not limited to:
—  resource requirements of the AI system (i.e. to help ensure the system can run on constrained 
resource devices);
—  where the system and computing resources are located (e.g. on-premises, cloud computing or edge 
computing);
—  processing resources (including network and storage);
—  the impact of the hardware used to run the AI system workloads (e.g. the impact to the environment 
either through use or the manufacturing of the hardware or cost of using the hardware).
The organization should consider that different resources can be required to allow continual 
improvement of AI systems. Development, deployment and operation of the system can have different 
system needs and requirements.
NOTE 
ISO/IEC 22989 describes various system resource considerations.
B.4.6  Human resources
Control
As part of resource identification, the organization should document information about the human 
resources and their competences utilized for the development, deployment, operation, change 
management, maintenance, transfer and decommissioning, as well as verification and integration of the 
AI system.
Implementation guidance
The organization should consider the need for diverse expertise and include the types of roles necessary 
for the system. For example, the organization can include specific demographic groups related to data 
sets used to train machine learning models, if their inclusion is a necessary component of the system 
design. Necessary human resources can include but not limited to:
—  data scientists;
—  roles related to human oversight of AI systems;
—  experts on trustworthiness topics such as safety, security and privacy;
—  AI researchers and specialists, and domain experts relevant to the AI systems.
Different resources can be necessary at different stages of the AI system life cycle.
B.5  Assessing impacts of AI systems
B.5.1  Objective
To assess AI system impacts to individuals and societies affected by the AI system throughout its life 
cycle.
B.5.2  AI system impact assessment process
Control
The organization should establish a process to assess the potential consequences for individuals and 
societies that can result from the AI system throughout its life cycle.
 
﻿
© ISO/IEC 2023 – All rights reserved

﻿
26

ISO/IEC FDIS 42001:2023(E)
Implementation guidance
Because AI systems potentially generate significant impact to individuals, groups of individuals and 
societies, the organization that provides and uses such systems should, based on the intended purpose 
and use of these systems, assess the potential impacts of these systems on these groups.
The organization should consider whether an AI system affects:
—  the legal position or life opportunities of individuals;
—  the physical or psychological well-being of individuals;
—  universal human rights;
—  societies.
The organization’s procedures should include, but are not limited to:
a)  circumstances under which an AI system impact assessment should be performed, which can 
include, but are not limited to:
1)  criticality of the intended purpose and context in which the AI system is used or any significant 
changes to these;
2)  complexity of AI technology and the level of automation of AI systems or any significant 
changes to that;
3)  sensitivity of data types and sources processed by the AI system or any significant changes to 
that.
b)  elements that are part of the AI system impact assessment process, which can include:
1)  identification (e.g. sources, events and outcomes);
2)  analysis (e.g. consequences and likelihood);
3)  evaluation (e.g. acceptance decisions and prioritization);
4)  treatment (e.g. mitigation measures);
5)  documentation, reporting and communication (see 7.4, 7.5 and B.3.3);
c) 
who performs the AI system impact assessment;
d)  how the AI system impact assessment can be utilized [e.g. how it can inform the design or use of the 
system (see B.6 and B.9), whether it can trigger reviews and approvals];
e)  individuals and societies that are potentially impacted based on the system’s intended purpose, 
use and characteristics (e.g. assessment for individuals, groups of individuals or societies).
Impact assessment should take various aspects of the AI system into account, including the data used 
for the development of the AI system, the AI technologies used and the functionality of the overall 
system.
The processes can vary based on the role of the organization and the domain of AI application and 
depending on the specific disciplines for which the impact is assessed (e.g. security, privacy and safety).
Other information
For some disciplines or organizations, detailed consideration of the impact on individuals and 
societies is part of risk management, particularly in disciplines such as information security, 
safety and environmental management. The organization should determine if discipline-specific 
© ISO/IEC 2023 – All rights reserved 
﻿
﻿
27

ISO/IEC FDIS 42001:2023(E)
impact assessments performed as part of such a risk management process sufficiently integrate AI 
considerations for those specific aspects (e.g. privacy).
NOTE 
ISO/IEC 23894 describes how an organization can perform impact analyses for the organization itself, 
along with individuals and societies, as part of an overall risk management process.
B.5.3  Documentation of AI system impact assessments
Control
The organization should document the results of AI system impact assessments and retain results for a 
defined period.
Implementation guidance
The documentation can be helpful in determining information that should be communicated to users 
and other relevant interested parties.
AI system impact assessments should be retained and updated, as needed, in alignment with the 
elements of an AI system impact assessment documented in B.5.2. Retention periods can follow 
organization retention schedules or be informed by legal requirements or other requirements.
Items that the organization should consider documenting can include, but are not limited to:
—  the intended use of the reasonable, foreseeable misuse of the AI system;
—  positive and negative impacts of the AI system to the relevant individuals and societies;
—  predictable failures, their potential impacts and measures taken to mitigate them;
—  relevant demographic groups the system is applicable to;
—  complexity of the system;
—  the role of humans in relationships with system, including human oversight capabilities, processes 
and tools, available to avoid negative impacts;
—  employment and staff skilling.
B.5.4  Assessing AI system impact on individuals and groups of individuals
Control
The organization should assess and document the potential impacts of AI systems to individuals or 
groups of individuals throughout the system’s life cycle.
Implementation guidance
When assessing the impacts on individuals, the organization should consider its governance principles, 
AI policies and objectives. Individuals using the AI system or whose PII are processed by the AI system, 
can have expectations related to the trustworthiness of the AI system. Specific protection needs of 
groups such as children, impaired persons, elderly persons and workers should be taken into account. 
The organization should evaluate these expectations and consider the means to address them as part of 
the system impact assessment.
Depending on the scope of AI system purpose and use, areas of impact to consider as part of the 
assessment can include, but are not limited to:
—  fairness;
—  accountability;
—  transparency and explainability;
 
﻿
© ISO/IEC 2023 – All rights reserved

﻿
28

ISO/IEC FDIS 42001:2023(E)
—  security and privacy;
—  safety and health;
—  financial consequences;
—  accessibility;
—  human rights.
Other information
Where necessary, the organization should consult experts (e.g. researchers, subject matter experts and 
users) to obtain a full understanding of potential impacts of the system on individuals.
B.5.5  Assessing societal impacts of AI systems
Control
The organization should assess and document the potential societal impacts of their AI systems 
throughout their life cycle.
Implementation guidance
Societal impacts can vary widely depending on the organization’s context and the types of AI systems. 
The societal impacts of AI systems can be both beneficial and detrimental. Examples of these potential 
societal impacts can include:
—  environment sustainability (including the impacts on natural resources and greenhouse gas 
emissions);
—  economic (including access to financial services, employment opportunities, taxes, trade and 
commerce);
—  government (including legislative processes, misinformation for political gain, national security 
and criminal justice systems);
—  health and safety (including access to healthcare, medical diagnosis and treatment, and potential 
physical and psychological harms);
—  norms, traditions, culture and values (including misinformation that leads to biases or harms to 
individuals).
Other information
Development and use of AI systems can be computationally intensive with related impacts to 
environmental sustainability (e.g. greenhouse gas emissions due to increased power usage, impacts 
on water, land, flora and fauna). Likewise, AI systems can be used to improve the environmental 
sustainability of other systems (e.g. reduce greenhouse gas emissions related to buildings and 
transportation). The organization should consider the impacts of its AI systems in the context of its 
overall environmental sustainability goals and strategies.
The organization should consider how its AI systems can be misused to create societal harms and how 
they can be used to address historical harms. For example, can AI systems prevent access to financial 
services such as loans, grants, insurance and investments and likewise can AI systems improve access 
to these instruments?
AI systems have been used to influence the outcomes of elections and to create misinformation (e.g. 
deepfakes in digital media) that can lead to political and social unrest. Government’s use of AI systems 
for criminal-justice purposes has exposed the risk of biases to individuals and groups of individuals. The 
organization should analyse how bad actors can misuse AI systems and how the AI systems reinforce 
unwanted historical social biases.
© ISO/IEC 2023 – All rights reserved 
﻿
﻿
29

ISO/IEC FDIS 42001:2023(E)
AI systems can be used to diagnose and treat illnesses and to determine qualifications for health 
benefits. AI systems are also deployed in scenarios where malfunctions can result in death or injury 
to humans (e.g. self-driving automobiles, human-machine teaming). The organization should consider 
both the positive and negative outcomes when using AI systems, such as in health and safety related 
scenarios.
NOTE 
ISO/IEC TR 24368 provides a high-level overview of ethical and societal concerns relative to AI 
systems and applications.
B.6  AI system life cycle
B.6.1  Management guidance for AI system development
B.6.1.1  Objective
To ensure that the organization identifies and documents objectives and implements processes for the 
responsible design and development of trustworthy AI systems.
B.6.1.2  Objectives for responsible development of AI system
Control
The organization should identify and document objectives to guide the responsible development 
of AI systems, and take those objectives into account and integrate measures to achieve them in the 
development life cycle.
Implementation guidance
The organization should identify objectives (see 6.2) that affect the AI system design and development 
processes. These objectives should be taken into account in the design and development processes. 
For example, if an organization defines “fairness” as one objective, this should be incorporated in 
the requirements specification, data acquisition, data conditioning, model training, verification and 
validation, etc. The organization should provide requirements and guidelines as necessary to ensure 
that measures are integrated into the various stages (e.g. the requirement to use of a specific testing 
tool or method to address unfairness or unwanted bias) to achieve such objectives.
Other information
AI techniques are being used to augment security measures such as threat prediction detection and 
prevention of security attacks. This is an application of AI techniques that can be used to reinforce 
security measures to protect both AI systems and conventional non-AI based software systems. Annex C 
provides examples of organizational objectives for managing risk, which can be useful in determining 
the objectives for AI system development.
B.6.1.3  Processes for responsible design and development of AI systems
Control
The organization should define and document the specific processes for the responsible design and 
development of the AI system.
Implementation guidance
Responsible development for AI system processes should include consideration of, without limitation, 
the following:
—  life cycle stages (a generic AI system life cycle model is provided by ISO/IEC 22989, but the 
organization can specify their own life cycle stages);
—  testing requirements and planned means for testing;
 
﻿
© ISO/IEC 2023 – All rights reserved

﻿
30

ISO/IEC FDIS 42001:2023(E)
—  human oversight requirements, including processes and tools, especially when the AI system can 
impact natural persons;
—  at what stages AI system impact assessments should be performed;
—  training data expectations and rules (e.g. what data can be used, approved data suppliers and 
labelling);
—  expertise (subject matter domain or other) required or training for developers of AI systems or 
both;
—  release criteria;
—  approvals and sign-offs necessary at various stages;
—  change control;
—  usability and controllability;
—  engagement of interested parties.
The specific design and development processes depend on the functionality and the AI technologies 
that are intended to be used for the AI system.
B.6.2  AI system life cycle
B.6.2.1  Objective
To define the criteria and requirements for each stage of the AI system life cycle.
B.6.2.2  AI system requirements and specification
Control
The organization should specify and document requirements for new AI systems or material 
enhancements to existing systems.
Implementation guidance
The organization should document the rationale for developing an AI system and its goals. Some of the 
factors that should be considered, documented and understood can include:
a)  why the AI system is to be developed, for example, is this driven by a business case, customer 
request or by government policy;
b)  how the model can be trained and how data requirements can be achieved
AI system requirements should be specified and should span the entire AI system life cycle. Such 
requirements should be revisited in cases where the developed AI system is unable to operate as 
intended or new information arises that can be used to change and to improve the requirements. For 
instance, it can become unfeasible from a financial perspective to develop the AI system.
Other information
The processes for describing the AI system life cycle are provided by ISO/IEC 5338:—3). For more 
information about human-centred design for interactive systems, see ISO 9241-210.
B.6.2.3  Documentation of AI system design and development
Control
3)   Under preparation. Stage at the time of publication: ISO/IEC FDIS 5338:2023.
© ISO/IEC 2023 – All rights reserved 
﻿
﻿
31

ISO/IEC FDIS 42001:2023(E)
The organization should document the AI system design and development based on organizational 
objectives, documented requirements and specification criteria.
Implementation guidance
There are many design choices necessary for an AI system, including, but not limited to:
—  machine learning approach (e.g. supervised vs. unsupervised);
—  learning algorithm and type of machine learning model utilized;
—  how the model is intended to be trained and which data quality (see B.7);
—  evaluation and refinement of models;
—  hardware and software components;
—  security threats considered throughout the AI system life cycle; security threats specific to AI 
systems include data poisoning, model stealing or model inversion attacks;
—  interface and presentation of outputs;
—  how humans can interact with the system;
—  interoperability and portability considerations.
There can be multiple iterations between design and development, but documentation on the stage 
should be maintained and a final system architecture documentation should be available.
Other information
For more information about human-centred design for interactive systems, see ISO 9241-210.
B.6.2.4  AI system verification and validation
Control
The organization should define and document verification and validation measures for the AI system 
and specify criteria for their use.
Implementation guidance
The verification and validation measures can include, but are not limited to:
—  testing methodologies and tools;
—  selection of test data and their representativity with regard to the intended domain of use;
—  release criteria requirements.
The organization should define and document evaluation criteria such as, but not limited to:
—  a plan to evaluate the AI system components and the whole AI system for risks related to impacts 
on individuals and societies;
—  the evaluation plan can be based on, for example:
—  reliability and safety requirements of the AI system, including acceptable error rates for the AI 
system performance;
—  responsible AI system development and use objectives such as those in B.6.1.2 and B.9.3;
—  operational factors such as quality of data, intended use, including acceptable ranges of each 
operational factor;
 
﻿
© ISO/IEC 2023 – All rights reserved

﻿
32

ISO/IEC FDIS 42001:2023(E)
—  any intended uses which can require more rigorous operational factors to be defined, including 
different acceptable ranges for operational factors or lower error rates;
—  the methods, guidance or metrics to be used to evaluate whether relevant interested parties who 
make decisions or are subject to decisions based on the AI system outputs can adequately interpret 
the AI system outputs. The frequency of evaluation should be determined and can be based upon 
results from an AI system impact assessment;
—  any acceptable factors that can account for an inability to meet a target minimum performance 
level, especially when the AI system is evaluated for impacts on individuals and societies (e.g. poor 
image resolution for computer vision systems or background noise affecting speech recognition 
systems). Mechanisms to deal with poor AI system performance as a result of these factors should 
also be documented.
The AI system should be evaluated against the documented criteria for evaluation.
Where the AI system cannot meet the documented criteria for evaluation, especially against responsible 
AI system development and use objectives (see B.6.1.2 and B.9.3), the organization should reconsider or 
manage the deficiencies of the intended use of the AI system, its performance requirements and how 
the organization can effectively address the impacts to individuals and societies.
NOTE 
Further information on how to deal with robustness of neural networks can be found in 
ISO/IEC TR 24029-1.
B.6.2.5  AI system deployment
Control
The organization should document a deployment plan and ensure that appropriate requirements are 
met prior to deployment.
Implementation guidance
AI systems can be developed in various environments and deployed in others (such as developed on 
premises and deployed using cloud computing) and the organization should take these differences 
into account for the deployment plan. They should also consider whether components are deployed 
separately (e.g. software and model can be deployed independently). Additionally, the organization 
should have a set of requirements to be met prior to release and deployment (sometimes referred to 
as “release criteria”). This can include verification and validation measures that must be passed, 
performance metrics that must be met, user testing to be completed, as well as management approvals 
and sign-offs to be obtained. The deployment plan should take into account the perspectives of and 
impacts to relevant interested parties.
B.6.2.6  AI system operation and monitoring
Control
The organization should define and document the necessary elements for the ongoing operation of the 
AI system. At the minimum this should include system and performance monitoring, repairs, updates 
and support.
Implementation guidance
Each minimum activity for operation and monitoring can take account of various considerations. For 
example:
—  System and performance monitoring can include monitoring for general errors and failures, as well 
as for whether the system is performing as expected with production data. Technical performance 
criteria can include success rates in resolving problems or in achieving tasks, or confidence rates. 
Other criteria can be related to meeting commitment or expectation and needs of interested parties, 
© ISO/IEC 2023 – All rights reserved 
﻿
﻿
33

ISO/IEC FDIS 42001:2023(E)
including, for example, ongoing monitoring to ensure compliance with customer requirements or 
applicable legal requirements.
—  Some deployed AI systems evolve their performance as a result of ML, where production data 
and output data are used to further train the ML model. Where continuous learning is used, the 
organization should monitor the performance of the AI system to ensure that it continues to meet 
its design goals and operates on production data as intended.
—  The performance of some AI systems can change even if such systems do not use continuous learning, 
usually due to concept or data drift in production data. In such cases, monitoring can identify the 
need for retraining to ensure that the AI system continues to meet its design goals and operates on 
production data as intended. More information can be found in ISO/IEC 23053.
—  Repairs can include responses to errors and failures in the system. The organization should 
have processes in place for the response and repair of these issues. Additionally, updates can 
be necessary as the system evolves or as fewer critical issues are identified, or as the result of 
externally identified issues (e.g. non-compliance with customer expectations or legal requirement). 
There should be processes in place for updating the system including components affected, update 
schedule, information to users on what is included in the update.
—  System updates can also include changes in the system operations, new or modified intended uses, 
or other changes in system functionality. The organization should have procedures in place to 
address operational changes, including communication to users.
—  Support for the system can be internal, external or both, depending on the needs of the organization 
and how the system was acquired. Support processes should consider how users can contact the 
appropriate help, how issues and incidents are reported, support service level agreements and 
metrics.
—  Where AI systems are being used for purposes other than those for which they were designed or in 
ways that were not anticipated, the appropriateness of such uses should be considered.
—  AI-specific information security threats related to the AI systems applied and developed by the 
organization should be identified. AI-specific information security threats include, but are not 
limited to data poisoning, model stealing and model inversion attacks.
Other information
The organization should consider operational performance that can affect interested parties and 
consider this when designing and determining performance criteria.
Performance criteria for AI systems in operation should be determined by the task under consideration, 
such as classification, regression, ranking, clustering or dimensionality reduction.
Performance criteria can include statistical aspects such as error rates and processing duration. 
For each criterion, the organization should identify all relevant metrics as well as interdependences 
between metrics. For each metric, the organization should consider acceptable values based on, for 
example, domain expert’s recommendations and analysis of expectations of interested parties relative 
to existing non-AI practices.
For example, an organization can determine that the F1 score is an appropriate performance 
metric based on its assessment of the impact of false positives and false negatives, as described in 
ISO/IEC TS 4213. The organization can then establish an F1 value that the AI system is expected to 
meet. It should be evaluated if these issues can be handled by existing measures. If that is not the case, 
changes to existing measures should be considered or additional measures should be defined to detect 
and handle these issues.
The organization should consider the performance of non-AI systems or processes in operation and use 
them as potentially relevant context when establishing performance criteria.
 
﻿
© ISO/IEC 2023 – All rights reserved

﻿
34

ISO/IEC FDIS 42001:2023(E)
The organization should additionally ensure that the means and process used to evaluate the AI 
system, including, where applicable, the selection and management of evaluation data, to improve the 
completeness and the reliability in assessment of its performance with respect to the defined criteria.
Development of performance assessment methodologies can be based on criteria, metrics and values. 
These should inform the amount of data and the types of processes used in the assessment and the 
roles and expertise of personnel that carries out the assessment.
Performance assessment methodologies should reflect attributes and characteristics of operation 
and use as closely as possible to ensure that assessment results are useful and relevant. Some aspects 
of performance assessment can require controlled introduction of erroneous or spurious data or 
processes to assess impact on performance.
The quality model in ISO/IEC 25059 can be used to define performance criteria.
B.6.2.7  AI system technical documentation
Control
The organization should determine what AI system technical documentation is needed for each 
relevant category of interested parties, such as users, partners, supervisory authorities, and provide 
the technical documentation to them in the appropriate form.
Implementation guidance
The AI system technical documentation can include, but is not limited to the following elements:
—  a general description of the AI system including its intended purpose;
—  usage instructions;
—  technical assumptions about its deployment and operation (run-time environment, related software 
and hardware capabilities, assumptions made on data, etc.);
—  technical limitations (e.g. acceptable error rates, accuracy, reliability, robustness);
—  monitoring capabilities and functions that allow users or operators to influence the system 
operation.
Documentation elements related to all AI system life cycle stages (as defined in ISO/IEC 22989) can 
include, but are not limited to:
—  design and system architecture specification;
—  design choices made and quality measures taken during the system development process;
—  information about the data used during system development;
—  assumptions made and quality measures taken on data quality (e.g. assumed statistical distributions);
—  management activities (e.g. risk management) taken during development or operation of the AI 
system;
—  verification and validation records;
—  changes made to the AI system when it is in operation;
—  impact assessment documentation as described in B.5.
© ISO/IEC 2023 – All rights reserved 
﻿
﻿
35

ISO/IEC FDIS 42001:2023(E)
The organization should document technical information related to the responsible operation of the AI 
system. This can include, but is not limited to:
—  documenting a plan for managing previously unknown failures. This can include for example, 
the need to describe a rollback plan for the AI system, turning off features of the AI system, an 
update process or a plan for notifying customers, users, etc. of changes to the AI system, updated 
information on system failures and how these can be mitigated;
—  documenting processes for monitoring the health of the AI system (i.e. the AI system operates as 
intended and within its normal operating margins, also referred to as observability) and processes 
for addressing AI system failures;
—  documenting standard operating procedures for the AI system, including which events should be 
monitored and how event logs are prioritized and reviewed. It can also include how to investigate 
failures and the prevention of future failures;
—  documenting the roles of personnel responsible for operation of the AI system as well as those 
responsible for accountability of the system use, especially in relation to handling the effects of AI 
system failures or managing updates to the AI system;
—  documenting system updates like changes in the system operations, new or modified intended uses, 
or other changes in system functionality.
The organization should have procedures in place to address operational changes including 
communication to users and internal evaluations on the type of change.
Documentation should be up to date and accurate. Documentation should be approved by the relevant 
management within the organization.
When provided as part of the user documentation, the controls provided in Table A.1 should be taken 
into account.
B.6.2.8  AI system recording of event logs
Control
The organization should determine at which phases of the AI system life cycle, record keeping of event 
logs should be enabled, but at the minimum when the AI system is in use.
Implementation guidance
The organization should ensure logging for AI systems it deploys to automatically collect and record 
event logs related to certain events that occur during operation. Such logging can include but is not 
limited to:
—  traceability of the AI system’s functionality to ensure that the AI system is operating as intended;
—  detection of the AI system’s performance outside of the AI system’s intended operating conditions 
that can result in undesirable performance on production data or impacts to relevant interested 
parties through monitoring of the operation of the AI system.
AI system event logs can include information, such as the time and date each time the AI system is used, 
the production data on which the AI system operates on, the outputs that fall out of the range of the 
intended operation of the AI system, etc.
Event logs should be kept for as long as required for the intended use of the AI system and within the 
data retention policies of the organization. Legal requirements related to data retention can apply.
Other information
Some AI systems, such as biometric identification systems, can have additional logging requirements 
depending on jurisdiction. Organizations should be aware of these requirements.
 
﻿
© ISO/IEC 2023 – All rights reserved

﻿
36

ISO/IEC FDIS 42001:2023(E)
B.7  Data for AI systems
B.7.1  Objective
To ensure that the organization understands the role and impacts of data in AI systems in the application 
and development, provision or use of AI systems throughout their life cycles.
B.7.2  Data for development and enhancement of AI system
Control
The organization should define, document and implement data management processes related to the 
development of AI systems.
Implementation guidance
Data management can include various topics such as, but not limited to:
—  privacy and security implications due to the use of data, some of which can be sensitive in nature;
—  security and safety threats that can arise from data dependent AI system development;
—  transparency and explainability aspects including data provenance and the ability to provide an 
explanation of how data are used for determining an AI system’s output if the system requires 
transparency and explainability;
—  representativeness of training data compared to operational domain of use;
—  accuracy and integrity of the data.
NOTE 
Detailed information of AI system life cycle and data management concepts is provided by 
ISO/IEC 22989.
B.7.3  Acquisition of data
Control
The organization should determine and document details about the acquisition and selection of the 
data used in AI systems.
Implementation guidance
The organization can need different categories of data from different sources depending on the scope 
and use of their AI systems. Details for data acquisition can include:
—  categories of data needed for the AI system;
—  quantity of data needed;
—  data sources (e.g. internal, purchased, shared, open data, synthetic);
—  characteristics of the data source (e.g. static, streamed, gathered, machine generated);
—  data subject demographics and characteristics (e.g. known or potential biases or other systematic 
errors);
—  prior handling of the data (e.g. previous uses, conformity with privacy and security requirements);
—  data rights (e.g. PII, copyright);
—  associated meta data (e.g. details of data labelling and enhancing);
—  provenance of the data.
© ISO/IEC 2023 – All rights reserved 
﻿
﻿
37

ISO/IEC FDIS 42001:2023(E)
Other information
The data categories and a structure for the data use in ISO/IEC 19944-1 can be used to document details 
about data acquisition and use.
B.7.4  Quality of data for AI systems
Control
The organization should define and document requirements for data quality and ensure that data used 
to develop and operate the AI system meet those requirements.
Implementation guidance
The quality of data used to develop and operate AI systems potentially has significant impacts on 
the validity of the system’s outputs. ISO/IEC 25024 defines data quality as the degree to which the 
characteristics of data satisfy stated and implied needs when used under specified conditions. For 
AI systems that use supervised or semi-supervised machine learning, it is important that the quality 
of training, validation, test and production data are defined, measured and improved to the extent 
possible, and the organization should ensure that the data are suitable for its intended purpose. The 
organization should consider the impact of bias on system performance and system fairness and make 
such adjustments as necessary to the model and data used to improve performance and fairness so they 
are acceptable for the use case.
Other information
Additional information regarding data quality is available in the ISO/IEC 5259 series2) on data quality 
for analytics and ML. Additional information regarding different forms of bias in data used in AI 
systems is available in ISO/IEC TR 24027.
B.7.5  Data provenance
Control
The organization should define and document a process for recording the provenance of data used in its 
AI systems over the life cycles of the data and the AI system.
Implementation guidance
According to ISO 8000-2, a record of data provenance can include information about the creation, 
update, transcription, abstraction, validation and transferring of the control of data. Additionally, 
data sharing (without transfer of control) and data transformations can be considered under data 
provenance. Depending on factors such as the source of the data, its content and the context of its use, 
organizations should consider whether measures to verify the provenance of the data are needed.
B.7.6  Data preparation
Control
The organization should define and document its criteria for selecting data preparations and the data 
preparation methods to be used.
Implementation guidance
Data used in an AI system ordinarily needs preparation to make it usable for a given AI task. For 
example, machine learning algorithms are sometimes intolerant of missing or incorrect entries, non-
normal distribution and widely varying scales. Preparation methods and transforms can be used to 
 
﻿
© ISO/IEC 2023 – All rights reserved

﻿
38

ISO/IEC FDIS 42001:2023(E)
increase the quality of the data. Failure to properly prepare the data can potentially lead to AI system 
errors. Common preparation methods and transformations for data used in AI systems include:
—  statistical exploration of the data (e.g. distribution, mean, median, standard deviation, range, 
stratification, sampling) and statistical metadata (e.g. data documentation initiative (DDI) 
specification[28]);
—  cleaning (i.e. correcting entries, dealing with missing entries);
—  imputation (i.e. methods for filling in missing entries);
—  normalization;
—  scaling;
—  labelling of the target variables;
—  encoding (e.g. converting categorical variables to numbers).
For a given AI task, the organization should document its criteria for selecting specific data preparation 
methods and transforms as well as the specific methods and transforms used in the AI task.
NOTE 
For additional information on data preparation specific to machine learning see the ISO/IEC 5259 
series2) and ISO/IEC 23053.
B.8  Information for interested parties
B.8.1  Objective
To ensure that relevant interested parties have the necessary information to understand and assess the 
risks and their impacts (both positive and negative).
B.8.2  System documentation and information for users
Control
The organization should determine and provide the necessary information to users of the system.
Implementation guidance
Information about the AI system can include both technical details and instructions, as well as general 
notifications to users that they are interacting with an AI system, depending on the context. This can 
also include the system itself, as well as potential outputs of the system (e.g. notifying users that an 
image is created by AI).
Although AI systems can be complex, it is critical that users are able to understand when they are 
interacting with an AI system, how the system works. Users also need to understand its intended 
purpose and intended uses, its potential to cause harm or benefit the user. Some system documentation 
can necessarily be targeted for more technical uses (e.g. system admins), and the organization should 
understand the needs of different interested party and what understandability can mean to them. The 
information should also be accessible, both in terms of ease of use in finding it, as well as for users who 
can need additional accessibility features.
Information that can be provided to users include, but are not limited to:
—  purpose of the system;
—  that the user is interacting with an AI system;
—  how to interact with the system;
—  how and when to override the system;
© ISO/IEC 2023 – All rights reserved 
﻿
﻿
39

ISO/IEC FDIS 42001:2023(E)
—  technical requirements for system operation, including the computational resources needed, and 
limitations of the system as well as its expected lifetime;
—  needs for human oversight;
—  information about accuracy and performance;
—  relevant information from the impact assessment, including potential benefits and harms, 
particularly if they are applicable in specific contexts or certain demographic groups (see B.5.2 and 
B.5.4);
—  revisions to claims about the system’s benefits;
—  updates and changes in how the system works, as well as any necessary maintenance measures, 
including their frequency;
—  contact information;
—  educational materials for system use.
Criteria used by the organization to determine whether and what information is to be provided should 
be documented. Relevant criteria include but are not limited to the intended use and reasonably 
foreseeable misuse of the AI system, the expertise of the user and specific impact of the AI system.
Information can be provided to users in numerous ways, including documented instructions for use, 
alerts and other notifications built into the system itself, information on a web page, etc. Depending 
on which methods the organization uses to provide information, it should validate that the users have 
access to this information, and that the information provided is complete, up to date and accurate.
B.8.3  External reporting
Control
The organization should provide capabilities for interested parties to report adverse impacts of the 
system.
Implementation guidance
While the system operation should be monitored for reported issues and failures, the organization 
should also provide capabilities for users or other external parties to report adverse impacts (e.g. 
unfairness).
B.8.4  Communication of incidents
Control
The organization should determine and document a plan for communicating incidents to users of the 
system.
Implementation guidance
Incidents related to the AI system can be specific to the AI system itself, or related to information 
security or privacy (e.g. a data breach). The organization should understand its obligations around 
notifying users and other interested party about incidents, depending on the context in which the 
system operates. For example, an incident with an AI component that is part of a product that affects 
safety can have different notification requirements than other types of systems. Legal requirements 
(such as contracts) and regulatory activity can apply, which can specify requirements for:
—  types of incidents that must be communicated;
—  the timeline for notification;
 
﻿
© ISO/IEC 2023 – All rights reserved

﻿
40

ISO/IEC FDIS 42001:2023(E)
—  whether and which authorities must be notified;
—  the details required to be communicated.
The organization can integrate incident response and reporting activities for AI into their broader 
organizational incident management activities, but should be aware of unique requirements related 
to AI systems, or individual components of AI systems (e.g. a PII data breach in training data for the 
system can have different reporting requirements related to privacy).
Other information
ISO/IEC 27001 and ISO/IEC 27701 provide additional details on incident management for security and 
privacy respectively.
B.8.5  Information for interested parties
Control
The organization should determine and document its obligations to reporting information about the AI 
system to interested parties.
Implementation guidance
In some cases, a jurisdiction can require information about the system to be shared with authorities 
such as regulators. Information can be reported to interested parties such as customers or regulatory 
authorities within the appropriate timeframe. The information shared can include, for example:
—  technical system documentation, including, but not limited, to data sets for training, validation and 
testing as well as algorithmic choices justifications and verification and validation records;
—  risks related to the system;
—  results of impact assessments;
—  logs and other system records.
The organization should understand their obligations in this respect and ensure that the appropriate 
information is shared with the correct authorities. Additionally, it is presupposed that the organization 
is aware of jurisdictional requirements related to information shared with law enforcement authorities.
B.9  Use of AI systems
B.9.1  Objective
To ensure that the organization uses AI systems responsibly and per organizational policies.
B.9.2  Processes for responsible use of AI systems
Control
The organization should define and document the processes for the responsible use of AI systems.
Implementation guidance
Depending on its context, the organization can have many considerations for determining whether to 
use a particular AI system. Whether the AI system is developed by the organization itself or sourced 
from a third party, the organization should be clear on what these considerations are and develop 
policies to address them. Some examples are:
—  required approvals;
—  cost (including for ongoing monitoring and maintenance);
© ISO/IEC 2023 – All rights reserved 
﻿
﻿
41

ISO/IEC FDIS 42001:2023(E)
—  approved sourcing requirements;
—  legal requirements applicable to the organization.
Where the organization has accepted policies for the use of other systems, assets, etc., these policies 
can be incorporated if desired.
B.9.3  Objectives for responsible use of AI system
Control
The organization should identify and document objectives to guide the responsible use of AI systems.
Implementation guidance
The organization operating in different contexts can have different expectations and objectives for 
what constitutes the responsible development of AI systems. Depending on its context, the organization 
should identify its objectives related to trustworthy use. Some objectives include:
—  fairness;
—  accountability;
—  transparency;
—  explainability;
—  reliability;
—  safety;
—  robustness and redundancy;
—  privacy and security;
—  accessibility.
Once defined, the organization should implement mechanisms to achieve its objectives within the 
organization. This can include determining if a third-party solution fulfils the organization’s objectives 
or if an internally developed solution is applicable for the intended use. The organization should 
determine at which stages of the AI system life cycle meaningful human oversight objectives should be 
incorporated. This can include:
—  involving human reviewers to check the outputs of the AI system, including having authority to 
override decisions made by the AI system;
—  ensuring that human oversight is included if required for acceptable use of the AI system according 
to instructions or other documentation associated with the intended deployment of the AI system;
—  monitoring the performance of the AI system, including the accuracy of the AI system outputs;
—  reporting concerns related to the outputs of the AI system and their impact to relevant interested 
parties;
—  reporting concerns with changes in the performance or ability of the AI system to make correct 
outputs on the production data;
—  considering whether automated decision-making is appropriate for a responsible approach to the 
use of an AI system and the intended use of the AI system.
The need for human oversight can be informed by the impact assessments (see B.5). The personnel 
involved in human oversight activities related to the AI system should be informed of, trained and 
understand the instructions and other documentation to the AI system and the duties they carry out to 
 
﻿
© ISO/IEC 2023 – All rights reserved

﻿
42

ISO/IEC FDIS 42001:2023(E)
satisfy human oversight objectives. When reporting performance issues, human oversight can augment 
automated monitoring.
Other information
Annex  C provides examples of organizational objectives for managing risk, which can be useful in 
determining the objectives for AI system use.
B.9.4  Intended use of the AI system
Control
The organization should ensure that the AI system is used according to the intended uses of the AI 
system and its accompanying documentation.
Implementation guidance
The AI system should be deployed according to the instructions and other documentation associated 
with the AI system (see B.8.2). The deployment can require specific resources to support the 
deployment, including the need to ensure that human oversight is applied as required (see B.9.3). It can 
be necessary that for acceptable use of the AI system, the data that the AI system is used on aligns with 
the documentation associated with the AI system to ensure that the AI system performance is accurate.
The operation of the AI system should be monitored (see B.6.2.6). Where the correct deployment of 
the AI system according to its associated instructions causes concern regarding the impact to relevant 
interested parties or the organization’s legal requirements, the organization should communicate its 
concerns to the relevant personnel inside the organization as well as to any third-party suppliers of the 
AI system.
The organization should keep event logs or other documentation related to the deployment and 
operation of the AI system which can be used to demonstrate that the AI system is being used as 
intended or to help with communicating concerns related to the intended use of the AI system. The time 
period during which event logs and other documentation are kept depends on the intended use of the 
AI system, the organization’s data retention policies and relevant legal requirements for data retention.
B.10 Third-party and customer relationships
B.10.1 Objective
To ensure that the organization understands its responsibilities and remains accountable, and risks are 
appropriately apportioned when third parties are involved at any stage of the AI system life cycle.
B.10.2 Allocating responsibilities
Control
The organization should ensure that responsibilities within their AI system life cycle are allocated 
between the organization, its partners, suppliers, customers and third parties.
Implementation guidance
In an AI system life cycle, responsibilities can be split between parties providing data, parties providing 
algorithms and models, parties developing or using the AI system and being accountable with regard 
to some or all interested parties. The organization should document all parties intervening in the AI 
system life cycle and their roles and determine their responsibilities.
Where the organization supplies an AI system to a third party, the organization should ensure that it 
takes a responsible approach to developing the AI system. See the controls and guidance in B.6. The 
organization should be able to provide the necessary documentation (see B.6.2.7 and B.8.2) for the AI 
© ISO/IEC 2023 – All rights reserved 
﻿
﻿
43

ISO/IEC FDIS 42001:2023(E)
system to relevant interested parties and to the third party that the organization is supplying the AI 
system to.
When processed data includes PII, responsibilities are usually split between PII processors and 
controllers. ISO/IEC 29100 provides further information on PII controllers and PII processors. 
Where the privacy of PII is to be preserved, controls such as those described in ISO/IEC 27701 should 
be considered. Based on the organization’s and AI system’s data processing activities on PII and 
the organization’s role in application and development of the AI system through their life cycle, the 
organization can take on the role of a PII controller (or joint PII controller), PII processor or both.
B.10.3 Suppliers
Control
The organization should establish a process to ensure that its usage of services, products or materials 
provided by suppliers aligns with the organization’s approach to the responsible development and use 
of AI systems.
Implementation guidance
Organizations developing or using an AI system can utilize suppliers in a number of ways, from sourcing 
datasets, machine learning algorithms or models, or other components of a system such as software 
libraries, to an entire AI system itself for use on its own or as part of another product (e.g. a vehicle).
Organizations should consider different types of suppliers, what they supply, and the varying level of 
risk this can pose to the system and organization as a whole in determining the selection of suppliers, 
the requirements placed on those suppliers, and the levels of ongoing monitoring and evaluation needed 
for the suppliers.
Organizations should document how those the AI system and AI system components are integrated 
into AI systems developed or used by the organization.
Where the organization considers that the AI system or AI system components from a supplier do not 
perform as intended or can result in impacts to individuals and societies that are not aligned with the 
responsible approach to AI systems taken by the organization, the organization should require the 
supplier to take corrective actions. The organization can decide to work with the supplier to achieve 
this objective.
The organization should ensure that the supplier of an AI system delivers appropriate and adequate 
documentation related to the AI system (see B.6.2.7 and B.8.2).
B.10.4 Customers
Control
The organization should ensure that its responsible approach to the development and use of AI systems 
considers their customer expectations and needs.
Implementation guidance
The organization should understand customer expectations and needs when it is supplying a product 
or service related to an AI system (i.e. when it is itself a supplier). These can come in the form of 
requirements for the product or service itself during a design or engineering phase, or in the form of 
contractual requirements or general usage agreements. One organization can have many different 
types of customer relationships, and these can all have different needs and expectations.
The organization should particularly understand the complex nature of supplier and customer 
relationships and understand where responsibility lies with the provider of the AI system and where it 
lies with the customer, while still meeting needs and expectations.
 
﻿
© ISO/IEC 2023 – All rights reserved

﻿
44

ISO/IEC FDIS 42001:2023(E)
For example, the organization can identify risks related to the use of its AI products and services by the 
customer and can decide to treat the identified risks by giving appropriate information to its customer, 
so that the customer can then treat the corresponding risks.
As an example of appropriate information, when an AI system is valid for a certain domain of use, the 
limits of the domain should be communicated to the customer. See B.6.2.7 and B.8.2.
© ISO/IEC 2023 – All rights reserved 
﻿
﻿
45

ISO/IEC FDIS 42001:2023(E)
Annex C 
(informative) 
 
Potential AI-related organizational objectives and risk sources
C.1  General
This annex outlines potential organizational objectives, risk sources and descriptions that can be 
considered by the organization when managing risks. This annex is not intended to be exhaustive or 
applicable for every organization. The organization should determine the objectives and risk sources 
that are relevant. ISO/IEC 23894 provides more detailed information on these objectives and risk 
sources, and their relationship to risk management. Evaluation of AI systems, initially, regularly 
and when warranted, provides evidence that an AI system is being assessed against organizational 
objectives.
C.2  Objectives
C.2.1  Accountability
The use of AI can change existing accountability frameworks. Where previously persons would be held 
accountable for their actions, their actions can now be supported by or based on the use of an AI system.
C.2.2  AI expertise
A selection of dedicated specialists with interdisciplinary skill sets and expertise in assessing, 
developing and deploying AI systems is needed.
C.2.3  Availability and quality of training and test data
AI systems based on ML need training, validation and test data in order to train and verify the systems 
for the intended behaviour.
C.2.4  Environmental impact
The use of AI can have positive and negative impacts on the environment.
C.2.5  Fairness
The inappropriate application of AI systems for automated decision-making can be unfair to specific 
persons or groups of persons.
C.2.6  Maintainability
Maintainability is related to the ability of the organization to handle modifications of the AI system in 
order to correct defects or adjust to new requirements.
C.2.7  Privacy
The misuse or disclosure of personal and sensitive data (e.g. health records) can have harmful effects 
on data subjects.
 
﻿
© ISO/IEC 2023 – All rights reserved

﻿
46

`;