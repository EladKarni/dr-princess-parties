import { FC, ReactNode } from "react";

interface LinktreeContainerProps {
  children: ReactNode;
}

const LinktreeContainer: FC<LinktreeContainerProps> = ({ children }) => {
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md space-y-8">
        {children}
      </div>
    </div>
  );
};

export default LinktreeContainer;
