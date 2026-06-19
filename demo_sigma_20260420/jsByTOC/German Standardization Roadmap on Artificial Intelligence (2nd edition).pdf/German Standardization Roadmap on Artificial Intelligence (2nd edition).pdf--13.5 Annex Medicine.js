var toc_content = ` 13.5   Annex Medicine
To provide an overview of the application examples of Chapters 4.7.2.1 to 4.7.2.3, the three AI-based medical applications 
were examined according to the following comparative criteria:
→  Actors (persons involved)
→  Goal (description of the problem solved by the medical device)
→  System (description of the mode of action of the medical device)
→  Prerequisite (technical, organizational or infrastructural requirements for service provision)
→  Trigger (what triggers the application?)
→  Stakeholders (other parties interested in the AI application)
Table 18: Use case 1: AI-assisted 2-D X-ray image analysis for caries diagnostics in dentistry
Actors
→  Attending dentist
→  Specialist (e.g. diagnostic radiology, oral and maxillofacial surgery), where applicable
→  Doctor making the referral, where applicable 
→  Medical-technical assistant
→  Patient 
→  Developer
→  Health system is indirectly involved 
→  Health insurers are indirectly involved 
Goal
Assisted 2-D X-ray diagnostics with the aim of saving time and enhancing the reproducibility of diagnos­
tic workflows. Where appropriate, improved diagnostics and therapy options through AI-supported 2-D 
X-ray image analysis (benefit for all actors involved). 
System
The system consists primarily of a software component that detects anatomical and, where appropriate, 
pathological features in 2-D X-ray images and visualizes them for dentists, i.e. marks them on displayed 
images. Such a component can, for example, be integrated as a backend service in a larger software 
architecture.
The input data for this component consists of a 2-D X-ray image and meta information (e.g. pixel size, 
radiation dose); the component provides contours (2-D polylines) and annotations for each contour 
(depending on the object, e.g. tooth number).
The execution of the component is initiated by the radiological system (calculation after availability of 
a new 2-D X-ray image), and the numerical results are stored in a database together with the patient 
and image data. Visual representation of these results is provided by the attending medical staff at a 
­workstation connected to the system after the dataset is opened.
The attending physician or specialist examines the displayed result and makes manual corrections 
if necessary. Such corrections are transferred to the above-mentioned database. The downstream 
­diagnosis is performed according to dental standards on the basis of the image data and with the aid of 
the (corrected, if necessary) AI-assisted information.
Prerequisites
Practice qualified for dental X-ray diagnostics with appropriate staff and technical equipment/­
infrastructure This includes: 
→  X-ray device
→  Medical-technical assistant for taking the X-ray image
→  Software with “AI components” 
→  Physician who is familiar with the system for the evaluation of the 2-D X-ray images
406 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 13 – ANNEX 

Trigger
The component is called automatically after the system provides a new dataset.
Stakeholders
→  Data Protection Officer: The component modifies the patient dataset; security of data transferred and 
stored in the database must comply with applicable privacy policies.
→  Developer
→  Hospital with IT department
→  Health insurers
→  Notified bodies regarding the implementation of conformity assessment 
Table 19: Use case 2: Ventilator with AI-assisted weaning
Actors
→  Patient (here: person, pediatric 15-35 kg, adult 35-200 kg)
→  Specialist in anesthesiology/intensive care medicine
→  Intensive care nurse
→  Medical technician
→  Manufacturer
Goal
Use case: Ventilator with AI-assisted weaning
The Corona pandemic in particular has shown that gentle weaning adapted to the patient’s needs is 
crucial for rehabilitation and sustained well-being. Another effect is the reduction of the workload in 
intensive care, because in the usual clinical procedure, the ventilation parameters have to be adjusted 
manually again and again during weaning, depending on the patient’s condition. With an automated 
­system, appropriate adjustments are made at shorter intervals, thus shortening the overall weaning 
process and providing better situational support for the patient. The number of near-body contacts of 
ICU nurses with potentially infectious ICU patients is also reduced.
Compared to the pre-existing automated system based on classical AI, the new neural network-based 
system offers the advantage of being able to learn from intensive care physicians and nurses to ensure 
an appropriate response to more and more exceptional situations, thus reducing the current flood of 
alarms to the really important alarm situations.
System
1. System description
The weaning system is integrated in the ventilator and realized as a neural network (NN). This is a 
“­frozen” NN, meaning that the learning phase is completed before the device is released to the market.
The task of the weaning system is to support the adaptation of intubated patients during weaning from 
the ventilator. Patients are already able to initiate spontaneous breaths, but not forcefully enough to 
fight the resistance of the tube and get enough air. Therefore, they are supported with positive ­airway 
pressure. Support should be gradually reduced to return patients to normal breathing. However, if 
respiratory deterioration or stress symptoms occur, support must be increased again. The weaning 
system must be able to correctly classify the patient’s condition in terms of ventilation needs (diagnostic 
­function) and adapt the respiratory support accordingly (therapeutic function).
The NN comprises three layers: 1) Input layer, 2) Diagnosis layer, 3) Output layer.
German Standardization Roadmap on Artificial Intelligence – 407
CHAPTER 13 – Annex Mobility

In the input layer, there are nodes for parameters that are set at the beginning of weaning, such as pa­
tient class (pediatric/adult), weight, height, medical history (e.g., for patients with COPD or neurological 
disorder). Three input nodes are fed with parameters continuously measured by the ventilator: fspn (fre­
quency of spontaneous breathing), VT (tidal volume), etCO2 (end tidal concentration of carbon dioxide). 
There are eight nodes in the diagnosis layer, each of which correlates to a classification of the patient’s 
condition with respect to breathing. The eight states are: normal ventilation, hyperventilation, tachyp­
nea, severe tachypnea, insufficient ventilation, hypoventilation, central hypoventilation, unexplained 
hyperventilation.
In the output layer, the therapeutic decision is made based on the diagnosis. Here there are three nodes: 
a) decrease of pressure support, b) increase of pressure support, or c) alarm without change of pressure 
support.
After an alarm is raised, the system stores the extent of pressure correction required by hospital staff. The 
state of all parameters when the alarm goes off and after correction is also saved. These data are made 
available to the manufacturer via a data interface, either directly or indirectly through hospital staff.
The parameter sets collected from the devices in the field during an alarm situation are used to teach or 
test a new, improved network NN2 at the manufacturer. The NN2 is then analyzed by the manufacturer, 
compared to the NN, and if found to be more appropriate after thorough benefit-risk assessment, frozen 
and used for a new version of the system if necessary. Objectives of the change may be: Shortening of 
weaning, less and lower fluctuations in performance, reduction of situations leading to an alarm, better 
adaptation to unusual situations, elimination of detected bias.
2. Performance process
A long-term ventilated patient is stable enough for the specialist to order the start of weaning. Automatic 
weaning is started manually (doctor/nurse on doctor’s orders).
The system enters the “adjustment” phase. Here, the NN is used to make periodic downward (a) or 
­situational upward (b) adjustments to airway pressure support.
Only in the case of output c) (see system description) is an alarm raised, and then the intensive care 
nurse intervenes. The relevant parameters and the pressure correction made manually are stored in the 
system and can be forwarded anonymously to the manufacturer for optimization of the NN.
If the pressure support falls below a certain threshold required for tube compensation, the system enters 
the “observation” phase, which lasts one to two hours depending on the initial level of pressure ­support. 
This phase corresponds to an automated spontaneous breathing test. The downward adjustment of 
the pressure support must not fall further below the threshold value. The system reports a successful 
­weaning of patients when respiratory instabilities remain below 20 % of the observation time, i.e. below 
12 to 24 minutes. Otherwise, the system goes back to the “adjustment” phase.
If the “observation” phase is successful, the system switches to the “maintenance” phase. Patients con­
tinue to be ventilated with constant low pressure support, with minor instabilities being compensated 
for as in the “observation” phase. Only in the event of frequent or prolonged instability is the weaning 
message withdrawn and the system automatically returned to the “adjustment” phase. For reasons of 
transparency and situational awareness, this should also be reported/displayed. During the “mainte­
nance” phase, it is recommended that the physician order extubation at any time.
408 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 13 – ANNEX 

Prerequisites
→  Data port on the ventilator and internet connection of the hospital, in order to be able to transmit 
­relevant parameters of the system to the manufacturer, as in alarm situations, and to save them as 
datasets for future learning or test phases, as well as for the evaluation of possible undesired system 
behaviour (bias).
→  Willingness of the hospital to make the anonymized usage data and parameters available to the 
­manufacturer for further development of the system.
→  If the anonymization of the data is not sufficiently possible, the consent of the patients or their relatives 
for the use of the data must also be obtained and the manufacturer must ensure the confidentiality of 
the data that cannot be anonymized.
Trigger
→  Medical decision to start weaning (not automatic).
Stakeholders
→  Regulators
→  Data protection officer
→  IT director of hospital
→  Owner of/body responsible for hospital
→  Health insurers
Table 20: Use case 3: Segmentation and classification of brain areas (including cerebrospinal fluid) and their volume 
­determination
Actors
Direct: Physicians (from the fields of radiology, neurosurgery, neurology) (trigger analysis, evaluate 
results, make decisions, prognoses, diagnoses based on these)
Indirect: Patient
Goal
The chosen application example solves the problem of time-consuming, manual or simple ­partially 
­assisted segmentation of structures in the image. Originally very time-consuming manual work is 
automated and performed in a clinical context with higher accuracy and repeatability. This concerns in 
particular occurring inter- and intra-individual deviations in repetitions.
It is used by physicians to support diagnoses of neurodegenerative diseases.
System
The application example describes an AI-supported, fully automated segmentation of all relevant brain 
areas based on 3D MRI (magnetic resonance imaging) data. The segmented regions are volumetrically 
quantified and visualized. The calculation is performed by receiving the data from the radiological infra­
structure (Picture Archiving and Communication System, PACS).
Prerequisites
Technical: Server infrastructure, connection to imaging workstation and/or PACS
Suitable devices for generating 3-D imaging data (such as the 1,5 Tesla (T) MRI scanner).
Trigger
The trigger for segmentation and volume determination is the transmission of the image data to the 
radiological infrastructure (PACS).
Stakeholders
→  Manufacturer
→  Notified body (conformity assessment)
→  Supervisory bodies
→  IT department (technical implementation)
→  Data protection officer (transfer of data to the system)
→  Health insurers (possibly re the early detection of diseases).
German Standardization Roadmap on Artificial Intelligence – 409
CHAPTER 13 – Annex Mobility

 13.6   Annex Energy/environment
To provide an overview of the use cases in Chapters 4.9.2.1 to 4.9.2.6, the use cases were systematically analyzed and 
­structured as follows:
→  Actors (persons involved)
→  Goal (description of the problem to be solved)
→  System (description of the mode of action)
→  Prerequisite (technical, organizational or infrastructural requirements for service provision)
→  Trigger (what triggers the application?)
→  Stakeholders (other parties interested in the AI application)
Table 21: Use case 1: Autonomous Smart Grid Power Management and Consumption System
Actors
→  Electrical Power Management System (PMS) Energy Provider
→  Electrical System Interface (SIF) Manager
→  Distributed Energy Resource (DER) Manager
→  Industrial Automation and Control System (IACS) Energy Consumer
→  Layered Communication IT Operator (Communication)
→  Value Stream Life Cycle Operator (Semantics)
→  AAS Asset Operator (Physics)
→  Digital Twin Operator (Analytics, causes) 
→  Data Manager (Learning, effectiveness)
Goal
→  Production and products that can be adapted (parameterized) to customer wishes or ethical 
­requirements (asset/value stream operator roles)
→  Flexible (smart) generation, transmission, distribution, and consumption of energy 
(PMS/IACS/SIF/DER manager roles)
→  Collecting, presenting and acquiring knowledge (analyst role)
→  Structuring asset data spaces (data management role)
System
Industrial reference models such as SGAM or RAMI4.0 describe the structure of systems-of-systems. The 
system structure includes a) the ontologies of structural (syntactic) interoperability, b) the semantic 
interoperability in the value stream between semantic domains (called conduits) during the life cycle, 
and c) the physical hierarchies, i.e., usage structure (called zones) of the asset under consideration and 
its AAS. 
The power in SGAM systems is the effective energy supply of industrial production plants (according to 
RAMI4.0) or individual consumers. From generation to consumer, energy in the value stream (SGAM x-axis) 
takes various heterogeneous forms depending on the medium it must carry. These are also referred to as 
heterogeneous models, which must interact semantically.
These energy sources can be weather patterns if wind and solar are viable volatile sources. Energy carrier 
or energy generating media are mechanical wind generators or photovoltaic devices, and long-range 
high-voltage DC transmission grids or local AC grids are required for electrical power transmission. Distrib­
uted energy resources (DER) are used to distribute energy in the SGAM network. And finally, consumers 
are dependent on its production facilities, on its energy consumption behaviour, on the availability of 
electrical energy and, last but not least, on the “ethical quality” of the traded energy. 
410 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 13 – ANNEX 

`;