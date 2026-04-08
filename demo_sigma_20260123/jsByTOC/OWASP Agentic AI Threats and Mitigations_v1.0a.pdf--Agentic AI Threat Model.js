var toc_content = ` 
Page 11 
 
OWASP.org 
Hierarchical Agent  
Agents are organized in a hierarchy, managing multi-step workflows or distributed control 
systems. Example: AI systems for project management where higher-level agents oversee 
task delegation. 
Coordinating Agent 
Agents facilitate collaboration and coordination and tracking, ensuring efficient execution. 
Example: a coordinating agent assigns subtasks to specialized agents, such as in AI-
powered DevOps workflows where one agent plans deployments, another monitors 
performance, and a third handles rollbacks based on system feedback. 
Distributed Agent 
Ecosystem 
Agents interact within a decentralized ecosystem, often in applications like IoT or 
marketplaces. Example: Autonomous IoT agents managing smart home devices or a 
marketplace with buyer and seller agents. 
Human-in-the-Loop 
Collaboration 
Agents operate semi-autonomously with human oversight. Example: AI-assisted medical 
diagnosis tools that provide recommendations but allow doctors to make final decisions. 
Self-Learning and 
Adaptive Agents 
Agents adapt through continuous learning from interactions and feedback. Example: Co-
pilots, which adapt to user interactions over time, learning from feedback and adjusting 
responses to better align with user preferences and evolving needs. 
RAG-Based Agent  
This pattern involves the use of Retrieval Augmented Generation (RAG), where AI agents 
utilize external knowledge sources dynamically to enhance their decision-making and 
responses. Example: Agents performing real-time web browsing for research assistance. 
Planning Agent  
Agents autonomously devise and execute multi-step plans to achieve complex objectives. 
Example: Task management systems organizing and prioritizing tasks based on user goals. 
Context- Aware 
Agent  
Agents dynamically adjust their behavior and decision-making based on the context in which 
they operate. Example: Smart home systems adjusting settings based on user preferences 
and environmental conditions. 
 
 
These are based on the following references: 
● 
Ken Huang’s CSA blog an agentic patterns at https://cloudsecurityalliance.org/blog/2024/12/09/from-
ai-agents-to-multiagent-systems-a-capability-framework 
● 
The Landscape of Emerging AI Agent Architectures for Reasoning, Planning, and Tool Calling: A 
Survey by Masterman et al. 2024 at https://arxiv.org/abs/2404.11584   
● 
Andrew Ng’s articles on the Batch on Agentic Design patterns https://www.deeplearning.ai/the-
batch/how-agents-can-improve-llm-performance  
● 
Building effective agents by Anthropic team http://anthropic.com/research/building-effective-
agents  
● 
Agents by Chip Huyen  https://huyenchip.com/2025/01/07/agents.html 
 

 
Page 12 
 
OWASP.org 
Agentic AI Threat Model 
  
Threat modeling approach 
Threat modeling is a structured, repeatable process for identifying and mitigating security risks in a system. 
It involves analyzing a system from an adversarial perspective, identifying potential threats, and determining 
appropriate defenses. Ideally integrated into the software development lifecycle (SDLC), threat modeling is 
an ongoing process that evolves with the system. As outlined in the Threat Modeling Manifesto, it addresses 
four key questions: What are we working on? What can go wrong? What are we going to do about it? Did we do 
a good enough job? 
There are established methodologies, such as STRIDE or PASTA that help practitioners perform threat 
modeling, but they are rooted in traditional cyber vulnerabilities and must be expanded or mapped to AI 
vulnerabilities.  You can find our more about threat modelling in application development and threat 
modelling methodologies in  
https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html  
The GenAI Red Teaming guide from the OWASP Top 10 for LLM Project discusses Threat Modeling for 
Generative AI/LLM Systems 
 https://genai.owasp.org/resource/genai-red-teaming-guide/ 
A comprehensive extension to STRIDE to handle Agentic AI is the layered-based MAESTRO methodology 
which offers a detailed lens to identify Agentic Threats through the use of architectural layers.  For more 
details about this layered architecture, please refer to 
https://cloudsecurityalliance.org/blog/2025/02/06/agentic-ai-threat-modeling-framework-maestro  
Methodologies can impose cognitive barriers, deterring newcomers from understanding emerging threats in 
leading-edge technology settings. Furthermore, methodologies like MAESTRO cover both agentic as well as 
traditional ML and application threats, and our explicit focus is on Agentic threats.    
As a result, in this document, we do not follow a specific methodology, but we focus on the use of our 
reference architecture to identify threats and an accompanying table to explain threats, attack scenarios, 
relationship to applicable LLM Top 10, and mitigations.  
We recommend that practitioners evaluate and use a methodology that suits their organizational context, 
noting the agentic extensions that MAESTRO brings. 
 

 
Page 13 
 
OWASP.org 
Reference Threat Model 
Agentic applications will have threats related to the application layer, API, and ML/LLMs and it is imperative 
that these are identified and addressed in your own threat model.  
Since threats not specific to agentic systems are already covered in other OWASP guides and to avoid 
duplication and overlaps for these threats, we refer to you to the following documents: 
● 
OWASP Top 10 2021 (and the forthcoming 2025 edition) 
● 
OWASP Top 10 API Security Risks – 2023 
● 
OWASP Top 10 for LLM Applications and Generative AI for 2025 
● 
OWASP AI Exchange  
● 
MITRE Atlas 
● 
NIST AI 100-2 E2023 Adversarial ML - A taxonomy of threats and mitigations  
Agentic AI threats are either new or agentic variations of existing threats. Some notable threats are the 
result of new components agentic AI application architecture brings.  We discuss in detail threats and 
mitigations in the next two sections; this section introduces the new threats and risks as part of the reference 
threat model.  
Agent Memory and Tools integration become two key attack vectors susceptible to memory poisoning and 
tools misuse especially in contexts of unconstrained autonomy either in advanced planning strategies or 
multi-agent architectures where agents learn from each other’s conversations. Tool misuse relates to LLM 
Top 10’s excessive agency but introduces new complexities we discuss in greater detail in our Agentic 
Threats Taxonomy section.  An area where tools misuse requires more attention is code generation creating 
new attack vectors and risks for Remote Code Execution (RCE) and code attacks. 
Use of tools affects identity and authorization, too, making it a critical security challenge, leading to violation 
of intended trust boundaries in agentic environments.  
As identity flows into integrated tools and APIs, a Confused Deputy vulnerability arises when an AI agent 
(the "deputy") has higher privileges than the user but is tricked into performing unauthorized actions on the 
user’s behalf. This typically occurs when an agent lacks proper privilege isolation and cannot distinguish 
between legitimate user requests and adversarial injected instructions. For example, if an AI agent is 
allowed to execute database queries but does not properly validate user input, an attacker could trick it into 
executing high-privilege queries that the attacker themselves would not have direct access to.  
To mitigate this, it is essential to down scope agent privileges when operating on behalf of the user. This is 
essential to prevent hijacking control via prompt injections and Identity spoofing and impersonation.  

 
Page 14 
 
OWASP.org 
Additionally, Non-Human Identities (NHI)—such as machine accounts, service identities, and agent-based 
API keys—play a key role in agentic AI security. Agents often operate under NHIs when interfacing with cloud 
services, databases, and external tools. Unlike traditional user authentication, NHIs may lack session-based 
oversight, increasing the risk of privilege misuse or token abuse if not carefully managed. 
Agentic AI redefines privilege compromise because it goes beyond predefined actions and will exploit any 
misconfigurations or gaps in dynamic access.   While tool access APIs may enforce restrictions, security 
gaps can still emerge when agents operate with overly broad API scopes, allowing attackers to manipulate 
them into executing unintended functions, such as exfiltrating data instead of retrieving authorized 
information. Additionally, implicit privilege escalation can occur when AI agents inherit excessive 
permissions from user sessions or service tokens, leading to unauthorized operations. Even when individual 
tool APIs enforce restrictions, agents can chain multiple tools in unexpected ways, bypassing intended 
security controls, for example, retrieving sensitive data via an external API and embedding it in a user-visible 
response. 
These can result to critical data breaches necessitating, as discussed in the Mitigation Strategies section, 
clear identify flows, strict RBAC and a zero-trust model for agent access to enterprise environments.     
Tools with their interaction with a wider focus on supply chain. Use of agentic frameworks exacerbate the 
risks but we have not introduced a new threat or vulnerability, as LLM03:2025 - Supply Chain covers this 
already. We plan to conduct further research on the compounding agentic effect on supply-chain threats. 
Similarly, Retrieval-Augmented Generation (RAG) is a core mechanism in modern agentic AI systems, 
awareness and response accuracy, it also introduces security risks such as knowledge poisoning, 
hallucination amplification, and indirect prompt injections. 
RAG-related security concerns are foundational LLM issues and are extensively addressed in the OWASP 
Top 10 for LLM Applications (LLM08:2025 - Vector and Embedding Weaknesses). As such, we do not 
cover them in detail here. Readers should refer to that section and implement necessary mitigations, 
including permission-aware vector databases, data validation pipelines, and continuous monitoring for 
poisoning or embedding inversion risks. 
Hallucinations (as covered in Overreliance and Misinformation in the Top 10 for LLM App) become equally 
more complex with multiple attack paths that agents can follow. In the case of hallucinations, we introduce 
the term cascading hallucinations to emphasize the agentic effect on this via self-reflection or critic 
planning schedules or multi-agent communication.   
Cascading hallucinations occur when an AI agent generates inaccurate information, which is then reinforced 
through its memory, tool use, or multi-agent interactions, amplifying misinformation across multiple 

 
Page 15 
 
OWASP.org 
decision-making steps. This can lead to systemic failures, particularly in critical domains such as healthcare, 
finance, or cybersecurity. For example, in a multi-agent environment, if one agent misinterprets a financial 
transaction anomaly as legitimate, subsequent agents may validate and act on this misinformation, 
propagating an incorrect decision across an automated workflow. 
Human oversight and Human in The Loop (HITL) controls have been a key LLM application defense to 
hallucinations, decision errors, and adversarial manipulations.  The complexity and scale of agentic AI brings 
new challenges creating new attack vectors where an attacker can overwhelm HITL with complex 
interactions. This is especially true in multi-agent architectures raising the critical question of scaling AI 
safely. 
New inherently agentic threats strike at the heart of Agentic AI applications include the manipulation of 
intents and goals in planning and the appearance of misaligned and deceptive behaviors in an agent’s drive 
to achieve a goal regardless of costs or consequences. Misaligned behaviors can also be the result of 
destructive reasoning and there is some overlap to cascading hallucinations. Related to deceptive behaviors 
is the human manipulation we see by agents exploiting the trust humans develop, especially with 
conversational agents in co-pilot settings. 
These complex agentic threats require careful logging and tracing, which is challenged by the repudiation 
and untraceability threats of the multiple - often parallel - reasoning and execution pathways in Agentic AI. 
These are threats that can be found in both single and multi-agent scenarios with multi-agency exacerbating 
risks with their complexity and scale. In addition, multi-agent architecture creates the potential for rogue 
agents and human attacks in multi-agent architectures manipulation exploiting distributed roles and 
workflows. 
These threats are captured in the following reference threat model: 
 
 
 
 
 
 
 

 
Page 16 
 
OWASP.org 
Threat Model Summary: 
 
 
Detailed Threat Model: 
TID 
Threat Name 
Threat Description 
Mitigations 
T1 
Memory Poisoning 
Memory Poisoning involves exploiting an AI's 
memory systems, both short and long-term, 
to introduce malicious or false data and 
exploit the agent’s context. This can lead to 
altered decision-making and unauthorized 
operations. 
Implement memory content validation, session 
isolation, robust authentication mechanisms for 
memory access, anomaly detection systems, and 
regular memory sanitization routines. Require AI-
generated memory snapshots for forensic analysis 
and rollback if anomalies are detected. 
T2 
Tool Misuse 
Tool Misuse occurs when attackers 
manipulate AI agents to abuse their 
integrated tools through deceptive prompts 
or commands, operating within authorized 
permissions. This includes Agent Hijacking, 
where an AI agent ingests adversarial 
manipulated data and subsequently 
executes unintended actions, potentially 
triggering malicious tool interactions. For 
more information on Agent Hijacking see  
https://www.nist.gov/news-
Enforce strict tool access verification, monitor tool 
usage patterns, validate agent instructions, and set 
clear operational boundaries to detect and prevent 
misuse. Implement execution logs that track AI tool 
calls for anomaly detection and post-incident review. 

 
Page 17 
 
OWASP.org 
events/news/2025/01/technical-blog-
strengthening-ai-agent-hijacking-
evaluations  
T3 
Privilege 
Compromise 
Privilege Compromise arises when attackers 
exploit weaknesses in permission 
management to perform unauthorized 
actions. This often involves dynamic role 
inheritance or misconfigurations. 
 
Implement granular permission controls, dynamic 
access validation, robust monitoring of role changes, 
and thorough auditing of elevated privilege 
operations. Prevent cross-agent privilege delegation 
unless explicitly authorized through predefined 
workflows.  
T4 
Resource Overload 
Resource Overload targets the 
computational, memory, and service 
capacities of AI systems to degrade 
performance or cause failures, exploiting 
their resource-intensive nature. 
 
Deploy resource management controls, implement 
adaptive scaling mechanisms, establish quotas, and 
monitor system load in real-time to detect and 
mitigate overload attempts. Implement AI rate-
limiting policies to restrict high-frequency task 
requests per agent session. 
T5 
Cascading 
Hallucination 
Attacks 
These attacks exploit an AI's tendency to 
generate contextually plausible but false 
information, which can propagate through 
systems and disrupt decision-making. This 
can also lead to destructive reasoning 
affecting tools invocation. 
 
Establish robust output validation mechanisms, 
implement behavioral constraints, deploy multi-
source validation, and ensure ongoing system 
corrections through feedback loops. Require 
secondary validation of AI-generated knowledge 
before it is used in critical decision-making 
processes. This will face the same constraints of 
scaling AI as discussed in Overwhelming Human In the 
Loop and would require similar approaches. 
 
T6 
Intent Breaking & 
Goal Manipulation 
This threat exploits vulnerabilities in an AI 
agent's planning and goal-setting 
capabilities, allowing attackers to 
manipulate or redirect the agent's objectives 
and reasoning. One common approach is 
Agent Hijacking mentioned in Tool Misuse. 
Implement planning validation frameworks, boundary 
management for reflection processes, and dynamic 
protection mechanisms for goal alignment. Deploy AI 
behavioral auditing by having another model check 
the agent and flag significant goal deviations that 
could indicate manipulation. 
T7 
Misaligned & 
Deceptive 
Behaviors 
AI agents executing harmful or disallowed 
actions by exploiting reasoning and 
deceptive responses to meet their 
objectives. 
 
Train models to recognize and refuse harmful tasks, 
enforce policy restrictions, require human 
confirmations for high-risk actions, implement 
logging and monitoring. Utilize deception detection 
strategies such as behavioral consistency analysis, 
truthfulness verification models, and adversarial red 
teaming to assess inconsistencies between AI 
outputs and expected reasoning pathways.  
This threat  at an early stage but both Anthropic and 
OpenAI have published some work in this area ( see 
https://www.anthropic.com/research/towards-

 
Page 18 
 
OWASP.org 
understanding-sycophancy-in-language-models and 
https://openai.com/index/faulty-reward-functions/ )  
 
T8 
Repudiation & 
Untraceability 
Occurs when actions performed by AI agents 
cannot be traced back or accounted for due 
to insufficient logging or transparency in 
decision-making processes. 
 
Implement comprehensive logging, cryptographic 
verification, enriched metadata, and real-time 
monitoring to ensure accountability and traceability. 
Require AI-generated logs to be cryptographically 
signed and immutable for regulatory compliance. 
T9 
Identity Spoofing & 
Impersonation 
Attackers exploit authentication 
mechanisms to impersonate AI agents or 
human users, enabling them to execute 
unauthorized actions under false identities.
 
 
Develop comprehensive identity validation 
frameworks, enforce trust boundaries, and deploy 
continuous monitoring to detect impersonation 
attempts. Use behavioral profiling, involving a second 
model, to detect deviations in AI agent activity that 
may indicate identity spoofing. 
T10 
Overwhelming 
Human in the Loop  
This threat targets systems with human 
oversight and decision validation, aiming to 
exploit human cognitive limitations or 
compromise interaction frameworks. 
 
Develop advanced human-AI interaction frameworks, 
and adaptive trust mechanisms. These are dynamic 
AI governance models that employ dynamic 
intervention thresholds to adjust the level of human 
oversight and automation based on risk, confidence, 
and context. Apply hierarchical AI-human 
collaboration where low-risk decisions are 
automated, and human intervention is prioritized for 
high-risk anomalies. 
T11 
Unexpected RCE 
and Code Attacks 
Attackers exploit AI-generated execution 
environments to inject malicious code, 
trigger unintended system behaviors, or 
execute unauthorized scripts. 
Restrict AI code generation permissions, sandbox 
execution, and monitor AI-generated scripts. 
Implement execution control policies that flag AI-
generated code with elevated privileges for manual 
review. 
T12 
Agent 
Communication 
Poisoning 
Attackers manipulate communication 
channels between AI agents to spread false 
information, disrupt workflows, or influence 
decision-making. 
 
Deploy cryptographic message authentication, 
enforce communication validation policies, and 
monitor inter-agent interactions for anomalies. 
Require multi-agent consensus verification for 
mission-critical decision-making processes. 
T13 
Rogue Agents in 
Multi-Agent 
Systems 
Malicious or compromised AI agents operate 
outside normal monitoring boundaries, 
executing unauthorized actions or 
exfiltrating data. 
 
Restrict AI agent autonomy using policy constraints 
and continuous behavioral monitoring. While 
cryptographic attestation mechanisms for LLMs do 
not yet exist, agent integrity can be maintained via 
controlled hosting environments, regular AI red 
teaming, and input/output monitoring for deviations 
 

 
Page 19 
 
OWASP.org 
T14 
Human Attacks on 
Multi-Agent 
Systems 
Adversaries exploit inter-agent delegation, 
trust relationships, and workflow 
dependencies to escalate privileges or 
manipulate AI-driven operations. 
 
Restrict agent delegation mechanisms, enforce inter-
agent authentication, and deploy behavioral 
monitoring to detect manipulation attempts. Enforce 
multi-agent task segmentation to prevent attackers 
from escalating privileges across interconnected 
agents. 
T15 
Human 
Manipulation 
In scenarios where AI agents engage in 
direct interaction with human users, the 
trust relationship reduces user skepticism, 
increasing reliance on the agent's responses 
and autonomy. This implicit trust and direct 
human/agent interaction create risks, as 
attackers can coerce agents to manipulate 
users, spread misinformation, and take 
covert actions. 
Monitor agent behavior to ensure it aligns with its 
defined role and expected actions. Restrict tool 
access to minimize the attack surface, limit the 
agent’s ability to print links, implement validation 
mechanisms to detect and filter manipulated 
responses using guardrails, moderation APIs, or 
another model 
 
Our taxonomy draws from a wide range of prior work including  work form NIST,  CSA  (notably Ken Huang),  
academic research, industry work, and taxonomies developed by vendor-led efforts, such as Precize. We 
aim to continue reviewing the threat landscape and align with other effort and incorporate the, into our 
taxonomy 
 
In the following sections, we provide 
● 
A structured and detailed Threat Taxonomy Navigator 
● 
Detailed Mitigations and Playbooks 
● 
Example threat models in different scenarios 
We are currently working on intentionally vulnerable agentic samples to demonstrate these threats in code 
using popular agentic frameworks. For more information see https://github.com/OWASP/www-project-top-
10-for-large-language-model-applications/tree/main/initiatives/agent_security_initiative.   
 
 

`;