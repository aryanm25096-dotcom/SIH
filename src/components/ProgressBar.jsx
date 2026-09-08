import './ProgressBar.css';

/**
 * Progress bar showing completion percentage.
 * @param {{ current: number, total: number, label?: string }} props
 */
export default function ProgressBar({ current, total, label }) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="progress-container" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={label || `Progress: ${pct}%`}>
      <div className="progress-header">
        <span className="progress-label">{label || 'Health history'}</span>
        <span className="progress-pct">{pct}% complete</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
