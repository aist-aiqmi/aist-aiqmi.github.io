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

`;