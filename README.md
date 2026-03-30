# Cognadev TalentLab SAP POC

This project is an Angular proof of concept that demonstrates the proposed SAP to TalentLab to SAP workflow described in [`notes.md`](/Users/nico/MyProjectsJ/cognadev/sap-module/notes.md).

The demo shows three moments in the flow:

1. SAP creates a recruiting request and auto-selects the appropriate TalentLab solution.
2. TalentLab displays the selected assessment bundle, completed report outputs, capability signals, and the summary handoff step.
3. SAP receives a hiring-oriented summary result back for decision support.

## Stack

- Angular 19
- Node 24 via [`.nvmrc`](/Users/nico/MyProjectsJ/cognadev/sap-module/.nvmrc)
- SCSS styling
- Mock in-memory data for the current POC

## Demo routes

- `/sap-request` for the SAP-side request screen
- `/talentlab-summary` for the TalentLab workflow summary
- `/sap-results` for the SAP-side returned result

The main route setup lives in [`src/app/app-routing.module.ts`](/Users/nico/MyProjectsJ/cognadev/sap-module/src/app/app-routing.module.ts).

## What the POC contains

- A stylised SAP request dashboard that frames the requisition and auto-selected TalentLab bundle
- A TalentLab summary page showing:
  assessment bundle
  capability mapping
  workflow timeline
  AI submission prompt package
- A returned SAP result page with recommendation, score matrix, and integration narrative
- Mock data for:
  candidate and requisition context
  assessment outputs
  capability scores
  summary recommendation

The demo data and simulated submission logic live in [`src/app/demo-state.service.ts`](/Users/nico/MyProjectsJ/cognadev/sap-module/src/app/demo-state.service.ts).

## Project structure

- [`src/app/app.component.html`](/Users/nico/MyProjectsJ/cognadev/sap-module/src/app/app.component.html) hosts the shell and top-level navigation
- [`src/app/sap-request/sap-request.component.ts`](/Users/nico/MyProjectsJ/cognadev/sap-module/src/app/sap-request/sap-request.component.ts) handles the SAP request screen
- [`src/app/talentlab-summary/talentlab-summary.component.ts`](/Users/nico/MyProjectsJ/cognadev/sap-module/src/app/talentlab-summary/talentlab-summary.component.ts) handles the TalentLab workflow summary and submit action
- [`src/app/sap-results/sap-results.component.ts`](/Users/nico/MyProjectsJ/cognadev/sap-module/src/app/sap-results/sap-results.component.ts) handles the returned SAP results view
- [`src/styles.scss`](/Users/nico/MyProjectsJ/cognadev/sap-module/src/styles.scss) contains the shared theme and layout styles
- [`src/environments/environment.ts`](/Users/nico/MyProjectsJ/cognadev/sap-module/src/environments/environment.ts) and [`src/environments/environment.prod.ts`](/Users/nico/MyProjectsJ/cognadev/sap-module/src/environments/environment.prod.ts) contain the placeholder summary endpoint configuration

## Running locally

Use Node 24 first:

```bash
nvm use
npm install
npm start
```

Then open [http://localhost:4200](http://localhost:4200).

## Build

To create a production build:

```bash
npm run build
```

The build output is written to `dist/talentlab-poc`.

## Wiring the real n8n summary endpoint

Right now the app simulates the TalentLab-to-SAP submission with a timeout in [`src/app/demo-state.service.ts`](/Users/nico/MyProjectsJ/cognadev/sap-module/src/app/demo-state.service.ts).

To connect the real summary flow:

1. Set the webhook URL in [`src/environments/environment.ts`](/Users/nico/MyProjectsJ/cognadev/sap-module/src/environments/environment.ts).
2. Set the production URL in [`src/environments/environment.prod.ts`](/Users/nico/MyProjectsJ/cognadev/sap-module/src/environments/environment.prod.ts).
3. Replace `submitToSap()` in [`src/app/demo-state.service.ts`](/Users/nico/MyProjectsJ/cognadev/sap-module/src/app/demo-state.service.ts) with an `HttpClient` request to your `n8n` endpoint.
4. Map the real response payload into the current result model shown on the SAP results screen.

## Adding candidate PDF reports

Place the actual report PDFs in [`src/assets/reports`](/Users/nico/MyProjectsJ/cognadev/sap-module/src/assets/reports).

Then update the `documents` paths in [`src/app/demo-state.service.ts`](/Users/nico/MyProjectsJ/cognadev/sap-module/src/app/demo-state.service.ts) so they match the real filenames.

Example paths already wired into the UI:

- `assets/reports/sarah-chen-cpp-report.pdf`
- `assets/reports/sarah-chen-vo-report.pdf`
- `assets/reports/sarah-chen-mp-report.pdf`
- `assets/reports/sarah-chen-ccm-report.pdf`

Those links are shown in both the TalentLab Summary and SAP Results screens.

## Notes

- The current UI is intentionally demo-focused and uses mock content aligned to the supplied screenshots and brief.
- The PDF documents in the workspace are supporting reference material for the capability/report mapping and integration narrative.
- This repo is structured as a POC, not yet as a production-ready integration client.
