var toc_content = ` 
Page 7 
 
OWASP.org 
● 
You can find examples of LLM agents written using these popular frameworks in our OWASP ASI 
GitHub repository at https://github.com/OWASP/www-project-top-10-for-large-language-model-
applications/tree/main/initiatives/agent_security_initiative. These are intentionally vulnerable 
agents but to demonstrate vulnerabilities but can also demonstrate how agents work. 
Autonomy and agency can also vary depending on the style of orchestration in the agent, ranging from 
hardcoded to constrained via code or finite-state machine workflows (LangFlow) and fully conversational, 
where decisions depend purely on interactions and model reasoning. 
 
 
 

 
Page 8 
 
OWASP.org 
Agentic AI Reference 
Architecture 
  
The capabilities described above are implemented as part of the agent software but do not inherently 
translate into standalone, deployable components unless explicitly designed that way. While it is possible to 
build fully modular and externally accessible agent components, doing so adds significant complexity. In 
practice, most agent deployments integrate these capabilities within the software itself rather than 
exposing them as independent services.  
Our aim is to bring together capabilities and concepts found in research and other literature with the developer 
experiences by mapping capabilities to components. 
The following diagram illustrates single-agent architecture, highlighting the key deployable components 
relevant to our threat modeling. 
 
Single Agent Architecture 
 
Deployable components will include: 

 
Page 9 
 
OWASP.org 
1. 
An application that has embedded agentic functionality to perform tasks for the user on behalf of 
the user, often outside a specific user session.  
2. An agent generally accepts natural language input similar to inputs used for NLP models. This will 
be textual prompts and optional media such as files, images, sound, or video. The application's code 
implements the core capabilities and most likely relies on abstractions offered by an agentic 
framework (LangChain/LangFlow, AutoGen, Crew.AI, and so on).  
3. One or more LLM models (local or remote) are used for reasoning 
4. Services, including built-in functions, local tools, and local application code, local or remote and 
external services, will be called in two possible manners: 
a. Function calling and optional Tools interface at the framework/application level 
b. Function calling by an LLM model returning invocation code to the agent. 
5. Supporting services, part of the agent infrastructure and core functionality.: 
a. External Storage for persistent Long-term memory  
b. Other data sources include a Vector database, other data, and content used in RAG. RAG 
related sources can also be seen as part of the tools, but we highlight it here as a core 
supporting service that can be used in any LLM application. 
 
Multi-agent Architecture 
A multi-agent architecture comprises multiple agents that can scale or combine specialist roles and 
functionality in an agentic solution. In both cases, the architecture is similar except for introducing inter-
agent communication and, optionally, a coordinating agent. See for example the use of a coordinating 
supervisor agent in a multi-agent architecture using Amazon bedrock: 
https://aws.amazon.com/blogs/aws/introducing-multi-agent-collaboration-capability-for-amazon-
bedrock/ 
Depending on the solution, different specialist agents may be introduced with additional capabilities, such 
as the core ones we have defined. The following diagram illustrates an example of multi-agent architecture 
with additional specialized roles and capabilities: 

 
Page 10 
 
OWASP.org 
 
The diagram depicts an example of multi-agent architecture of specialized agent functionality. Specialized 
functionality is a form of agentic patterns and could be exhibited by any agent depending on the use case. 
 
Agentic AI Patterns  
Specialized roles and planning strategies contribute to agentic patterns. These patterns are emerging as 
building blocks that can be combined in a single agent; they can help us understand large-scale 
architectures and aid efficient threat-modeling conversations with consistent language. A detailed 
treatment of agentic patterns is beyond the scope of ASI’s work, but we provide below to help standardize 
conversations in threat modeling.  
 
Pattern 
Description 
Reflective Agent  
Agents that iteratively evaluate and critique their own outputs to enhance performance. 
Example: AI code generators that review and debug their own outputs, like Codex with self-
evaluation. 
Task-Oriented Agent  
Agents designed to handle specific tasks with clear objectives. Example: Automated 
customer service agents for appointment scheduling or returns processing. 

 
Page 11 
 
OWASP.org 
Hierarchical Agent  
Agents are organized in a hierarchy, managing multi-step workflows or distributed control 
systems. Example: AI systems for project management where higher-level agents oversee 
task delegation. 
Coordinating Agent 
Agents facilitate collaboration and coordination and tracking, ensuring efficient execution. 
Example: a coordinating agent assigns subtasks to specialized agents, such as in AI-
powered DevOps workflows where one agent plans deployments, another monitors 
performance, and a third handles rollbacks based on system feedback. 
Distributed Agent 
Ecosystem 
Agents interact within a decentralized ecosystem, often in applications like IoT or 
marketplaces. Example: Autonomous IoT agents managing smart home devices or a 
marketplace with buyer and seller agents. 
Human-in-the-Loop 
Collaboration 
Agents operate semi-autonomously with human oversight. Example: AI-assisted medical 
diagnosis tools that provide recommendations but allow doctors to make final decisions. 
Self-Learning and 
Adaptive Agents 
Agents adapt through continuous learning from interactions and feedback. Example: Co-
pilots, which adapt to user interactions over time, learning from feedback and adjusting 
responses to better align with user preferences and evolving needs. 
RAG-Based Agent  
This pattern involves the use of Retrieval Augmented Generation (RAG), where AI agents 
utilize external knowledge sources dynamically to enhance their decision-making and 
responses. Example: Agents performing real-time web browsing for research assistance. 
Planning Agent  
Agents autonomously devise and execute multi-step plans to achieve complex objectives. 
Example: Task management systems organizing and prioritizing tasks based on user goals. 
Context- Aware 
Agent  
Agents dynamically adjust their behavior and decision-making based on the context in which 
they operate. Example: Smart home systems adjusting settings based on user preferences 
and environmental conditions. 
 
 
These are based on the following references: 
● 
Ken Huang’s CSA blog an agentic patterns at https://cloudsecurityalliance.org/blog/2024/12/09/from-
ai-agents-to-multiagent-systems-a-capability-framework 
● 
The Landscape of Emerging AI Agent Architectures for Reasoning, Planning, and Tool Calling: A 
Survey by Masterman et al. 2024 at https://arxiv.org/abs/2404.11584   
● 
Andrew Ng’s articles on the Batch on Agentic Design patterns https://www.deeplearning.ai/the-
batch/how-agents-can-improve-llm-performance  
● 
Building effective agents by Anthropic team http://anthropic.com/research/building-effective-
agents  
● 
Agents by Chip Huyen  https://huyenchip.com/2025/01/07/agents.html 
 

`;