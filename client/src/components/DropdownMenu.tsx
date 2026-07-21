import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown, ChevronRight } from "lucide-react";
import { NavItem, SubMenuItem } from "@/const/navigation";

interface DropdownMenuProps {
  item: NavItem;
  isActive: boolean;
}

export default function DropdownMenu({ item, isActive }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredSubmenu, setHoveredSubmenu] = useState<SubMenuItem | null>(null);
  const isCurriculum = item.path === "/curriculum";

  if (!item.submenu || item.submenu.length === 0) {
    return (
      <Link href={item.path}>
        <span
          className={`px-3 xl:px-4 py-2 text-sm xl:text-[15px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
            isActive
              ? "text-primary bg-primary/5 font-semibold"
              : "text-foreground/80 hover:text-primary hover:bg-muted/50"
          }`}
        >
          {item.name}
        </span>
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setHoveredSubmenu(null);
      }}
    >
      <Link href={item.path}>
        <button
          className={`px-3 xl:px-4 py-2 text-sm xl:text-[15px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1 ${
            isActive
              ? "text-primary bg-primary/5 font-semibold"
              : "text-foreground/80 hover:text-primary hover:bg-muted/50"
          }`}
        >
          {item.name}
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </Link>

      <div
        className={`absolute left-0 top-full bg-white border border-slate-200 shadow-md overflow-visible z-50 transition-all duration-150 origin-top ${
          isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"
        }`}
        style={{ width: isCurriculum ? "220px" : "200px" }}
      >
        {item.submenu.map((subitem) => (
          <div
            key={subitem.path}
            onMouseEnter={() => setHoveredSubmenu(subitem)}
            className="relative"
          >
            <Link href={subitem.path}>
              <div className="h-12 px-5 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer border-b border-slate-100 last:border-b-0">
                <span className="text-sm font-bold text-slate-800 whitespace-nowrap">
                  {subitem.name}
                </span>
                {subitem.children && (
                  <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </div>
            </Link>

            {hoveredSubmenu?.path === subitem.path &&
              subitem.children && (
                <div
                  className="absolute left-full top-0 bg-white border border-slate-200 shadow-md z-50"
                  style={{ width: "220px" }}
                >
                  {subitem.children.map((child) => (
                    <Link key={child.path} href={child.path}>
                      <div className="h-12 px-5 flex items-center hover:bg-slate-50 transition-colors cursor-pointer border-b border-slate-100 last:border-b-0">
                        <span className="text-sm font-bold text-slate-800 whitespace-nowrap">
                          {child.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}