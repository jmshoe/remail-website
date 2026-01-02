interface AuthorBioProps {
  name: string
  role?: string
  variant?: 'inline' | 'card'
}

const authorGradients: Record<string, string> = {
  'David Thompson': 'from-blue-500 to-blue-700',
  'Sarah Martinez': 'from-emerald-500 to-emerald-700',
  'Marcus Chen': 'from-violet-500 to-violet-700',
  'REmail Team': 'from-primary to-primary/80',
}

export function AuthorBio({ name, role, variant = 'inline' }: AuthorBioProps) {
  const initials = name.split(' ').map(n => n[0]).join('')
  const gradient = authorGradients[name] || 'from-slate-600 to-slate-800'

  if (variant === 'card') {
    return (
      <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
        <div className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-lg font-semibold text-white`}>
          {initials}
        </div>
        <div>
          <p className="font-semibold text-slate-900">{name}</p>
          {role && <p className="text-sm text-slate-600">{role}</p>}
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-sm font-semibold text-white`}>
        {initials}
      </div>
      <div>
        <p className="font-medium text-slate-900">{name}</p>
        {role && <p className="text-sm text-slate-500">{role}</p>}
      </div>
    </div>
  )
}
