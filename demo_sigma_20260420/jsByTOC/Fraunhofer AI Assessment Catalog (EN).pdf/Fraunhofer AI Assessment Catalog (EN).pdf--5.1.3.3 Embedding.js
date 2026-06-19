var toc_content = `53
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