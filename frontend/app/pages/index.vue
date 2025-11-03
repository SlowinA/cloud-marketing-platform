<template>
  <div class="min-h-screen font-sans text-gray-900">
    <div class="container mx-auto max-w-7xl p-6 md:p-10">
      
      <!-- 1. Header & Main Call to Action (CTA) -->
      <header class="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 class="text-3xl font-bold text-gray-800">
            Welcome, Marketer
          </h1>
          <p class="mt-1 text-lg text-gray-500">
            Here is an overview of your marketing activities.
          </p>
        </div>
        <button class="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Create New Campaign
        </button>
      </header>

      <!-- 2. KPI Grid (Live Data from BigQuery) -->
      <div class="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="kpi in kpiData" :key="kpi.title" class="transform rounded-xl border border-gray-200/80 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div class="mb-4 flex items-center justify-between">
            <span class="text-sm font-medium text-gray-500">{{ kpi.title }}</span>
            <span v-html="kpi.icon" class="text-gray-400"></span>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-4xl font-bold tracking-tight text-gray-900">{{ kpi.value }}</span>
            <span v-if="kpi.change" :class="kpi.change.startsWith('+') ? 'text-green-600' : 'text-red-600'" class="text-sm font-medium">
              {{ kpi.change }}
            </span>
          </div>
          <p classs="text-xs text-gray-400">{{ kpi.description }}</p>
        </div>
      </div>

      <!-- 3. Main Content Area (2 columns) -->
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">

        <!-- Left Column: Recent Campaigns -->
        <div class="rounded-xl border border-gray-200/80 bg-white p-6 shadow-md lg:col-span-2">
          <h2 class="mb-5 text-xl font-semibold text-gray-800">Recent Campaigns</h2>
          
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Campaign Name</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Sent</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Open Rate</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500" 
                      title="Our unique differentiator: Predicted BigQuery query cost before launch. (from Executive Summary.txt)">
                    <div class="flex items-center gap-1.5">
                      Est. BQ Cost
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="campaign in recentCampaigns" :key="campaign.id" class="hover:bg-gray-50">
                  <td class="whitespace-nowrap px-6 py-4">
                    <div class="font-medium text-gray-900">{{ campaign.name }}</div>
                    <div class="text-sm text-gray-500">{{ campaign.type }}</div>
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    <span :class="getStatusClass(campaign.status)" class="rounded-full px-3 py-1 text-xs font-medium">
                      {{ campaign.status }}
                    </span>
                  </td>
                  <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-600">{{ campaign.sent }}</td>
                  <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-600">{{ campaign.openRate }}%</td>
                  <td class="whitespace-nowrap px-6 py-4 text-sm font-mono text-gray-700" :title="'Estimated BigQuery query cost for this campaign: $' + campaign.estimatedCost">
                    ${{ campaign.estimatedCost.toFixed(2) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Right Column: Quick Actions & Activity -->
        <div class="space-y-8">
          
          <!-- Quick Actions -->
          <div class="rounded-xl border border-gray-200/80 bg-white p-6 shadow-md">
            <h2 class="mb-5 text-xl font-semibold text-gray-800">Quick Actions</h2>
            <div class="flex flex-col gap-4">
              <button class="flex w-full items-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-left font-medium text-gray-700 transition-all hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                Manage Audience
              </button>
              <button class="flex w-full items-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-left font-medium text-gray-700 transition-all hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                Browse Email Templates
              </button>
              <button class="flex w-full items-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-left font-medium text-gray-700 transition-all hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                View Full Analytics
              </button>
            </div>
          </div>

          <!-- Recent Activity -->
          <div class="rounded-xl border border-gray-200/80 bg-white p-6 shadow-md">
            <h2 class="mb-5 text-xl font-semibold text-gray-800">Recent Activity</h2>
            <ul class="space-y-5">
              <li v-for="item in activityFeed" :key="item.id" class="flex gap-3">
                <span class="flex-shrink-0 rounded-full bg-blue-100 p-2 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                </span>
                <div>
                  <p class="text-sm font-medium text-gray-800" v-html="item.text"></p>
                  <time class="text-xs text-gray-500">{{ item.time }}</time>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// --- Mock Data ---
// In a real application, this data would be fetched asynchronously,
// executing queries DIRECTLY against the client's BigQuery (as per our architecture).

// 1. Data for KPI cards
const kpiData = ref([
  {
    title: 'Active Campaigns',
    value: '12',
    change: '+2',
    description: 'Active journeys and automations',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>'
  },
  {
    title: 'Total Audience',
    value: '1.42M',
    change: '+1.2%',
    description: 'Users in BQ (live)',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>'
  },
  {
    title: 'Emails Sent (30d)',
    value: '820k',
    change: '-0.5%',
    description: 'All channel dispatches',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>'
  },
  {
    title: 'Avg. Open Rate (30d)',
    value: '24.8%',
    change: '+1.8%',
    description: 'Engagement in campaigns',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>'
  }
])

// 2. Data for Recent Campaigns table
const recentCampaigns = ref([
  {
    id: 1,
    name: 'Welcome Campaign (New Customers)',
    type: 'Automated Journey',
    status: 'Active',
    sent: 'N/A',
    openRate: 42.1,
    estimatedCost: 0.12 // Key differentiator!
  },
  {
    id: 2,
    name: 'Newsletter October 2025',
    type: 'One-time Send',
    status: 'Sent',
    sent: '810.5K',
    openRate: 21.3,
    estimatedCost: 2.45 // Sending to a large audience = higher BQ cost
  },
  {
    id: 3,
    name: 'Reactivation (Inactive)',
    type: 'Automated Journey',
    status: 'Draft',
    sent: '0',
    openRate: 0.0,
    estimatedCost: 0.89
  },
  {
    id: 4,
    name: 'Holiday Promo (VIP)',
    type: 'One-time Send',
    status: 'Sent',
    sent: '45.2K',
    openRate: 31.5,
    estimatedCost: 0.35
  }
])

// 3. Data for Recent Activity feed
const activityFeed = ref([
  {
    id: 1,
    text: '<span class="font-bold">Anna Nowak</span> updated the segment <span class="font-medium text-blue-600">"VIP Customers (Warsaw)"</span>.',
    time: '2 minutes ago'
  },
  {
    id: 2,
    text: '<span class="font-bold">Jan Kowalski</span> approved the campaign send <span class="font-medium text-blue-600">"Newsletter October 2025"</span>.',
    time: '1 hour ago'
  },
  {
    id: 3,
    text: 'Segment <span class="font-medium text-blue-600">"New Users"</span> was refreshed in BigQuery.',
    time: '3 hours ago'
  }
])

// Helper function for status styling
const getStatusClass = (status: string): string => {
  switch (status) {
    case 'Active':
      return 'bg-green-100 text-green-800'
    case 'Sent':
      return 'bg-blue-100 text-blue-800'
    case 'Draft':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

</script>

<style scoped>
/* Additional, minor styles if Tailwind isn't enough */
.container {
  max-width: 90rem; /* Custom max-width for the dashboard */
}
</style>

