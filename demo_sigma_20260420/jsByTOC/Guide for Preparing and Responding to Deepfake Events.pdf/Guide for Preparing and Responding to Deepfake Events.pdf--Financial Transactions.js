var toc_content = `| Guide for Preparing and Responding to Deepfake Events
The uptick in biometric fraud and use of cheapfakes and deepfakes as a means to bypass
authentication and commit fraud has had a minor observable uptick. The authors conclude that this
trend has seen a slight increase and that we can expect that increase to continue. Therefore, this
window of opportunity for cybersecurity professionals to develop awareness, detection, response,
and mitigation strategies is ideal.
Threat Activity
Current, known threats that these technologies pose include:
1.
Evasion of authentication - How I Broke Into a Bank Account With an AI-Generated
Voice
2.
Impersonation - Unusual CEO Fraud via Deepfake Audio Steals US$243,000 From UK
Company
3.
Financial Fraud - Finance worker pays out $25 million after video call with deepfake
‘chief ﬁnancial oŨcer’
4.
Reputational damage - a fake but realistic video of a CEO making unsavory
comments or incorrect statements can damage brand image and lead to loss Beware
of deepfake of CEO recommending stocks, says India's National Stock Exchange and
fake twitter accounts causing losses to company Eli Lilly and Lockheed Martin
Responding to Malicious Corporate Deepfakes – Debevoise Data Blog
5.
Deepfake employment interviews - Criminals Use Deepfake Videos to Interview for
Remote Work
6.
Misinformation leading to ﬁnancial implications - Such as impacting stock prices:
S&P Sheds $500 Billion from Fake Pentagon Explosion
Assessment of Defenses
Your assessment should include a review of policies, procedures, enforcement and auditing
methods for four main areas: sensitive data disclosure, helpdesk, ﬁnancial transactions and event
response.
We recommend starting with a review of the governance and approval structures to oversee
security measures and policies related to sensitive data disclosure, mergers and acquisitions, legal,
ﬁnancial transactions, and employee identiﬁcation for purposes of authorization or identiﬁcation
(such as with the helpdesk, HR, and physical security). A key part of this review should include
interviewing employees enacting these processes in order to understand whether and to what
extent there are deviations from policy. Starting with this review will allow you to be able to navigate
Version: 1
Page 10 of 35

| Guide for Preparing and Responding to Deepfake Events
successfully through the governance and approval structures to suggest changes and posture
hardening processes.
Human-Based Authentication Best Practices
Ideally, at least two of the following best practices where human-based authentication is
permitted should be in use. These best practices include:
●
Maintain an employee directory of approved communication methods that can act as
additional veriﬁcation to authenticate a user such as corporate instant messenger,
additional phone number, alternative emails or aliases that can be used to conﬁrm a
voice request.
●
Alternative Communication Veriﬁcation: calling the person back on a pre-registered
phone number to conﬁrm the identity and request.
●
Code of the Day - in this practice, often implemented in ﬁnancial institutions,
requires the caller or requester to refer to a secure system which generates a
random unique code that rotates on a frequent basis. Despite its name, the Code of
the Day typically rotates several times a day and is used in conjunction with other
forms of verbal identiﬁcation. Some organizations use a secure application that
requires MFA to access the current code, while others distribute the code through
SMS. Users must have the ability to request a rotation of the code or to report a
suspected compromise of the code, to allow for rotation-on-demand in addition to
frequent automatic rotations. In situations where an employee is unable to
authenticate to the application or device to get the code, it is permissible for a
manager or coworker to share the code only in person and after conﬁrming a valid
employee badge (by swiping into a secure area).
●
Custom Security Questions: established when onboarding, or created for
third-parties and kept in encrypted storage. These should not be any data that is able
to be derived from a credit report, social media account, or that the employee uses
routinely (date of birth, employeeID, employee login name, should not be used).
Disallow common questions such as “Mother’s Maiden name” or “Pet’s ﬁrst name.”
●
Require the caller’s manager or supervisor to verify the request by sending an email,
or conducting an outbound call to the manager on a pre-registered phone number.
Financial Transactions
Ensure the following best practices for ﬁnancial transactions are contained in written policy
and procedure, and have means of enforcement and auditing for failures:
●
Clear written policies regarding ﬁnancial transactions and controls.
●
SoD (Separation of Duties): Separate critical functions so that no single individual
has control over all aspects of any ﬁnancial transaction. For example, the person who
authorizes a payment should differ from the person who processes it, and both
should have independent non-overlapping decision-making/justiﬁcation chains to
do their parts respectively.
●
Dual Authorization: Require two authorized individuals to approve signiﬁcant
transactions. This ensures that every person can only initiate and complete a
transaction with oversight.
●
Consider a “code of the day” technique that must be stated for any authorization of
transactions or sharing of sensitive information. Accessing the day's code requires
both parties to access a portal displaying the code.
●
MFA on all systems for communication and ﬁnancial transaction processing.
●
Identify processes that permit authorization and authentication through means that
are not protected by MFA.
●
Inventory the method of human-based authentication, and review for best practices.
●
Dual-band communication veriﬁcation requires two types of authentication that
cannot come through a single communication channel. For example, Transactions
Version: 1
Page 11 of 35

`;