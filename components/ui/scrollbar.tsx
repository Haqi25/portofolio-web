'use client';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

type CustomScrollbarProps = {
  children: React.ReactNode;
};

export default function CustomScrollbar({ children }: CustomScrollbarProps) {
  return (
    <OverlayScrollbarsComponent
      options={{
        scrollbars: {
          theme: "os-theme-dark",
          autoHide: "scroll",
        },
      }}
      style={{ height: "300px", width: "100%" }}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
}
