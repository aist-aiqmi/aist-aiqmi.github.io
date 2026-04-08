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

54
Dimension: Autonomy and Control
 – opinion statements were obtained from the groups of people or organizations involved and the arguments 
they contained were assessed.
The extent to which the documented measures contribute to meeting the criteria in [AC-R-IE-RI-01] must be 
explained.
[AC-R-TD-ME-02] Primacy of human action
Requirement: Do
It is necessary to document in which cases a user can decide not to use the AI application or to subsequently 
correct a decision made by the AI application (directly or via designated contacts) and, if necessary, to 
compensate for it.
Documentation should be available regarding which actions/decisions of the AI application users can intervene 
in during (normal) operation.
In addition, the documentation should cover which intervention options are available to users in the event of 
deviations from normal operation, or which may be necessary in certain circumstances. In this case, reference 
can be made to the relevant sections of the Risk area: functional safety (FS) (see also [S-R-FS-ME-12]).
If users must have specific qualifications/knowledge in order to intervene using the options described, this 
information should be provided.
Lastly, in reference to the above points, an explanation should be provided regarding how they contribute 
to implementing the degree of autonomy of the AI application as planned in [AC-R-TD-CR-01]. In addition, 
with regard to the points above, the extent to which the requirements for user autonomy defined in 
[AC-R-TD-CR-01] are met should be explained.
[AC-R-TD-ME-03] Establishing effective complaint channels
Requirements: Do | Pr
Documentation should be available that covers how users and affected persons can make complaints about 
limitations in their ability to perceive a situation and take action as a result of the AI application. There is 
a record of the bodies/agencies responsible for evaluating the complaints. The process of how to evaluate 
complaints and, if necessary, derive consequences from them is explained. In particular, the documentation 
should describe the extent to which a shutdown or further development of the AI application is enforceable as 
part of this process.
[AC-R-TD-ME-04] Rights-based and role-based approach for using the AI application
Requirement: Do
There is a plan for the roles and responsibilities regarding the use of the AI application. This describes which 
activities within the scope of use, such as overwriting/correcting outputs of the AI application, require 
authorization. It should also document how to ensure that only authorized persons perform the corresponding 
activities.
[AC-R-TD-ME-05] Human supervision of the AI application
Requirements: Do | Pr
A process is established for humans to supervise and control the AI application. The degree of control and the 
procedures and activities within the process must be described in detail. In particular, reference must be made 
to the measures used to supervise the application and to monitor external factors described in the risk areas 
under “Control of dynamics” in the other dimensions. Where appropriate, these measures can be referred to 
directly.

55
Dimension: Autonomy and Control
Documentation should be available that describes the methods and tools that a user can use to check the 
proper functioning of the AI application. Proper function involves meeting objectives and managing risks 
across all dimensions covered in this catalog. Specifically, the documentation should indicate how users 
can recognize when errors or deviations from normal operation occur and how they should behave if this 
happens. If this has already been covered elsewhere, an appropriate reference can be inserted instead.
The documentation should also describe what skills or further knowledge are required to enable users to 
effectively supervise the AI application and recognize when intervention may be required.
Lastly, in reference to the above points, an explanation must be provided regarding how they contribute to 
implementing the degree of autonomy of the AI application as planned in [AC-R-TD-CR-01]. In addition, 
with regard to the points above, the extent to which the requirements for user autonomy are met should be 
explained.
[AC-R-TD-ME-06] Shutdown scenarios
Requirement: Do
Scenarios should be identified, analyzed and evaluated in which the live AI application must be completely 
or partially shut down in order to maintain the ability of users and affected persons to perceive situations 
and take action. This includes shutdowns due to potential bodily injury or damage to property and also due 
to the violation of personal rights or the autonomy of users and affected persons. Thus, depending on the 
application context, this point involves analyzing scenarios that go beyond the accidents/safety incidents 
discussed in the Dimension: Safety and Security (S). For example, if it is possible that the AI application 
causes discrimination that cannot be resolved immediately, this scenario should be considered here. When 
evaluating the scenarios, the consequences of the shutdown for the humans involved, work processes, 
organization and company, as well as additional time and costs, should also be documented. This is compared 
with the potential damage that could arise if the AI application were not shut down.
Documentation should be available on the AI application shutdown strategies that were developed based 
on the identified scenarios – both short-term, mid-term and permanent shutdown. Similarly, scenarios 
for shutting down subfunctions of the AI application should also be documented. Reference can be made to 
shutdown scenarios that may have already been covered in the Risk area: functional safety (FS) (see [S-R-
FS-ME-10]). A shutdown scenario documents
 – the setting and the resulting decision-making rationale for the shutdown,
 – the priority of the shutdown,
 – by which persons or roles the shutdown is implemented and how it is done,
 – how the resulting outage can be compensated,
 – the expected impact for individuals or for the affected organization.
[AC-R-TD-ME-07] Technical provision of shutdown options
Requirement: Do
Documentation should be available on the technical options for shutting down specific subfunctions of 
the AI application as well as the entire AI application. Here, reference can be made to [S-R-FS-ME-10] or [S-R-
FS-ME-12] if necessary.
It is outlined that other system components or business processes that use (sub)functionality that can be shut 
down have been checked and (technical) measures that compensate for negative effects of shutdowns are 
prepared. If already covered there, reference can be made to [S-R-FS-ME-10].

56
Dimension: Autonomy and Control
5.1.4  Overall assessment
[AC-R-TD-OA] Overall assessment
Requirement: Do
With reference to the measures taken, a summary should be provided justifying that the requirements 
specified in [AC-R-TD-CR-01], in particular the desired level of autonomy and requirements for user 
autonomy, have been achieved.
If not all requirements specified in [AC-R-TD-CR-01] are met, the deviations must be documented. This also 
applies to requirements that have only been partially met, e.g., where the criteria have not or not always been 
met.

`;