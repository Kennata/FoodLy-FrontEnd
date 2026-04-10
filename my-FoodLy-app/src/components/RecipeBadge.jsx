export const RecipeBadge = ({ icon: Icon, text, colorClass = "text-secondary" }) => (
  <div className="d-flex align-items-center gap-2">
    <Icon className={colorClass} size={16} />
    <span>{text}</span>
  </div>
);