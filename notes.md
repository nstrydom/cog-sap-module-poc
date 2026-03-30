## Background on Cognadev solution
Cognadev has a current solution where they can nominate candidates to complete specific assessments. This used to be on an individual bases. Meaning the consultant needed to select each assesment and send this to the candidate(s).

Now there is something called TalentLab. This allows the consulatant to select a solution. It will then bundle various assessments and ask relevant question to build up the list of required to nominate the candidate.
See screenshots of e.g. of such solution flow:


## Proposal integration.
A new solution wants to combine or add what Cognadev does or offer. First to automatically select the relevant solution and various assessments based on the module in SAP - e.g. recruitment process. It should then show in summary (in a new standalone Angular UI) the various parts as per above selected and hypothetically completed by a candidate. It produces a result of various assesments are they are completed on specific times/dates etc.

Then the next step is to summarize using a prompt including the various reports as context - to summarize and provide heatmap score based on the results into e.g. "Candidate	Fit	Culture	Risk	Team	Status" - e.g. result "Sarah Chen	91%	88%	Low	+12%	Recommend"

## Additional Brief given:

Section A - I had a few minutes, I have done the following, 
1) Mapped each of those 9 Capabilities to the Cognadev Reports 
2) Created sample reports (just the content ... not very visually attractive) 

see: Doc1_Capabilities_Products_Reports.pdf


Section B - Then separately, i have created hte SAP integratoin and workflow between SAP and TalentLab
1) the integration layers
2) the workflow within SAP and fields to be integrated
3) the SAP → TalentLab → SAP 

see: Doc2_SAP_Integration_Architecture.pdf

This should give us a good starting point for the demo, the one I need help with is Section A, my thoughts on Section B, we will add it as an annexure in that we can say we have the technical specs already defined for the SAP integration pending a anchor client etc. etc.

## I am only interested in showing the workflow - showing the results of the TalentLab workflow requested and then the result page from the data received from Talentlab solution after requested.

SO - we need to create a POC where we show the SAP request, then opens a new page "Talent Lab solution summary" - this is a POC page to show the various completed components - with a "submit or auto-submit result" - then the last page again a SAP page where it received the data summarized.

Lets work on a POC to serve and demo this solution in Angular. I have a endpoint (n8n) to pass the various reports and AI prompt to for summary.

The current SAP module link is this: https://claude.ai/public/artifacts/03820a25-6245-4c69-88ed-fc2b993f7506 - you can view it's current look and feel.