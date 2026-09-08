import { CheckCircle2, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import './StatusBadge.css';

/**
 * StatusBadge ensures status is NEVER conveyed by color alone.
 * Always renders icon + text label + colored background.
 */
export default function StatusBadge({ status = 'info', label, icon: CustomIcon }) {
  const getIcon = () => {
    if (CustomIcon) return <CustomIcon size={16} aria-hidden="true" />;
    switch (status) {
      case 'success':
        return <CheckCircle2 size={16} aria-hidden="true" />;
      case 'warning':
        return <AlertTriangle size={16} aria-hidden="true" />;
      case 'critical':
        return <AlertCircle size={16} aria-hidden="true" />;
      case 'info':
      default:
        return <Info size={16} aria-hidden="true" />;
    }
  };

  return (
    <span className={`status-badge status-badge--${status}`} role="status">
      <span className="status-badge-icon">{getIcon()}</span>
      <span className="status-badge-label">{label}</span>
    </span>
  );
}
