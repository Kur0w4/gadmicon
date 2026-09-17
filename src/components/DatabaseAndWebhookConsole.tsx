import React, { useState } from 'react';
import { 
  Database, 
  Workflow, 
  Code2, 
  RefreshCw, 
  RotateCcw, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  ExternalLink,
  ChevronRight,
  Mail,
  Send,
  Sparkles,
  Server,
  Layers,
  Copy,
  Check
} from 'lucide-react';
import { LeadQuote, N8nWebhookEvent, PortfolioProject } from '../types';
import { Translations } from '../i18n/translations';
import { updateLeadStatus, resetDemoData, insertLeadQuote } from '../services/storageService';

interface DatabaseAndWebhookConsoleProps {
  t: Translations;
  leads: LeadQuote[];
  projects: PortfolioProject[];
  webhooks: N8nWebhookEvent[];
  onRefresh: () => void;
}

export const DatabaseAndWebhookConsole: React.FC<DatabaseAndWebhookConsoleProps> = ({
  t,
  leads,
  projects,
  webhooks,
  onRefresh,
}) => {
  const [activeTab, setActiveTab] = useState<'leads' | 'projects' | 'n8n' | 'sql'>('leads');
  const [selectedLead, setSelectedLead] = useState<LeadQuote | null>(leads[0] || null);
  const [copiedSql, setCopiedSql] = useState(false);
  const [simulatingWebhook, setSimulatingWebhook] = useState(false);

  const handleStatusChange = (id: string, newStatus: 'pending' | 'contacted' | 'closed') => {
    updateLeadStatus(id, newStatus);
    onRefresh();
    if (selectedLead?.id === id) {
      setSelectedLead((prev) => prev ? { ...prev, status: newStatus } : null);
    }
  };

  const handleTriggerTestLead = () => {
    setSimulatingWebhook(true);
    setTimeout(() => {
      const sampleNames = ['Desarrollos Piantini Lux', 'Inversiones Punta Cana Capital', 'Fiduciaria Caribeña', 'Torre Bella Vista Corp'];
      const randomName = sampleNames[Math.floor(Math.random() * sampleNames.length)];
      const randomUnits = Math.floor(Math.random() * 28) + 2;
      
      const { lead } = insertLeadQuote({
        client_name: randomName,
        email: `contacto@${randomName.toLowerCase().replace(/\s+/g, '')}.do`,
        phone: '+1 (809) 555-' + Math.floor(1000 + Math.random() * 9000),
        property_type: randomUnits > 12 ? 'Torre Residencial' : 'Apartamento',
        units_count: randomUnits,
        preferred_currency: Math.random() > 0.5 ? 'USD' : 'DOP',
        selected_services: ['Gestión Integral', 'Mantenimiento Preventivo', 'Housekeeping 5★'],
        notes: 'Lead de prueba generado para verificar el webhook n8n en tiempo real.',
      });

      setSimulatingWebhook(false);
      onRefresh();
      setSelectedLead(lead);
      setActiveTab('n8n');
    }, 600);
  };

  const sqlSchemaCode = `-- ==========================================================
-- GADMICON PLATAFORMA (FASE 1) - ESQUEMA SUPABASE POSTGRESQL
-- Arquitectura Relacional Limpia: portfolio_projects & lead_quotes
-- ==========================================================

-- Extensión UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Tabla: portfolio_projects (Gestiona las galerías y proyectos mostrados)
CREATE TABLE IF NOT EXISTS public.portfolio_projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description_es TEXT NOT NULL,
    description_en TEXT NOT NULL,
    description_fr TEXT NOT NULL,
    location VARCHAR(255) NOT NULL,
    main_image_url VARCHAR(1024) NOT NULL,
    gallery_urls TEXT[] NOT NULL DEFAULT '{}',
    category VARCHAR(50) DEFAULT 'torre',
    units_count INTEGER DEFAULT 1,
    year_completed INTEGER DEFAULT 2024,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Índices de optimización para SSR en Next.js
CREATE INDEX IF NOT EXISTS idx_portfolio_created ON public.portfolio_projects(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_portfolio_category ON public.portfolio_projects(category);

-- 2. Enum para estado del lead
DO $$ BEGIN
    CREATE TYPE lead_status_type AS ENUM ('pending', 'contacted', 'closed');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 3. Tabla: lead_quotes (Captura las solicitudes de cotización)
CREATE TABLE IF NOT EXISTS public.lead_quotes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(100),
    property_type VARCHAR(100) NOT NULL,
    units_count INTEGER NOT NULL CHECK (units_count > 0),
    preferred_currency VARCHAR(10) DEFAULT 'USD' CHECK (preferred_currency IN ('USD', 'DOP')),
    status lead_status_type DEFAULT 'pending' NOT NULL,
    estimated_monthly_fee NUMERIC(12, 2),
    selected_services TEXT[] DEFAULT '{}',
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Supabase Database Webhook Trigger para Orquestación en n8n
-- En el dashboard de Supabase (Database -> Webhooks):
-- Event: INSERT on public.lead_quotes
-- Target URL: https://n8n.gadmicon.com/webhook/lead-quote-v1
-- Method: POST
-- Headers: Authorization: Bearer <N8N_WEBHOOK_SECRET>
`;

  const copySql = () => {
    navigator.clipboard.writeText(sqlSchemaCode);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  return (
    <section id="consola" className="py-16 sm:py-20 bg-[#071324] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Console */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-xs font-semibold text-cyan-300 mb-2">
              <Server className="w-3.5 h-3.5" />
              <span>{t.console.title}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Monitoreo de Base de Datos y Webhook de Orquestación (n8n)
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {t.console.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              id="console-test-webhook-btn"
              onClick={handleTriggerTestLead}
              disabled={simulatingWebhook}
              className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors disabled:opacity-50"
            >
              <Workflow className="w-4 h-4" />
              <span>{simulatingWebhook ? 'Disparando n8n...' : t.console.simulateWebhook}</span>
            </button>

            <button
              id="console-reset-data-btn"
              onClick={() => {
                if (window.confirm('¿Desea restablecer los registros a los valores iniciales de demostración?')) {
                  resetDemoData();
                  onRefresh();
                }
              }}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 border border-slate-700 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.console.resetData}</span>
            </button>

            <button
              id="console-refresh-btn"
              onClick={onRefresh}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
              title={t.console.refreshData}
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 border-b border-slate-800 pb-4 mb-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              activeTab === 'leads'
                ? 'bg-cyan-950 text-cyan-200 border border-cyan-500/50 shadow-sm'
                : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:bg-slate-850 hover:text-slate-200'
            }`}
          >
            <Database className="w-4 h-4 text-cyan-400" />
            <span>lead_quotes ({leads.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              activeTab === 'projects'
                ? 'bg-cyan-950 text-cyan-200 border border-cyan-500/50 shadow-sm'
                : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:bg-slate-850 hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>portfolio_projects ({projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('n8n')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              activeTab === 'n8n'
                ? 'bg-cyan-950 text-cyan-200 border border-cyan-500/50 shadow-sm'
                : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:bg-slate-850 hover:text-slate-200'
            }`}
          >
            <Workflow className="w-4 h-4 text-cyan-400" />
            <span>Pipeline n8n ({webhooks.length} eventos)</span>
          </button>

          <button
            onClick={() => setActiveTab('sql')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              activeTab === 'sql'
                ? 'bg-cyan-950 text-cyan-200 border border-cyan-500/50 shadow-sm'
                : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:bg-slate-850 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>{t.console.sqlTab}</span>
          </button>
        </div>

        {/* TAB 1: lead_quotes table inspector */}
        {activeTab === 'leads' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Table List (7 cols) */}
            <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden">
              <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-300">
                  SELECT * FROM public.lead_quotes ORDER BY created_at DESC;
                </span>
                <span className="text-[11px] text-slate-400">{leads.length} filas</span>
              </div>

              <div className="overflow-x-auto max-h-[500px]">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950 text-[10px] uppercase font-mono text-slate-400 sticky top-0">
                    <tr>
                      <th className="p-3">Cliente</th>
                      <th className="p-3">Tipo / Unid.</th>
                      <th className="p-3">Presupuesto</th>
                      <th className="p-3">Estado</th>
                      <th className="p-3">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    {leads.map((lead) => {
                      const isSelected = selectedLead?.id === lead.id;
                      return (
                        <tr
                          key={lead.id}
                          onClick={() => setSelectedLead(lead)}
                          className={`cursor-pointer transition-colors ${
                            isSelected ? 'bg-slate-800/90 text-white' : 'hover:bg-slate-800/40'
                          }`}
                        >
                          <td className="p-3">
                            <div className="font-semibold text-white">{lead.client_name}</div>
                            <div className="text-[11px] text-slate-400">{lead.email}</div>
                          </td>
                          <td className="p-3">
                            <div>{lead.property_type}</div>
                            <div className="text-[11px] text-slate-400">{lead.units_count} unidades</div>
                          </td>
                          <td className="p-3 font-mono font-semibold text-cyan-300">
                            {lead.preferred_currency === 'USD' ? '$' : 'RD$'}{lead.estimated_monthly_fee?.toLocaleString()}
                          </td>
                          <td className="p-3">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                                lead.status === 'contacted'
                                  ? 'bg-blue-950 text-blue-300 border border-blue-800'
                                  : lead.status === 'closed'
                                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                                  : 'bg-amber-950 text-amber-300 border border-amber-800'
                              }`}
                            >
                              {lead.status}
                            </span>
                          </td>
                          <td className="p-3" onClick={(e) => e.stopPropagation()}>
                            <select
                              value={lead.status}
                              onChange={(e) => handleStatusChange(lead.id, e.target.value as any)}
                              className="px-2 py-1 rounded bg-slate-950 border border-slate-700 text-[10px] text-slate-300 focus:outline-none"
                            >
                              <option value="pending">pending</option>
                              <option value="contacted">contacted</option>
                              <option value="closed">closed</option>
                            </select>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Row Detail / JSON Inspector (5 cols) */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-800 p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Detalle del Registro Seleccionado
                </h4>
                {selectedLead && (
                  <span className="text-[10px] font-mono text-cyan-400">
                    {selectedLead.id}
                  </span>
                )}
              </div>

              {selectedLead ? (
                <div className="space-y-3 text-xs">
                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2 font-mono text-[11px] text-slate-300 max-h-[360px] overflow-y-auto">
                    <pre>{JSON.stringify(selectedLead, null, 2)}</pre>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700 text-xs text-slate-300">
                    <div className="font-semibold text-white mb-1">Notas del Lead:</div>
                    <p className="text-slate-400">{selectedLead.notes || 'Sin observaciones adicionales.'}</p>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-slate-400">Seleccione un lead de la tabla.</p>
              )}
            </div>

          </div>
        )}

        {/* TAB 2: portfolio_projects table inspector */}
        {activeTab === 'projects' && (
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-cyan-300">
                SELECT id, title, location, category, units_count, created_at FROM public.portfolio_projects;
              </span>
              <span className="text-[11px] text-slate-400">{projects.length} registros Alero</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-[10px] uppercase font-mono text-slate-400">
                  <tr>
                    <th className="p-3">Proyecto</th>
                    <th className="p-3">Ubicación</th>
                    <th className="p-3">Tipología</th>
                    <th className="p-3">Unidades</th>
                    <th className="p-3">Galería (URLs)</th>
                    <th className="p-3">i18n Ready</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {projects.map((proj) => (
                    <tr key={proj.id} className="hover:bg-slate-850">
                      <td className="p-3 font-semibold text-white">
                        {proj.title}
                      </td>
                      <td className="p-3 text-slate-400">
                        {proj.location}
                      </td>
                      <td className="p-3 uppercase font-mono text-[10px] text-cyan-300">
                        {proj.category}
                      </td>
                      <td className="p-3">
                        {proj.units_count || 1}
                      </td>
                      <td className="p-3 text-slate-400 font-mono text-[11px]">
                        {proj.gallery_urls?.length || 1} fotos
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 font-mono">
                          ES / EN / FR
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: n8n Webhook & Orchestration Pipeline */}
        {activeTab === 'n8n' && (
          <div className="space-y-6">
            
            {/* Visual Workflow Steps */}
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6">
              <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Workflow className="w-4 h-4 text-cyan-400" />
                <span>Flujo de Orquestación Activo (n8n Workflow ID: wkf_gadmicon_phase1)</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
                
                {/* Node 1 */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 relative">
                  <div className="text-[10px] font-mono text-cyan-400 mb-1">1. TRIGGER</div>
                  <div className="font-bold text-white text-xs">Supabase Webhook</div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Event: INSERT on lead_quotes
                  </p>
                  <div className="mt-2 text-[10px] text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>200 OK</span>
                  </div>
                </div>

                {/* Node 2 */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 relative">
                  <div className="text-[10px] font-mono text-cyan-400 mb-1">2. LOGIC NODE</div>
                  <div className="font-bold text-white text-xs">Cálculo de Cotización</div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Fórmula base x unidades + servicios
                  </p>
                  <div className="mt-2 text-[10px] text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Tarifa generada</span>
                  </div>
                </div>

                {/* Node 3 */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 relative">
                  <div className="text-[10px] font-mono text-cyan-400 mb-1">3. EMAIL NODE</div>
                  <div className="font-bold text-white text-xs">Email Profesional</div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Envío de propuesta formal al cliente
                  </p>
                  <div className="mt-2 text-[10px] text-emerald-400 flex items-center gap-1">
                    <Mail className="w-3 h-3" />
                    <span>SMTP / SendGrid</span>
                  </div>
                </div>

                {/* Node 4 */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 relative">
                  <div className="text-[10px] font-mono text-cyan-400 mb-1">4. ALERT NODE</div>
                  <div className="font-bold text-white text-xs">Alerta Operaciones</div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Notificación urgente Slack / Telegram
                  </p>
                  <div className="mt-2 text-[10px] text-emerald-400 flex items-center gap-1">
                    <Send className="w-3 h-3" />
                    <span>Canal #gadmicon-leads</span>
                  </div>
                </div>

                {/* Node 5 */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 relative">
                  <div className="text-[10px] font-mono text-cyan-400 mb-1">5. SYNC NODE</div>
                  <div className="font-bold text-white text-xs">Supabase UPDATE</div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    status &rarr; contacted / sync
                  </p>
                  <div className="mt-2 text-[10px] text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>DB sincronizada</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Webhook Execution Logs */}
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Historial de Disparos Webhook Recientes
                </h4>
                <span className="text-xs font-mono text-slate-400">
                  Endpoint: https://n8n.gadmicon.com/webhook/lead-quote-v1
                </span>
              </div>

              <div className="space-y-3">
                {webhooks.map((wh) => (
                  <div
                    key={wh.id}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-mono font-bold">
                          {wh.event} 200 OK
                        </span>
                        <span className="font-mono text-slate-300">{wh.id}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-400">{new Date(wh.timestamp).toLocaleTimeString()}</span>
                      </div>
                      <span className="font-mono text-slate-400">{wh.execution_time_ms}ms</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-[11px]">
                      <div>
                        <span className="text-slate-500">Cliente:</span>{' '}
                        <span className="text-white font-medium">{wh.payload.record.client_name}</span>
                      </div>
                      <div>
                        <span className="text-slate-500">Tarifa Calculada:</span>{' '}
                        <span className="text-cyan-300 font-mono font-medium">
                          {wh.payload.preliminary_calculation.currency === 'USD' ? '$' : 'RD$'}
                          {wh.payload.preliminary_calculation.estimated_monthly?.toLocaleString()} / mes
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500">Tier:</span>{' '}
                        <span className="text-emerald-400 font-medium">
                          {wh.payload.preliminary_calculation.tier} (-{wh.payload.preliminary_calculation.volume_discount_pct}%)
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 4: SQL DDL Schema */}
        {activeTab === 'sql' && (
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-cyan-300">
                Esquema DDL Supabase PostgreSQL (portfolio_projects & lead_quotes)
              </span>
              <button
                onClick={copySql}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 flex items-center gap-1.5 transition-colors border border-slate-700"
              >
                {copiedSql ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSql ? '¡Copiado!' : 'Copiar SQL'}</span>
              </button>
            </div>

            <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 overflow-x-auto text-[11px] font-mono text-slate-300">
              <pre>{sqlSchemaCode}</pre>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
