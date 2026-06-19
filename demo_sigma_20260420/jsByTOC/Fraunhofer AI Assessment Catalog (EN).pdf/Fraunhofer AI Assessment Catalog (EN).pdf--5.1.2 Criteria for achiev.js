var toc_content = `52
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

53
Dimension: Autonomy and Control
 
 
Examples: Email spam detector, automated decision for credit lending, fraud detector (as long as humans 
can override application decisions afterwards; otherwise it would count as human-out-of-the-loop)
 – Human-out-of-the-loop (HOOTL)
 ·
The AI application acts fully autonomously under all conditions (including errors or unexpected events); 
in other words, it can complete tasks fully without human intervention; “sense-think-act”.
 ·
Humans can only decide whether or not to use the AI application and possibly define the setup/
meta commands (e.g., the destination address for an autonomous vehicle).
 
 
Examples: High-frequency trading, robot vacuum cleaners
 
The desired level of autonomy for the AI application is assigned to one of the categories described depending 
on the objectives. In addition, it is important to specify what the selected level of autonomy means in practice 
in relation to the application context and why that level is appropriate.
User autonomy requirements are specified with regard to the distribution of tasks between humans and 
AI applications (options for human intervention, involvement in decisions). The following points must be 
addressed and supported by application-specific specifications:
 – Type and extent of human control/supervision of the AI application in operation
 – Users’ freedom to act
 – Integration into the work process, especially possible requirements regarding the checking of outputs by 
humans
 – Complaint options for users and affected persons
It is vital to justify that the criteria conform to the objectives and do not contradict each other. It must also be 
demonstrated that, if the criteria are met, the risks identified in [AC-R-IE-RI-01] are reduced to an acceptable 
level.
5.1.3  Measures
The following measures are not specifically assigned to any of the categories of data, AI component, embedding 
or operation.
5.1.3.1  Data
5.1.3.2  AI component
5.1.3.3  Embedding
5.1.3.4  Measures for operation
[AC-R-TD-ME-01] Involvement of relevant groups of people/organizations
Requirement: Do
Documentation should be available regarding which relevant groups of people and organizations were 
involved in developing the AI application, especially in terms of organizing the distribution of tasks between 
humans and the AI application. In particular, it should describe whether and to what extent
 – the groups of people/organizations identified as relevant in [DP-R-CD-RI-01] (or their representatives) have 
received a description of the AI application.
 – if possible, several alternative design options for the AI application were developed and their advantages 
and disadvantages were compared.

`;