var toc_content = `The deployment phase workflow focuses on
• continuous task and data validation that ensures the original 
task specification and data inputs are still valid and secure; 
• functional testing that evaluates whether the capability 
still performs the desired task sufficiently well to be 
operationally useful; and 
• harms assessment and quality control to make certain that 
potential negative impacts on stakeholders are constantly 
reassessed and mitigated when necessary.
In the deployment phase, DoD or company personnel make use of the AI system in an operational setting. Figure 3 presents the RAI 
Guidelines for the deployment phase, which describe concrete sets of continuous evaluation procedures that must be scoped and 
performed on an ongoing basis throughout an AI system’s lifecycle. 
DEPLOYMENT PHASE
By assessing ongoing and upcoming projects in accordance with these Guidelines, DIU has not only been able to better align its 
projects with the DoD’s Ethical Principles for AI, but also to drive the development of AI systems that are both functionally superior 
and more rigorously evaluated. In the case studies that follow, we describe several of these projects, how the RAI Guidelines were 
applied to them, and the outcomes we observed.
Figure 3: Deployment Phase Workflow
10
R E S P O N S I B L E  A I  G U I D E L I N E S  I N  P R A C T I C E

CASE STUDIES: RAI GUIDELINES IN PRACTICE
T
his section briefly summarizes the results of applying 
the Responsible AI Guidelines to two specific 
projects at DIU: Predictive Health and Countering 
Foreign Malign Influence. While the data types and 
objectives of these projects are very different, each 
demonstrates how the RAI Guidelines can provide value in 
practice by ensuring that AI capabilities are responsibly planned, 
developed, and deployed via a process that is both time and 
resource efficient. 
PREDICTIVE HEALTH
The project is a partnership between DIU, the Joint Artificial 
Intelligence Center, the Defense Health Agency, Google, 
Jenoptik, and Enlitic. The purpose of this project is to bring 
advanced machine learning capabilities for medical image 
analysis into military treatment facilities. The project has 
two functional branches: digital pathology and radiology. The 
radiology effort—executed in partnership with Enlitic—aims to 
incorporate algorithms that automate worklist prioritization and 
anomaly detection into clinical workflows for chest X-ray triage, 
head computerized tomography (CT) analysis, and lung nodule 
detection. The digital pathology effort aims to deploy machine 
learning models for detecting and classifying various types of 
cancer (developed by Google) in pathology slides to diagnostic 
Augmented Reality Microscopes developed by Jenoptik. This case 
study focuses on the radiology effort only and highlights the most 
important outputs from applying the RAI Guidelines at each phase 
of the AI lifecycle. 
PLANNING PHASE
The planning exercise for the chest radiography branch of the 
Predictive Health program yielded several important conclusions 
that positively impacted the direction of the project. 
First, as the team evaluated the task, metric, and benchmark, 
it became clear that the benchmark for this system is defined 
by real-world radiology workflows in which radiologists read 
images in the order they are received. Thus, if machine learning 
models could identify those cases most likely to require clinical 
intervention, turnaround time for treating cardiothoracic illness 
could be decreased. This provides a clear and useful quantitative 
metric—turnaround time for treating remarkable disease—that 
should be used to evaluate the system. Keeping this concrete 
metric in mind throughout the program helped the team both 
make actionable programmatic decisions and clearly define the 
value the system was intended to provide.
Second, while evaluating the candidate data, it became 
clear that the standard Digital Imaging Communication in 
Medicine (DICOM) files associated with medical imaging data 
contain relevant metadata on scanning parameters, machine 
type, patient demographics, and other important pieces of 
information that can be used for downstream error analysis and 
harms modeling. Notably, without direct access to a small set 
of example data, it would have been difficult to make this useful 
determination conclusively.
Third, in addition to straightforward identification of radiologists 
as end users and patients as stakeholders, the team observed 
that population health professionals and various actors in and 
around the care environment should also be considered as 
stakeholders in this model development process. Thus, when 
evaluating model outputs, it is important to consider how large-
scale use might affect both of these user groups. Without this 
explicit step in the planning workflow—which was intended to 
be provocative—the team might not have considered the AI 
system’s effects beyond the immediate stakeholders.
The harms modeling step of the planning phase revealed that 
errors in this model could send individuals in need of critical 
care to the back of the chest radiograph reading queue. Domain 
shift8 can be problematic for these models if, for instance, we 
Chest radiograph7
7 Häggström, Mikael. Normal posteroanterior (PA) chest radiograph (X-ray). June 28, 2017. Wikimedia Commons, https://commons.wikimedia.org/wiki/File:Normal_posteroanterior_(PA)_
chest_radiograph_(X-ray).jpg
8 Domain shift occurs when the data used to train an algorithm differs from the data encountered during deployment.
11
R E S P O N S I B L E  A I  G U I D E L I N E S  I N  P R A C T I C E

`;