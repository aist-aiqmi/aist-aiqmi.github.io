var toc_content = `OWASP Top 10 for LLM Applications v2.0
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

OWASP Top 10 for LLM Applications v2.0
38
genai.owasp.org
limitations.
Scenario #6: Bypassing System Input Filtering
A malicious attacker bypasses input filtering techniques and preambles of the LLM to
perform a side-channel attack and retrieve model information to a remote controlled
resource under their control.
Reference Links
1. Proof Pudding (CVE-2019-20634) AVID (\`moohax\` & \`monoxgas\`)
2. arXiv:2403.06634 Stealing Part of a Production Language Model arXiv
3. Runaway LLaMA | How Meta's LLaMA NLP model leaked: Deep Learning Blog
4. I Know What You See:: Arxiv White Paper
5. A Comprehensive Defense Framework Against Model Extraction Attacks: IEEE
6. Alpaca: A Strong, Replicable Instruction-Following Model: Stanford Center on Research
for Foundation Models (CRFM)
7. How Watermarking Can Help Mitigate The Potential Risks Of LLMs?: KD Nuggets
8. Securing AI Model Weights Preventing Theft and Misuse of Frontier Models
9. Sponge Examples: Energy-Latency Attacks on Neural Networks: Arxiv White Paper arXiv
10. Sourcegraph Security Incident on API Limits Manipulation and DoS Attack Sourcegraph
Related Frameworks and Taxonomies
Refer to this section for comprehensive information, scenarios strategies relating to
infrastructure deployment, applied environment controls and other best practices.
• MITRE CWE-400: Uncontrolled Resource Consumption MITRE Common Weakness
Enumeration
• AML.TA0000 ML Model Access: Mitre ATLAS & AML.T0024 Exfiltration via ML Inference API
MITRE ATLAS
• AML.T0029 - Denial of ML Service MITRE ATLAS
• AML.T0034 - Cost Harvesting MITRE ATLAS
• AML.T0025 - Exfiltration via Cyber Means MITRE ATLAS
• OWASP Machine Learning Security Top Ten - ML05:2023 Model Theft OWASP ML Top 10
• API4:2023 - Unrestricted Resource Consumption OWASP Web Application Top 10
• OWASP Resource Management OWASP Secure Coding Practices

genai.owasp.org
Appendix 1: LLM Application Architecture and Threat Modeling
OWASP Top 10 for LLM Applications v2.0
39
genai.owasp.org
 
 
 

genai.owasp.org
Project Sponsors
OWASP Top 10 for LLM Applications v2.0
40
genai.owasp.org
P˥ˢjec˧ Sˣˢˡ˦ˢ˥˦
We aĨĨīeciaĴe ďķī PīďjecĴ SĨďĊĮďīĮƬ fķĊdiĊg cďĊĴīibķĴiďĊĮ Ĵď heăĨ ĮķĨĨďīĴ Ĵhe ďbjecĴiŒeĮ ďf Ĵhe ĨīďjecĴ aĊd
heăĨ Ĵď cďŒeī ďĨeīaĴiďĊaă aĊd ďķĴīeach cďĮĴĮ aķgĉeĊĴiĊg Ĵhe īeĮďķīceĮ Ĵhe OWASPƫďīg fďķĊdaĴiďĊ ĨīďŒideĮƫ
The ĨīďjecĴ ĉaiĊĴaiĊĮ a ŒeĊdďī ĊeķĴīaă aĊd ķĊbiaĮed aĨĨīďachƫ SĨďĊĮďīĮ dď ĊďĴ īeceiŒe ĮĨeciaă gďŒeīĊaĊce
cďĊĮideīaĴiďĊĮ aĮ ĨaīĴ ďf Ĵheiī ĮķĨĨďīĴƫ SĨďĊĮďīĮ dď īeceiŒe īecďgĊiĴiďĊ fďī Ĵheiī cďĊĴīibķĴiďĊĮ iĊ ďķī
ĉaĴeīiaăĮ aĊd œeb ĨīďĨeīĴieĮƫ If řďķ aīe iĊĴeīeĮĴed iĊ ĮĨďĊĮďīiĊg Ĵhe ĨīďjecĴ ŒiĮiĴ ďķī ĮponĮoīĮhip pageƫ

genai.owasp.org
Supporters
OWASP Top 10 for LLM Applications v2.0
41
genai.owasp.org
S˨ˣˣˢ˥˧e˥˦
PīďjecĴ ĮķĨĨďīĴeīĮ ăeĊd Ĵheiī īeĮďķīceĮ aĊd eŘĨeīĴiĮe Ĵď ĮķĨĨďīĴ Ĵhe gďaăĮ ďf Ĵhe ĨīďjecĴƫ
HADESS
KLAVAN
Pīeciše
AWS
SĊřk
AĮĴīa SecķīiĴř
AWAREŹ GĉbH
iFďďd
KaiĊďĮ
AigďĮ
Căďķd SecķīiĴř PďdcaĮĴ
TīeăăiŘ
Cďaăťīe
HackeīOĊe
IBM
Beaīeī
BiĴŹŻ
SĴackaīĉďī
Cďheīe
QķiĪ
Lakeīa
Cīedaăƫai
PaăďĮade
PīďĉĨĴ SecķīiĴř
NķBiĊaīř
BaăbiŘ
SAFE SecķīiĴř
BeDiĮīķĨĴiŒe
Pīeaĉbăe
NeŘķĮ
PīďĉĨĴAīĉďī
EŘabeaĉ
MďdķĮ CīeaĴe
IīďĊCďīe LabĮ
CăďķdĮecƫai
LařeīķĨ
MeĊdƫiď
GiĮkaīd
BBVA
RHITE
PīaeĴďīiaĊ
CďbaăĴ
NighĴfaăă AI

`;