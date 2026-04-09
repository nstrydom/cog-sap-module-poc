import { Component } from '@angular/core';

interface OutcomeDimension {
  key: string;
  title: string;
  score: number;
  risk: string;
  trend: string;
  outcomeQuestion: string;
  message: string;
  journey: {
    title: string;
    score: number;
    detail: string;
  }[];
  capabilitySignals: {
    title: string;
    detail: string;
    severity: 'high' | 'medium' | 'low';
  }[];
  drillDown: {
    function: string;
    role: string;
    individual: string;
    missingCapability: string;
  };
}

interface SapDomain {
  title: string;
  systems: string;
  today: string;
  tomorrow: string;
}

interface AiCapability {
  title: string;
  detail: string;
}

interface SystemLayer {
  title: string;
  detail: string;
}

interface TracePoint {
  title: string;
  detail: string;
}

interface Recommendation {
  title: string;
  detail: string;
}

@Component({
  selector: 'app-enterprise-dashboard',
  templateUrl: './enterprise-dashboard.component.html',
  styleUrl: './enterprise-dashboard.component.scss',
  standalone: false
})
export class EnterpriseDashboardComponent {
  readonly outcomeDimensions: OutcomeDimension[] = [
    {
      key: 'economic-engine',
      title: 'Economic Engine',
      score: 78,
      risk: 'Margin pressure',
      trend: '+4 pts',
      outcomeQuestion: 'Can the organisation convert strategic position into durable value creation?',
      message: 'Revenue quality is improving, but pricing decisions and leadership span in the commercial model still limit margin predictability.',
      journey: [
        { title: 'Strategy alignment', score: 82, detail: 'Strategy is clear, but value pools are not consistently translated into decision rights.' },
        { title: 'Culture alignment', score: 76, detail: 'Commercial urgency is stronger than pricing discipline in regional teams.' },
        { title: 'Job design fit', score: 68, detail: 'Accountability for pricing and portfolio trade-offs is spread across too many roles.' },
        { title: 'Performance system strength', score: 74, detail: 'Revenue targets are visible, but decision quality metrics are missing.' },
        { title: 'Succession readiness', score: 71, detail: 'Bench depth is uneven in high-complexity commercial roles.' },
        { title: 'Reward alignment', score: 66, detail: 'Incentives favour volume more than value quality.' }
      ],
      capabilitySignals: [
        { title: 'Capability gap', detail: 'Pricing leaders show insufficient strategic judgement for multi-market margin decisions.', severity: 'high' },
        { title: 'Role misalignment', detail: 'Commercial directors hold P&L accountability without matching decision rights on portfolio changes.', severity: 'medium' },
        { title: 'Leadership risk', detail: 'Two successor-ready leaders for revenue quality roles are below target complexity level.', severity: 'medium' }
      ],
      drillDown: {
        function: 'Commercial',
        role: 'Regional Pricing Director',
        individual: 'Portfolio lead cohort',
        missingCapability: 'Strategic trade-off judgement'
      }
    },
    {
      key: 'execution',
      title: 'Execution',
      score: 72,
      risk: 'Delivery variance',
      trend: '-3 pts',
      outcomeQuestion: 'Will the organisation deliver reliably at the required operating cadence?',
      message: 'Execution risk is rising because job design and operating complexity are out of step in core delivery roles.',
      journey: [
        { title: 'Strategy alignment', score: 75, detail: 'Execution priorities are clear, but local translation into operating routines is inconsistent.' },
        { title: 'Culture alignment', score: 73, detail: 'Accountability exists, though escalation discipline differs by function.' },
        { title: 'Job design fit', score: 64, detail: 'Operational roles carry higher complexity than the organisation currently recognises.' },
        { title: 'Performance system strength', score: 69, detail: 'KPIs track lagging output more than decision quality under pressure.' },
        { title: 'Succession readiness', score: 62, detail: 'Critical execution roles have shallow successor coverage.' },
        { title: 'Reward alignment', score: 70, detail: 'Cost control is rewarded more than adaptive delivery.' }
      ],
      capabilitySignals: [
        { title: 'Capability gap', detail: 'Plant and supply leaders show uneven ability to manage cross-functional complexity.', severity: 'high' },
        { title: 'Role misalignment', detail: 'Supervisors are making decisions that should sit at manager level.', severity: 'high' },
        { title: 'Leadership risk', detail: 'Execution leaders are reliable under routine load but fragile under sustained volatility.', severity: 'medium' }
      ],
      drillDown: {
        function: 'Operations',
        role: 'Supply Chain Manager',
        individual: 'Regional execution team',
        missingCapability: 'Complexity handling under pressure'
      }
    },
    {
      key: 'adaptability',
      title: 'Adaptability',
      score: 69,
      risk: 'Future readiness',
      trend: '+1 pt',
      outcomeQuestion: 'Can the organisation adapt fast enough to new market and operating conditions?',
      message: 'Innovation intent is visible, but learning agility and succession depth are not yet strong enough to make adaptation predictable.',
      journey: [
        { title: 'Strategy alignment', score: 77, detail: 'Future priorities are articulated, but not embedded in role expectations.' },
        { title: 'Culture alignment', score: 70, detail: 'The culture supports resilience, though experimentation still feels high-risk.' },
        { title: 'Job design fit', score: 65, detail: 'Transformation roles are not designed around the complexity of cross-functional change.' },
        { title: 'Performance system strength', score: 67, detail: 'Metrics reward delivery certainty more than adaptive learning.' },
        { title: 'Succession readiness', score: 61, detail: 'Few successors are ready for emerging capability-heavy roles.' },
        { title: 'Reward alignment', score: 68, detail: 'Rewards only partially reinforce innovation and intelligent risk-taking.' }
      ],
      capabilitySignals: [
        { title: 'Capability gap', detail: 'Learning agility is below target in several transformation-critical roles.', severity: 'medium' },
        { title: 'Role misalignment', detail: 'Change leaders are given programme accountability without enterprise influence.', severity: 'medium' },
        { title: 'Leadership risk', detail: 'Adaptive capability depends too heavily on a small number of senior leaders.', severity: 'high' }
      ],
      drillDown: {
        function: 'Transformation Office',
        role: 'Change Portfolio Lead',
        individual: 'Senior transformation bench',
        missingCapability: 'Learning agility at enterprise scale'
      }
    },
    {
      key: 'capital-allocation',
      title: 'Capital Allocation',
      score: 74,
      risk: 'Investment quality',
      trend: '-2 pts',
      outcomeQuestion: 'Are investment decisions being made at the right level of judgement and accountability?',
      message: 'Returns are under pressure because decision rights, role complexity, and incentive structures are not fully aligned.',
      journey: [
        { title: 'Strategy alignment', score: 80, detail: 'Capital priorities are clear, but local approval logic remains fragmented.' },
        { title: 'Culture alignment', score: 72, detail: 'Decision challenge is weak where capital allocation should be most rigorous.' },
        { title: 'Job design fit', score: 67, detail: 'Investment authority does not always sit with the roles that have the required judgement depth.' },
        { title: 'Performance system strength', score: 70, detail: 'Returns are measured, but decision quality is not visible before deployment.' },
        { title: 'Succession readiness', score: 69, detail: 'Successors for capital-intensive leadership roles are not yet ready.' },
        { title: 'Reward alignment', score: 63, detail: 'Short-term targets distort long-horizon investment quality.' }
      ],
      capabilitySignals: [
        { title: 'Capability gap', detail: 'Capital committee members vary materially in strategic reasoning and systems judgement.', severity: 'high' },
        { title: 'Role misalignment', detail: 'Some investment calls are escalated too late, after structural risk is already embedded.', severity: 'medium' },
        { title: 'Leadership risk', detail: 'Leadership bench for allocation-critical roles is thin and uneven.', severity: 'medium' }
      ],
      drillDown: {
        function: 'Finance',
        role: 'Capital Committee Sponsor',
        individual: 'Investment decision forum',
        missingCapability: 'Long-horizon strategic judgement'
      }
    },
    {
      key: 'alignment',
      title: 'Alignment',
      score: 81,
      risk: 'Cross-functional friction',
      trend: '+5 pts',
      outcomeQuestion: 'Are strategy, structure, and people decisions moving in the same direction?',
      message: 'Alignment is comparatively strong, but speed and role clarity still break down at key functional interfaces.',
      journey: [
        { title: 'Strategy alignment', score: 86, detail: 'Enterprise priorities are well understood by most executive teams.' },
        { title: 'Culture alignment', score: 83, detail: 'The organisation has a common accountability language in leadership forums.' },
        { title: 'Job design fit', score: 76, detail: 'Interface roles are clearer, though cross-functional decision ownership still overlaps.' },
        { title: 'Performance system strength', score: 80, detail: 'Measures are consistent across most functions.' },
        { title: 'Succession readiness', score: 78, detail: 'Key roles have visible successors, but not always enough depth.' },
        { title: 'Reward alignment', score: 79, detail: 'Incentives broadly support enterprise priorities.' }
      ],
      capabilitySignals: [
        { title: 'Capability gap', detail: 'Cross-functional collaboration is strong, but systems thinking is inconsistent below executive level.', severity: 'low' },
        { title: 'Role misalignment', detail: 'Interface roles still duplicate decisions across HR, Finance, and Operations.', severity: 'medium' },
        { title: 'Leadership risk', detail: 'Alignment could unwind quickly if two critical integrator roles turn over.', severity: 'medium' }
      ],
      drillDown: {
        function: 'Enterprise Integration',
        role: 'Business Partner Network',
        individual: 'Function-to-function interfaces',
        missingCapability: 'Systems thinking across boundaries'
      }
    }
  ];

