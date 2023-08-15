import { cn } from "@/lib/utils"
import * as React from "react"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("max-w-screen-lg px-4 mx-auto", className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Container.displayName = "Container";

export { Container }
