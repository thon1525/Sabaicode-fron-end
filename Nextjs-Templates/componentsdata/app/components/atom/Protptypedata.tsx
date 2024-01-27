import React from "react";

interface protptypedataProps {
  children: React.ReactNode;
  ClassName?: string;
}

const Panel: React.FC<protptypedataProps> = ({ children,ClassName }) => (
  <div className={ClassName}>{children}</div>
);

export { Panel };
