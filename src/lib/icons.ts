import {
  AppWindow, Cloud, Shield, BarChart3, Workflow, Building2, Brain, Cpu,
  CheckCircle2, Compass, Settings, Box,
  Zap, TrendingUp, Lightbulb,
  Landmark, Heart, Laptop, ShieldCheck, Microscope, Factory, Film,
  ShoppingCart, Radio, Plug,
  ArrowRight, AlertTriangle,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  AppWindow, Cloud, Shield, BarChart3, Workflow, Building2, Brain, Cpu,
  CheckCircle2, Compass, Settings, Box,
  Zap, TrendingUp, Lightbulb,
  Landmark, Heart, Laptop, ShieldCheck, Microscope, Factory, Film,
  ShoppingCart, Radio, Plug,
  ArrowRight, AlertTriangle,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] || Box;
}
