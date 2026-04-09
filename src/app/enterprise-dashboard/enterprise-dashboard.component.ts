import { Component } from '@angular/core';

interface OutcomeDimension {
  title: string;
  detail: string;
}

interface JourneyStep {
  title: string;
  detail: string;
}

interface CapabilityDriver {
  title: string;
  detail: string;
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
      title: 'Economic Engine Strength',
      detail: 'Margin, pricing power, revenue quality'
    },
    {
      title: 'Execution Consistency',
      detail: 'Delivery reliability, cost control, scalability'
    },
    {
      title: 'Adaptive Capacity',
      detail: 'Innovation, resilience, future readiness'
    },
    {
      title: 'Capital Allocation Discipline',
      detail: 'Return on invested capital, investment quality'
    },
    {
      title: 'Organisational Alignment',
      detail: 'Productivity, speed, cross-functional effectiveness'
    }
  ];

  readonly journeySteps: JourneyStep[] = [
    {
      title: 'Strategy',
      detail: 'Defines value creation, market positioning, and capital allocation'
    },
    {
      title: 'Culture',
      detail: 'Defines how decisions are made and how accountability is enforced'
    },
    {
      title: 'Job Design',
      detail: 'Defines who makes decisions and at what level of complexity'
    },
    {
      title: 'Performance Metrics',
      detail: 'Defines what is measured and what drives behaviour'
    },
    {
      title: 'Succession',
      detail: 'Ensures continuity of capability in critical roles'
    },
    {
      title: 'Reward',
      detail: 'Reinforces the behaviours that drive performance'
    }
  ];

  readonly capabilityDrivers: CapabilityDriver[] = [
    {
      title: 'Cognitive capability',
      detail: 'How people think'
    },
    {
      title: 'Motivation',
      detail: 'What drives behaviour'
    },
    {
      title: 'Values',
      detail: 'How decisions are made'
    },
    {
      title: 'Learning agility',
      detail: 'Ability to adapt'
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
}
