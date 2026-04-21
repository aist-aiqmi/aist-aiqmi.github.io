var toc_content = `Secure deployment
Guidelines for secure AI system development
Develop incident management procedures 
The inevitability of security incidents affecting your AI systems is reflected in your incident response, 
escalation and remediation plans. Your plans reflect different scenarios and are regularly reassessed as 
the system and wider research evolves. You store critical company digital resources in offline backups. 
Responders have been trained to assess and address AI-related incidents. You provide high-quality audit 
logs and other security features or information to customers and users at no extra charge, to enable their 
incident response processes. 

Release AI responsibly
You release models, applications or systems only after subjecting them to appropriate and effective 
security evaluation such as benchmarking and red teaming (as well as other tests that are out of scope 
for these guidelines, such as safety or fairness), and you are clear to your users about known limitations 
or potential failure modes. Details of open-source security testing libraries are given in the further reading 
section at the end of this document.
Make it easy for users to do the right things
You recognise that each new setting or configuration option is to be assessed in conjunction with the 
business benefit it derives, and any security risks it introduces. Ideally, the most secure setting will be 
integrated into the system as the only option. When configuration is necessary, the default option should 
be broadly secure against common threats (that is, secure by default). You apply controls to prevent the 
use or deployment of your system in malicious ways. 
You provide users with guidance on the appropriate use of your model or system, which includes 
highlighting limitations and potential failure modes. You state clearly to users which aspects of security 
they are responsible for, and are transparent about where (and how) their data might be used, accessed 
or stored (for example, if it is used for model retraining, or reviewed by employees or partners).
15
Guidelines for secure AI system development

This section contains guidelines that apply to the secure operation and maintenance stage of the AI 
system development life cycle. It provides guidelines on actions particularly relevant once a system has 
been deployed, including logging and monitoring, update management and information sharing.

Monitor your system’s behaviour
You measure the outputs and performance of your model and system such that you can observe 
sudden and gradual changes in behaviour affecting security. You can account for and identify potential 
intrusions and compromises, as well as natural data drift.
Monitor your system’s inputs
In line with privacy and data protection requirements, you monitor and log inputs to your system (such 
as inference requests, queries or prompts) to enable compliance obligations, audit, investigation and 
remediation in the case of compromise or misuse. This could include explicit detection of out-of-
distribution and/or adversarial inputs, including those that aim to exploit data preparation steps (such as 
cropping and resizing for images).  
Follow a secure by design approach to updates
You include automated updates by default in every product and use secure, modular update procedures 
to distribute them. Your update processes (including testing and evaluation regimes) reflect the fact that 
changes to data, models or prompts can lead to changes in system behaviour (for example, you treat 
major updates like new versions). You support users to evaluate and respond to model changes (for 
example by providing preview access and versioned APIs).
Collect and share lessons learned
You participate in information-sharing communities, collaborating across the global ecosystem of 
industry, academia and governments to share best practice as appropriate. You maintain open lines 
of communication for feedback regarding system security, both internally and externally to your 
organisation, including providing consent to security researchers to research and report vulnerabilities. 
When needed, you escalate issues to the wider community, for example publishing bulletins responding 
to vulnerability disclosures, including detailed and complete common vulnerability enumeration. You 
take action to mitigate and remediate issues quickly and appropriately.
4. 
`;