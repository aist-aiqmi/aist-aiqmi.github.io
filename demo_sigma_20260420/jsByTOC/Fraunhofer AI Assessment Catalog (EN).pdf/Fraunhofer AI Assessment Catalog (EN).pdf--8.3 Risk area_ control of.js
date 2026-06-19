var toc_content = `138
Dimension: Safety and Security
8.3  Risk area: control of dynamics (CD)
The control of dynamics risk area should ensure that the safety and security of the AI application are guaranteed, 
including during operation.
Concept drift poses a significant risk in this context and can lead to implemented safety and security measures no 
longer being effective or no longer being sufficient due to changing requirements or conditions during operation. 
For example, research in the field of Artificial Intelligence could produce new findings that help attackers develop 
new malware and attack methods. In addition, changes in external conditions can create new safety and security 
threats. Last but not least, legal or regulatory changes may result in new safety or security requirements.
An example of a risk emerging due to concept drift is a service for automated translation of digital 
communication that experiences a significant increase in demand due to changes in user behavior and can no 
longer guarantee availability (see [S-R-IA-ME-09]). Another example would be if the actuators of a cyber‑physical 
system were replaced with actuators that expect parameters with different tolerances, meaning that threshold 
values for mitigation (see [S-R-FS-ME-08]) would have to be adapted in this instance.
Model drift represents another aspect of the dynamics of AI applications. However, this plays a marginal role for 
this risk area, as challenges related to the continued learning of the model based on newly recorded data are 
already covered in full in the Risk area: control of dynamics (CD) of the reliability dimension. In addition, 
the Risk area: intercepting errors at model level (IM) and the Risk area: functional safety (FS) reference 
measures that help intercept AI safety-related errors or faults, which specifically include performance decline 
during operation. Thus, the present risk area only deals with measures for model drift that refer to safety 
mechanisms dependent on the performance of the AI application. In particular, these safety mechanisms must be 
refined as required if the performance of the AI component weakens.
8.3.1  Risk analysis and objectives
The risk analysis examines threats in the control of dynamics risk area in terms of safety and security. Typical 
threats in this area include safety and security threats that may occur because of
concept drift due to a change in external conditions,
changes in user behavior,
changed requirements related to changes in underlying frameworks or hardware.
These threats can affect any of the previously considered risk areas, including the Risk area: functional safety 
(FS) and Risk area: integrity and availability (IA). The exact process in the risk analysis for the control of 
dynamics risk area is described in the following section.
[S-R-CD-RI-01] Risk analysis and objectives
Requirement: Do
Risk analysis: The [RE-R-CD-RI-01] risk analysis of the reliability dimension has already examined the risk of 
model and, in part, concept drift and can be referenced here. However, it must be analyzed to what extent 
the implemented safety or security measures depend on the performance of the AI application and how the 
measures must be adjusted in case of drift. The risk analysis must also include regulatory changes.
Furthermore, it is necessary to investigate which external conditions in the application context in question 
can have an influence on the safety and security requirements of the AI application. This involves analyzing 
the possible attacks on the AI application by new or conceivable malware. It must also examine the extent 
to which changes in user behavior can affect safety and security. It may be necessary to add further context-
specific threat scenarios for controlling the dynamics.

`;