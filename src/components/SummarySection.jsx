import { useState } from 'react';
import { Edit2, Check, X } from 'lucide-react';
import './SummarySection.css';

/**
 * SummarySection component:
 * Renders an individual clinical history section with an inline edit affordance.
 * Displays the required persistent label: "AI-generated draft — physician verification required"
 */
export default function SummarySection({
  title,
  content,
  onSave,
  sectionKey,
  isDoctorView = false,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(() => {
    if (typeof content === 'string') return content;
    if (Array.isArray(content)) return content.join('\n');
    if (typeof content === 'object' && content !== null) {
      return Object.entries(content)
        .map(([k, v]) => `${k}: ${typeof v === 'object' ? v.answer || JSON.stringify(v) : v}`)
        .join('\n');
    }
    return '';
  });

  const handleSave = () => {
    onSave?.(sectionKey, editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const renderContent = () => {
    if (!content || (Array.isArray(content) && content.length === 0)) {
      return <p className="section-empty-text">No significant history reported.</p>;
    }

    if (Array.isArray(content)) {
      return (
        <ul className="section-list">
          {content.map((item, idx) => (
            <li key={idx} className="section-list-item">{item}</li>
          ))}
        </ul>
      );
    }

    if (typeof content === 'object' && content !== null) {
      return (
        <div className="section-dict">
          {Object.entries(content).map(([k, v], idx) => (
            <div key={idx} className="section-dict-row">
              <span className="dict-key">{v.term ? `${v.term} (${k})` : k}:</span>
              <span className="dict-val">{typeof v === 'object' ? v.answer : v}</span>
            </div>
          ))}
        </div>
      );
    }

    return <p className="section-text">{content}</p>;
  };

  return (
    <section className="summary-section" aria-labelledby={`sec-${sectionKey}`}>
      <div className="summary-section-header">
        <h3 id={`sec-${sectionKey}`} className="summary-section-title">
          {title}
        </h3>
        {isDoctorView && (
          <div className="section-edit-affordance">
            {!isEditing ? (
              <button
                type="button"
                className="section-edit-btn"
                onClick={() => setIsEditing(true)}
                aria-label={`Edit ${title}`}
              >
                <Edit2 size={16} aria-hidden="true" />
                <span>Edit</span>
              </button>
            ) : (
              <div className="section-edit-actions">
                <button
                  type="button"
                  className="section-save-btn"
                  onClick={handleSave}
                  aria-label="Save changes"
                >
                  <Check size={16} aria-hidden="true" />
                  <span>Save</span>
                </button>
                <button
                  type="button"
                  className="section-cancel-btn"
                  onClick={handleCancel}
                  aria-label="Cancel editing"
                >
                  <X size={16} aria-hidden="true" />
                  <span>Cancel</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="summary-section-body">
        {isEditing ? (
          <textarea
            className="section-edit-textarea"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            rows={4}
            aria-label={`Edit content for ${title}`}
          />
        ) : (
          renderContent()
        )}
      </div>

      {isDoctorView && (
        <div className="summary-section-footer">
          <span className="ai-verification-badge">
            AI-generated draft — physician verification required
          </span>
        </div>
      )}
    </section>
  );
}
