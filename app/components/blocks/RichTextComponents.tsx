import Link from "next/link";
import { PortableText } from "@portabletext/react";

// Callout box component for Sanity PortableText
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

  const type = props.value?.type || "info";
  const title = props.value?.title;
  const content = props.value?.content;

  const styleClass = typeStyles[type as keyof typeof typeStyles] || typeStyles.info;
  const icon = iconStyles[type as keyof typeof iconStyles] || iconStyles.info;

  return (
    <div className={`my-6 border-l-4 p-6 rounded-r-lg ${styleClass}`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{icon}</span>
        <div className="flex-1">
          {title && (
            <h4 className="font-bold text-lg mb-2">{title}</h4>
          )}
          <div className="prose prose-sm max-w-none">
            {content && <PortableText value={content} />}
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

// Button component for Sanity PortableText
export const Button = (props: any) => {
  const styleClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  const style = props.value?.style || "primary";
  const url = props.value?.url || "#";
  const text = props.value?.text || "Click Here";

  const styleClass = styleClasses[style as keyof typeof styleClasses] || styleClasses.primary;

  return (
    <Link
      href={url}
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition ${styleClass}`}
    >
      {text}
    </Link>
  );
};

// Export all components for PortableText
// Use in PortableText like: <PortableText value={content} components={portableTextComponents} />
export const portableTextComponents = {
  types: {
    callout: Callout,
    button: Button,
  },
};
