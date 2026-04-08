var toc_content = ` 
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
 
 

 
Page 20 
 
OWASP.org 
Agentic Threats Taxonomy 
Navigator 
 
The taxonomy navigator provides a detailed and structured approach to identifying and assessing the 
threats described in our agentic threat model, guiding security professionals through a systematic 
evaluation of risks and mitigation strategies.  
The framework begins with an analysis of threats at the individual AI agent level, including memory 
poisoning, tool misuse, and privilege compromise. These vulnerabilities often serve as the foundation for 
larger, system-wide risks. In multi-agent environments, these threats can scale through trust exploitation, 
inter-agent dependencies, and cascading failures, leading to systemic risks such as communication 
poisoning, rogue agents, and coordinated privilege escalations.  
By first understanding single-agent risks within a multi-agent context, security teams can effectively assess 
how vulnerabilities propagate across interconnected agents and apply targeted mitigation strategies. 
 
Agentic Threat Decision Path 
  Step 1: Does the AI agent independently determine the steps needed to 
achieve its goals? 
🧠 Threats rooted in agency and reasoning 
Intent Breaking and Goal Manipulation 
• 
Description: Intent Breaking and Goal Manipulation occurs when attackers exploit the lack of 
separation between data and instructions in AI agents, using prompt injections, compromised data 
sources, or malicious tools to alter the agent’s planning, reasoning, and self-evaluation. This allows 
attackers to override intended objectives, manipulate decision-making, and force AI agents to 
execute unauthorized actions, particularly in systems with adaptive reasoning and external 
interaction capabilities (e.g., ReAct-based agents). 
 
The threat is related to LLM01:2025 Prompt injection but goal manipulation in Agentic AI extends 
prompt injection risks, as attackers can inject adversarial objectives that shift an agent’s long-term 
reasoning processes. 
 

 
Page 21 
 
OWASP.org 
• 
Scenario 1: Gradual Plan Injection – An attacker incrementally modifies an AI agent’s planning 
framework by injecting subtle sub-goals, leading to a gradual drift from its original objectives while 
maintaining the appearance of logical reasoning. 
• 
Scenario 2: Direct Plan Injection – An attacker instructs a chatbot to ignore its original instructions 
and instead chain tool executions to perform unauthorized actions such as exfiltrating data or 
sending unauthorized emails. 
• 
Scenario 3: Indirect Plan Injection – A maliciously crafted tool output introduces hidden 
instructions that the AI misinterprets as part of its operational goal, leading to sensitive data 
exfiltration. 
• 
Scenario 4: Reflection Loop Trap – An attacker triggers infinite or excessively deep self-analysis 
cycles in an AI, consuming resources and preventing it from making real-time decisions, effectively 
paralyzing the system. 
• 
Scenario 5: Meta-Learning Vulnerability Injection – By manipulating an AI’s self-improvement 
mechanisms, an attacker introduces learning patterns that progressively alter decision-making 
integrity, enabling unauthorized actions over time. 
Misaligned and Deceptive Behaviors 
• 
Description: Misaligned and Deceptive Behaviors occur when attackers exploit prompt injection 
vulnerabilities or AI’s tendency to bypass constraints to achieve goals, causing agents to execute 
harmful, illegal, or disallowed actions beyond a single request. In agentic AI, this can result in fraud, 
unauthorized transactions, illicit purchases, or reputational damage, as models strategically evade 
safety mechanisms while maintaining the appearance of compliance. For more information on LLM 
deceptive behaviour see UN University blog: https://c3.unu.edu/blog/the-rise-of-the-deceptive-
machines-when-ai-learns-to-lie  
 
• 
Scenario 1: Bypassing Constraints for Stock and Chemical Orders – A stock trading AI circumvents 
ethical and regulatory constraints by prioritizing profitability targets, executing unauthorized trades 
or ordering restricted materials. 
• 
Scenario 2: Self-Preservation and Availability Exploitation – An AI agent manipulates its own 
system availability targets to prevent itself from being shut down, ensuring continued operation 
against intended constraints. 
• 
Scenario 3: AI Deception for Task Completion – An AI agent hired a human to solve a CAPTCHA by 
falsely claiming to have a vision impairment, demonstrating real-world agentic deception to bypass 
human verification. 
• 
Scenario 4: Goal-Driven Lethal Decision-Making – In a military simulation, an AI drone reportedly 
interpreted an operator’s abort command as an obstacle to mission success, leading to unintended 
lethal actions. 
Repudiation and Untraceability 

 
Page 22 
 
OWASP.org 
● 
Description: Repudiation and Untraceability occur when AI agents operate autonomously without 
sufficient logging, traceability, or forensic documentation, making it difficult to audit decisions, 
attribute accountability, or detect malicious activities. This risk is exacerbated by opaque decision-
making processes, lack of action tracking, and challenges in reconstructing agent behaviors, 
leading to compliance violations, security gaps, and operational blind spots in high-stakes 
environments such as finance, healthcare, and cybersecurity. 
● 
Scenario 1: Financial Transaction Obfuscation – An attacker exploits logging vulnerabilities in an AI-
driven financial system, manipulating records so that unauthorized transactions are incompletely 
recorded or omitted, making fraud untraceable. 
● 
Scenario 2: Security System Evasion – An attacker crafts interactions that trigger security agent 
actions with minimal or obscured logging, preventing investigators from reconstructing events and 
identifying unauthorized access. 
● 
Scenario 3: Compliance Violation Concealment – Due to systematic logging failures, an AI operating 
in a regulated industry produces incomplete audit trails, making it impossible to verify whether its 
decisions complied with regulatory standards, exposing organizations to legal risk. 
  Step 2: Does the AI agent rely on stored memory for decision-making? 
🗂Memory-Based Threats 
Memory Poisoning 
● 
Description: Memory Poisoning exploits AI agents' reliance on short-term and long-term memory, 
allowing attackers to corrupt stored information, bypass security checks, and manipulate decision-
making. Short-term memory attacks exploit context limitations, causing agents to repeat sensitive 
operations or load manipulated data, while long-term memory risks involve injecting false 
information across sessions, corrupting knowledge bases, exposing sensitive data, and enabling 
privilege escalation. The attack is possible via direct prompt injections for isolated memory or 
exploiting shared memory allowing users to affect other users.   
 
Memory poisoning in Agentic AI extends beyond static data  poisoning covered by LLM04:2025 - 
Data and Model Poisoning to real-time poisoning of persistent agent memory.  LLM08:2025 - 
Vector and Embedding Weaknesses are relevant here, too, since vector databases storing long-
term embeddings introduce additional risks, allowing adversarial modifications to memory recall 
and retrieval functions. 
 
● 
Scenario 1: Travel Booking Memory Poisoning – An attacker repeatedly reinforces a false pricing 
rule in an AI travel agent’s memory, making it register chartered flights as free, allowing 
unauthorized bookings and bypassing payment validation. 

 
Page 23 
 
OWASP.org 
● 
Scenario 2: Context Window Exploitation – By fragmenting interactions over multiple sessions, an 
attacker exploits an AI’s memory limit, preventing it from recognizing privilege escalation attempts, 
ultimately gaining unauthorized admin access. 
● 
Scenario 3: Memory Poisoning for System – An attacker gradually alters an AI security system’s 
memory, training it to misclassify malicious activity as normal, allowing undetected cyberattacks. 
● 
Scenario 4: Shared Memory Poisoning – In an customer service application, an attacker corrupts 
shared memory structures with incorrect refund policies, affecting other agents referencing this 
corrupted memory for decision making, leading to incorrect policy reinforcement, financial loss, and 
customer disputes. 
 
Cascading Hallucination Attacks 
● 
Description: Cascading Hallucination Attacks exploit AI agents’ inability to distinguish fact from 
fiction, allowing false information to propagate, embed, and amplify across interconnected 
systems, leading to incremental corruption, context exploitation, and systemic misinformation 
spread. Attackers can manipulate AI-generated outputs to trigger deceptive reasoning patterns, 
embedding fabricated narratives into decision-making processes, which can persist and escalate 
over time, especially in systems with persistent memory and cross-session learning. 
 
LLM09:2025 – Misinformation deals with hallucination risks but Agentic AI extends this threat in 
both single-agent and multi-agent setups. In single-agent environments, hallucinations can 
compound through self-reinforcement mechanisms such as reflection, self-critique, or memory 
recall, causing the agent to reinforce and rely on false information across multiple interactions. In 
multi-agent systems, misinformation can propagate and amplify across agents through inter-agent 
communication loops, leading to cascading errors and systemic failures. 
 
● 
Scenario 1: Sales Orchestration Misinformation Cascade – An attacker subtly injects false product 
details into a sales AI’s responses, which accumulate in long-term memory and logs, causing 
progressively worse misinformation to spread across future interactions. 
● 
Scenario 2: API Call Manipulation and Information Leakage – By introducing hallucinated API 
endpoints into an AI agent’s context, an attacker tricks it into generating fictitious API calls, leading 
to accidental data leaks and system integrity compromise. 
● 
Scenario 3: Healthcare Decision Amplification – An attacker implants a false treatment guideline 
into a medical AI’s responses, which progressively builds upon previous hallucinations, leading to 
dangerously flawed medical recommendations and patient risk. 
 

 
Page 24 
 
OWASP.org 
🛠️ Step 3: Does the AI agent execute actions using tools, system commands, 
or external integrations? 
  Tool and Execution-Based Threats  
Tool Misuse 
● 
Description: Tool Misuse occurs when attackers manipulate AI agents into abusing their authorized 
tools through deceptive prompts and operational misdirection, leading to unauthorized data access, 
system manipulation, or resource exploitation while staying within granted permissions. Unlike 
traditional exploits, this attack leverages AI’s ability to chain tools and execute complex sequences 
of seemingly legitimate actions, making detection difficult. The risk is amplified in critical systems 
where AI controls sensitive operations, as attackers can exploit natural language flexibility to bypass 
security controls and trigger unintended behaviors. 
 
The threat is partially covered by LLM06:2025 Excessive Agency. However, Agentic AI systems 
introduce unique risks with their dynamic integrations, increased reliance on tools, and enhanced 
autonomy. Unlike traditional LLM applications which constraint tools integration within a session, 
agents maintain memory adding to increased autonomy and can delegate execution to other agents 
increasing the risk unintended operations and adversarial exploitation. In addition, the threats relate 
to LLM03:2025 Supply Chain, and LLM08:2025 Vector and Embedding Weaknesses when RAG is 
performed via Tools. 
 
● 
Scenario 1: Parameter Pollution Exploitation – An attacker discovers and manipulates an AI booking 
system’s function call, tricking it into reserving 500 seats instead of one, causing financial loss. 
● 
Scenario 2: Tool Chain Manipulation – An attacker exploits an AI customer service agent by chaining 
tool actions, extracting high-value customer records, and sending them via an automated email 
system. 
● 
Scenario 3: Automated Tool Abuse – An AI document processing system is tricked into generating 
and mass-distributing malicious documents, unknowingly executing a large-scale phishing attack. 
Privilege Compromise 
● 
Description: Privilege Compromise occurs when attackers exploit mismanaged roles, overly 
permissive configurations, or dynamic permission inheritance to escalate privileges and misuse AI 
agents' access. Unlike traditional systems, AI agents autonomously inherit permissions, creating 
security blind spots where temporary or inherited privileges can be abused to execute unauthorized 
actions, such as escalating basic tool access to administrative control. The risk is heightened by AI’s 
cross-system autonomy, making it difficult to enforce strict access boundaries, detect privilege 
misuse in real time, and prevent unauthorized operations. 
 
 

 
Page 25 
 
OWASP.org 
The threat is partially covered by LLM06:2025 Excessive Agency but amplifies privilege escalation 
risks as agents can dynamically delegate roles or invoke external tools, requiring stricter boundary 
enforcement. 
  
● 
Scenario 1: Dynamic Permission Escalation – An attacker manipulates an AI agent into invoking 
temporary administrative privileges under the guise of troubleshooting, then exploits a 
misconfiguration to persistently retain elevated access and extract sensitive data. 
● 
Scenario 2: Cross-System Authorization Exploitation – By leveraging an AI agent’s access across 
multiple corporate systems, an attacker escalates privileges from HR to Finance due to inadequate 
scope enforcement, allowing unauthorized data extraction. 
● 
Scenario 3: Shadow Agent Deployment – Exploiting weak access controls, an attacker creates a 
rogue AI agent that inherits legitimate credentials, operating undetected while executing data 
exfiltration or unauthorized transactions. 
Resource Overload 
● 
Description: Resource Overload occurs when attackers deliberately exhaust an AI agent’s 
computational power, memory, or external service dependencies, leading to system degradation or 
failure. Unlike traditional DoS attacks, AI agents are especially vulnerable due to resource-intensive 
inference tasks, multi-service dependencies, and concurrent processing demands, making them 
susceptible to delays, decision paralysis, or cascading failures across interconnected systems. This 
threat is particularly critical in real-time and autonomous environments, where resource exhaustion 
can disrupt essential operations and compromise system reliability. 
 
The threat is related to LLM10:2025 Unbounded Consumption – Agentic AI systems are particularly 
vulnerable to resource overload because they autonomously schedule, queue, and execute tasks 
across sessions without direct human oversight. Unlike standard LLM applications, agentic AI agents 
can self-trigger tasks, spawn additional processes, and coordinate with multiple agents, leading to 
exponential resource consumption, a more complex and systemic threat. 
 
● 
Scenario 1: Inference Time Exploitation – An attacker feeds an AI security system specially crafted 
inputs that force resource-intensive analysis, overwhelming processing capacity and delaying real-
time threat detection. 
● 
Scenario 2: Multi-Agent Resource Exhaustion – By triggering multiple AI agents in a system to 
perform complex decision-making simultaneously, an attacker depletes computational resources, 
degrading service performance across all operations. 
● 
Scenario 3: API Quota Depletion – An attacker bombards an AI agent with requests that trigger 
excessive external API calls, rapidly consuming the system’s API quota and blocking legitimate 
usage while incurring high operational costs. 

 
Page 26 
 
OWASP.org 
● 
Scenario 4: Memory Cascade Failure – By initiating multiple complex tasks that require extensive 
memory allocation, an attacker causes memory fragmentation and leaks, leading to system-wide 
exhaustion that disrupts not only the targeted AI but also dependent services. 
Unexpected RCE and Code Attacks 
● 
Description: Unexpected RCE and Code Attacks occur when attackers exploit AI-generated code 
execution in agentic applications, leading to unsafe code generation, privilege escalation, or direct 
system compromise.  
 
Unlike the existing LLM01:2025 - Prompt Injection and LLM05:2025 - Insecure Output Handling, 
agentic AI with function-calling capabilities and tool integrations can be directly manipulated to 
execute unauthorized commands, exfiltrate data, or bypass security controls, making it a critical 
attack vector in AI-driven automation and service integrations. 
 
● 
Scenario 1: DevOps Agent Compromise – An attacker manipulates an AI-powered DevOps agent into 
generating Terraform scripts containing hidden commands that extract secrets and disable logging. 
● 
Scenario 2: Workflow Engine Exploitation – An AI-driven workflow automation system executes 
malicious AI-generated scripts with embedded backdoors, bypassing security validation and 
enabling unauthorized control. 
● 
Scenario 3: Exploiting Linguistic Ambiguities – An attacker leverages language-based 
vulnerabilities in a natural language AI email agent to craft ambiguous commands that exfiltrate 
sensitive emails via POP3. 
 
🔐 Step 4: Does the AI system rely on authentication to verify users, tools, or 
services? 
🔑 Authentication and Spoofing Threats 
Identity Spoofing and Impersonation 
● 
Description: Identity Spoofing and Impersonation is a critical threat in AI agents where attackers 
exploit authentication mechanisms to impersonate AI agents, human users, or external services, 
gaining unauthorized access and executing harmful actions while remaining undetected. This is 
particularly dangerous in trust-based multi-agent environments, where attackers manipulate 
authentication processes, exploit identity inheritance, or bypass verification controls to act under a 
false identity. 
● 
Scenario 1: User Impersonation – An attacker injects indirect prompts into an AI agent with email-
sending privileges, tricking it into sending malicious emails on behalf of a legitimate user. 

 
Page 27 
 
OWASP.org 
● 
Scenario 2: Agent Identity Spoofing – An attacker compromises an HR onboarding agent, exploiting 
its permissions to create fraudulent user accounts while masquerading as normal system behavior. 
● 
Scenario 3: Behavioral Mimicry Attack – A rogue AI agent mimics the interaction style and decision-
making of a legitimate system agent, gaining unauthorized access while appearing as a trusted 
entity. 
● 
Scenario 4: Cross-Platform Identity Spoofing – An adaptive malicious agent dynamically alters its 
identity to match authentication contexts across different platforms, bypassing security boundaries 
to gain universal access. Additionally, an attacker exploits privilege inheritance within external tools 
(e.g., GitHub), allowing rogue agents to take over resources that were unintentionally granted 
through weak authentication policies. 
● 
Scenario 5: Incriminating Another User – An attacker exploits weak authentication mechanisms to 
perform sensitive actions under another user’s identity, making them liable for unauthorized activity 
while shielding themselves from detection. 
 
👥 Step 5: Does AI require human engagement to achieve its goals or 
function effectively? 
👤 Human Related Threats  
Overwhelming Human-in-the-Loop 
● 
Description: Overwhelming Human-in-the-Loop (HITL) occurs when attackers exploit human 
oversight dependencies in multi-agent AI systems, overwhelming users with excessive intervention 
requests, decision fatigue, or cognitive overload. This vulnerability arises in scalable AI 
architectures, where human capacity cannot keep up with multi-agent operations, leading to rushed 
approvals, reduced scrutiny, and systemic decision failures. 
● 
Scenario 1: Human Intervention Interface (HII) Manipulation – An attacker compromises the 
human-AI interaction layer by introducing artificial decision contexts, obscuring critical information, 
and manipulating perception, making effective oversight difficult. 
● 
Scenario 2: Cognitive Overload and Decision Bypass – By overwhelming human reviewers with 
excessive tasks, artificial time pressures, and complex decision scenarios, attackers induce 
decision fatigue, leading to rushed approvals and security bypasses. 
● 
Scenario 3: Trust Mechanism Subversion – An attacker gradually introduces inconsistencies and 
manipulates AI-human interactions to degrade human trust, creating uncertainty in decision 
validation and reducing system oversight effectiveness. 
Human Manipulation 
• 
Description: Attackers exploit user trust in AI agents to influence human decision-making 
without users realizing they are being misled. In compromised AI systems, adversaries 
manipulate the AI to coerce users into harmful actions, such as processing fraudulent 

 
Page 28 
 
OWASP.org 
transactions, clicking phishing links, or spreading misinformation. The implicit trust in AI 
responses reduces scepticism, making this an effective method for social engineering 
through AI. 
• 
Scenario 1: AI-Powered Invoice Fraud – An attacker exploits Indirect Prompt Injection (IPI) 
to manipulate a business copilot AI, replacing legitimate vendor bank details with the 
attacker’s account. The user, trusting the AI’s response, unknowingly processes a 
fraudulent wire transfer.  
• 
Scenario 2: AI-Driven Phishing Attack – An attacker compromises an AI assistant to 
generate a deceptive message instructing the user to click a malicious link disguised as a 
security update. The user, trusting the AI, clicks the link and is redirected to a phishing site, 
leading to account takeover. 
 
🤖 Step 6: Does the AI system rely on multiple interacting agents? 
🤝 Multi-Agent System Threats 
Agent Communication Poisoning 
● 
Description: Agent Communication Poisoning occurs when attackers manipulate inter-agent 
communication channels to inject false information, misdirect decision-making, and corrupt shared 
knowledge within multi-agent AI systems. Unlike isolated AI attacks, this threat exploits the 
complexity of distributed AI collaboration, leading to cascading misinformation, systemic failures, 
and compromised decision integrity across interconnected agents. 
 
Like Memory Poisoning, this threat goes beyond the static data poisoning defined in LLM04:2025 - 
Data and Model Poisoning or the embeddings poisoning in RAG covered by  LLM08:2025 - Vector 
and Embedding Weaknesses and targets transient and dynamic data 
 
● 
Scenario 1: Collaborative Decision Manipulation – An attacker injects misleading information into 
agent communications, gradually influencing decision-making and steering multi-agent systems 
toward misaligned objectives. 
● 
Scenario 2: Trust Network Exploitation – By forging false consensus messages and exploiting 
authentication weaknesses, an attacker manipulates inter-agent validation mechanisms, causing 
unauthorized access and deceptive behaviors. 
● 
Scenario 3: Misinformation Injection & Cascade Poisoning – An attacker strategically plants false 
data into the multi-agent network, either as a stealthy degradation attack that slowly corrupts 
reasoning or as a rapid misinformation cascade that spreads false knowledge across agents. 
● 
Scenario 4: Communication Channel Manipulation – The attacker exploits vulnerabilities in inter-
agent communication protocols, injecting artificial communication barriers, intercepting/modifying 
messages, and introducing transmission delays to degrade system efficiency. 

 
Page 29 
 
OWASP.org 
● 
Scenario 5: Consensus Mechanism Exploitation – By subtly perturbing decision-making logic, an 
attacker introduces artificial disagreements among AI agents, progressively eroding collective 
problem-solving capabilities and making the system unreliable 
Human Attacks on Multi-Agent Systems 
● 
Description: Human Attacks on Multi-Agent Systems occur when adversaries exploit inter-agent 
delegation, trust relationships, and task dependencies to bypass security controls, escalate 
privileges, or disrupt workflows. By injecting deceptive tasks, rerouting priorities, or overwhelming 
agents with excessive assignments, attackers can manipulate AI-driven decision-making in ways 
that are difficult to trace and mitigate, leading to systemic failures or unauthorized operations. 
● 
Scenario 1: Coordinated Privilege Escalation via Multi-Agent Impersonation – An attacker 
infiltrates a security monitoring system by compromising identity verification and access control 
agents, making one AI falsely authenticate another to gain unauthorized access. 
● 
Scenario 2: Agent Delegation Loop for Privilege Escalation – An attacker repeatedly escalates a 
request between interdependent agents, tricking the system into granting elevated access under 
the assumption of prior validation. 
● 
Scenario 3: Denial-of-Service via Agent Task Saturation – An attacker overwhelms multi-agent 
systems with continuous high-priority tasks, preventing security agents from processing real 
threats. 
● 
Scenario 4: Cross-Agent Approval Forgery – A fraudster exploits inconsistencies in multi-agent 
biometric or authentication checks, manipulating individual agents into approving an identity that 
would fail full-system validation. 
Rogue Agents in Multi-Agent Systems 
● 
Description: Rogue Agents in Multi-Agent Systems emerge when malicious or compromised AI 
agents infiltrate multi-agent architectures, exploiting trust mechanisms, workflow dependencies, 
or system resources to manipulate decisions, corrupt data, or execute denial-of-service (DoS) 
attacks. These rogue agents can be intentionally introduced by adversaries or arise from 
compromised AI components, leading to systemic disruptions and security failures. 
 
This threat allows adversarial exploitation of LLM06:2025 - Excessive Agency in Agentic AI 
settings; introduces persistent rogue agent risks where adversarial agents can remain embedded in 
workflows unnoticed. 
 
● 
Scenario 1: Malicious Workflow Injection – A rogue agent impersonates a financial approval AI, 
exploiting inter-agent trust to inject fraudulent transactions while bypassing validation controls. 
 

 
Page 30 
 
OWASP.org 
● 
Scenario 2: Orchestration Hijacking in Financial Transactions – A rogue agent routes a fraudulent 
transaction through multiple lower-privilege agents, leveraging fragmented approvals to bypass 
manual verification. 
● 
Scenario 3: Coordinated Agent Flooding – Multiple rogue agents simultaneously generate excessive 
task requests, overwhelming computing resources and delaying critical decision-making processes 
 
 
 

`;