  readonly sapDomains: SapDomain[] = [
    {
      title: 'Financial Intelligence',
      systems: 'S/4HANA Finance · CO-PA · Group Reporting · SAC Planning',
      today: 'Records what happened',
      tomorrow: 'Predicts financial impact of organisational and leadership decisions'
    },
    {
      title: 'Human Capital Intelligence',
      systems: 'SuccessFactors · Talent Management · Learning · Compensation',
      today: 'Manages HR processes',
      tomorrow: 'Embeds decision capability into workforce design'
    },
    {
      title: 'Operational Intelligence',
      systems: 'S/4HANA Supply Chain · Manufacturing · Asset Management · BTP',
      today: 'Executes operations',
      tomorrow: 'Aligns human capability with operational complexity in real time'
    },
    {
      title: 'Predictive Intelligence',
      systems: 'SAC · BTP Data Intelligence · AI Core · Datasphere',
      today: 'Descriptive dashboards',
      tomorrow: 'Predicts performance risk before it manifests'
    }
  ];

  readonly aiCapabilities: AiCapability[] = [
    {
      title: 'Diagnosis',
      detail: 'Identify where performance gaps originate'
    },
    {
      title: 'Prediction',
      detail: 'Estimate likelihood of achieving business outcomes'
    },
    {
      title: 'Prescription',
      detail: 'Recommend changes to roles, structure, or incentives'
    },
    {
      title: 'Optimisation',
      detail: 'Continuously improve performance in real time'
    }
  ];

