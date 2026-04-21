var toc_content = `OWASP Top 10 for LLM Applications v2.0
25
genai.owasp.org
Example Attack Scenarios
An LLM-based personal assistant app is granted access to an individual’s mailbox via an extension
in order to summarise the content of incoming emails. To achieve this functionality, the extension
requires the ability to read messages, however the plugin that the system developer has chosen to
use also contains functions for sending messages. Additionally, the app is vulnerable to an indirect
prompt injection attack, whereby a maliciously-crafted incoming email tricks the LLM into
commanding the agent to scan the user's inbox for senitive information and forward it to the
attacker's email address. This could be avoided by:
• eliminating excessive functionality by using an extension that only implements mail-reading
capabilities,
• eliminating excessive permissions by authenticating to the user's email service via an OAuth
session with a read-only scope, and/or
• eliminating excessive autonomy by requiring the user to manually review and hit 'send' on
every mail drafted by the LLM extension.
Alternatively, the damage caused could be reduced by implementing rate limiting on the mail-
sending interface.
Reference Links
1. Slack AI data exfil from private channels: PromptArmor
2. Rogue Agents: Stop AI From Misusing Your APIs: Twilio
3. Embrace the Red: Confused Deputy Problem: Embrace The Red
4. NeMo-Guardrails: Interface guidelines: NVIDIA Github
6. Simon Willison: Dual LLM Pattern: Simon Willison

OWASP Top 10 for LLM Applications v2.0
26
genai.owasp.org
LLM07:2025 System Prompt Leakage
Description
The system prompt leakage vulnerability in LLMs refers to the risk that the system prompts or
instructions used to steer the behavior of the model can also contain sensitive information that
was not intended to be discovered. System prompts are designed to guide the model's output
based on the requirements of the application, but may inadvertently contain secrets. When
discovered, this information can be used to facilitate other attacks.
It's important to understand that the system prompt should not be considered a secret, nor should
it be used as a security control. Accordingly, sensitive data such as credentials, connection
strings, etc. should not be contained within the system prompt language.
Similarly, if a system prompt contains information describing different roles and permissions, or
sensitive data like connection strings or passwords, while the disclosure of such information may
be helpful, the fundamental security risk is not that these have been disclosed, it is that the
application allows bypassing strong session management and authorization checks by delegating
these to the LLM, and that sensitive data is being stored in a place that it should not be.
In short: disclosure of the system prompt itself does not present the real risk -- the security risk
lies with the underlying elements, whether that be sensitive information disclosure, system
guardrails bypass, improper separation of privileges, etc. Even if the exact wording is not
disclosed, attackers interacting with the system will almost certainly be able to determine many of
the guardrails and formatting restrictions that are present in system prompt language in the
course of using the application, sending utterances to the model, and observing the results.
Common Examples of Risk
1. Exposure of Sensitive Functionality
The system prompt of the application may reveal sensitive information or functionality that is
intended to be kept confidential, such as sensitive system architecture, API keys, database
credentials, or user tokens.  These can be extracted or used by attackers to gain
unauthorized access into the application. For example, a system prompt that contains the
type of database used for a tool could allow the attacker to target it for SQL injection attacks.

`;