import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CandidateProfile, DemoStateService, FinalRecommendation, ReportLink, TimelineEvent } from '../demo-state.service';

type WorkflowStageKey =
  | 'role-created'
  | 'capability-defined'
  | 'assessment-triggered'
  | 'results-returned'
  | 'fit-calculated'
  | 'embedded-in-sap';

interface WorkflowStage {
  key: WorkflowStageKey;
  title: string;
  subtitle: string;
  decision: string;
  data: string;
  predictedOutcome: string;
}

interface WorkflowScenario {
  key: string;
  title: string;
  summary: string;
  stages: WorkflowStage[];
}

@Component({
  selector: 'app-sap-request',
  templateUrl: './sap-request.component.html',
  styleUrl: './sap-request.component.scss',
  standalone: false
})
export class SapRequestComponent {
  readonly scenarios: WorkflowScenario[] = [
    {
      key: 'commercial-scale-up',
      title: 'Commercial Scale-Up',
      summary: 'A strategic commercial role is created to improve pricing quality and revenue discipline.',
      stages: [
        {
          key: 'role-created',
          title: 'Role created in SAP',
          subtitle: 'Workflow 1: SAP → Cognadev',
          decision: 'What role is needed to execute strategy?',
          data: 'Business unit demand, vacancy context, workflow metadata, and strategic operating need from S/4HANA and SuccessFactors Recruiting.',
          predictedOutcome: 'A role is opened with the correct strategic purpose and business context.'
        },
        {
          key: 'capability-defined',
          title: 'Capability requirement defined',
          subtitle: 'Decision point: defining capability requirement',
          decision: 'What level of judgement and capability does this role require?',
          data: 'Role complexity, decision rights, cross-functional load, and leadership span translated into a CCM-style requirement.',
          predictedOutcome: 'The business avoids hiring for activity and instead targets the capability needed to deliver the outcome.'
        },
        {
          key: 'assessment-triggered',
          title: 'Assessment triggered',
          subtitle: 'Workflow 1: SAP → Cognadev',
          decision: 'Which evidence package is needed to test the capability requirement?',
          data: 'Role requirement, selected candidate, and matching Cognadev assessment bundle.',
          predictedOutcome: 'The right assessment workflow launches automatically without manual interpretation.'
        },
        {
          key: 'results-returned',
          title: 'Results returned',
          subtitle: 'Workflow 2: Cognadev → SAP',
          decision: 'What evidence has come back on fit, values, and risk?',
          data: 'Assessment outputs, timestamps, candidate evidence, and mapped capability scores.',
          predictedOutcome: 'Decision-ready evidence is posted back into the talent workflow.'
        },
        {
          key: 'fit-calculated',
          title: 'Fit score calculated',
          subtitle: 'Decision point: hire / promote / develop',
          decision: 'Is this person the right fit for the role as designed?',
          data: 'Cognitive match, motivation, values alignment, fragility, and role-fit scores.',
          predictedOutcome: 'The hiring manager receives a predicted success view, not just raw report output.'
        },
        {
          key: 'embedded-in-sap',
          title: 'Embedded into SAP workflow',
          subtitle: 'Workflow 2: Cognadev → SAP',
          decision: 'What action should happen inside SAP now?',
          data: 'Recommendation status, readiness, risk, and development path routed into SuccessFactors.',
          predictedOutcome: 'The system supports a hire, promote, or develop decision directly in SAP.'
        }
      ]
    },
    {
      key: 'supply-chain-stability',
      title: 'Supply Chain Stability',
      summary: 'An execution-critical role is created to reduce delivery variance and strengthen operating resilience.',
      stages: [
        {
          key: 'role-created',
          title: 'Role created in SAP',
          subtitle: 'Workflow 1: SAP → Cognadev',
          decision: 'Which role is required to stabilise delivery performance?',
          data: 'Operational variance, business unit load, role request, and supply-chain workflow context from SAP.',
          predictedOutcome: 'A high-impact execution role is created with the right operating purpose.'
        },
        {
          key: 'capability-defined',
          title: 'Capability requirement defined',
          subtitle: 'Decision point: defining capability requirement',
          decision: 'What complexity handling and leadership capacity must this role carry?',
          data: 'Execution pressure, cross-functional coordination load, and local-versus-regional decision rights.',
          predictedOutcome: 'Capability expectations are defined before candidate review starts.'
        },
        {
          key: 'assessment-triggered',
          title: 'Assessment triggered',
          subtitle: 'Workflow 1: SAP → Cognadev',
          decision: 'Which assessment path is needed for this operating role?',
          data: 'Role profile, required leadership capability, and selected candidate workflow.',
          predictedOutcome: 'The operating-risk assessment pack is triggered automatically.'
        },
        {
          key: 'results-returned',
          title: 'Results returned',
          subtitle: 'Workflow 2: Cognadev → SAP',
          decision: 'What evidence has come back on resilience and role fit?',
          data: 'Role-fit outputs, fragility markers, motivation profile, and cognitive evidence.',
          predictedOutcome: 'The manager sees where execution risk sits before placement.'
        },
        {
          key: 'fit-calculated',
          title: 'Fit score calculated',
          subtitle: 'Decision point: hire / promote / develop',
          decision: 'Can this person deliver under pressure in the actual operating context?',
          data: 'Fragility, role complexity match, team impact, and predicted performance trajectory.',
          predictedOutcome: 'The system predicts whether the person will stabilise or amplify execution risk.'
        },
        {
          key: 'embedded-in-sap',
          title: 'Embedded into SAP workflow',
          subtitle: 'Workflow 2: Cognadev → SAP',
          decision: 'What should happen in the SAP workflow now?',
          data: 'Recommendation status, support needs, readiness, and development actions.',
          predictedOutcome: 'SAP routes the person decision and any required development plan immediately.'
        }
      ]
    },
    {
      key: 'capital-discipline',
      title: 'Capital Discipline',
      summary: 'A finance and governance role is created to improve investment quality and capital decision discipline.',
      stages: [
        {
          key: 'role-created',
          title: 'Role created in SAP',
          subtitle: 'Workflow 1: SAP → Cognadev',
          decision: 'Which governance role is needed to improve capital quality?',
          data: 'Capital allocation pressure, finance workflow demand, and investment governance request in SAP.',
          predictedOutcome: 'The organisation opens the right decision-critical role, not just another vacancy.'
        },
        {
          key: 'capability-defined',
          title: 'Capability requirement defined',
          subtitle: 'Decision point: defining capability requirement',
          decision: 'What judgement depth is needed for long-horizon capital decisions?',
          data: 'Capital decision complexity, approval thresholds, and strategic judgement required by the role.',
          predictedOutcome: 'The capability requirement is linked directly to investment quality.'
        },
        {
          key: 'assessment-triggered',
          title: 'Assessment triggered',
          subtitle: 'Workflow 1: SAP → Cognadev',
          decision: 'What evidence is required to test investment decision capability?',
          data: 'Role requirement, candidate list, and selected decision-capability bundle.',
          predictedOutcome: 'Cognadev launches the evidence workflow aligned to capital governance needs.'
        },
        {
          key: 'results-returned',
          title: 'Results returned',
          subtitle: 'Workflow 2: Cognadev → SAP',
          decision: 'What does the evidence say about judgement, values, and risk?',
          data: 'Assessment results, role-fit signals, motivation, values, and fragility markers.',
          predictedOutcome: 'Finance leaders receive a clear evidence layer tied to the role.'
        },
        {
          key: 'fit-calculated',
          title: 'Fit score calculated',
          subtitle: 'Decision point: hire / promote / develop',
          decision: 'Should this person be placed into an investment-critical role?',
          data: 'Cognitive match, strategic judgement signals, and readiness for capital complexity.',
          predictedOutcome: 'The system predicts whether the person will improve or weaken capital discipline.'
        },
        {
          key: 'embedded-in-sap',
          title: 'Embedded into SAP workflow',
          subtitle: 'Workflow 2: Cognadev → SAP',
          decision: 'What should the business do next inside SAP?',
          data: 'Recommendation, development path, and governance workflow routing.',
          predictedOutcome: 'The hire, promote, or develop action is executed directly in SAP.'
        }
      ]
    }
  ];

