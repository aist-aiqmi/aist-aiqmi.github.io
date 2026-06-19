var toc_content = `OWASP Top 10 for LLM Applications v2.0
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

OWASP Top 10 for LLM Applications v2.0
36
genai.owasp.org
techniques to collect sufficient outputs to replicate a partial model or create a shadow
model. This not only poses risks of intellectual property theft but also undermines the
integrity of the original model.
6. Functional Model Replication
Using the target model to generate synthetic training data can allow attackers to fine-tune
another foundational model, creating a functional equivalent. This circumvents traditional
query-based extraction methods, posing significant risks to proprietary models and
technologies.
7. Side-Channel Attacks
Malicious attackers may exploit input filtering techniques of the LLM to execute side-channel
attacks, harvesting model weights and architectural information. This could compromise the
model's security and lead to further exploitation.
Prevention and Mitigation Strategies
1. Input Validation
Implement strict input validation to ensure that inputs do not exceed reasonable size limits.
2. Limit Exposure of Logits and Logprobs
Restrict or obfuscate the exposure of \`logit_bias\` and \`logprobs\` in API responses. Provide
only the necessary information without revealing detailed probabilities.
3. Rate Limiting
Apply rate limiting and user quotas to restrict the number of requests a single source entity
can make in a given time period.
4. Resource Allocation Management
Monitor and manage resource allocation dynamically to prevent any single user or request
from consuming excessive resources.
5. Timeouts and Throttling
Set timeouts and throttle processing for resource-intensive operations to prevent prolonged
resource consumption.
6.Sandbox Techniques
Restrict the LLM's access to network resources, internal services, and APIs.
◦This is particularly significant for all common scenarios as it encompasses insider risks
and threats. Furthermore, it governs the extent of access the LLM application has to
data and resources, thereby serving as a crucial control mechanism to mitigate or
prevent side-channel attacks.
7. Comprehensive Logging, Monitoring and Anomaly Detection
Continuously monitor resource usage and implement logging to detect and respond to
unusual patterns of resource consumption.
8. Watermarking
Implement watermarking frameworks to embed and detect unauthorized use of LLM outputs.
9. Graceful Degradation

`;