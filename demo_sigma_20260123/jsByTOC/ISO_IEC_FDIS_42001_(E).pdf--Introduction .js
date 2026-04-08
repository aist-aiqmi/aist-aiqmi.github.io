var toc_content = `ISO/IEC FDIS 42001:2023(E)
Introduction
Artificial intelligence (AI) is increasingly applied across all sectors utilizing information technology 
and is expected to be one of the main economic drivers. A consequence of this trend is that certain 
applications can give rise to societal challenges over the coming years.
This document intends to help organizations responsibly perform their role with respect to AI systems 
(e.g. to use, develop, monitor or provide products or services that utilize AI). AI potentially raises 
specific considerations such as:
—  The use of AI for automatic decision-making, sometimes in a non-transparent and non-explainable 
way, can require specific management beyond the management of classical IT systems.
—  The use of data analysis, insight and machine learning, rather than human-coded logic to design 
systems, both increases the application opportunities for AI systems and changes the way that such 
systems are developed, justified and deployed.
—  AI systems that perform continuous learning change their behaviour during use. They require 
special consideration to ensure their responsible use continues with changing behaviour.
This document provides requirements for establishing, implementing, maintaining and continually 
improving an AI management system within the context of an organization. Organizations are expected 
to focus their application of requirements on features that are unique to AI. Certain features of AI, such 
as the ability to continuously learn and improve or lack of transparency or explainability, can warrant 
different safeguards if they raise additional concerns compared to how the task would traditionally be 
performed. The adoption of an AI management system to extend the existing management structures is 
a strategic decision for an organization.
The organization’s needs and objectives, processes, size and structure as well as the expectations of 
various interested parties influence the establishment and implementation of the AI management 
system. Another set of factors that influence the establishment and implementation of the AI 
management system are the many use cases for AI and the need to strike the appropriate balance 
between governance mechanisms and innovation. Organizations can elect to apply these requirements 
using a risk-based approach to ensure that the appropriate level of control is applied for the particular 
AI use cases, services or products within the organization’s scope. All these influencing factors are 
expected to change and be reviewed from time to time.
The AI management system should be integrated with the organization’s processes and overall 
management structure. Specific issues related to AI should be considered in the design of processes, 
information systems and controls. Crucial examples of such management processes are:
—  determination of organizational objectives, involvement of interested parties and organizational 
policy;
—  management of risks and opportunities;
—  processes for the management of concerns related to the trustworthiness of AI systems such as 
security, safety, fairness, transparency, data quality and quality of AI systems throughout their life 
cycle;
—  processes for the management of suppliers, partners and third parties that provide or develop AI 
systems for the organization.
This document provides guidelines for the deployment of applicable controls to support such processes.
This document avoids specific guidance on management processes. The organization can combine 
generally accepted frameworks, other International Standards and its own experience to implement 
crucial processes such as risk management, life cycle management and data quality management which 
are appropriate for the specific AI use cases, products or services in scope.
vi
 
﻿
© ISO/IEC 2023 – All rights reserved


ISO/IEC FDIS 42001:2023(E)
An organization conforming with the requirements in this document can generate evidence of its 
responsibility and accountability regarding its role with respect to AI systems.
The order in which requirements are presented in this document does not reflect their importance or 
imply the order in which they are implemented. The list items are enumerated for reference purposes 
only.
Compatibility with other management system standards
This document applies the harmonized structure (identical clause numbers, clause titles, text and 
common terms and core definitions) developed to enhance alignment among management system 
standards (MSS). The AI management system provides requirements specific to managing the issues 
and risks arising from using AI in an organization. This common approach facilitates implementation 
and consistency with other management system standards, e.g. related to quality, safety, security and 
privacy.
vii
© ISO/IEC 2023 – All rights reserved 
﻿


FINAL DRAFT INTERNATIONAL STANDARD
ISO/IEC FDIS 42001:2023(E)
Information technology — Artificial intelligence — 
Management system
1  Scope
This document specifies the requirements and provides guidance for establishing, implementing, 
maintaining and continually improving an AI (artificial intelligence) management system within the 
context of an organization.
This document is intended for use by an organization providing or using products or services that 
utilize AI systems. This document is intended to help the organization develop, provide or use AI 
systems responsibly in pursuing its objectives and meet applicable requirements, obligations related to 
interested parties and expectations from them.
This document is applicable to any organization, regardless of size, type and nature, that provides or 
uses products or services that utilize AI systems.
2  Normative references
The following documents are referred to in the text in such a way that some or all of their content 
constitutes requirements of this document. For dated references, only the edition cited applies. For 
undated references, the latest edition of the referenced document (including any amendments) applies.
ISO/IEC 22989:2022, Information technology — Artificial intelligence — Artificial intelligence concepts 
and terminology
3  Terms and definitions
For the purposes of this document, the terms and definitions given in ISO/IEC 22989:2022 and the 
following apply.
ISO and IEC maintain terminology databases for use in standardization at the following addresses:
—  ISO Online browsing platform: available at https://​www​.iso​.org/​obp
—  IEC Electropedia: available at https://​www​.electropedia​.org/​
3.1
organization
person or group of people that has its own functions with responsibilities, authorities and relationships 
to achieve its objectives (3.6)
Note 1 to entry: The concept of organization includes, but is not limited to, sole-trader, company, corporation, firm, 
enterprise, authority, partnership, charity or institution or part or combination thereof, whether incorporated or 
not, public or private.
Note 2 to entry: If the organization is part of a larger entity, the term “organization” refers only to the part of the 
larger entity that is within the scope of the AI management system (3.4).
3.2
interested party
person or organization (3.1) that can affect, be affected by, or perceive itself to be affected by a decision 
or activity
Note 1 to entry: An overview of interested parties in AI is provided in ISO/IEC 22989:2022, 5.19.
1
© ISO/IEC 2023 – All rights reserved 
﻿

`;