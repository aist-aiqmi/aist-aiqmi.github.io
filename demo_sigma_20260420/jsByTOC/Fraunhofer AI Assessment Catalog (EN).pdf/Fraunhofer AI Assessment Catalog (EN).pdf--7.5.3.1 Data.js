var toc_content = `113
Dimension: Reliability
It is necessary to define and document (quantitative) criteria (e.g., thresholds regarding performance) that 
describe in which scenarios re-evaluation of the AI application is required, possibly combined with retraining.
Furthermore, it is necessary to develop and document criteria for assessing the quality of procedures used to 
record new application and error cases as well as how they are handled.
It must be demonstrated that the chosen criteria are consistent with the [RE-R-CD-RI-01] objectives.
7.5.3  Measures
7.5.3.1  Data
There are no planned measures for this category.
7.5.3.2  AI component
There are no planned measures for this category.
7.5.3.3  Embedding
There are no planned measures for this category.
7.5.3.4  Measures for operation
[RE-R-CD-ME-01] Avoiding catastrophic forgetting on new training data
Requirement: Pr
A process must be established which – when new training data is used, e.g., when incremental training of 
an AI component takes place over multiple cycles – checks that the incremental training steps do not lead to 
performance losses on the previous database, provided that it is still relevant to the application.
The new training data and model versions should be saved after each incremental training step. Furthermore, 
the distribution of the new training data should be analyzed and the AI application should be tested on both 
the new and old data. It is possible to use additional measures such as a linear combination of outputs from 
the different model versions to counteract previously learned patterns/models being forgotten.
The exact procedures of the established process are documented.
[RE-R-CD-ME-02] Relearning with newly available training data
Requirement: Pr
A process must be established that initiates systematic retraining/relearning of the model based on 
[RE-R‑CD‑CR-01] when new training data is available (e.g., due to the need to keep the data constantly 
up to date or due to new data related to concept drift), while complying with all training and testing 
requirements of this catalog.
The need for new categories or data collection procedures must be reviewed, documented and implemented 
each time new data is collected.
The exact procedures of the established process are documented.

`;