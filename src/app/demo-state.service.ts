import { Injectable } from '@angular/core';

export type PillarId = 'design-right' | 'fill-right' | 'develop-right';

export interface ReportLink {
  code: string;
  label: string;
  path: string;
}

export interface Assessment {
  code: string;
  name: string;
  report: string;
  score: number;
  completedAt: string;
  status: 'Completed' | 'Analysing';
  insight: string;
  documents: ReportLink[];
}

export interface SolutionPillar {
  id: PillarId;
  title: string;
  shortLabel: string;
  colorClass: string;
  summary: string;
  capabilities: string[];
  individualImpact: string;
  teamImpact: string;
  organisationImpact: string;
  sapLinkage: string;
}

export interface CapabilityScore {
  capability: string;
  pillarId: PillarId;
  score: number;
  signal: string;
  businessMeaning: string;
  mappedReports: string[];
}

export interface TimelineEvent {
  title: string;
  time: string;
  detail: string;
}

export interface KpiMetric {
  value: string;
  label: string;
  detail: string;
  tone: string;
}

export interface LifecycleStage {
  name: string;
  caption: string;
  active?: boolean;
}

export interface BusinessImpactMetric {
  value: string;
  label: string;
  detail: string;
}

export interface EnterpriseHeatmapDimension {
  key: string;
  label: string;
}

export interface EnterpriseHeatmapRow {
  businessUnit: string;
  summary: string;
  scores: Record<string, number>;
}

export interface ExcoTakeaway {
  title: string;
  detail: string;
}

export interface CandidateOption {
  key: string;
  label: string;
}

export interface FinalRecommendation {
  candidate: string;
  fit: number;
  culture: number;
  risk: string;
  teamImpact: string;
  readiness: string;
  status: string;
  confidenceModel: string;
  summary: string;
}

export interface CandidateProfile {
  key: string;
  name: string;
  intelligenceMetrics: KpiMetric[];
  assessments: Assessment[];
  capabilities: CapabilityScore[];
  timeline: TimelineEvent[];
  businessImpact: BusinessImpactMetric[];
  finalRecommendation: FinalRecommendation;
}

@Injectable({
  providedIn: 'root'
})
export class DemoStateService {
  readonly reportsFolder = 'src/assets/reports';

  readonly pillars: SolutionPillar[] = [
    {
      id: 'design-right',
      title: 'Design right',
      shortLabel: 'Blue pillar',
      colorClass: 'pillar-design',
      summary: 'Clarify the role, shape the team, and align rewards before talent decisions are made.',
      capabilities: ['Role Intelligence', 'Team Architecture', 'Reward Intelligence'],
      individualImpact: 'Defines what the role requires before assessment, ensuring individual fit is anchored in role reality.',
      teamImpact: 'Ensures new roles are designed with a structurally sound team architecture.',
      organisationImpact: 'Guarantees defensible reward by tying pay to capability and protecting against pay-equity variance.',
      sapLinkage: 'SAP Compensation and reward scaffold with capability-linked band placement and STI/LTI guardrails.'
    },
    {
      id: 'fill-right',
      title: 'Fill right',
      shortLabel: 'Green pillar',
      colorClass: 'pillar-fill',
      summary: 'Improve fit, culture alignment, and fragility detection before a candidate is placed.',
      capabilities: ['Fit Confidence', 'Culture Visibility', 'Fragility Detection'],
      individualImpact: 'Provides fit confidence for candidate placement and internal moves.',
      teamImpact: 'Instantly flags fragility alerts when an individual score drops below a pre-set threshold.',
      organisationImpact: 'Delivers better slates that hold and reduces mis-hire probability from ~50% to <17%.',
      sapLinkage: 'SAP Recruiting and Succession with decision summary outputs and AI summarisation returned to SAP.'
    },
    {
      id: 'develop-right',
      title: 'Develop right',
      shortLabel: 'Purple pillar',
      colorClass: 'pillar-develop',
      summary: 'Predict performance, readiness, and enterprise contribution after placement.',
      capabilities: ['Performance Prediction', 'Potential & Readiness', 'Enterprise Intelligence'],
      individualImpact: 'Clarifies potential and readiness for promotion and future roles by analysing cognitive depth.',
      teamImpact: 'Populates succession slate builders with confidence-rated slates and domino backfill suggestions.',
      organisationImpact: 'Enables the SAP HCM++ view with enterprise KPIs and seven-dimensional organisational heatmaps.',
      sapLinkage: 'SAP Performance, Succession, and Analytics with bench-strength indices and a talent intelligence hub.'
    }
  ];

