import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '../data/projects';
import { Badge } from './ui/badge';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/portfolio/${project.id}`}
        className="group block bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all hover:shadow-xl"
      >
        <div className="aspect-[297/210] overflow-hidden bg-gray-100 dark:bg-slate-700">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <Badge variant="secondary" className="mb-3">
            {project.categoryLabel}
          </Badge>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium">
            Lihat Studi Kasus
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}