  readonly systemLayers: SystemLayer[] = [
    {
      title: 'Business outcomes',
      detail: 'What must be achieved'
    },
    {
      title: 'Organisational journey',
      detail: 'How it is delivered'
    },
    {
      title: 'Human capability',
      detail: 'Who delivers it'
    },
    {
      title: 'SAP systems',
      detail: 'Where it is executed and measured'
    },
    {
      title: 'AI',
      detail: 'How it is optimised'
    }
  ];

  readonly useCaseTrace: TracePoint[] = [
    {
      title: 'Investment decisions',
      detail: 'The system traces the decision pattern behind declining returns.'
    },
    {
      title: 'Role accountability',
      detail: 'It identifies where decision rights sit and whether they are correctly assigned.'
    },
    {
      title: 'Decision capability',
      detail: 'It measures whether the people carrying those decisions have the required cognitive capacity.'
    }
  ];

  readonly useCaseRecommendations: Recommendation[] = [
    {
      title: 'Decision rights',
      detail: 'Changes in decision rights'
    },
    {
      title: 'Leadership roles',
      detail: 'Adjustments in leadership roles'
    },
    {
      title: 'Incentives',
      detail: 'Realignment of incentives'
    }
  ];

  selectedOutcomeKey = 'execution';

  get selectedOutcome(): OutcomeDimension {
    return this.outcomeDimensions.find((outcome) => outcome.key === this.selectedOutcomeKey) ?? this.outcomeDimensions[0];
  }

  selectOutcome(key: string): void {
    this.selectedOutcomeKey = key;
  }

  getSignalClass(severity: 'high' | 'medium' | 'low'): string {
    if (severity === 'high') {
      return 'signal-high';
    }

    if (severity === 'medium') {
      return 'signal-medium';
    }

    return 'signal-low';
  }
}
