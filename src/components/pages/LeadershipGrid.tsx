'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import type { LeadershipMember } from '@/types';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

interface Props {
  members: LeadershipMember[];
}

export default function LeadershipGrid({ members }: Props) {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Card className="h-full">
                <div className="mb-4 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
                  <User className="h-8 w-8 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-heading font-semibold text-center text-slate-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-center text-sm text-accent">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
