var toc_content = `51
Dimension: Autonomy and Control
5.1  Risk area: appropriate and responsible task distribution between humans and 
AI application (TD)
AI applications are most commonly used in contexts where different stakeholders (companies, authorities, 
consumer organizations, works councils, data protection officers, etc.) operate. In these contexts, they are often 
used to tackle complex problems that have an element of uncertainty and require a certain degree of system 
autonomy. The desire to address all problem-specific requirements while ensuring that humans are the core focus 
leads to the political debate of how AI applications should be used appropriately and responsibly.
The focus of this risk area is on task distribution between humans and AI applications. It is necessary to ensure 
that the AI application does not unjustifiably or with an unacceptable level of risk limit the ability of users to 
take action or perceive a situation due to its tasks and its level of autonomy. Instead, the purpose of operating 
the AI application should be to support humans and, ideally, to enable them to perform higher-level or more 
demanding activities.
The autonomy of the AI application, i.e., the extent to which the system acts autonomously or (un)supervised 
conflicts with the autonomy of the user. AI applications with a high level of autonomy, which, for example, make 
decisions and trigger further processes or actions based on these decisions without confirmation by users, usually 
save the humans involved time and effort. However, it is important to remember that if an AI application has 
a high level of autonomy, this restricts the users’ freedom to act. This is why the decision regarding the level of 
autonomy that is justifiable and responsible for the AI application in question must be made on a case-by-case 
basis, depending on the application domain and context, as well as the reliability of the AI application.
There are also other issues associated with the distribution of tasks between humans and AI applications. 
For example, it needs to be made clear what prior knowledge or, if applicable, what expert knowledge is required 
for humans to ensure correct use and effective supervision or control of the AI application. It should also be 
assessed to what extent there is a risk of humans involved with the application becoming overly trusting in its 
abilities (automation bias) and how they can be suitably informed about this. These issues are addressed in the 
Risk area: information and empowerment of users and affected persons (IE) and also in the Dimension: 
Safety and Security (S)in relation to accident situations, for example.
Particularly in the case of AI applications capable of endangering the safety of humans – for example, AI-based 
vehicle steering – appropriate intervention options that give control to users should be provided. Limiting system 
autonomy when leaving normal mode, for example in terms of fault tolerance or fail-safe operation is addressed 
in the Risk area: functional safety (FS) (see also [S-R-FS-ME-12] on the possibility of human intervention) and 
should be consistent with the objectives in this risk area.
5.1.1  Risk analysis and objectives
[AC-R-TD-RI-01] Task distribution between humans and AI application
Requirement: Do
Risk analysis: An analysis is performed to determine to what extent the AI application (due to its purpose 
but also due to the organization of the task distribution) can influence the ability of users to take action and 
perceive situations.
 – Firstly, given the nature and scope of the possible tasks to be assigned to the AI application, an assessment 
is made on which options or abilities to act are potentially restricted by this influence for users or other 
relevant groups of people/organizations. For example, a lane departure warning system that does not 
recognize orange road markings could prevent the driver from continuing along the diverted road at 
roadworks. Or an AI application that influences the actions of users, because it includes a functionality to 
monitor their behavior.
 – In order to identify the dependencies created through the use of the AI application, the consequences 
of a partial or complete shutdown of the AI application after it has been operationalized successfully 

52
Dimension: Autonomy and Control
are described. In the process, it must be examined to what extent there is a need for users to be able 
to assume the tasks of the AI application at short notice in the event of failure and to what extent users 
of the AI application are capable of doing so (also in the long term).
 
For each identified potential limitation of the ability to take action or perceive a situation for the groups 
of people involved, a final assessment is performed of the damage (material or non-material) this may cause 
to those affected.
Objectives: Describing the intended distribution of tasks between the AI application and its users and 
justifying this distribution with reference to the risk analysis. The autonomy of the AI application and the 
user autonomy should be comparatively assessed in detail. In addition, objectives regarding the supervision 
and control of the AI application must be set which are required to reduce the risk of unjustified limitation of 
user autonomy or autonomy of other groups of people involved. If applicable, reference should also be made 
to the integration of the AI application into existing work processes.
5.1.2  Criteria for achieving objectives
[AC-R-TD-CR-01] Level of autonomy of the AI application and user autonomy
Requirement: Do
The level of autonomy of an AI application can be loosely divided into the following four levels42:
 – Human control (HC)
 ·
The AI application in this case is purely for assistance purposes and cannot initiate further actions 
without confirmation from users.
 ·
Humans make a decision or initiate next steps based on the output of the AI application; they are 
involved in all decisions.
 
 
Examples: Forecasts or decision support systems that process significant amounts of information and 
choices.
 – Human-in-the-loop (HIL)
 ·
The AI application acts semi-autonomously, but it cannot complete any task without human operation/
confirmation.
 ·
Humans have a comprehensive overview and insight into the operations of the AI application, can 
intervene in the relevant processes at any time and are involved in most decision-making processes. In 
particular, the user can subsequently correct, override and compensate for decisions made automatically 
by the AI application.
 
 
Examples: Personalized recommendations, specific suggestions such as facial recognition on photos, text 
or emoji suggestions in messengers
 – Human-on-the-loop (HOL)
 ·
Under normal conditions, the AI application is (almost) capable of acting autonomously or completing 
tasks without human intervention.
 ·
Humans are not involved in any or few decisions under normal conditions and mainly only supervise the 
AI application. Intervention is not possible at all times or at every point, but humans can subsequently 
correct, override and compensate for decisions made automatically by the AI application. Human 
intervention is required in the event of unexpected events or errors.
42  The presentation of the levels of autonomy is adapted from: Nothwang, W. et al. (2016). The Human Should be Part of the Control Loop?, 
In 2016 Resilience Week (RWS), pp. 214–220, IEEE https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7573336 (last accessed: 
06/22/2021). Note: The highest autonomy level, described as “complete autonomy” in the paper, is referred to as “human-out-of-the-loop” 
in this catalog.

`;