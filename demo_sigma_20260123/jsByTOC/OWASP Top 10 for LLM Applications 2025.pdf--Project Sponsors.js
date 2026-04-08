var toc_content = `OWASP Top 10 for LLM Applications v2.0
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

OWASP Top 10 for LLM Applications v2.0
37
genai.owasp.org
Design the system to degrade gracefully under heavy load, maintaining partial functionality
rather than complete failure.
10. Limit Queued Actions and Scale Robustly
Implement restrictions on the number of queued actions and total actions, while
incorporating dynamic scaling and load balancing to handle varying demands and ensure
consistent system performance.
11. Adversarial Robustness Training
Train models to detect and mitigate adversarial queries and extraction attempts.
12. Glitch Token Filtering
Build lists of known glitch tokens and scan output before adding it to the model’s context
window.
13. Access Controls
Implement strong access controls, including role-based access control (RBAC) and the
principle of least privilege, to limit unauthorized access to LLM model repositories and
training environments.
14. Centralized ML Model Inventory
Use a centralized ML model inventory or registry for models used in production, ensuring
proper governance and access control.
15. Automated MLOps Deployment
Implement automated MLOps deployment with governance, tracking, and approval workflows
to tighten access and deployment controls within the infrastructure.
Example Attack Scenarios
Scenario #1: Uncontrolled Input Size
An attacker submits an unusually large input to an LLM application that processes text data,
resulting in excessive memory usage and CPU load, potentially crashing the system or
significantly slowing down the service.
Scenario #2: Repeated Requests
An attacker transmits a high volume of requests to the LLM API, causing excessive
consumption of computational resources and making the service unavailable to legitimate
users.
Scenario #3: Resource-Intensive Queries
An attacker crafts specific inputs designed to trigger the LLM's most computationally
expensive processes, leading to prolonged CPU usage and potential system failure.
Scenario #4: Denial of Wallet (DoW)
An attacker generates excessive operations to exploit the pay-per-use model of cloud-based
AI services, causing unsustainable costs for the service provider.
Scenario #5: Functional Model Replication
An attacker uses the LLM's API to generate synthetic training data and fine-tunes another
model, creating a functional equivalent and bypassing traditional model extraction

`;