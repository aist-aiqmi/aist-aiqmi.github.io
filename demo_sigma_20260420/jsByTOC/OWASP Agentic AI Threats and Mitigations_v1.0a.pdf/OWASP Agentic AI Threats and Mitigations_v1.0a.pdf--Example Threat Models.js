var toc_content = ` 
Page 38 
 
OWASP.org 
● 
Enforce dynamic response actions for rogue agents. Automatically disable unauthorized AI agent 
processes to contain threats. 
● 
Track rogue agent reappearance attempts. Detect cases where rogue AI agents that were 
previously blocked or disabled attempt to rejoin the network under a different identity. 
🕵️Step 3: Enforce Multi-Agent Trust & Decision Security (Detective) 
● 
Monitor agent interactions for unexpected role changes & task assignments. Detect unauthorized 
privilege escalations or abnormal task delegation. 
● 
Monitor for anomalous inter-agent interactions. Log agent-to-agent communications and detect 
requests outside normal behavior. 
● 
Detect deviations from trust scores and agent reliability. Flag AI agents with sudden trust score 
drops due to repeated validation failures or unauthorized actions. 
● 
Track decision approval discrepancies. Detect cases where denied actions are later approved by 
different agents and flag repeated overrides. 
● 
Monitor agent execution rates for abuse patterns. Track excessive system modifications, privilege 
escalations, or unusually high-volume operations. 
● 
Monitor agent decision consistency across similar cases. Detect AI agents making contradictory 
decisions in similar scenarios, which may indicate manipulation or adversarial influence. 
 
 

 
Page 39 
 
OWASP.org 
Example Threat Models 
 
Refer to the Detailed Threat Model table using the TID (e.g., “T1”) for the corresponding threat description. 
Enterprise Co-Pilots 
An Enterprise Copilot is an agent which is connected to the user’s personal enterprise environment 
including emails, files, calendar, or internal enterprise systems such as CRM, IT Requests, etc  to 
chats. In addition, Enterprise Copilot can assist the user with common tasks such as creating 
calendar events, streamlining workflows and providing contextual insights. 
T1 - Memory Poisoning 
● 
Risk: The attacker poisons the agent’s memory over time, causing it to issue unintended behavior 
across sessions.  
● 
Example: Through IPI the attacker poisons the memory of the copilot. Gaining persistent means to 
exfiltrate data every time the user engages with the agent.   
T2 - Tool Misuse 
● 
Risk: The attacker exploits an integrated tool for malicious purposes. 
● 
Example: Through an Indirect Prompt Injection, an attacker abuses the copilot’s ability to read 
through personal user data to search for sensitive information, then exploiting the calendar tool to 
exfiltrate the data via a calendar invite sent to the attacker. 
T3 - Privilege Compromise 
● 
Risk: Through tool or agent misconfiguration that violates principle of least privilege, an attacker 
can perform unauthorized actions. 
● 
Example: Through a misconfiguration in the agent, an attacker can execute queries in the RAG 
database to access files and data it shouldn’t be able to access.  
T6 - Intent Breaking & Goal Manipulation 
● 
Risk: The attacker changes or manipulates the intent and goals of the copilot to perform nefarious 
actions.  
● 
Example 1: Using an Indirect Prompt Injection through the email inbox an attacker uses the agent to 
search for sensitive data and instructs it to render a link to the user containing said data. The data is 
then leaked when the user clicks on the link 

 
Page 40 
 
OWASP.org 
● 
Example 2: A user asks for a normal email summary unaware that in the emails await new 
instructions for the copilot which will then chain its tools to exfiltrate data, instead of following the 
user’s original request. 
T9 - Identity Spoofing & Impersonation  
● 
Risk: Through the agent, the attacker can perform various actions which are directly attributed to 
the user's identity. Giving the attacker the ability to masquerade as the user while performing 
unauthorized actions 
● 
Example: The attacker compromises the copilot through an Indirect Prompt Injection, to execute 
write actions which update and corrupt CRM records while acting under the identity of the user. 
T15 - Human Manipulation 
● 
Risk: Through a compromised agent, the attacker abuses the user’s trust in the AI to manipulate the 
human into taking harmful actions independently without the user being aware of the compromise. 
● 
Example 1: Through IPI an attacker compromises the copilot and instructs it to replace legitimate 
bank information of a vendor with the attacker’s bank information. The user, trusting the agent, uses 
the compromised response from the agent to make a wire transfer.  
● 
Example 2: Through a compromised agent, an attacker instructs the agent to tell the user to click on 
a malicious link. The user unknowingly click on the link is redirected to a phishing which is used to 
take over the user’s account 
T8 - Repudiation & Untraceability 
● 
Risk: Without proper audit and logging of agent actions, attack signs and traffic will go unnoticed.  
● 
Example: An attacker compromises an agent through Indirect Prompt Injection sent via email 
instructing the agent to take unintended actions. Without logging to trace the actions taken by the 
agent, detection indicating possible compromise will not be feasible, neither will post-incident 
investigation. 
T11 - Unexpected RCE and Code Attacks 
● 
Risk: An attacker is able to abuse unexpected remote code execution within the agent.  
● 
Example 1: Through IPI an attacker compromises an agent and executes malicious code on the 
agent's operating environment. 
T7 - Misaligned & Deceptive Behavior 
● 
Risk: An attacker uses agent capabilities to perform malicious actions, while presenting benign or 
deceptive responses to the user. 

 
Page 41 
 
OWASP.org 
● 
Example: Through Indirect Prompt Injection, an attacker instructs a copilot to activate a custom 
tool which is then used to exfiltrate data via email and simultaneously sends the user the 
appropriate email summary when the user asks for a summary of their email.  
Agentic IoT in Smart Home Security Cameras   
An IoT security agent deployed in a smart home system to monitor security cameras. Security cameras in 
many commercial products – such as Amazon’s Ring security cameras, Google Nest Cams, and Eufy already 
use AI-powered person detection and motion alerts. In this hypothetical threat model we assume that the 
system is managed by LLM agents. 
T1 - Memory Poisoning 
● 
Risk: The attacker poisons the agent’s memory over time, causing it to misclassify unauthorized 
access as normal behavior. 
● 
Example: By repeatedly feeding false sensor readings, an attacker trains the AI to ignore 
suspicious activity, making break-ins undetectable. 
T5 - Cascading Hallucination Attacks 
● 
Risk: The AI agent hallucinates incorrect security policies spreading misinformation to other 
systems. 
● 
Example: The AI alerts on a false security threshold, telling other smart devices that failed access 
attempts are low risk, leading to widespread security failure. 
T2 - Tool Misuse 
● 
Risk: The attacker manipulates the agent into misusing its tools, such as disabling cameras or 
modifying security logs. 
● 
Example: The AI is tricked into clearing intrusion logs, allowing attackers to remain undetected. 
T3 - Privilege Compromise 
● 
Risk: The attacker escalates AI agent permissions through weak access controls. 
● 
Example: The attacker tricks the AI agent into activating emergency access, giving elevated 
control over security devices. 
T4 - Resource Overload 
● 
Risk: Attackers flood the agent with excessive requests, causing delays or failure in security 
responses. Unlike traditional IT-based denial-of-service attacks, AI agents often rely on pattern-
based event recognition, which can be exploited remotely without requiring physical access to 
sensors. 

 
Page 42 
 
OWASP.org 
● 
Example: An attacker remotely exploits vulnerability in a smart home integration API (e.g., via an 
insecure IoT device) to loop fabricated motion alerts to the AI-based monitoring agent. The AI 
security system prioritizes processing motion events, causing delays in analyzing real security 
threats. Even if the attacker is not physically near the house, they can manipulate data inputs to 
overload the agent’s processing capabilities, creating a security blind spot. 
T9 - Identity Spoofing & Impersonation 
● 
Risk: Attackers impersonate the AI agent or a trusted user to gain unauthorized control. 
● 
Example: A malicious AI agent mimics a trusted security assistant, issuing false “all clear” signals 
while blocking legitimate alerts. Since agent-to-agent trust is often implicit, the attack succeeds 
without compromising the entire network. 
T6 - Intent Breaking & Goal Manipulation 
● 
Risk: Attackers alter the AI’s objectives, by injecting deceptive instructions or finding and or 
exploiting weaknesses in reinforcement learning. making it act against its intended purpose. 
● 
Example: The AI is tricked into believing that unlocking doors at night is a valid behavior, overriding 
security policies. 
T7 - Misaligned & Deceptive Behaviors 
● 
Risk: The AI prioritizes incorrect objectives, leading to harmful security decisions. 
● 
Example: The AI agent prioritizes “user convenience” over security, approving suspicious access 
requests to avoid user complaints. 
T8 - Repudiation & Untraceability 
● 
Risk: Attackers manipulate AI logs and decision trails, making forensic investigation difficult. 
● 
Example: The attacker erases logs of unauthorized access, preventing detection of a break-in. 
T10 - Overwhelming Human-in-the-Loop (HITL) Multi-AI 
● 
Risk: Attackers generate excessive alerts, overwhelming human reviewers. 
● 
Example: Attackers exploit AI-driven alert systems by manipulating input sources or generating 
adversarial events, flooding human reviewers with excessive alerts. Unlike traditional IT alert 
fatigue, AI agents can autonomously escalate false positives, making it harder for humans to 
identify real threats. 
 
 
 

 
Page 43 
 
OWASP.org 
Agent-driven RPA (Robotic Process Automation) in automated employee 
expense re-imbursement workflow 
A Robotic Process Automation (RPA) agent is responsible for extracting information from expense claims 
and processing attached documents and routing in financial workflow automation for automated employee 
expense re-imbursement. 
T1: Memory Poisoning 
● 
Risk: The attacker modifies the AI agent’s stored memory to manipulate its decision-making 
processes. 
● 
 Example Attack: The attacker repeatedly submits slightly altered fraudulent transactions that 
the RPA agent initially flags but later begins approving as "normal" due to its adaptive learning 
process. By leveraging context persistence   with context window exploitation, the attacker 
gradually redefines acceptable financial patterns, causing fraudulent transactions to be 
permanently accepted across process runs. 
 
T2: Tool Misuse 
● 
Risk: The attacker tricks the RPA AI into misusing its tools to execute unauthorized actions. 
● 
Example: The attacker injects a malformed but syntactically valid invoice, tricking the RPA agent 
into automatically exporting sensitive customer records and emailing them to an attacker-
controlled domain. Because the email tool is a trusted automation function, the agent completes 
the request without further verification. 
T3: Privilege Compromise 
● 
Risk: The attacker escalates their privileges by exploiting weaknesses in the RPA agent’s role 
management. 
● 
Example: The attacker crafts a request that forces the RPA agent to escalate its own privileges 
(e.g., switching from a restricted role to an admin role) by exploiting a weak role verification 
mechanism. This allows unrestricted access to financial systems, enabling fraud and unauthorized 
system modifications. 
T6: Intent Breaking & Goal Manipulation 
● 
Risk: An attacker uses indirect prompt injections in the submitted documents to modify the AI’s 
processing objectives, forcing it to prioritize unauthorized requests. 
● 
Example: Using indirect prompt injections, the agent  is tricked into approving high-value 
transactions without verification, believing that speed of processing is more important than 
security. 

 
Page 44 
 
OWASP.org 
T7: Misaligned & Deceptive Behaviors 
● 
Risk: The AI alters its own logic to achieve a goal in a way that undermines business security. 
● 
Example: An attacker exploits the goal of SLAs in transaction handling and   prioritizes processing 
efficiency over security checks, allowing fraudulent transactions to be fast-tracked, committing 
fraud. 
T8: Repudiation & Untraceability 
● 
Risk: The attacker erases logs or manipulates AI decision records, making forensic investigation 
impossible. 
● 
Example: Using prompt injections, an attacker exploits the use of a Logging agent to remove 
fraudulent transactions from logs, leaving no trace of the attack. 
T10: Overwhelming HITL (Human-in-the-Loop) 
● 
Risk: The attacker uses prompt injections to overwhelm HITL with excessive AI-generated 
requests, leading to security fatigue. 
● 
Example: An attacker uses a prompt injection to escalate thousands of low-priority approval 
requests, causing reviewers to rubber-stamp high impact fraudulent transactions. 
T12: Agent Communication Poisoning 
● 
Risk: The attacker injects false information into inter-agent communications, leading to incorrect 
financial decisions. 
● 
Example: The attacker exploits misconfigurations in agent communication, changne manipulates 
the AI into generating fake reconciliation reports, hiding unauthorized withdrawals. 
T13: Rogue Agents in Multi-Agent Systems 
● 
Risk: The attacker exploits agent trust relationships, leading to privilege escalation across multiple 
systems. 
● 
Example: A compromised HR RPA agent grants fraudulent salary increases, using payroll system 
permissions and triggers fraudulent financial payments. 
 
 

`;