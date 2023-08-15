import { cn } from "@/lib/utils"
import * as React from "react"

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("flex flex-col gap-2", className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Stack.displayName = "Stack";

export { Stack }
