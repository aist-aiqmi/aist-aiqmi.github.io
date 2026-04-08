var toc_content = `FINAL DRAFT INTERNATIONAL STANDARD
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

ISO/IEC FDIS 42001:2023(E)
3.3
top management
person or group of people who directs and controls an organization (3.1) at the highest level
Note  1  to entry:  Top management has the power to delegate authority and provide resources within the 
organization.
Note  2  to entry:  If the scope of the management system (3.4) covers only part of an organization, then top 
management refers to those who direct and control that part of the organization.
3.4
management system
set of interrelated or interacting elements of an organization (3.1) to establish policies (3.5) and 
objectives (3.6), as well as processes (3.8) to achieve those objectives
Note 1 to entry: A management system can address a single discipline or several disciplines.
Note 2 to entry: The management system elements include the organization’s structure, roles and responsibilities, 
planning and operation.
3.5
policy
intentions and direction of an organization (3.1) as formally expressed by its top management (3.3)
3.6
objective
result to be achieved
Note 1 to entry: An objective can be strategic, tactical, or operational.
Note 2 to entry: Objectives can relate to different disciplines (such as finance, health and safety, and environment). 
They can be, for example, organization-wide or specific to a project, product or process (3.8).
Note 3 to entry: An objective can be expressed in other ways, e.g. as an intended result, as a purpose, as an 
operational criterion, as an AI objective or by the use of other words with similar meaning (e.g. aim, goal, or 
target).
Note 4 to entry: In the context of AI management systems (3.4), AI objectives are set by the organization (3.1), 
consistent with the AI policy (3.5), to achieve specific results.
3.7
risk
effect of uncertainty
Note 1 to entry: An effect is a deviation from the expected — positive or negative.
Note 2 to entry: Uncertainty is the state, even partial, of deficiency of information related to, understanding or 
knowledge of, an event, its consequence, or likelihood.
Note 3 to entry: Risk is often characterized by reference to potential events (as defined in ISO Guide 73) and 
consequences (as defined in ISO Guide 73), or a combination of these.
Note 4 to entry: Risk is often expressed in terms of a combination of the consequences of an event (including 
changes in circumstances) and the associated likelihood (as defined in ISO Guide 73) of occurrence.
3.8
process
set of interrelated or interacting activities that uses or transforms inputs to deliver a result
Note 1 to entry: Whether the result of a process is called an output, a product or a service depends on the context 
of the reference.
 
﻿
© ISO/IEC 2023 – All rights reserved

﻿
2

ISO/IEC FDIS 42001:2023(E)
3.9
competence
ability to apply knowledge and skills to achieve intended results
3.10
documented information
information required to be controlled and maintained by an organization (3.1) and the medium on 
which it is contained
Note 1 to entry: Documented information can be in any format and media and from any source.
Note 2 to entry: Documented information can refer to:
—  the management system (3.4), including related processes (3.8);
—  information created in order for the organization to operate (documentation);
—  evidence of results achieved (records).
3.11
performance
measurable result
Note 1 to entry: Performance can relate either to quantitative or qualitative findings.
Note 2 to entry: Performance can relate to managing activities, processes (3.8), products, services, systems or 
organizations (3.1).
Note 3 to entry: In the context of this document, performance refers both to results achieved by using AI systems 
and results related to the AI management system (3.4). The correct interpretation of the term is clear from the 
context of its use.
3.12
continual improvement
recurring activity to enhance performance (3.11)
3.13
effectiveness
extent to which planned activities are realized and planned results are achieved
3.14
requirement
need or expectation that is stated, generally implied or obligatory
Note 1 to entry: “Generally implied” means that it is custom or common practice for the organization (3.1) and 
interested parties (3.2) that the need or expectation under consideration is implied.
Note 2 to entry: A specified requirement is one that is stated, e.g. in documented information (3.10).
3.15
conformity
fulfilment of a requirement (3.14)
3.16
nonconformity
non-fulfilment of a requirement (3.14)
3.17
corrective action
action to eliminate the cause(s) of a nonconformity (3.16) and to prevent recurrence
© ISO/IEC 2023 – All rights reserved 
﻿
﻿
3

ISO/IEC FDIS 42001:2023(E)
3.18
audit
systematic and independent process (3.8) for obtaining evidence and evaluating it objectively to 
determine the extent to which the audit criteria are fulfilled
Note 1 to entry: An audit can be an internal audit (first party) or an external audit (second party or third party), 
and it can be a combined audit (combining two or more disciplines).
Note 2 to entry: An internal audit is conducted by the organization (3.1) itself, or by an external party on its 
behalf.
Note 3 to entry: “Audit evidence” and “audit criteria” are defined in ISO 19011.
3.19
measurement
process (3.8) to determine a value
3.20
monitoring
determining the status of a system, a process (3.8) or an activity
Note 1 to entry: To determine the status, there can be a need to check, supervise or critically observe.
3.21
control
<risk> measure that maintains and/or modifies risk (3.7)
Note 1 to entry: Controls include, but are not limited to, any process, policy, device, practice or other conditions 
and/or actions which maintain and/or modify risk.
Note 2 to entry: Controls may not always exert the intended or assumed modifying effect.
[SOURCE: ISO 31000:2018, 3.8, modified — Added <risk> as application domain ]
3.22
governing body
person or group of people who are accountable for the performance and conformance of the organization
Note 1 to entry: Not all organizations, particularly small organizations, will have a governing body separate from 
top management.
Note 2 to entry: A governing body can include, but is not limited to, board of directors, committees of the board, 
supervisory board, trustees or overseers.
[SOURCE: ISO/IEC 38500:2015, 2.9, modified — Added Notes to entry.]
3.23
information security
preservation of confidentiality, integrity and availability of information
Note 1 to entry: Other properties such as authenticity, accountability, non-repudiation and reliability can also be 
involved.
[SOURCE: ISO/IEC 27000:2018, 3.28]
3.24
AI system impact assessment
formal, documented process by which the impacts on individuals (and groups of individuals) and 
societies are identified, evaluated and addressed by an organization developing, providing or using 
products or services utilizing artificial intelligence
 
﻿
© ISO/IEC 2023 – All rights reserved

﻿
4

ISO/IEC FDIS 42001:2023(E)
3.25
data quality
characteristic of data that the data meet the organization’s data requirements for a specific context
[SOURCE: ISO/IEC 5259-1:—1), 3.4]
3.26
statement of applicability
documentation of all necessary controls (3.23) and justification for inclusion or exclusion of controls.
Note 1 to entry: Organizations may not require all controls listed in Annex A or may even exceed the list in 
Annex A with additional controls established by the organization itself.
Note 2 to entry: All identified risks shall be documented by the organization according to the requirements of 
this this document. All identified risks and the risk management measures (controls) established to address 
them shall be reflected in the statement of applicability.
4  Context of the organization
4.1  Understanding the organization and its context
The organization shall determine external and internal issues that are relevant to its purpose and that 
affect its ability to achieve the intended result(s) of its AI management system.
The organization shall consider the intended purpose of the AI systems that are developed, provided or 
used by the organization. The organization shall determine its roles with respect to these AI systems.
NOTE 1 
To understand the organization and its context, it can be helpful for the organization to determine its 
role relative to the AI system. These roles can include, but are not limited to, one or more of the following:
—  AI providers, including AI platform providers, AI product or service providers;
—  AI producers, including AI developers, AI designers, AI operators, AI testers and evaluators, AI deployers, AI 
human factor professionals, domain experts, AI impact assessors, procurers, AI governance and oversight 
professionals;
—  AI customers, including AI users;
—  AI partners, including AI system integrator and data provider;
—  AI subjects, including data subjects and other subjects;
—  relevant authorities, including policymakers and regulators.
A detailed description of these roles is provided by ISO/IEC 22989. Furthermore, the types of roles and their 
relationship to the AI system life cycle are also described in the NIST AI risk management framework.[29] The 
organization’s roles can determine the applicability and extent of applicability of the requirements and controls 
in this document.
NOTE 2 
External and internal issues to be addressed under this clause can vary according to the organization’s 
roles and jurisdiction and their impact on its ability to achieve the intended outcome(s) of its AI management 
system. These can include, but are not limited to:
a) 
external context related considerations such as:
1) 
applicable legal requirements, including prohibited uses of AI;
2) 
policies, guidelines and decisions from regulators that have an impact on the interpretation or 
enforcement of legal requirements in the development and use of AI systems;
3) 
incentives or consequences associated with the intended purpose and the use of AI systems;
1)   Under preparation. Stage at the time of publication ISO/IEC DIS 5259-1:2023.
© ISO/IEC 2023 – All rights reserved 
﻿
﻿
5

`;