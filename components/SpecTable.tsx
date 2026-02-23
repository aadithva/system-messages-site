interface Column {
  header: string;
  key: string;
  width?: string;
}

interface SpecTableProps {
  columns: Column[];
  rows: Record<string, React.ReactNode>[];
  caption?: string;
}

export default function SpecTable({ columns, rows, caption }: SpecTableProps) {
  return (
    <div className="mb-6 overflow-x-auto rounded border border-[var(--learn-border)]">
      <table className="w-full text-sm border-collapse">
        {caption && (
          <caption className="text-left text-xs text-[var(--fluent-fg4)] px-4 py-2 bg-[var(--fluent-bg4)]">
            {caption}
          </caption>
        )}
        <thead>
          <tr style={{ backgroundColor: "var(--learn-table-header-bg)" }}>
            {columns.map((col) => (
              <th
                key={col.key}
                className="text-left px-4 py-2.5 font-semibold text-[var(--fluent-fg1)] text-[13px] border-b border-[var(--learn-border)]"
                style={{ width: col.width }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              style={{
                backgroundColor:
                  i % 2 === 1 ? "var(--learn-table-stripe)" : "transparent",
              }}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="px-4 py-2.5 text-[13px] text-[var(--fluent-fg1)] border-b border-[var(--learn-border)] align-top leading-relaxed"
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