  readonly requestBase = {
    solutionName: 'Managerial and Professional Roles',
    sapModule: 'SuccessFactors Recruiting',
    requisitionId: 'REQ-20481',
    vacancy: 'HR Manager',
    businessUnit: 'People and Culture',
    requester: 'Naledi Mokoena',
    purpose: 'Assessment for selection and placement',
    candidateType: 'Individual Assessment',
    solutionBundle: 'TalentLab auto-selected bundle',
    lifecycleNarrative: 'Acquire, assess, match, place, and track the right talent decision from inside SAP.'
  };

  readonly lifecycleStages: LifecycleStage[] = [
    { name: 'Acquire', caption: 'Recruiting demand enters SAP' },
    { name: 'Assess', caption: 'TalentLab bundle is triggered', active: true },
    { name: 'Match', caption: 'Role-fit and culture confidence are calculated' },
    { name: 'Place', caption: 'Decision-ready recommendation returns to SAP' },
    { name: 'Track', caption: 'Enterprise intelligence follows placement outcomes' }
  ];

  readonly candidateProfiles: CandidateProfile[] = [
    {
      key: 'elmien-toerien',
      name: 'Elmien Toerien',
      intelligenceMetrics: [
        {
          value: '83%',
          label: 'Overall Confidence',
          detail: 'Composite confidence model from the completed TalentLab bundle.',
          tone: 'stat-cyan'
        },
        {
          value: '3',
          label: 'Fragility Alerts',
          detail: 'Priority watch-outs surfaced across the hiring and team risk signals.',
          tone: 'stat-red'
        },
        {
          value: '71%',
          label: 'Succession Readiness',
          detail: 'Readiness confidence for medium-term progression after placement.',
          tone: 'stat-green'
        },
        {
          value: '81%',
          label: 'Culture Alignment',
          detail: 'Likely values alignment with the current business and team environment.',
          tone: 'stat-gold'
        }
      ],
      assessments: [
        {
          code: 'CPP',
          name: 'Cognitive Process Profile',
          report: 'CPP candidate profile',
          score: 94,
          completedAt: '2026-03-27 09:15',
          status: 'Completed',
          insight: 'Strong abstract reasoning, strategic pattern recognition, and learning agility.',
          documents: [{ code: 'CPP', label: 'CPP Full Report (PDF)', path: 'assets/reports/Toerien_Elmien_CPP.pdf' }]
        },
        {
          code: 'VO',
          name: 'Value Orientations',
          report: 'VO motivator scan',
          score: 87,
          completedAt: '2026-03-27 09:24',
          status: 'Completed',
          insight: 'High alignment with service leadership, accountability, and stewardship.',
          documents: [{ code: 'VO', label: 'VO Full Report (PDF)', path: 'assets/reports/Toerien_Elmien_VO.pdf' }]
        },
        {
          code: 'MP',
          name: 'Motivational Profile',
          report: 'MP energy drivers',
          score: 83,
          completedAt: '2026-03-27 09:31',
          status: 'Completed',
          insight: 'Motivated by team upliftment, autonomy, and building resilient routines.',
          documents: [{ code: 'MP', label: 'MP Full Report (PDF)', path: 'assets/reports/Toerien_Elmien_MP.pdf' }]
        },
        {
          code: 'CCM',
          name: 'Contextualised Competency Mapping',
          report: 'CCM role-fit map',
          score: 89,
          completedAt: '2026-03-27 09:37',
          status: 'Completed',
          insight: 'Role requirements match candidate strengths in coordination, stakeholder care, and judgement.',
          documents: [{ code: 'CCM', label: 'CCM Full Report (PDF)', path: 'assets/reports/Toerien_Elmien_CCM.pdf' }]
        }
      ],
      capabilities: [
        { capability: 'Role Intelligence', pillarId: 'design-right', score: 91, signal: 'Role architecture and decision span suit current experience.', businessMeaning: 'Defines what the role actually demands before anyone is assessed.', mappedReports: ['CCM', 'CPP'] },
        { capability: 'Team Architecture', pillarId: 'design-right', score: 84, signal: 'Likely to stabilise team cadence and coach junior HR partners.', businessMeaning: 'Shows how this person will influence the rhythm, stability, and shape of the team.', mappedReports: ['CPP', 'MP'] },
        { capability: 'Reward Intelligence', pillarId: 'design-right', score: 81, signal: 'Recognition, purpose, and autonomy will outperform pure cash incentives.', businessMeaning: 'Clarifies what reward mix will sustain performance once the candidate is in role.', mappedReports: ['VO', 'MP'] },
        { capability: 'Fit Confidence', pillarId: 'fill-right', score: 88, signal: 'Strong overall fit with the HR manager vacancy.', businessMeaning: 'Estimates how strongly the candidate matches the practical demands of the role.', mappedReports: ['CCM', 'VO'] },
        { capability: 'Culture Visibility', pillarId: 'fill-right', score: 86, signal: 'Values align well with a people-first, high-trust culture.', businessMeaning: 'Translates values and motivation into likely culture alignment on entry.', mappedReports: ['VO', 'MP'] },
        { capability: 'Fragility Detection', pillarId: 'fill-right', score: 24, signal: 'Low derailment risk overall, but workload stretch risk needs close monitoring during peak hiring cycles.', businessMeaning: 'Flags the points where a placement could become fragile or costly if ignored.', mappedReports: ['CPP', 'MP'] },
        { capability: 'Performance Prediction', pillarId: 'develop-right', score: 90, signal: 'Expected to ramp quickly and manage broad HR stakeholder demands.', businessMeaning: 'Forecasts how effectively the candidate is likely to execute in the real environment.', mappedReports: ['CPP', 'CCM'] },
        { capability: 'Potential & Readiness', pillarId: 'develop-right', score: 89, signal: 'Ready now for the role with medium-term stretch toward senior people leadership.', businessMeaning: 'Shows whether this is a ready-now placement or a future-bet investment.', mappedReports: ['CPP', 'VO'] },
        { capability: 'Enterprise Intelligence', pillarId: 'develop-right', score: 85, signal: 'Comfortable linking people decisions to broader business outcomes.', businessMeaning: 'Reveals whether the candidate can think beyond role fit and contribute at enterprise level.', mappedReports: ['CPP', 'CCM', 'VO'] }
      ],
      timeline: [
        { title: 'SAP request created', time: '2026-03-27 08:55', detail: 'Recruiting workflow triggered TalentLab bundle selection from requisition metadata.' },
        { title: 'TalentLab bundle confirmed', time: '2026-03-27 09:02', detail: 'Purpose, candidate type, and role nomination aligned to Managerial and Professional Roles.' },
        { title: 'Assessments completed', time: '2026-03-27 09:37', detail: 'CPP, VO, MP, and CCM finished and raw report outputs returned.' },
        { title: 'AI summary returned to SAP', time: '2026-03-27 09:41', detail: 'Summary, heatmap scores, and recommendation posted back through the integration layer.' }
      ],
      businessImpact: [
        { value: '<17%', label: 'Mis-hire probability', detail: 'Reduced from roughly 50% industry average to below 17% through the 83% confidence model.' },
        { value: '$1.5M-$3.5M', label: 'Value preserved', detail: 'Estimated avoided mis-hire cost through better fit, lower fragility, and faster placement confidence.' },
        { value: '+12%', label: 'Team uplift', detail: 'Projected improvement in team stability and managerial effectiveness once placed.' }
      ],
      finalRecommendation: {
        candidate: 'Elmien Toerien',
        fit: 91,
        culture: 88,
        risk: 'Low',
        teamImpact: '+12%',
        readiness: 'Ready now',
        status: 'Recommend',
        confidenceModel: '83% confidence model',
        summary: 'Elmien Toerien demonstrates strong role fit for the HR Manager vacancy. The completed Cognadev assessment bundle indicates above-benchmark reasoning, people stewardship, and a low behavioural risk profile, with especially strong evidence in role intelligence and performance prediction.'
      }
    },
    {
      key: 'jane-doe',
      name: 'Jane Doe',
      intelligenceMetrics: [
        {
          value: '68%',
          label: 'Overall Confidence',
          detail: 'Composite confidence model shows a more conditional placement decision.',
          tone: 'stat-gold'
        },
        {
          value: '5',
          label: 'Fragility Alerts',
          detail: 'More pronounced fragility markers surfaced across fit and workload resilience.',
          tone: 'stat-red'
        },
        {
          value: '63%',
          label: 'Succession Readiness',
          detail: 'Potential is visible, but development runway is required before stretch roles.',
          tone: 'stat-green'
        },
        {
          value: '74%',
          label: 'Culture Alignment',
          detail: 'Moderate values alignment with noticeable adaptation risk in a high-trust environment.',
          tone: 'stat-cyan'
        }
      ],
      assessments: [
        {
          code: 'CPP',
          name: 'Cognitive Process Profile',
          report: 'CPP candidate profile',
          score: 78,
          completedAt: '2026-03-27 10:12',
          status: 'Completed',
          insight: 'Solid reasoning base, but lower confidence when complexity escalates across competing priorities.',
          documents: [{ code: 'CPP', label: 'CPP Full Report (PDF)', path: 'assets/reports/Jane_Doe_CPP.pdf' }]
        },
        {
          code: 'VO',
          name: 'Value Orientations',
          report: 'VO motivator scan',
          score: 73,
          completedAt: '2026-03-27 10:19',
          status: 'Completed',
          insight: 'Values alignment is present, though less naturally anchored in stewardship and people-first leadership.',
          documents: [{ code: 'VO', label: 'VO Full Report (PDF)', path: 'assets/reports/Jane_Doe_VO.pdf' }]
        },
        {
          code: 'MP',
          name: 'Motivational Profile',
          report: 'MP energy drivers',
          score: 65,
          completedAt: '2026-03-27 10:27',
          status: 'Completed',
          insight: 'Motivation profile suggests stronger individual drive than team-coaching orientation at this stage.',
          documents: [{ code: 'MP', label: 'MP Full Report (PDF)', path: 'assets/reports/Jane_Doe_MP.pdf' }]
        },
        {
          code: 'CCM',
          name: 'Contextualised Competency Mapping',
          report: 'CCM role-fit map',
          score: 69,
          completedAt: '2026-03-27 10:34',
          status: 'Completed',
          insight: 'Role fit is partial, with stronger suitability for a narrower people-administration scope than a broad HR manager remit.',
          documents: [{ code: 'CCM', label: 'CCM Full Report (PDF)', path: 'assets/reports/Jane_Doe_CCM.pdf' }]
        }
      ],
      capabilities: [
        { capability: 'Role Intelligence', pillarId: 'design-right', score: 72, signal: 'Candidate understands the shape of the role, but not yet at the same strategic depth as the top-fit profile.', businessMeaning: 'Defines what the role actually demands before anyone is assessed.', mappedReports: ['CCM', 'CPP'] },
        { capability: 'Team Architecture', pillarId: 'design-right', score: 66, signal: 'Would contribute operationally, though less likely to reshape team cadence or coach others immediately.', businessMeaning: 'Shows how this person will influence the rhythm, stability, and shape of the team.', mappedReports: ['CPP', 'MP'] },
        { capability: 'Reward Intelligence', pillarId: 'design-right', score: 70, signal: 'A clearer performance framework and tangible incentives will matter more for sustained engagement.', businessMeaning: 'Clarifies what reward mix will sustain performance once the candidate is in role.', mappedReports: ['VO', 'MP'] },
        { capability: 'Fit Confidence', pillarId: 'fill-right', score: 67, signal: 'Fit is credible but not definitive for the full HR manager brief.', businessMeaning: 'Estimates how strongly the candidate matches the practical demands of the role.', mappedReports: ['CCM', 'VO'] },
        { capability: 'Culture Visibility', pillarId: 'fill-right', score: 74, signal: 'Likely to adapt, though not as naturally aligned to the current culture as the lead candidate.', businessMeaning: 'Translates values and motivation into likely culture alignment on entry.', mappedReports: ['VO', 'MP'] },
        { capability: 'Fragility Detection', pillarId: 'fill-right', score: 39, signal: 'The model flags a fragility alert around resilience under sustained stakeholder load.', businessMeaning: 'Flags the points where a placement could become fragile or costly if ignored.', mappedReports: ['CPP', 'MP'] },
        { capability: 'Performance Prediction', pillarId: 'develop-right', score: 69, signal: 'Expected performance is moderate, with more onboarding and scope-shaping needed.', businessMeaning: 'Forecasts how effectively the candidate is likely to execute in the real environment.', mappedReports: ['CPP', 'CCM'] },
        { capability: 'Potential & Readiness', pillarId: 'develop-right', score: 64, signal: 'Shows potential, but reads more as develop-into-role than ready-now.', businessMeaning: 'Shows whether this is a ready-now placement or a future-bet investment.', mappedReports: ['CPP', 'VO'] },
        { capability: 'Enterprise Intelligence', pillarId: 'develop-right', score: 61, signal: 'More role-bounded than enterprise-oriented in current form.', businessMeaning: 'Reveals whether the candidate can think beyond role fit and contribute at enterprise level.', mappedReports: ['CPP', 'CCM', 'VO'] }
      ],
      timeline: [
        { title: 'SAP request created', time: '2026-03-27 09:48', detail: 'Recruiting workflow triggered TalentLab bundle selection from requisition metadata.' },
        { title: 'TalentLab bundle confirmed', time: '2026-03-27 09:54', detail: 'Purpose, candidate type, and role nomination aligned to Managerial and Professional Roles.' },
        { title: 'Assessments completed', time: '2026-03-27 10:34', detail: 'CPP, VO, MP, and CCM finished and raw report outputs returned.' },
        { title: 'AI summary returned to SAP', time: '2026-03-27 10:39', detail: 'Summary, heatmap scores, and conditional recommendation posted back through the integration layer.' }
      ],
      businessImpact: [
        { value: '33%', label: 'Mis-hire probability', detail: 'Still materially better than an uninformed decision, but not at the confidence level of the lead candidate.' },
        { value: '$0.6M-$1.2M', label: 'Value preserved', detail: 'Lower preserved value because the placement would require more support, development, and tighter risk management.' },
        { value: '+4%', label: 'Team uplift', detail: 'Positive but narrower expected team impact in the first 12 months.' }
      ],
      finalRecommendation: {
        candidate: 'Jane Doe',
        fit: 67,
        culture: 74,
        risk: 'Moderate',
        teamImpact: '+4%',
        readiness: 'Develop into role',
        status: 'Conditional',
        confidenceModel: '68% confidence model',
        summary: 'Jane Doe presents a plausible but conditional fit for the HR Manager vacancy. The TalentLab bundle suggests she could succeed with tighter scope definition, structured support, and development investment, but the current evidence does not support as strong a placement recommendation as the lead candidate.'
      }
    }
  ];

