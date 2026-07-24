import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, PieChart, Calendar, Target, AlertCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Financials = () => {
  const startupCosts = [
    { category: 'Legal & Registration', amount: 150000 },
    { category: 'Office Setup & Equipment', amount: 500000 },
    { category: 'Technology & Software', amount: 300000 },
    { category: 'Initial Marketing', amount: 250000 },
    { category: 'Working Capital', amount: 800000 },
  ];

  const totalStartup = startupCosts.reduce((sum, item) => sum + item.amount, 0);

  const monthlyExpenses = [
    { category: 'Salaries & Wages', amount: 800000 },
    { category: 'Office Rent & Utilities', amount: 100000 },
    { category: 'Marketing & Advertising', amount: 150000 },
    { category: 'Software Subscriptions', amount: 50000 },
    { category: 'Miscellaneous', amount: 50000 },
  ];

  const totalMonthly = monthlyExpenses.reduce((sum, item) => sum + item.amount, 0);

  const revenueProjections = [
    { 
      year: 'Year 1', 
      revenue: 12600000, 
      expenses: 9450000, 
      profit: 3150000,
      breakdown: {
        webApp: 7200000,
        software: 3600000,
        consultation: 1200000,
        training: 600000
      }
    },
    { year: 'Year 2', revenue: 18000000, expenses: 13500000, profit: 4500000 },
    { year: 'Year 3', revenue: 27000000, expenses: 19500000, profit: 7500000 },
    { year: 'Year 4', revenue: 36000000, expenses: 25200000, profit: 10800000 },
    { year: 'Year 5', revenue: 48000000, expenses: 31200000, profit: 16800000 },
  ];

  const timeline = [
    {
      phase: 'Phase 1 – Setup',
      duration: 'Month 1-2',
      activities: [
        'Company registration and legal documentation',
        'Infrastructure setup and office arrangement',
        'Team recruitment and onboarding',
        'Technology stack and tools acquisition',
        'Initial brand identity development',
      ],
    },
    {
      phase: 'Phase 2 – Service Development',
      duration: 'Month 3-5',
      activities: [
        'Professional website development',
        'Portfolio and case study preparation',
        'Service packages design and pricing',
        'Internal process and workflow setup',
        'Quality assurance systems implementation',
      ],
    },
    {
      phase: 'Phase 3 – Market Launch',
      duration: 'Month 6',
      activities: [
        'Soft launch with pilot clients',
        'Initial marketing campaign rollout',
        'Feedback collection and refinement',
        'Partnership establishment',
        'Portfolio building with first projects',
      ],
    },
    {
      phase: 'Phase 4 – Expansion',
      duration: 'Month 7-12',
      activities: [
        'Client acquisition campaigns',
        'Marketing and promotional activities',
        'Hosting and maintenance service management',
        'Team expansion based on demand',
        'Revenue stream diversification',
      ],
    },
    {
      phase: 'Phase 5 – Consolidation',
      duration: 'Year 2',
      activities: [
        'Long-term service contracts establishment',
        'Advanced application development',
        'Market leadership positioning',
        'Regional expansion planning',
        'Innovation and R&D initiatives',
      ],
    },
  ];

  const fundingStrategy = [
    {
      source: 'Founder Investment',
      amount: 1000000,
      percentage: 50,
    },
    {
      source: 'Business Loan',
      amount: 700000,
      percentage: 35,
    },
    {
      source: 'Angel Investors',
      amount: 300000,
      percentage: 15,
    },
  ];

  const formatCurrency = (amount) => {
    return `LKR ${(amount / 1000).toFixed(0)}K`;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-900 dark:to-secondary-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-900 dark:text-white mb-6">
              Financial <span className="text-primary-600">Plan</span>
            </h1>
            <p className="text-xl text-secondary-600 dark:text-secondary-300">
              Comprehensive financial strategy and projections for sustainable growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Startup Costs Section */}
      <section className="py-20 bg-white dark:bg-secondary-900">
        <div className="container-custom">
          <SectionHeader
            title="Startup Investment"
            subtitle="Initial capital requirements to launch the business"
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {startupCosts.map((cost, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                      {cost.category}
                    </h3>
                    <span className="text-xl font-bold text-primary-600">
                      {formatCurrency(cost.amount)}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card bg-gradient-to-r from-primary-600 to-primary-800 text-white"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Total Startup Investment</h3>
                  <p className="text-primary-100">Required initial capital</p>
                </div>
                <div className="text-4xl font-bold">{formatCurrency(totalStartup)}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Funding Strategy */}
      <section className="py-20 bg-secondary-50 dark:bg-secondary-800">
        <div className="container-custom">
          <SectionHeader
            title="Funding Strategy"
            subtitle="How we plan to finance the business"
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {fundingStrategy.map((funding, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card text-center"
                >
                  <PieChart className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
                    {funding.source}
                  </h3>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {funding.percentage}%
                  </div>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    {formatCurrency(funding.amount)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Expenses Section */}
      <section className="py-20 bg-white dark:bg-secondary-900">
        <div className="container-custom">
          <SectionHeader
            title="Operating Expenses"
            subtitle="Estimated monthly costs to run the business"
          />

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 mb-8">
              {monthlyExpenses.map((expense, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-secondary-700 dark:text-secondary-300 font-medium">
                      {expense.category}
                    </span>
                    <span className="text-primary-600 font-bold">
                      {formatCurrency(expense.amount)}
                    </span>
                  </div>
                  <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(expense.amount / totalMonthly) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-primary-500 to-primary-700 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card bg-secondary-100 dark:bg-secondary-800"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                  Total Monthly Expenses
                </h3>
                <span className="text-3xl font-bold text-primary-600">
                  {formatCurrency(totalMonthly)}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Year 1 Revenue Breakdown */}
      <section className="py-20 bg-white dark:bg-secondary-900">
        <div className="container-custom">
          <SectionHeader
            title="Year 1 Revenue Streams"
            subtitle="Projected revenue breakdown for the first year - Expected Net Profit Margin: 20-25%"
          />

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { name: 'Web & App Development', amount: 7200000, color: 'bg-blue-600' },
                { name: 'Software Solutions', amount: 3600000, color: 'bg-green-600' },
                { name: 'Consultation & Support', amount: 1200000, color: 'bg-purple-600' },
                { name: 'Training & Workshops', amount: 600000, color: 'bg-orange-600' },
              ].map((stream, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card text-center hover:shadow-lg transition-shadow"
                >
                  <div className={`w-16 h-16 ${stream.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
                    {stream.name}
                  </h3>
                  <p className="text-3xl font-bold text-primary-600 mb-2">
                    {formatCurrency(stream.amount)}
                  </p>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    {((stream.amount / 12600000) * 100).toFixed(0)}% of total revenue
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 text-center"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <p className="text-secondary-600 dark:text-secondary-400 mb-1">Total Year 1 Revenue</p>
                  <p className="text-3xl font-bold text-primary-600">
                    {formatCurrency(12600000)}
                  </p>
                </div>
                <div className="w-px h-12 bg-secondary-300 dark:bg-secondary-600 mx-6"></div>
                <div className="flex-1">
                  <p className="text-secondary-600 dark:text-secondary-400 mb-1">Expected Net Profit</p>
                  <p className="text-3xl font-bold text-green-600">
                    {formatCurrency(3150000)}
                  </p>
                </div>
                <div className="w-px h-12 bg-secondary-300 dark:bg-secondary-600 mx-6"></div>
                <div className="flex-1">
                  <p className="text-secondary-600 dark:text-secondary-400 mb-1">Profit Margin</p>
                  <p className="text-3xl font-bold text-secondary-900 dark:text-white">
                    25%
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Revenue Projections Section */}
      <section className="py-20 bg-secondary-50 dark:bg-secondary-800">
        <div className="container-custom">
          <SectionHeader
            title="5-Year Revenue Projections"
            subtitle="Conservative estimates based on market analysis and growth strategy"
          />

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary-600">
                  <th className="px-4 py-3 text-left text-secondary-900 dark:text-white font-bold">
                    Period
                  </th>
                  <th className="px-4 py-3 text-right text-secondary-900 dark:text-white font-bold">
                    Revenue
                  </th>
                  <th className="px-4 py-3 text-right text-secondary-900 dark:text-white font-bold">
                    Expenses
                  </th>
                  <th className="px-4 py-3 text-right text-secondary-900 dark:text-white font-bold">
                    Net Profit
                  </th>
                  <th className="px-4 py-3 text-right text-secondary-900 dark:text-white font-bold">
                    Margin
                  </th>
                </tr>
              </thead>
              <tbody>
                {revenueProjections.map((projection, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-secondary-200 dark:border-secondary-700"
                  >
                    <td className="px-4 py-4 font-semibold text-secondary-900 dark:text-white">
                      {projection.year}
                    </td>
                    <td className="px-4 py-4 text-right text-secondary-700 dark:text-secondary-300">
                      {formatCurrency(projection.revenue)}
                    </td>
                    <td className="px-4 py-4 text-right text-secondary-700 dark:text-secondary-300">
                      {formatCurrency(projection.expenses)}
                    </td>
                    <td className="px-4 py-4 text-right font-bold text-primary-600">
                      {formatCurrency(projection.profit)}
                    </td>
                    <td className="px-4 py-4 text-right text-secondary-700 dark:text-secondary-300">
                      {((projection.profit / projection.revenue) * 100).toFixed(1)}%
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 card bg-primary-50 dark:bg-secondary-700 border-l-4 border-primary-600"
          >
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-secondary-900 dark:text-white mb-2">
                  Financial Assumptions
                </h4>
                <ul className="space-y-1 text-sm text-secondary-700 dark:text-secondary-300">
                  <li>• Projections based on conservative market growth estimates</li>
                  <li>• Assumes 50% year-over-year revenue growth in years 1-3</li>
                  <li>• Client retention rate of 80% after year 1</li>
                  <li>• Average project value increases with market reputation</li>
                  <li>• Operating expenses scale proportionally with revenue</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Timeline Section */}
      <section className="py-20 bg-white dark:bg-secondary-900">
        <div className="container-custom">
          <SectionHeader
            title="Implementation Timeline"
            subtitle="Phased approach to launching and growing the business"
          />

          <div className="max-w-5xl mx-auto">
            {timeline.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 pb-12 border-l-2 border-primary-300 dark:border-primary-700 last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-primary-600 rounded-full border-4 border-white dark:border-secondary-900"></div>
                <div className="card">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-6 h-6 text-primary-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                        {phase.phase}
                      </h3>
                      <p className="text-sm text-primary-600 font-semibold">{phase.duration}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2 text-secondary-600 dark:text-secondary-400"
                      >
                        <span className="text-primary-500 mt-1">✓</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs and Monitoring Section */}
      <section className="py-20 bg-white dark:bg-secondary-900">
        <div className="container-custom">
          <SectionHeader
            title="Monitoring & Key Performance Indicators"
            subtitle="Regular evaluation and quality assurance measures"
          />

          <div className="max-w-6xl mx-auto">
            {/* Review Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 mb-8"
            >
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">
                Evaluation Schedule
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Calendar className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-secondary-900 dark:text-white mb-1">Monthly Reviews</h4>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    Project timelines, costs, and client satisfaction assessment
                  </p>
                </div>
                <div className="text-center">
                  <Target className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-secondary-900 dark:text-white mb-1">Quarterly Audits</h4>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    Technical performance and financial flow audits
                  </p>
                </div>
                <div className="text-center">
                  <AlertCircle className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-secondary-900 dark:text-white mb-1">Client Feedback</h4>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    Integrated feedback systems in every client engagement
                  </p>
                </div>
              </div>
            </motion.div>

            {/* KPIs Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: 'Project Completion Rate',
                  target: 'On time & within budget',
                  icon: Target,
                  color: 'text-blue-600'
                },
                { 
                  title: 'Client Satisfaction',
                  target: 'Above 85%',
                  icon: TrendingUp,
                  color: 'text-green-600'
                },
                { 
                  title: 'System Uptime',
                  target: '99%',
                  icon: AlertCircle,
                  color: 'text-purple-600'
                },
                { 
                  title: 'Annual Profit Growth',
                  target: '15-20%',
                  icon: DollarSign,
                  color: 'text-orange-600'
                },
              ].map((kpi, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card text-center hover:shadow-lg transition-shadow"
                >
                  <kpi.icon className={`w-12 h-12 ${kpi.color} mx-auto mb-3`} />
                  <h4 className="font-bold text-secondary-900 dark:text-white mb-2">
                    {kpi.title}
                  </h4>
                  <p className="text-2xl font-bold text-primary-600">
                    {kpi.target}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Break-even Analysis */}
      <section className="py-20 bg-secondary-50 dark:bg-secondary-800">
        <div className="container-custom max-w-4xl">
          <SectionHeader
            title="Break-Even Analysis"
            subtitle="When the business becomes profitable"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <Target className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h4 className="font-bold text-secondary-900 dark:text-white mb-2">
                  Break-Even Point
                </h4>
                <p className="text-3xl font-bold text-primary-600">Month 8</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h4 className="font-bold text-secondary-900 dark:text-white mb-2">
                  Payback Period
                </h4>
                <p className="text-3xl font-bold text-primary-600">18 Months</p>
              </div>
              <div className="text-center">
                <DollarSign className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h4 className="font-bold text-secondary-900 dark:text-white mb-2">
                  ROI (Year 5)
                </h4>
                <p className="text-3xl font-bold text-primary-600">840%</p>
              </div>
            </div>
            <p className="text-secondary-600 dark:text-secondary-400 text-center">
              Based on conservative projections, the business is expected to reach break-even by month 8 
              and fully recover initial investment within 18 months.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Financials;
