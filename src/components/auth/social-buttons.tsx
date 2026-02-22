import { FacebookIcon, GoogleIcon, LinkedInIcon } from "./icons";

export function SocialButtons() {
  return (
    <>
      {/* Divider */}
      <div className="my-5 flex items-center gap-3 text-[0.75rem] text-[rgba(245,240,232,0.2)]">
        <div className="h-px flex-1 bg-[rgba(212,168,67,0.2)]" />
        <span>hoặc tiếp tục với</span>
        <div className="h-px flex-1 bg-[rgba(212,168,67,0.2)]" />
      </div>

      {/* Social buttons */}
      <div className="flex flex-col gap-2">
        <button className="flex items-center justify-center gap-2.5 rounded-[10px] border-[1.5px] border-[rgba(212,168,67,0.2)] bg-[rgba(15,27,61,0.5)] px-4 py-2.5 text-[0.85rem] font-medium text-[rgba(245,240,232,0.45)] transition-all hover:-translate-y-px hover:border-[hsl(var(--gold))] hover:bg-[rgba(212,168,67,0.12)] hover:text-[hsl(var(--white))] hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
          <GoogleIcon />
          <span className="flex-1 text-center">Tiếp tục với Google</span>
        </button>
        <button className="flex items-center justify-center gap-2.5 rounded-[10px] border-[1.5px] border-[rgba(212,168,67,0.2)] bg-[rgba(15,27,61,0.5)] px-4 py-2.5 text-[0.85rem] font-medium text-[rgba(245,240,232,0.45)] transition-all hover:-translate-y-px hover:border-[hsl(var(--gold))] hover:bg-[rgba(212,168,67,0.12)] hover:text-[hsl(var(--white))] hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
          <LinkedInIcon />
          <span className="flex-1 text-center">Tiếp tục với LinkedIn</span>
        </button>
        <button className="flex items-center justify-center gap-2.5 rounded-[10px] border-[1.5px] border-[rgba(212,168,67,0.2)] bg-[rgba(15,27,61,0.5)] px-4 py-2.5 text-[0.85rem] font-medium text-[rgba(245,240,232,0.45)] transition-all hover:-translate-y-px hover:border-[hsl(var(--gold))] hover:bg-[rgba(212,168,67,0.12)] hover:text-[hsl(var(--white))] hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
          <FacebookIcon />
          <span className="flex-1 text-center">Tiếp tục với Facebook</span>
        </button>
      </div>
    </>
  );
}
