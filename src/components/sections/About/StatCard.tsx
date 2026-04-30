import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui';
import type { Stat } from '@/types';

interface StatCardProps {
  stat: Stat;
  index: number;
}

export default function StatCard({ stat, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassCard className="p-6 text-center" hover glow="indigo">
        <div className="text-3xl font-bold gradient-text mb-1">
          {stat.value}{stat.suffix ?? ''}
        </div>
        <div className="text-gray-400 text-sm">{stat.label}</div>
      </GlassCard>
    </motion.div>
  );
}