  readonly aiPrompt =
    'Summarise the uploaded Cognadev reports for the nominated candidate. Produce a hiring-oriented view with Fit, Culture, Risk, Team impact, readiness, and a concise recommendation for SAP.';

  readonly integrationNotes = [
    'SAP remains the orchestration layer that initiates the request and receives the completed summary back.',
    'TalentLab handles solution selection, candidate assessment flow, and structured report collection.',
    'The AI summarisation service sits after report completion and transforms raw report evidence into decision-ready SAP output.'
  ];

  readonly excoTakeaways: ExcoTakeaway[] = [
    {
      title: 'Outcomes, not modules',
      detail: 'The value comes from predictable people outcomes, using psychometric insight plus SAP workflow orchestration.'
    },
    {
      title: 'AI and integration story',
      detail: 'SAP orchestrates, TalentLab assesses, and the AI summarisation pipeline returns actionable scores and segments to SAP.'
    },
    {
      title: 'Financial linkage',
      detail: 'The 83% confidence model links talent decisions directly to preserved value, including $1.5M-$3.5M in avoided mis-hire cost.'
    }
  ];

  readonly enterpriseDimensions: EnterpriseHeatmapDimension[] = [
    { key: 'cognitive', label: 'Cognitive' },
    { key: 'culture', label: 'Culture' },
    { key: 'fragility', label: 'Fragility' },
    { key: 'execution', label: 'Execution' },
    { key: 'leadership', label: 'Leadership' },
    { key: 'roleFit', label: 'Role-Fit' },
    { key: 'integrated', label: 'Integrated' }
  ];

