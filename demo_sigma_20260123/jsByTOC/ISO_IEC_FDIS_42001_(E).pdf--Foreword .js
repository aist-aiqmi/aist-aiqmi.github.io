var toc_content = `ISO/IEC FDIS 42001:2023(E)
Foreword
ISO (the International Organization for Standardization) and IEC (the International Electrotechnical 
Commission) form the specialized system for worldwide standardization. National bodies that are 
members of ISO or IEC participate in the development of International Standards through technical 
committees established by the respective organization to deal with particular fields of technical 
activity. ISO and IEC technical committees collaborate in fields of mutual interest. Other international 
organizations, governmental and non-governmental, in liaison with ISO and IEC, also take part in the 
work.
The procedures used to develop this document and those intended for its further maintenance 
are described in the ISO/IEC Directives, Part 1. In particular, the different approval criteria 
needed for the different types of document should be noted. This document was drafted in 
accordance with the editorial rules of the ISO/IEC Directives, Part 2 (see www.iso.org/directives or 
www.iec.ch/members_experts/refdocs).
ISO and IEC draw attention to the possibility that the implementation of this document may involve the 
use of (a) patent(s). ISO and IEC take no position concerning the evidence, validity or applicability of 
any claimed patent rights in respect thereof. As of the date of publication of this document, ISO and IEC 
had not received notice of (a) patent(s) which may be required to implement this document. However, 
implementers are cautioned that this may not represent the latest information, which may be obtained 
from the patent database available at www.iso.org/patents and https://patents.iec.ch. ISO and IEC shall 
not be held responsible for identifying any or all such patent rights.
Any trade name used in this document is information given for the convenience of users and does not 
constitute an endorsement.
For an explanation of the voluntary nature of standards, the meaning of ISO specific terms and 
expressions related to conformity assessment, as well as information about ISO's adherence to 
the World Trade Organization (WTO) principles in the Technical Barriers to Trade (TBT) see 
www.iso.org/iso/foreword.html. In the IEC, see www.iec.ch/understanding-standards.
This document was prepared by Joint Technical Committee ISO/IEC JTC  1, Information technology, 
Subcommittee SC 42, Artificial intelligence.
Any feedback or questions on this document should be directed to the user’s national standards 
body. A complete listing of these bodies can be found at www.iso.org/members.html and 
www.iec.ch/national-committees.
v
© ISO/IEC 2023 – All rights reserved 
﻿

ISO/IEC FDIS 42001:2023(E)
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

`;