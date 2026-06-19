var toc_content = `Map
The MAP function establishes the context to frame risks related to an AI system. The AI
lifecycle consists of many interdependent activities involving a diverse set of actors (See
Figure 3). In practice, AI actors in charge of one part of the process often do not have full
visibility or control over other parts and their associated contexts. The interdependencies
between these activities, and among the relevant AI actors, can make it difficult to reliably
anticipate impacts of AI systems. For example, early decisions in identifying purposes and
objectives of an AI system can alter its behavior and capabilities, and the dynamics of de-
ployment setting (such as end users or impacted individuals) can shape the impacts of AI
system decisions. As a result, the best intentions within one dimension of the AI lifecycle
can be undermined via interactions with decisions and conditions in other, later activities.
Page 24

NIST AI 100-1
AI RMF 1.0
This complexity and varying levels of visibility can introduce uncertainty into risk man-
agement practices. Anticipating, assessing, and otherwise addressing potential sources of
negative risk can mitigate this uncertainty and enhance the integrity of the decision process.
The information gathered while carrying out the MAP function enables negative risk pre-
vention and informs decisions for processes such as model management, as well as an
initial decision about appropriateness or the need for an AI solution. Outcomes in the
MAP function are the basis for the MEASURE and MANAGE functions. Without contex-
tual knowledge, and awareness of risks within the identified contexts, risk management is
difficult to perform. The MAP function is intended to enhance an organization’s ability to
identify risks and broader contributing factors.
Implementation of this function is enhanced by incorporating perspectives from a diverse
internal team and engagement with those external to the team that developed or deployed
the AI system. Engagement with external collaborators, end users, potentially impacted
communities, and others may vary based on the risk level of a particular AI system, the
makeup of the internal team, and organizational policies. Gathering such broad perspec-
tives can help organizations proactively prevent negative risks and develop more trustwor-
thy AI systems by:
• improving their capacity for understanding contexts;
• checking their assumptions about context of use;
• enabling recognition of when systems are not functional within or out of their in-
tended context;
• identifying positive and beneficial uses of their existing AI systems;
• improving understanding of limitations in AI and ML processes;
• identifying constraints in real-world applications that may lead to negative impacts;
• identifying known and foreseeable negative impacts related to intended use of AI
systems; and
• anticipating risks of the use of AI systems beyond intended use.
After completing the MAP function, Framework users should have sufficient contextual
knowledge about AI system impacts to inform an initial go/no-go decision about whether
to design, develop, or deploy an AI system. If a decision is made to proceed, organizations
should utilize the MEASURE and MANAGE functions along with policies and procedures
put into place in the GOVERN function to assist in AI risk management efforts. It is incum-
bent on Framework users to continue applying the MAP function to AI systems as context,
capabilities, risks, benefits, and potential impacts evolve over time.
Practices related to mapping AI risks are described in the NIST AI RMF Playbook. Table
2 lists the MAP function’s categories and subcategories.
Page 25

NIST AI 100-1
AI RMF 1.0
Table 2: Categories and subcategories for the MAP function.
MAP 1: Context is
established and
understood.
MAP 1.1: Intended purposes, potentially beneficial uses, context-
specific laws, norms and expectations, and prospective settings in
which the AI system will be deployed are understood and docu-
mented. Considerations include: the specific set or types of users
along with their expectations; potential positive and negative im-
pacts of system uses to individuals, communities, organizations,
society, and the planet; assumptions and related limitations about
AI system purposes, uses, and risks across the development or
product AI lifecycle; and related TEVV and system metrics.
MAP 1.2: Interdisciplinary AI actors, competencies, skills, and
capacities for establishing context reflect demographic diversity
and broad domain and user experience expertise, and their par-
ticipation is documented. Opportunities for interdisciplinary col-
laboration are prioritized.
MAP 1.3: The organization’s mission and relevant goals for AI
technology are understood and documented.
MAP 1.4: The business value or context of business use has been
clearly defined or – in the case of assessing existing AI systems
– re-evaluated.
MAP 1.5: Organizational risk tolerances are determined and
documented.
MAP 1.6: System requirements (e.g., “the system shall respect
the privacy of its users”) are elicited from and understood by rel-
evant AI actors. Design decisions take socio-technical implica-
tions into account to address AI risks.
MAP 2:
Categorization of
the AI system is
performed.
MAP 2.1: The specific tasks and methods used to implement the
tasks that the AI system will support are defined (e.g., classifiers,
generative models, recommenders).
MAP 2.2: Information about the AI system’s knowledge limits
and how system output may be utilized and overseen by humans
is documented. Documentation provides sufficient information
to assist relevant AI actors when making decisions and taking
subsequent actions.
Categories
Subcategories
Continued on next page
Page 26

NIST AI 100-1
AI RMF 1.0
Table 2: Categories and subcategories for the MAP function. (Continued)
MAP 2.3: Scientific integrity and TEVV considerations are iden-
tified and documented, including those related to experimental
design, data collection and selection (e.g., availability, repre-
sentativeness, suitability), system trustworthiness, and construct
validation.
MAP 3: AI
capabilities, targeted
usage, goals, and
expected benefits
and costs compared
with appropriate
benchmarks are
understood.
MAP 3.1: Potential benefits of intended AI system functionality
and performance are examined and documented.
MAP 3.2: Potential costs, including non-monetary costs, which
result from expected or realized AI errors or system functionality
and trustworthiness – as connected to organizational risk toler-
ance – are examined and documented.
MAP 3.3: Targeted application scope is specified and docu-
mented based on the system’s capability, established context, and
AI system categorization.
MAP 3.4: Processes for operator and practitioner proficiency
with AI system performance and trustworthiness – and relevant
technical standards and certifications – are defined, assessed, and
documented.
MAP 3.5: Processes for human oversight are defined, assessed,
and documented in accordance with organizational policies from
the GOVERN function.
MAP 4: Risks and
benefits are mapped
for all components
of the AI system
including third-party
software and data.
MAP 4.1: Approaches for mapping AI technology and legal risks
of its components – including the use of third-party data or soft-
ware – are in place, followed, and documented, as are risks of in-
fringement of a third party’s intellectual property or other rights.
MAP 4.2: Internal risk controls for components of the AI sys-
tem, including third-party AI technologies, are identified and
documented.
MAP 5: Impacts to
individuals, groups,
communities,
organizations, and
society are
characterized.
MAP 5.1: Likelihood and magnitude of each identified impact
(both potentially beneficial and harmful) based on expected use,
past uses of AI systems in similar contexts, public incident re-
ports, feedback from those external to the team that developed
or deployed the AI system, or other data are identified and
documented.
Categories
Subcategories
Continued on next page
Page 27

NIST AI 100-1
AI RMF 1.0
Table 2: Categories and subcategories for the MAP function. (Continued)
MAP 5.2: Practices and personnel for supporting regular en-
gagement with relevant AI actors and integrating feedback about
positive, negative, and unanticipated impacts are in place and
documented.
Categories
Subcategories
5.3

`;