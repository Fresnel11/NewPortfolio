import { useEffect } from "react";
import { CheckCircle2, XCircle, X } from "lucide-react";

interface ToastProps {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}

export const Toast = ({ type, message, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 inset-x-0 z-[100] flex justify-center px-4 animate-fade-in-up pointer-events-none">
      <div
        className={`
          pointer-events-auto
          flex items-center gap-3 px-5 py-4 rounded-2xl w-full max-w-sm
          backdrop-blur-xl border shadow-[0_8px_32px_hsl(222_47%_4%/0.7)]
          ${type === "success"
            ? "bg-green-500/10 border-green-500/30 text-green-300"
            : "bg-red-500/10 border-red-500/30 text-red-300"
          }
        `}
      >
        {type === "success"
          ? <CheckCircle2 className="w-5 h-5 shrink-0" />
          : <XCircle className="w-5 h-5 shrink-0" />
        }
        <span className="text-sm font-medium flex-1">{message}</span>
        <button
          onClick={onClose}
          className="shrink-0 opacity-60 hover:opacity-100 transition-opacity ml-2"
          aria-label="Fermer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