  readonly enterpriseHeatmap: EnterpriseHeatmapRow[] = [
    {
      businessUnit: 'People and Culture',
      summary: 'High fit and leadership coherence, but moderate execution pressure.',
      scores: { cognitive: 87, culture: 84, fragility: 33, execution: 76, leadership: 82, roleFit: 89, integrated: 85 }
    },
    {
      businessUnit: 'Commercial',
      summary: 'Strong execution energy with moderate culture inconsistency across regions.',
      scores: { cognitive: 79, culture: 68, fragility: 46, execution: 88, leadership: 73, roleFit: 81, integrated: 75 }
    },
    {
      businessUnit: 'Operations',
      summary: 'Solid stability and role-fit, with lower leadership bench depth.',
      scores: { cognitive: 74, culture: 77, fragility: 41, execution: 83, leadership: 62, roleFit: 86, integrated: 72 }
    },
    {
      businessUnit: 'Finance',
      summary: 'High precision and low fragility, with moderate enterprise collaboration opportunity.',
      scores: { cognitive: 85, culture: 79, fragility: 22, execution: 81, leadership: 71, roleFit: 84, integrated: 69 }
    }
  ];

  selectedCandidateKey = 'elmien-toerien';

  isSubmitting = false;
  isSubmitted = false;

  get candidateOptions(): CandidateOption[] {
    return this.candidateProfiles.map((profile) => ({
      key: profile.key,
      label: profile.name
    }));
  }