  selectedScenarioKey = 'commercial-scale-up';
  selectedStageKey: WorkflowStageKey = 'capability-defined';

  constructor(public demo: DemoStateService, private router: Router) {}

  get profile(): CandidateProfile {
    return this.demo.activeCandidate;
  }

  get recommendation(): FinalRecommendation {
    return this.demo.finalRecommendation;
  }

  get reportLinks(): ReportLink[] {
    return this.demo.allReportLinks;
  }

  get timeline(): TimelineEvent[] {
    return this.demo.timeline;
  }

  getRiskClass(risk: string): string {
    const normalised = risk.toLowerCase();

    if (normalised.includes('low')) {
      return 'status-good';
    }

    if (normalised.includes('moderate') || normalised.includes('develop')) {
      return 'status-watch';
    }

    return 'status-alert';
  }

  get selectedScenario(): WorkflowScenario {
    return this.scenarios.find((scenario) => scenario.key === this.selectedScenarioKey) ?? this.scenarios[0];
  }

  get workflowOneStages(): WorkflowStage[] {
    return this.selectedScenario.stages.slice(0, 3);
  }

  get workflowTwoStages(): WorkflowStage[] {
    return this.selectedScenario.stages.slice(3);
  }

  get selectedStage(): WorkflowStage {
    return this.selectedScenario.stages.find((stage) => stage.key === this.selectedStageKey) ?? this.selectedScenario.stages[0];
  }

  selectScenario(key: string): void {
    this.selectedScenarioKey = key;
    this.selectedStageKey = this.selectedScenario.stages[1].key;
  }

  selectStage(key: WorkflowStageKey): void {
    this.selectedStageKey = key;
  }

  launchWorkflow(): void {
    void this.router.navigate(['/talentlab-summary']);
  }
}
