var toc_content = ` 
Page 3 
 
OWASP.org 
Introduction 
 
Agentic AI represents an advancement in autonomous systems, increasingly enabled by large language 
models (LLMs) and generative AI. While agentic AI predates modern LLMs, their integration with generative 
AI has significantly expanded their scale, capabilities, and associated risks. This document is the first in a 
series of guides from the OWASP Agentic Security Initiative (ASI) to provide a threat-model-based reference 
of emerging agentic threats and discuss mitigations.  
The document:  
● 
Defines the scope and audience 
● 
Provides a definition of agentic terms, capabilities, and architecture 
● 
Discusses threat modelling approaches and provides a reference threat model discussing new 
agentic threats and mitigations 
● 
Illustrates the threats in different settings with threat models for four example scenarios 
● 
Documents threats with a structured and detailed Agentic Threat Taxonomy  
● 
Details mitigations and playbooks   
 
Scope and Audience 
Our work focuses on agents based on large language models (LLMs), as these general-purpose models 
revolutionize agentic capabilities and, unlike previous agentic generations, bring more capabilities and 
widespread use. 
We aim to provide an easy-to-follow, practical, and actionable reference to threats and mitigations of 
Agentic AI applications. We introduce some basic concepts and use a reference architecture of agentic AI, 
acting as the canvas for threat models, to explain and contextualize agentic threats. However, providing a 
detailed definition and architecture of agentic AI is beyond the scope of our work. 
Our work focuses on Agentic AI threats and relies on existing guidelines and standards, such as the OWASP 
Top 10 for LLM Applications and Generative AI, OWASP AI Exchange, OWASP Top 10, and the OWASP Top 10 
for APIs to address related aspects inherent in building AI applications. When relevant, we highlight Agentic 
AI's impact on existing threats and risks. 
The intended audience of this document are builders and defenders of agentic applications, including 
developers, architects, platform and QA engineers, and security professionals. This is our first report, and 
we plan to provide additional role-based guides as follow-ups to this document for technical and decision-
making audiences. 
 

 
Page 4 
 
OWASP.org 
AI Agents 
 
An agent is an intelligent software system designed to perceive its environment, reason about it, make 
decisions, and take actions to achieve specific objectives autonomously. More specifically, " Russell and 
Norvig define agents in their classic “Artificial Intelligence: A Modern Approach” as follows: 
“An intelligent agent is "an agent that acts appropriately for its circumstances and its goals, is flexible to 
changing environments and goals, learns from experience, and makes appropriate choices given its perceptual 
and computational limitations." (Artificial Intelligence: A Modern Approach, 4th ed., p. 34”) 
AI Agents use Machine Learning (ML) for reasoning; traditional ML approaches (such as Reinforcement 
Learning) playing a key role in each development. The Open AI Gym (now Farama Foundation’s  Gymnasium), 
helped drive  the first wave of Agentic AI. However, the advanced capabilities, NLP interface, and scale of 
LLMs have revolutionized agentic AI and accelerated adoption.   
Well-known vendors and enterprises are embracing LLM agents, and Gartner forecasts that by 2028 33% of 
enterprise software applications will utilize agentic AI “enabling 15% of day-to-day work decisions to be 
made autonomously”. 
 
Core Capabilities 
There are many ways to describe an agent, but typically, an agent or agentic AI system will exhibit the 
following elements: 
● 
Planning & Reasoning: Agents can reason and decide about the steps necessary to achieve their 
objectives. This includes formulating, tracking, and updating their action plans to handle complex 
tasks (the Reason + Act, ReAct pattern). Modern Agents use LLMs as their reasoning engines, with 
agents using the LLM to decide the control flow of the application. This is a fundamental aspect of 
agentic autonomy.  Use of reinforcement in this new generation of agents still plays a role but as a 
mechanism to improve training and reasoning, not core reasoning. This is described in “OpenAI 
Computer-User Agent research preview, a state-of-the-art agent performing interactive web tasks 
for users”. See https://openai.com/index/operator-system-card/   
Advances in LLMs have allowed for sophisticated reasoning and planning strategies such as: 

 
Page 5 
 
OWASP.org 
○ 
Reflection, where the agent evaluates past actions and their results to determine future 
plans or behaviors.  Self-Critic, is a key component of reflection, where the agent critiques 
its own reasoning or output to identify and correct errors. 
○ 
Chain of Thought is a step-by-step reasoning process in which the agent breaks down 
complex problems into sequential, logical steps. This can involve multi-step workflows, 
including ones without human interaction.  
○ 
Subgoal Decomposition, which involves dividing a main goal into smaller, manageable tasks 
or milestones to achieve the overall objective 
● 
Memory / Statefulness to retain and recall information. This is either information from previous 
runs or the previous steps it took in the current run (i.e., the reasoning behind their actions, tools 
they called, the information they retrieved, etc.).  Memory can either be either session-based short-
term or persistent long-term memory. 
● 
Action and Tool Use: Agents can take action to accomplish tasks and invoke tools as part of the 
actions.  These can be built-in tools and functions such as browsing the web, conducting complex 
mathematical calculations, and generating or running executable code in response to a user’s query.  
Agents can access more advanced tools via external API calls and a dedicated Tools interface.  
These are complemented by augmented LLMs, which offer the tool invocation from code generated 
by the model via function calling, a specialized form of tool use. 
 
For more information on LLM function calling, see 
● 
https://platform.openai.com/docs/guides/function-calling 
● 
https://huggingface.co/docs/hugs/en/guides/function-calling 
● 
https://python.langchain.com/v0.1/docs/modules/model_io/chat/function_calling/ 
● 
https://medium.com/@rushing_andrei/function-calling-with-open-source-llms-594aa5b3a304  
OpenAI researcher Lilian Wang has described these capabilities in these popular diagrams republished from 
her seminal 2023 blog on LLM-based Agents. 

 
Page 6 
 
OWASP.org 
 
 
Agents and LLM Applications 
LLM applications can exhibit agency and agentic behavior as described in the OWASP Top 10 for LLM 
Applications as part of the Excessive Agency and agents can be written as a LLM applications with the ability 
to reason and take action using tools like APIs, databases and so on beyond than just generating text-based 
output. 
 
Increasingly, developers use agentic AI frameworks, which encapsulate agentic capabilities and offer 
greater productivity and reuse. Popular frameworks include LangChain/LangFlow, AutoGen, CrewAI, and so 
on. 
● 
Our forthcoming OWASP Agentic AI Landscape will provide a more in-depth guide to the available 
frameworks and tools. 
● 
A brief comparison of popular Agentic frameworks can be found at: LangChain and LangGraph: 
Comparing Function and Tool Calling Capabilities   

 
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
 
 
 

`;