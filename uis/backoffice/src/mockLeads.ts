export type Confidence = 'hot' | 'warm' | 'cold'

export interface Lead {
  company: string
  industry: string
  score: number
  confidence: Confidence
  lastActivity: string
}

export const leads: Lead[] = [
  { company: 'Northstar Systems', industry: 'Technology', score: 92, confidence: 'hot', lastActivity: '12 min ago' },
  { company: 'Mercado Claro', industry: 'Retail', score: 84, confidence: 'hot', lastActivity: '41 min ago' },
  { company: 'Lumen Financial', industry: 'Financial services', score: 76, confidence: 'warm', lastActivity: '2 hours ago' },
  { company: 'Bluepeak Commerce', industry: 'Retail', score: 68, confidence: 'warm', lastActivity: 'Yesterday' },
  { company: 'Atlas Cloudworks', industry: 'Technology', score: 61, confidence: 'warm', lastActivity: 'Yesterday' },
  { company: 'Verde Capital', industry: 'Financial services', score: 43, confidence: 'cold', lastActivity: '3 days ago' },
]