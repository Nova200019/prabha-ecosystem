'use client';

import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { Briefcase, Download, FileText, Plus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ArchitectDashboard() {
  const projects = [
    { name: 'Sea View Penthouse', client: 'Mr. Oberoi', status: 'In Progress', materials: 12 },
    { name: 'Lakeside Villa', client: 'Sharma Family', status: 'Quoting', materials: 8 },
    { name: 'The Onyx Hotel', client: 'Onyx Group', status: 'Completed', materials: 45 },
  ];

  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-serif text-white">Architect Portal</h1>
            <p className="text-[#BDBDBD] mt-1">Manage projects, quotes, and resources.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="primary" className="flex items-center gap-2">
              <Plus size={16} /> New Project
            </Button>
          </div>
        </div>
      </ScrollReveal>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ScrollReveal delay={0.1}>
          <GlassCard className="p-6 hover:border-[#C9A96E]/50 transition-colors cursor-pointer group">
            <Briefcase className="text-[#C9A96E] mb-4" size={24} />
            <h3 className="text-lg font-medium text-white mb-2">Projects & BOQs</h3>
            <p className="text-sm text-[#BDBDBD]">Create and manage material lists for your clients.</p>
          </GlassCard>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Link href="/architect/downloads">
            <GlassCard className="p-6 hover:border-[#C9A96E]/50 transition-colors cursor-pointer group h-full">
              <Download className="text-[#C9A96E] mb-4" size={24} />
              <h3 className="text-lg font-medium text-white mb-2">CAD & BIM Library</h3>
              <p className="text-sm text-[#BDBDBD]">Download 3D models and technical specifications.</p>
            </GlassCard>
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <GlassCard className="p-6 hover:border-[#C9A96E]/50 transition-colors cursor-pointer group">
            <FileText className="text-[#C9A96E] mb-4" size={24} />
            <h3 className="text-lg font-medium text-white mb-2">Trade Quotes</h3>
            <p className="text-sm text-[#BDBDBD]">Request special pricing and manage client quotes.</p>
          </GlassCard>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.4}>
        <GlassCard className="overflow-hidden">
          <div className="p-6 border-b border-[#1f1f1f] flex justify-between items-center">
            <h2 className="text-xl font-medium text-white">Active Projects</h2>
            <Link href="/architect/projects" className="text-sm text-[#C9A96E] hover:text-[#b0925c] flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="p-0">
            {projects.map((project, i) => (
              <div key={i} className="flex items-center justify-between p-6 border-b border-[#1f1f1f] last:border-0 hover:bg-[#121212]/50 transition-colors">
                <div>
                  <h4 className="text-white font-medium text-lg">{project.name}</h4>
                  <p className="text-sm text-[#BDBDBD]">Client: {project.client} • {project.materials} items</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    project.status === 'Completed' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 
                    project.status === 'In Progress' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                    'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                  }`}>
                    {project.status}
                  </span>
                  <button className="text-[#BDBDBD] hover:text-white"><ArrowRight size={20} /></button>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </ScrollReveal>
    </div>
  );
}