  get candidateRecommendations(): FinalRecommendation[] {
    return this.candidateProfiles.map((profile) => profile.finalRecommendation);
  }

  get activeCandidate(): CandidateProfile {
    return this.candidateProfiles.find((profile) => profile.key === this.selectedCandidateKey) ?? this.candidateProfiles[0];
  }

  get request() {
    return {
      ...this.requestBase,
      candidate: this.activeCandidate.name
    };
  }

  get intelligenceMetrics(): KpiMetric[] {
    return this.activeCandidate.intelligenceMetrics;
  }

  get assessments(): Assessment[] {
    return this.activeCandidate.assessments;
  }

  get allReportLinks(): ReportLink[] {
    return this.assessments.flatMap((assessment) => assessment.documents);
  }

  get capabilities(): CapabilityScore[] {
    return this.activeCandidate.capabilities;
  }

  get timeline(): TimelineEvent[] {
    return this.activeCandidate.timeline;
  }

  get businessImpact(): BusinessImpactMetric[] {
    return this.activeCandidate.businessImpact;
  }

  get finalRecommendation(): FinalRecommendation {
    return this.activeCandidate.finalRecommendation;
  }

  setSelectedCandidate(candidateKey: string): void {
    if (this.selectedCandidateKey === candidateKey) {
      return;
    }

    this.selectedCandidateKey = candidateKey;
    this.isSubmitting = false;
    this.isSubmitted = false;
  }

