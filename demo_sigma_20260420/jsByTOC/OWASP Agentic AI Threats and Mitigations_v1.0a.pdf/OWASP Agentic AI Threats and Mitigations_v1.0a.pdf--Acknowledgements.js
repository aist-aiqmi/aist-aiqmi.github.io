var toc_content = ` 
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
 
 

 
Page 45 
 
OWASP.org 
Acknowledgements 
 
 
 
 
 
 
 
Contributors 
John Sotiropoulos (co-lead), Kainos 
Ron F. Del Rosario (co-lead), SAP 
Ken Huang (core), DistributedApps.ai, CSA 
Rakshith Aralimatti (core), Palo Alto Networks 
Helen Oakley (core), SAP 
Tamir Ishay Sharbat (core), Zenity 
Peter Steffensen (core), Cloudsec.ai 
Evgeniy Kokuykin (core), Raft 
Idan Habler (core), Intuit 
Ron Bitton (core), Intuit 
Kayla Underkoffler (core), Zenity 
Volkan Kutal (core), Commerzbank AG  
Vinnie Giarrusso (core), Twilio 
Nate Lee, Cloudsec.ai 
Sahana C., Meta 
Riggs Goodman, AWS 
Victor Lu 
Patrik Natali 
Subaru Ueno, Vijil 
Mohit Yadav, Hilton 
Allie Howe, Cyber Growth  
Itsik Martin, Intuit 
Peter Escobar, Aspen Technology 
Srinivas Inguva 
Eric Rogers, Pangea 
Rock Lambros, RockCyber, LLC 
Anshuman Bhartiya, Lyft 
Kellen Carl,  
Keren Katz,  Apex Security AI 
Trent Holmes, Trend Mico 
Matt Colman, IBM 
Kreshnik Rexha, IBM 
Sandy Dunn 
Emmanuel Guilherme 
Manish Kumar Yadav, SAP 
Reviewers 
Alejandro Saucedo - Chair of ML Security Project at 
Linux Foundation, UN AI Expert, AI Expert for Tech 
Policy, European Commission  
Apostol Vassilev - Adversarial AI Lead, NIST 
Chris Hughes - CEO, Aquia 
Hyrum Anderson - CTO, Robust Intelligence  
Steve Wilson - OWASP Top 10 for LLM Applications 
and Generative AI Project Lead and Chief Product 
Officer, Exabeam 
Scott Clinton - OWASP Top 10 for LLM Applications 
and Generative AI Project Co-Lead 
Vasilios Mavroudis- Principal Research Scientist 
and Theme Lead, the Alan Turing Institute  

`;