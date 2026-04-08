var toc_content = `Related Frameworks and Taxonomies
Refer to this section for comprehensive information, scenarios strategies relating to
infrastructure deployment, applied environment controls and other best practices.
• AML.T0048.002 - Societal Harm MITRE ATLAS

OWASP Top 10 for LLM Applications v2.0
35
genai.owasp.org
LLM10:2025 Unbounded Consumption
Description
Unbounded Consumption refers to the process where a Large Language Model (LLM) generates
outputs based on input queries or prompts. Inference is a critical function of LLMs, involving the
application of learned patterns and knowledge to produce relevant responses or predictions.
Attacks designed to disrupt service, deplete the target's financial resources, or even steal
intellectual property by cloning a model’s behavior all depend on a common class of security
vulnerability in order to succeed. Unbounded Consumption occurs when a Large Language Model
(LLM) application allows users to conduct excessive and uncontrolled inferences, leading to risks
such as denial of service (DoS), economic losses, model theft, and service degradation. The high
computational demands of LLMs, especially in cloud environments, make them vulnerable to
resource exploitation and unauthorized usage.
Common Examples of Vulnerability
1. Variable-Length Input Flood
Attackers can overload the LLM with numerous inputs of varying lengths, exploiting
processing inefficiencies. This can deplete resources and potentially render the system
unresponsive, significantly impacting service availability.
2. Denial of Wallet (DoW)
By initiating a high volume of operations, attackers exploit the cost-per-use model of cloud-
based AI services, leading to unsustainable financial burdens on the provider and risking
financial ruin.
3. Continuous Input Overflow
Continuously sending inputs that exceed the LLM's context window can lead to excessive
computational resource use, resulting in service degradation and operational disruptions.
4. Resource-Intensive Queries
Submitting unusually demanding queries involving complex sequences or intricate language
patterns can drain system resources, leading to prolonged processing times and potential
system failures.
5. Model Extraction via API
Attackers may query the model API using carefully crafted inputs and prompt injection

`;