  getCapabilitiesByPillar(pillarId: PillarId): CapabilityScore[] {
    return this.capabilities.filter((capability) => capability.pillarId === pillarId);
  }

  getPillar(pillarId: PillarId): SolutionPillar | undefined {
    return this.pillars.find((pillar) => pillar.id === pillarId);
  }

  getReportsForCapability(reportCodes: string[]): ReportLink[] {
    const unique = new Map<string, ReportLink>();

    this.assessments
      .filter((assessment) => reportCodes.includes(assessment.code))
      .flatMap((assessment) => assessment.documents)
      .forEach((document) => {
        unique.set(document.path, document);
      });

    return Array.from(unique.values());
  }

  isAlertCapability(score: number): boolean {
    return score < 40;
  }

  getHeatClass(score: number): string {
    if (score >= 85) {
      return 'heat-high';
    }

    if (score >= 70) {
      return 'heat-good';
    }

    if (score >= 50) {
      return 'heat-watch';
    }

    return 'heat-alert';
  }

  submitToSap(): Promise<void> {
    if (this.isSubmitting || this.isSubmitted) {
      return Promise.resolve();
    }

    this.isSubmitting = true;

    return new Promise((resolve) => {
      setTimeout(() => {
        this.isSubmitting = false;
        this.isSubmitted = true;
        resolve();
      }, 1600);
    });
  }
}
