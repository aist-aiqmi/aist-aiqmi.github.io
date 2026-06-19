var toc_content = `2. Executive summary  
2.1 Introduction 
The Introduction to AI assurance provides a grounding in AI
assurance for readers who are unfamiliar with the subject area. This
guide introduces key AI assurance concepts and terms and situates
them within the wider AI governance landscape. As an introductory
guide, this document focuses on the underlying concepts of AI
assurance rather than technical detail, however it will include
suggestions for further reading for those interested in learning
more.  
As AI becomes increasingly prevalent across all sectors of the
economy, it’s essential that we ensure it is well governed. AI
governance refers to a range of mechanisms including laws,
regulations, policies, institutions, and norms that can all be used to
outline processes for making decisions about AI. The goal of these
governance measures is to maximise and reap the benefits of AI
technologies while mitigating potential risks and harms.  
In March 2023, the government published its AI governance
framework in a pro-innovation approach to AI regulation
(https://www.gov.uk/government/publications/ai-regulation-a-pro-
innovation-approach/white-paper). This white paper set out a
proportionate, principles-based approach to AI governance, with the
framework underpinned by five cross-sectoral principles. These
principles describe “what” outcomes AI systems must achieve,
regardless of the sector in which they’re deployed. The white paper
also sets out a series of tools that can be used to help organisations
understand “how” to achieve these outcomes in practice: tools for
trustworthy AI, including assurance mechanisms and global
technical standards.  
This guidance aims to provide an accessible introduction to both
assurance mechanisms and global technical standards, to help
industry and regulators better understand how to build and deploy
responsible AI systems. It will be a living, breathing document that
we keep updated over time.  
The guidance will cover:  
AI assurance in context: Introduction to the background and
conceptual underpinnings of AI Assurance. 
2024/12/16 13:26
Introduction to AI assurance - GOV.UK
https://www.gov.uk/government/publications/introduction-to-ai-assurance/introduction-to-ai-assurance
4/33

The AI assurance toolkit: Introduction to key AI assurance
concepts and stakeholders.   
AI assurance in practice: Overview of different AI assurance
techniques and how to implement AI assurance within
organisations.  
Key actions for organisations: A brief overview of key actions that
organisations looking to embed AI assurance can take.  
2.2 Why is AI assurance important?  
Artificial intelligence (AI) offers transformative opportunities for the
economy and society. The dramatic development of AI capabilities
over recent years, particularly generative AI - including Large
Language Models (LLMs) such as ChatGPT - has fuelled significant
excitement around the potential applications for, and benefits of, AI
systems.  
Artificial intelligence has been used to support personalised cancer
treatments (https://www.turing.ac.uk/turing-and-roche-towards-tailor-
made-lung-cancer-treatment), mitigate the worst effects of climate
change (https://unfccc.int/news/ai-for-climate-action-technology-
mechanism-supports-transformational-climate-solutions) and make
transport more efficient. (https://www.ucl.ac.uk/artificial-
intelligence/our-research/transportation-and-mobility) The potential
economic benefits from AI are also extremely high. Recent research
from McKinsey (https://www.mckinsey.com/capabilities/mckinsey-
digital/our-insights/the-economic-potential-of-generative-ai-the-next-
productivity-frontier#key-insights) suggests that generative AI alone
could add up to $4.4 trillion to the global economy.  
However, there are also concerns about the risks and societal
impacts associated with AI. There has been notable debate about
the potential existential risks to humanity but there are also
significant, and more immediate, concerns relating to risks such as
bias, a loss of privacy and socio-economic impacts such as job
losses.  
When ensuring the effective deployment of AI systems many
organisations recognise that, to unlock the potential of AI systems,
they will need to secure public trust and acceptance. This will
require a multi-disciplinary and socio-technical approach to ensure
that human values and ethical considerations are built-in throughout
the AI development lifecycle.  
2024/12/16 13:26
Introduction to AI assurance - GOV.UK
https://www.gov.uk/government/publications/introduction-to-ai-assurance/introduction-to-ai-assurance
5/33

AI assurance is consequently a crucial component of wider
organisational risk management frameworks for developing,
procuring, and deploying AI systems, as well as demonstrating
compliance with existing - and any relevant future - regulation. With
developments in the regulatory landscape, significant advances in AI
capabilities and increased public awareness of AI
(https://cdei.blog.gov.uk/2023/12/06/the-tide-is-changing-monitoring-
public-attitudes-towards-data-and-ai/), it is more important than ever
for organisations to start engaging with AI assurance.  
3. AI assurance in context  
3.1 The importance of trust 
The term ‘assurance’ originally derived from accountancy but has
since been adapted to cover areas including cyber security and
quality management. Assurance is the process of measuring,
evaluating and communicating something about a system or
process, documentation, a product or an organisation. In the case of
AI, assurance measures, evaluates and communicates the
trustworthiness of AI systems. When developing and deploying AI
systems, many organisations recognise that to unlock their
potential, a range of actors – from internal teams to regulators to
frontline users – will need to understand whether AI systems are
trustworthy. Without trust in these systems, organisations may be
less willing to adopt AI technologies because they don’t have the
confidence that an AI system will actually work or benefit them.  
They also might not adopt AI for fear of facing reputational damage
or public backlash. Without trust, consumers will also be cautious
about using these technologies. Although awareness of AI is very
high amongst the public and has increased over the last year, their
primary associations with AI typically reference uncertainty.  
AI assurance processes can help to build confidence in AI systems
by measuring and evaluating reliable, standardised, and accessible
evidence about the capabilities of these systems. It measures
whether they will work as intended, hold limitations, and pose
potential risks, as well as how those risks are being mitigated to
ensure that ethical considerations are built-in throughout the AI
development lifecycle.  fi 
2024/12/16 13:26
Introduction to AI assurance - GOV.UK
https://www.gov.uk/government/publications/introduction-to-ai-assurance/introduction-to-ai-assurance
6/33

Justified trust 
By building trust in AI systems through effective communication to
appropriate stakeholders, and ensuring the trustworthiness of AI
systems, AI assurance will play a crucial role in enabling the
responsible development and deployment of AI, unlocking both the
economic and social benefits of AI systems. 
The relationship between trust, trustworthiness and justified trust 
3.2 AI assurance and governance  
In March 2023, the UK government outlined its approach to AI
governance through its white paper, a pro-innovation approach to AI
regulation (https://www.gov.uk/government/publications/ai-regulation-a-
pro-innovation-approach/white-paper), which set out the key elements
of the UK’s proportionate and adaptable regulatory framework. It
includes five cross-sectoral principles to guide and inform the
responsible development and use of AI in all sectors of the
economy:  
Safety, Security
and Robustness
AI systems should function in a robust,
secure and safe way, and risks should be
 
2024/12/16 13:26
Introduction to AI assurance - GOV.UK
https://www.gov.uk/government/publications/introduction-to-ai-assurance/introduction-to-ai-assurance
7/33

continually identified, assessed and
managed.
Appropriate
Transparency and
Explainability
AI systems should be appropriately
transparent and explainable.
 
Fairness
AI systems should not undermine the
legal rights of individuals or organisations,
discriminate unfairly against individuals, or
create unfair market outcomes.
 
Accountability and
Governance
Governance measures should be in place
to ensure effective oversight of the supply
of AI systems, with clear lines of
accountability across the AI lifecycle.
 
Contestability and
Redress
Where appropriate, users, affected third
parties and actors in the AI lifecycle
should be able to contest an AI decision or
outcome that is harmful or creates
material risk of harm.
 
UK regulatory framework 
AI assurance will play a critical role in the implementation and
operationalisation of these principles. The principles identify specific
goals – the “what” - that AI systems should achieve, regardless of
the sector in which they are deployed. AI assurance techniques and
standards (commonly referred to as “tools for trustworthy AI”) can
support industry and regulators to understand “how” to
operationalise these principles in practice, by providing agreed-upon
processes, metrics, and frameworks to support them to achieve
these goals.  
2024/12/16 13:26
Introduction to AI assurance - GOV.UK
https://www.gov.uk/government/publications/introduction-to-ai-assurance/introduction-to-ai-assurance
8/33

3.3 AI governance and regulation  
Due to the unique challenges and opportunities raised by AI in
particular contexts, the UK’s approach to AI governance focuses on
outcomes rather than the technology itself – acknowledging that
potential risks posed by AI will depend on the context of its
application. To deliver this outcomes-based approach, existing
regulators will be responsible for interpreting and implementing the
regulatory principles in their respective sectors and establishing
clear guidelines on how to achieve these outcomes within a
particular sector. By outlining processes for making and assessing
verifiable claims to which organisations can be held accountable, AI
assurance is a key aspect of broader AI governance and regulation.  
Through AI assurance, organisations can measure whether systems
are trustworthy and demonstrate this to government, regulators,
and the market. They can also gain a competitive advantage,
building customer trust and managing reputational risk. On one
hand, using assurance techniques to evaluate AI systems can build
trust in consumer-facing AI systems by demonstrating adherence to
the principles of responsible AI (fairness, transparency etc.) and/or
relevant regulation/legislation. On the other hand, using assurance
techniques can also help identify and mitigate AI-related risks to
manage reputational risks and avoid negative publicity. This helps tofi
2024/12/16 13:26
Introduction to AI assurance - GOV.UK
https://www.gov.uk/government/publications/introduction-to-ai-assurance/introduction-to-ai-assurance
9/33

`;