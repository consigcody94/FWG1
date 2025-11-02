import Link from "next/link";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

// Callout box component for rich text
export const Callout = (props: any) => {
  const typeStyles = {
    info: "bg-blue-50 border-blue-500 text-blue-900",
    warning: "bg-yellow-50 border-yellow-500 text-yellow-900",
    success: "bg-green-50 border-green-500 text-green-900",
    error: "bg-red-50 border-red-500 text-red-900",
  };

  const iconStyles = {
    info: "ℹ️",
    warning: "⚠️",
    success: "✓",
    error: "✗",
  };

  const type = props.type || "info";
  const styleClass = typeStyles[type as keyof typeof typeStyles] || typeStyles.info;
  const icon = iconStyles[type as keyof typeof iconStyles] || iconStyles.info;

  return (
    <div className={`my-6 border-l-4 p-6 rounded-r-lg ${styleClass}`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{icon}</span>
        <div className="flex-1">
          {props.title && (
            <h4 className="font-bold text-lg mb-2">{props.title}</h4>
          )}
          <div className="prose prose-sm max-w-none">
            <TinaMarkdown content={props.content} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Button component for rich text
export const Button = (props: any) => {
  const styleClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  const style = props.style || "primary";
  const styleClass = styleClasses[style as keyof typeof styleClasses] || styleClasses.primary;

  return (
    <Link
      href={props.url || "#"}
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition ${styleClass}`}
    >
      {props.text || "Click Here"}
    </Link>
  );
};

// Export all components for TinaMarkdown
export const components = {
  Callout,
  Button,
};
